<template>
  <button @click="deleteArticle(articles.id)">Delete</button>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  methods: {
    ...mapActions(['deleteArticle'])
  }
}
</script>