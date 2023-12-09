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

export const statusIcons = {
    Todo: <AiOutlineCheck color="black" />,
    "In progress": <BiTimeFive color="purple" />,
    Backlog: <GrStatusWarning color="red" />,
};

export const priorityIcons = {
    Urgent: <FaExclamationCircle color="#d9534f" />,
    High: <FaExclamationTriangle color="#f0ad4e" />,
    Medium: <FaInfoCircle color="#FFA500" />, //yellow
    Low: <FaInfoCircle color="#5cb85c" />,
    "No priority": <FaBan color="#777" />,
};

export const userProfileImages = {
    "usr-1": "https://randomuser.me/api/portraits/men/31.jpg",
    "usr-2": "https://randomuser.me/api/portraits/men/11.jpg",
    "usr-3": "https://randomuser.me/api/portraits/men/1.jpg",
    "usr-4": "https://randomuser.me/api/portraits/men/2.jpg",
    "usr-5": "https://randomuser.me/api/portraits/men/5.jpg",
  };