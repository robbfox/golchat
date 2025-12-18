import React from 'react';

interface ChatBubbleProps {
  text: string;
  time: string;
  isMe: boolean;
  sender: string;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ text, time, isMe }) => {
  return (
    <div className={`flex w-full mt-2 space-x-3 max-w-xs ${isMe ? 'ml-auto justify-end' : ''}`}>
      <div className={`relative px-4 py-2 shadow-sm rounded-lg ${isMe ? 'bg-green-200 rounded-tr-none' : 'bg-white rounded-tl-none'}`}>
        <p className="text-sm text-gray-800 whitespace-pre-wrap leading-snug">{text}</p>
        <span className="text-[10px] text-gray-500 float-right mt-1 ml-2">{time}</span>
      </div>
    </div>
  );
};

export default ChatBubble;
