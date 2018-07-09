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
      const loginLoading = this.$loading({
        lock: true,
        text: '登录中...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })

      if (this.usernameValue && this.passwordValue) {
        this.$api.login(this.usernameValue, this.passwordValue, res => {
          loginLoading.close()
          var result = this.$api.getJsonResult(res.data.status)

          if (result.code === this.$api.StatusCode.OK) {
            // this.$toast.showToast('登录成功!', 2000)
            this.$message({
              message: '登录成功!',
              type: 'success'
            })
            this.$router.replace('HelloWorld')
          } else {
            this.$message.error(result.message)
          }
        }, () => {
          loginLoading.close()
          this.$message.error('超时')
        })
      } else {
        loginLoading.close()
        // alert('用户名或密码不能为空!')
        this.$message.error('用户名或密码不能为空!')
      }
    },
    onRegister () {
      if (this.usernameValue && this.passwordValue) {
        this.$api.registerUser(this.usernameValue, this.passwordValue, res => {
          var result = this.$api.getJsonResult(res.data.status)
          if (result.code === this.$api.StatusCode.OK) {
            // this.$toast.showToast('注册成功!', 2000)
            this.$message({
              message: '注册成功!',
              type: 'success'
            })
            this.$router.replace('TodoList')
          } else {
            // alert(result.message)
            this.$message.error(result.message)
          }
        }, () => {
          // alert('超时')
          this.$message.error('超时')
        })
      } else {
        // alert('用户名或密码不能为空!')
        this.$message.error('用户名或密码不能为空!')
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
  left: 110px;
  width: 40px; /*设置图片显示的宽*/
  height: 40px; /*图片显示的高*/
}

.login-box .form-password .icon-password {
  background: url("../assets/ic_password.png") no-repeat;
  position: absolute;
  top: 25px;
  left: 110px;
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
