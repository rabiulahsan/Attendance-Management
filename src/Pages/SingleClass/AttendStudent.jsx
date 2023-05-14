import React from "react";
import DisplayAttendStudents from "./DisplayAttendStudents";

const AttendStudent = ({ stds, id }) => {
  const filteredStds = stds.filter((filteredStd) => filteredStd.std_id == id);
  console.log(filteredStds);
  return (
    <div>
      {filteredStds.map((std) => (
        <DisplayAttendStudents
          key={id}
          std={std}
          id={id}
        ></DisplayAttendStudents>
      ))}
    </div>
  );
};

export default AttendStudent;
