import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const SingleClass = () => {
  const classData = useLoaderData();
  const id = useParams().id;
  return <div>{id}</div>;
};

export default SingleClass;
