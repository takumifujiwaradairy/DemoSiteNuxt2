import Vuex from 'vuex';

const createStore = () => {
    return new Vuex.Store({
        state: () => ({
          articles:[
          {title: ''},
          {content: ''}
          ]
        }),
        mutations: {
              submit: function(state,obj){
                state.articles.unshift({
                title: obj.title,
                content: obj.content
              })
              }
        }
    })
}



export default createStore;
