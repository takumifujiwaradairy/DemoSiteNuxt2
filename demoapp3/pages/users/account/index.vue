<template>
  <div>
    <h1>ログアウト・退会</h1>
    <button @click="$auth.logout()">ログアウト</button>
    <button @click="deleteUser">退会</button>
  </div>  
</template>

<script>
export default {
  data: () => ({}),
  methods: {
    deleteUser (){
      this.$axios
      .delete('api/auth', {
        headers: { 'access-token': localStorage.getItem('access-tokun'),
        uid: localStorage.getItem('uid'),
        client: localStorage.getItem('client'),
        },
      })
      .then((response) =>{
        this.auth.logout()
        window.location.href = '/'
      })
    }
  }
}
</script>

<style>

</style>i