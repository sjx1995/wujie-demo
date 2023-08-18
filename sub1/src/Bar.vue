<!--
 * @Description: 
 * @Author: Sunly
 * @Date: 2023-08-18 06:36:41
-->

<script setup>
const token = localStorage.getItem("token");
</script>

<template>
  <h1>Sub-app get main-app token</h1>
  <h1>{{ token }}</h1>
</template>
