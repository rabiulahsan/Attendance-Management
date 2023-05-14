import React, { useContext, useEffect, useState } from "react";
import StdRow from "../Home/StdRow";
import { Button } from "@mui/material";
import { DateContext } from "./SingleClass";
import { json } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import AttendStudent from "./AttendStudent";

const StdTable = () => {
  const [stds, setStds] = useState([]);
  const [stdArr, setStdArr] = useState([]);
  const [show, setShow] = useState(false);

  const { user } = useContext(AuthContext);
  const { value, id, setSubmitted, submitted, attendances } =
    useContext(DateContext);
  const dateInFormat = value.format("M-D-YYYY");

  useEffect(() => {
    fetch("http://localhost:5000/students")
      .then((res) => res.json())
      .then((data) => setStds(data));
  }, []);

  const attendIds = attendances[0]?.attendIds;
  console.log(attendIds);
  const handleResult = () => {
    setShow(!show);
  };

  const handleSubmitAttendance = () => {
    console.log(stdArr);
    // setSubmitted(true);
    console.log(dateInFormat);
    const attendanceData = {
      date: dateInFormat,
      batchCode: id,
      attendIds: stdArr,
      email: user.email,
    };
    console.log(attendanceData);

    fetch(`http://localhost:5000/home/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(attendanceData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("user updated successfully");
        }
      });
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
      <div className="flex justify-center my-5 pt-5 gap-5">
        {submitted ? (
          <Button disabled onClick={handleSubmitAttendance} variant="contained">
            Submit
          </Button>
        ) : (
          <Button onClick={handleSubmitAttendance} variant="contained">
            Submit
          </Button>
        )}
        <Button onClick={handleResult} variant="contained">
          See Attendance
        </Button>
      </div>
      {show ? (
        <div className="mt-[5%] text-center flex flex-col text-blue-900">
          <p className="font-bold text-2xl my-[4%]">Student&apos;s Id</p>

          {attendIds?.map((id) => (
            <AttendStudent key={id} id={id} stds={stds}></AttendStudent>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default StdTable;
