<template>
  <div>
    <p>Likesの合計</p>
    {{ article.like }}
    <button @click="AddLike">LIKE</button>
  </div>
</template>

<script>
export default {
  props: ["article"],
  methods: {
    AddLike: function (){
      this.article.like += 1; 
    }
  }
}
</script>
