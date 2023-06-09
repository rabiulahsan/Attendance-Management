import React, { useContext } from "react";

// import { AuthContext } from "../../../Provider/AuthProvider";
import { FaUserAlt } from "react-icons/fa";
import CalendarForSingleClass from "./CalendarForSingleClass";
import { AuthContext } from "../../Provider/AuthProvider";

const RightSideNavSingleClass = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="bg-[#ebeaf8] h-[710px] w-full py-3 sticky top-0">
      <div className="py-[10%] text-center flex items-center justify-center flex-col bg-white rounded-[10px] mb-4 mx-[5px]">
        <div className="text-center">
          {user?.photoURL ? (
            <img className="mx-auto h-[40px]" src={user?.photoURL} />
          ) : (
            <span className="text-3xl text-blue-900">
              <FaUserAlt></FaUserAlt>
            </span>
          )}
        </div>
        <span className="text-xl font-semibold text-blue-900">
          {user?.displayName ? user.displayName : "user"}
        </span>
      </div>
      <div className="">
        <CalendarForSingleClass></CalendarForSingleClass>
      </div>
    </div>
  );
};

export default RightSideNavSingleClass;
