import React, { useState } from 'react';
import { 
  Download, 
  Calendar, 
  FileText, 
  BarChart3, 
  Users, 
  DollarSign,
  Filter,
  TrendingUp
} from 'lucide-react';

const Reports: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('last-month');
  const [selectedReport, setSelectedReport] = useState('all');

  const reportTypes = [
    {
      id: 'case-summary',
      title: 'Case Summary Report',
      description: 'Detailed overview of all cases, including status, timelines, and outcomes',
      icon: FileText,
      lastGenerated: '2025-01-15',
      size: '2.4 MB'
    },
    {
      id: 'sales-analytics',
      title: 'Sales Analytics Report',
      description: 'Revenue analysis, conversion rates, and sales pipeline performance',
      icon: BarChart3,
      lastGenerated: '2025-01-14',
      size: '1.8 MB'
    },
    {
      id: 'course-performance',
      title: 'Course Performance Report',
      description: 'Student enrollment, completion rates, and course effectiveness metrics',
      icon: Users,
      lastGenerated: '2025-01-13',
      size: '3.1 MB'
    },
    {
      id: 'financial-summary',
      title: 'Financial Summary Report',
      description: 'Comprehensive financial overview including revenue, expenses, and profitability',
      icon: DollarSign,
      lastGenerated: '2025-01-12',
      size: '1.6 MB'
    }
  ];

  const quickStats = [
    {
      title: 'Total Cases',
      value: '247',
      change: '+12%',
      period: 'vs last month'
    },
    {
      title: 'Revenue Generated',
      value: '$158,450',
      change: '+18%',
      period: 'vs last month'
    },
    {
      title: 'Active Students',
      value: '156',
      change: '+8%',
      period: 'vs last month'
    },
    {
      title: 'Completion Rate',
      value: '94.2%',
      change: '+2.1%',
      period: 'vs last month'
    }
  ];

  const recentReports = [
    {
      name: 'Monthly Case Analysis - December 2024',
      type: 'Case Summary',
      date: '2025-01-01',
      size: '2.1 MB',
      format: 'PDF'
    },
    {
      name: 'Q4 2024 Sales Performance Report',
      type: 'Sales Analytics',
      date: '2024-12-31',
      size: '1.9 MB',
      format: 'PDF'
    },
    {
      name: 'SOC Course Completion Analysis',
      type: 'Course Performance',
      date: '2024-12-28',
      size: '2.8 MB',
      format: 'XLSX'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Reports</h1>
          <p className="text-slate-600">Generate and export business insights</p>
        </div>
        <div className="flex space-x-3">
          <button className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 flex items-center space-x-2">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
          <button className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Export All</span>
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-slate-600">{stat.title}</h3>
              <TrendingUp className="w-4 h-4 text-green-500" />
            </div>
            <div className="mb-1">
              <span className="text-2xl font-bold text-slate-900">{stat.value}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-green-600 font-medium">{stat.change}</span>
              <span className="text-slate-500">{stat.period}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Report Generation */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-6">Generate New Report</h3>
        
        <div className="flex flex-col lg:flex-row lg:items-end space-y-4 lg:space-y-0 lg:space-x-4 mb-6">
          <div className="flex-1">
            <label className="block text-sm font-medium text-slate-700 mb-2">Report Type</label>
            <select
              value={selectedReport}
              onChange={(e) => setSelectedReport(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            >
              <option value="all">All Reports</option>
              <option value="case-summary">Case Summary</option>
              <option value="sales-analytics">Sales Analytics</option>
              <option value="course-performance">Course Performance</option>
              <option value="financial-summary">Financial Summary</option>
            </select>
          </div>
          
          <div className="flex-1">
            <label className="block text-sm font-medium text-slate-700 mb-2">Time Period</label>
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            >
              <option value="last-week">Last Week</option>
              <option value="last-month">Last Month</option>
              <option value="last-quarter">Last Quarter</option>
              <option value="last-year">Last Year</option>
              <option value="custom">Custom Range</option>
            </select>
          </div>
          
          <button className="px-6 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 flex items-center space-x-2">
            <FileText className="w-4 h-4" />
            <span>Generate</span>
          </button>
        </div>
      </div>

      {/* Available Reports */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {reportTypes.map((report) => {
          const Icon = report.icon;
          return (
            <div key={report.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-cyan-100 rounded-lg">
                  <Icon className="w-6 h-6 text-cyan-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900 mb-2">{report.title}</h4>
                  <p className="text-slate-600 text-sm mb-4">{report.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                    <span>Last generated: {report.lastGenerated}</span>
                    <span>Size: {report.size}</span>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 bg-slate-100 text-slate-700 rounded text-sm hover:bg-slate-200 flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>Schedule</span>
                    </button>
                    <button className="px-3 py-1 bg-cyan-600 text-white rounded text-sm hover:bg-cyan-700 flex items-center space-x-1">
                      <Download className="w-3 h-3" />
                      <span>Download</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Reports */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-6">Recent Reports</h3>
        
        <div className="space-y-4">
          {recentReports.map((report, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  <FileText className="w-5 h-5 text-slate-600" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900">{report.name}</h4>
                  <div className="flex items-center space-x-4 text-sm text-slate-600 mt-1">
                    <span>{report.type}</span>
                    <span>•</span>
                    <span>{report.date}</span>
                    <span>•</span>
                    <span>{report.size}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="px-2 py-1 bg-slate-200 text-slate-700 rounded text-xs font-medium">
                  {report.format}
                </span>
                <button className="p-2 hover:bg-slate-200 rounded">
                  <Download className="w-4 h-4 text-slate-600" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reports;