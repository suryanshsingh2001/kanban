import React from "react";
import TicketCard from "./TicketCard";
import { FaEllipsisH, FaPlus } from "react-icons/fa";
import "./TicketColumn.css";

const TicketColumn = ({ title, tickets, sortOption, users }) => {
  // Implement logic to sort tickets based on sortOption
  const sortedTickets = sortTickets(tickets, sortOption);

  return (
    <div className="ticket-column">
      <h2 className="ticket-heading">
        {title}{" "}<span className="ticket-count-badge">{tickets.length}</span>
        
        <div className="action-icons">
          <FaPlus className="action-icon" />
          <FaEllipsisH className="action-icon" />
        </div>
      </h2>
      {sortedTickets.map((ticket) => (
        <TicketCard key={ticket.id} ticket={ticket} users={users} />
      ))}
    </div>
  );
};

// Helper function to sort tickets
const sortTickets = (tickets, sortOption) => {
  // Implement logic to sort tickets based on sortOption
  switch (sortOption) {
    case "priority":
      return tickets.sort((a, b) => b.priority - a.priority);
    case "title":
      return tickets.sort((a, b) => a.title.localeCompare(b.title));
    default:
      return tickets;
  }
};

export default TicketColumn;
