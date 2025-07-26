import React from 'react';
import { 
  FileText, 
  GraduationCap, 
  TrendingUp, 
  Users,
  AlertTriangle,
  CheckCircle,
  Clock,
  DollarSign
} from 'lucide-react';
import StatCard from './shared/StatCard';
import RecentActivity from './dashboard/RecentActivity';
import CasesByCategory from './dashboard/CasesByCategory';
import CourseEnrollments from './dashboard/CourseEnrollments';

const Dashboard: React.FC = () => {
  const stats = [
    {
      title: 'Active Cases',
      value: '24',
      change: '+12%',
      trend: 'up' as const,
      icon: FileText,
      color: 'blue'
    },
    {
      title: 'Course Enrollments',
      value: '156',
      change: '+8%',
      trend: 'up' as const,
      icon: GraduationCap,
      color: 'green'
    },
    {
      title: 'Monthly Revenue',
      value: '$45,230',
      change: '+15%',
      trend: 'up' as const,
      icon: DollarSign,
      color: 'purple'
    },
    {
      title: 'Active Leads',
      value: '38',
      change: '+3%',
      trend: 'up' as const,
      icon: TrendingUp,
      color: 'orange'
    }
  ];

  const urgentCases = [
    { id: 1, title: 'Mobile Analysis - Data Recovery', client: 'John Doe', deadline: 'Today', status: 'urgent' },
    { id: 2, title: 'Cyber Fraud Investigation', client: 'ABC Corp', deadline: 'Tomorrow', status: 'high' },
    { id: 3, title: 'Content Removal Request', client: 'Jane Smith', deadline: '2 days', status: 'medium' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
          <p className="text-slate-600">Welcome back! Here's what's happening with your cases and courses.</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-slate-500">Last updated</p>
          <p className="text-sm font-medium text-slate-900">{new Date().toLocaleString()}</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Urgent Cases */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-red-500" />
            <h3 className="text-lg font-semibold text-slate-900">Urgent Cases</h3>
          </div>
          <div className="space-y-3">
            {urgentCases.map((case_) => (
              <div key={case_.id} className="p-3 bg-slate-50 rounded-lg">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium text-slate-900 text-sm">{case_.title}</h4>
                    <p className="text-slate-600 text-xs mt-1">Client: {case_.client}</p>
                  </div>
                  <div className="text-right">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                      case_.status === 'urgent' ? 'bg-red-100 text-red-800' :
                      case_.status === 'high' ? 'bg-orange-100 text-orange-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {case_.deadline}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cases by Category */}
        <CasesByCategory />

        {/* Course Enrollments */}
        <CourseEnrollments />
      </div>

      {/* Recent Activity */}
      <RecentActivity />
    </div>
  );
};

export default Dashboard;