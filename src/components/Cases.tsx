import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  MoreHorizontal, 
  Calendar,
  User,
  Tag,
  AlertCircle,
  CheckCircle,
  Clock
} from 'lucide-react';

const Cases: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    'Sexual Harassment',
    'Section 63 (4) (C)',
    'Divorce Cases',
    'Private Cases',
    'Mobile Analysis',
    'Computer Forensics',
    'Content Removal',
    'Cyber Fraud',
    'Mobile Data Recovery'
  ];

  const cases = [
    {
      id: 'C001',
      title: 'Mobile Data Recovery - Samsung Galaxy',
      client: 'John Doe',
      category: 'Mobile Data Recovery',
      status: 'in-progress',
      priority: 'high',
      dateCreated: '2025-01-15',
      deadline: '2025-01-20',
      assignedTo: 'Sarah Johnson',
      documents: 3
    },
    {
      id: 'C002',
      title: 'Cyber Fraud Investigation',
      client: 'ABC Corporation',
      category: 'Cyber Fraud',
      status: 'pending',
      priority: 'urgent',
      dateCreated: '2025-01-14',
      deadline: '2025-01-18',
      assignedTo: 'Mike Chen',
      documents: 8
    },
    {
      id: 'C003',
      title: 'Computer Forensics Analysis',
      client: 'Jane Smith',
      category: 'Computer Forensics',
      status: 'completed',
      priority: 'medium',
      dateCreated: '2025-01-10',
      deadline: '2025-01-15',
      assignedTo: 'Emily Davis',
      documents: 12
    },
    {
      id: 'C004',
      title: 'Content Removal Request',
      client: 'Tech Startup Inc',
      category: 'Content Removal',
      status: 'in-progress',
      priority: 'low',
      dateCreated: '2025-01-12',
      deadline: '2025-01-25',
      assignedTo: 'Alex Wilson',
      documents: 2
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'in-progress':
        return <Clock className="w-4 h-4 text-blue-500" />;
      case 'pending':
        return <AlertCircle className="w-4 h-4 text-orange-500" />;
      default:
        return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      case 'pending':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent':
        return 'bg-red-100 text-red-800';
      case 'high':
        return 'bg-orange-100 text-orange-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredCases = cases.filter(case_ => {
    const matchesCategory = selectedCategory === 'all' || case_.category === selectedCategory;
    const matchesSearch = case_.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         case_.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         case_.id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Cases</h1>
          <p className="text-slate-600">Manage and track cyber forensics cases</p>
        </div>
        <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-colors">
          <Plus className="w-4 h-4" />
          <span>New Case</span>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search cases..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="flex space-x-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            >
              <option value="all">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            
            <button className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 flex items-center space-x-2">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
          </div>
        </div>
      </div>

      {/* Cases Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredCases.map((case_) => (
          <div key={case_.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-2">
                {getStatusIcon(case_.status)}
                <span className="font-mono text-sm text-slate-600">{case_.id}</span>
              </div>
              <button className="p-1 hover:bg-slate-100 rounded">
                <MoreHorizontal className="w-4 h-4 text-slate-400" />
              </button>
            </div>
            
            <h3 className="font-semibold text-slate-900 mb-2 line-clamp-2">{case_.title}</h3>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center space-x-2 text-sm text-slate-600">
                <User className="w-4 h-4" />
                <span>{case_.client}</span>
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-slate-600">
                <Tag className="w-4 h-4" />
                <span>{case_.category}</span>
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-slate-600">
                <Calendar className="w-4 h-4" />
                <span>Due: {case_.deadline}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between mb-4">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(case_.status)}`}>
                {case_.status.replace('-', ' ')}
              </span>
              
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(case_.priority)}`}>
                {case_.priority}
              </span>
            </div>
            
            <div className="flex items-center justify-between text-sm text-slate-600">
              <span>Assigned to: {case_.assignedTo}</span>
              <span>{case_.documents} docs</span>
            </div>
          </div>
        ))}
      </div>
      
      {filteredCases.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-slate-400" />
          </div>
          <h3 className="text-lg font-medium text-slate-900 mb-2">No cases found</h3>
          <p className="text-slate-600">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};

export default Cases;