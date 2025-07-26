import React from 'react';
import { Clock, User, FileText, GraduationCap } from 'lucide-react';

const RecentActivity: React.FC = () => {
  const activities = [
    {
      id: 1,
      type: 'case',
      action: 'New case created',
      details: 'Mobile Analysis case for client ABC Corp',
      time: '2 hours ago',
      user: 'Sarah Johnson'
    },
    {
      id: 2,
      type: 'course',
      action: 'Student enrolled',
      details: 'John Doe enrolled in CEH course',
      time: '4 hours ago',
      user: 'Mike Chen'
    },
    {
      id: 3,
      type: 'case',
      action: 'Case updated',
      details: 'Evidence uploaded for Cyber Fraud case',
      time: '6 hours ago',
      user: 'Emily Davis'
    },
    {
      id: 4,
      type: 'course',
      action: 'Payment received',
      details: 'SOC course payment from Jane Smith',
      time: '8 hours ago',
      user: 'System'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Clock className="w-5 h-5 text-slate-600" />
        <h3 className="text-lg font-semibold text-slate-900">Recent Activity</h3>
      </div>
      
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
            <div className={`p-2 rounded-full ${
              activity.type === 'case' ? 'bg-blue-100' : 'bg-green-100'
            }`}>
              {activity.type === 'case' ? (
                <FileText className={`w-4 h-4 ${activity.type === 'case' ? 'text-blue-600' : 'text-green-600'}`} />
              ) : (
                <GraduationCap className={`w-4 h-4 ${activity.type === 'case' ? 'text-blue-600' : 'text-green-600'}`} />
              )}
            </div>
            
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <h4 className="font-medium text-slate-900">{activity.action}</h4>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  activity.type === 'case' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                }`}>
                  {activity.type}
                </span>
              </div>
              <p className="text-slate-600 text-sm mt-1">{activity.details}</p>
              <div className="flex items-center space-x-4 mt-2 text-xs text-slate-500">
                <div className="flex items-center space-x-1">
                  <User className="w-3 h-3" />
                  <span>{activity.user}</span>
                </div>
                <span>{activity.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;