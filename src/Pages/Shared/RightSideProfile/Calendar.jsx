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

  const dateInFormat = value.format("DD-MM-YYYY");
  console.log(dateInFormat);

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DateCalendar", "DateCalendar"]}>
          <DemoItem label="Calendar">
            <DateCalendar
              value={value}
              onChange={(newValue) => setValue(newValue)}
              disableFuture={true}
            />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>
      {dateInFormat}
    </div>
  );
};

export default Calendar;
