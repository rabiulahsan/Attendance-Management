import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";

const Class = ({ cls }) => {
  return (
    <div className="bg-blue-950 text-white rounded-[10px] p-5 my-5">
      <p className=" font-semibold text-lg mb-3">{cls.subject}</p>
      <div className="flex justify-between items-center my-3">
        <p>{cls.semester} Semester</p>
        <span className="text-xl cursor-pointer">
          <AiOutlineArrowRight></AiOutlineArrowRight>
        </span>
      </div>
    </div>
  );
};

export default Class;
