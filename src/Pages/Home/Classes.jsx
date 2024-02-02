import React, { useEffect, useState } from "react";
import Class from "./Class";

const Classes = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("https://attendance-server-six.vercel.app/home")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);
  console.log(classes);
  return (
    <div className="bg-white rounded-[10px]  p-4">
      <p className="text-2xl text-center font-bold text-blue-900">Classes</p>
      <div className=" ">
        {classes.map((cls) => (
          <Class key={cls._id} cls={cls}></Class>
        ))}
      </div>
    </div>
  );
};

export default Classes;
