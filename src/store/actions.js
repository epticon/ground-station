import Vue from "vue";
import retry from "async-retry";
import { ROUTES } from "./handlers/swarmMessageHandler";

const ensureIsConnected = async ({ state }) => {
  await retry(
    () => {
      if (state.socket.isConnected == false)
        throw new Error("Not yet connected.");
    },
    { retries: 2, minTimeout: 2000, maxTimeout: 4000 }
  );
};

const sendCommand = ({ state, fn }) => {
  ensureIsConnected({ state })
    .then(() => fn())
    .catch(err => state.socket.messages.push({ time: Date.now(), err }));
};

export default {
  sendRawMessage({ state }, payload) {
    sendCommand({
      state,
      fn: async () => {
        await Vue.prototype.$socket.send(JSON.stringify(payload));
      }
    });
  },
  getDivisionNames: function({ state }) {
    sendCommand({
      state,
      fn: () => {
        Vue.prototype.$socket.sendObj({
          route: ROUTES.DIVISION_NAMES
        });
      }
    });
  },

  getAllDivisions: function({ state }) {
    sendCommand({
      state,
      fn: () => {
        Vue.prototype.$socket.sendObj({
          route: ROUTES.DIVISIONS
        });
      }
    });
  }
};
