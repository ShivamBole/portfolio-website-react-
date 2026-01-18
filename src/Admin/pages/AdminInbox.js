

// import React, { useEffect, useState } from "react";
// import { io } from "socket.io-client";
// import api, { API_BASE_URL } from "../../utils/api";

// // socket outside component
// const socket = io(API_BASE_URL);

// const AdminInbox = () => {
//   const [users, setUsers] = useState([]);
//   const [visitors, setVisitors] = useState([]);
//   const [selectedUserId, setSelectedUserId] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [text, setText] = useState("");

//   useEffect(() => {
//     fetchInbox();
//     fetchVisitors();
//   }, []);

//   useEffect(() => {
//     if (!selectedUserId) return;

//     fetchChats(selectedUserId);
//     markMessagesAsRead(selectedUserId);

//     socket.emit("join", selectedUserId);

//     const handleReceive = (msg) => {
//       setMessages((prev) => [...prev, msg]);
//     };

//     socket.on("receiveMessage", handleReceive);
//     return () => socket.off("receiveMessage", handleReceive);
//   }, [selectedUserId]);

//   // ───────── API CALLS ─────────

//   const fetchInbox = async () => {
//     const res = await api.get("/api/chat/admin/inbox");
//     setUsers(res.data);
//   };

//   const fetchVisitors = async () => {
//     const res = await api.get("/api/visitor");
//     setVisitors(res.data.filter(v => !v.hasChatted));
//   };

//   const fetchChats = async (userId) => {
//     const res = await api.get(`/api/chat/${userId}`);
//     setMessages(res.data.messages ?? res.data);
//   };

//   const markMessagesAsRead = async (userId) => {
//     await api.put(`/api/chat/read/${userId}`);
//     setUsers(prev =>
//       prev.map(u =>
//         u.userId === userId ? { ...u, unreadCount: 0 } : u
//       )
//     );
//   };

//   const deleteUser = async (userId) => {
//     if (!window.confirm("Delete this user chat?")) return;
//     await api.delete(`/api/chat/delete/${userId}`);
//     setUsers(prev => prev.filter(u => u.userId !== userId));
//     if (selectedUserId === userId) {
//       setSelectedUserId(null);
//       setMessages([]);
//     }
//   };

//   const deleteVisitor = async (visitorId) => {
//     if (!window.confirm("Delete this visitor?")) return;
//     await api.delete(`/api/visitor/delete/${visitorId}`);
//     setVisitors(prev => prev.filter(v => v.visitorId !== visitorId));
//   };

//   const sendAdminMessage = async () => {
//     if (!text.trim() || !selectedUserId) return;

//     const msgData = {
//       userId: selectedUserId,
//       sender: "admin",
//       message: text
//     };

//     await api.post("/api/chat/send", msgData);
//     socket.emit("sendMessage", msgData);
//     setMessages(prev => [...prev, msgData]);
//     setText("");
//   };

//   // ───────── UI ─────────

//   return (
//     <div style={{ display: "flex", height: "80vh" }}>
//       {/* LEFT PANEL */}
//       <div style={{ width: "35%", padding: 20 }}>

//         {/* CHAT INBOX */}
//         <h2>💬 Chat Inbox</h2>
//         <div style={{ maxHeight: "35vh", overflowY: "auto" }}>
//           {users.map((u) => (
//             <div key={u.userId} style={cardStyle}>
//               <div onClick={() => setSelectedUserId(u.userId)} style={{ cursor: "pointer" }}>
//                 <b>User ID:</b>
//                 <div style={smallText}>{u.userId}</div>
//                     {u.unreadCount > 0 && (
//                   <span style={{ color: "red" }}>🔔 {u.unreadCount} unread</span>
//                 )}

//                 <p><b>Last Msg:</b> {u.lastMessage}</p>
//                 <p>🕒 {new Date(u.lastTime).toLocaleString()}</p>

