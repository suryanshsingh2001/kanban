import React from "react";
import TicketColumn from '../Ticket/TicketColumn';
import "./KanbanBoard.css";

const KanbanBoard = ({ tickets, groupingOption, sortOption, users }) => {
  // Group and sort tickets based on options
  const groupedAndSortedTickets = groupAndSortTickets(
    tickets,
    groupingOption,
    sortOption,
    users
  );

  return (
    <div className="kanban-board">
      {Object.keys(groupedAndSortedTickets).map((groupTitle) => (
        <TicketColumn
          key={groupTitle}
          title={groupTitle}
          tickets={groupedAndSortedTickets[groupTitle]}
          sortOption={sortOption}
          users={users} // Pass users prop to TicketColumn
        />
      ))}
    </div>
  );
};

// Helper function to group and sort tickets
const groupAndSortTickets = (tickets, groupingOption, sortOption, users) => {
  // Implement logic to group and sort tickets
  let groupedTickets = {};
  // Group tickets based on groupingOption
  switch (groupingOption) {
    case "status":
      groupedTickets = groupByStatus(tickets);
      break;
    case "user":
      groupedTickets = groupByUser(tickets, users);
      break;
    case "priority":
      groupedTickets = groupByPriority(tickets);
      break;
    default:
      break;
  }

  // Sort tickets based on sortOption
  Object.keys(groupedTickets).forEach((groupKey) => {
    groupedTickets[groupKey] = sortTickets(
      groupedTickets[groupKey],
      sortOption
    );
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
const groupByUser = (tickets, users) => {
  return tickets.reduce((grouped, ticket) => {
    const { userId } = ticket;
    const user = users.find((user) => user.id === userId);
    const userName = user ? user.name : "Unknown User";

    if (!grouped[userName]) {
      grouped[userName] = [];
    }
    grouped[userName].push(ticket);
    return grouped;
  }, {});
};

// Helper function to group tickets by priority
const groupByPriority = (tickets) => {
  return tickets.reduce((grouped, ticket) => {
    const { priority } = ticket;
    const priorityLabel = getPriorityLabel(priority);

    if (!grouped[priorityLabel]) {
      grouped[priorityLabel] = [];
    }
    grouped[priorityLabel].push(ticket);
    return grouped;
  }, {});
};

// Helper function to sort tickets
const sortTickets = (tickets, sortOption) => {
  
  switch (sortOption) {
    case "priority":
      return tickets.sort((a, b) => b.priority - a.priority);
    case "title":
      return tickets.sort((a, b) => a.title.localeCompare(b.title));
    default:
      return tickets;
  }
};

// Helper function to get priority label based on priority level
const getPriorityLabel = (priority) => {
  switch (priority) {
    case 4:
      return "Urgent";
    case 3:
      return "High";
    case 2:
      return "Medium";
    case 1:
      return "Low";
    case 0:
      return "No priority";
    default:
      return "";
  }
};

export default KanbanBoard;
