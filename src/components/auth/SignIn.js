import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

class SignIn extends React.Component {
  state = {
    email: "",
    password: ""
  };

  validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid Email !!")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be above 6 characters")
      .required("Password is required")
  });

  handleSubmit = async (
    values,
    { setSubmitting, setErrors, setStatus, resetForm }
  ) => {
    //console.log(values);
    try {
      //await auth.passwordUpdate(values.oldPassword, values.passwordOne)
      await this.setState({ email: values.email, password: values.password });
      resetForm();
      setStatus({ success: true });
    } catch (error) {
      setStatus({ success: false });
      setSubmitting(false);
      setErrors({ submit: error.message });
    }
  };
  render() {
    //console.log("this.state", this.state);
    return (
      <div className="container">
        <Formik
          initialValues={this.state}
          onSubmit={this.handleSubmit}
          validationSchema={this.validationSchema}
          enableReinitialize
        >
          {({
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset
          }) => (
            <Form className="white form">
              <h5 className="grey-text text-darken-3">Sign In</h5>
              <Field
                type="email"
                id="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={values.email}
                className="input-field"
              />
              <ErrorMessage name="email" />
              <Field
                type="password"
                id="password"
                placeholder="Password"
                onChange={handleChange}
                name="password"
                value={values.password}
                className="input-field"
              />
              <ErrorMessage name="password" />
              <div className="input-field">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn #EE6E73 lighten-1 z-depth-0"
                >
                  Login
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}
export default SignIn;
