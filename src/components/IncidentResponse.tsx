import React, { useState } from 'react';
import { Shield as Shield2, AlertTriangle, Clock, CheckCircle, Users, Calendar, Plus, Search, Filter, MoreHorizontal, Activity, FileText, Phone } from 'lucide-react';

const IncidentResponse: React.FC = () => {
  const [selectedSeverity, setSelectedSeverity] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const incidents = [
    {
      id: 'INC001',
      title: 'Data Breach - Customer Database',
      type: 'Data Breach',
      severity: 'critical',
      status: 'active',
      reportedBy: 'IT Security Team',
      assignedTo: 'Sarah Johnson',
      reportedDate: '2025-01-15 14:30',
      lastUpdate: '2025-01-15 16:45',
      estimatedResolution: '2025-01-16 18:00',
      affectedSystems: ['Customer DB', 'Web Portal'],
      description: 'Unauthorized access detected in customer database. Potential data exfiltration.',
      priority: 'P1'
    },
    {
      id: 'INC002',
      title: 'Malware Detection - Workstation Network',
      type: 'Malware',
      severity: 'high',
      status: 'investigating',
      reportedBy: 'Network Monitoring',
      assignedTo: 'Mike Chen',
      reportedDate: '2025-01-15 09:15',
      lastUpdate: '2025-01-15 15:20',
      estimatedResolution: '2025-01-16 12:00',
      affectedSystems: ['Workstation Network', 'File Server'],
      description: 'Suspicious malware activity detected on multiple workstations.',
      priority: 'P2'
    },
    {
      id: 'INC003',
      title: 'Phishing Campaign - Email Security',
      type: 'Phishing',
      severity: 'medium',
      status: 'contained',
      reportedBy: 'Email Security System',
      assignedTo: 'Emily Davis',
      reportedDate: '2025-01-14 16:20',
      lastUpdate: '2025-01-15 10:30',
      estimatedResolution: '2025-01-15 20:00',
      affectedSystems: ['Email System'],
      description: 'Targeted phishing emails detected and quarantined.',
      priority: 'P3'
    }
  ];

  const responseTeam = [
    { name: 'Sarah Johnson', role: 'Lead Investigator', status: 'active', cases: 2 },
    { name: 'Mike Chen', role: 'Malware Analyst', status: 'active', cases: 1 },
    { name: 'Emily Davis', role: 'Digital Forensics', status: 'available', cases: 1 },
    { name: 'Alex Wilson', role: 'Network Security', status: 'on-call', cases: 0 }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'high':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-red-100 text-red-800';
      case 'investigating':
        return 'bg-orange-100 text-orange-800';
      case 'contained':
        return 'bg-blue-100 text-blue-800';
      case 'resolved':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <AlertTriangle className="w-4 h-4 text-red-500" />;
      case 'investigating':
        return <Clock className="w-4 h-4 text-orange-500" />;
      case 'contained':
        return <Shield2 className="w-4 h-4 text-blue-500" />;
      case 'resolved':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      default:
        return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  const filteredIncidents = incidents.filter(incident => {
    const matchesSeverity = selectedSeverity === 'all' || incident.severity === selectedSeverity;
    const matchesSearch = incident.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         incident.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         incident.id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSeverity && matchesSearch;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Incident Response</h1>
          <p className="text-slate-600">Monitor and manage cybersecurity incidents</p>
        </div>
        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-colors">
          <Plus className="w-4 h-4" />
          <span>Report Incident</span>
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-red-100 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">3</p>
              <p className="text-slate-600 text-sm">Active Incidents</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Clock className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">4.2h</p>
              <p className="text-slate-600 text-sm">Avg Response Time</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">28</p>
              <p className="text-slate-600 text-sm">Resolved This Month</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Users className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">4</p>
              <p className="text-slate-600 text-sm">Response Team</p>
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
                placeholder="Search incidents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="flex space-x-4">
            <select
              value={selectedSeverity}
              onChange={(e) => setSelectedSeverity(e.target.value)}
              className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            >
              <option value="all">All Severities</option>
              <option value="critical">Critical</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
            
            <button className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 flex items-center space-x-2">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Incidents List */}
        <div className="lg:col-span-2 space-y-4">
          {filteredIncidents.map((incident) => (
            <div key={incident.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  {getStatusIcon(incident.status)}
                  <div>
                    <h3 className="font-semibold text-slate-900">{incident.title}</h3>
                    <p className="text-slate-600 text-sm">{incident.id} • {incident.type}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getSeverityColor(incident.severity)}`}>
                    {incident.severity}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(incident.status)}`}>
                    {incident.status}
                  </span>
                  <button className="p-1 hover:bg-slate-100 rounded">
                    <MoreHorizontal className="w-4 h-4 text-slate-400" />
                  </button>
                </div>
              </div>
              
              <p className="text-slate-600 text-sm mb-4">{incident.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <span className="text-slate-500">Reported by:</span>
                  <p className="font-medium text-slate-900">{incident.reportedBy}</p>
                </div>
                <div>
                  <span className="text-slate-500">Assigned to:</span>
                  <p className="font-medium text-slate-900">{incident.assignedTo}</p>
                </div>
                <div>
                  <span className="text-slate-500">Reported:</span>
                  <p className="font-medium text-slate-900">{incident.reportedDate}</p>
                </div>
                <div>
                  <span className="text-slate-500">Est. Resolution:</span>
                  <p className="font-medium text-slate-900">{incident.estimatedResolution}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {incident.affectedSystems.map((system, index) => (
                    <span key={index} className="px-2 py-1 bg-slate-100 text-slate-700 rounded-full text-xs">
                      {system}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-2">
                  <button className="px-3 py-1 bg-slate-100 text-slate-700 rounded text-sm hover:bg-slate-200 flex items-center space-x-1">
                    <FileText className="w-3 h-3" />
                    <span>Details</span>
                  </button>
                  <button className="px-3 py-1 bg-cyan-600 text-white rounded text-sm hover:bg-cyan-700 flex items-center space-x-1">
                    <Activity className="w-3 h-3" />
                    <span>Update</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Response Team */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Response Team</h3>
          
          <div className="space-y-4">
            {responseTeam.map((member, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
                <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-cyan-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-slate-900">{member.name}</h4>
                  <p className="text-slate-600 text-sm">{member.role}</p>
                </div>
                <div className="text-right">
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                    member.status === 'active' ? 'bg-green-100 text-green-800' :
                    member.status === 'available' ? 'bg-blue-100 text-blue-800' :
                    'bg-orange-100 text-orange-800'
                  }`}>
                    {member.status}
                  </span>
                  <p className="text-xs text-slate-500 mt-1">{member.cases} active</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 pt-4 border-t border-slate-200">
            <button className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center justify-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>Emergency Escalation</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncidentResponse;