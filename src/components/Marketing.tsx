import React, { useState } from 'react';
import { 
  Megaphone, 
  TrendingUp, 
  Users, 
  Mail, 
  Globe, 
  Target,
  BarChart3,
  Calendar,
  Plus,
  Eye,
  MousePointer,
  DollarSign,
  Share2
} from 'lucide-react';

const Marketing: React.FC = () => {
  const [activeTab, setActiveTab] = useState('campaigns');

  const campaigns = [
    {
      id: 'CAM001',
      name: 'SOC Analyst Course Launch',
      type: 'Email Campaign',
      status: 'active',
      startDate: '2025-01-10',
      endDate: '2025-02-10',
      budget: '$5,000',
      spent: '$2,340',
      leads: 89,
      conversions: 12,
      roi: '240%',
      channels: ['Email', 'LinkedIn', 'Google Ads']
    },
    {
      id: 'CAM002',
      name: 'Cyber Forensics Services Promotion',
      type: 'Social Media',
      status: 'active',
      startDate: '2025-01-05',
      endDate: '2025-01-25',
      budget: '$3,500',
      spent: '$2,890',
      leads: 45,
      conversions: 8,
      roi: '180%',
      channels: ['Facebook', 'LinkedIn', 'Twitter']
    },
    {
      id: 'CAM003',
      name: 'CEH Certification Webinar Series',
      type: 'Content Marketing',
      status: 'completed',
      startDate: '2024-12-15',
      endDate: '2025-01-15',
      budget: '$2,000',
      spent: '$1,950',
      leads: 156,
      conversions: 23,
      roi: '320%',
      channels: ['YouTube', 'Email', 'Website']
    }
  ];

  const leadSources = [
    { source: 'Google Ads', leads: 89, percentage: 35, color: 'bg-blue-500' },
    { source: 'LinkedIn', leads: 67, percentage: 26, color: 'bg-cyan-500' },
    { source: 'Email Marketing', leads: 45, percentage: 18, color: 'bg-green-500' },
    { source: 'Referrals', leads: 34, percentage: 13, color: 'bg-purple-500' },
    { source: 'Direct', leads: 20, percentage: 8, color: 'bg-orange-500' }
  ];

  const marketingMetrics = [
    {
      title: 'Total Leads',
      value: '255',
      change: '+18%',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      title: 'Conversion Rate',
      value: '16.9%',
      change: '+2.3%',
      icon: Target,
      color: 'text-green-600'
    },
    {
      title: 'Marketing ROI',
      value: '280%',
      change: '+45%',
      icon: TrendingUp,
      color: 'text-purple-600'
    },
    {
      title: 'Cost per Lead',
      value: '$42',
      change: '-12%',
      icon: DollarSign,
      color: 'text-orange-600'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      case 'paused':
        return 'bg-orange-100 text-orange-800';
      case 'draft':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Marketing</h1>
          <p className="text-slate-600">Manage campaigns and track marketing performance</p>
        </div>
        <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-colors">
          <Plus className="w-4 h-4" />
          <span>New Campaign</span>
        </button>
      </div>

      {/* Marketing Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {marketingMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-slate-100 rounded-lg">
                    <Icon className={`w-5 h-5 ${metric.color}`} />
                  </div>
                  <div>
                    <p className="text-slate-600 text-sm">{metric.title}</p>
                    <p className="text-2xl font-bold text-slate-900">{metric.value}</p>
                  </div>
                </div>
                <span className="text-green-600 text-sm font-medium">{metric.change}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200">
        <div className="border-b border-slate-200">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'campaigns', label: 'Campaigns' },
              { id: 'lead-sources', label: 'Lead Sources' },
              { id: 'content', label: 'Content Library' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-cyan-500 text-cyan-600'
                    : 'border-transparent text-slate-500 hover:text-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'campaigns' && (
            <div className="space-y-6">
              {campaigns.map((campaign) => (
                <div key={campaign.id} className="bg-slate-50 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-semibold text-slate-900">{campaign.name}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(campaign.status)}`}>
                          {campaign.status}
                        </span>
                      </div>
                      <p className="text-slate-600 text-sm">{campaign.type}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-slate-600">ROI</p>
                      <p className="text-lg font-bold text-green-600">{campaign.roi}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="text-center p-3 bg-white rounded-lg">
                      <div className="flex items-center justify-center mb-1">
                        <Users className="w-4 h-4 text-blue-500 mr-1" />
                        <span className="text-lg font-bold text-slate-900">{campaign.leads}</span>
                      </div>
                      <p className="text-xs text-slate-600">Leads</p>
                    </div>
                    
                    <div className="text-center p-3 bg-white rounded-lg">
                      <div className="flex items-center justify-center mb-1">
                        <Target className="w-4 h-4 text-green-500 mr-1" />
                        <span className="text-lg font-bold text-slate-900">{campaign.conversions}</span>
                      </div>
                      <p className="text-xs text-slate-600">Conversions</p>
                    </div>
                    
                    <div className="text-center p-3 bg-white rounded-lg">
                      <div className="flex items-center justify-center mb-1">
                        <DollarSign className="w-4 h-4 text-purple-500 mr-1" />
                        <span className="text-lg font-bold text-slate-900">{campaign.spent}</span>
                      </div>
                      <p className="text-xs text-slate-600">Spent</p>
                    </div>
                    
                    <div className="text-center p-3 bg-white rounded-lg">
                      <div className="flex items-center justify-center mb-1">
                        <Calendar className="w-4 h-4 text-orange-500 mr-1" />
                        <span className="text-lg font-bold text-slate-900">{Math.round((new Date(campaign.endDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))}</span>
                      </div>
                      <p className="text-xs text-slate-600">Days Left</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {campaign.channels.map((channel, index) => (
                        <span key={index} className="px-2 py-1 bg-cyan-100 text-cyan-800 rounded-full text-xs font-medium">
                          {channel}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 bg-slate-200 text-slate-700 rounded text-sm hover:bg-slate-300">
                        <Eye className="w-3 h-3 inline mr-1" />
                        View
                      </button>
                      <button className="px-3 py-1 bg-cyan-600 text-white rounded text-sm hover:bg-cyan-700">
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'lead-sources' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Lead Sources Breakdown</h3>
                  <div className="space-y-4">
                    {leadSources.map((source, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className={`w-4 h-4 rounded-full ${source.color}`}></div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium text-slate-900">{source.source}</span>
                            <span className="text-sm text-slate-600">{source.leads} leads</span>
                          </div>
                          <div className="w-full bg-slate-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${source.color}`}
                              style={{ width: `${source.percentage}%` }}
                            ></div>
                          </div>
                        </div>
                        <span className="text-sm font-medium text-slate-900">{source.percentage}%</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Performance Trends</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-slate-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-slate-900">Click-through Rate</span>
                        <span className="text-sm text-green-600 font-medium">+5.2%</span>
                      </div>
                      <div className="text-2xl font-bold text-slate-900">3.8%</div>
                    </div>
                    
                    <div className="p-4 bg-slate-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-slate-900">Email Open Rate</span>
                        <span className="text-sm text-green-600 font-medium">+2.1%</span>
                      </div>
                      <div className="text-2xl font-bold text-slate-900">24.6%</div>
                    </div>
                    
                    <div className="p-4 bg-slate-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-slate-900">Social Engagement</span>
                        <span className="text-sm text-green-600 font-medium">+8.7%</span>
                      </div>
                      <div className="text-2xl font-bold text-slate-900">12.3%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'content' && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">Content Library</h3>
              <p className="text-slate-600">Marketing content management coming soon</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Marketing;