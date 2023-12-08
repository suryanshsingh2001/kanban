// components/TicketCard.js
import React from 'react';
import './TicketCard.css';

const TicketCard = ({ ticket, users }) => {
  // Implement logic to display ticket information
  const { title, userId, priority, status } = ticket;
  
  // Find the user based on userId
  const user = users.find((user) => user.id === userId);

  return (
    <div className="ticket-card">
      <h3>{title}</h3>
      <p>User: {user ? user.name : 'Unknown User'}</p>
      <p>Priority: {getPriorityLabel(priority)}</p>
      <p>Status: {status}</p>
      {/* Add any additional ticket details you want to display */}
    </div>
  );
};

// Helper function to get priority label based on priority level
const getPriorityLabel = (priority) => {
  switch (priority) {
    case 4:
      return 'Urgent';
    case 3:
      return 'High';
    case 2:
      return 'Medium';
    case 1:
      return 'Low';
    case 0:
      return 'No priority';
    default:
      return '';
  }
};

export default TicketCard;
