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
      async postArticle({commit}, aricle) {
          const url = 'http://localhost:3000/api/v1/posts'
          const response = await axios.post(url, {aricle})
          commit(response.data)
      }
    },
    mutations: {
      
    }
  })
}

export default createStore;