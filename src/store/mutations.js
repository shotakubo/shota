import * as types from "./types";

export const state = {
  message: "久保",
  users: []
};

export const mutations = {
  [types.MESSAGE_UPDATE](state) {
    state.message = "翔太";
  },
  [types.SET_USER](state, response) {
    state.users = response.data.users;
  }
};
