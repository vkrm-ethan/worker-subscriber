const axios = require("axios");
const subscribe = require("./subscribe");

axios.defaults.baseURL = process.env.SERVER_URL;

async function login() {
  let response = await axios.post("/auth", {
    email: "m.vikram.professional@gmail.com",
    password: "lTgAYaLP9jRs",
  });
  if (response && response.status == 200) {
    let message = await response.data;
    axios.defaults.headers.common["Authorization"] = `Bearer ${message.token}`;
    subscribe();
  }
}

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      login();
    }
    return error;
  }
);

module.exports = login;
