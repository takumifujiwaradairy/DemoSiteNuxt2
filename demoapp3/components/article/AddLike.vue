<template>
  <div>
    <p>Likesの合計</p>
    {{ article.like }}
    <button @click="AddLike">LIKE</button>
    <!-- お気に入り解除ボタンを作成する -->
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
    // お気に入り解除メソッドを作成する。
  }
}
</script>
