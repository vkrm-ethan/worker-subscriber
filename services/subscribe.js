const axios = require("axios");

const findOneAndUpdate = require("../mutation/findOneAndUpdateEvent");

async function subscribe() {
  let response = await axios.get("/results");

  const rest = "";

  console.log(response.status);

  if (response.status == 502) {
    // Status 502 is a connection timeout error,
    // may happen when the connection was pending for too long,
    // and the remote server or a proxy closed it
    // let's reconnect
    await subscribe();
  } else if (response.status != 200) {
    // An error - let's show it
    console.log(response.statusText);
    // Reconnect in one second
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await subscribe();
  } else if (response.status == 200) {
    const message = await response.data;
    console.log(message);
    await findOneAndUpdate(message);

    await subscribe();
  }
}

module.exports = subscribe;
