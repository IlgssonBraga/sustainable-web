const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth");

const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      jwt.verify(token, authConfig.secret);
      return true;
    } catch (err) {
      console.error(err);

      return false;
    }
  } else {
    return false;
  }
};

const value = isAuthenticated();

module.exports = value;
