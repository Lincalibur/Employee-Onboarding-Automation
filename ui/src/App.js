import React, { useState } from 'react';
import { Bell, User, Settings, LogOut, Plus, Download, FileText, Home, Users, Package, Activity } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import './dashboard-styles.css';

const Navigation = ({ activePage, setActivePage }) => (
  <nav className="bg-gray-900 text-gray-300 w-64 h-screen fixed left-0 top-0 overflow-y-auto transition-all duration-300 ease-in-out">
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-8 text-white">X-Onboarding</h1>
      <div className="space-y-2">
        {[
          { name: 'Dashboard', icon: Home },
          { name: 'Users', icon: Users },
          { name: 'Software', icon: Package },
          { name: 'Settings', icon: Settings },
        ].map((item) => (
          <a
            key={item.name.toLowerCase()}
            href="#"
            className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${
              activePage === item.name.toLowerCase() ? 'bg-blue-600 text-white' : 'hover:bg-gray-800'
            }`}
            onClick={() => setActivePage(item.name.toLowerCase())}
          >
            <item.icon className="w-5 h-5 mr-3" />
            {item.name}
          </a>
        ))}
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-800">
      <div className="flex items-center justify-between">
        <Bell className="w-5 h-5 cursor-pointer hover:text-white transition-colors duration-200" />
        <User className="w-5 h-5 cursor-pointer hover:text-white transition-colors duration-200" />
        <LogOut className="w-5 h-5 cursor-pointer hover:text-white transition-colors duration-200" />
      </div>
    </div>
  </nav>
);

const DashboardCard = ({ title, data, value, icon: Icon, chartType = 'line' }) => (
  <div className="bg-gray-800 rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <Icon className="w-6 h-6 text-blue-400" />
    </div>
    <div className="h-[200px] mb-4">
      <ResponsiveContainer width="100%" height="100%">
        {chartType === 'line' ? (
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#718096" />
            <YAxis stroke="#718096" />
            <Tooltip contentStyle={{ backgroundColor: '#2D3748', border: 'none' }} />
            <Line type="monotone" dataKey="value" stroke="#4299E1" strokeWidth={2} dot={{ stroke: '#4299E1', strokeWidth: 2 }} />
          </LineChart>
        ) : (
          <AreaChart data={data}>
            <XAxis dataKey="name" stroke="#718096" />
            <YAxis stroke="#718096" />
            <Tooltip contentStyle={{ backgroundColor: '#2D3748', border: 'none' }} />
            <Area type="monotone" dataKey="value" stroke="#4299E1" fill="#4299E1" fillOpacity={0.2} />
          </AreaChart>
        )}
      </ResponsiveContainer>
    </div>
    <div className="text-3xl font-bold text-white">{value}</div>
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
      <h1 className="text-3xl font-bold mb-8 text-white">Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <DashboardCard title="Users Onboarded" data={userOnboardedData} value="245" icon={User} chartType="area" />
        <DashboardCard title="Pending Tasks" data={pendingTasksData} value="12" icon={FileText} />
        <DashboardCard title="Failed Installations" data={failedInstallationsData} value="3" icon={Download} />
      </div>
      <div className="mt-8 bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-white">Weekly Activity Overview</h2>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={userOnboardedData}>
              <XAxis dataKey="name" stroke="#718096" />
              <YAxis stroke="#718096" />
              <Tooltip contentStyle={{ backgroundColor: '#2D3748', border: 'none' }} />
              <Area type="monotone" dataKey="value" stroke="#4299E1" fill="#4299E1" fillOpacity={0.2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

const UsersPage = () => (
  <div className="p-8">
    <h1 className="text-3xl font-bold mb-8 text-white">Users</h1>
    <p className="text-gray-300">This is the Users page. Add your user management content here.</p>
  </div>
);

const SoftwarePage = () => (
  <div className="p-8">
    <h1 className="text-3xl font-bold mb-8 text-white">Software</h1>
    <p className="text-gray-300">This is the Software page. Add your software management content here.</p>
  </div>
);

const SettingsPage = () => (
  <div className="p-8">
    <h1 className="text-3xl font-bold mb-8 text-white">Settings</h1>
    <p className="text-gray-300">This is the Settings page. Add your settings management content here.</p>
  </div>
);

const App = () => {
  const [activePage, setActivePage] = useState('dashboard');

  return (
    <div className="bg-gray-900 min-h-screen text-gray-300">
      <Navigation activePage={activePage} setActivePage={setActivePage} />
      <div className="ml-64 p-4">
        {activePage === 'dashboard' && <Dashboard />}
        {activePage === 'users' && <UsersPage />}
        {activePage === 'software' && <SoftwarePage />}
        {activePage === 'settings' && <SettingsPage />}
      </div>
    </div>
  );
};

export default App;