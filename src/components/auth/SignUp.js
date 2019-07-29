import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

class SignUp extends React.Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  };

  validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid Email !!")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be above 6 characters")
      .required("Password is required"),
    firstName: Yup.string()
      .min(3, "First Name must be above 3 characters")
      .required("First Name is required"),
    lastName: Yup.string()
      .min(3, "Last Name must be above 1 characters")
      .required("Last Name is required")
  });

  handleSubmit = async (
    values,
    { setSubmitting, setErrors, setStatus, resetForm }
  ) => {
    const { firstName, lastName, email, password } = values;
    //console.log(values);
    try {
      //await auth.passwordUpdate(values.oldPassword, values.passwordOne)
      await this.setState({ firstName, lastName, email, password });
      resetForm();
      setStatus({ success: true });
      setSubmitting(true);
    } catch (error) {
      setStatus({ success: false });
      setSubmitting(false);
      setErrors({ submit: error.message });
    }
  };
  render() {
    console.log("this.state", this.state);
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
            <Form className="white">
              <h5 className="grey-text text-darken-3">Create an Account</h5>
              <Field
                type="text"
                id="firstName"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={values.firstName}
                className="input-field"
              />
              <ErrorMessage name="firstName" />
              <Field
                type="text"
                id="lastName"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={values.lastName}
                className="input-field"
              />
              <ErrorMessage name="lastName" />
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
                  create
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}
export default SignUp;
