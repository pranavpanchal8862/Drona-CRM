import React from 'react';
import { PieChart, MoreHorizontal } from 'lucide-react';

const CasesByCategory: React.FC = () => {
  const categories = [
    { name: 'Mobile Analysis', count: 8, color: 'bg-blue-500', percentage: 33 },
    { name: 'Cyber Fraud', count: 6, color: 'bg-red-500', percentage: 25 },
    { name: 'Computer Forensics', count: 4, color: 'bg-green-500', percentage: 17 },
    { name: 'Divorce Cases', count: 3, color: 'bg-purple-500', percentage: 12 },
    { name: 'Other', count: 3, color: 'bg-slate-400', percentage: 13 }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <PieChart className="w-5 h-5 text-slate-600" />
          <h3 className="text-lg font-semibold text-slate-900">Cases by Category</h3>
        </div>
        <button className="p-1 hover:bg-slate-100 rounded">
          <MoreHorizontal className="w-4 h-4 text-slate-500" />
        </button>
      </div>
      
      <div className="space-y-3">
        {categories.map((category, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-900">{category.name}</span>
                <span className="text-sm text-slate-600">{category.count}</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2 mt-1">
                <div 
                  className={`h-2 rounded-full ${category.color}`}
                  style={{ width: `${category.percentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CasesByCategory;