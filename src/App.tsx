import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { EmployeeList } from './components/Employees/EmployeeList';
import { Dashboard } from './components/Dashboard';
import { AttendanceView } from './components/Attendance/AttendanceView';
import { SettingsView } from './components/Settings/SettingsView';
import { NotificationProvider } from './components/Notifications/NotificationContext';

function App() {
  const [activeTab, setActiveTab] = useState('settings');

  return (
    <NotificationProvider>
      <div className="min-h-screen bg-gray-50">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="ml-64">
          <Header />
          <main>
            {activeTab === 'dashboard' && <Dashboard />}
            {activeTab === 'employees' && <EmployeeList />}
            {activeTab === 'attendance' && <AttendanceView />}
            {activeTab === 'settings' && <SettingsView />}
          </main>
        </div>
      </div>
    </NotificationProvider>
  );
}

export default App;