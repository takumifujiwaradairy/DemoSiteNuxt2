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
        await axios.post(url, article).then(responce => {
          const article = JSON.parse(responce.data.data)
          commit('newArticle', article)})
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
          commit('addLike', [response.data.data, id])
        }) 
      },
      async deleteLike({commit}, id){
        await axios.delete(`${likesUrl}/${id}`)
      }
    },
    mutations: {
      setArticles: (state, articles) => {
        state.articles = articles },

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
        // id[0] = カウント
        // id[1] = articlesの番号
        // すでにUserがlikeをしていた場合、エラー分が入っているので弾く。数値が入っている場合には処理を行う
        if (!isNaN(id[0])){
          // ここでArticleのID番号を特定する。
          const index = state.articles.findIndex((article) => article.id === id[1]);
          const article =state.articles[index]
          // サーバーから取ってきたいいね数を代入する。
          article.likes_count = id[0];
          state.articles.splice(index, 1, article);
        } else {
          console.log(id[0]);
        }
      }
    }
  })
}

export default createStore;