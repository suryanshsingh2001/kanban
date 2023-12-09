// components/TicketCard.js
import React from "react";
import "./TicketCard.css";
import placeholderImage from "../../assets/profiles/placeholder_image.jpg";

const TicketCard = ({ ticket, users }) => {
  // Implement logic to display ticket information
  const { title, userId, priority, status, tag, id } = ticket;

  // Find the user based on userId
  const user = users.find((user) => user.id === userId);

  return (
    <div className="ticket-card">

      {}
      <div className="profile-picture">
        <img
          src="https://randomuser.me/api/portraits/men/47.jpg"
          alt="Profile"
        />
        {user && user.available && <div className="green-dot" />}{" "}
      </div>
      <h2>{id}</h2>
      <h3>{title} </h3>

      {/* <p>User: {user ? user.name : 'Unknown User'}</p>
      <p>Priority: {getPriorityLabel(priority)}</p>
      <p>Status: {status}</p> */}

      <p className="tags">Tag: {tag}</p>
      {/* Add any additional ticket details you want to display */}
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