//                 <p>🖥 {u.device} · {u.browser} · {u.os}</p>
//                 <p>📍 {u.city}, {u.country}</p>
//                 <p>🌐 IP: {u.ip}</p>

//                 <p style={smallText}>First: {new Date(u.firstVisit).toLocaleString()}</p>
//                 <p style={smallText}>Last: {new Date(u.lastSeen).toLocaleString()}</p>

            
//               </div>

//               <button style={deleteBtn} onClick={() => deleteUser(u.userId)}>
//                 Delete Chat
//               </button>
//             </div>
//           ))}
//         </div>

//         <hr />

//         {/* VISITORS */}
//         <h2>👀 Live Visitors</h2>
//         <div style={{ maxHeight: "35vh", overflowY: "auto" }}>
//         {visitors.map((v) => (
//   <div
//     key={v.visitorId}
//     style={cardStyle}
//     onClick={() => setSelectedUserId(v.visitorId)}   // ✅ ADD THIS
//   >
//     <b>Visitor ID:</b>
//     <div style={smallText}>{v.visitorId}</div>

//     <p>🖥 {v.device} · {v.browser} · {v.os}</p>
//     <p>📍 {v.city}, {v.country}</p>
//     <p>🌐 IP: {v.ip}</p>

//     <p style={smallText}>
//       First: {new Date(v.firstVisit).toLocaleString()}
//     </p>
//     <p style={smallText}>
//       Last: {new Date(v.lastSeen).toLocaleString()}
//     </p>

//     <p style={{ fontSize: 10, opacity: 0.7 }}>
//       UA: {v.userAgent}
//     </p>

//     <div style={{ textAlign: "right" }}>
//       <span
//         onClick={(e) => {
//           e.stopPropagation(); // ✅ prevent opening chat when deleting
//           deleteVisitor(v.visitorId);
//         }}
//         style={{ cursor: "pointer", color: "#dc2626" }}
//       >
//         🗑️
//       </span>
//     </div>
//   </div>
// ))}
//         </div>
//       </div>

//       {/* RIGHT PANEL */}
//       <div style={{ width: "65%", padding: 20 }}>
//         {!selectedUserId ? (
//           <h3>Select a user or visitor</h3>
//         ) : (
//           <>
//             <h3>Chat</h3>
//             <div style={chatBox}>
//               {messages.map((msg, i) => (
//                 <div
//                   key={i}
//                   style={{
//                     alignSelf: msg.sender === "admin" ? "flex-end" : "flex-start",
//                     marginBottom: 6
//                   }}
//                 >
//                   <span
//                     style={{
//                       background: msg.sender === "admin" ? "#2bb5f0" : "#22c55e",
//                       color: "#fff",
//                       padding: "6px 10px",
//                       borderRadius: 6,
//                       maxWidth: "60%"
//                     }}
//                   >
//                     {msg.message}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             <div style={{ display: "flex", gap: 5 }}>
//               <input
//                 value={text}
//                 onChange={(e) => setText(e.target.value)}
//                 placeholder="Reply as admin..."
//                 style={{ flex: 1 }}
//                 className="text-black"
//               />
//               <button onClick={sendAdminMessage} className="btn-sm">
//                 Send
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// // ───────── STYLES ─────────
// const cardStyle = {
//   border: "1px solid #ddd",
//   padding: 10,
//   marginBottom: 10,
//   background: "black",
//   color: "white",
//   borderRadius: 6
// };

// const smallText = { fontSize: 11, opacity: 0.8 };
// const deleteBtn = { marginTop: 6, background: "#dc2626", color: "#fff", border: "none", padding: "4px 8px" };
// const chatBox = { height: "60vh", border: "1px solid #ccc", padding: 10, overflowY: "auto", display: "flex", flexDirection: "column" };

// export default AdminInbox;





// import React, { useEffect, useState } from "react";
// import { io } from "socket.io-client";
// import api, { API_BASE_URL } from "../../utils/api";

