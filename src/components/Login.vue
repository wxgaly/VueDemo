<template>

  <div class="login-box">

    <form class="form-username">
      <input class="username" v-bind:placeholder="username_placeholder" v-model="usernameValue"/>
    </form>

    <form class="form-password">
      <input class="password" v-bind:placeholder="password_placeholder" v-model="passwordValue"/>
    </form>

    <div>
      <button @click="onLogin">登录</button>
    </div>

  </div>

</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username_placeholder: '请输入用户名',
      password_placeholder: '请输入密码',
      usernameValue: '',
      passwordValue: ''
    }
  },
  methods: {
    onLogin () {
      if (this.usernameValue && this.passwordValue) {
        this.$api.login(this.usernameValue, this.passwordValue)
      } else {
        alert('用户名或密码不能为空!')
      }
    }
  }
}
</script>

<style scoped>
.login-box {
  width: 500px;
  height: 300px;
  background: #26b7ff;
  border-radius: 10px;
  display: inline-block;
}

.login-box .form-username {
  margin: 100px 50px 0 50px;
  width: 400px;
  height: 50px;
  text-align: center;
}

.login-box .form-password {
  margin: 10px 50px 0 50px;
  width: 400px;
  height: 50px;
  text-align: center;
}

.login-box input {
  width: 300px;
  height: 30px;
  border: 1px solid #DBDBDB;
  border-radius: 5px;
  outline: none;
}

.login-box button {
  width: 100px;
  margin: 20px 50px 0 50px;
  border: 1px solid #DBDBDB;
  border-radius: 5px;
  background: #31bb04;
  color: white;
}

.login-box button:hover {
  background: #00bb1a;
}

</style>
