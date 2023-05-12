import React, { useEffect, useState } from "react";
import StdRow from "./StdRow";
import { Button } from "@mui/material";
import LeftSideNavbar from "../Shared/LeftSideNavbar/LeftSideNavbar";
import RightSideProfile from "../Shared/RightSideProfile/RightSideProfile";
import Header from "./Header";
import Classes from "./Classes";
import Assignment from "./Assignment";

const Home = () => {
  return (
    <>
      <div className="flex w-full">
        <div className="w-1/5 ">
          <LeftSideNavbar></LeftSideNavbar>
        </div>
        <div className="w-3/5 bg-[#ebeaf8]">
          <Header></Header>
          <div className="flex my-[3%] mx-[3%] gap-5">
            <div className="w-full">
              <Classes></Classes>
            </div>
            <div className="w-full">
              <Assignment></Assignment>
            </div>
          </div>
        </div>
        <div className="w-1/5 ">
          <RightSideProfile></RightSideProfile>
        </div>
      </div>
    </>
  );
};
export default Home;
