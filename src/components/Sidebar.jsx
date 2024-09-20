import React, { useState } from 'react';
import { FaHome, FaUser, FaFileAlt, FaClipboardList, FaFolderOpen, FaCog, FaBars } from 'react-icons/fa';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';

const Sidebar = ({ activeItem, onItemClick, onToggle }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleItemClick = (label) => {
    onItemClick(label);
  };

  return (
    <div className={`flex ${isOpen ? 'w-64' : 'w-20'} duration-300 bg-white h-full `}>
      <div className="flex flex-col h-full w-full">
        {/* Toggle Button */}
        <div className={`py-4 px-4 flex ${isOpen ? 'justify-end' : 'justify-center'} justify-end items-center`}>
          <button 
            onClick={() => {
              setIsOpen(!isOpen);
              onToggle(); 
            }}
            className="focus:outline-none">
            <FaBars className="text-gray-700" size={24} />
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="flex flex-col px-4">
          <NavItem
            icon={<FaHome size={24} />}
            label="Dashboard"
            isOpen={isOpen}
            onClick={handleItemClick}
            active={activeItem === 'Dashboard'}
          />
          <NavItem
            icon={<FaUser size={24} />}
            label="Masters"
            isOpen={isOpen}
            onClick={handleItemClick}
            active={activeItem === 'Masters' || activeItem === 'Users'} 
            subItems={[
              { label: 'Users', icon: <AiOutlineUsergroupAdd size={20} />, active: activeItem === 'Users' },
              { label: 'Agenda' },
              { label: 'Entities' },
              { label: 'Documents' },
              { label: 'Categories' },
            ]}
          />
          <NavItem
            icon={<FaClipboardList size={24} />}
            label="Compliance Library"
            isOpen={isOpen}
            onClick={handleItemClick}
            active={activeItem === 'Compliance Library'}
          />
          <NavItem
            icon={<FaFileAlt size={24} />}
            label="Reports"
            isOpen={isOpen}
            onClick={handleItemClick}
            active={activeItem === 'Reports'}
          />
          <NavItem
            icon={<FaFolderOpen size={24} />}
            label="Logs"
            isOpen={isOpen}
            onClick={handleItemClick}
            active={activeItem === 'Logs'}
          />
          <NavItem
            icon={<FaCog size={24} />}
            label="Settings"
            isOpen={isOpen}
            onClick={handleItemClick}
            active={activeItem === 'Settings'}
          />
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ icon, label, isOpen, onClick, active, subItems }) => {
  return (
    <div className="mb-4"> 
      <div 
        className={`flex items-center space-x-4 p-2 rounded-lg cursor-pointer 
          ${active ? 'bg-[#6A1B9A] text-white' : 'text-black'} 
          ${subItems ? 'hover:bg-[#F3E5F5]' : 'hover:bg-gray-100'}`} 
        onClick={() => onClick(label)}
      >
        {icon}
        {isOpen && <span className={`text-gray-700 ${active ? 'font-semibold text-white' : ''}`}>{label}</span>}
      </div>
      {/* Sub-items */}
      {subItems && isOpen && (
        <div className="ml-8 border-l-2 border-[#E0E0E0] pl-2 mt-3 space-y-4"> 
          {subItems.map((item, index) => (
            <div 
              key={index} 
              className={`flex items-center space-x-2 py-1 pl-4 text-sm 
                ${item.active ? 'bg-[#EDE7F6] text-gray-900 font-semibold rounded-lg' : 'text-gray-600 hover:text-gray-900 cursor-pointer'}`}
              onClick={() => onClick(item.label)}
            >
              {item.icon && item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
