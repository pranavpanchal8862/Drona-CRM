import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Users, 
  Calendar,
  DollarSign,
  BookOpen,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const Courses: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const courses = [
    {
      id: 'SOC001',
      name: 'SOC Analyst Level 1',
      type: 'SOC',
      duration: '8 weeks',
      enrolled: 89,
      capacity: 100,
      startDate: '2025-02-01',
      endDate: '2025-03-29',
      instructor: 'Dr. Sarah Johnson',
      price: 2999,
      status: 'active',
      completionRate: 85
    },
    {
      id: 'CEH001',
      name: 'Certified Ethical Hacker (CEH)',
      type: 'CEH',
      duration: '12 weeks',
      enrolled: 67,
      capacity: 80,
      startDate: '2025-01-15',
      endDate: '2025-04-08',
      instructor: 'Mike Chen',
      price: 3499,
      status: 'active',
      completionRate: 92
    },
    {
      id: 'SOC002',
      name: 'Advanced SOC Operations',
      type: 'SOC',
      duration: '10 weeks',
      enrolled: 45,
      capacity: 60,
      startDate: '2025-03-01',
      endDate: '2025-05-10',
      instructor: 'Emily Davis',
      price: 3299,
      status: 'upcoming',
      completionRate: 0
    }
  ];

  const students = [
    {
      id: 'S001',
      name: 'John Doe',
      email: 'john.doe@email.com',
      course: 'SOC Analyst Level 1',
      progress: 75,
      paymentStatus: 'paid',
      lastActivity: '2 hours ago'
    },
    {
      id: 'S002',
      name: 'Jane Smith',
      email: 'jane.smith@email.com',
      course: 'Certified Ethical Hacker (CEH)',
      progress: 60,
      paymentStatus: 'pending',
      lastActivity: '1 day ago'
    },
    {
      id: 'S003',
      name: 'Alex Wilson',
      email: 'alex.wilson@email.com',
      course: 'SOC Analyst Level 1',
      progress: 90,
      paymentStatus: 'paid',
      lastActivity: '3 hours ago'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'upcoming':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case 'paid':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-orange-100 text-orange-800';
      case 'overdue':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Courses</h1>
          <p className="text-slate-600">Manage cybersecurity courses and student enrollments</p>
        </div>
        <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-colors">
          <Plus className="w-4 h-4" />
          <span>New Course</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200">
        <div className="border-b border-slate-200">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'overview', label: 'Course Overview' },
              { id: 'students', label: 'Students' },
              { id: 'schedule', label: 'Schedule' }
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
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {courses.map((course) => (
                <div key={course.id} className="bg-slate-50 rounded-lg p-6 hover:bg-slate-100 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <BookOpen className="w-5 h-5 text-cyan-600" />
                      <span className="font-mono text-sm text-slate-600">{course.id}</span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(course.status)}`}>
                      {course.status}
                    </span>
                  </div>
                  
                  <h3 className="font-semibold text-slate-900 mb-2">{course.name}</h3>
                  
                  <div className="space-y-2 mb-4 text-sm text-slate-600">
                    <div className="flex items-center justify-between">
                      <span>Duration:</span>
                      <span className="font-medium">{course.duration}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span>Enrolled:</span>
                      <span className="font-medium">{course.enrolled}/{course.capacity}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span>Price:</span>
                      <span className="font-medium">${course.price.toLocaleString()}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span>Instructor:</span>
                      <span className="font-medium">{course.instructor}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm text-slate-600 mb-1">
                      <span>Enrollment</span>
                      <span>{Math.round((course.enrolled / course.capacity) * 100)}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div 
                        className="h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                        style={{ width: `${(course.enrolled / course.capacity) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="text-sm text-slate-600">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{course.startDate} - {course.endDate}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'students' && (
            <div className="space-y-4">
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search students..."
                      className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <button className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors">
                  Add Student
                </button>
              </div>

              <div className="space-y-4">
                {students.map((student) => (
                  <div key={student.id} className="bg-slate-50 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                          <Users className="w-5 h-5 text-cyan-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-slate-900">{student.name}</h4>
                          <p className="text-slate-600 text-sm">{student.email}</p>
                        </div>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPaymentStatusColor(student.paymentStatus)}`}>
                        {student.paymentStatus}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-slate-600">Course:</span>
                        <p className="font-medium text-slate-900">{student.course}</p>
                      </div>
                      
                      <div>
                        <span className="text-slate-600">Progress:</span>
                        <div className="flex items-center space-x-2 mt-1">
                          <div className="flex-1 bg-slate-200 rounded-full h-2">
                            <div 
                              className="h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                              style={{ width: `${student.progress}%` }}
                            ></div>
                          </div>
                          <span className="font-medium text-slate-900">{student.progress}%</span>
                        </div>
                      </div>
                      
                      <div>
                        <span className="text-slate-600">Last Activity:</span>
                        <p className="font-medium text-slate-900">{student.lastActivity}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'schedule' && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">Course Schedule</h3>
              <p className="text-slate-600">Schedule management coming soon</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Courses;