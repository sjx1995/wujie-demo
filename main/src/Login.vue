<!--
 * @Description: 
 * @Author: Sunly
 * @Date: 2023-08-18 03:02:25
-->
<script setup>
import { useRouter } from "vue-router";
import { loginHandler } from "./utils";
import { ref, reactive } from "vue";
const router = useRouter();

const handleLogin = async () => {
  if (isLogging.value) return;
  isLogging.value = true;
  const {
    data: { token },
  } = await loginHandler();
  localStorage.setItem("token", token);
  router.push("/home");
  isLogging.value = false;
};

const loginForm = reactive({
  username: "root",
  password: "password",
});
const isLogging = ref(false);
</script>

<template>
  <!-- 登录的form -->
  <div id="login-container">
    <div class="login-input">
      <input placeholder="请输入用户名" v-model="loginForm.username" />
    </div>
    <div class="login-input">
      <input
        placeholder="请输入密码"
        v-model="loginForm.password"
        type="password"
      />
    </div>
    <button @click="handleLogin">{{ isLogging ? "登陆中" : "登录" }}</button>
  </div>
</template>

<style scoped>
#login-container {
  width: 400px;
  padding: 16px 0 36px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #ccc;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
div.login-input {
  width: 80%;
  margin: 16px auto;
}
div.login-input input {
  width: 100%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 16px auto;
  padding: 0 8px;
  box-sizing: border-box;
}
div#login-container button {
  width: 80%;
  margin: 16px auto;
}
</style>
