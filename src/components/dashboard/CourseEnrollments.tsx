import React from 'react';
import { TrendingUp, Users } from 'lucide-react';

const CourseEnrollments: React.FC = () => {
  const courses = [
    { name: 'SOC Analyst', enrolled: 89, capacity: 100, revenue: '$26,700' },
    { name: 'CEH Certification', enrolled: 67, capacity: 80, revenue: '$18,530' }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <div className="flex items-center space-x-2 mb-4">
        <Users className="w-5 h-5 text-slate-600" />
        <h3 className="text-lg font-semibold text-slate-900">Course Enrollments</h3>
      </div>
      
      <div className="space-y-4">
        {courses.map((course, index) => (
          <div key={index} className="p-4 bg-slate-50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-slate-900">{course.name}</h4>
              <div className="flex items-center space-x-1">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium text-green-600">{course.revenue}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between text-sm text-slate-600 mb-2">
              <span>{course.enrolled}/{course.capacity} enrolled</span>
              <span>{Math.round((course.enrolled / course.capacity) * 100)}% full</span>
            </div>
            
            <div className="w-full bg-slate-200 rounded-full h-2">
              <div 
                className="h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                style={{ width: `${(course.enrolled / course.capacity) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseEnrollments;