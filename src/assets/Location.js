import React from "react";

const Location = ({ color = "black" }) => {
  return (
    <svg
      width="14"
      height="17"
      viewBox="0 0 14 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clip-rule="evenodd"
        d="M0.5 6.53801C0.504323 2.92896 3.42896 0.00432309 7.03801 0C10.6471 0.00432309 13.5717 2.92896 13.576 6.53801C13.576 10.6844 7.74804 16.5595 7.5009 16.8079C7.37824 16.9309 7.2117 17 7.03801 17C6.86433 17 6.69778 16.9309 6.57512 16.8079C6.32798 16.5595 0.5 10.6844 0.5 6.53801ZM7.03801 4.24971C5.77422 4.24971 4.74971 5.27422 4.74971 6.53801C4.75115 7.80121 5.77481 8.82487 7.03801 8.82632C8.30181 8.82632 9.32632 7.80181 9.32632 6.53801C9.32632 5.27422 8.30181 4.24971 7.03801 4.24971Z"
        fill="white"
      />
    </svg>
  );
};

export default Location;
