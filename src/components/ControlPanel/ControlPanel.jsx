import React, { useState } from "react";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import "./ControlPanel.css";

const ControlPanel = ({
  groupingOption,
  sortOption,
  onGroupingChange,
  onSortChange,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="control-panel">
      <div className="dropdown">
        <button onClick={toggleDropdown} className="dropdown-toggle">
          <HiAdjustmentsHorizontal className="icon" />
          Display
        </button>
        {isDropdownOpen && (
          <div className="dropdown-content">
            <div className="grouping-line">
              <p className="label">Grouping:</p>
              <select
                value={groupingOption}
                onChange={(e) => onGroupingChange(e.target.value)}
              >
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
            <div className="sorting-line">
              <p className="label">Sorting:</p>
              <select
                value={sortOption}
                onChange={(e) => onSortChange(e.target.value)}
              >
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ControlPanel;
