import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import "./header.css";
import { Controls, Player } from "@lottiefiles/react-lottie-player";

const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="my-[3%] mx-[3%] p-[3%] bg-white rounded-[10px] flex justify-between items-center">
      <div className="text-3xl font-light flex items-center">
        <span className=" inline-block">
          <Player
            className="h-[45px] "
            autoplay
            loop
            src="/welcome.json"
          ></Player>
        </span>
        <span className="font-semibold text-blue-900">
          {user?.displayName ? user.displayName : "User"}
        </span>
      </div>
      <div>
        {/* <iframe src="https://embed.lottiefiles.com/animation/69160"></iframe> */}
        <span className=" inline-block">
          <Player className="h-[75px]" autoplay loop src="/hello.json"></Player>
        </span>
      </div>
    </div>
  );
};

export default Header;
