import React, { useEffect } from "react";

const Home = ({ navBar, setNavBar }) => {
  useEffect(() => {
    setNavBar([1, 0, 0, 0, 0, 0]);
  });
  return <div>Home</div>;
};

export default Home;
