<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!--<p>
      <router-link to="/HelloWorld">Go HelloWorld</router-link>
      <router-link to="/TodoList">Go TodoList</router-link>
      <router-link to="/bar">Go to Bar</router-link>
      <router-link to="/Login">Go to Login</router-link>
    </p>-->
    <el-container direction="vertical">
      <el-menu
          class="el-menu"
          :default-active="$route.path"
          mode="horizontal"
          @select="handleSelect"
          background-color="#1e90ff"
          text-color="#fff"
          active-text-color="#ffd04b"
          router>
          <el-menu-item index="/HelloWorld">HelloWorld</el-menu-item>
          <el-menu-item index="/TodoList">TodoList</el-menu-item>
          <el-menu-item index="/bar">Bar</el-menu-item>
          <el-menu-item index="/Login">登录界面</el-menu-item>
          <el-menu-item index="2" disabled="">消息中心</el-menu-item>
        </el-menu>
      <el-main>
          <router-view id="routerView"/>
      </el-main>
      <el-footer>{{ author }}</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      activeIndex: '/Login',
      author: 'Created by WXG'
    }
  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    },
    handleSelect (key, keyPath) {
      // console.log(key, keyPath)
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
  vertical-align: middle;
  color: #2c3e50;
  font-size: large;
  /*margin-top: 60px;*/
}

.el-menu-item {
  font-size: 22px;
}

#app img {
  display: none;
}

.el-main {
  color: #333;
  text-align: center;
  height: 1000px;
}

#routerView {
  display: inline-block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}

.el-footer {
  color: #333;
  text-align: center;
  line-height: 60px;
}

</style>
