import React, { useContext } from "react";
import Battery from "../../assets/Battery";
import CellularConnection from "../../assets/CellularConnection";
import Wifi from "../../assets/Wifi";
import { AppContext } from "../../hook/useApp";
const Header = () => {
  const { isOpenMenu } = useContext(AppContext);
  const now = new Date();

  // Get the current hour and minute
  const hours = now.getHours();
  const minutes = now.getMinutes();

  // Format the time as "HH:MM"
  const formattedTime = `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;

  return (
    <div className="header">
      <div className="time" style={{ color: isOpenMenu ? "white" : "black" }}>
        {formattedTime}
      </div>
      <div className="battery">
        <CellularConnection color={isOpenMenu ? "white" : "black"} />
        <Wifi color={isOpenMenu ? "white" : "black"} />
        <Battery color={isOpenMenu ? "white" : "black"} />
      </div>
    </div>
  );
};

export default Header;
