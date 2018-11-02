// added for proxy support for Create-React-App 2.0+
const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(proxy("/api/*", { target: "http://localhost:5000" }));
  app.use(proxy("/auth/google", { target: "http://localhost:5000" }));
};
