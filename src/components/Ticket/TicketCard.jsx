// components/TicketCard.js
import React from "react";
import "./TicketCard.css";
import placeholderImage from "../../assets/profiles/placeholder_image.jpg";

const TicketCard = ({ ticket, users, groupingOption }) => {
  const { title, userId, priority, status, tag, id } = ticket;

  // Find the user based on userId
  const user = users.find((user) => user.id === userId);

  return (
    <div className="ticket-card">
      {groupingOption !== "priority" && (
        <div className={`priority-dot ${getPriorityClass(priority)}`} />
      )}
      <div className="profile-picture">
        <img
          src="https://randomuser.me/api/portraits/men/47.jpg"
          alt="Profile"
        />
        {user && user.available && <div className="green-dot" />}
      </div>
      <h2 className="id-text">{id}</h2>
      <h3>{title}</h3>

      {/* Added priority dot */}

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

// Helper function to get priority class based on priority level
const getPriorityClass = (priority) => {
  switch (priority) {
    case 4:
      return "urgent";
    case 3:
      return "high";
    case 2:
      return "medium";
    case 1:
      return "low";
    case 0:
      return "no-priority";
    default:
      return "";
  }
};

export default TicketCard;
