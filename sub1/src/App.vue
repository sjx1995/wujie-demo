<!--
 * @Description: 
 * @Author: Sunly
 * @Date: 2023-08-18 02:30:54
-->
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<template>
  <div id="sub1-main">
    <div id="sub1-menu">
      <h4>Sub1 Menu</h4>
      <button @click="() => router.push('/sub1/home')">Home</button>
      <button @click="() => router.push('/sub1/bar')">Get Token</button>
      <button @click="() => router.push('/sub1/foo')">Foo</button>
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<style scoped>
#sub1-main {
  display: flex;
}
#sub1-menu {
  width: 200px;
  background-color: #ddd;
  margin-right: 16px;
}
#sub1-menu button {
  margin: 8px auto;
  width: 80%;
  height: 50px;
  cursor: pointer;
}
</style>
