import React from "react";
import TicketColumn from "../Ticket/TicketColumn";
import { groupAndSortTickets } from "../../utils";
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
          groupingOption={groupingOption}
          sortOption={sortOption}
          users={users} // Pass users prop to TicketColumn
        />
      ))}
    </div>
  );
};

export default KanbanBoard;
