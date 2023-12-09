
// Helper function to group tickets and sort based on options
export const groupAndSortTickets = (tickets, groupingOption, sortOption, users) => {
    let groupedTickets = {};
  
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
  
    Object.keys(groupedTickets).forEach((groupKey) => {
      groupedTickets[groupKey] = sortTickets(
        groupedTickets[groupKey],
        sortOption
      );
    });
  
    return groupedTickets;
  };
  
  // Helper function to group tickets by status
  export const groupByStatus = (tickets) => {
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
  export const groupByUser = (tickets, users) => {
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
  export const groupByPriority = (tickets) => {
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
  export const sortTickets = (tickets, sortOption) => {
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
  export const getPriorityLabel = (priority) => {
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
  