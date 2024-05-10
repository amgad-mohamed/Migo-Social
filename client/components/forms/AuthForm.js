import { SyncOutlined } from "@ant-design/icons";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";

const AuthForm = ({ initialValues, validationSchema, handleSubmit, login }) => {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className={`"form-group p-2" ${login && "d-none"}`}>
              <small>
                <label className="text-muted">Your Name</label>
              </small>
              <Field
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter your name"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="error-message"
              />
            </div>
            <div className="form-group p-2">
              <small>
                <label className="text-muted">Your Email</label>
              </small>
              <Field
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="error-message"
              />
            </div>
            <div className="form-group p-2">
              <small>
                <label className="text-muted">Your Password</label>
              </small>
              <Field
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter your password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="error-message"
              />
            </div>
            <div className={`"form-group p-2" ${login && "d-none"}`}>
              <small>
                <label className="text-muted">Select a question</label>
              </small>
              <Field as="select" name="question" className="form-control">
                <option value="car">What is your favourite car?</option>
                <option value="color">What is your favourite color?</option>
                <option value="drink">What is your favourite drink?</option>
              </Field>
              <small className="form-text text-muted">
                You can use this to reset your password.
              </small>
            </div>
            <div className={`"form-group p-2" ${login && "d-none"}`}>
              <Field
                type="text"
                name="secret"
                className="form-control"
                placeholder="Enter your answer"
              />
              <ErrorMessage
                name="secret"
                component="div"
                className="error-message"
              />
            </div>
            <div className="form-group p-2">
              <button
                type="submit"
                className="btn btn-primary col-12"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <SyncOutlined spin className="py-1" />
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AuthForm;
