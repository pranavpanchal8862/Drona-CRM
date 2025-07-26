import React, { useState } from 'react';
import { 
  Search, 
  Plus, 
  Filter, 
  User, 
  Mail, 
  Phone, 
  Building, 
  Tag,
  MoreHorizontal 
} from 'lucide-react';

const Contacts: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const contacts = [
    {
      id: 'C001',
      name: 'John Doe',
      email: 'john.doe@email.com',
      phone: '+1 (555) 123-4567',
      company: 'Tech Solutions Inc',
      type: 'client',
      tags: ['Mobile Analysis', 'VIP'],
      lastContact: '2025-01-15',
      status: 'active',
      totalSpent: '$15,000'
    },
    {
      id: 'C002',
      name: 'Jane Smith',
      email: 'jane.smith@email.com',
      phone: '+1 (555) 234-5678',
      company: 'Legal Associates LLC',
      type: 'client',
      tags: ['Computer Forensics', 'Recurring'],
      lastContact: '2025-01-12',
      status: 'active',
      totalSpent: '$28,500'
    },
    {
      id: 'S001',
      name: 'Alex Wilson',
      email: 'alex.wilson@email.com',
      phone: '+1 (555) 345-6789',
      company: 'Self-employed',
      type: 'student',
      tags: ['SOC Course', 'Active'],
      lastContact: '2025-01-14',
      status: 'enrolled',
      totalSpent: '$2,999'
    },
    {
      id: 'C003',
      name: 'Sarah Johnson',
      email: 'sarah.johnson@corporatelaw.com',
      phone: '+1 (555) 456-7890',
      company: 'Corporate Law Firm',
      type: 'client',
      tags: ['Cyber Fraud', 'High Priority'],
      lastContact: '2025-01-10',
      status: 'active',
      totalSpent: '$45,200'
    },
    {
      id: 'S002',
      name: 'Mike Chen',
      email: 'mike.chen@techstartup.com',
      phone: '+1 (555) 567-8901',
      company: 'TechStartup Inc',
      type: 'student',
      tags: ['CEH Course', 'Completed'],
      lastContact: '2025-01-08',
      status: 'graduated',
      totalSpent: '$3,499'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'enrolled':
        return 'bg-blue-100 text-blue-800';
      case 'graduated':
        return 'bg-purple-100 text-purple-800';
      case 'inactive':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'client':
        return 'bg-cyan-100 text-cyan-800';
      case 'student':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredContacts = contacts.filter(contact => {
    const matchesSearch = contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contact.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || contact.type === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Contacts</h1>
          <p className="text-slate-600">Manage clients and students</p>
        </div>
        <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-colors">
          <Plus className="w-4 h-4" />
          <span>Add Contact</span>
        </button>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search contacts..."
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
              <option value="all">All Types</option>
              <option value="client">Clients</option>
              <option value="student">Students</option>
            </select>
            
            <button className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 flex items-center space-x-2">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
          </div>
        </div>
      </div>

      {/* Contacts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredContacts.map((contact) => (
          <div key={contact.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-slate-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{contact.name}</h3>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(contact.type)}`}>
                    {contact.type}
                  </span>
                </div>
              </div>
              <button className="p-1 hover:bg-slate-100 rounded">
                <MoreHorizontal className="w-4 h-4 text-slate-400" />
              </button>
            </div>
            
            <div className="space-y-3 mb-4">
              <div className="flex items-center space-x-2 text-sm text-slate-600">
                <Mail className="w-4 h-4" />
                <span className="truncate">{contact.email}</span>
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-slate-600">
                <Phone className="w-4 h-4" />
                <span>{contact.phone}</span>
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-slate-600">
                <Building className="w-4 h-4" />
                <span className="truncate">{contact.company}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between mb-4">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(contact.status)}`}>
                {contact.status}
              </span>
              <span className="text-sm font-medium text-slate-900">{contact.totalSpent}</span>
            </div>
            
            <div className="flex flex-wrap gap-1 mb-4">
              {contact.tags.map((tag, index) => (
                <span key={index} className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-slate-100 text-slate-700">
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="text-xs text-slate-500 border-t border-slate-200 pt-3">
              Last contact: {contact.lastContact}
            </div>
          </div>
        ))}
      </div>
      
      {filteredContacts.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-8 h-8 text-slate-400" />
          </div>
          <h3 className="text-lg font-medium text-slate-900 mb-2">No contacts found</h3>
          <p className="text-slate-600">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};

export default Contacts;