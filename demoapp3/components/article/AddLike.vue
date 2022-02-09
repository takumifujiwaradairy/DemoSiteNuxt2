<template>
  <div>
    <p>Likesの合計</p>
    {{ article.like }}
    <button @click="addLike">LIKE</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: ["article"],
  methods: {
    ...mapActions(['updateLikes']),
    AddLike: function (){
      this.updateLikes(this.article.id);
    }
  }
}
</script>
