import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      articles: [
        {title: 'test', content: 'hogehogehoge'}
      ]
    }),
    mutations: {
      insert: function(state, obj){
        state.aricles.unshift({
          title: obj.title,
          content: obj.content
        })
      }
    }
  })
}

export default createStore;