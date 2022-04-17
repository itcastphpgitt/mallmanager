<template>
  <div class="login-wrap">
    <el-form class="login-form" :label-position="labelPosition" label-width="80px" :model="formData">
      <h2>登录</h2>
      <el-form-item label="用户名">
        <el-input v-model="formData.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formData.password"></el-input>
      </el-form-item>
      <el-button class="login-btn" type="primary" @click="handle()">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      labelPosition: 'top',
      formData: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    handle () {
      this.$router.push('/home')
    }

  }
}
</script>

<style scoped>
.login-wrap {
  height: 100%;
  background-color: #324152;
  /* 弹性盒子布局 */
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-wrap .login-form {
  width: 400px;
  background-color: #fff;
  border-radius: 5px;
  padding: 30px;
}

.login-wrap .login-btn {
  width: 100%;
}
</style>
