import React from "react";

const CellularConnection = ({ color = "black" }) => {
  return (
    <svg
      width="18"
      height="12"
      viewBox="0 0 18 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clip-rule="evenodd"
        d="M16.6667 0.666656H15.6667C15.1144 0.666656 14.6667 1.11437 14.6667 1.66666V10.3333C14.6667 10.8856 15.1144 11.3333 15.6667 11.3333H16.6667C17.2189 11.3333 17.6667 10.8856 17.6667 10.3333V1.66666C17.6667 1.11437 17.2189 0.666656 16.6667 0.666656ZM11 2.99999H12C12.5523 2.99999 13 3.44771 13 3.99999V10.3333C13 10.8856 12.5523 11.3333 12 11.3333H11C10.4477 11.3333 9.99999 10.8856 9.99999 10.3333V3.99999C9.99999 3.44771 10.4477 2.99999 11 2.99999ZM7.33332 5.33332H6.33332C5.78104 5.33332 5.33332 5.78104 5.33332 6.33332V10.3333C5.33332 10.8856 5.78104 11.3333 6.33332 11.3333H7.33332C7.88561 11.3333 8.33332 10.8856 8.33332 10.3333V6.33332C8.33332 5.78104 7.88561 5.33332 7.33332 5.33332ZM2.66666 7.33332H1.66666C1.11437 7.33332 0.666656 7.78104 0.666656 8.33332V10.3333C0.666656 10.8856 1.11437 11.3333 1.66666 11.3333H2.66666C3.21894 11.3333 3.66666 10.8856 3.66666 10.3333V8.33332C3.66666 7.78104 3.21894 7.33332 2.66666 7.33332Z"
        fill={color}
      />
    </svg>
  );
};

export default CellularConnection;
