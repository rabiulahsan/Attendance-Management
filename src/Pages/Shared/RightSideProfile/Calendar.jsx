import React from "react";
import dayjs from "dayjs";
import "./Calendar.css";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useState } from "react";

const Calendar = () => {
  const [value, setValue] = useState(dayjs());

  const dateInFormat = value.format("	MMMM D, YYYY");
  console.log(dateInFormat);

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DateCalendar", "DateCalendar"]}>
          <DemoItem label="Calendar">
            <DateCalendar
              value={value}
              onChange={(newValue) => setValue(newValue)}
              disableFuture={false}
            />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>
      <div className="bg-white font-semibold text-center my-2 mx-[5px] py-5  rounded-[10px] text-2xl">
        {dateInFormat}
      </div>
    </div>
  );
};

export default Calendar;
