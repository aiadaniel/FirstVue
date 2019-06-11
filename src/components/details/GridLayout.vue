<template>
  <!-- 网格 -->
  <div class="grid">
    <router-link :to="{path: 'user', query:{id: 'user.id'}}" class="member-li" v-for="user in lastRecentUsers"
                 :key="user.id" tag="li">
      <div class="item">
        <HeadIcon v-bind:useritem="user"/>
      </div>
    </router-link>
  </div>
</template>

<script>
import HeadIcon from './HeadIcon';
// import axios from 'axios'
import {getLastRecentUser} from '../../api/getData';

export default {
  name: 'GridLayout',
  components: {HeadIcon},
  data() {
    return {
      lastRecentUsers: []
    }
  },
  mounted() {
    // axios.defaults.baseURL = 'http://localhost:9191/microblog/';
    this.initData();
  },
  methods: {
    async initData() {
      const users = await getLastRecentUser();
      this.lastRecentUsers = users;
    }
  }
}
</script>

<style>
  .grid {
    margin-top: 20px;
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
  }

  .item {
    flex: 0 0 30%;
    margin-top: 10px;
    margin-left: calc((100% - 3 * 30%) / 4);
    /*float: left;*/
    /*margin-left: 10px;*/
  }
</style>