// // socket outside component
// const socket = io(API_BASE_URL);

// const AdminInbox = () => {
//   const [users, setUsers] = useState([]);
//   const [visitors, setVisitors] = useState([]);
//   const [onlineUsers, setOnlineUsers] = useState([]); // ✅ online users
//   const [selectedUserId, setSelectedUserId] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [text, setText] = useState("");

//   // INITIAL LOAD
//   useEffect(() => {
//     fetchInbox();
//     fetchVisitors();
//   }, []);

//   // LISTEN ONLINE USERS (REAL ONLINE STATE)

//   // WHEN USER / VISITOR SELECTED
//   useEffect(() => {
//     if (!selectedUserId) return;

//     fetchChats(selectedUserId);
//     markMessagesAsRead(selectedUserId);

//     const handleReceive = (msg) => {
//       setMessages((prev) => [...prev, msg]);
//     };

//     socket.on("receiveMessage", handleReceive);
//     return () => socket.off("receiveMessage", handleReceive);
//   }, [selectedUserId]);

//   // ───────── API CALLS ─────────

//   const fetchInbox = async () => {
//     const res = await api.get("/api/chat/admin/inbox");
//     setUsers(res.data);
//   };

//   const fetchVisitors = async () => {
//     const res = await api.get("/api/visitor");
//     setVisitors(res.data.filter(v => !v.hasChatted));
//   };

//   const fetchChats = async (userId) => {
//     const res = await api.get(`/api/chat/${userId}`);
//     setMessages(res.data.messages ?? res.data);
//   };

//   const markMessagesAsRead = async (userId) => {
//     await api.put(`/api/chat/read/${userId}`);
//     setUsers(prev =>
//       prev.map(u =>
//         u.userId === userId ? { ...u, unreadCount: 0 } : u
//       )
//     );
//   };

//   const deleteUser = async (userId) => {
//     if (!window.confirm("Delete this user chat?")) return;
//     await api.delete(`/api/chat/delete/${userId}`);
//     setUsers(prev => prev.filter(u => u.userId !== userId));
//     if (selectedUserId === userId) {
//       setSelectedUserId(null);
//       setMessages([]);
//     }
//   };

//   const deleteVisitor = async (visitorId) => {
//     if (!window.confirm("Delete this visitor?")) return;
//     await api.delete(`/api/visitor/delete/${visitorId}`);
//     setVisitors(prev => prev.filter(v => v.visitorId !== visitorId));
//   };

//   const sendAdminMessage = async () => {
//     if (!text.trim() || !selectedUserId) return;

//     const msgData = {
//       userId: selectedUserId,
//       sender: "admin",
//       message: text
//     };

//     await api.post("/api/chat/send", msgData);
//     socket.emit("sendMessage", msgData);
//     setMessages(prev => [...prev, msgData]);
//     setText("");
//   };

//   // ───────── UI ─────────

//   return (
//     <div style={{ display: "flex", height: "80vh" }}>
//       {/* LEFT PANEL */}
//       <div style={{ width: "35%", padding: 20 }}>

//         {/* CHAT INBOX */}
//         <h2>💬 Chat Inbox</h2>
//         <div style={{ maxHeight: "35vh", overflowY: "auto" }}>
//           {users.map((u) => (
//             <div key={u.userId} style={cardStyle}>
//               <div onClick={() => setSelectedUserId(u.userId)} style={{ cursor: "pointer" }}>
//                 <b>
//                   User ID
//                   {/* <span
//                     style={{
//                       display: "inline-block",
//                       width: 10,
//                       height: 10,
//                       borderRadius: "50%",
//                       background: isOnline(u.userId) ? "#22c55e" : "#ef4444",
//                       marginLeft: 8
//                     }}
//                   /> */}
//                 </b>

//                 <div style={smallText}>{u.userId}</div>

