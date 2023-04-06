<template>
  <div class="container">
    <div class="header">
      <div class="menu-btn" v-if="route.name==='home'" @click="showDrawerHandler">
        <el-icon size="20"><Expand/></el-icon>
      </div>
      <p class="title">广外便利贴</p>
    </div>
    <router-view class="body"></router-view>
    <nav-bar class="footer"/>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useDrawerStore } from './stores/drawer'

const route = useRoute()
const drawerStore  = useDrawerStore()

const showDrawer = ref(false)
const showDrawerHandler = ()=>{
  drawerStore.changeShowDrawer(true)
}
</script>

<style lang="scss" scoped>
.container{
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  overflow-x: hidden;

  .header{
    width: 100%;
    height: 54px;
    padding: 0 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    .menu-btn{
      position: absolute;
      top: 52%;
      left: 14px;
      transform: translateY(-50%);
    }

    .title{
      font-size: 14px;
      line-height: 14px;
      color: var(--font-color);
      letter-spacing: 0.1em;
    }
  }
  .body{
    width: 100%;
    flex-grow: 1;
  }
  .footer{
    width: 100%;
    height: 72px;
  }
}
</style>