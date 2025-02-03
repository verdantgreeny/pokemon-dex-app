import React from "react";
import { useLocation } from "react-router-dom";

const Detail = () => {
  const location = useLocation();

  console.log("ID ===>", location.pathname.slice(8));
  return <div>Detail</div>;
};

export default Detail;