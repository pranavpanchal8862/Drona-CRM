import React, { useState } from 'react';
import { 
  Settings as SettingsIcon, 
  User, 
  Shield, 
  Bell, 
  Palette, 
  Database, 
  Mail, 
  Lock, 
  Globe, 
  Download, 
  Upload,
  Eye,
  EyeOff,
  Save,
  RefreshCw,
  Trash2,
  AlertTriangle,
  CheckCircle,
  Moon,
  Sun,
  Monitor,
  Smartphone,
  Key,
  Users,
  FileText,
  Clock,
  Zap
} from 'lucide-react';

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [darkMode, setDarkMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    caseUpdates: true,
    courseEnrollments: true,
    paymentAlerts: true,
    systemAlerts: true
  });

  const settingsTabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'system', label: 'System', icon: Database },
    { id: 'integrations', label: 'Integrations', icon: Globe },
    { id: 'backup', label: 'Backup & Export', icon: Download }
  ];

  const handleNotificationChange = (key: string) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Profile Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    defaultValue="Sarah Johnson"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    defaultValue="sarah.johnson@dronashield.com"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    defaultValue="+1 (555) 123-4567"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Job Title</label>
                  <input
                    type="text"
                    defaultValue="Senior Investigator"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-2">Bio</label>
                  <textarea
                    rows={3}
                    defaultValue="Experienced digital forensics investigator specializing in mobile device analysis and cyber fraud cases."
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Profile Picture</h3>
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-cyan-600 rounded-full flex items-center justify-center">
                  <User className="w-10 h-10 text-white" />
                </div>
                <div>
                  <button className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 mr-2">
                    Upload New
                  </button>
                  <button className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'security':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Password & Authentication</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Current Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className="w-full px-4 py-2 pr-10 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                    <button
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4 text-slate-400" /> : <Eye className="w-4 h-4 text-slate-400" />}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">New Password</label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Confirm New Password</label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Two-Factor Authentication</h3>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-medium text-green-900">2FA is enabled</p>
                    <p className="text-sm text-green-700">Your account is protected with two-factor authentication</p>
                  </div>
                </div>
                <button className="mt-3 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                  Manage 2FA
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">API Keys</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Key className="w-5 h-5 text-slate-600" />
                    <div>
                      <p className="font-medium text-slate-900">Production API Key</p>
                      <p className="text-sm text-slate-600">Last used 2 hours ago</p>
                    </div>
                  </div>
                  <button className="px-3 py-1 text-sm bg-slate-200 text-slate-700 rounded hover:bg-slate-300">
                    Regenerate
                  </button>
                </div>
                <button className="w-full px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 flex items-center justify-center space-x-2">
                  <Key className="w-4 h-4" />
                  <span>Generate New API Key</span>
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Active Sessions</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Monitor className="w-5 h-5 text-slate-600" />
                    <div>
                      <p className="font-medium text-slate-900">Chrome on Windows</p>
                      <p className="text-sm text-slate-600">Current session • New York, NY</p>
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                    Active
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Smartphone className="w-5 h-5 text-slate-600" />
                    <div>
                      <p className="font-medium text-slate-900">Mobile App</p>
                      <p className="text-sm text-slate-600">2 hours ago • New York, NY</p>
                    </div>
                  </div>
                  <button className="px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded">
                    Revoke
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'notifications':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Notification Preferences</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-slate-600" />
                    <div>
                      <p className="font-medium text-slate-900">Email Notifications</p>
                      <p className="text-sm text-slate-600">Receive notifications via email</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={notifications.email}
                      onChange={() => handleNotificationChange('email')}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Bell className="w-5 h-5 text-slate-600" />
                    <div>
                      <p className="font-medium text-slate-900">Push Notifications</p>
                      <p className="text-sm text-slate-600">Browser push notifications</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={notifications.push}
                      onChange={() => handleNotificationChange('push')}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Smartphone className="w-5 h-5 text-slate-600" />
                    <div>
                      <p className="font-medium text-slate-900">SMS Notifications</p>
                      <p className="text-sm text-slate-600">Text message alerts</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={notifications.sms}
                      onChange={() => handleNotificationChange('sms')}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-600"></div>
                  </label>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Activity Notifications</h3>
              <div className="space-y-4">
                {[
                  { key: 'caseUpdates', label: 'Case Updates', desc: 'New cases, status changes, and assignments' },
                  { key: 'courseEnrollments', label: 'Course Enrollments', desc: 'New student enrollments and completions' },
                  { key: 'paymentAlerts', label: 'Payment Alerts', desc: 'Payment confirmations and failures' },
                  { key: 'systemAlerts', label: 'System Alerts', desc: 'System maintenance and security alerts' }
                ].map((item) => (
                  <div key={item.key} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <div>
                      <p className="font-medium text-slate-900">{item.label}</p>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={notifications[item.key as keyof typeof notifications]}
                        onChange={() => handleNotificationChange(item.key)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-600"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'appearance':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Theme</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border-2 border-cyan-500 bg-cyan-50 rounded-lg cursor-pointer">
                  <div className="flex items-center space-x-3 mb-3">
                    <Sun className="w-5 h-5 text-cyan-600" />
                    <span className="font-medium text-slate-900">Light</span>
                  </div>
                  <div className="w-full h-20 bg-white rounded border shadow-sm"></div>
                </div>
                <div className="p-4 border-2 border-slate-200 rounded-lg cursor-pointer hover:border-slate-300">
                  <div className="flex items-center space-x-3 mb-3">
                    <Moon className="w-5 h-5 text-slate-600" />
                    <span className="font-medium text-slate-900">Dark</span>
                  </div>
                  <div className="w-full h-20 bg-slate-800 rounded border"></div>
                </div>
                <div className="p-4 border-2 border-slate-200 rounded-lg cursor-pointer hover:border-slate-300">
                  <div className="flex items-center space-x-3 mb-3">
                    <Monitor className="w-5 h-5 text-slate-600" />
                    <span className="font-medium text-slate-900">System</span>
                  </div>
                  <div className="w-full h-20 bg-gradient-to-r from-white to-slate-800 rounded border"></div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Display Settings</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Sidebar Width</label>
                  <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                    <option>Compact</option>
                    <option selected>Normal</option>
                    <option>Wide</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Font Size</label>
                  <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                    <option>Small</option>
                    <option selected>Medium</option>
                    <option>Large</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Density</label>
                  <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                    <option>Compact</option>
                    <option selected>Comfortable</option>
                    <option>Spacious</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        );

      case 'system':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">System Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-lg">
                  <p className="text-sm text-slate-600">Version</p>
                  <p className="font-medium text-slate-900">v2.1.4</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg">
                  <p className="text-sm text-slate-600">Last Updated</p>
                  <p className="font-medium text-slate-900">January 15, 2025</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg">
                  <p className="text-sm text-slate-600">Database Size</p>
                  <p className="font-medium text-slate-900">2.4 GB</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg">
                  <p className="text-sm text-slate-600">Active Users</p>
                  <p className="font-medium text-slate-900">12</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Performance Settings</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Auto-refresh Interval</label>
                  <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                    <option>30 seconds</option>
                    <option selected>1 minute</option>
                    <option>5 minutes</option>
                    <option>Never</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Items per page</label>
                  <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                    <option>10</option>
                    <option>25</option>
                    <option selected>50</option>
                    <option>100</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Cache & Storage</h3>
              <div className="space-y-3">
                <button className="w-full px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 flex items-center justify-center space-x-2">
                  <RefreshCw className="w-4 h-4" />
                  <span>Clear Cache</span>
                </button>
                <button className="w-full px-4 py-2 bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200 flex items-center justify-center space-x-2">
                  <Trash2 className="w-4 h-4" />
                  <span>Clear All Data</span>
                </button>
              </div>
            </div>
          </div>
        );

      case 'integrations':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Connected Services</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Email Service</p>
                      <p className="text-sm text-slate-600">Connected to Gmail</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                      Active
                    </span>
                    <button className="px-3 py-1 text-sm text-slate-600 hover:bg-slate-200 rounded">
                      Configure
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Cloud Storage</p>
                      <p className="text-sm text-slate-600">Google Drive integration</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                      Active
                    </span>
                    <button className="px-3 py-1 text-sm text-slate-600 hover:bg-slate-200 rounded">
                      Configure
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Slack Integration</p>
                      <p className="text-sm text-slate-600">Team notifications</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">
                      Inactive
                    </span>
                    <button className="px-3 py-1 text-sm bg-cyan-600 text-white rounded hover:bg-cyan-700">
                      Connect
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Available Integrations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-slate-200 rounded-lg hover:border-slate-300">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium text-slate-900">Zapier</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-3">Automate workflows with 3000+ apps</p>
                  <button className="w-full px-3 py-2 bg-slate-100 text-slate-700 rounded hover:bg-slate-200">
                    Connect
                  </button>
                </div>

                <div className="p-4 border border-slate-200 rounded-lg hover:border-slate-300">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                      <Globe className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium text-slate-900">Webhook</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-3">Custom webhook integrations</p>
                  <button className="w-full px-3 py-2 bg-slate-100 text-slate-700 rounded hover:bg-slate-200">
                    Setup
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'backup':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Backup Settings</h3>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-medium text-green-900">Automatic Backup Enabled</p>
                      <p className="text-sm text-green-700">Daily backups at 2:00 AM</p>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Backup Frequency</label>
                  <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                    <option selected>Daily</option>
                    <option>Weekly</option>
                    <option>Monthly</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Retention Period</label>
                  <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                    <option>7 days</option>
                    <option selected>30 days</option>
                    <option>90 days</option>
                    <option>1 year</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Recent Backups</h3>
              <div className="space-y-3">
                {[
                  { date: '2025-01-15 02:00', size: '2.4 GB', status: 'completed' },
                  { date: '2025-01-14 02:00', size: '2.3 GB', status: 'completed' },
                  { date: '2025-01-13 02:00', size: '2.3 GB', status: 'completed' }
                ].map((backup, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <div>
                        <p className="font-medium text-slate-900">{backup.date}</p>
                        <p className="text-sm text-slate-600">{backup.size}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                        {backup.status}
                      </span>
                      <button className="px-3 py-1 text-sm bg-cyan-600 text-white rounded hover:bg-cyan-700">
                        Download
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Data Export</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button className="p-4 border border-slate-200 rounded-lg hover:border-slate-300 text-left">
                  <div className="flex items-center space-x-3 mb-2">
                    <Download className="w-5 h-5 text-slate-600" />
                    <span className="font-medium text-slate-900">Export Cases</span>
                  </div>
                  <p className="text-sm text-slate-600">Download all case data as CSV/PDF</p>
                </button>

                <button className="p-4 border border-slate-200 rounded-lg hover:border-slate-300 text-left">
                  <div className="flex items-center space-x-3 mb-2">
                    <Download className="w-5 h-5 text-slate-600" />
                    <span className="font-medium text-slate-900">Export Contacts</span>
                  </div>
                  <p className="text-sm text-slate-600">Download contact information</p>
                </button>

                <button className="p-4 border border-slate-200 rounded-lg hover:border-slate-300 text-left">
                  <div className="flex items-center space-x-3 mb-2">
                    <Download className="w-5 h-5 text-slate-600" />
                    <span className="font-medium text-slate-900">Export Reports</span>
                  </div>
                  <p className="text-sm text-slate-600">Download generated reports</p>
                </button>

                <button className="p-4 border border-slate-200 rounded-lg hover:border-slate-300 text-left">
                  <div className="flex items-center space-x-3 mb-2">
                    <Upload className="w-5 h-5 text-slate-600" />
                    <span className="font-medium text-slate-900">Import Data</span>
                  </div>
                  <p className="text-sm text-slate-600">Import data from external sources</p>
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Settings</h1>
          <p className="text-slate-600">Manage your account and system preferences</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="flex">
          {/* Settings Sidebar */}
          <div className="w-64 border-r border-slate-200 bg-slate-50">
            <nav className="p-4 space-y-2">
              {settingsTabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 text-left rounded-lg transition-colors ${
                      activeTab === tab.id
                        ? 'bg-cyan-100 text-cyan-700 border-cyan-200'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Settings Content */}
          <div className="flex-1 p-8">
            {renderTabContent()}
            
            {/* Save Button */}
            <div className="mt-8 pt-6 border-t border-slate-200">
              <div className="flex items-center justify-between">
                <p className="text-sm text-slate-600">
                  Changes are saved automatically
                </p>
                <button className="px-6 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 flex items-center space-x-2">
                  <Save className="w-4 h-4" />
                  <span>Save Changes</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;