import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

class CreateProject extends React.Component {
  state = {
    title: "",
    content: ""
  };

  validationSchema = Yup.object().shape({
    title: Yup.string().required("Project Title is required"),
    content: Yup.string()
      .min(20, "Project content must be above 20 characters")
      .required("Project Content is required")
  });

  handleSubmit = async (
    values,
    { setSubmitting, setErrors, setStatus, resetForm }
  ) => {
    const { title, content } = values;
    try {
      //await auth.passwordUpdate(values.oldPassword, values.passwordOne)
      await this.setState({ title, content });
      resetForm();
      setStatus({ success: true });
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
              <ErrorMessage name="title" />
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
              <ErrorMessage name="content" />
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
export default CreateProject;
