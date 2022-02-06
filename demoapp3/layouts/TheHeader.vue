<template>
  <div class="container">
    <h1>
      <nuxt-link to="/">デモサイト</nuxt-link>
      <h2>ログイン状態:{{ $auth.loggedIn }}</h2>
    </h1>
    <div>
      <nuxt-link to="/users/login">ログイン</nuxt-link>
      <nuxt-link to="/users/signup">新規登録</nuxt-link>
      <nuxt-link to="/users/account">削除・ログアウト</nuxt-link>
    </div>
  </div>
</template>