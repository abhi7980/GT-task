import React from "react";
import {
  
  FaPlus,
  FaFilter,
  FaFileExport,
} from "react-icons/fa";
import UserTable from "./UserTable";
import data from "./data"

const UserPage = () => {
  const columns = React.useMemo(
    () => [
      {
        id: "user",
        header: "User",
        accessorKey: "user",
        cell: (info) => info.getValue(), 
      },
      {
        id: "contact",
        header: () => <span>Contact No.</span>,
        accessorKey: "contact",
      },
      {
        id: "roles",
        header: "Assigned Roles",
        accessorKey: "roles",
        cell: (info) => info.getValue(), 
      },
      {
        id: "lastLogin",
        header: "Last Login",
        accessorKey: "lastLogin",
      },
      {
        id: "status",
        header: "Status",
        accessorKey: "status",
        cell: (info) => info.getValue(), 
      },
      {
        id: "actions",
        header: "Actions",
        accessorKey: "actions",
        cell: (info) => info.getValue(), 
      },
    ],
    []
  );

  const Data = React.useMemo(() => data(), []);

 

  return (
    <div className="p-6 bg-white">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-semibold mb-6">Users</h1>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <button className="border border-gray-300 text-gray-600 px-4 py-2 rounded-lg flex items-center space-x-2">
            <FaFilter />
            <span>Filter</span>
          </button>
          <button className="border border-gray-300 text-gray-600 px-4 py-2 rounded-lg flex items-center space-x-2">
            <FaFileExport />
            <span>Export</span>
          </button>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
            <FaPlus />
            <span>Add User</span>
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center mb-4">
        {/* Tabs for All, GT Users, and Client Users */}
        <div className="flex space-x-4">
          <button className="bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
            <span>All</span>
            <span className="bg-white text-purple-700 px-2 py-1 rounded-full">
              24
            </span>
          </button>
          <button className="border border-purple-600 text-purple-600 px-4 py-2 rounded-lg flex items-center space-x-2">
            <span>GT Users</span>
            <span className="bg-purple-600 text-white px-2 py-1 rounded-full">
              10
            </span>
          </button>
          <button className="border border-purple-600 text-purple-600 px-4 py-2 rounded-lg flex items-center space-x-2">
            <span>Client Users</span>
            <span className="bg-purple-600 text-white px-2 py-1 rounded-full">
              8
            </span>
          </button>
        </div>

        {/* Search Box */}
        <div>
          <input
            type="text"
            placeholder="Search"
            className="h-12 w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-purple-600"
          />
        </div>
      </div>

      {/* Table Component */}
      <UserTable columns={columns} data={Data} />
    </div>
  );
};

export default UserPage;
