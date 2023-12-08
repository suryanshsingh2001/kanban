// components/ControlPanel.js
import React from 'react';
// import './ControlPanel.css';

const ControlPanel = ({ groupingOption, sortOption, onGroupingChange, onSortChange }) => {
  return (
    <div className="control-panel">
      <button onClick={() => onGroupingChange('status')} className={groupingOption === 'status' ? 'active' : ''}>
        Group by Status
      </button>
      <button onClick={() => onGroupingChange('user')} className={groupingOption === 'user' ? 'active' : ''}>
        Group by User
      </button>
      <button onClick={() => onGroupingChange('priority')} className={groupingOption === 'priority' ? 'active' : ''}>
        Group by Priority
      </button>

      <button onClick={() => onSortChange('priority')} className={sortOption === 'priority' ? 'active' : ''}>
        Sort by Priority
      </button>
      <button onClick={() => onSortChange('title')} className={sortOption === 'title' ? 'active' : ''}>
        Sort by Title
      </button>
    </div>
  );
};

export default ControlPanel;
