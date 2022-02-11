<template>
  <div>
    <p>Likesの合計</p>
    {{ article.like }}
    <button @click="AddLike">LIKE</button>
    <!-- お気に入り解除ボタンを作成する -->
    <button @click="disLike">DisLIKE</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: ["article"],
  methods: {
    ...mapActions(['updateLikes', 'deleteLikes']),
    AddLike: function (){
      this.updateLikes(this.article.id);
    },
    // お気に入り解除メソッドを作成する。
    disLike: function (){
      this.deleteLikes(this.article.id);
      // 本当はLikeIdで作成したいがまでstateの中身を作っていないので、代わり
    }
  }
}
</script>
