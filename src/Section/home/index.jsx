/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useRef } from "react";
import "./home.css";
import Cloud from "../../assets/Cloud";
import { assets } from "../../assets";
import ReactEcharts from "echarts-for-react";
import Dropdown from "../../components/Dropdown";
import { AppContext } from "../../hook/useApp";
import { formatDate } from "../../utils";

const Home = () => {
  const { graphData, gloading, getWeatherData, lastFiveHourData, weatherData } =
    useContext(AppContext);

  const chartRef = useRef(null);

  const xAxis = graphData.map((item) => item.date);
  const data = graphData.map((item) => item.temp);

  const option = {
    color: ["#FF8900"],

    tooltip: {
      show: false,
    },
    legend: {
      show: false,
    },
    toolbox: {
      show: false,
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        show: false,
        data: xAxis,
        type: "category",
        boundaryGap: false,
        splitLine: {
          show: false,
          lineStyle: { color: "#E0E6F1", width: 0, type: "solid" },
        },
      },
    ],
    yAxis: { show: false },
    series: [
      {
        name: "Line 1",
        type: "line",
        stack: "Total",
        smooth: true,
        lineStyle: {
          width: 0,
        },
        // showSymbol: false,
        areaStyle: {
          opacity: 0.8,
        },

        symbolSize: 0,
        emphasis: {
          focus: "series",
        },
        label: {
          show: true,
          padding: [0, 0, 15, 0],
          position: "top",
          color: "black",
          fontWeight: 700,
          fontSize: 15,
          fontFamily: " Abhaya Libre",
          formatter: function (params) {
            // Accessing x-axis data for labels
            const xAxisData = option.xAxis[0].data;
            if (xAxisData && xAxisData.length > params.dataIndex) {
              return xAxisData[params.dataIndex].split("-")[2];
            }
            return "";
          },
        },

        data: data,
      },
    ],
  };

  useEffect(() => {
    getWeatherData();
  }, []);

  useEffect(() => {
    if (chartRef.current) {
      // Trigger chart rendering when the modal is displayed
      chartRef.current.getEchartsInstance().resize();
    }
  }, []);
  return (
    <>
      <div className="wrapper">
        <div className="city-section">
          <div className="city-section-left">
            <div className="city">
              {weatherData?.location?.name}, {weatherData?.location?.region}
            </div>
            <div className="time">
              {formatDate(weatherData?.location?.localtime)}
            </div>
            <div className="weather">
              <img
                style={{ position: "absolute", left: "-15px" }}
                src={weatherData?.current?.condition?.icon}
                alt=""
              />
              <span style={{ position: "absolute", left: "40px" }}>
                {weatherData?.current?.condition?.text}
              </span>
            </div>
          </div>
          <div className="city-section-right">
            <div className="live">live</div>
            <img src={assets.img.bitmap} alt="" />
          </div>
        </div>
        <div className="weather-section">
          {lastFiveHourData.map((data, i) => {
            return (
              <React.Fragment key={i}>
                <div className="temp">
                  <span>{data.time}</span>

                  <Cloud color="white" />

                  <span>{data.temp}</span>
                </div>
                {i === 0 && <div className="line"></div>}
              </React.Fragment>
            );
          })}
        </div>

        <div className="additional">
          <div className="title">Additional Info</div>

          <div className="data-wrap">
            <div className="data">
              <div className="gray-title">Precipitation</div>
              <div style={{ fontSize: "16px" }} className="title">
                {weatherData?.current?.precip_in}%
              </div>
            </div>
            <div className="data">
              <div className="gray-title">Humidity</div>
              <div style={{ fontSize: "16px" }} className="title">
                {weatherData?.current?.humidity}%
              </div>
            </div>
            <div className="data">
              <div className="gray-title">Windy</div>
              <div style={{ fontSize: "16px" }} className="title">
                {weatherData?.current?.wind_kph} km/h
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ overflow: "hidden", position: "relative", height: "330px" }}
      >
        <div className="chart-title-wrap">
          <div className="title">Additional Info</div>
          <Dropdown />
        </div>
        <ReactEcharts
          ref={chartRef}
          style={{ width: "450px", position: "absolute", left: "-050px" }}
          option={option}
          showLoading={gloading}
        />
      </div>
    </>
  );
};

export default Home;
