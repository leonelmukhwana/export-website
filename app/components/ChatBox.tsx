"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: "user" | "bot"; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    // Add user message
    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");
    setIsLoading(true);

    try {
      // Send the user message to the API route
      const response = await fetch("/api/chat", {
        method: "POST",
        body: JSON.stringify({ message: input }),
      });
      const data = await response.json();

      // Add bot's response
      setMessages((prev) => [...prev, { sender: "bot", text: data.reply }]);
    } catch (error) {
      setMessages((prev) => [...prev, { sender: "bot", text: "Sorry, I'm having trouble right now." }]);
      console.error("Error fetching from OpenAI:", error);
    }
    setIsLoading(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-green-600 text-white text-2xl shadow-xl hover:bg-green-700 transition flex items-center justify-center"
      >
        💬
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            className="fixed bottom-24 right-6 z-50 w-80 h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-green-600 text-white p-4 flex justify-between items-center font-bold">
              Chat with Wendofresh
              <button onClick={() => setIsOpen(false)}>✕</button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`p-2 rounded-lg max-w-[70%] ${
                    msg.sender === "user" ? "bg-green-100 self-end" : "bg-gray-200 self-start"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
              {isLoading && (
                <div className="p-2 rounded-lg bg-gray-200 self-start text-center">
                  Bot is typing...
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t flex gap-2">
              <input
                type="text"
                className="flex-1 p-2 border rounded-lg"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button
                onClick={handleSend}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}