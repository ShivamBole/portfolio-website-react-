
import api from "./api";
import { getChatUserId } from "./chatUser";

export const trackVisitor = () => {
  const visitorId = getChatUserId();

  const userAgent = navigator.userAgent;
  const platform = navigator.platform;

  const browser = userAgent.includes("Firefox")
    ? "Firefox"
    : userAgent.includes("Chrome")
    ? "Chrome"
    : "Other";

  const os = platform.includes("Win")
    ? "Windows"
    : platform.includes("Mac")
    ? "Mac"
    : "Other";

  const device = /Mobi/i.test(userAgent) ? "Mobile" : "Desktop";

  let intervalId;

  const heartbeat = async () => {
    try {
      await api.post("/api/visitor/track", {
        visitorId,
        browser,
        os,
        device,
        userAgent,
        isOnline: true
      });
    } catch (err) {}
  };

  // 🟢 ONLINE + HEARTBEAT
  heartbeat();
  intervalId = setInterval(heartbeat, 15000); // every 15 sec

  // 🔴 BEST-EFFORT OFFLINE
  const markOffline = () => {
    navigator.sendBeacon(
      "/api/visitor/offline",
      JSON.stringify({ visitorId })
    );
  };

  window.addEventListener("beforeunload", markOffline);

  return () => {
    clearInterval(intervalId);
    markOffline();
    window.removeEventListener("beforeunload", markOffline);
  };
};
