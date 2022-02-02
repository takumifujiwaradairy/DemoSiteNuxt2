<template>
  <div>
    <h1>ログイン</h1>
    <div>
      <form action="">
        <label>メールアドレス</label>
        <input type="email" v-model="email">
        <label>パスワード</label>
        <input type="passwprd" v-model="password">
      </form>
    </div>
  </div>
</template>

<script>
export default {
  auth: false,
  data: {
    email: '',
    passwprd: ''
  },
  methods: {
  }
}
</script>

<style>

</style>