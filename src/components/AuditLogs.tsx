import React, { useState } from 'react';
import { 
  Activity, 
  Search, 
  Filter, 
  Calendar,
  User,
  Shield,
  FileText,
  Settings,
  AlertTriangle,
  CheckCircle,
  Clock,
  Download
} from 'lucide-react';

const AuditLogs: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [dateRange, setDateRange] = useState('today');

  const auditLogs = [
    {
      id: 'LOG001',
      timestamp: '2025-01-15 16:45:23',
      user: 'Sarah Johnson',
      action: 'Case Created',
      resource: 'Case C001 - Mobile Analysis',
      details: 'New case created for client John Doe',
      ipAddress: '192.168.1.100',
      userAgent: 'Chrome 120.0.0.0',
      severity: 'info',
      category: 'case_management'
    },
    {
      id: 'LOG002',
      timestamp: '2025-01-15 16:30:15',
      user: 'Mike Chen',
      action: 'Document Upload',
      resource: 'Evidence File - IMG_001.jpg',
      details: 'Evidence file uploaded to Case C002',
      ipAddress: '192.168.1.101',
      userAgent: 'Firefox 121.0.0.0',
      severity: 'info',
      category: 'document_management'
    },
    {
      id: 'LOG003',
      timestamp: '2025-01-15 15:20:45',
      user: 'Emily Davis',
      action: 'Login Attempt',
      resource: 'User Authentication',
      details: 'Failed login attempt - incorrect password',
      ipAddress: '203.0.113.45',
      userAgent: 'Chrome 120.0.0.0',
      severity: 'warning',
      category: 'authentication'
    },
    {
      id: 'LOG004',
      timestamp: '2025-01-15 14:15:30',
      user: 'Alex Wilson',
      action: 'Settings Modified',
      resource: 'System Configuration',
      details: 'Updated notification preferences',
      ipAddress: '192.168.1.102',
      userAgent: 'Safari 17.2.0',
      severity: 'info',
      category: 'system_settings'
    },
    {
      id: 'LOG005',
      timestamp: '2025-01-15 13:45:12',
      user: 'Sarah Johnson',
      action: 'Data Export',
      resource: 'Case Report C001',
      details: 'Case report exported to PDF format',
      ipAddress: '192.168.1.100',
      userAgent: 'Chrome 120.0.0.0',
      severity: 'info',
      category: 'data_export'
    },
    {
      id: 'LOG006',
      timestamp: '2025-01-15 12:30:08',
      user: 'System',
      action: 'Backup Completed',
      resource: 'Database Backup',
      details: 'Automated daily backup completed successfully',
      ipAddress: 'localhost',
      userAgent: 'System Process',
      severity: 'success',
      category: 'system_maintenance'
    },
    {
      id: 'LOG007',
      timestamp: '2025-01-15 11:15:45',
      user: 'Mike Chen',
      action: 'Permission Changed',
      resource: 'User: Emily Davis',
      details: 'Granted access to Incident Response module',
      ipAddress: '192.168.1.101',
      userAgent: 'Firefox 121.0.0.0',
      severity: 'warning',
      category: 'user_management'
    }
  ];

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'success':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'warning':
        return <AlertTriangle className="w-4 h-4 text-orange-500" />;
      case 'error':
        return <AlertTriangle className="w-4 h-4 text-red-500" />;
      default:
        return <Clock className="w-4 h-4 text-blue-500" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'success':
        return 'bg-green-100 text-green-800';
      case 'warning':
        return 'bg-orange-100 text-orange-800';
      case 'error':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  const getActionIcon = (action: string) => {
    if (action.includes('Login') || action.includes('Authentication')) {
      return <Shield className="w-4 h-4 text-cyan-500" />;
    } else if (action.includes('Document') || action.includes('Upload') || action.includes('Export')) {
      return <FileText className="w-4 h-4 text-purple-500" />;
    } else if (action.includes('Settings') || action.includes('Permission')) {
      return <Settings className="w-4 h-4 text-orange-500" />;
    } else {
      return <Activity className="w-4 h-4 text-slate-500" />;
    }
  };

  const filteredLogs = auditLogs.filter(log => {
    const matchesFilter = selectedFilter === 'all' || log.category === selectedFilter;
    const matchesSearch = log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.resource.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.details.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const categories = [
    'case_management',
    'document_management',
    'authentication',
    'system_settings',
    'data_export',
    'system_maintenance',
    'user_management'
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Audit Logs</h1>
          <p className="text-slate-600">Monitor system activity and user actions for compliance and security</p>
        </div>
        <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-colors">
          <Download className="w-4 h-4" />
          <span>Export Logs</span>
        </button>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Activity className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">247</p>
              <p className="text-slate-600 text-sm">Total Events Today</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">234</p>
              <p className="text-slate-600 text-sm">Successful Actions</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-orange-100 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">13</p>
              <p className="text-slate-600 text-sm">Warnings</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-red-100 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">0</p>
              <p className="text-slate-600 text-sm">Critical Errors</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search audit logs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="flex space-x-4">
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            >
              <option value="all">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>
                  {category.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </option>
              ))}
            </select>
            
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            >
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="custom">Custom Range</option>
            </select>
            
            <button className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 flex items-center space-x-2">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
          </div>
        </div>
      </div>

      {/* Audit Logs Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="text-left py-3 px-4 font-medium text-slate-900">Timestamp</th>
                <th className="text-left py-3 px-4 font-medium text-slate-900">User</th>
                <th className="text-left py-3 px-4 font-medium text-slate-900">Action</th>
                <th className="text-left py-3 px-4 font-medium text-slate-900">Resource</th>
                <th className="text-left py-3 px-4 font-medium text-slate-900">Details</th>
                <th className="text-left py-3 px-4 font-medium text-slate-900">Severity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {filteredLogs.map((log) => (
                <tr key={log.id} className="hover:bg-slate-50">
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      <span className="text-sm font-mono text-slate-900">{log.timestamp}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-slate-400" />
                      <span className="text-sm text-slate-900">{log.user}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      {getActionIcon(log.action)}
                      <span className="text-sm font-medium text-slate-900">{log.action}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-sm text-slate-600">{log.resource}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-sm text-slate-600">{log.details}</span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      {getSeverityIcon(log.severity)}
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(log.severity)}`}>
                        {log.severity}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {filteredLogs.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Activity className="w-8 h-8 text-slate-400" />
          </div>
          <h3 className="text-lg font-medium text-slate-900 mb-2">No audit logs found</h3>
          <p className="text-slate-600">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};

export default AuditLogs;