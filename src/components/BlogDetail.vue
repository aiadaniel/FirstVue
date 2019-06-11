<template>
  <div class="hello">
    <el-container>
      <Header></Header>
      <el-container class="main-container">
        <el-container class="main">
          <div class="title-header">
            <h1>{{blogcontent.title}}</h1>
            <el-row>
              <el-col :span="8">
                <span>{{blogcontent.tags}}</span>
                <div class="top">
                  <span>置顶</span>
                </div>
                <div class="top jinghua">
                  <span>精华</span>
                </div>
              </el-col>
              <el-col :span="8"></el-col>
              <el-col :span="8">
                <div class="bottom">
                  <div class="bottom-group">
                    <div class="shape">
                      <img class="img "
                           src="../images/u109.png"/>
                    </div>
                    <div class="label">
                      <span>{{ blogcontent.upCnt }}</span>
                    </div>
                  </div>
                  <div class="bottom-group">
                    <div class="shape">
                      <img class="img"
                           src="../images/u107.png"/>
                    </div>
                    <div class="label">
                      <span>{{ blogcontent.replyCnt }}</span>
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="article">
            <div class="userinfo">
              <router-link :to="{path: 'user',query: 'userid'}">
                <div class="cover">
                  <img class="img "
                       :src='blogcontent.cover'/>
                </div>
                <div class="right-container">
                  <div class="title_container">
                    <div class="title">
                      <span> {{ blogcontent.title }} </span>
                    </div>
                    <div class="time">
                      <span>{{ blogcontent.gmt_create }}</span>
                    </div>
                  </div>
                  <div class="info">
                    <div class="vip">
                      <span>{{ userinfo.uid }}</span>
                    </div>
                    <div class="point">
                      <span>&nbsp;{{ userinfo.point }}</span>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>

            <div class="realcontent">
              {{blogcontent.content}}
            </div>

            <div class="comment-container">

            </div>
          </div>
        </el-container>

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
import Header from './Header'
import ElContainer from './Container'
import MainItem from './details/MainItem'
import HeadIcon from './details/HeadIcon'
import GridLayout from './details/GridLayout';
import axios from 'axios';

export default {
  name: 'BlogDetail',
  components: {GridLayout, ElContainer, Header, MainItem, HeadIcon},
  props: ['blogid', 'userid'],
  data() {
    return {
      tabPosition: 'top',
      input: '',
      userinfo: '',
      hottag: [],
      blogcontent: '',
      comments: []
    }
  },
  mounted() {
    console.log('route to blogdetail!!!!!!')
    // this.userid = this.$route.query.userid;
    // this.blogid = this.$route.query.blogid;
    this.$store.commit('updateUserId', [this.$route.query.userid, this.$route.query.blogid])
    // this.GetHotTag();
    this.GetUserInfo(this.userid);
    this.GetBlogContent(this.blogid);
    this.GetBlogReply(this.blogid);
  },
  methods: {
    updateUserId(state, data) {
      this.userid = data[0];
      this.blogid = data[1];
    },
    GetHotTag() {
      axios.get('/tag/hot').then(res => {
        if (res.status == '200') {//eslint-disable-line
          this.hottag = [...res.data]
        }
      })
    },
    GetUserInfo(userid) {
      axios.get('/user/info?uid=' + userid).then(res => {
        this.userinfo = res.data;
      })
    },
    GetBlogContent(id) {
      axios.get('/blog/detail?blogid=' + id).then(res => {
        this.blogcontent = res.data;
      })
    },
    GetBlogReply(id) {
      axios.get('/comment/list?blogid=' + id).then(res => {
        if (res.status == '200') {//eslint-disable-line
          this.comments = [...res.data]
        }
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
