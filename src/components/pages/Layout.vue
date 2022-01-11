<template>
  <div class="layout">
    <el-container>
      <el-aside width="200px">
        <nav-menu></nav-menu>
      </el-aside>
      <el-main>
        <el-header>
          <h1>开卖啦后台</h1>
        </el-header>

        <div>
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import NavMenu from "../views/NavMenu.vue";
export default {
  name: "layout",
  components: {
    NavMenu,
  },
};
</script>

<style>
.layout {
  height: 100%;
}
.el-container {
  height: 100%;
}
</style>
