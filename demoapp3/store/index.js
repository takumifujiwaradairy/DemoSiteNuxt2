import Vuex from 'vuex';
import axios from 'axios';

const url = '/api/articles';
const likesUrl = '/api/likes';

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      articles: [
      ]
    }),
    getters: {
      getArticles: (state) => {
        return  state.articles
      },
      getLikes: (state) => {
        return  state.likes
      }
    },
    actions: {
      async fetchArticles({commit}) {
        await axios.get(url).then(responce => {
          // likeのカウントの取得し、文字列をオブジェクトに変換
          const articles = JSON.parse(responce.data.data)
          commit('setArticles', articles)
        })
      },
      async postArticle({commit}, article) {
        await axios.post(url, article).then(responce => { commit('newArticle', responce.data.data)})
      },  
      async deleteArticle({commit}, id){
      // サーバーサイドにリクエストを送り、mutationに伝聞を出す。
        await axios.delete(`${url}/${id}`).then(() => {commit('deleteArticle', id)})
      },
      async updateLike({commit}, id){
        // サーバーサイドにリクエストをおくる
        await axios.post(likesUrl, {like: {article_id: id}})
        .then(response => {
          // レスポンスを受け、mutationに伝聞を出す。
          commit('addLike', response.data.data)
        }) 
      },
      async deleteLike({commit}, id){
        await axios.delete(`${likesUrl}/${id}`)
      }
    },
    mutations: {
      setArticles: (state, articles) => { state.articles = articles },
      newArticle: (state, article) => state.articles.unshift(article),
      deleteArticle: (state, id) => {
        // リアクティブ
				const index = state.articles.findIndex((article) => article.id === id);
        state.articles.splice(index, 1);
        // 非リアクティブ
        // const index = state.articles.findIndex((article) => article.id === id);
        // delete state.articles[index];
      },
      // stateのLikeの値を変更するようにする。
      addLike: (state, id) => {
      //   const index = state.articles.findIndex((article) => article.id === id)
      //   if(index !== -1){
      //     let likeCount = state.articles[index]
      //     likeCount.like += 1
      //     state.articles.splice(index, 1, likeCount);
      //   }
      }
      // stateのLikeの値を変更できるようにする。
    }
  })
}

export default createStore;