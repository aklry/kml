<template>
  <div class="nav-menu">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      router
      background-color="#001529"
      text-color="#999"
      unique-opened
      active-text-color="#fff"
      @open="handleOpen"
      @close="handleClose"
    >
      <div class="logo">
        <img src="../../assets/icons/kkb.png" alt="" />
        开卖啦后台
      </div>
      <el-menu-item index="/home">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="menu">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span slot="title">系统设置</span>
        </template>
        <el-menu-item index="/menu">
          <span slot="title">菜单管理</span>
        </el-menu-item>
        <el-menu-item index="/role">
          <span slot="title">角色管理</span>
        </el-menu-item>
        <el-menu-item index="/admin">
          <span slot="title">管理员管理</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
.logo {
  height: 70px;
  color: #fff;
  font-size: 20px;
  line-height: 70px;
  text-align: center;
}
.logo img {
  width: 30px;
  height: 30px;
  vertical-align: middle;
  border-radius: 5px;
}
.nav-menu {
  height: 100%;
  background-color: #001529;
}

.el-menu {
  width: 200px;
}
</style>
