import Vuex from 'vuex';
import axios from 'axios';

const url = '/api/articles';

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      articles: [
        {title: 'test', content: 'hogehogehoge', like: '0'}
      ]
    }),
    getters: {
      getArticles: (state) => {
        return  state.articles
      } 
    },
    actions: {
      async fetchArticles({commit}) {
        await axios.get(url).then(responce => {
          commit('setArticles', responce.data.data)
        })
      },
      async postArticle({commit}, article) {
        await axios.post(url, article).then(responce => { commit('newArticle', responce.data.data)})
      },  
      async deleteArticle({commit}, id){
        await axios.delete(`${url}/${id}`).then(() => {commit('deleteArticle', id)})
      },
      async updateLikes({commit}, upLike){
        await axios.put(`${url}/${upLike.id}`, upLike).then(()=> {commit('addLike', upLike)}) 
      }
    },
    mutations: {
      setArticles: (state, articles) => { state.articles = articles },
      newArticle: (state, article) => state.articles.unshift(article),
      deleteArticle: (state, id) => {
        // リアクティブ
				const index = state.articles.findIndex((article) => article.id === id);
        state.articles.splice(index,1);
        // 非リアクティブ
        // const index = state.articles.findIndex((article) => article.id === id);
        // delete state.articles[index];
      },
      addLike: (state, upLike) => {
        const index = state.articles.findIndex((article) => article.id === upLike.id)
        if(index !== -1){
          state.articles.splice(index, 1,upLike)
        }
      }
    }
  })
}

export default createStore;