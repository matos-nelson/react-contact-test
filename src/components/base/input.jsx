import React from "react";

const Input = React.forwardRef(
  (
    {
      autoFocus,
      disabled,
      invalid,
      name,
      value,
      error,
      onChange,
      type,
      placeholder,
      rows,
      className,
    },
    ref
  ) => {
    const style = !className ? "form-control" : "form-control " + className;
    return type !== "textarea" ? (
      <React.Fragment>
        <input
          ref={ref}
          autoFocus={autoFocus}
          disabled={disabled}
          invalid={invalid}
          name={name}
          value={value}
          id={name}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          className={error ? "is-invalid " + style : style}
        />
        {error && <div className="invalid-feedback">{error}</div>}
      </React.Fragment>
    ) : (
      <React.Fragment>
        <textarea
          autoFocus={autoFocus}
          invalid={invalid}
          name={name}
          value={value}
          id={name}
          onChange={onChange}
          type={type}
          rows={rows || 9}
          placeholder={placeholder}
          className={error ? "is-invalid form-control" : "form-control"}
        />
        {error && <div className="invalid-feedback">{error}</div>}
      </React.Fragment>
    );
  }
);

export default Input;
