<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <img class="logo" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558414666581&di=77c149050968d9e3ffb42a301a9a44e8&imgtype=0&src=http%3A%2F%2Fupload-images.jianshu.io%2Fupload_images%2F9370830-d3e332c33dcec5f8.png%3FimageMogr2%2Fauto-orient%2Fstrip%257CimageView2%2F1%2Fw%2F300%2Fh%2F240">
      <el-menu-item index="1">网站首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">新闻资讯</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">个人设置</a></el-menu-item>
    </el-menu>

  </div>
</template>

<script>
export default {
  name: 'Header',
  componentName: 'Header',
  props: {
    height: {
      type: String,
      default: '60px'
    }
  },
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
  // install: function (Vue) {
  //   Vue.component(this.name, this)
  // }
};
</script>

<style lang="scss">

  .el-menu {
    margin-bottom: 20px;
  }

  .logo {
    width: auto;
    height: 40px;
    vertical-align: center;
    float: left;
    margin-left: 10%;
    margin-right: 60px;
    padding: 10px 0;
  }
</style>
