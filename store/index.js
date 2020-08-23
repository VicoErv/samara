import { types } from './mutation-types';
import Instagram from "./actions/Instagram";

export const mutations = {};

Object.keys(types).forEach(type => {
  mutations[types[type].BASE] = (state, payload) => {
    switch (payload.type) {
      case types[type].PENDING:
        return window.$nuxt.$set(state, types[type].loadingKey, payload.value)
      case types[type].SUCCESS:
        window.$nuxt.$set(state, types[type].statusCode, payload.statusCode)
        return window.$nuxt.$set(state, types[type].stateKey, payload.data)
      case types[type].FAILURE:
        return window.$nuxt.$set(
          state,
          types[type].statusCode,
          payload.statusCode
        )
    }
  }
})

export const actions = {
  getIg: Instagram.getUser
}

export const state = {
  igData: {
    graphql: { user: { edge_owner_to_timeline_media: { edges: [] } } }
  }
}
