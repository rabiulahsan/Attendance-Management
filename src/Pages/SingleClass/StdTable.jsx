import React, { useEffect, useState } from "react";
import StdRow from "../Home/StdRow";
import { Button } from "@mui/material";

const StdTable = () => {
  const [stds, setStds] = useState([]);
  const [stdArr, setStdArr] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/students")
      .then((res) => res.json())
      .then((data) => setStds(data));
  }, []);

  const handleSubmitAttendance = () => {
    console.log(stdArr);
    setSubmitted(true);
  };
  return (
    <div className="my-[3%] mx-[3%] p-[5%] bg-white rounded-[10px]">
      <table className="table-fixed w-full ">
        {/* head */}
        <thead className="border border-t-0 border-l-0 border-r-0 border-b-gray-500 bg-gray-100">
          <tr>
            <th className="py-5">ID</th>
            <th>Name</th>
            <th>Attendance</th>
            <th>P/A</th>
          </tr>
        </thead>
        <tbody>
          {stds.map((std) => (
            <StdRow key={std.std_id} std={std} setStdArr={setStdArr}></StdRow>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center my-5 pt-5">
        {submitted ? (
          <Button disabled onClick={handleSubmitAttendance} variant="contained">
            Submit
          </Button>
        ) : (
          <Button onClick={handleSubmitAttendance} variant="contained">
            Submit
          </Button>
        )}
      </div>
    </div>
  );
};

export default StdTable;
