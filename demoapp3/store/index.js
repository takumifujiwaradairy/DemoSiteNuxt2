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
      getArticles: (state) => {
        return  state.articles.data
      } 
    },
    actions: {
      async fetchArticles({commit}) {
        const responce = await axios.get(url)
        commit('setArticles', responce.data)
      },
      async postArticle({commit}, article) {
        const responce = await axios.post(url, article)
        commit(responce.data)
      },
      async deleteArticle({commit}, id){
        await axios.delete(url.concat('/${id}'));
        commit('removeArticle',id)
      }
    },
    mutations: {
      setArticles: (state, articles) => (state.articles = articles),
      removeArticle: (state, id) => state.articles = state.articles.filter(article => article.id !== id)
    }
  })
}

export default createStore;