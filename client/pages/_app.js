import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../components/Nav';
import '../public/css/style.css'; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import 'antd/dist/antd.css';
// import 'antd/dist/antd.less'; // Import less for overriding defaults
export default function App({ Component, pageProps }) {
  return (
    <>
     <ToastContainer autoClose={3000} position="top-center" />
      <Nav />
      <Component {...pageProps} />
    </>
  );
}