//                 {u.unreadCount > 0 && (
//                   <span style={{ color: "red" }}>🔔 {u.unreadCount} unread</span>
//                 )}

//                 <p><b>Last Msg:</b> {u.lastMessage}</p>
//                 <p>🕒 {new Date(u.lastTime).toLocaleString()}</p>

//                 <p>🖥 {u.device} · {u.browser} · {u.os}</p>
//                 <p>📍 {u.city}, {u.country}</p>
//                 <p>🌐 IP: {u.ip}</p>

//                 <p style={smallText}>First: {new Date(u.firstVisit).toLocaleString()}</p>
//                 <p style={smallText}>Last: {new Date(u.lastSeen).toLocaleString()}</p>
//               </div>

//               <button style={deleteBtn} onClick={() => deleteUser(u.userId)}>
//                 Delete Chat
//               </button>
//             </div>
//           ))}
//         </div>

//         <hr />

//         {/* VISITORS */}
//         <h2>👀 Live Visitors</h2>
//         <div style={{ maxHeight: "35vh", overflowY: "auto" }}>
//           {visitors.map((v) => (
//             <div
//               key={v.visitorId}
//               style={cardStyle}
//               onClick={() => setSelectedUserId(v.visitorId)}
//             >
//               <b>
//                 Visitor ID
//                 {/* <span
//                   style={{
//                     display: "inline-block",
//                     width: 10,
//                     height: 10,
//                     borderRadius: "50%",
//                     background: isOnline(v.visitorId) ? "#22c55e" : "#ef4444",
//                     marginLeft: 8
//                   }}
//                 /> */}
//               </b>

//               <div style={smallText}>{v.visitorId}</div>

//               <p>🖥 {v.device} · {v.browser} · {v.os}</p>
//               <p>📍 {v.city}, {v.country}</p>
//               <p>🌐 IP: {v.ip}</p>

//               <p style={smallText}>First: {new Date(v.firstVisit).toLocaleString()}</p>
//               <p style={smallText}>Last: {new Date(v.lastSeen).toLocaleString()}</p>

//               <p style={{ fontSize: 10, opacity: 0.7 }}>
//                 UA: {v.userAgent}
//               </p>

//               <div style={{ textAlign: "right" }}>
//                 <span
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     deleteVisitor(v.visitorId);
//                   }}
//                   style={{ cursor: "pointer", color: "#dc2626" }}
//                 >
//                   🗑️
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* RIGHT PANEL */}
//       <div style={{ width: "65%", padding: 20 }}>
//         {!selectedUserId ? (
//           <h3>Select a user or visitor</h3>
//         ) : (
//           <>
//             <h3>Chat</h3>
//             <div style={chatBox}>
//               {messages.map((msg, i) => (
//                 <div
//                   key={i}
//                   style={{
//                     alignSelf: msg.sender === "admin" ? "flex-end" : "flex-start",
//                     marginBottom: 6
//                   }}
//                 >
//                   <span
//                     style={{
//                       background: msg.sender === "admin" ? "#2bb5f0" : "#22c55e",
//                       color: "#fff",
//                       padding: "6px 10px",
//                       borderRadius: 6,
//                       maxWidth: "60%"
//                     }}
//                   >
//                     {msg.message}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             <div style={{ display: "flex", gap: 5 }}>
//               <input
//                 value={text}
//                 onChange={(e) => setText(e.target.value)}
//                 placeholder="Reply as admin..."
//                 style={{ flex: 1 }}
//                 className="text-black"
//               />
//               <button onClick={sendAdminMessage} className="btn-sm">
//                 Send
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// // ───────── STYLES ─────────
// const cardStyle = {
//   border: "1px solid #ddd",
//   padding: 10,
//   marginBottom: 10,
//   background: "black",
//   color: "white",
//   borderRadius: 6
// };

