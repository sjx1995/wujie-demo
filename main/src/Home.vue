<!--
 * @Description: 框架
 * @Author: Sunly
 * @Date: 2023-08-18 03:11:02
-->
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<template>
  <div id="main-menu">
    <button @click="() => router.push('/sub1/home')">Sub 1</button>
    <button @click="() => router.push('/sub2')">Sub 2</button>
    <button @click="() => router.push('/login')">LOG OUT</button>
  </div>
  <div id="main-view">
    <router-view />
  </div>
</template>

<style scoped>
#main-menu {
  background-color: #ccc;
  height: 74px;
}
#main-menu button {
  margin: 16px 8px;
}
#main-view {
  height: calc(100vh - 74px);
  overflow: hidden;
}
</style>
