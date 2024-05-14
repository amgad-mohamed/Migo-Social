import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../components/Nav";
import "../public/css/style.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "../context";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <ToastContainer autoClose={3000} position="top-center" />
      <Nav />
      <Component {...pageProps} />
    </UserProvider>
  );
}
