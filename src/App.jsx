import React, { useState, useEffect } from 'react';
import KanbanBoard from './components/Kanban/KanbanBoard';
import ControlPanel from './components/ControlPanel/ControlPanel';
import './App.css';

const App = () => {
  // Load initial state from local storage or use default values
  const initialGroupingOption = localStorage.getItem('groupingOption') || 'status';
  const initialSortOption = localStorage.getItem('sortOption') || 'title';

  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]); // Add users state
  const [groupingOption, setGroupingOption] = useState(initialGroupingOption);
  const [sortOption, setSortOption] = useState(initialSortOption);

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
    // Save to local storage
    localStorage.setItem('groupingOption', option);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
    // Save to local storage
    localStorage.setItem('sortOption', option);
  };

  return (
    <div className="app">
      <div className="heading">Kanban Board</div>
      <ControlPanel
        groupingOption={groupingOption}
        sortOption={sortOption}
        onGroupingChange={handleGroupingChange}
        onSortChange={handleSortChange}
      />
      <div className="columns">
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
