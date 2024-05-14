import Link from "next/link";
import Cookies from "js-cookie";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context";
import { useRouter } from "next/router";

const Nav = () => {
  const { state, setState } = useContext(UserContext);
  const [current, setCurrent] = useState("");
  useEffect(() => {
    const handleRouteChange = () => {
      setCurrent(window.location.pathname);
    };
    handleRouteChange();
    window.addEventListener("popstate", handleRouteChange);
    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);
  const router = useRouter();

  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("user");
    setState({ user: null, token: null });
    router.push("/login");
  };
  const isAuthenticated = !!state.token;
  return (
    <div>
      <ul className="nav container justify-content-between  my-3 gap-3 ">
        <li>
          <Link href="/" className="text-decoration-none">
            <img src="/images/logo.png" alt="logo" className="logo" />
          </Link>
        </li>
        {!isAuthenticated ? (
          <div className="d-flex align-items-center gap-4">
            <Link href="login" className="text-decoration-none nav-item-btn">
              <li>Login</li>
            </Link>
            <Link href="register" className="text-decoration-none nav-item-btn">
              <li>Register</li>
            </Link>{" "}
          </div>
        ) : (
          <div className="d-flex align-items-center gap-4">
            <li className="user-name">
              <Link className="text-decoration-none" href="/user/dashboard">
                Welcome {state.user.name}
              </Link>
            </li>
            <li onClick={logout} className="text-decoration-none nav-item-btn">
              Logout
            </li>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Nav;
