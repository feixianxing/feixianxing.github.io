<template>
    <div class="inner-notice-item">
        <div class="header">
            <el-avatar icon="Avatar"/>
            <p class="user-name">{{ userName }}</p>
            <div class="tag-list">
                <el-tag 
                    effect="plain" round
                    v-for="item in tagList">
                    {{ item }}
                </el-tag>
            </div>
        </div>
        <div class="body">
            {{ abstract }}
        </div>
        <div class="footer">
            <p>发布时间：{{ date }}</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    userName: {
        type: String,
        default: '用户名'
    },
    tagList: {
        type: Array,
        default: []
    },
    abstract: {
        type: String,
        default: '发布者没有设置简介，点击查看详情'
    },
    date: {
        type: String,
        default: '未知'
    }
})
</script>

<style lang="scss" scoped>
.inner-notice-item{
    width: 100%;
    margin: 14px 0;
    padding: 14px;
    border-radius: 12px;
    background-color: #fff;
    box-shadow: 0px 0px 14px var(--box-shadow);
    .header{
        display: flex;
        align-items: center;
        .user-name{
            font-size: 14px;
            font-weight: bold;
            margin-left: 14px;
            color: var(--sub-font-color);
        }
        .tag-list{
            margin-left: auto;
            display: flex;
            gap: 8px;
        }
    }
    .body{
        margin-top: 8px;
        width: 100%;
        font-size: 14px;
        line-height: 24px;
        letter-spacing: 0.08em;
        color: var(--sub-font-color);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .footer{
        margin-top: 8px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        p{
            font-size: 12px;
            color: var(--sub-font-color);
        }
    }
}
</style>