import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  Plus, 
  FileText, 
  Video, 
  Link,
  Tag,
  Clock,
  User,
  Eye,
  ThumbsUp,
  Filter,
  Folder
} from 'lucide-react';

const KnowledgeBase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    'Standard Operating Procedures',
    'Best Practices',
    'Technical Guides',
    'Legal Guidelines',
    'Tool Documentation',
    'Case Studies',
    'Training Materials',
    'FAQ'
  ];

  const articles = [
    {
      id: 'KB001',
      title: 'Mobile Device Forensics - Standard Operating Procedure',
      category: 'Standard Operating Procedures',
      type: 'document',
      author: 'Sarah Johnson',
      lastUpdated: '2025-01-10',
      views: 245,
      likes: 18,
      tags: ['mobile', 'forensics', 'sop', 'procedure'],
      description: 'Comprehensive guide for conducting mobile device forensic investigations including evidence handling and data extraction procedures.',
      readTime: '15 min'
    },
    {
      id: 'KB002',
      title: 'Chain of Custody Best Practices',
      category: 'Best Practices',
      type: 'document',
      author: 'Mike Chen',
      lastUpdated: '2025-01-08',
      views: 189,
      likes: 22,
      tags: ['custody', 'evidence', 'legal', 'compliance'],
      description: 'Essential guidelines for maintaining proper chain of custody throughout digital forensic investigations.',
      readTime: '10 min'
    },
    {
      id: 'KB003',
      title: 'Malware Analysis Techniques - Video Tutorial',
      category: 'Training Materials',
      type: 'video',
      author: 'Emily Davis',
      lastUpdated: '2025-01-05',
      views: 156,
      likes: 31,
      tags: ['malware', 'analysis', 'tutorial', 'training'],
      description: 'Step-by-step video guide covering static and dynamic malware analysis techniques.',
      readTime: '45 min'
    },
    {
      id: 'KB004',
      title: 'Legal Requirements for Digital Evidence',
      category: 'Legal Guidelines',
      type: 'document',
      author: 'Alex Wilson',
      lastUpdated: '2025-01-03',
      views: 298,
      likes: 15,
      tags: ['legal', 'evidence', 'court', 'admissibility'],
      description: 'Overview of legal requirements and standards for digital evidence admissibility in court proceedings.',
      readTime: '20 min'
    },
    {
      id: 'KB005',
      title: 'EnCase Forensic Tool Guide',
      category: 'Tool Documentation',
      type: 'document',
      author: 'Sarah Johnson',
      lastUpdated: '2024-12-28',
      views: 167,
      likes: 12,
      tags: ['encase', 'tools', 'software', 'guide'],
      description: 'Complete reference guide for using EnCase forensic software for digital investigations.',
      readTime: '30 min'
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <Video className="w-5 h-5 text-red-500" />;
      case 'link':
        return <Link className="w-5 h-5 text-blue-500" />;
      default:
        return <FileText className="w-5 h-5 text-slate-500" />;
    }
  };

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Knowledge Base</h1>
          <p className="text-slate-600">Standard operating procedures, best practices, and documentation</p>
        </div>
        <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-colors">
          <Plus className="w-4 h-4" />
          <span>Add Article</span>
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
                placeholder="Search knowledge base..."
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

      {/* Quick Access Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.slice(0, 4).map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className="p-4 bg-white rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow text-left"
          >
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-cyan-100 rounded-lg">
                <Folder className="w-5 h-5 text-cyan-600" />
              </div>
              <div>
                <h3 className="font-medium text-slate-900 text-sm">{category}</h3>
                <p className="text-slate-600 text-xs">
                  {articles.filter(a => a.category === category).length} articles
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredArticles.map((article) => (
          <div key={article.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                {getTypeIcon(article.type)}
              </div>
              
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-slate-900 line-clamp-2">{article.title}</h3>
                  <span className="text-xs text-slate-500 ml-2">{article.readTime}</span>
                </div>
                
                <p className="text-slate-600 text-sm mb-3 line-clamp-2">{article.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {article.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-slate-100 text-slate-700">
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                  {article.tags.length > 3 && (
                    <span className="text-xs text-slate-500">+{article.tags.length - 3} more</span>
                  )}
                </div>
                
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{article.lastUpdated}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-3 h-3" />
                      <span>{article.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <ThumbsUp className="w-3 h-3" />
                      <span>{article.likes}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 pt-3 border-t border-slate-200">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded-full">
                      {article.category}
                    </span>
                    <button className="text-cyan-600 hover:text-cyan-700 text-sm font-medium">
                      Read Article →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredArticles.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <BookOpen className="w-8 h-8 text-slate-400" />
          </div>
          <h3 className="text-lg font-medium text-slate-900 mb-2">No articles found</h3>
          <p className="text-slate-600">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};

export default KnowledgeBase;