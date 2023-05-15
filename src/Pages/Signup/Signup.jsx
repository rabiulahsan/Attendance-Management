import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import GoogleSignIn from "../Shared/GoogleSignIn/GoogleSignIn";

const Signup = () => {
  const { createUser, logOut } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        profileUpdate(result.user, name);
        navigate("/");
        logOut()
          .then()
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };

  //update user
  const profileUpdate = (loggedUser, userName) => {
    updateProfile(loggedUser, {
      displayName: userName,
    })
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex justify-center items-center bg-[#ebeaf8] h-[710px]">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/5 ">
        <form onSubmit={handleSignUp} className="">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="name"
              placeholder="Username"
            ></input>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              E-mail
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              name="email"
              placeholder="E-mail"
            ></input>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              name="password"
              placeholder="Password"
            ></input>
          </div>

          <div className="cursor-pointer text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            <input
              className="btn btn-primary cursor-pointer"
              type="submit"
              value="Signup"
            />
          </div>
        </form>
        <p className="text-center text-gray-400 my-5">or</p>
        <div className="my-5 mb-10">
          <GoogleSignIn></GoogleSignIn>
        </div>

        <p className="flex flex-col text-center text-gray-500">
          Already have an account?
          <Link to={"/"}>
            <span className="text-blue-800 font-semibold hover:underline">
              Login
            </span>
          </Link>
        </p>
      </div>
      <div className="w-1/5 bg-blue-900 mb-4 h-[567px] flex justify-center items-center text-white text-center">
        <img src="/signup.svg" alt="" />
      </div>
    </div>
  );
};

export default Signup;
