function initializeWebApp() {
  if (process.env.NODE_ENV === "production") {
    require("offline-plugin/runtime").install();
  }
  require("moment").locale("en-US");
}

export default { initializeWebApp };
