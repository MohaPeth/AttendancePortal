import React, { useState } from 'react';
import { LogOut, User, Settings } from 'lucide-react';

export function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    // Logique de déconnexion à implémenter
    console.log('Déconnexion...');
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-3 focus:outline-none"
      >
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="Admin"
          className="w-8 h-8 rounded-full ring-2 ring-white"
        />
        <span className="font-medium text-gray-700">Admin</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <div className="px-4 py-2 border-b border-gray-100">
              <p className="text-sm font-medium text-gray-900">Marie Laurent</p>
              <p className="text-sm text-gray-500">marie.laurent@company.com</p>
            </div>
            
            <a
              href="#profile"
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <User className="w-4 h-4 mr-3" />
              Profil
            </a>
            
            <a
              href="#settings"
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <Settings className="w-4 h-4 mr-3" />
              Paramètres
            </a>
            
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-2 text-sm text-red-700 hover:bg-red-50"
            >
              <LogOut className="w-4 h-4 mr-3" />
              Se déconnecter
            </button>
          </div>
        </div>
      )}
    </div>
  );
}