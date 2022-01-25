import Vuex from 'vuex';
import axios from 'axios';

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      articles: [
        {title: 'test', content: 'hogehogehoge'}
      ]
    }),
    getters: {

    },
    actions: {
      async post({commit}, aricle) {
        const response = await axios.post('/api/posts', { aricle })
        commit('newAticle', response.data ,{ root: true })
      },
    },
    mutations: {
      newAticle: (state, aricle) => state.articles.push(aricle)
    }
  })
}

export default createStore;