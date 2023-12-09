import React from "react";
import TicketCard from "./TicketCard";
import { FaEllipsisH, FaPlus } from "react-icons/fa";
import { GrStatusWarning } from "react-icons/gr";
import { AiOutlineCheck } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import {
  FaExclamationCircle,
  FaExclamationTriangle,
  FaCheckCircle,
  FaInfoCircle,
  FaBan,
} from "react-icons/fa";

import "./TicketColumn.css";

const TicketColumn = ({
  title,
  tickets,
  sortOption,
  groupingOption,
  users,
}) => {
  const sortedTickets = sortTickets(tickets, sortOption);

  // Map each title to its corresponding icon for grouping by status
  const statusIcons = {
    Todo: <AiOutlineCheck color="black" />,
    "In progress": <BiTimeFive color="purple"/>,
    Backlog: <GrStatusWarning color="red" />,
  };

  // Map each priority to its corresponding icon for grouping by priority
  const priorityIcons = {
    Urgent: <FaExclamationCircle color="#d9534f" />,
    High: <FaExclamationTriangle color="#f0ad4e" />,
    Medium: <FaInfoCircle color="#FFA500" />, //yellow
    Low: <FaInfoCircle color="#5cb85c" />,
    "No priority": <FaBan color="#777" />,
  };

  return (
    <div className="ticket-column">
      <h2 className="ticket-heading">
        {groupingOption === "status" && (
          <div className="status-icon">{statusIcons[title]}</div>
        )}
        {groupingOption === "priority" && (
          <div className="priority-icon">{priorityIcons[title]}</div>
        )}
        {title} <span className="ticket-count-badge">{tickets.length}</span>
        <div className="action-icons">
          <FaPlus className="action-icon" />
          <FaEllipsisH className="action-icon" />
        </div>
      </h2>
      {sortedTickets.map((ticket) => (
        <TicketCard key={ticket.id} ticket={ticket} users={users} groupingOption={groupingOption} />
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
