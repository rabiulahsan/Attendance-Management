import React, { useContext, useEffect, useState } from "react";
import StdRow from "../Home/StdRow";
import { Button } from "@mui/material";
import { DateContext } from "./SingleClass";
import { json } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import AttendStudent from "./AttendStudent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StdTable = () => {
  const [stds, setStds] = useState([]);
  const [stdArr, setStdArr] = useState([]);
  const [show, setShow] = useState(false);

  const { user } = useContext(AuthContext);
  const { value, id, setSubmitted, submitted, attendances } =
    useContext(DateContext);
  const dateInFormat = value.format("M-D-YYYY");

  useEffect(() => {
    fetch("https://attendance-server-six.vercel.app/students")
      .then((res) => res.json())
      .then((data) => setStds(data));
  }, []);

  const attendIds = attendances[0]?.attendIds;
  console.log(attendIds);
  const handleResult = () => {
    setShow(!show);
  };

  const submitNotify = () =>
    toast.success("Attendance Submitted", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const updateNotify = () =>
    toast.success("Updated Successfully", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

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

    fetch(`https://attendance-server-six.vercel.app/home/${id}`, {
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
          updateNotify();
        } else if (data.upsertedCount > 0) {
          submitNotify();
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

          {attendIds ? (
            <p className="my-3 font-semibold text-lg">
              Total Students: {attendIds?.length}
            </p>
          ) : (
            <p className="my-3 font-semibold text-lg">No student to show</p>
          )}

          {attendIds?.map((id) => (
            <AttendStudent key={id} id={id} stds={stds}></AttendStudent>
          ))}
        </div>
      ) : (
        ""
      )}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default StdTable;
