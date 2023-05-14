import React from "react";

const DisplayAttendStudents = ({ std }) => {
  const { std_id, std_name } = std;
  return (
    <div className="flex justify-around text-lg font-semibold text-blue-900 bg-gray-200 p-5 my-3 rounded-[10px]">
      <p>{std_name}</p>
      <p>{std_id}</p>
    </div>
  );
};

export default DisplayAttendStudents;
