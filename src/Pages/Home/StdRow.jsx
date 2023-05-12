import { Button } from "@mui/material";
import React, { useState } from "react";

const StdRow = ({ std, setStdArr }) => {
  const { std_id, std_name } = std;

  const [check, setCheck] = useState(true);

  const handleCheck = (value, id) => {
    setCheck(!check);

    if (value == "true") {
      setStdArr((prev) => [...prev, id]);
    } else if (value == "false") {
      setStdArr((prev) => prev.filter((std) => std !== id));
    }
  };

  return (
    <tr className="w-full text-center border border-gray-500 ">
      <td className="py-5">{std_id ? std_id : ""}</td>
      <td>{std_name ? std_name : ""}</td>
      <td>
        <label>
          <input
            className="checkbox"
            type="checkbox"
            onChange={(e) => {
              handleCheck(e.target.value, std_id);
            }}
            value={check}
          />
        </label>
      </td>
      <td>
        {check ? (
          <span
            className="font-semibold px-6  py-3 bg-red-100 rounded"
            color="error"
          >
            Absent
          </span>
        ) : (
          <span
            className="font-semibold px-6  py-3 bg-green-100 rounded"
            color="success"
          >
            Present
          </span>
        )}
      </td>
    </tr>
  );
};

export default StdRow;