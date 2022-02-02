<template>
  <div>
    <h1>新規登録</h1>
    <div>
      <form action="">
        <label>メールアドレス</label>
        <input type="email" v-model="email">
        <label>パスワード</label>
        <input type="password" v-model="password">
        <label>パスワード確認</label>
        <input type="password" v-model="passwordConfirmation">
        <button @click="register">ログイン</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  auth: false,
  data() {
    return {
      user: {
        email: '',
        password: '',
        passwordConfirmation: ''
      }
    }
  },
  methods: {
    register() {
      this.$axios.post('/api/auth', this.user)
    }
  }
}
</script>

<style>

</style>