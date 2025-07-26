import React from 'react';
import { TrendingUp, Users, DollarSign, Target, ArrowRight } from 'lucide-react';

const SalesFunnel: React.FC = () => {
  const funnelStages = [
    {
      stage: 'Leads',
      count: 150,
      value: '$450,000',
      color: 'bg-blue-500',
      width: '100%'
    },
    {
      stage: 'Qualified',
      count: 89,
      value: '$267,000',
      color: 'bg-cyan-500',
      width: '59%'
    },
    {
      stage: 'Proposal',
      count: 45,
      value: '$135,000',
      color: 'bg-green-500',
      width: '30%'
    },
    {
      stage: 'Negotiation',
      count: 23,
      value: '$69,000',
      color: 'bg-orange-500',
      width: '15%'
    },
    {
      stage: 'Closed',
      count: 12,
      value: '$36,000',
      color: 'bg-purple-500',
      width: '8%'
    }
  ];

  const recentDeals = [
    {
      id: 1,
      client: 'ABC Corporation',
      type: 'Cyber Fraud Investigation',
      value: '$15,000',
      stage: 'Negotiation',
      probability: 85,
      closeDate: '2025-01-25'
    },
    {
      id: 2,
      client: 'Tech Startup Inc',
      type: 'SOC Course Enrollment',
      value: '$8,997',
      stage: 'Proposal',
      probability: 60,
      closeDate: '2025-01-30'
    },
    {
      id: 3,
      client: 'Legal Firm XYZ',
      type: 'Computer Forensics',
      value: '$12,500',
      stage: 'Qualified',
      probability: 40,
      closeDate: '2025-02-05'
    }
  ];

  const metrics = [
    {
      title: 'Conversion Rate',
      value: '8%',
      change: '+2.3%',
      icon: Target,
      color: 'text-green-600'
    },
    {
      title: 'Avg Deal Size',
      value: '$3,000',
      change: '+15%',
      icon: DollarSign,
      color: 'text-blue-600'
    },
    {
      title: 'Sales Cycle',
      value: '28 days',
      change: '-5 days',
      icon: TrendingUp,
      color: 'text-purple-600'
    }
  ];

  const getStageColor = (stage: string) => {
    switch (stage) {
      case 'Negotiation':
        return 'bg-orange-100 text-orange-800';
      case 'Proposal':
        return 'bg-green-100 text-green-800';
      case 'Qualified':
        return 'bg-cyan-100 text-cyan-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Sales Funnel</h1>
          <p className="text-slate-600">Track leads and opportunities across the sales pipeline</p>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics.map((metric, index) => {
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

      {/* Sales Funnel Visualization */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-6">Pipeline Overview</h3>
        
        <div className="space-y-4">
          {funnelStages.map((stage, index) => (
            <div key={index} className="relative">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <h4 className="font-medium text-slate-900">{stage.stage}</h4>
                  <span className="text-slate-600 text-sm">({stage.count} opportunities)</span>
                </div>
                <div className="text-right">
                  <span className="font-semibold text-slate-900">{stage.value}</span>
                </div>
              </div>
              
              <div className="relative h-12 bg-slate-100 rounded-lg overflow-hidden">
                <div 
                  className={`h-full ${stage.color} transition-all duration-500 flex items-center justify-center`}
                  style={{ width: stage.width }}
                >
                  <span className="text-white font-medium text-sm">
                    {stage.count} deals
                  </span>
                </div>
              </div>
              
              {index < funnelStages.length - 1 && (
                <div className="flex justify-center mt-2">
                  <ArrowRight className="w-5 h-5 text-slate-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Recent Deals */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-6">Recent Opportunities</h3>
        
        <div className="space-y-4">
          {recentDeals.map((deal) => (
            <div key={deal.id} className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="font-medium text-slate-900">{deal.client}</h4>
                  <p className="text-slate-600 text-sm">{deal.type}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-slate-900">{deal.value}</p>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStageColor(deal.stage)}`}>
                    {deal.stage}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm text-slate-600">
                <div className="flex items-center space-x-4">
                  <span>Probability: {deal.probability}%</span>
                  <span>Close Date: {deal.closeDate}</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="w-20 bg-slate-200 rounded-full h-2">
                    <div 
                      className="h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                      style={{ width: `${deal.probability}%` }}
                    ></div>
                  </div>
                  <span className="font-medium">{deal.probability}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalesFunnel;