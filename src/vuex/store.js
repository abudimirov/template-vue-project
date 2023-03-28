import { createStore } from 'vuex'

import mutations from './mutations/mutations';
import getters from './getters/getters';
import apiRequests from './actions/api-requests';
import commonActions from './actions/actions';

const actions = {...commonActions, ...apiRequests}

let store = createStore({
  state: {
    products: [],
    cart: []
  },
  getters,
  mutations,
  actions
})

export default store;