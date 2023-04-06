<template>
    <div class="inner-nav-bar">
        <div 
            class="nav-item"
            :class="{'active': item.active}" 
            v-for="item in navList" 
            @click="changePage(item.routeName)">
            <img class="icon" :src="item.active ? item.activeIcon : item.icon">
            <p class="label">
                {{ item.label }}
            </p>
        </div>
    </div>
</template>

<script setup>
import { reactive, watch } from 'vue'
import {useRoute, useRouter} from 'vue-router'

const route = useRoute()
const router = useRouter()

watch(()=>route.name, (routeName)=>{
    navList.forEach(item => {
        item.active = false
        if(item.routeName === routeName){
            item.active = true
        }
    })
})

const navList = reactive([
    {
        label: '首页',
        active: false,
        routeName: 'home',
        icon: new URL('../assets/icons/home.png', import.meta.url).href,
        activeIcon: new URL('../assets/icons/home-active.png', import.meta.url).href
    },
    {
        label: '消息',
        active: false,
        routeName: 'message',
        icon: new URL('../assets/icons/message.png', import.meta.url).href,
        activeIcon: new URL('../assets/icons/message-active.png', import.meta.url).href
    },
    {
        label: '我的',
        active: false,
        routeName: 'my',
        icon: new URL('../assets/icons/my.png', import.meta.url).href,
        activeIcon: new URL('../assets/icons/my-active.png', import.meta.url).href
    },
])

const changePage = (routeName)=>{
    router.push({
        name: routeName
    })
}
</script>

<style lang="scss" scoped>
.inner-nav-bar{
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-top: 1px solid #d1d1d1;
    
    .nav-item{
        width: 30%;
        min-width: 48px;
        max-width: 64px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .icon{
            width: 20px;
            height: 20px;
            object-fit: contain;
            margin-bottom: 4px;
        }
        .label{
            font-size: 12px;
            letter-spacing: 0.2em;
            color: #222222;
        }
        &.active{
            .label{
                color: var(--main-color);
            }
            filter: drop-shadow(1px 1px 4px var(--drop-shadow));
        }
    }
}
</style>