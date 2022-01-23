<template>
  <div>
    <label></label>
    <input type="text" v-model="title">
    <p>{{title}}</p>
    <button class="btn btn-primary" @click="submit">投稿</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      content: '',
    }
  },
  methods: {
    submit(title) {
      console.log(this.title);
      this.$store.commit('submit', {title: this.title, content: this.content});
    },
    serach(title) {}
  }
}
</script>