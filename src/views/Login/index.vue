<template>
  <div class="login-container">
    <div class="loginBox">
      <!-- logo -->
      <div class="logo">
        <img class="logo-img" src="./logo.png" alt="">
      </div>
      <!-- 表单 -->
      <!-- 通过 rules 定义校验规则-->
      <el-form ref="loginFormRef" :rules="loginFormRules" class="loginForm" :model="loginForm">
        <!-- 登录 -->
        <el-form-item prop="username">
          <el-input
            prefix-icon="iconfont icon-user"
            v-model.trim="loginForm.username"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            type="password"
            prefix-icon="iconfont icon-3702mima"
            v-model.trim="loginForm.password"
          ></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item class="loginBtn">
          <el-button type="primary" @click="toLogin()" :loading="isLogin">登录</el-button>
          <el-button type="info" @click="resetForm()">重置</el-button>
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
    // 自定义验证规则
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else if (!/^[\S]{6,16}$/.test(value)) {
        callback(new Error('长度在6到16个字符'))
      } else {
        callback()
      }
    }
    return {
      // 登录表单信息
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      // 表单验证规则
      loginFormRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          // 使用属性验证
          // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          // 使用正则验证
          { pattern: /^[\S]{3,10}$/, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { validator: validatePass, trigger: 'blur' }
        ]
      },
      // loading 开关
      isLogin: false
    }
  },
  methods: {
    toLogin () {
      this.$refs.loginFormRef.validate(async valid => {
        // 验证失败
        if (!valid) return
        // 开启 loading
        this.isLogin = true
        // 验证成功发出请求
        const { data: res } = await login(this.loginForm)
        // 请求完成关闭 loading
        this.isLogin = false
        // 登录失败
        if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
        // 登录成功
        this.$message.success(res.meta.msg)
        // 登录成功 保存 token
        window.sessionStorage.setItem('token', res.data.token)
        // 跳转 home 页面
        this.$router.push('/home')
      })
    },
    resetForm () {
      // resetFields() 对表单项进行重置，将其值重置为初始值并移除校验结果
      this.$refs.loginFormRef.resetFields()
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
