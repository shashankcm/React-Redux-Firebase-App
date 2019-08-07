import React from "react";
import { Formik, Field, Form, ErrorMessage, withFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";

class CreateProject extends React.Component {
  render() {
    const { createProject } = this.props;
    const validationSchema = Yup.object().shape({
      title: Yup.string().required("Project Title is required"),
      content: Yup.string()
        .min(20, "Project content must be above 20 characters")
        .required("Project Content is required")
    });
    return (
      <div className="container">
        <Formik
          initialValues={{
            title: "",
            content: ""
          }}
          onSubmit={(
            values,
            { setSubmitting, setErrors, setStatus, resetForm }
          ) => {
            try {
              createProject(values);
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
              <h5 className="grey-text text-darken-3">Create New Project</h5>
              <Field
                type="text"
                id="title"
                placeholder="Title"
                onChange={handleChange}
                name="title"
                value={values.title}
                className="input-field"
              />
              <ErrorMessage
                name="title"
                render={msg => <div className="red-text">{msg}</div>}
              />
              <Field
                component="textarea"
                id="content"
                placeholder="Project Content"
                onChange={handleChange}
                name="content"
                value={values.content}
                className="materialize-textarea"
                rows="20"
              />
              <ErrorMessage
                name="content"
                render={msg => <div className="red-text">{msg}</div>}
              />
              <div className="input-field">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn #EE6E73 lighten-1 z-depth-0"
                >
                  Create Project
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

const formikEnhancer = withFormik({
  displayName: "CreateProject"
})(CreateProject);

const mapStateToProps = state => ({
  //...
});

const mapDispatchToProps = dispatch => {
  return {
    createProject: values => {
      dispatch(createProject(values));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(formikEnhancer);
