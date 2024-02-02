import React, { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
const LogInLayout = () => {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();
  if (user) {
    navigate("/home");
  } else {
    navigate("/login");
  }
  return (
    <>
      <Outlet></Outlet>
    </>
  );
};

export default LogInLayout;
