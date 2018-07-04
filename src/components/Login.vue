<template>

  <div class="login-box">

    <form class="form" @submit="onLogin">
      <input class="username" v-bind:placeholder="username_placeholder" v-model.trim="usernameValue"/>
      <input class="password" v-bind:placeholder="password_placeholder" v-model.trim="passwordValue"/>
      <input class="login" type="submit" value="登录">
      <input class="register" type="button" value="注册" @click="onRegister">
    </form>

    <!--<div>-->
      <!--<button v-bind:onsubmit="onLogin">登录</button>-->
    <!--</div>-->

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
        this.$api.login(this.usernameValue, this.passwordValue, res => {
          console.log(res.data.username)
          this.$router.replace('HelloWorld')
        })
      } else {
        alert('用户名或密码不能为空!')
      }
    },
    onRegister () {
      console.log('Register')
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

.login-box .username {
  margin: 100px 50px 0 50px;
}

.login-box .password {
  margin: 10px 50px 0 50px;
}

.login-box input {
  width: 300px;
  height: 30px;
  border: 1px solid #DBDBDB;
  border-radius: 5px;
  outline: none;
}

.login-box .login {
  width: 100px;
  margin: 20px 30px 0 30px;
  border: 1px solid #DBDBDB;
  border-radius: 5px;
  background: #31bb04;
  color: white;
}

.login-box .login:hover {
  background: #00bb1a;
}

.login-box .register {
  width: 100px;
  margin: 20px 30px 0 10px;
  border: 1px solid #DBDBDB;
  border-radius: 5px;
  background: #31bb04;
  color: white;
}

.login-box .register:hover {
  background: #00bb1a;
}

</style>
