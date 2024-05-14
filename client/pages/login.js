import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import Link from "next/link";
import AuthForm from "../components/forms/AuthForm";
import { useRouter } from "next/router";
import { useContext } from "react";
import { UserContext } from "../context";
import Cookies from 'js-cookie';

const Login = () => {
  const { state, setState } = useContext(UserContext);
  const router = useRouter();
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });
  const url = `${process.env.NEXT_PUBLIC_API_URL}`;
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const { data } = await axios.post(`/login`, values);
      router.push("/");  
      setState({ ...state, user: data.user, token: data.token });
      Cookies.set("token", data.token);
      Cookies.set("user", JSON.stringify(data.user));
      resetForm();
      toast.success(`Welcome back ${data.user.name}`);
    } catch (error) {
      toast.error(error.response.data);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div className="container-fluid bg-login py-5 ">
      <div className="row py-3 mt-5">
      </div>
      <div className="row pb-5">
      <div className="col-md-6 offset-md-3 bg-light  rounded-2">
      <div className="col text-center register-title">
        <h1 className="bg-light">Login</h1>
      </div>
          <AuthForm
            handleSubmit={handleSubmit} 
            validationSchema={validationSchema}
            initialValues={initialValues}
            login={true}
          />

          <div className="row">
            <div className="col-md-4 mx-auto bg-light text-center ">
              <p className="font-weight-bold">
                Don't have an account?
                <Link href="/register" className="text-decoration-none"> Register</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
