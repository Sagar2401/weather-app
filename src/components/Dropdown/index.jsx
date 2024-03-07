import React, { useContext, useEffect, useState } from "react";
import "./dropdown.css";
import Arrow from "../../assets/Arrow";
import { AppContext } from "../../hook/useApp";

const data = [
  { id: 1, label: "Last month" },
  { id: 0, label: "last Week" },
];

const Dropdown = () => {
  const [isOpen, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);
  const { getGraphData } = useContext(AppContext);

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (id) => {
    setSelectedItem(id);
    if (id !== selectedItem) {
      getGraphData(id);
    }

    setOpen(false);
  };
  
  useEffect(() => {
         getGraphData(0);

  }, [])
  
  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        {selectedItem !== null
          ? data.find((item) => item.id === selectedItem).label
          : "Select your destination"}
        <div
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <Arrow />
        </div>
      </div>
      <div className={`dropdown-body ${isOpen && "open"}`}>
        {data.map((item) => (
          <div
            key={item.id}
            className="dropdown-item"
            style={{ fontWeight: item.id === selectedItem ? 700 : 400 }}
            onClick={() => handleItemClick(item.id)}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
