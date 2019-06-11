<template>
  <div class="hello">
    <el-container>
      <Header></Header>
      <el-container class="main-container">
        <el-main class="left-container">
          <el-row :gutter="20" class="nav_row">
            <el-col :span="10">
              <el-radio-group v-model="tabPosition" style="float: left;display: flex;">
                <el-radio-button label="top">最新帖子</el-radio-button>
                <el-radio-button label="right">精选帖子</el-radio-button>
                <el-radio-button label="bottom">我的帖子</el-radio-button>
              </el-radio-group>
            </el-col>
            <el-col :span="8">
              <el-input placeholder="请输入内容" v-model="input">
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </el-col>
            <el-col :span="6" style="float: right;">
              <el-button type="success" style="margin-bottom: 30px;">发表帖子</el-button>
            </el-col>
          </el-row>
          <el-card class="box-card">
            <div v-for="blogitem in bloglist" :key="blogitem.id">
              <MainItem v-bind:blogitem="blogitem"></MainItem>
            </div>
          </el-card>
          <slot name="blog_holder"></slot>
        </el-main>

        <el-aside width="330px">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>最新会员</span>
            </div>
            <GridLayout></GridLayout>
          </el-card>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>热门标签</span>
            </div>
            <div class="tags" v-for="tagitem in hottag" :key="tagitem">
              <el-tag>{{ tagitem }}</el-tag>
            </div>
          </el-card>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>热门推荐</span>
            </div>
            <div v-for="o in 4" :key="o" class="text recommenditem">
              {{'列表内容 ' + o }}
            </div>
          </el-card>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>友情链接</span>
            </div>
            <div v-for="o in 4" :key="o" class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-card>
        </el-aside>
      </el-container>
      <el-footer>gouride</el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from '../components/Header'
import ElContainer from '../components/Container'
import MainItem from '../components/details/MainItem'
import HeadIcon from '../components/details/HeadIcon'
import GridLayout from '../components/details/GridLayout'
import {getHotTag} from '../api/getData'

export default {
  name: 'Home',
  components: {GridLayout, ElContainer, Header, MainItem, HeadIcon},
  data() {
    return {
      tabPosition: 'top',
      input: '',
      bloglist: this.$store.state.bloglist,
      hottag: []
    }
  },
  mounted() {
    this.initData();
  },
  methods: {
    async initData() {
      Promise.all([getHotTag()]).then(res => {
        this.hottag = res[0];
      }).catch(err => {
        console.log(err)
      })
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .el-header, .el-footer {
    color: #333;
    text-align: center;
    line-height: 4.0rem;
  }

  .main-container {
    margin: 0 8%;
    color: #333;
  }

  .left-container {
    display: block;
    flex: initial;
    width: 70%;
  }

  .el-aside {
    float: left;
  }

  .el-card__body {
    padding: 0px;
  }

  .el-aside .box-card {
    margin-top: 20px;
  }

  .el-aside .box-card span {
    float: left;
  }

  .el-aside .box-card .item {

    /*float: left;*/
  }

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .tags {
    display: flex;
    flex: auto;
    margin: 20px;
  }

  .tags el-tag {
    flex: auto;
  }

  .recommenditem {
    font-size: 16px;
    alignment: left;
    text-align: left;
    margin-left: 20px;
  }
</style>
