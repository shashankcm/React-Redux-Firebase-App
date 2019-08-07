import React from "react";
import { Formik, Field, Form, ErrorMessage, withFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";

class SignIn extends React.Component {
  render() {
    const { authError } = this.props;
    const { signIn } = this.props;
    const validationSchema = Yup.object().shape({
      email: Yup.string()
        .email("Invalid Email !!")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be above 6 characters")
        .required("Password is required")
    });
    return (
      <div className="container">
        <Formik
          initialValues={{
            email: "",
            password: ""
          }}
          onSubmit={(
            values,
            { setSubmitting, setErrors, setStatus, resetForm }
          ) => {
            //console.log(values);
            try {
              //await auth.passwordUpdate(values.oldPassword, values.passwordOne)
              signIn(values);
              resetForm();
              setStatus({ success: true });
            } catch (error) {
              console.log(error);
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
                  Login
                </button>
                <div className="red-text">
                  {authError ? <p>{authError.message}</p> : null}
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}
const formikEnhancer = withFormik({
  displayName: "SignIn"
})(SignIn);

const mapStateToProps = state => ({
  authError: state.auth.authError
});

const mapDispatchToProps = dispatch => {
  return {
    signIn: values => {
      dispatch(signIn(values));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(formikEnhancer);
