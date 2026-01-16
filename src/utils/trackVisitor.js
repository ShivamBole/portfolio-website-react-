import axios from "axios";
import { getChatUserId } from "./chatUser";

export const trackVisitor = async () => {
  const visitorId = getChatUserId();

  // 🔹 Browser info
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

  const device = /Mobi/i.test(userAgent)
    ? "Mobile"
    : "Desktop";

  // 🔹 LOCATION (IMPORTANT PART)
  let country = "";
  let city = "";

  try {
    const res = await fetch("https://ipapi.co/json/");
    const data = await res.json();

    country = data.country_name || "";
    city = data.city || "";
  } catch (err) {
    console.error("Geo location fetch failed");
  }

  // 🔹 Send to backend
  await axios.post("http://localhost:5000/api/visitor/track", {
    visitorId,
    browser,
    os,
    device,
    userAgent,
    country,
    city
  });
};
