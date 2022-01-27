<template>
  <div>
    <button @click="deleteArticle(id)">Delete</button>
    <p>{{name}}</p>
    <p>{{id}}</p>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  data: function() {
    return {
      name: 'yuusuke'
    }
  },
  props: ["id"],
  methods: {
    ...mapActions(['deleteArticle'])
  }
}
</script>