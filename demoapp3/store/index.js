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
        await axios.get(url).then(responce => {
          commit('setArticles', responce.data.data)
        })
      },
      async postArticle({commit}, article) {
      await axios.post(url, article).then(responce => {commit(responce.data)})
      // async postArticle({commit}, article) {
      //   const response = await axios.post(url, { article })
      //   commit(response.data)
      },  
      async deleteArticle({commit}, id){
        await axios.delete(url.concat(`/${id}`)).then(() => {commit('deleteArticle', id)})
      }
    },
    mutations: {
      setArticles: (state, articles) =>{
        console.log(articles);
        state.articles = articles
      },
      deleteArticle: (state, id) => {
        state.articles.forEach((article) =>console.log(article.id))
        state.articles.forEach((article) => {
          {
            console.log(article.id);
            console.log(article);
            console.log(id);
            article.splice(article.id,1);
          }
        })
        // if(state.articles.id === id){
        //   console.log("AAA");
        //   state.articles.splice(id,1);
        //   return aaa;
        // } else {
        //   console.log("BBB");
        //   console.log(state.articles.data[0].id);
        //   console.log(id)
        //   state.articles.splice(id,1);
        // }
      }
    }
  })
}

export default createStore;