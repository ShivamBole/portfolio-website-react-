export function getOS() {
  if (navigator.userAgentData?.platform) {
    console.log(navigator.userAgentData);
    return navigator.userAgentData.platform;
  }

  const platform = navigator.platform.toLowerCase();

  if (platform.includes("win")) return "Windows";
  if (platform.includes("mac")) return "macOS";
  if (platform.includes("linux")) return "Linux";
  if (/iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())) return "iOS";
  if (/android/.test(navigator.userAgent.toLowerCase())) return "Android";

  return "Unknown";
}
