import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { Modal } from "antd";
import Link from "next/link";
import AuthForm from "../components/forms/AuthForm";
const Register = () => {
  const [ok, setOk] = useState(false);
  const initialValues = {
    name: "",
    email: "",
    password: "",
    secret: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    secret: Yup.string().required("Answer is required"),
  });
  const url = `${process.env.NEXT_PUBLIC_API_URL}`;
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const { data } = await axios.post(`/register`, values);
      setOk(data.ok);
      resetForm();
    } catch (error) {
      toast.error(error.response.data);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container-fluid bg-image py-3">
      <div className="row py-3 ">
      </div>
      <div className="row pb-5">
      <div className="col-md-6 offset-md-3 bg-light rounded-2">
      <div className="col text-center register-title">
        <h1 className="">Register</h1>
      </div>
            <AuthForm
            handleSubmit={handleSubmit}
            validationSchema={validationSchema}
            initialValues={initialValues}
          />
          
      <div className="row">
      <div className="col-md-4 mx-auto bg-light text-center ">
        <p className="font-weight-bold">
          Already have an account?
          <Link href="/login"> Login</Link>
        </p>
      </div>
    </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Modal
            title="Congrats"
            open={ok}
            onCancel={() => setOk(false)}
            footer={null}
          >
            <p>You have successfully registered.</p>
            <Link href="/login">
              <button className="btn btn-primary btn-sm">Login</button>
            </Link>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Register;
