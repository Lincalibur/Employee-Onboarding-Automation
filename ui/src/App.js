import React, { useState } from 'react';
import { Bell, User, Settings, LogOut, Plus, Download, FileText } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import './App.css';

const Navigation = ({ activePage, setActivePage }) => (
  <nav className="glass-nav">
    <div className="container flex flex-col">
      <div className="text-xl font-bold text-white mb-4">X-Onboarding</div>
      <div className="flex flex-col space-y-2">
        <a href="#" className={`nav-link ${activePage === 'dashboard' ? 'active' : ''}`} onClick={() => setActivePage('dashboard')}>Dashboard</a>
        <a href="#" className={`nav-link ${activePage === 'users' ? 'active' : ''}`} onClick={() => setActivePage('users')}>Users</a>
        <a href="#" className={`nav-link ${activePage === 'software' ? 'active' : ''}`} onClick={() => setActivePage('software')}>Software</a>
        <a href="#" className={`nav-link ${activePage === 'settings' ? 'active' : ''}`} onClick={() => setActivePage('settings')}>Settings</a>
      </div>
      <div className="mt-auto flex items-center space-x-2">
        <Bell className="icon" />
        <User className="icon" />
      </div>
    </div>
  </nav>
);

const Dashboard = () => {
  const userOnboardedData = [
    { name: 'Mon', value: 200 },
    { name: 'Tue', value: 215 },
    { name: 'Wed', value: 225 },
    { name: 'Thu', value: 235 },
    { name: 'Fri', value: 245 },
  ];

  const pendingTasksData = [
    { name: 'Mon', value: 20 },
    { name: 'Tue', value: 18 },
    { name: 'Wed', value: 15 },
    { name: 'Thu', value: 13 },
    { name: 'Fri', value: 12 },
  ];

  const failedInstallationsData = [
    { name: 'Mon', value: 5 },
    { name: 'Tue', value: 4 },
    { name: 'Wed', value: 6 },
    { name: 'Thu', value: 3 },
    { name: 'Fri', value: 3 },
  ];

  return (
    <div className="dashboard">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      <div className="dashboard-card">
        <div className="card-content">
          <h2 className="text-2xl font-bold mb-4">Users Onboarded</h2>
          <div className="h-[200px] mb-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={userOnboardedData}>
                <XAxis dataKey="name" stroke="#888888" />
                <YAxis stroke="#888888" />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#F6B17A" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="text-2xl font-bold">245</div>
        </div>
      </div>

      <div className="dashboard-card">
        <div className="card-content">
          <h2 className="text-2xl font-bold mb-4">Pending Tasks</h2>
          <div className="h-[200px] mb-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={pendingTasksData}>
                <XAxis dataKey="name" stroke="#888888" />
                <YAxis stroke="#888888" />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#F6B17A" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="text-2xl font-bold">12</div>
        </div>
      </div>

      <div className="dashboard-card">
        <div className="card-content">
          <h2 className="text-2xl font-bold mb-4">Failed Installations</h2>
          <div className="h-[200px] mb-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={failedInstallationsData}>
                <XAxis dataKey="name" stroke="#888888" />
                <YAxis stroke="#888888" />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#F6B17A" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="text-2xl font-bold">3</div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [activePage, setActivePage] = useState('dashboard');

  return (
    <div className="app">
      <Navigation activePage={activePage} setActivePage={setActivePage} />
      <div className="content">
        {activePage === 'dashboard' && <Dashboard />}
        {/* Add other components for different pages here */}
      </div>
    </div>
  );
};

export default App;
