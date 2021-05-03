import React from "react";
import PropTypes from "prop-types";

import { TextField } from "@material-ui/core";
import { useField } from "formik";

const FormTextField = ({ placeholder, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";

  return (
    <TextField
      fullWidth
      style={{ marginBottom: "1rem" }}
      placeholder={placeholder}
      {...field}
      {...props}
      helperText={errorText}
      error={!!errorText}
    />
  );
};

FormTextField.propTypes = {
  placeholder: PropTypes.string,
};
export default FormTextField;
