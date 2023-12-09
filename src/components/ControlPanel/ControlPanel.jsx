// components/ControlPanel.js
import React, { useState } from 'react';
import './ControlPanel.css';

const ControlPanel = ({ groupingOption, sortOption, onGroupingChange, onSortChange }) => {
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
          Display
        </button>
        {isDropdownOpen && (
          <div className="dropdown-content">
            <div>
              <label>Grouping:</label>
              <select value={groupingOption} onChange={(e) => onGroupingChange(e.target.value)}>
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
            <div>
              <label>Sorting:</label>
              <select value={sortOption} onChange={(e) => onSortChange(e.target.value)}>
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
