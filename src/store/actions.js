import Vue from "vue";
import * as types from "./types";
const Gsheet = "https://script.googleusercontent.com/macros/echo?user_content_key=0gSURybkIu5-k-7c477j3s_ul4r_fofZ4GT4nXEuMJjFpZnSAzXoNkix2k42YCb3x7bBiGI5zsjl1vOMBp4JGPPc5A_1XBUVm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnMcUqHrewdmJ_VPN1OYXrroQRXT0nCxNjJbd1FmVjcsjf_kvJa-iKXOKJCs4FmLCHSeyIXgoO0-F&lib=MDoIL8lCtViNqHzJNJmgryRQb1SKOTbFR";
const baseUrl = "https://www.googleapis.com/books/v1/volumes?q=入間人間";

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

export const getSheetList = ({ commit }) => {
  Vue.http.get(Gsheet).then(
    response => {
      commit(types.SET_GSHEET, response.data);
    },
    response => {
      console.log(response);
    }
  );
};

export const getBooks = ({ commit }) => {
  Vue.http.get(baseUrl).then(
    response => {
      commit(types.SET_BOOKS, response);
    },
    response => {
      console.log(response);
    }
  );
};
