<template>
  <div class="headicon">
    <img class="img "
         :src='useritem.avatar'/>

    <a class="profile">{{ useritem.id }}</a>

    <a class="uname">{{ useritem.uname }}</a>
  </div>
</template>

<script>
export default {
  name: 'HeadIcon',
  props: {
    useritem: Object
  }
}
</script>

<style scoped>
  .headicon {
    display: inline-block;
    width: 70px;
    height: 90px;
    vertical-align: middle;
  }

  .headicon img {
    width: 70px;
    height: 70px;
  }

  .profile {
    display: inline-block;
    position: relative;
    top: -30px;
    max-width: 70px;
    height: 20px;
    background-color: #80808088;
    font-size: 16px;
    vertical-align: center;
  }

  .uname {
    display: block;
    position: relative;
    top: -40px;
    width: 70px;
    max-width: 70px;
    height: 20px;
    font-size: 16px;
    text-align: center;
  }

</style>
