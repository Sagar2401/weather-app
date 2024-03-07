import React from "react";

const Cloud = ({ color = "#057BFF" }) => {
  return (
    <svg
      width="23"
      height="20"
      viewBox="0 0 23 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.4545 13.1469C10.4545 13.3726 10.4686 13.598 10.4968 13.8219C10.4686 13.598 10.4545 13.3726 10.4545 13.1469C10.4563 12.8078 10.4903 12.4697 10.5562 12.1371"
        stroke={color}
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fillRule="evenodd"
        clip-rule="evenodd"
        d="M15.8545 18.5469C18.7063 18.5503 21.0691 16.3356 21.2501 13.4896C21.4311 10.6435 19.3678 8.1474 16.5385 7.78959C13.7093 7.43177 11.0895 9.33564 10.5562 12.1371C9.30631 11.5379 7.81698 11.765 6.80249 12.7096C5.78799 13.6541 5.45521 15.1235 5.96374 16.4129C6.47227 17.7024 7.71841 18.5491 9.10454 18.5469H15.8545Z"
        stroke={color}
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.72954 6.39692C5.72951 6.62258 5.74363 6.84802 5.77184 7.07192C5.74363 6.84802 5.72951 6.62258 5.72954 6.39692C5.73128 6.05785 5.76534 5.71972 5.83124 5.38712"
        stroke={color}
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.3576 5.03971C15.7216 2.59624 13.4773 0.919713 10.9537 1.00297C8.43021 1.08622 6.30126 2.90703 5.82764 5.38711C4.57772 4.7879 3.08838 5.01504 2.07389 5.95958C1.05939 6.90413 0.726613 8.37347 1.23514 9.66295C1.74368 10.9524 2.98981 11.7991 4.37594 11.7969"
        stroke={color}
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Cloud;
