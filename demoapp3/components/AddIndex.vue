<template>
  <div class = "container">
    <ul>
      <li v-for ='article in displayArticle' :key = 'article.id'>
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
      if(this.findFlg) {
      } else {
        return [];
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