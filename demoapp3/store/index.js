import Vuex from 'vuex';
import axios from 'axios';

const url = '/api/articles';

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
      async postArticle({commit}, article) {
          const response = await axios.post(url, { article })
          commit(response.data)
      }
    },
    mutations: {
      
    }
  })
}

export default createStore;