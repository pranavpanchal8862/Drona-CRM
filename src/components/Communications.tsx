import React, { useState } from 'react';
import { 
  MessageSquare, 
  Send, 
  Users, 
  Lock, 
  Search,
  Plus,
  Paperclip,
  Phone,
  Video,
  MoreHorizontal,
  Shield,
  Clock
} from 'lucide-react';

const Communications: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState('case-c001');
  const [newMessage, setNewMessage] = useState('');

  const chatRooms = [
    {
      id: 'case-c001',
      name: 'Case C001 - Mobile Analysis',
      type: 'case',
      participants: ['Sarah Johnson', 'Mike Chen', 'Client: John Doe'],
      lastMessage: 'Evidence analysis completed. Report attached.',
      lastTime: '2 hours ago',
      unread: 2,
      encrypted: true
    },
    {
      id: 'case-c002',
      name: 'Case C002 - Cyber Fraud Investigation',
      type: 'case',
      participants: ['Emily Davis', 'Alex Wilson', 'Client: ABC Corp'],
      lastMessage: 'Client has provided additional documentation.',
      lastTime: '4 hours ago',
      unread: 0,
      encrypted: true
    },
    {
      id: 'incident-inc001',
      name: 'INC001 - Data Breach Response',
      type: 'incident',
      participants: ['Sarah Johnson', 'Mike Chen', 'Emily Davis', 'IT Security Team'],
      lastMessage: 'Containment measures are in place.',
      lastTime: '1 hour ago',
      unread: 5,
      encrypted: true
    },
    {
      id: 'team-forensics',
      name: 'Forensics Team',
      type: 'team',
      participants: ['Sarah Johnson', 'Mike Chen', 'Emily Davis', 'Alex Wilson'],
      lastMessage: 'New SOPs have been uploaded to the knowledge base.',
      lastTime: '6 hours ago',
      unread: 1,
      encrypted: false
    }
  ];

  const messages = [
    {
      id: 1,
      sender: 'Sarah Johnson',
      content: 'I\'ve completed the initial analysis of the mobile device. The data extraction was successful.',
      timestamp: '2025-01-15 14:30',
      type: 'text',
      isOwn: false
    },
    {
      id: 2,
      sender: 'You',
      content: 'Great work! Can you share the preliminary findings?',
      timestamp: '2025-01-15 14:32',
      type: 'text',
      isOwn: true
    },
    {
      id: 3,
      sender: 'Sarah Johnson',
      content: 'Evidence_Analysis_Report_C001.pdf',
      timestamp: '2025-01-15 14:35',
      type: 'file',
      isOwn: false,
      fileSize: '2.4 MB'
    },
    {
      id: 4,
      sender: 'Mike Chen',
      content: 'I\'ve reviewed the report. The timeline reconstruction looks accurate. Client should be satisfied with these results.',
      timestamp: '2025-01-15 15:20',
      type: 'text',
      isOwn: false
    },
    {
      id: 5,
      sender: 'You',
      content: 'Perfect. Let\'s schedule a call with the client to present our findings.',
      timestamp: '2025-01-15 15:22',
      type: 'text',
      isOwn: true
    }
  ];

  const getChatIcon = (type: string) => {
    switch (type) {
      case 'case':
        return <Shield className="w-4 h-4 text-blue-500" />;
      case 'incident':
        return <Shield className="w-4 h-4 text-red-500" />;
      case 'team':
        return <Users className="w-4 h-4 text-green-500" />;
      default:
        return <MessageSquare className="w-4 h-4 text-slate-500" />;
    }
  };

  const selectedChatData = chatRooms.find(chat => chat.id === selectedChat);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Handle message sending logic here
      setNewMessage('');
    }
  };

  return (
    <div className="h-[calc(100vh-8rem)] flex bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      {/* Chat List Sidebar */}
      <div className="w-80 border-r border-slate-200 flex flex-col">
        <div className="p-4 border-b border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-slate-900">Communications</h2>
            <button className="p-2 hover:bg-slate-100 rounded-lg">
              <Plus className="w-4 h-4 text-slate-600" />
            </button>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm"
            />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {chatRooms.map((chat) => (
            <button
              key={chat.id}
              onClick={() => setSelectedChat(chat.id)}
              className={`w-full p-4 text-left hover:bg-slate-50 border-b border-slate-100 ${
                selectedChat === chat.id ? 'bg-cyan-50 border-r-2 border-r-cyan-500' : ''
              }`}
            >
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  {getChatIcon(chat.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-medium text-slate-900 truncate text-sm">{chat.name}</h3>
                    {chat.unread > 0 && (
                      <span className="bg-cyan-600 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center">
                        {chat.unread}
                      </span>
                    )}
                  </div>
                  <p className="text-slate-600 text-xs truncate mb-1">{chat.lastMessage}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 text-xs">{chat.lastTime}</span>
                    {chat.encrypted && (
                      <Lock className="w-3 h-3 text-green-500" />
                    )}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {selectedChatData ? (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b border-slate-200 bg-slate-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {getChatIcon(selectedChatData.type)}
                  <div>
                    <h3 className="font-semibold text-slate-900">{selectedChatData.name}</h3>
                    <p className="text-slate-600 text-sm">
                      {selectedChatData.participants.length} participants
                      {selectedChatData.encrypted && (
                        <span className="ml-2 inline-flex items-center">
                          <Lock className="w-3 h-3 text-green-500 mr-1" />
                          <span className="text-green-600 text-xs">Encrypted</span>
                        </span>
                      )}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button className="p-2 hover:bg-slate-200 rounded-lg">
                    <Phone className="w-4 h-4 text-slate-600" />
                  </button>
                  <button className="p-2 hover:bg-slate-200 rounded-lg">
                    <Video className="w-4 h-4 text-slate-600" />
                  </button>
                  <button className="p-2 hover:bg-slate-200 rounded-lg">
                    <MoreHorizontal className="w-4 h-4 text-slate-600" />
                  </button>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-xs lg:max-w-md ${message.isOwn ? 'order-2' : 'order-1'}`}>
                    {!message.isOwn && (
                      <p className="text-xs text-slate-600 mb-1">{message.sender}</p>
                    )}
                    <div
                      className={`px-4 py-2 rounded-lg ${
                        message.isOwn
                          ? 'bg-cyan-600 text-white'
                          : 'bg-slate-100 text-slate-900'
                      }`}
                    >
                      {message.type === 'file' ? (
                        <div className="flex items-center space-x-2">
                          <Paperclip className="w-4 h-4" />
                          <div>
                            <p className="font-medium">{message.content}</p>
                            {message.fileSize && (
                              <p className="text-xs opacity-75">{message.fileSize}</p>
                            )}
                          </div>
                        </div>
                      ) : (
                        <p>{message.content}</p>
                      )}
                    </div>
                    <div className="flex items-center space-x-2 mt-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span className="text-xs text-slate-500">{message.timestamp}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-slate-200">
              <div className="flex items-center space-x-2">
                <button className="p-2 hover:bg-slate-100 rounded-lg">
                  <Paperclip className="w-4 h-4 text-slate-600" />
                </button>
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                </div>
                <button
                  onClick={handleSendMessage}
                  className="p-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <MessageSquare className="w-12 h-12 text-slate-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-slate-900 mb-2">Select a conversation</h3>
              <p className="text-slate-600">Choose a chat room to start communicating</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Communications;