<template>
  <div class = "container">
    <ul>
      <li v-for = 'article in aricles' :key = 'article.id'>
        <p> {{ article.title }} </p>
        <p> {{ article.content }} </p>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  computed: {
    ...mapState(['aricles'])
  }
}
</script>