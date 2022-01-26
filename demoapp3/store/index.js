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
      async fetchArticles({commit}) {
        const responce = await axios.get(url)
        commit('setArticles', responce.data)
      },
      async postArticle({commit}, article) {
          const responce = await axios.post(url, article)
          commit(responce.data)
      }
    },
    mutations: {
      setArticles: (state, articles) => (state.articles = articles)
    }
  })
}

export default createStore;