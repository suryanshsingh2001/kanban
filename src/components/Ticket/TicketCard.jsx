import React from "react";
import "./TicketCard.css";
import placeholderImage from "../../assets/profiles/placeholder_image.jpg";
import {
  FaExclamationCircle,
  FaExclamationTriangle,
  FaCheckCircle,
  FaInfoCircle,
  FaBan,
} from "react-icons/fa";


const TicketCard = ({ ticket, users, groupingOption }) => {
  const { title, userId, priority, status, tag, id } = ticket;

  // Find the user based on userId
  const user = users.find((user) => user.id === userId);

  // Map each priority to its corresponding icon for grouping by priority
  const priorityIcons = {
    Urgent: <FaExclamationCircle color="#d9534f" />,
    High: <FaExclamationTriangle color="#f0ad4e" />,
    Medium: <FaInfoCircle color="#FFA500" />, //yellow
    Low: <FaInfoCircle color="#5cb85c" />,
    "No priority": <FaBan color="#777" />,
  };
  

  return (
    <div className="ticket-card">
      {groupingOption !== "priority" && (
        <div className="priority-icon">{priorityIcons[getPriorityLabel(priority)]}</div>
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
