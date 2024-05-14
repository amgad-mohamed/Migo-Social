import { SyncOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context";
import axios from "axios";

const UserRoute = ({ children }) => {
  const { state, setState } = useContext(UserContext);
  const [ok, setOk] = useState();
  const router = useRouter();
  const url = `${process.env.NEXT_PUBLIC_API_URL}`;
  window.location &&
    state.token === null &&
    state.user === null &&
    setTimeout(() => {
      getCurrentUser();
    }, 1000);
  const getCurrentUser = async () => {
    try {
      const { data } = await axios.get(`/current-user`);
      setOk(data.ok);
    } catch (err) {
      setOk(false);
      router.push("/login");
    }
  };
  useEffect(() => {
    if (state.token) getCurrentUser();
  }, [state.token]);

  return !ok ? (
    <SyncOutlined
      spin
      className="d-flex justify-content-center display-1 text-primary p-5"
    ></SyncOutlined>
  ) : (
    children
  );
};

export default UserRoute;
