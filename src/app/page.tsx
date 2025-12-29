'use client';

import React from 'react';
import Header from '../components/Header';
import ChatContainer from '../components/ChatContainer';
import chatData from '../data.json';
import { verifyPassword } from './actions';

const Page: React.FC = () => {
  const [currentUser, setCurrentUser] = React.useState<string | null>(null);
  const [loggingInUser, setLoggingInUser] = React.useState<string | null>(null);
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');

  const handleLoginClick = (user: string) => {
    setLoggingInUser(user);
    setPassword('');
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!loggingInUser) return;

    const isValid = await verifyPassword(loggingInUser, password);

    if (isValid) {
      setCurrentUser(loggingInUser);
      setLoggingInUser(null);
    } else {
      setError('Incorrect password');
    }
  };

  const handleBack = () => {
    setLoggingInUser(null);
    setPassword('');
    setError('');
  };

  if (currentUser) {
    const otherUserName = currentUser === 'Sahida Parvin' ? 'Robert Fox' : 'Sahida Parvin';
    return (
      <div className="bg-[#E5DDD5] min-h-screen">
        <Header otherUserName={otherUserName} />
        <ChatContainer messages={chatData} currentUser={currentUser} />
      </div>
    );
  }

  if (loggingInUser) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
          <h2 className="text-xl font-bold mb-4 text-center">Login as {loggingInUser}</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            >
              Login
            </button>
            <button
              type="button"
              onClick={handleBack}
              className="w-full bg-gray-300 text-gray-700 py-2 rounded hover:bg-gray-400 transition"
            >
              Back
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Select User Login</h1>
      <button
        onClick={() => handleLoginClick('Robert Fox')}
        className="bg-blue-500 text-white px-6 py-3 rounded shadow hover:bg-blue-600 transition"
      >
        Login as Robert
      </button>
      <button
        onClick={() => handleLoginClick('Sahida Parvin')}
        className="bg-green-500 text-white px-6 py-3 rounded shadow hover:bg-green-600 transition"
      >
        Login as Sahida
      </button>
    </div>
  );
};

export default Page;