// const smallText = { fontSize: 11, opacity: 0.8 };
// const deleteBtn = { marginTop: 6, background: "#dc2626", color: "#fff", border: "none", padding: "4px 8px" };
// const chatBox = { height: "60vh", border: "1px solid #ccc", padding: 10, overflowY: "auto", display: "flex", flexDirection: "column" };

// export default AdminInbox;









// import React, { useEffect, useState } from "react";
// import { io } from "socket.io-client";
// import api, { API_BASE_URL } from "../../utils/api";

// // socket ONLY for messages
// const socket = io(API_BASE_URL);

// const AdminInbox = () => {
//   const [users, setUsers] = useState([]);
//   const [visitors, setVisitors] = useState([]);
//   const [selectedUserId, setSelectedUserId] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [text, setText] = useState("");

//   // ───────── INITIAL LOAD ─────────
//   useEffect(() => {
//     fetchInbox();
//     fetchVisitors();
//   }, []);

//   // ───────── CHAT SELECTED ─────────
//   useEffect(() => {
//     if (!selectedUserId) return;

//     fetchChats(selectedUserId);
//     markMessagesAsRead(selectedUserId);

//     const handleReceive = (msg) => {
//       setMessages((prev) => [...prev, msg]);
//     };

//     socket.on("receiveMessage", handleReceive);
//     return () => socket.off("receiveMessage", handleReceive);
//   }, [selectedUserId]);

//   // ───────── API CALLS ─────────
//   const fetchInbox = async () => {
//     const res = await api.get("/api/chat/admin/inbox");
//     setUsers(res.data);
//   };

//   const fetchVisitors = async () => {
//     const res = await api.get("/api/visitor");
//     setVisitors(res.data);
//   };

//   const fetchChats = async (userId) => {
//     const res = await api.get(`/api/chat/${userId}`);
//     setMessages(res.data.messages ?? res.data);
//   };

//   const markMessagesAsRead = async (userId) => {
//     await api.put(`/api/chat/read/${userId}`);
//     setUsers((prev) =>
//       prev.map((u) =>
//         u.userId === userId ? { ...u, unreadCount: 0 } : u
//       )
//     );
//   };

//   const deleteUser = async (userId) => {
//     if (!window.confirm("Delete this user chat?")) return;
//     await api.delete(`/api/chat/delete/${userId}`);
//     setUsers((prev) => prev.filter((u) => u.userId !== userId));
//     if (selectedUserId === userId) {
//       setSelectedUserId(null);
//       setMessages([]);
//     }
//   };

//   const deleteVisitor = async (visitorId) => {
//     if (!window.confirm("Delete this visitor?")) return;
//     await api.delete(`/api/visitor/delete/${visitorId}`);
//     setVisitors((prev) => prev.filter((v) => v.visitorId !== visitorId));
//   };

//   const sendAdminMessage = async () => {
//     if (!text.trim() || !selectedUserId) return;

//     const msgData = {
//       userId: selectedUserId,
//       sender: "admin",
//       message: text
//     };

//     await api.post("/api/chat/send", msgData);
//     socket.emit("sendMessage", msgData);
//     setMessages((prev) => [...prev, msgData]);
//     setText("");
//   };

//   // ───────── ONLINE CHECK (SINGLE SOURCE OF TRUTH) ─────────
//   const isOnlineNow = (item) => {
//     if (!item?.isOnline || !item?.lastActiveAt) return false;
//     return Date.now() - new Date(item.lastActiveAt).getTime() < 30000;
//   };

//   // ───────── UI ─────────
//   return (
//     <div style={{ display: "flex", height: "80vh" }}>
//       {/* LEFT PANEL */}
//       <div style={{ width: "35%", padding: 20 }}>

