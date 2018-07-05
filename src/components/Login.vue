<template>

  <div class="login-box">

    <form class="form" @submit="onLogin">
      <div class="form-user">
        <i class="icon-user"></i>
        <input class="username" v-bind:placeholder="username_placeholder"
               v-model.trim="usernameValue" type="text"/>
      </div>

      <div class="form-password">
        <i class="icon-password"></i>
        <input class="password" v-bind:placeholder="password_placeholder"
               v-model.trim="passwordValue" type="password"/>
      </div>

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
      if (this.usernameValue && this.passwordValue) {
        this.$api.registerUser(this.usernameValue, this.passwordValue, res => {
          console.log(res.data)
          this.$router.replace('TodoList')
        })
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
  background: #5ebcbb;
  border-radius: 10px;
  display: inline-block;
}

.login-box .form-user {
  width: 500px;
  position: relative;
}

.login-box .form-password {
  width: 500px;
  position: relative;
}

.form-user .icon-user {
  background: url("../assets/ic_user.png") no-repeat;
  position: absolute;
  top: 105px;
  left: 88px;
  width: 36px; /*设置图片显示的宽*/
  height: 36px; /*图片显示的高*/
}

.login-box .form-password .icon-password {
  background: url("../assets/ic_password.png") no-repeat;
  position: absolute;
  top: 25px;
  left: 88px;
  width: 30px; /*设置图片显示的宽*/
  height: 30px; /*图片显示的高*/
}

.login-box .username {
  margin: 100px 50px 0 50px;
  width: 300px;
  height: 30px;
  padding-left: 35px;
  border: 1px solid #DBDBDB;
  border-radius: 5px;
  outline: none;
}

.login-box .password {
  margin: 20px 50px 0 50px;
  padding-left: 35px;
  width: 300px;
  height: 30px;
  border: 1px solid #DBDBDB;
  border-radius: 5px;
  outline: none;
}

.login-box .login {
  width: 100px;
  margin: 30px 30px 0 30px;
  border: 1px solid #DBDBDB;
  border-radius: 5px;
  background: #3cbcff;
  color: white;
}

.login-box .login:hover {
  background: #1a87ff;
}

.login-box .register {
  width: 100px;
  margin: 30px 30px 0 30px;
  border: 1px solid #DBDBDB;
  border-radius: 5px;
  background: #ff7ccb;
  color: white;
}

.login-box .register:hover {
  background: #ff44bc;
}

</style>
