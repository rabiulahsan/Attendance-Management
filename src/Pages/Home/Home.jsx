import React, { useEffect, useState } from "react";
import StdRow from "./StdRow";
import { Button } from "@mui/material";
import LeftSideNavbar from "../Shared/LeftSideNavbar/LeftSideNavbar";
import RightSideProfile from "../Shared/RightSideProfile/RightSideProfile";

const Home = () => {
  //   const [classes, setClasses] = useState([]);

  //   useEffect(() => {
  //     fetch("/classes.json")
  //       .then((res) => res.json())
  //       .then((data) => setClasses(data));
  //   }, []);
  return (
    <div>
      <div className="flex w-full">
        <div className="w-1/5">
          <LeftSideNavbar></LeftSideNavbar>
        </div>
        <div className="w-3/5">02</div>
        <div className="w-1/5 ">
          <RightSideProfile></RightSideProfile>
        </div>
      </div>
    </div>
  );
};
export default Home;

// const [stds, setStds] = useState([]);
// const [stdArr, setStdArr] = useState([]);
// const [submitted, setSubmitted] = useState(false);

// useEffect(() => {
//   fetch("/students.json")
//     .then((res) => res.json())
//     .then((data) => setStds(data));
// }, []);

// const handleSubmitAttendance = () => {
//   console.log(stdArr);
//   setSubmitted(true);
// };
// return (
//   <div>
//     <p className="font-bold"> Hello World</p>
//     <p>{stds.length}</p>

//     <table className="table-fixed w-3/5 border border-gray-500">
//       {/* head */}
//       <thead>
//         <tr>
//           <th className="py-5">ID</th>
//           <th>Name</th>
//           <th>Attendance</th>
//           <th>P/A</th>
//         </tr>
//       </thead>
//       <tbody>
//         {stds.map((std) => (
//           <StdRow key={std.std_id} std={std} setStdArr={setStdArr}></StdRow>
//         ))}
//       </tbody>
//     </table>
//     {submitted ? (
//       <Button disabled onClick={handleSubmitAttendance} variant="contained">
//         Submit
//       </Button>
//     ) : (
//       <Button onClick={handleSubmitAttendance} variant="contained">
//         Submit
//       </Button>
//     )}
//   </div>
// );