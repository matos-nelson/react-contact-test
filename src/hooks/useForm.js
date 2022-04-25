import { useEffect, useState, useCallback } from "react";
import { object } from "yup";

function useForm(stateSchema, validationSchema, callback) {
  const [values, setValues] = useState(stateSchema);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setValues(stateSchema);
    setErrors({});
  }, [stateSchema]);

  const validate = useCallback(() => {
    const options = { abortEarly: false };
    const schema = object({ ...validationSchema });
    let errors = null;

    try {
      schema.validateSync(values, options);
    } catch (validationErrors) {
      errors = {};
      for (let item of validationErrors.inner) {
        errors[item.path] = item.errors[0].split('"').join("").trim();
      }
    }

    return errors;
  }, [validationSchema, values]);

  const validateProperty = useCallback(
    ({ name, value }) => {
      let error = null;
      const obj = { [name]: value };
      const schema = object({ [name]: validationSchema[name] });
      try {
        schema.validateSyncAt(name, obj);
      } catch (validationError) {
        error = validationError.errors[0].split('"').join("").trim();
      }
      return error;
    },
    [validationSchema]
  );

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setErrors(errors || {});

    if (errors) return;
    callback();
  };

  const trackOnChange = useCallback(
    ({ target }) => {
      const input = { name: target.getAttribute("name"), value: target.value };
      const data = { ...values };
      data[input.name] = input.value;

      setValues(data);
    },
    [values]
  );

  const handleOnChange = useCallback(
    ({ target }) => {
      const input = { name: target.getAttribute("name"), value: target.value };
      const validationErrors = { ...errors };
      const errorMessage = validateProperty(input);

      if (errorMessage) {
        validationErrors[input.name] = errorMessage;
      } else {
        delete validationErrors[input.name];
      }

      trackOnChange({ target });
      setErrors(validationErrors);
    },
    [errors, validateProperty, trackOnChange]
  );

  return {
    values,
    errors,
    handleOnChange,
    trackOnChange,
    handleOnSubmit,
    validateProperty,
  };
}

export default useForm;
