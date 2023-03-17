import React, { useEffect } from "react";

const Teams = ({ navBar, setNavBar }) => {
  useEffect(() => {
    setNavBar([0, 0, 0, 1, 0, 0]);
  });
  return <div>Teams</div>;
};

export default Teams;
