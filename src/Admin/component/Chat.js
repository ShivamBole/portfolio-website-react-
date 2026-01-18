// import React, { useEffect, useState } from "react";
// import { getChatUserId } from "../../utils/chatUser";
// import { io } from "socket.io-client";
// import api , {API_BASE_URL} from "../../utils/api";

// // ✅ create socket OUTSIDE component (VERY IMPORTANT)
// const socket = io(API_BASE_URL);

// const Chat = () => {
//   const userId = getChatUserId();
//   const [messages, setMessages] = useState([]);
//   const [text, setText] = useState("");

//   // ✅ Fetch old chats on mount
//   useEffect(() => {
//     fetchChats();
//   }, []);

//   // ✅ Join socket room + listen for messages
//   useEffect(() => {
//     if (!userId) return;

//     // join room
//     socket.emit("join", userId);

//     // receive real-time messages
//     socket.on("receiveMessage", (msg) => {
//       // avoid duplicate messages
//       setMessages((prev) => {
//         const exists = prev.some(
//           (m) =>
//             m.message === msg.message &&
//             m.sender === msg.sender &&
//             m.userId === msg.userId
//         );
//         return exists ? prev : [...prev, msg];
//       });
//     });

//     return () => {
//       socket.off("receiveMessage");
//     };
//   }, [userId]);

//   // ✅ Fetch chat history
//   const fetchChats = async () => {
//     try {
//       const res = await api.get(
//         `/api/chat/${userId}`
//       );
//       setMessages(res.data);
//     } catch (err) {
//       console.error("Failed to fetch chats", err);
//     }
//   };

//   // ✅ Send message (DB + Socket)
//   const sendMessage = async () => {
//     if (!text.trim()) return;

//     const msgData = {
//       userId,
//       sender: "user",
//       message: text
//     };

//     try {
//       // 1️⃣ save in database
//       await api.post(
//         "/api/chat/send",
//         msgData
//       );

//       // 2️⃣ send real-time to admin
//       socket.emit("sendMessage", msgData);

//       // 3️⃣ update UI instantly
//       setMessages((prev) => [...prev, msgData]);

//       setText("");
//     } catch (err) {
//       console.error("Message send failed", err);
//     }
//   };

//   return (
//     <div style={styles.chatBox}>
//       <div style={styles.messages}>
//         {messages.map((msg, i) => (
//           <div
//             key={i}
//             style={
//               msg.sender === "user"
//                 ? styles.userMsg
//                 : styles.adminMsg
//             }
//           >
//             {msg.message}
//           </div>
//         ))}
//       </div>

//       <div style={styles.inputBox}>
//         <input
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           placeholder="Type message..."
//           style={styles.input}
//           className="text-black"
//         />
//         <button className="btn-sm" onClick={sendMessage}>Send</button>
//       </div>
//     </div>
//   );
// };

// // ✅ Styles
// const styles = {
//   chatBox: {
//     position: "fixed",
//     bottom: "90px",
//     right: "20px",
//     width: "320px",
//     height: "420px",
//     border: "1px solid #ccc",
//     background: "#fff",
//     display: "flex",
//     flexDirection: "column",
//     zIndex: 1000
//   },
//   messages: {
//     flex: 1,
//     padding: "10px",
//     overflowY: "auto",
//     display: "flex",
//     flexDirection: "column"
//   },
//   userMsg: {
//     alignSelf: "flex-end",
//     background: "#2bb5f0",
//     color: "#fff",
//     padding: "8px",
//     borderRadius: "6px",
//     marginBottom: "6px",
//     maxWidth: "70%"
//   },
//   adminMsg: {
//     alignSelf: "flex-start",
//     background: "#22c55e", // ✅ green
//     color: "#fff",
//     padding: "8px",
//     borderRadius: "6px",
//     marginBottom: "6px",
//     maxWidth: "70%"
//   },
//   inputBox: {
//     display: "flex",
//     padding: "5px",
//     borderTop: "1px solid #ddd",
//   },
//   input: {
//     flex: 1,
//     padding: "6px"
//   }
// };


// export default Chat;





