<template>
  <div>
    <p>Likesの合計</p>
    {{ article.like }}
    <button @click="addLike">LIKE</button>
  </div>
</template>

<script>
export default {
  props: ["article"],
  methods: {
    addLike: function (){
      this.article.like += 1; 
    }
  }
}
</script>
