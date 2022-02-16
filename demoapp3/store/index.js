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
          commit('addArticle', article)})
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
          // 第２引数でオブジェクトを返す
          commit('addlike', { id: id, count: response.data.data })
        })
        .catch(error => {
          console.log(error);
        }) 
      },
      async deleteLike({commit}, id){
        await axios.delete(`${likesUrl}/${id}`)
        .then(response => {
          commit('deleteLike', { id: id, count: response.data.data })
        })
      }
    },
    mutations: {
      setArticles: (state, articles) => {
        state.articles = articles 
      },
      addArticle: (state, article) => state.articles.unshift(article),
      deleteArticle: (state, id) => {
        // リアクティブ
				const index = state.articles.findIndex((article) => article.id === id);
        state.articles.splice(index, 1);
        // 非リアクティブ
        // const index = state.articles.findIndex((article) => article.id === id);
        // delete state.articles[index];
      },
      // 第２引数で分割代入で値を受け取る
      addLike: (state, { id, count }) => {
        // ここでArticleのIDを特定する。
        const index = state.articles.findIndex((article) => article.id === id);
        const article =state.articles[index]
        // サーバーから取ってきたいいね数を代入する。
        article.likes_count = count;
        state.articles.splice(index, 1, article);
      },
      // 第２引数で分割代入で値を受け取る
      deletelike: (state, { id, count }) => {
        // ここでarticleのidを特定する。
        const index = state.articles.findindex((article) => article.id === id);
        // spliceを使うために一度配列を定数に入れる
        const article =state.articles[index]
        article.likes_count = count;
        state.articles.splice(index, 1, article);
      }
    }
  })
}

export default createStore;