import React, { useEffect, useState } from "react";
import axios from "axios";
import { getChatUserId } from "../../utils/chatUser";
import { io } from "socket.io-client";

// ✅ create socket OUTSIDE component (VERY IMPORTANT)
const socket = io("http://localhost:5000");

const Chat = () => {
  const userId = getChatUserId();
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  // ✅ Fetch old chats on mount
  useEffect(() => {
    fetchChats();
  }, []);

  // ✅ Join socket room + listen for messages
  useEffect(() => {
    if (!userId) return;

    // join room
    socket.emit("join", userId);

    // receive real-time messages
    socket.on("receiveMessage", (msg) => {
      // avoid duplicate messages
      setMessages((prev) => {
        const exists = prev.some(
          (m) =>
            m.message === msg.message &&
            m.sender === msg.sender &&
            m.userId === msg.userId
        );
        return exists ? prev : [...prev, msg];
      });
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, [userId]);

  // ✅ Fetch chat history
  const fetchChats = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/chat/${userId}`
      );
      setMessages(res.data);
    } catch (err) {
      console.error("Failed to fetch chats", err);
    }
  };

  // ✅ Send message (DB + Socket)
  const sendMessage = async () => {
    if (!text.trim()) return;

    const msgData = {
      userId,
      sender: "user",
      message: text
    };

    try {
      // 1️⃣ save in database
      await axios.post(
        "http://localhost:5000/api/chat/send",
        msgData
      );

      // 2️⃣ send real-time to admin
      socket.emit("sendMessage", msgData);

      // 3️⃣ update UI instantly
      setMessages((prev) => [...prev, msgData]);

      setText("");
    } catch (err) {
      console.error("Message send failed", err);
    }
  };

  return (
    <div style={styles.chatBox}>
      <div style={styles.messages}>
        {messages.map((msg, i) => (
          <div
            key={i}
            style={
              msg.sender === "user"
                ? styles.userMsg
                : styles.adminMsg
            }
          >
            {msg.message}
          </div>
        ))}
      </div>

      <div style={styles.inputBox}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type message..."
          style={styles.input}
        />
        <button className="btn-sm" onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

// ✅ Styles
const styles = {
  chatBox: {
    position: "fixed",
    bottom: "90px",
    right: "20px",
    width: "320px",
    height: "420px",
    border: "1px solid #ccc",
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    zIndex: 1000
  },
  messages: {
    flex: 1,
    padding: "10px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column"
  },
  userMsg: {
    alignSelf: "flex-end",
    background: "#2bb5f0",
    color: "#fff",
    padding: "8px",
    borderRadius: "6px",
    marginBottom: "6px",
    maxWidth: "70%"
  },
  adminMsg: {
    alignSelf: "flex-start",
    background: "#22c55e", // ✅ green
    color: "#fff",
    padding: "8px",
    borderRadius: "6px",
    marginBottom: "6px",
    maxWidth: "70%"
  },
  inputBox: {
    display: "flex",
    padding: "5px",
    borderTop: "1px solid #ddd",
  },
  input: {
    flex: 1,
    padding: "6px"
  }
};


export default Chat;
