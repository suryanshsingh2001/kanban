import React from "react";
import "./TicketCard.css";

import { priorityIcons, userProfileImages } from "../../constants";

const TicketCard = ({ ticket, users, groupingOption }) => {
  const { title, userId, priority, tag, id } = ticket;

  // Find the user based on userId
  const user = users.find((user) => user.id === userId);

  // Helper function to get profile image URL based on user ID
  const getProfileImageURL = (userID) => {
    // Use the predefined mapping or provide a default URL if not found
    return (
      userProfileImages[userID] ||
      "https://randomuser.me/api/portraits/lego/5.jpg"
    );
  };

  return (
    <div className="ticket-card">
      {groupingOption !== "priority" && (
        <div className="priority-icon">
          {priorityIcons[getPriorityLabel(priority)]}
        </div>
      )}
      {/* Conditionally render profile picture based on grouping option */}
      {groupingOption !== "user" && (
        <div className="profile-picture">
          <img src={getProfileImageURL(userId)} alt="Profile" />
          {user && user.available && <div className="green-dot" />}
        </div>
      )}
      <h2 className="id-text">{id}</h2>
      <h3>{title}</h3>

      {/* Added priority icon */}

      <div className="tags">
        {tag.map((tagItem, index) => (
          <div key={index} className="tag">
            {tagItem}
          </div>
        ))}
      </div>
    </div>
  );
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

export default TicketCard;
