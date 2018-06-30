<template>

  <div class="login-box">

    <form class="form-username">
      <input class="username" v-bind:placeholder="username_placeholder"/>
    </form>

    <form class="form-password">
      <input class="password" v-bind:placeholder="password_placeholder"/>
    </form>

    <div>
      <button>登录</button>
    </div>

  </div>

</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username_placeholder: '请输入用户名',
      password_placeholder: '请输入密码'
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
  margin: 115px 50px 0 50px;
  width: 400px;
  height: 30px;
  text-align: center;
}

.login-box .form-password {
  margin: 10px 50px 0 50px;
  width: 400px;
  height: 30px;
  text-align: center;
}

.login-box input {
  width: 300px;
  height: 20px;
  border: 1px solid #DBDBDB;
  border-radius: 5px;
  outline: none;
}

</style>
