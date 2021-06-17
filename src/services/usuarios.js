const { http } = require("./config");

export default {
  logar: () => {
    return http.post(`sessions`, {
      email: "johndoe@email.com",
      password: "123",
    });
  },
};
