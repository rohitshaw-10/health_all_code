import React from 'react';
import { Widget } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import avatar from '../assets/chatbot-avatar.png'; // Add a chatbot avatar image in the assets folder

const Chatbot = () => {
  const handleNewUserMessage = (message) => {
    // Mock AI response (this can be integrated with a backend for real AI responses)
    console.log(`New message incoming! ${message}`);
  };

  return (
    <Widget
      handleNewUserMessage={handleNewUserMessage}
      profileAvatar={avatar}
      title="AI Healthcare Assistant"
      subtitle="How can I help you today?"
    />
  );
};

export default Chatbot;
