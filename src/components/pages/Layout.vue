<template>
  <div class="layout">
    <el-container>
      <el-aside width="200px">Aside </el-aside>
      <el-main>
        <el-heafer>
          <h1>开卖啦后台</h1>
        </el-heafer>

        <div>
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "layout",
};
</script>

<style></style>
