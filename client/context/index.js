import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import axios from "axios";

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [state, setState] = useState({
    user: {},
    token: "",
  });
  useEffect(() => {
    const token = Cookies.get("token");
    const userCookie = Cookies.get("user");
    if (token && userCookie) {
      try {
        const user = JSON.parse(userCookie);
        setState({ ...state, user, token });
      } catch (error) {
        console.error("Failed to parse user data:", error);
        Cookies.remove("user");
      }
    }
  }, []);
  const router = useRouter();
  const url = `${process.env.NEXT_PUBLIC_API_URL}`;
  const token = state && state.token ;
  axios.defaults.baseURL = url;
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  // axios.interceptors.response.use(
  //   (response) => response,
  //   (error) => {
  //     const originalRequest = error.config;
  //     if (
  //       error.response.status === 401 &&
  //       originalRequest.url ===
  //         `${process.env.NEXT_PUBLIC_API_URL}/current-user`
  //     ) {
  //       Cookies.remove("token");
  //       Cookies.remove("user");
  //       setState({ ...state, user: {}, token: "" });
  //       router.push("/login");
  //     }
  //     return Promise.reject(error);
  //   }
  // );
  return (
    <UserContext.Provider value={{ state, setState }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
