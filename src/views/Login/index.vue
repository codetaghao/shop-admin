<template>
  <div class="login-container">
    <div class="loginBox">
      <!-- logo -->
      <div class="logo">
        <img class="logo-img" src="./logo.png" alt="">
      </div>
      <!-- 表单 -->
      <el-form ref="loginForm" class="loginForm" :model="loginForm">
        <!-- 登录 -->
        <el-form-item>
          <el-input prefix-icon="iconfont icon-user" v-model="loginForm.username"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item>
          <el-input type="password" prefix-icon="iconfont icon-3702mima" v-model="loginForm.password"></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item class="loginBtn">
          <el-button type="primary" @click="toLogin()">登录</el-button>
          <el-button type="info">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { login } from '@/api/user'
export default {
  name: 'LoginIndex',
  data () {
    return {
      // 登录表单信息
      loginForm: {
        username: 'admin',
        password: '123456'
      }
    }
  },
  methods: {
    async toLogin () {
      const { data: res } = await login(this.loginForm)
      console.log(res)
    }
  }
}
</script>
<style lang="less" scoped>
.login-container{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2b4b6b;
  height: 100%;
  // 登录框 loginBox
  .loginBox{
    position: relative;
    width: 450px;
    height: 300px;
    background-color: #fff;
    // 图标 logo
    .logo{
      position: absolute;
      left: 50%;
      width: 130px;
      height: 130px;
      border: 11px solid #fff;
      border-radius: 50%;
      box-shadow: 0 0 10px #ddd;
      transform: translate(-50%,-50%);
      background-color: #eee;
      overflow: hidden;
      .logo-img{
        width: 100%;
        height: 100%;
      }
    }
    // 登录表单 loginForm
    .loginForm{
      position: absolute;
      bottom: 0;
      width: 100%;
      padding: 0 20px;
      box-sizing: border-box;
      // 按钮
      .loginBtn{
        display: flex;
        justify-content: flex-end;
      }
    }
  }
}
</style>
