<template>
  <div class = "container">
    <ul>
      <li v-for='article in displayArticle' :key='article.id'>
        <p> {{ article.title }} </p>
        <p> {{ article.content }} </p>
      </li>
    </ul>
    <input type="text" v-model="findTitle" @focus="setFlg">
    <button @click="find">検索</button>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  data: function() {
    return {
      findTitle: '',
      findFlg: false,
    }
  },
  computed: {
    ...mapState(['articles']),
      displayArticle: function() {
        if(this.findFlg){
          var articles = [];
          this.articles.forEach(article => {
            if(article.title.toLowerCase() == this.findTitle.toLowerCase()){
              arr.push(article);
            }
          });
          return arr;
        } else {
          return this.articles;
        }
      }
    },
  methods: {
    find: function() {
      this.findFlg = true;
    },
    setFlg: function() {
      if(this.findFlg) {
        this.findFlg  = false;
        this.findTitle = '';
      }
    },
  }
}
</script>