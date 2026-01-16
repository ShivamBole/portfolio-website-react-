import React, { useEffect, useState } from "react";
import axios from "axios";
import { io } from "socket.io-client";

// socket OUTSIDE component
const socket = io("http://localhost:5000");

const AdminChat = ({ selectedUserId }) => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  // 🔧 STEP 3 — FIX ADMIN CHAT (Frontend)
  useEffect(() => {
    if (!selectedUserId) return;

    // join the user's room
    socket.emit("join", selectedUserId);

    // listen for messages from user
    socket.on("receiveMessage", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, [selectedUserId]);

  // fetch chat history when user changes
  useEffect(() => {
    if (!selectedUserId) return;

    axios
      .get(`http://localhost:5000/api/chat/${selectedUserId}`)
      .then((res) => setMessages(res.data));
  }, [selectedUserId]);

  // 🔥 ADMIN SEND MESSAGE (FIXED)
  const sendAdminMessage = async () => {
    if (!text.trim()) return;

    const msgData = {
      userId: selectedUserId,
      sender: "admin",
      message: text
    };

    // Save to DB
    await axios.post(
      "http://localhost:5000/api/chat/send",
      msgData
    );

    // Emit to socket
    socket.emit("sendMessage", msgData);

    setText("");
    setMessages((prev) => [...prev, msgData]);
  };

  if (!selectedUserId) {
    return <div>Select a user to start chat</div>;
  }

  return (
    <div style={{ border: "1px solid #ccc", padding: 10 }}>
      <h3>Admin Chat</h3>

      <div style={{ height: 300, overflowY: "auto" }}>
        {messages.map((m, i) => (
          <div key={i}>
            <b>{m.sender}:</b> {m.message}
          </div>
        ))}
      </div>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Reply as admin..."
      />
      <button onClick={sendAdminMessage}>Send</button>
    </div>
  );
};

export default AdminChat;
