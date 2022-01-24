<template>
  <div class = "container">
    <ul>
      <li v-for = 'article in displayArticle' :key = 'article.id'>
        <p> {{ article.title }} </p>
        <p> {{ article.content }} </p>
      </li>
    </ul>
    <input type="text" v-model="findTitle">
    <button>検索</button>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  data: function() {
    return {
      findTitle: '',
    }
  },
  computed: {
    ...mapState(['articles']),
    // displayArticle: function() {
    //   // let arr = [];
    //   // let data = this.aricles;
    //   // // data.forEach(element => {
    //   // //   if(element.title.toLowerCase() == this.title.toLowerCase()){
    //   // //     arr.push(element);
    //   // //   }
    //   // });
    //   return arr;
    // }
    displayArticle: function() {
      if(this.findTitle == 0){
        return this.articles;
      } else if(this.findTitle == articles.title){
        return this.articles;
      } else {
        return this.findTitle;
      }
    }
  },
  methods: {
  }
}
</script>