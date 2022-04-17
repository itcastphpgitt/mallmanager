<template>
  <div class="bigbox">
    <el-container class="container">
      <el-header class="header">
        <el-row>
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <img src="../../assets/1111.jpg" alt="图片无法显示QAQ" />
            </div>
            <div class="grid-content bg-purple"></div>
          </el-col>
          <el-col :span="18" class="middle">
            <h3 class="title">电商后台管理系统</h3>
            <div class="grid-content bg-purple-light"></div>
          </el-col>
          <el-col :span="2">
            <div class="grid-content bg-purple login">
              <a href="#" class="loginout">退出</a>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside class="aside" width="200px">
          <!-- 侧边栏导航 -->

          <el-menu :unique-opened="true" :router="true">
            <!-- 开启路由模式为true -->
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>用户管理</span>
              </template>
              <el-menu-item-group>
                <!-- <template slot="title">分组一</template> -->
                <el-menu-item index="users">
                  <i class="el-icon-menu"></i>
                  <span>用户列表</span>
                </el-menu-item>
                <el-menu-item index="1-2">
                  <i class="el-icon-menu"></i>
                  <span>权限列表</span>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>用户管理</span>
              </template>
              <el-menu-item-group>
                <!-- <template slot="title">分组一</template> -->
                <el-menu-item index="1-1">
                  <i class="el-icon-menu"></i>
                  <span>用户列表</span>
                </el-menu-item>
                <el-menu-item index="1-2">
                  <i class="el-icon-menu"></i>
                  <span>权限列表</span>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>权限管理</span>
              </template>
              <el-menu-item-group>
                <!-- <template slot="title">分组一</template> -->
                <el-menu-item index="1-1">
                  <i class="el-icon-menu"></i>
                  <span>角色列表</span>
                </el-menu-item>
                <el-menu-item index="1-2">
                  <i class="el-icon-menu"></i>
                  <span>权限列表</span>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>商品管理</span>
              </template>
              <el-menu-item-group>
                <!-- <template slot="title">分组一</template> -->
                <el-menu-item index="1-1">
                  <i class="el-icon-menu"></i>
                  <span>商品列表</span>
                </el-menu-item>
                <el-menu-item index="1-2">
                  <i class="el-icon-menu"></i>
                  <span>分类参数</span>
                </el-menu-item>
                <el-menu-item index="1-2">
                  <i class="el-icon-menu"></i>
                  <span>商品分类</span>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>订单管理</span>
              </template>
              <el-menu-item-group>
                <!-- <template slot="title">分组一</template> -->
                <el-menu-item index="1-1">
                  <i class="el-icon-menu"></i>
                  <span>用户列表</span>
                </el-menu-item>
                <el-menu-item index="1-2">
                  <i class="el-icon-menu"></i>
                  <span>权限列表</span>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>数据统计</span>
              </template>
              <el-menu-item-group>
                <!-- <template slot="title">分组一</template> -->
                <el-menu-item index="1-1">
                  <i class="el-icon-menu"></i>
                  <span>用户列表</span>
                </el-menu-item>
                <el-menu-item index="1-2">
                  <i class="el-icon-menu"></i>
                  <span>权限列表</span>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>

          </el-menu>
        </el-aside>
        <el-main class="main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>
.bigbox {
  height: 100vh;
}

.container {
  height: 100%;
}

.header {
  background-color: #B3C0D1;
}

/* 头部样式 */
.middle {
  text-align: center;

}


.aside {
  background-color: #ffffff;

}

.main {
  background-color: #E9EEF3;

}

.login {}

.loginout {
  text-decoration: none;

}
</style>
