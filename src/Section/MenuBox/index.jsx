import React, { useContext } from "react";
import "./menubox.css";
import { assets } from "../../assets";
import { AppContext } from "../../hook/useApp";
import Close from "../../assets/Close";
import Location from "../../assets/Location";
const MenuBox = () => {
  const { weatherData, isOpenMenu, setIsOpenMenu } = useContext(AppContext);

  return (
    <div
      style={{
        backgroundImage: `url(${assets.img.background})`,
        display: isOpenMenu ? "flex" : "none",
      }}
      className="menuwrapper"
    >
      <div
        style={{
          marginTop: "50px",
          zIndex: 10,
          position: "relative",
        }}
        className="search-bar"
      >
        <div style={{ cursor: "pointer" }} onClick={() => setIsOpenMenu(false)}>
          <Close />
        </div>
        <div className="red">LIVE</div>
      </div>

      <div className="boxdetail">
        <div className="location">
          <Location />
          CURRENT LOCATION
        </div>
        <div className="city">
          {" "}
          {weatherData?.location?.name}, {weatherData?.location?.region}
        </div>
      </div>
    </div>
  );
};

export default MenuBox;
