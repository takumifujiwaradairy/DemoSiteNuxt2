<template>
  <div>
    <button @click="deleteArticle(id)">Delete</button>
    <p>{{id}}</p>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  props: ["id"],
  methods: {
    ...mapActions(['deleteArticle'])
  }
}
</script>