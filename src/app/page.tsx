import React from 'react';
import Header from '../components/Header';
import ChatContainer from '../components/ChatContainer';
import chatData from '../data.json';

const Page: React.FC = () => {
  return (
    <div className="bg-[#E5DDD5] min-h-screen">
      <Header />
      <ChatContainer messages={chatData} />
    </div>
  );
};

export default Page;
