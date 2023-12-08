// components/KanbanBoard.js
import React from 'react';
import TicketColumn from './TicketColumn';
// import './KanbanBoard.css';

const KanbanBoard = ({ tickets, groupingOption, sortOption }) => {
  // Group and sort tickets based on options
  const groupedAndSortedTickets = groupAndSortTickets(tickets, groupingOption, sortOption);

  return (
    <div className="kanban-board">
      {Object.keys(groupedAndSortedTickets).map((groupTitle) => (
        <TicketColumn
          key={groupTitle}
          title={groupTitle}
          tickets={groupedAndSortedTickets[groupTitle]}
          sortOption={sortOption}
        />
      ))}
    </div>
  );
};

// Helper function to group tickets and sort based on options
const groupAndSortTickets = (tickets, groupingOption, sortOption) => {
  // Group tickets based on groupingOption
  let groupedTickets = {};

  switch (groupingOption) {
    case 'status':
      groupedTickets = groupByStatus(tickets);
      break;
    case 'user':
      groupedTickets = groupByUser(tickets);
      break;
    case 'priority':
      groupedTickets = groupByPriority(tickets);
      break;
    default:
      break;
  }

  // Sort tickets based on sortOption
  Object.keys(groupedTickets).forEach((groupKey) => {
    groupedTickets[groupKey] = sortTickets(groupedTickets[groupKey], sortOption);
  });

  return groupedTickets;
};

// Helper function to group tickets by status
const groupByStatus = (tickets) => {
  return tickets.reduce((grouped, ticket) => {
    const { status } = ticket;
    if (!grouped[status]) {
      grouped[status] = [];
    }
    grouped[status].push(ticket);
    return grouped;
  }, {});
};

// Helper function to group tickets by user
const groupByUser = (tickets) => {
  return tickets.reduce((grouped, ticket) => {
    const { userId } = ticket;
    if (!grouped[userId]) {
      grouped[userId] = [];
    }
    grouped[userId].push(ticket);
    return grouped;
  }, {});
};

// Helper function to group tickets by priority
const groupByPriority = (tickets) => {
  return tickets.reduce((grouped, ticket) => {
    const { priority } = ticket;
    if (!grouped[priority]) {
      grouped[priority] = [];
    }
    grouped[priority].push(ticket);
    return grouped;
  }, {});
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

export default KanbanBoard;
