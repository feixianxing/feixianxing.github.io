<template>
    <div class="inner-message-page">
        <div class="message-list">
            <message-item
                v-for="item in messageList"
                :content="item.content"
                :date="item.date"
            />
        </div>
    </div>
</template>

<script setup>
import messageList from '../test/messageList'
</script>

<style lang="scss" scoped>
.inner-message-page{
    border-top: 1.4px solid var(--main-color);
    background-color: #f9f9f9;
    .message-list{
        display: flex;
        flex-direction: column;
        width: 100%;
    }
}
</style>