<template>
  <div>
    <ul>
      <li v-for='article in articles' :key='article.id'>
        {{ article.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['articles']),
    }
  }

</script>