//         {/* CHAT INBOX */}
//         <h2>💬 Chat Inbox</h2>
//         <div style={{ maxHeight: "35vh", overflowY: "auto" }}>
//           {users.map((u) => (
//             <div key={u.userId} style={cardStyle}>
//               <div onClick={() => setSelectedUserId(u.userId)} style={{ cursor: "pointer" }}>
//                 <b>
//                   User ID
//                   <span
//                     style={{
//                       display: "inline-block",
//                       width: 10,
//                       height: 10,
//                       borderRadius: "50%",
//                       background: isOnlineNow(u) ? "#22c55e" : "#ef4444",
//                       marginLeft: 8
//                     }}
//                   />
//                 </b>

//                 <div style={smallText}>{u.userId}</div>

//                 {u.unreadCount > 0 && (
//                   <span style={{ color: "red" }}>🔔 {u.unreadCount} unread</span>
//                 )}

//                 <p><b>Last Msg:</b> {u.lastMessage}</p>
//                 <p>🕒 {new Date(u.lastTime).toLocaleString()}</p>

//                 <p>🖥 {u.device} · {u.browser} · {u.os}</p>
//                 <p>📍 {u.city}, {u.country}</p>

//                 <p style={smallText}>Last seen: {new Date(u.lastSeen).toLocaleString()}</p>
//               </div>

//               <button style={deleteBtn} onClick={() => deleteUser(u.userId)}>
//                 Delete Chat
//               </button>
//             </div>
//           ))}
//         </div>

//         <hr />

//         {/* VISITORS */}
//         <h2>👀 Live Visitors</h2>
//         <div style={{ maxHeight: "35vh", overflowY: "auto" }}>
//           {visitors.map((v) => (
//             <div
//               key={v.visitorId}
//               style={cardStyle}
//               onClick={() => setSelectedUserId(v.visitorId)}
//             >
//               <b>
//                 Visitor ID
//                 <span
//                   style={{
//                     display: "inline-block",
//                     width: 10,
//                     height: 10,
//                     borderRadius: "50%",
//                     background: isOnlineNow(v) ? "#22c55e" : "#ef4444",
//                     marginLeft: 8
//                   }}
//                 />
//               </b>

//               <div style={smallText}>{v.visitorId}</div>

//               <p>🖥 {v.device} · {v.browser} · {v.os}</p>
//               <p>📍 {v.city}, {v.country}</p>

//               <p style={smallText}>
//                 Last active: {v.lastActiveAt ? new Date(v.lastActiveAt).toLocaleString() : "—"}
//               </p>

//               <div style={{ textAlign: "right" }}>
//                 <span
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     deleteVisitor(v.visitorId);
//                   }}
//                   style={{ cursor: "pointer", color: "#dc2626" }}
//                 >
//                   🗑️
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* RIGHT PANEL */}
//       <div style={{ width: "65%", padding: 20 }}>
//         {!selectedUserId ? (
//           <h3>Select a user or visitor</h3>
//         ) : (
//           <>
//             <h3>Chat</h3>
//             <div style={chatBox}>
//               {messages.map((msg, i) => (
//                 <div
//                   key={i}
//                   style={{
//                     alignSelf: msg.sender === "admin" ? "flex-end" : "flex-start",
//                     marginBottom: 6
//                   }}
//                 >
//                   <span
//                     style={{
//                       background: msg.sender === "admin" ? "#2bb5f0" : "#22c55e",
//                       color: "#fff",
//                       padding: "6px 10px",
//                       borderRadius: 6,
//                       maxWidth: "60%"
//                     }}
//                   >
//                     {msg.message}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             <div style={{ display: "flex", gap: 5 }}>
//               <input
//                 value={text}
//                 onChange={(e) => setText(e.target.value)}
//                 placeholder="Reply as admin..."
//                 style={{ flex: 1 }}
//                 className="text-black"
//               />
//               <button onClick={sendAdminMessage} className="btn-sm">
//                 Send
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// // ───────── STYLES ─────────
// const cardStyle = {
//   border: "1px solid #ddd",
//   padding: 10,
//   marginBottom: 10,
//   background: "black",
//   color: "white",
//   borderRadius: 6
// };