import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import api, { API_BASE_URL } from "../../utils/api";
import { getChatUserId } from "../../utils/chatUser";

// ✅ socket OUTSIDE component
const socket = io(API_BASE_URL);

const Chat = () => {
  const userId = getChatUserId();

  const [messages, setMessages] = useState([]);
  const [meta, setMeta] = useState({
    totalMessages: 0,
    lastMessage: "",
    lastMessageAt: null
  });
  const [text, setText] = useState("");

  // 🔹 Fetch chat history
  useEffect(() => {
    fetchChatHistory();
  }, []);

useEffect(() => {
  if (userId) {
    socket.emit("register-user", userId);
  }
}, [userId]);


  // 🔹 Join socket + listen
  useEffect(() => {
    if (!userId) return;

    socket.emit("join", userId);

    socket.on("receiveMessage", (msg) => {
      setMessages((prev) => [...prev, msg]);
      setMeta((prev) => ({
        ...prev,
        totalMessages: prev.totalMessages + 1,
        lastMessage: msg.message,
        lastMessageAt: msg.createdAt || new Date()
      }));
    });

    return () => socket.off("receiveMessage");
  }, [userId]);

  // 🔹 Fetch history from backend
  const fetchChatHistory = async () => {
    try {
      const res = await api.get(`/api/chat/${userId}`);

      setMessages(res.data.messages);
      setMeta({
        totalMessages: res.data.totalMessages,
        lastMessage: res.data.lastMessage,
        lastMessageAt: res.data.lastMessageAt
      });
    } catch (err) {
      console.error("Fetch chat failed", err);
    }
  };

  // 🔹 Send message
  const sendMessage = async () => {
    if (!text.trim()) return;

    const msgData = {
      userId,
      sender: "user",
      message: text,
      createdAt: new Date()
    };

    try {
      await api.post("/api/chat/send", msgData);
      socket.emit("sendMessage", msgData);

      setMessages((prev) => [...prev, msgData]);
      setMeta((prev) => ({
        ...prev,
        totalMessages: prev.totalMessages + 1,
        lastMessage: text,
        lastMessageAt: new Date()
      }));

      setText("");
    } catch (err) {
      console.error("Send failed", err);
    }
  };

  return (
    <div style={styles.chatBox}>
      {/* HEADER */}
      <div style={styles.header}>
        <b>Chat</b>
        <span style={{ fontSize: 12 }}>
          Messages: {meta.totalMessages}
        </span>
      </div>

      {/* MESSAGES */}
      <div style={styles.messages}>
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              ...styles.msg,
              alignSelf:
                msg.sender === "user" ? "flex-end" : "flex-start",
              background:
                msg.sender === "user" ? "#2bb5f0" : "#22c55e"
            }}
          >
            <div>{msg.message}</div>
            <small style={styles.time}>
              {msg.date} • {msg.time}
            </small>
          </div>
        ))}
      </div>

      {/* INPUT */}
      <div style={styles.inputBox}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type message..."
          style={styles.input}
        />
        <button onClick={sendMessage} className="btn-sm mt-1">Send</button>
      </div>
    </div>
  );
};

export default Chat;


const styles = {
  chatBox: {
    position: "fixed",
    bottom: 90,
    right: 20,
    width: 320,
    height: 420,
    background: "#fff",
    border: "1px solid #ccc",
    display: "flex",
    flexDirection: "column",
    zIndex: 1000,
    color:"Black"
  },
  header: {
    padding: 10,
    borderBottom: "1px solid #ddd",
    display: "flex",
    justifyContent: "space-between"
  },
  messages: {
    flex: 1,
    padding: 10,
    overflowY: "auto",
    display: "flex",
    flexDirection: "column"
  },
  msg: {
    color: "#fff",
    padding: 8,
    borderRadius: 6,
    marginBottom: 6,
    maxWidth: "70%"
  },
  time: {
    fontSize: 10,
    opacity: 0.8
  },
  inputBox: {
    display: "flex",
    gap: 5,
    padding: 5,
    borderTop: "1px solid #ddd",
    color:"black"
  },
  input: {
    flex: 1,
    padding: 6
  }
};
