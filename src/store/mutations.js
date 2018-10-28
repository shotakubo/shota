import * as types from "./types";

export const state = {
  message: "久保",
  users: [],
  sheetList: [],
  books: []
};

export const mutations = {
  [types.MESSAGE_UPDATE](state) {
    state.message = "翔太";
  },
  [types.SET_USER](state, response) {
    state.users = response.data.users;
  },
  [types.SET_GSHEET](state, response) {
    state.sheetList = response;
  },
  [types.SET_BOOKS](state, response) {
    state.books = response;
  }
};
