// App.js
import React, { useState, useEffect } from 'react';
import KanbanBoard from './components/Kanban/KanbanBoard';
import ControlPanel from './components/ControlPanel/ControlPanel';
import './App.css';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]); // Add users state
  const [groupingOption, setGroupingOption] = useState('status');
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
        const data = await response.json();
        setTickets(data.tickets);
        setUsers(data.users); // Set users state
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
      <div className="heading">Kanban Board</div>
      <div className="columns">
        <ControlPanel
          groupingOption={groupingOption}
          sortOption={sortOption}
          onGroupingChange={handleGroupingChange}
          onSortChange={handleSortChange}
        />
        {tickets.length > 0 ? (
          <KanbanBoard tickets={tickets} groupingOption={groupingOption} sortOption={sortOption} users={users} />
        ) : (
          <p>Loading tickets...</p>
        )}
      </div>
    </div>
  );
};

export default App;
