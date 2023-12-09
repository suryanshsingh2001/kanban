// components/TicketColumn.js
import React from 'react';
import TicketCard from './TicketCard';
import './TicketColumn.css';

const TicketColumn = ({ title, tickets, sortOption, users }) => {
  // Implement logic to sort tickets based on sortOption
  const sortedTickets = sortTickets(tickets, sortOption);

  return (
    <div className="ticket-column">
      <h2>{title} {tickets.length}</h2>
      {sortedTickets.map((ticket) => (
        <TicketCard key={ticket.id} ticket={ticket} users={users} />
        
      ))
      }
    </div>
  );
};

// Helper function to sort tickets
const sortTickets = (tickets, sortOption) => {
  // Implement logic to sort tickets based on sortOption
  switch (sortOption) {
    case 'priority':
      return tickets.sort((a, b) => b.priority - a.priority);
    case 'title':
      return tickets.sort((a, b) => a.title.localeCompare(b.title));
    default:
      return tickets;
  }
};

export default TicketColumn;
