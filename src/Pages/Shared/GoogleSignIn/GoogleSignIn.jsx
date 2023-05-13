import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const GoogleSignIn = () => {
  const { user, googleLogin } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    if (user) {
      alert("At first logout");
      return;
    } else {
      googleLogin()
        .then((result) => {
          const user = result.user;
          console.log(user);
          navigate("/home");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  return (
    <div
      className=" border border-blue-500 flex text-center text-white cursor-pointer font-semibold"
      onClick={handleGoogleSignIn}
    >
      <span className="text-2xl p-2">
        <FcGoogle></FcGoogle>
      </span>
      <span className="bg-blue-500 w-full p-2 hover:bg-blue-600">
        Sign in With Google
      </span>
    </div>
  );
};

export default GoogleSignIn;
