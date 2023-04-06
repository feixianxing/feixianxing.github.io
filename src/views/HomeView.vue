<template>
<el-scrollbar height="100%">
    <div class="home-page-container">
        <!-- 顶部通知卡片 -->
        <div class="card">
            <div class="head">
                <el-button 
                :color="headCard===0?'#004694':'#ffffff'" 
                size="small" 
                round 
                @click="changeHeadCard(0)">
                    最新通知
                </el-button>
                <el-button 
                    :color="headCard===1?'#004694':'#ffffff'" 
                    size="small" 
                    round
                    @click="changeHeadCard(1)">
                    热门信息
                </el-button>
            </div>
            <div class="body">
                <div class="title" v-show="headCard===0">
                    <span>最</span>
                    <span>新</span>
                    <span>通</span>
                    <span>知</span>
                </div>
                <div class="title" v-show="headCard===1">
                    <span>热</span>
                    <span>门</span>
                    <span>信</span>
                    <span>息</span>
                </div>
                <div class="content">
                    <el-skeleton/>
                </div>
            </div>
        </div>
        <!-- 侧边弹框 -->
        <el-drawer
            direction="ltr" 
            v-model="showDrawer" 
            size="40%" 
            :show-close="false"
            :before-close="beforeCloseDrawer">
            <div class="home-page-drawer">
                <p class="title">通知分类</p>
                <div class="type-list">
                    <p 
                        class="type-item"
                        v-for="item in typeList">
                        {{ item }}
                    </p>
                </div>
            </div>
        </el-drawer>
        <!-- 正文内容 -->
        <div class="main">
            <notice-item 
                v-for="item in noticeList"
                :userName="item.userName"
                :tagList="item.tagList"
                :abstract="item.abstract"
                :date="item.date"
            />
        </div>
    </div>
</el-scrollbar>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'
import { useDrawerStore } from '../stores/drawer'
// 测试数据
import noticeList from '../test/noticeList'

const drawerStore = useDrawerStore()

// 0: 最新通知， 1: 热门信息
const headCard = ref(0)
const changeHeadCard = (status)=>{
    headCard.value = status
}

// 通知分类 侧边弹框
const showDrawer = ref(false)
watch(()=>drawerStore.$state.showDrawer, (newValue)=>{
    showDrawer.value = newValue
})
const beforeCloseDrawer = ()=>{
    drawerStore.changeShowDrawer(false)
}
const typeList = reactive(['校级通知','院级通知','思政学时','劳动学时'])

</script>

<style lang="scss">
.home-page-container{
    width: 100%;
    height: 100%;
    position: relative;
    background-color: #fff;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &::before{
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: -1px;
        width: 100%;
        height: 180px;
        z-index: 1;
        background-color: var(--main-color);
        border-radius: 0px 0px 84px 84px;
    }

    .card{
        width: 100%;
        background-color: #fff;
        border-radius: 14px;
        padding: 14px;
        position: relative;
        z-index: 2;
        box-shadow: 0px 0px 14px var(--box-shadow);
        .body{
            display: flex;
            margin: 8px 0;
            .title{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;
                padding: 0px 12px 4px 0;
                border-right: 1px solid var(--border-color);
                span{
                    font-size: 20px;
                    font-weight: 200;
                    color: var(--font-color);
                }
            }
            .content{
                flex-grow: 1;
                padding: 4px 0px 4px 12px;
            }
        }
    }

    .main{
        width: 100%;
        margin-top: 14px;
    }
}

.home-page-drawer{
    display: flex;
    flex-direction: column;
    .title{
        font-size: 14px;
        font-weight: bold;
        letter-spacing: 0.1em;
    }
    .type-list{
        margin-top: 14px;
        .type-item{
            padding: 14px 4px;
            font-size: 14px;
        }
    }
}
</style>