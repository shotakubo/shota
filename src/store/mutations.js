import * as types from './types';

export const state = {
  message: '久保'
};

export const mutations = {
  [types.MESSAGE_UPDATE] (state) {
    state.message = '翔太';
  },
  [types.FOO] (state, payload) {
    state.message = payload.message;
  }
};