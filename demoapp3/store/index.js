import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      articles: [
        {title: 'test', content: 'hogehogehoge'}
      ]
    }),
    mutations: {
      insert: function(state, aricle){
        state.aricles.unshift({
          title: article.title,
          content: article.content
        })
      }
    }
  })
}

export default createStore;