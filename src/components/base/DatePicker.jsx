import React from "react";
import ReactDatePicker from "react-datepicker";

const DatePicker = React.forwardRef(
  (
    { autoFocus, name, value, error, onChange, type, placeholder, className },
    ref
  ) => {
    const style = !className ? "form-control" : "form-control " + className;
    return (
      <React.Fragment>
        <ReactDatePicker
          ref={ref}
          autoFocus={autoFocus}
          name={name}
          id={name}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          selected={value}
          dateFormat="MM/dd/yyyy"
          className={style}
        />
      </React.Fragment>
    );
  }
);

export default DatePicker;
