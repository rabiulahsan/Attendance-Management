import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import LeftSideNavbar from "../Shared/LeftSideNavbar/LeftSideNavbar";
import SingleClassDetails from "./SingleClassDetails";
import RightSideNavSingleClass from "./RightSideNavSingleClass";

const SingleClass = () => {
  const classData = useLoaderData();
  const id = useParams().id;
  return (
    <div className="flex w-full">
      <div className="w-1/5 ">
        <LeftSideNavbar></LeftSideNavbar>
      </div>
      <div className="w-3/5 bg-[#ebeaf8]">
        <div className="">
          <SingleClassDetails></SingleClassDetails>
        </div>
        <div className=""></div>
      </div>
      <div className="w-1/5 ">
        <RightSideNavSingleClass></RightSideNavSingleClass>
      </div>
    </div>
  );
};

export default SingleClass;
