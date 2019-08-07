import React from "react";
import { Formik, Field, Form, ErrorMessage, withFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/authActions";

class SignUp extends React.Component {
  render() {
    const { signUp } = this.props;
    const validationSchema = Yup.object().shape({
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
    return (
      <div className="container">
        <Formik
          initialValues={{
            email: "",
            password: "",
            firstName: "",
            lastName: ""
          }}
          onSubmit={(
            values,
            { setSubmitting, setErrors, setStatus, resetForm }
          ) => {
            try {
              //await auth.passwordUpdate(values.oldPassword, values.passwordOne)
              signUp(values);
              resetForm();
              setStatus({ success: true });
              setSubmitting(true);
            } catch (error) {
              console.log(error, "in Signup");
              setStatus({ success: false });
              setSubmitting(false);
              setErrors({ submit: error.message });
            }
          }}
          validationSchema={validationSchema}
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
              <ErrorMessage
                name="firstName"
                render={msg => <div className="red-text">{msg}</div>}
              />
              <Field
                type="text"
                id="lastName"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={values.lastName}
                className="input-field"
              />
              <ErrorMessage
                name="lastName"
                render={msg => <div className="red-text">{msg}</div>}
              />
              <Field
                type="email"
                id="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={values.email}
                className="input-field"
              />
              <ErrorMessage
                name="email"
                render={msg => <div className="red-text">{msg}</div>}
              />
              <Field
                type="password"
                id="password"
                placeholder="Password"
                onChange={handleChange}
                name="password"
                value={values.password}
                className="input-field"
              />
              <ErrorMessage
                name="password"
                render={msg => <div className="red-text">{msg}</div>}
              />
              <div className="input-field">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn #EE6E73 lighten-1 z-depth-0"
                >
                  create
                </button>
                {/* <div className="red-text">
                  {authError && <p>{authError}</p>}
                </div> */}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}
const formikEnhancer = withFormik({
  displayName: "Signup"
})(SignUp);

const mapStateToProps = state => ({
  authError: state.auth.authError
});

const mapDispatchToProps = dispatch => {
  return {
    signUp: values => {
      dispatch(signUp(values));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(formikEnhancer);
