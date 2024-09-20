import { FaEye, FaPen, FaUser, FaFolderOpen } from "react-icons/fa";
import React from "react";

const roleClassNames = {
  Admin: "bg-purple-100 text-purple-600",
  Submitter: "bg-red-100 text-red-600",
  Viewer: "bg-gray-100 text-gray-600",
  User: "bg-green-100 text-green-600",
  "Meeting Creator": "bg-blue-100 text-blue-600", 
};


const data = () => {
  const users = [
    {
      name: "Jordan Stevenson",
      email: "Layne_Kuvall@gmail.com",
      contact: "54574886488",
      roles: ["Admin", "Submitter"],
      lastLogin: "12:24PM 26-JUL-2024",
    },
    {
      name: "Alex Johnson",
      email: "alex.johnson@example.com",
      contact: "1234567890",
      roles: ["User"],
      lastLogin: "10:15AM 27-JUL-2024",
    },
    {
      name: "Maria Garcia",
      email: "maria.garcia@example.com",
      contact: "9876543210",
      roles: ["Admin", "Viewer"],
      lastLogin: "09:45AM 28-JUL-2024",
    },
    {
      name: "David Lee",
      email: "david.lee@example.com",
      contact: "4567891230",
      roles: ["Submitter"],
      lastLogin: "03:30PM 29-JUL-2024",
    },
    {
      name: "Lisa Ray",
      email: "lisa.ray@example.com",
      contact: "3216549870",
      roles: ["Meeting Creator", "User"],
      lastLogin: "02:10PM 30-JUL-2024",
    },
    {
      name: "Chris Kim",
      email: "chris.kim@example.com",
      contact: "1472583690",
      roles: ["Admin"],
      lastLogin: "11:20AM 31-JUL-2024",
    },
    {
      name: "Patricia Brown",
      email: "patricia.brown@example.com",
      contact: "2589631470",
      roles: ["Viewer"],
      lastLogin: "01:05PM 01-AUG-2024",
    },
    {
      name: "Michael Smith",
      email: "michael.smith@example.com",
      contact: "3692581470",
      roles: ["Submitter", "Admin"],
      lastLogin: "10:30AM 02-AUG-2024",
    },
    {
      name: "Emma Wilson",
      email: "emma.wilson@example.com",
      contact: "7539514560",
      roles: ["Meeting Creator"],
      lastLogin: "12:15PM 03-AUG-2024",
    },
    {
      name: "John Doe",
      email: "john.doe@example.com",
      contact: "8523697410",
      roles: ["Admin", "User"],
      lastLogin: "11:45AM 04-AUG-2024",
    },
    {
      name: "Sarah Connor",
      email: "sarah.connor@example.com",
      contact: "7894561230",
      roles: ["Viewer"],
      lastLogin: "03:00PM 05-AUG-2024",
    },
    {
      name: "James Brown",
      email: "james.brown@example.com",
      contact: "1597534680",
      roles: ["Submitter"],
      lastLogin: "08:30AM 06-AUG-2024",
    },
    {
      name: "Olivia Taylor",
      email: "olivia.taylor@example.com",
      contact: "7531594860",
      roles: ["Admin", "Meeting Creator"],
      lastLogin: "12:50PM 07-AUG-2024",
    },
    {
      name: "Benjamin White",
      email: "benjamin.white@example.com",
      contact: "4561237890",
      roles: ["User"],
      lastLogin: "09:00AM 08-AUG-2024",
    },
    {
      name: "Sophia Martinez",
      email: "sophia.martinez@example.com",
      contact: "6547893210",
      roles: ["Admin"],
      lastLogin: "01:30PM 09-AUG-2024",
    },
    {
      name: "Daniel Hernandez",
      email: "daniel.hernandez@example.com",
      contact: "3217896540",
      roles: ["Submitter", "Viewer"],
      lastLogin: "02:45PM 10-AUG-2024",
    },
    {
      name: "Ava Garcia",
      email: "ava.garcia@example.com",
      contact: "2581479630",
      roles: ["Meeting Creator"],
      lastLogin: "11:15AM 11-AUG-2024",
    },
    {
      name: "William Robinson",
      email: "william.robinson@example.com",
      contact: "9638527410",
      roles: ["Admin", "User"],
      lastLogin: "10:00AM 12-AUG-2024",
    },
    {
      name: "Mia Hall",
      email: "mia.hall@example.com",
      contact: "8527419630",
      roles: ["Viewer"],
      lastLogin: "04:20PM 13-AUG-2024",
    },
    {
      name: "Ethan Lewis",
      email: "ethan.lewis@example.com",
      contact: "7418529630",
      roles: ["Submitter"],
      lastLogin: "09:50AM 14-AUG-2024",
    },
    {
      name: "Isabella Young",
      email: "isabella.young@example.com",
      contact: "1597532580",
      roles: ["Admin", "Meeting Creator"],
      lastLogin: "12:00PM 15-AUG-2024",
    },
  ];

  return users.map((user, index) => ({
    user: (
      <div key={index}>
        <span className="font-semibold">{user.name}</span>
        <br />
        <span className="text-gray-500 text-sm">{user.email}</span>
      </div>
    ),
    contact: user.contact,
    roles: (
      <div className="flex space-x-2">
        {user.roles.map((role, idx) => {
          const className = roleClassNames[role] || "bg-yellow-100 text-yellow-600"; 
          return (
            <span key={idx} className={`px-2 py-1 rounded-lg text-xs ${className}`}>
              {role}
            </span>
          );
        })}
      </div>
    ),
    lastLogin: user.lastLogin,
    status: (
      <button
        className={`w-10 h-6 flex items-center bg-purple-500 rounded-full p-1 cursor-pointer ${
          true ? "justify-end" : "justify-start"
        }`}
        onClick={() => {}}
      >
        <div className="w-4 h-4 bg-white rounded-full"></div>
      </button>
    ),
    actions: (
      <div className="flex space-x-2">
        {[FaEye, FaPen, FaUser, FaFolderOpen].map((Icon, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-8 h-8 text-purple-700 bg-white rounded-full shadow-lg cursor-pointer"
          >
            <Icon size={16} /> 
          </div>
        ))}
      </div>
    ),
  }));
};

export default data;
