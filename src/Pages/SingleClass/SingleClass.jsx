import React, { createContext, useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import LeftSideNavbar from "../Shared/LeftSideNavbar/LeftSideNavbar";
import SingleClassDetails from "./SingleClassDetails";
import RightSideNavSingleClass from "./RightSideNavSingleClass";
import StdTable from "./StdTable";
import dayjs from "dayjs";
import { AuthContext } from "../../Provider/AuthProvider";

export const DateContext = createContext(null);

const SingleClass = () => {
  const { user } = useContext(AuthContext);

  const classData = useLoaderData();
  const id = useParams().id;

  const [submitted, setSubmitted] = useState(false);
  const [attendances, setAttendances] = useState([]);

  const navigate = useNavigate();
  const [value, setValue] = useState(dayjs());

  const handleDatePicker = (newValue) => {
    setValue(newValue);

    const dateInFormat = newValue.format("M-D-YYYY");
    fetch(
      `http://localhost:5000/attendances?email=${user.email}&batchId=${id}&date=${dateInFormat}`
    )
      .then((res) => res.json())
      .then((data) => setAttendances(data));

    console.log(attendances);
  };
  const dateProvide = {
    id,
    value,
    setValue,
    handleDatePicker,
    submitted,
    setSubmitted,
  };

  return (
    <DateContext.Provider value={dateProvide}>
      <div className="flex w-full">
        <div className="w-1/5 ">
          <LeftSideNavbar></LeftSideNavbar>
        </div>
        <div className="w-3/5 bg-[#ebeaf8]">
          <div className="">
            <SingleClassDetails classData={classData}></SingleClassDetails>
            <StdTable></StdTable>
          </div>
          <div className=""></div>
        </div>
        <div className="w-1/5 ">
          <RightSideNavSingleClass></RightSideNavSingleClass>
        </div>
      </div>
    </DateContext.Provider>
  );
};

export default SingleClass;
