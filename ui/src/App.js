import React, { useState } from 'react';
import { Bell, User, Settings, LogOut, Plus, Download, FileText, Home, Users, Package, Activity } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const Navigation = ({ activePage, setActivePage }) => (
  <nav className="bg-gray-800 text-white w-64 h-screen fixed left-0 top-0 overflow-y-auto">
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-8">X-Onboarding</h1>
      <div className="space-y-4">
        <a href="#" className={`flex items-center p-2 rounded ${activePage === 'dashboard' ? 'bg-blue-600' : 'hover:bg-gray-700'}`} onClick={() => setActivePage('dashboard')}>
          <Home className="w-5 h-5 mr-3" />
          Dashboard
        </a>
        <a href="#" className={`flex items-center p-2 rounded ${activePage === 'users' ? 'bg-blue-600' : 'hover:bg-gray-700'}`} onClick={() => setActivePage('users')}>
          <Users className="w-5 h-5 mr-3" />
          Users
        </a>
        <a href="#" className={`flex items-center p-2 rounded ${activePage === 'software' ? 'bg-blue-600' : 'hover:bg-gray-700'}`} onClick={() => setActivePage('software')}>
          <Package className="w-5 h-5 mr-3" />
          Software
        </a>
        <a href="#" className={`flex items-center p-2 rounded ${activePage === 'settings' ? 'bg-blue-600' : 'hover:bg-gray-700'}`} onClick={() => setActivePage('settings')}>
          <Settings className="w-5 h-5 mr-3" />
          Settings
        </a>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-900">
      <div className="flex items-center justify-between">
        <Bell className="w-5 h-5 cursor-pointer" />
        <User className="w-5 h-5 cursor-pointer" />
        <LogOut className="w-5 h-5 cursor-pointer" />
      </div>
    </div>
  </nav>
);

const DashboardCard = ({ title, data, value, icon: Icon, chartType = 'line' }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <Icon className="w-6 h-6 text-blue-500" />
    </div>
    <div className="h-[200px] mb-4">
      <ResponsiveContainer width="100%" height="100%">
        {chartType === 'line' ? (
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#888888" />
            <YAxis stroke="#888888" />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} />
          </LineChart>
        ) : (
          <AreaChart data={data}>
            <XAxis dataKey="name" stroke="#888888" />
            <YAxis stroke="#888888" />
            <Tooltip />
            <Area type="monotone" dataKey="value" stroke="#3b82f6" fill="#93c5fd" />
          </AreaChart>
        )}
      </ResponsiveContainer>
    </div>
    <div className="text-3xl font-bold text-gray-900">{value}</div>
  </div>
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
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <DashboardCard title="Users Onboarded" data={userOnboardedData} value="245" icon={User} chartType="area" />
        <DashboardCard title="Pending Tasks" data={pendingTasksData} value="12" icon={FileText} />
        <DashboardCard title="Failed Installations" data={failedInstallationsData} value="3" icon={Download} />
      </div>
      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Weekly Activity Overview</h2>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={userOnboardedData}>
              <XAxis dataKey="name" stroke="#888888" />
              <YAxis stroke="#888888" />
              <Tooltip />
              <Area type="monotone" dataKey="value" stroke="#3b82f6" fill="#93c5fd" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [activePage, setActivePage] = useState('dashboard');

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navigation activePage={activePage} setActivePage={setActivePage} />
      <div className="ml-64 p-4">
        {activePage === 'dashboard' && <Dashboard />}
        {/* Add other components for different pages here */}
      </div>
    </div>
  );
};

export default App;