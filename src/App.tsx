import React, { useState } from 'react';
import { User, ChevronDown, Settings, Moon, Sun, Bell, HelpCircle, LogOut, Search, Menu, X, ArrowRight } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Cases from './components/Cases';
import Courses from './components/Courses';
import SalesFunnel from './components/SalesFunnel';
import Analytics from './components/Analytics';
import Contacts from './components/Contacts';
import Documents from './components/Documents';
import Marketing from './components/Marketing';
import IncidentResponse from './components/IncidentResponse';
import Communications from './components/Communications';
import KnowledgeBase from './components/KnowledgeBase';
import AuditLogs from './components/AuditLogs';
import Reports from './components/Reports';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  // Search data for navigation
  const searchableItems = [
    { id: 'dashboard', title: 'Dashboard', description: 'Overview and key metrics', keywords: ['overview', 'stats', 'metrics', 'home'] },
    { id: 'cases', title: 'Cases', description: 'Manage cyber forensics cases', keywords: ['forensics', 'investigations', 'evidence', 'mobile analysis', 'cyber fraud'] },
    { id: 'courses', title: 'Courses', description: 'SOC and CEH training programs', keywords: ['training', 'education', 'soc', 'ceh', 'students', 'enrollment'] },
    { id: 'sales', title: 'Sales Funnel', description: 'Track leads and opportunities', keywords: ['leads', 'opportunities', 'pipeline', 'deals', 'conversion'] },
    { id: 'analytics', title: 'Analytics', description: 'Business insights and reports', keywords: ['insights', 'data', 'charts', 'performance', 'trends'] },
    { id: 'contacts', title: 'Contacts', description: 'Manage clients and students', keywords: ['clients', 'customers', 'students', 'people', 'directory'] },
    { id: 'documents', title: 'Documents', description: 'File management and storage', keywords: ['files', 'storage', 'evidence', 'reports', 'uploads'] },
    { id: 'marketing', title: 'Marketing', description: 'Campaigns and lead generation', keywords: ['campaigns', 'advertising', 'promotion', 'leads', 'social media'] },
    { id: 'incident-response', title: 'Incident Response', description: 'Security incident management', keywords: ['security', 'incidents', 'breaches', 'response', 'alerts'] },
    { id: 'communications', title: 'Communications', description: 'Team messaging and collaboration', keywords: ['messages', 'chat', 'team', 'collaboration', 'discussions'] },
    { id: 'knowledge-base', title: 'Knowledge Base', description: 'Documentation and procedures', keywords: ['docs', 'procedures', 'guides', 'help', 'wiki', 'sop'] },
    { id: 'audit-logs', title: 'Audit Logs', description: 'System activity and compliance', keywords: ['logs', 'activity', 'compliance', 'history', 'tracking'] },
    { id: 'reports', title: 'Reports', description: 'Generate business reports', keywords: ['export', 'pdf', 'analysis', 'summary', 'data export'] }
  ];

  const notifications = [
    { id: 1, title: 'New case assigned', message: 'Case C001 has been assigned to you', time: '5 min ago', unread: true },
    { id: 2, title: 'Course enrollment', message: 'New student enrolled in SOC course', time: '1 hour ago', unread: true },
    { id: 3, title: 'Payment received', message: 'Payment of $2,999 received from John Doe', time: '2 hours ago', unread: false },
  ];

  // Filter search results
  const searchResults = searchQuery.trim() 
    ? searchableItems.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase()))
      ).slice(0, 6) // Limit to 6 results
    : [];

  const handleSearchSelect = (itemId: string) => {
    setActiveTab(itemId);
    setSearchQuery('');
    setShowSearchResults(false);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    setShowSearchResults(value.trim().length > 0);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'cases':
        return <Cases />;
      case 'courses':
        return <Courses />;
      case 'sales':
        return <SalesFunnel />;
      case 'analytics':
        return <Analytics />;
      case 'contacts':
        return <Contacts />;
      case 'documents':
        return <Documents />;
      case 'marketing':
        return <Marketing />;
      case 'incident-response':
        return <IncidentResponse />;
      case 'communications':
        return <Communications />;
      case 'knowledge-base':
        return <KnowledgeBase />;
      case 'audit-logs':
        return <AuditLogs />;
      case 'reports':
        return <Reports />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        collapsed={sidebarCollapsed}
      />
      <main className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? 'ml-16' : 'ml-64'}`}>
        {/* Top Bar */}
        <div className="bg-white border-b border-slate-200 px-6 py-4 sticky top-0 z-40">
          <div className="flex items-center justify-between">
            {/* Left side - Menu toggle and Search */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                {sidebarCollapsed ? <Menu className="w-5 h-5 text-slate-600" /> : <X className="w-5 h-5 text-slate-600" />}
              </button>
              
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search cases, contacts, courses..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onFocus={() => searchQuery.trim() && setShowSearchResults(true)}
                  className="pl-10 pr-4 py-2 w-80 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                
                {/* Search Results Dropdown */}
                {showSearchResults && searchResults.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-slate-200 py-2 z-50 max-h-80 overflow-y-auto">
                    <div className="px-3 py-2 text-xs font-medium text-slate-500 uppercase tracking-wide border-b border-slate-200">
                      Search Results ({searchResults.length})
                    </div>
                    {searchResults.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleSearchSelect(item.id)}
                        className="w-full px-4 py-3 text-left hover:bg-slate-50 flex items-center justify-between group transition-colors"
                      >
                        <div className="flex-1">
                          <div className="font-medium text-slate-900 group-hover:text-cyan-600 transition-colors">
                            {item.title}
                          </div>
                          <div className="text-sm text-slate-600 mt-1">
                            {item.description}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-600 transition-colors" />
                      </button>
                    ))}
                  </div>
                )}
                
                {/* No Results */}
                {showSearchResults && searchQuery.trim() && searchResults.length === 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-slate-200 py-4 z-50">
                    <div className="px-4 text-center text-slate-500">
                      <Search className="w-8 h-8 mx-auto mb-2 text-slate-300" />
                      <p className="text-sm">No results found for "{searchQuery}"</p>
                      <p className="text-xs mt-1">Try searching for cases, courses, contacts, or other sections</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Right side - Settings, Notifications, Profile */}
            <div className="flex items-center space-x-3">
              {/* Settings */}
              <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                <Settings className="w-5 h-5 text-slate-600" />
              </button>
              
              {/* Notifications */}
              <div className="relative">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors relative"
                >
                  <Bell className="w-5 h-5 text-slate-600" />
                  {notifications.some(n => n.unread) && (
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                  )}
                </button>
                
                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-slate-200 py-2 z-50">
                    <div className="px-4 py-3 border-b border-slate-200">
                      <h3 className="text-sm font-medium text-slate-900">Notifications</h3>
                    </div>
                    <div className="max-h-80 overflow-y-auto">
                      {notifications.map((notification) => (
                        <div key={notification.id} className={`px-4 py-3 hover:bg-slate-50 ${notification.unread ? 'bg-blue-50' : ''}`}>
                          <div className="flex items-start space-x-3">
                            {notification.unread && (
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            )}
                            <div className="flex-1">
                              <p className="text-sm font-medium text-slate-900">{notification.title}</p>
                              <p className="text-sm text-slate-600 mt-1">{notification.message}</p>
                              <p className="text-xs text-slate-500 mt-1">{notification.time}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="px-4 py-2 border-t border-slate-200">
                      <button className="text-sm text-cyan-600 hover:text-cyan-700">View all notifications</button>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Profile Menu */}
              <div className="relative">
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left hidden md:block">
                    <p className="text-sm font-medium text-slate-900">Sarah Johnson</p>
                    <p className="text-xs text-slate-500">Senior Investigator</p>
                  </div>
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                </button>
                
                {showProfileMenu && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-slate-200 py-2 z-50">
                    <div className="px-4 py-3 border-b border-slate-200">
                      <p className="text-sm font-medium text-slate-900">Sarah Johnson</p>
                      <p className="text-xs text-slate-500">sarah.johnson@dronashield.com</p>
                    </div>
                    
                    <div className="py-2">
                      <button className="w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-50 flex items-center space-x-3">
                        <User className="w-4 h-4" />
                        <span>Edit Profile</span>
                      </button>
                      <button className="w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-50 flex items-center space-x-3">
                        <Settings className="w-4 h-4" />
                        <span>Account Settings</span>
                      </button>
                      <button 
                        onClick={() => setDarkMode(!darkMode)}
                        className="w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-50 flex items-center space-x-3"
                      >
                        {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                        <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
                      </button>
                      <button className="w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-50 flex items-center space-x-3">
                        <Bell className="w-4 h-4" />
                        <span>Notifications</span>
                      </button>
                      <button className="w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-50 flex items-center space-x-3">
                        <HelpCircle className="w-4 h-4" />
                        <span>Help & Support</span>
                      </button>
                    </div>
                    
                    <div className="border-t border-slate-200 pt-2">
                      <button className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center space-x-3">
                        <LogOut className="w-4 h-4" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="p-6">
          <div className="relative">
            <div className="max-w-7xl mx-auto">
              {renderContent()}
            </div>
          </div>
        </div>
      </main>
      
      {/* Click outside handlers */}
      {(showProfileMenu || showNotifications || showSearchResults) && (
        <div 
          className="fixed inset-0 z-30" 
          onClick={() => {
            setShowProfileMenu(false);
            setShowNotifications(false);
            setShowSearchResults(false);
          }}
        />
      )}
    </div>
  );
}

export default App;