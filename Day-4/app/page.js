"use client";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [chatHistory, setChatHistory] = useState([]); // Stores chat messages
  const [recentSearches, setRecentSearches] = useState([]);
  const [loading, setLoading] = useState(false);
  const chatRef = useRef(null);

  // Auto-scroll to the latest message
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const askAI = async () => {
    if (!question.trim()) return;
    setLoading(true);

    // Add user message to chat history
    const newChat = [...chatHistory, { role: "user", text: question }];
    setChatHistory(newChat);
    setRecentSearches((prev) => [question, ...prev.slice(0, 4)]); // Store recent searches (limit 5)
    setQuestion("");

    try {
      const res = await axios.post("/api/gemini", { question });
      setChatHistory([...newChat, { role: "ai", text: res.data.reply }]);
    } catch (error) {
      setChatHistory([...newChat, { role: "ai", text: "Error fetching AI response." }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      askAI();
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-6 text-white">
      <div className="w-full max-w-3xl bg-gray-800 rounded-xl shadow-xl p-6 flex flex-col">
        <h1 className="text-3xl font-bold text-center mb-4">AI ChatGPT</h1>

        {/* Recent Searches */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Recent Searches</h2>
          <div className="flex flex-wrap gap-2">
            {recentSearches.map((search, index) => (
              <button
                key={index}
                className="px-3 py-1 bg-gray-700 rounded-lg text-sm hover:bg-gray-600"
                onClick={() => setQuestion(search)}
              >
                {search}
              </button>
            ))}
          </div>
        </div>

        {/* Chat Messages */}
        <div
          ref={chatRef}
          className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-700 rounded-lg shadow-inner"
        >
          {chatHistory.map((msg, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg w-fit max-w-[80%] ${
                msg.role === "user" ? "bg-blue-500 self-end ml-auto" : "bg-gray-600"
              }`}
            >
              {msg.text}
            </div>
          ))}
          {loading && <p className="text-gray-400">AI is thinking...</p>}
        </div>

        {/* Input & Button */}
        <div className="mt-4 flex gap-2">
          <textarea
            className="w-full p-3 border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
            rows="2"
            placeholder="Type your message..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button
            onClick={askAI}
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "..." : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
}
