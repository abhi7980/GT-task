import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import UserPage from './components/UserPage';

function App() {
  const [isOpen, setIsOpen] = useState(true); 
  const [activeItem, setActiveItem] = useState('Users'); 

  const handleToggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex bg-gray-100">
      {/* Sidebar Component */}
      <div className={`transition-all p-4 shadow-lg rounded-lg  bg-gray-100 duration-300 ${isOpen ? 'w-64' : 'w-20'}  `}>
        <Sidebar activeItem={activeItem} onItemClick={setActiveItem} onToggle={handleToggleSidebar} />
      </div>

      {/* UserPage Component */}
      <div className={`flex-1 bg-gray-100 rounded-lg p-4 transition-all duration-300 shadow-lg`}>
        <UserPage />
      </div>
    </div>
  );
}

export default App;
