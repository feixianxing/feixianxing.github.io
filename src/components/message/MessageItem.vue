<template>
    <div class="inner-message-item">
        <div class="avatar">
            <el-avatar icon="Avatar"/>
        </div>
        <p class="content">{{ content }}</p>
        <p class="date">{{ date }}</p>
    </div>
</template>

<script setup>
const props = defineProps({
    content: {
        type: String,
        default: '......'
    },
    date: {
        type: String,
        default: ''
    }
})
</script>

<style lang="scss" scoped>
.inner-message-item{
    width: 100%;
    padding: 18px 14px;
    position: relative;
    display: flex;
    align-items: center;
    background-color: #fff;
    .avatar{
        width: 40px;
        height: 40px;
        margin-right: 14px;
    }
    .content{
        flex-grow: 1;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: 14px;
        color: var(--sub-font-color);
    }
    .date{
        position: absolute;
        bottom: 6px;
        right: 6px;
        font-size: 12px;
        color: var(--sub-font-color);
    }
}
</style>