import React, { useState } from 'react';
import { 
  Upload, 
  Search, 
  Filter, 
  FolderOpen, 
  FileText, 
  Image, 
  Video, 
  Archive,
  Download,
  Share2,
  Lock,
  Eye,
  MoreHorizontal,
  Calendar,
  User,
  Tag
} from 'lucide-react';

const Documents: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');

  const documentCategories = [
    'Case Files',
    'Evidence',
    'Legal Documents',
    'Client Reports',
    'Digital Logs',
    'Policy Documents',
    'Course Materials',
    'Templates'
  ];

  const documents = [
    {
      id: 'DOC001',
      name: 'Mobile Analysis Report - Case C001',
      type: 'pdf',
      category: 'Case Files',
      size: '2.4 MB',
      uploadedBy: 'Sarah Johnson',
      uploadDate: '2025-01-15',
      lastModified: '2025-01-15',
      caseId: 'C001',
      accessLevel: 'restricted',
      version: '1.0',
      tags: ['mobile', 'analysis', 'final-report']
    },
    {
      id: 'DOC002',
      name: 'Digital Evidence Chain of Custody',
      type: 'xlsx',
      category: 'Evidence',
      size: '156 KB',
      uploadedBy: 'Mike Chen',
      uploadDate: '2025-01-14',
      lastModified: '2025-01-14',
      caseId: 'C002',
      accessLevel: 'confidential',
      version: '2.1',
      tags: ['evidence', 'custody', 'legal']
    },
    {
      id: 'DOC003',
      name: 'Cyber Fraud Investigation Photos',
      type: 'zip',
      category: 'Evidence',
      size: '45.2 MB',
      uploadedBy: 'Emily Davis',
      uploadDate: '2025-01-13',
      lastModified: '2025-01-13',
      caseId: 'C002',
      accessLevel: 'restricted',
      version: '1.0',
      tags: ['photos', 'fraud', 'evidence']
    },
    {
      id: 'DOC004',
      name: 'SOC Course Curriculum v3.2',
      type: 'docx',
      category: 'Course Materials',
      size: '890 KB',
      uploadedBy: 'Alex Wilson',
      uploadDate: '2025-01-12',
      lastModified: '2025-01-12',
      caseId: null,
      accessLevel: 'internal',
      version: '3.2',
      tags: ['soc', 'curriculum', 'course']
    }
  ];

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return <FileText className="w-8 h-8 text-red-500" />;
      case 'xlsx':
      case 'xls':
        return <FileText className="w-8 h-8 text-green-500" />;
      case 'docx':
      case 'doc':
        return <FileText className="w-8 h-8 text-blue-500" />;
      case 'zip':
      case 'rar':
        return <Archive className="w-8 h-8 text-orange-500" />;
      case 'jpg':
      case 'png':
      case 'gif':
        return <Image className="w-8 h-8 text-purple-500" />;
      case 'mp4':
      case 'avi':
        return <Video className="w-8 h-8 text-pink-500" />;
      default:
        return <FileText className="w-8 h-8 text-slate-500" />;
    }
  };

  const getAccessLevelColor = (level: string) => {
    switch (level) {
      case 'confidential':
        return 'bg-red-100 text-red-800';
      case 'restricted':
        return 'bg-orange-100 text-orange-800';
      case 'internal':
        return 'bg-blue-100 text-blue-800';
      case 'public':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredDocuments = documents.filter(doc => {
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Document Management</h1>
          <p className="text-slate-600">Secure repository for case files, evidence, and documentation</p>
        </div>
        <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-colors">
          <Upload className="w-4 h-4" />
          <span>Upload Document</span>
        </button>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search documents..."
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
              {documentCategories.map(category => (
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

      {/* Document Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredDocuments.map((doc) => (
          <div key={doc.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                {getFileIcon(doc.type)}
                <div className="flex items-center space-x-2">
                  <Lock className="w-4 h-4 text-slate-400" />
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getAccessLevelColor(doc.accessLevel)}`}>
                    {doc.accessLevel}
                  </span>
                </div>
              </div>
              <button className="p-1 hover:bg-slate-100 rounded">
                <MoreHorizontal className="w-4 h-4 text-slate-400" />
              </button>
            </div>
            
            <h3 className="font-semibold text-slate-900 mb-2 line-clamp-2">{doc.name}</h3>
            
            <div className="space-y-2 mb-4 text-sm text-slate-600">
              <div className="flex items-center justify-between">
                <span>Category:</span>
                <span className="font-medium">{doc.category}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span>Size:</span>
                <span className="font-medium">{doc.size}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span>Version:</span>
                <span className="font-medium">v{doc.version}</span>
              </div>
              
              {doc.caseId && (
                <div className="flex items-center justify-between">
                  <span>Case ID:</span>
                  <span className="font-medium text-cyan-600">{doc.caseId}</span>
                </div>
              )}
            </div>
            
            <div className="flex flex-wrap gap-1 mb-4">
              {doc.tags.map((tag, index) => (
                <span key={index} className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-slate-100 text-slate-700">
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
              <div className="flex items-center space-x-1">
                <User className="w-3 h-3" />
                <span>{doc.uploadedBy}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="w-3 h-3" />
                <span>{doc.uploadDate}</span>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <button className="flex-1 px-3 py-2 bg-slate-100 text-slate-700 rounded text-sm hover:bg-slate-200 flex items-center justify-center space-x-1">
                <Eye className="w-3 h-3" />
                <span>View</span>
              </button>
              <button className="flex-1 px-3 py-2 bg-cyan-600 text-white rounded text-sm hover:bg-cyan-700 flex items-center justify-center space-x-1">
                <Download className="w-3 h-3" />
                <span>Download</span>
              </button>
              <button className="px-3 py-2 bg-slate-100 text-slate-700 rounded text-sm hover:bg-slate-200">
                <Share2 className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {filteredDocuments.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FolderOpen className="w-8 h-8 text-slate-400" />
          </div>
          <h3 className="text-lg font-medium text-slate-900 mb-2">No documents found</h3>
          <p className="text-slate-600">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};

export default Documents;