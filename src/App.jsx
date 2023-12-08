// App.js
import React, { useState, useEffect } from 'react';
import KanbanBoard from './components/KanbanBoard';
import ControlPanel from './components/ControlPanel';
import './App.css';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [groupingOption, setGroupingOption] = useState('status');
  const [sortOption, setSortOption] = useState('priority');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
        const data = await response.json();
        setTickets(data.tickets);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleGroupingChange = (option) => {
    setGroupingOption(option);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  return (
    <div className="app">
      <ControlPanel
        groupingOption={groupingOption}
        sortOption={sortOption}
        onGroupingChange={handleGroupingChange}
        onSortChange={handleSortChange}
      />
      {tickets.length > 0 ? (
        <KanbanBoard tickets={tickets} groupingOption={groupingOption} sortOption={sortOption} />
      ) : (
        <p>Loading tickets...</p>
      )}
    </div>
  );
};

export default App;
