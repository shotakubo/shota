import * as types from "./types";

export const state = {
  message: "ボタンクリックすると...",
  users: [],
  sheetList: [],
  books: []
};

export const mutations = {
  [types.MESSAGE_UPDATE](state) {
    state.message = "テキストが更新されます！！";
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
