'use client';

import React from 'react';
import Header from '../components/Header';
import ChatContainer from '../components/ChatContainer';
import chatData from '../data.json';

const Page: React.FC = () => {
  const [currentUser, setCurrentUser] = React.useState<string | null>(null);

  if (!currentUser) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-4">
        <h1 className="text-2xl font-bold mb-4">Select User Login</h1>
        <button
          onClick={() => setCurrentUser('Robert Fox')}
          className="bg-blue-500 text-white px-6 py-3 rounded shadow hover:bg-blue-600 transition"
        >
          Login as Robert
        </button>
        <button
          onClick={() => setCurrentUser('Sahida Parvin')}
          className="bg-green-500 text-white px-6 py-3 rounded shadow hover:bg-green-600 transition"
        >
          Login as Sahida
        </button>
      </div>
    );
  }

  const otherUserName = currentUser === 'Sahida Parvin' ? 'Robert Fox' : 'Sahida Parvin';

  return (
    <div className="bg-[#E5DDD5] min-h-screen">
      <Header otherUserName={otherUserName} />
      <ChatContainer messages={chatData} currentUser={currentUser} />
    </div>
  );
};

export default Page;
