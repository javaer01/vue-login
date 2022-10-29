<template>
    <div id="app">
        <div class="login-container">
            <router-link to="/login" tab="span">登录</router-link>
            <router-link to="/register" tab="span">注册</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
<style lang="scss" scoped >
    .login-container{
        display: flex;
        justify-content: center;
        padding-top: 10px;
    }
               
    .login-container span {
            padding: 5px 20px;
            border-radius: 5px;
            font-size: 16px;
    }
</style>