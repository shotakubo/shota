import Vue from "vue";
import * as types from "./types";

export const getUsers = ({ commit }) => {
  Vue.http.get("/json/users.json").then(
    response => {
      commit(types.SET_USER, response);
    },
    response => {
      console.log(response);
    }
  );
};
