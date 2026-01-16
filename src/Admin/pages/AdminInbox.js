import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import api , {API_BASE_URL} from "../../utils/api"
// ✅ socket OUTSIDE component
const socket = io(API_BASE_URL);

const AdminInbox = () => {
  const [users, setUsers] = useState([]);
  const [visitors, setVisitors] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  // INITIAL LOAD
  useEffect(() => {
    fetchInbox();
    fetchVisitors();
  }, []);

  // WHEN USER / VISITOR SELECTED
  useEffect(() => {
    if (!selectedUserId) return;

    fetchChats(selectedUserId);
    markMessagesAsRead(selectedUserId);

    socket.emit("join", selectedUserId);

    socket.on("receiveMessage", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => socket.off("receiveMessage");
  }, [selectedUserId]);

  // ───────── APIs ─────────

  const fetchInbox = async () => {
    const res = await api.get(
      "/api/chat/admin/inbox"
    );
    setUsers(res.data);
  };

  const fetchVisitors = async () => {
    const res = await api.get(
      "/api/visitor"
    );
    setVisitors(res.data.filter(v => !v.hasChatted));
  };

  const fetchChats = async (userId) => {
    const res = await api.get(
      `/api/chat/${userId}`
    );
    setMessages(res.data);
  };

  const markMessagesAsRead = async (userId) => {
    await api.put(
      `/api/chat/read/${userId}`
    );

    setUsers((prev) =>
      prev.map((u) =>
        u._id === userId ? { ...u, unreadCount: 0 } : u
      )
    );
  };

  // DELETE CHAT USER
  const deleteUser = async (userId) => {
    if (!window.confirm("Delete this user chat?")) return;

    await api.delete(
      `/api/chat/delete/${userId}`
    );

    setUsers(prev => prev.filter(u => u._id !== userId));
    if (selectedUserId === userId) {
      setSelectedUserId(null);
      setMessages([]);
    }
  };

  // DELETE VISITOR
  const deleteVisitor = async (visitorId) => {
    if (!window.confirm("Delete this visitor?")) return;

    await api.delete(
      `/api/visitor/delete/${visitorId}`
    );

    setVisitors(prev =>
      prev.filter(v => v.visitorId !== visitorId)
    );

    if (selectedUserId === visitorId) {
      setSelectedUserId(null);
      setMessages([]);
    }
  };

  // SEND ADMIN MESSAGE
  const sendAdminMessage = async () => {
    if (!text.trim() || !selectedUserId) return;

    const msgData = {
      userId: selectedUserId,
      sender: "admin",
      message: text
    };

    await api.post(
      "/api/chat/send",
      msgData
    );

    socket.emit("sendMessage", msgData);
    setMessages(prev => [...prev, msgData]);
    setText("");
  };

  return (
    <div style={{ display: "flex", height: "80vh" }}>
      {/* ───────── LEFT PANEL ───────── */}
      <div style={{ width: "35%", padding: 20, overflowY: "auto" }}>

        {/* CHAT INBOX */}
        <h2>💬 Chat Inbox</h2>

        {users.map((u) => (
          <div
            key={u._id}
            style={{
              border: "1px solid #ddd",
              padding: 10,
              marginBottom: 10,
             background:"black"
            }}
          >
            <div
              style={{ cursor: "pointer" }}
              onClick={() => setSelectedUserId(u._id)}
            >
              <b>User ID:</b>
              <div style={{ fontSize: 12, wordBreak: "break-all" }}>
                {u._id}
              </div>

              <p style={{ marginTop: 5 }}>
                <b>Last Msg:</b> {u.lastMessage}
              </p>
            </div>

            <button
              onClick={() => deleteUser(u._id)}
              style={{
                marginTop: 5,
                background: "#dc2626",
                color: "#fff",
                border: "none",
                padding: "4px 8px",
                cursor: "pointer"
              }}
            >
              Delete
            </button>
          </div>
        ))}

        <hr />

        {/* VISITORS */}
        <h2>👀 Live Visitors</h2>

        <div style={{ maxHeight: "35vh", overflowY: "auto" }}>
          {visitors.map((v) => (
            <div
              key={v.visitorId}
              style={{
                border: "1px dashed #aaa",
                padding: 10,
                marginBottom: 10,
                background: "black"
              }}
            >
              <div
                onClick={() => setSelectedUserId(v.visitorId)}
                style={{ cursor: "pointer" }}
              >
                <b>Visitor ID</b>
                <div style={{ fontSize: 11, wordBreak: "break-all" }}>
                  {v.visitorId}
                </div>

                <p style={{ margin: "6px 0" }}>
                  🖥 {v.device} · {v.browser} · {v.os}
                </p>

                <p style={{ margin: "4px 0", fontSize: 13 }}>
                  📍 {v.city || "Unknown"}, {v.country || "Unknown"}
                </p>

                <p style={{ margin: "2px 0", fontSize: 12, color: "#555" }}>
                  🌐 IP: {v.ip}
                </p>

                <p style={{ margin: "2px 0", fontSize: 11, color: "#777" }}>
                  🕒 First Visit: {new Date(v.firstVisit).toLocaleString()}
                </p>

                <p style={{ margin: "2px 0", fontSize: 11, color: "#777" }}>
                  🔄 Last Seen: {new Date(v.lastSeen).toLocaleString()}
                </p>

                <p style={{ margin: "4px 0", fontSize: 10, color: "#999" }}>
                  UA: {v.userAgent}
                </p>
              </div>

              <div style={{ textAlign: "right" }}>
                <span
                  onClick={() => deleteVisitor(v.visitorId)}
                  style={{
                    cursor: "pointer",
                    color: "#dc2626",
                    fontSize: 18
                  }}
                  title="Delete Visitor"
                >
                  🗑️
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ───────── RIGHT PANEL ───────── */}
      <div style={{ width: "65%", padding: 20 }}>
        {!selectedUserId ? (
          <h3>Select a visitor or user</h3>
        ) : (
          <>
            <h3>Chat</h3>

            <div
              style={{
                height: "60vh",
                border: "1px solid #ccc",
                padding: 10,
                overflowY: "auto",
                display: "flex",
                flexDirection: "column"
              }}
            >
              {messages.map((msg, i) => (
                <div
                  key={i}
                  style={{
                    alignSelf:
                      msg.sender === "admin"
                        ? "flex-end"
                        : "flex-start",
                    marginBottom: 6
                  }}
                >
                  <span
                    style={{
                      background:
                        msg.sender === "admin"
                          ? "#2bb5f0"
                          : "#22c55e",
                      color: "#fff",
                      padding: "6px 10px",
                      borderRadius: 6,
                      maxWidth: "60%"

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
              <button onClick={sendAdminMessage} className="btn-sm mt-2">Send</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminInbox;
