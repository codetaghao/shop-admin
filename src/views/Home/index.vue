<template>
  <div class="home-container">
    <el-container>
      <!-- 头部区域 -->
      <el-header>
        <div class="logo">
          <img class="logo-avg" src="./heima.png" alt="">
          <span>电商后台管理系统</span>
        </div>
        <el-button type="info" @click="logout">退出</el-button>
      </el-header>
      <el-container>
        <!-- 侧边栏 -->
        <el-aside width="200px">
            <el-menu
              background-color="#333744"
              text-color="#fff"
              active-text-color="#409EFF"
              class="menuList"
            >
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>导航一</span>
                </template>
                <el-menu-item index="1-1">
                  <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>选项1</span>
                  </template>
                </el-menu-item>
              </el-submenu>
            </el-menu>
        </el-aside>
        <!-- 内容区域 -->
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'HomeIndex',
  data () {
    return {
      menuList: []
    }
  },
  created () {},
  methods: {
    logout () {
      this.$confirm('是否确定退出登录?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 清除 token 信息
        window.sessionStorage.removeItem('token')
        // 跳转登录页面
        this.$router.push('/login')
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消退出'
        })
      })
    }
  }
}
</script>

<style lang="less" scoped>
.home-container{
  height: 100%;
  &>.el-container{
    height: 100%;
  }
  // 头部区域
  .el-header{
    background-color: #373d41;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 0;
    .logo{
      display: flex;
      align-items: center;
      color: #fff;
      font-size: 22px;
      .logo-avg{
        margin-right: 10px;
      }
    }
  }
  // 侧边栏
  .el-aside{
    background-color: #333744;
    // 结局 el-menu 多出 1px bor
    .menuList{
      width: 100%;
      .el-submenu{
        span{
          font-size: 12px;
        }
      }
    }
  }
  // 内容
  .el-main{
    background-color: #eaedf1;
  }
}
</style>
