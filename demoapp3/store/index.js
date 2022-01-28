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
        return  state.articles
      } 
    },
    actions: {
      async fetchArticles({commit}) {
        await axios.get(url).then((responce => {commit('setArticles', responce.data)}))
      },
      async postArticle({commit}, article) {
        await axios.post(url, article).then(responce => {commit(responce.data)})
      },
      async deleteArticle({commit}){
        await axios.delete(url.concat('/${id}')).then(responce => {commit('removeArticle',responce.id)})
      }
    },
    mutations: {
      setArticles: (state, articles) => (state.articles = articles),
    }
  })
}

export default createStore;