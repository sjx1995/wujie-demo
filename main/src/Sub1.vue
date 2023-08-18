<!--
 * @Description: 
 * @Author: Sunly
 * @Date: 2023-08-18 04:36:24
-->
<script setup>
const isPro = import.meta.env.MODE === "production";
const url = isPro ? "/sub1" : "http://192.168.10.180:5174";
</script>

<template>
  <WujieVue
    width="100%"
    height="100%"
    name="sub1"
    :url="url"
    :sync="true"
    :alive="true"
  ></WujieVue>
</template>
