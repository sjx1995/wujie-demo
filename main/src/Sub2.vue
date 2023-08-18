<!--
 * @Description: 
 * @Author: Sunly
 * @Date: 2023-08-18 04:36:56
-->
<script setup>
const isPro = import.meta.env.MODE === "production";
const url = isPro ? "/sub2" : "http://192.168.10.180:5175";
</script>

<template>
  <WujieVue
    width="100%"
    height="100%"
    name="sub2"
    :url="url"
    :sync="true"
  ></WujieVue>
</template>
