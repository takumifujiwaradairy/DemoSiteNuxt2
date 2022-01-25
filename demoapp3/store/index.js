import Vuex from 'vuex';
import axios from 'axios';

const url = '/api/posts';

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
      async postArticle({commit}, post) {
          const response = await axios.post(url, { post })
          commit(response.data)
      }
    },
    mutations: {
      
    }
  })
}

export default createStore;