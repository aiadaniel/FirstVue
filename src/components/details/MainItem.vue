<template>
  <div class="box_1">
    <router-link :to="{path: '/blog',query: {blogid: blogitem.id, userid: blogitem.uid}}">
      <div class="cover">
        <img class="img "
             :src='blogitem.cover'/>
      </div>
      <div class="right-container">
        <div class="title_container">
          <div class="title">
            <span> {{ blogitem.title }} </span>
          </div>
          <div class="top">
            <span>置顶</span>
          </div>
          <div class="top jinghua">
            <span>精华</span>
          </div>
        </div>

        <div class="info">
          <div class="info-left">
            <div class="author">
              <span>{{ blogitem.uid }}</span>
            </div>

            <div class="time">
              <span>{{ blogitem.gmt_modified }}</span>
            </div>

            <div class="tag">
              <span>&nbsp;{{ blogitem.tag }}</span>
            </div>
          </div>

          <!-- Unnamed (Group) -->
          <div class="bottom">
            <div class="bottom-group">
              <div class="shape">
                <img class="img "
                     src="../../images/u109.png"/>
              </div>
              <div class="label">
                <span>{{ blogitem.viewCnt }}</span>
              </div>
            </div>
            <div class="bottom-group">
              <div class="shape">
                <img class="img"
                     src="../../images/u107.png"/>
              </div>
              <div class="label">
                <span>{{ blogitem.replyCnt }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'MainItem',
  props: {
    // cover: String,
    // content: String,
    // uid: String,
    // gmt_modified: String,
    // tag: String,
    // upCnt: String,
    // replyCnt: String,
    blogitem: Object
  },
  data() {
    return {
      // bloglist: this.$store.state.bloglist
    }
  }
}
</script>

<style lang="scss" scoped>
  .box_1 {
    display: flex;
    height: 80px;
    border-bottom: 1px solid rgb(223, 223, 223);

  }

  .cover img {
    float: left;
    width: 45px;
    height: 45px;
    margin-top: 18px;
    margin-left: 20px;
  }

  .right-container {
    flex: auto;

    .title_container {
      display: flex;
      min-width: 80%;
      /*align-items: center;*/
    }

    .title {
      margin-top: 18px;
      margin-left: 20px;
      max-width: 80%;
      height: 20px;
      font-size: 18px;
      text-align: left;
      color: #333;
    }

    .top {
      display: flex;
      background-color: black;
      margin-top: 20px;
      margin-left: 10px;
      vertical-align: center;
    }

    .top span {
      text-align: center;
      font-size: 12px;
      color: white;
    }

    .jinghua {
      background-color: red;
    }

    .info {
      display: flex;
      justify-content: space-between;
      margin-left: 20px;
      margin-top: 10px;

      .info-left {
        display: flex;
        margin-left: 20px;
        justify-content: flex-start;

        .author, .time, .tag {
          width: 6rem;
          height: 0.8rem;
          border: #5daf34 1px solid;
          font-size: 12px;
          text-align: left;
          color: #666666;
        }
      }

      .bottom {
        display: flex;
        justify-content: space-between;
        margin-right: 20px;
      }

      .bottom .bottom-group {
        display: flex;
        justify-content: space-between;
      }

      .bottom-group .label span {
        /*border: #5daf34 1px solid;*/
        width: auto;
        height: auto;
        color: #999999;
        font-size: 14px;
      }

      .bottom-group .shape {
        /*border: #5daf34 1px solid;*/
        width: 33px;
        height: auto;
        align-items: center;
        justify-content: space-between;
      }

    }
  }

</style>
