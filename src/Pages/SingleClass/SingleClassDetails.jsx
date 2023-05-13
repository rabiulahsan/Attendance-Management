import React from "react";
import dayjs from "dayjs";

const SingleClassDetails = ({ classData }) => {
  const { batch, semester, subjCode, totalStudents, subject } = classData;
  const dateValue = dayjs();
  const formattedDate = dateValue.format("h:mm A");
  return (
    <div className="my-[3%] mx-[3%] p-[5%] bg-white rounded-[10px] flex justify-between items-center">
      <div className="text-blue-900">
        <p className="">
          <span className="font-semibold">Course:</span>
          {"    " + subject}
        </p>
        <p className="my-3">
          <span className="font-semibold">Code:</span>
          {"    " + subjCode}
        </p>
        <p className="">
          <span className="font-semibold">Semester:</span>
          {" " + semester}
        </p>
        <p className="my-3">
          <span className="font-semibold">Total Students:</span>
          {"    " + totalStudents}
        </p>
      </div>
      <div className="text-blue-900 font-semibold text-3xl">
        <p>{"    " + formattedDate}</p>
      </div>
    </div>
  );
};

export default SingleClassDetails;
