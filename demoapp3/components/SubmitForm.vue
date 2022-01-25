<template>
  <div class="container">
    <input type="text" v-model="title">
    <textarea v-model="content">
    </textarea> 
    <button @click="post">保存</button>
  </div> 
</template>

<script>
export default {
  data: function() {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    post: function() {
      this.$store.dispatch('postArticle', { title: this.title, content: this.content });
      this.title = '',
      this.content = ''
    }
  }
}
</script>