import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { BsFillFileEarmarkCheckFill } from "react-icons/bs";
import { AiOutlineCalendar, AiTwotoneSetting } from "react-icons/ai";
import { HiOutlineAcademicCap } from "react-icons/hi";

const LeftSideNavbar = () => {
  const { logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  return (
    <div className="bg-blue-950 h-[710px] w-full relative">
      <div className="pb-8 pt-5">
        <Link to="/home">
          <img className="h-[50px] mx-auto" src="Untitled.jpg" alt="" />
        </Link>
      </div>
      <div className=" text-white">
        <ul>
          <li className="navlink">
            <Link to="">
              <span className="flex items-center gap-2">
                <MdOutlineSpaceDashboard className="text-xl"></MdOutlineSpaceDashboard>
                Dashboard
              </span>
            </Link>
          </li>
          <li className="navlink">
            <Link to="">
              <span className="flex items-center gap-2">
                <FaBookOpen className="text-xl"></FaBookOpen>
                My Classes
              </span>
            </Link>
          </li>
          <li className="navlink">
            <Link to="">
              <span className="flex items-center gap-2">
                <HiOutlineAcademicCap className="text-xl"></HiOutlineAcademicCap>
                Courses
              </span>
            </Link>
          </li>
          <li className="navlink">
            <Link to="">
              <span className="flex items-center gap-2">
                <AiOutlineCalendar className="text-xl"></AiOutlineCalendar>
                Routine
              </span>
            </Link>
          </li>
          <li className="navlink">
            <Link to="">
              <span className="flex items-center gap-2">
                <BsFillFileEarmarkCheckFill className="text-xl"></BsFillFileEarmarkCheckFill>
                Result
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="absolute bottom-8 text-white w-full">
        <li className="bottom-link">
          <Link to="">
            <span className="flex items-center gap-x-2">
              <AiTwotoneSetting className="text-xl"></AiTwotoneSetting>
              Setting
            </span>
          </Link>
        </li>
        <li className="bottom-link" onClick={handleLogOut}>
          <Link to="/">
            <span className="flex items-center gap-x-2">
              <FiLogOut className="text-xl"></FiLogOut>
              Log Out
            </span>
          </Link>
        </li>
      </div>
    </div>
  );
};

export default LeftSideNavbar;
