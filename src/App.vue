<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>
      <router-link to="/HelloWorld">Go HelloWorld</router-link>
      <router-link to="/TodoList">Go TodoList</router-link>
      <router-link to="/bar">Go to Bar</router-link>
      <router-link to="/Login">Go to Login</router-link>
    </p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
