import React, { createContext, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import LeftSideNavbar from "../Shared/LeftSideNavbar/LeftSideNavbar";
import SingleClassDetails from "./SingleClassDetails";
import RightSideNavSingleClass from "./RightSideNavSingleClass";
import StdTable from "./StdTable";
import dayjs from "dayjs";

export const DateContext = createContext(null);

const SingleClass = () => {
  const classData = useLoaderData();
  const id = useParams().id;

  const [value, setValue] = useState(dayjs());

  const handleDatePicker = (newValue) => {
    setValue(newValue);
  };
  const dateProvide = {
    id,
    value,
    setValue,
    handleDatePicker,
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
