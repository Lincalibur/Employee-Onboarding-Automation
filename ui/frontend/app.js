import React, { useState } from 'react';
import { Bell, User, Settings, LogOut, Plus, Download, FileText, Moon, Sun } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Navigation = ({ activePage, setActivePage }) => (
  <nav className="bg-gray-800 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-xl font-bold">X-Onboarding</div>
      <div className="flex space-x-4">
        <a href="#" className={`hover:text-orange-500 ${activePage === 'dashboard' ? 'text-orange-500' : ''}`} onClick={() => setActivePage('dashboard')}>Dashboard</a>
        <a href="#" className={`hover:text-orange-500 ${activePage === 'users' ? 'text-orange-500' : ''}`} onClick={() => setActivePage('users')}>Users</a>
        <a href="#" className={`hover:text-orange-500 ${activePage === 'software' ? 'text-orange-500' : ''}`} onClick={() => setActivePage('software')}>Software</a>
        <a href="#" className={`hover:text-orange-500 ${activePage === 'settings' ? 'text-orange-500' : ''}`} onClick={() => setActivePage('settings')}>Settings</a>
      </div>
      <div className="flex items-center space-x-2">
        <Bell className="h-5 w-5 text-gray-300 hover:text-orange-500 cursor-pointer" />
        <User className="h-5 w-5 text-gray-300 hover:text-orange-500 cursor-pointer" />
      </div>
    </div>
  </nav>
);

const Dashboard = () => {
  const recentActivity = [
    { action: 'User account created', user: 'John Doe', timestamp: '2 hours ago' },
    { action: 'Software installed', user: 'Jane Smith', timestamp: '4 hours ago' },
    { action: 'Access rights updated', user: 'Mike Johnson', timestamp: 'Yesterday' },
  ];

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
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Users Onboarded</CardTitle>
            <User className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">245</div>
            <div className="h-[200px] mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={userOnboardedData}>
                  <XAxis dataKey="name" stroke="#888888" />
                  <YAxis stroke="#888888" />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#ff6b00" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Tasks</CardTitle>
            <FileText className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">12</div>
            <div className="h-[200px] mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={pendingTasksData}>
                  <XAxis dataKey="name" stroke="#888888" />
                  <YAxis stroke="#888888" />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#ff6b00" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Failed Installations</CardTitle>
            <Download className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">3</div>
            <div className="h-[200px] mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={failedInstallationsData}>
                  <XAxis dataKey="name" stroke="#888888" />
                  <YAxis stroke="#888888" />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#ff6b00" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex space-x-4 mb-8">
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded flex items-center">
          <Plus className="h-4 w-4 mr-2" /> Add New User
        </button>
        <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded flex items-center">
          <Download className="h-4 w-4 mr-2" /> Install Software
        </button>
        <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded flex items-center">
          <FileText className="h-4 w-4 mr-2" /> View Logs
        </button>
      </div>

      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {recentActivity.map((activity, index) => (
              <li key={index} className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{activity.action}</p>
                  <p className="text-sm text-gray-400">{activity.user}</p>
                </div>
                <span className="text-sm text-gray-400">{activity.timestamp}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

const UserDashboard = () => (
  <div className="container mx-auto mt-8 px-4">
    <h1 className="text-3xl font-bold mb-8">Your Progress</h1>
    <Card className="bg-gray-800 border-gray-700 mb-8">
      <CardHeader>
        <CardTitle>Onboarding Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
          <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: '75%' }}></div>
        </div>
        <p className="text-white">75% Complete</p>
      </CardContent>
    </Card>
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle>Pending Tasks</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          <li>Complete security training</li>
          <li>Set up two-factor authentication</li>
          <li>Review company policies</li>
        </ul>
      </CardContent>
    </Card>
  </div>
);

const UsersPage = () => (
  <div className="container mx-auto mt-8 px-4">
    <h1 className="text-3xl font-bold mb-8">Users</h1>
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle>User List</CardTitle>
      </CardHeader>
      <CardContent>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left pb-2">Name</th>
              <th className="text-left pb-2">Role</th>
              <th className="text-left pb-2">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2">John Doe</td>
              <td className="py-2">Developer</td>
              <td className="py-2">john.doe@example.com</td>
            </tr>
            <tr>
              <td className="py-2">Jane Smith</td>
              <td className="py-2">Designer</td>
              <td className="py-2">jane.smith@example.com</td>
            </tr>
            <tr>
              <td className="py-2">Mike Johnson</td>
              <td className="py-2">Manager</td>
              <td className="py-2">mike.johnson@example.com</td>
            </tr>
          </tbody>
        </table>
      </CardContent>
    </Card>
  </div>
);

const SoftwarePage = () => (
  <div className="container mx-auto mt-8 px-4">
    <h1 className="text-3xl font-bold mb-8">Software Installation</h1>
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle>Required Software</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {['KeePass', '7-Zip', 'Brave Browser', 'Visual Studio Code'].map((software, index) => (
            <li key={index} className="flex justify-between items-center">
              <span>{software}</span>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-1 px-3 rounded text-sm">
                Install
              </button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  </div>
);

const SettingsPage = () => {
  const [theme, setTheme] = useState('dark');

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Settings</h1>
      <Card className="bg-gray-800 border-gray-700 mb-8">
        <CardHeader>
          <CardTitle>Account Information</CardTitle>
        </CardHeader>
        <CardContent>
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Email:</strong> john.doe@example.com</p>
          <p><strong>Role:</strong> Developer</p>
        </CardContent>
      </Card>
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle>Theme Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            <span>Theme:</span>
            <button
              className={`p-2 rounded ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-600'}`}
              onClick={() => setTheme('dark')}
            >
              <Moon className="h-5 w-5" />
            </button>
            <button
              className={`p-2 rounded ${theme === 'light' ? 'bg-gray-700' : 'bg-gray-600'}`}
              onClick={() => setTheme('light')}
            >
              <Sun className="h-5 w-5" />
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const App = () => {
  const [activePage, setActivePage] = useState('dashboard');

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <Dashboard />;
      case 'users':
        return <UsersPage />;
      case 'software':
        return <SoftwarePage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Navigation activePage={activePage} setActivePage={setActivePage} />
      <main>{renderPage()}</main>
    </div>
  );
};

export default App;