<template>
    <div class="inner-my-page">
        <div class="user">
            <div class="avatar">
                <el-avatar :size="72"></el-avatar>
            </div>
            <div class="content">
                <p class="user-name">用户名</p>
                <el-button round class="edit-btn" size="small">
                    <el-icon :size="16"><Edit/></el-icon>
                    编辑用户信息
                </el-button>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.inner-my-page{
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
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 140px;
        background-color: var(--main-color);
        border-radius: 0 0 20px 20px;
        z-index: 1;
    }
    .user{
        width: 100%;
        height: 140px;
        position: relative;
        z-index: 2;
        display: flex;
        align-items: center;
        background-color: #fff;
        border-radius: 20px;
        box-shadow: 0px 0px 16px var(--box-shadow);
        padding: 16px;
        .avatar{
            width: 72px;
            height: 72px;
            margin-right: 20px;
        }
        .content{
            font-size: 16px;
            letter-spacing: 0.1em;
            color: var(--font-color);
            .edit-btn{
                margin-top: 8px;
            }
        }
    }
}
</style>