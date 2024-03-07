import axios from "axios";
import React, { useState } from "react";
import { filterHourlyData, getCurrentDate } from "../utils";

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [graphData, setGraphData] = useState([]);
  const [lastFiveHourData, setlastFiveHourData] = useState([]);
  const [gloading, setGloading] = useState(false);

  function getLastDate(key) {
    const currentDate = new Date();
    if (key === 0) {
      // If key is 0, get the date of 7 days ago
      const lastSevenDays = new Date(
        currentDate.getTime() - 7 * 24 * 60 * 60 * 1000
      );
      return lastSevenDays.toISOString().split("T")[0];
    } else if (key === 1) {
      // If key is 1, get the date of 30 days ago
      const lastThirtyDays = new Date(
        currentDate.getTime() - 30 * 24 * 60 * 60 * 1000
      );
      return lastThirtyDays.toISOString().split("T")[0];
    } else {
      // Handle invalid keys
      return null;
    }
  }

  const getWeatherData = async () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const response = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
        );
        const data = await response.json();
        const city = data.city;
        axios
          .get(
            `http://api.weatherapi.com/v1/forecast.json?key=67fb92872d004b39a2a155237240703&q=${city}&aqi=yes`
          )
          .then((response) => {
            // Handle successful response
            setWeatherData(response.data);
            setlastFiveHourData(
              filterHourlyData(response?.data?.forecast?.forecastday[0]?.hour)
            );
          })
          .catch((error) => {
            // Handle error
            // setError(error.message);
          });
      });
    } else {
      axios
        .get(
          `http://api.weatherapi.com/v1/forecast.json?key=67fb92872d004b39a2a155237240703&q=delhi&aqi=yes`
        )
        .then((response) => {
          // Handle successful response
          setWeatherData(response.data);
          setlastFiveHourData(
            filterHourlyData(response?.data?.forecast?.forecastday[0]?.hour)
          );
        })
        .catch((error) => {
          // Handle error
          // setError(error.message);
        });
    }
  };
  const getGraphData = async (key) => {
    setGloading(true);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const response = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
        );
        const data = await response.json();
        const city = data.city;
        axios
          .get(
            `https://api.weatherapi.com/v1/history.json?q=${city}&dt=${getLastDate(
              key
            )}&end_dt=${getCurrentDate()}&key=67fb92872d004b39a2a155237240703`
          )
          .then((response) => {
            // Handle successful response
            const data = response?.data?.forecast?.forecastday.map((data) => {
              return { date: data.date, temp: data.day.maxtemp_c };
            });

            setGraphData(data);
            setGloading(false);
          })
          .catch((error) => {
            // Handle error
            setGloading(false);

            // setError(error.message);
          });
      });
    } else {
      axios
        .get(
          `https://api.weatherapi.com/v1/history.json?q=delhi&dt=${getLastDate(
            key
          )}&end_dt=${getCurrentDate()}&key=67fb92872d004b39a2a155237240703`
        )
        .then((response) => {
          // Handle successful response
          const data = response?.data?.forecast?.forecastday.map((data) => {
            return { date: data.date, temp: data.day.maxtemp_c };
          });

          setGraphData(data);
          setGloading(false);
        })
        .catch((error) => {
          // Handle error
          setGloading(false);

          // setError(error.message);
        });
    }
  };

  return (
    <AppContext.Provider
      value={{
        isOpenMenu,
        setIsOpenMenu,
        getWeatherData,
        weatherData,
        lastFiveHourData,
        getGraphData,
        graphData,
        gloading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