// const smallText = { fontSize: 11, opacity: 0.8 };
// const deleteBtn = {
//   marginTop: 6,
//   background: "#dc2626",
//   color: "#fff",
//   border: "none",
//   padding: "4px 8px"
// };
// const chatBox = {
//   height: "60vh",
//   border: "1px solid #ccc",
//   padding: 10,
//   overflowY: "auto",
//   display: "flex",
//   flexDirection: "column"
// };

// export default AdminInbox;



import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import api, { API_BASE_URL } from "../../utils/api";

// socket ONLY for messages
const socket = io(API_BASE_URL);

const AdminInbox = () => {
  const [users, setUsers] = useState([]);
  const [visitors, setVisitors] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  // ───────── AUTO FETCH (NO REFRESH) ─────────
  useEffect(() => {
    fetchInbox();
    fetchVisitors();

    const interval = setInterval(() => {
      fetchInbox();
      fetchVisitors();
    }, 5000); // auto refresh

    return () => clearInterval(interval);
  }, []);

  // ───────── CHAT SELECTED ─────────
  useEffect(() => {
    if (!selectedUserId) return;

    fetchChats(selectedUserId);
    markMessagesAsRead(selectedUserId);

    const handleReceive = (msg) => {
      setMessages(prev => [...prev, msg]);
      fetchInbox(); // refresh inbox on new message
    };

    socket.on("receiveMessage", handleReceive);
    return () => socket.off("receiveMessage", handleReceive);
  }, [selectedUserId]);

  // ───────── API CALLS ─────────
  const fetchInbox = async () => {
    const res = await api.get("/api/chat/admin/inbox");
    setUsers(res.data);
  };

  const fetchVisitors = async () => {
    const res = await api.get("/api/visitor");
    setVisitors(res.data);
  };

  const fetchChats = async (userId) => {
    const res = await api.get(`/api/chat/${userId}`);
    setMessages(res.data.messages ?? res.data);
  };

  const markMessagesAsRead = async (userId) => {
    await api.put(`/api/chat/read/${userId}`);
    setUsers(prev =>
      prev.map(u =>
        u.userId === userId ? { ...u, unreadCount: 0 } : u
      )
    );
  };

  const deleteUser = async (userId) => {
    if (!window.confirm("Delete this user chat?")) return;
    await api.delete(`/api/chat/delete/${userId}`);
    setUsers(prev => prev.filter(u => u.userId !== userId));
    if (selectedUserId === userId) {
      setSelectedUserId(null);
      setMessages([]);
    }
  };

  const deleteVisitor = async (visitorId) => {
    if (!window.confirm("Delete this visitor?")) return;
    await api.delete(`/api/visitor/delete/${visitorId}`);
    setVisitors(prev => prev.filter(v => v.visitorId !== visitorId));
  };

  const sendAdminMessage = async () => {
    if (!text.trim() || !selectedUserId) return;

    const msgData = {
      userId: selectedUserId,
      sender: "admin",
      message: text
    };

    await api.post("/api/chat/send", msgData);
    socket.emit("sendMessage", msgData);
    setMessages(prev => [...prev, msgData]);
    setText("");
  };

  // ───────── ONLINE CHECK (SINGLE SOURCE) ─────────
  const isOnlineNow = (item) => {
    if (!item?.isOnline || !item?.lastActiveAt) return false;
    return Date.now() - new Date(item.lastActiveAt).getTime() < 30000;
  };

  // ───────── UI ─────────
  return (
    <div style={{ display: "flex", height: "80vh" }}>
      {/* LEFT PANEL */}
      <div style={{ width: "35%", padding: 20 }}>

        {/* CHAT INBOX */}
        <h2>💬 Chat Inbox</h2>
        <div style={{ maxHeight: "35vh", overflowY: "auto" }}>
          {users.map(u => (
            <div key={u.userId} style={cardStyle}>
              <div onClick={() => setSelectedUserId(u.userId)} style={{ cursor: "pointer" }}>
                <b>
                  User ID
                  <span
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: isOnlineNow(u) ? "#22c55e" : "#ef4444",
                      display: "inline-block",
                      marginLeft: 8
                    }}
                  />
                </b>

                <div style={smallText}>{u.userId}</div>

                {u.unreadCount > 0 && (
                  <span style={{ color: "red" }}>🔔 {u.unreadCount} unread</span>
                )}

                <p><b>Last Msg:</b> {u.lastMessage}</p>
                <p>🕒 {new Date(u.lastTime).toLocaleString()}</p>

                <p>🖥 {u.device} · {u.browser} · {u.os}</p>
                <p>📍 {u.city}, {u.country}</p>
                <p>🌐 IP: {u.ip}</p>

                <p style={smallText}>First: {new Date(u.firstVisit).toLocaleString()}</p>
                <p style={smallText}>Last: {new Date(u.lastSeen).toLocaleString()}</p>
              </div>

              <button style={deleteBtn} onClick={() => deleteUser(u.userId)}>
                Delete Chat
              </button>
            </div>
          ))}
        </div>

        <hr />

        {/* VISITORS */}
        <h2>👀 Live Visitors</h2>
        <div style={{ maxHeight: "35vh", overflowY: "auto" }}>
          {visitors.map(v => (
            <div key={v.visitorId} style={cardStyle}>
              <b>
                Visitor ID
                <span
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: isOnlineNow(v) ? "#22c55e" : "#ef4444",
                    display: "inline-block",
                    marginLeft: 8
                  }}
                />
              </b>

              <div style={smallText}>{v.visitorId}</div>

              <p>🖥 {v.device} · {v.browser} · {v.os}</p>
              <p>📍 {v.city}, {v.country}</p>
              <p>🌐 IP: {v.ip}</p>

              <p style={smallText}>First: {new Date(v.firstVisit).toLocaleString()}</p>
              <p style={smallText}>Last: {new Date(v.lastSeen).toLocaleString()}</p>

              <p style={{ fontSize: 10, opacity: 0.7 }}>
                UA: {v.userAgent}
              </p>

              <div style={{ textAlign: "right" }}>
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteVisitor(v.visitorId);
                  }}
                  style={{ cursor: "pointer", color: "#dc2626" }}
                >
                  🗑️
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div style={{ width: "65%", padding: 20 }}>
        {!selectedUserId ? (
          <h3>Select a user or visitor</h3>
        ) : (
          <>
            <h3>Chat</h3>
            <div style={chatBox}>
              {messages.map((msg, i) => (
                <div
                  key={i}
                  style={{
                    alignSelf: msg.sender === "admin" ? "flex-end" : "flex-start",
                    marginBottom: 6
                  }}
                >
                  <span
                    style={{
                      background: msg.sender === "admin" ? "#2bb5f0" : "#22c55e",
                      color: "#fff",
                      padding: "6px 10px",
                      borderRadius: 6
                    }}
                  >
                    {msg.message}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: 5 }}>
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Reply as admin..."
                style={{ flex: 1 }}
                className="text-black"
              />
              <button onClick={sendAdminMessage} className="btn-sm">
                Send
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

// ───────── STYLES ─────────
const cardStyle = {
  border: "1px solid #ddd",
  padding: 10,
  marginBottom: 10,
  background: "black",
  color: "white",
  borderRadius: 6
};

const smallText = { fontSize: 11, opacity: 0.8 };
const deleteBtn = {
  marginTop: 6,
  background: "#dc2626",
  color: "#fff",
  border: "none",
  padding: "4px 8px"
};
const chatBox = {
  height: "60vh",
  border: "1px solid #ccc",
  padding: 10,
  overflowY: "auto",
  display: "flex",
  flexDirection: "column"
};

export default AdminInbox;
