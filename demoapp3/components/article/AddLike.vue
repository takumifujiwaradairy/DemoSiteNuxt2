<template>
  <div>
    <p>Likesの合計</p>
    <!-- responseに含まているカウントを取得できるようにする。 -->
    {{ article.likes_count }}
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
    ...mapActions(['updateLike', 'deleteLike']),
    AddLike: function (){
      this.updateLike(this.article.id);
    },
    // お気に入り解除メソッドを作成する。
    disLike: function (){
      this.deleteLike(this.article.id);
    }
  }
}
</script>
