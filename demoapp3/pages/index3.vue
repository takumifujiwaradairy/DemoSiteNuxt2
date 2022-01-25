<template>
  <div class="container">
    <h4>新規投稿</h4>
    <div class="form-control">
      <span>Title</span>
      <input
        type="text"
        v-model="title"
      >
    </div>
    <div class="form-control">
      <span>Body</span>
      <input
        type="text"
        v-model="content"
      >
    </div>
    <div class="form-control">
      <button @click="postMessage">send</button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    title: null,
    content: null,
  }),
  methods: {
    postMessage() {
      const url = '/api/posts';
      const post = {
        title: this.title,
        content: this.content,
      };
      this.$axios.post(url, { post })
        .then(res => console.log(res.status))
        .catch(error => console.log(error));
    },
  }
}
</script>

<style>
.container {
  width: 60%;
  max-width: 600px;
  margin: 0 auto;
}
.form-control {
  margin: 20px 0;
}
h4 {
  text-align: center;
}
span {
  width: 4em;
  display: inline-block;
}
input[type="text"] {
  width: calc(100% - 6em);
}
button {
  margin: auto;
  display: block;
}
</style>