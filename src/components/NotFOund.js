import React, { useEffect } from "react";

const NotFOund = ({ setNavBar }) => {
  useEffect(() => {
    setNavBar([0, 0, 0, 0, 0, 0]);
  }, []);
  return <h2 className=" text-2xl font-bold">Not Found</h2>;
};

export default NotFOund;
