import React from 'react';
import ChatBubble from './ChatBubble';

interface Message {
  date: string;
  time: string;
  sender?: string;
  text: string;
  isMe?: boolean;
  type: string;
}

interface ChatContainerProps {
  messages: Message[];
  currentUser: string;
}

const ChatContainer: React.FC<ChatContainerProps> = ({ messages, currentUser }) => {
  let lastDate = '';

  return (
    <div className="flex flex-col p-4 pt-20 pb-4 space-y-2 bg-[#E5DDD5] min-h-screen">
      {messages.map((msg, index) => {
        const showDate = msg.date !== lastDate;
        lastDate = msg.date;

        const isMe = msg.sender === currentUser;

        return (
          <React.Fragment key={index}>
            {showDate && (
              <div className="flex justify-center my-4 sticky top-16 z-0">
                <span className="bg-gray-200 text-gray-600 text-xs px-3 py-1 rounded-lg shadow-sm">
                  {msg.date}
                </span>
              </div>
            )}
            {msg.type === 'system' ? (
                 <div className="flex justify-center my-2">
                    <span className="bg-[#FFF5C4] text-gray-600 text-xs px-3 py-1 rounded-lg shadow-sm text-center max-w-[80%]">
                      {msg.text}
                    </span>
                 </div>
            ) : (
                <ChatBubble
                  text={msg.text}
                  time={msg.time}
                  isMe={isMe}
                  sender={msg.sender || 'Unknown'}
                />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ChatContainer;
