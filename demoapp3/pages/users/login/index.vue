<template>
  <div>
    <h1>ログイン</h1>
    <div>
      <form action="">
        <label>メールアドレス</label>
        <input type="email" v-model="email">
        <label>パスワード</label>
        <input type="passwprd" v-model="password">
        <button @click="loginWithAuthModule">ログイン</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      password: '',
      email: ''
    }
  },
  methods: {
    async loginWithAuthModule () {
      await this.$auth.loginWith('local', {
        data: {
          email: this.email,
          password: this.password
        }
      })
        .then((response) => {
          return response
        },
        (error) => {
          return error
        })
    }
  }
}
</script>

<style>

</style>