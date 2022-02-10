<template>
  <div class = "container">
    <ul>
      <li v-for='article in displayArticle' :key='article.id'>
        <p> {{ article.title }} </p>
        <p> {{ article.content }} </p>
        <p>記事のID番号</p>
        <p> {{ article.id }} </p>
        <p>ユーザーのId番号</p>
        <p> {{ article.user_id }} </p>
        <DeleteArticle :id="article.id"/>
        <AddLike :article="article"/>
      </li>
    </ul>
    <input type="text" v-model="findTitle" @focus="setFlg">
    <button @click="find">検索</button>
  </div>
</template>

<script>
import DeleteArticle from './DeleteArticle.vue'
import AddLike from './AddLike.vue'
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  components: {
    DeleteArticle,
    AddLike
  },
  data: function() {
    return {
      findTitle: '',
      findFlg: false,
    }
  },
  computed: {
    ...mapGetters(['getArticles']),
    ...mapState(['articles']),
      displayArticle: function() {
        if(this.findFlg){
          var articles = [];
          this.getArticles.forEach(article => {
            if(article.title.toLowerCase().indexOf(this.findTitle.toLowerCase())> -1){
              articles.push(article);
            }
          });
          return articles;
        } else {
          return this.getArticles;
        }
      }
    },
  methods: {
    ...mapActions(['fetchArticles']),
    find: function() {
      this.findFlg = true;
    },
    setFlg: function() {
      if(this.findFlg) {
        this.findFlg  = false;
        this.findTitle = '';
      }
    },
    rennsyuu: function() {
    let n1 = ['yusuke','kazuya','risa','shiori']
    consoel.log(n1[0])
    }
  },
  created () {
    this.fetchArticles()
  }
}
</script>