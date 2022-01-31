<template>
  <div>
    <p>Likesの合計</p>
    {{ article.like }}
    <button @click="AddLike">LIKE</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: ["article"],
  methods: {
    ...mapActions(['updateLikes']),
    AddLike: function (){
      const pulslike = {
        like: this.article.like, 
        id: this.article.id
      }
      this.updateLikes(pulslike);
    }
  }
}
</script>
