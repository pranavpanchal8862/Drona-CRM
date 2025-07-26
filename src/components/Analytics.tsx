import React from 'react';
import { BarChart3, TrendingUp, PieChart, Calendar } from 'lucide-react';

const Analytics: React.FC = () => {
  const revenueData = [
    { month: 'Jan', cases: 45000, courses: 23000 },
    { month: 'Feb', cases: 52000, courses: 28000 },
    { month: 'Mar', cases: 48000, courses: 31000 },
    { month: 'Apr', cases: 61000, courses: 35000 },
    { month: 'May', cases: 55000, courses: 29000 },
    { month: 'Jun', cases: 67000, courses: 38000 }
  ];

  const caseCategories = [
    { name: 'Mobile Analysis', value: 35, color: 'bg-blue-500' },
    { name: 'Cyber Fraud', value: 25, color: 'bg-red-500' },
    { name: 'Computer Forensics', value: 20, color: 'bg-green-500' },
    { name: 'Content Removal', value: 10, color: 'bg-purple-500' },
    { name: 'Other', value: 10, color: 'bg-orange-500' }
  ];

  const kpis = [
    {
      title: 'Total Revenue',
      value: '$628,000',
      change: '+18.2%',
      period: 'vs last 6 months'
    },
    {
      title: 'Case Completion Rate',
      value: '94.2%',
      change: '+2.1%',
      period: 'vs last month'
    },
    {
      title: 'Course Completion Rate',
      value: '87.5%',
      change: '+5.3%',
      period: 'vs last quarter'
    },
    {
      title: 'Customer Satisfaction',
      value: '4.8/5',
      change: '+0.3',
      period: 'average rating'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Analytics</h1>
          <p className="text-slate-600">Performance insights and business metrics</p>
        </div>
        <div className="flex space-x-3">
          <button className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 flex items-center space-x-2">
            <Calendar className="w-4 h-4" />
            <span>Last 6 months</span>
          </button>
          <button className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700">
            Export Report
          </button>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-slate-600">{kpi.title}</h3>
              <TrendingUp className="w-4 h-4 text-green-500" />
            </div>
            <div className="mb-1">
              <span className="text-2xl font-bold text-slate-900">{kpi.value}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-green-600 font-medium">{kpi.change}</span>
              <span className="text-slate-500">{kpi.period}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center space-x-2 mb-6">
            <BarChart3 className="w-5 h-5 text-slate-600" />
            <h3 className="text-lg font-semibold text-slate-900">Revenue Breakdown</h3>
          </div>
          
          <div className="space-y-4">
            {revenueData.map((item, index) => {
              const total = item.cases + item.courses;
              const casesPercent = (item.cases / total) * 100;
              const coursesPercent = (item.courses / total) * 100;
              
              return (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-slate-900">{item.month}</span>
                    <span className="text-slate-600">${total.toLocaleString()}</span>
                  </div>
                  <div className="flex h-6 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="bg-cyan-500 flex items-center justify-center"
                      style={{ width: `${casesPercent}%` }}
                    >
                      {casesPercent > 20 && (
                        <span className="text-white text-xs font-medium">Cases</span>
                      )}
                    </div>
                    <div 
                      className="bg-green-500 flex items-center justify-center"
                      style={{ width: `${coursesPercent}%` }}
                    >
                      {coursesPercent > 20 && (
                        <span className="text-white text-xs font-medium">Courses</span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-xs text-slate-600">
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                      <span>Cases: ${item.cases.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Courses: ${item.courses.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Case Categories */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center space-x-2 mb-6">
            <PieChart className="w-5 h-5 text-slate-600" />
            <h3 className="text-lg font-semibold text-slate-900">Case Distribution</h3>
          </div>
          
          <div className="space-y-4">
            {caseCategories.map((category, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className={`w-4 h-4 rounded-full ${category.color}`}></div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-slate-900">{category.name}</span>
                    <span className="text-sm text-slate-600">{category.value}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${category.color}`}
                      style={{ width: `${category.value}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-6">Performance Trends</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-slate-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600 mb-2">28 days</div>
            <div className="text-sm text-slate-600">Average Case Resolution</div>
            <div className="text-xs text-green-600 mt-1">↓ 3 days from last month</div>
          </div>
          
          <div className="text-center p-4 bg-slate-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600 mb-2">156</div>
            <div className="text-sm text-slate-600">Active Students</div>
            <div className="text-xs text-green-600 mt-1">↑ 12% from last month</div>
          </div>
          
          <div className="text-center p-4 bg-slate-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600 mb-2">$3,200</div>
            <div className="text-sm text-slate-600">Average Deal Value</div>
            <div className="text-xs text-green-600 mt-1">↑ 8% from last quarter</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;