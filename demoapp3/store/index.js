import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      aricles: [
        {title: 'test', content: 'hogehogehoge'}
      ]
    }),
    mutations: {
    }
  })
}