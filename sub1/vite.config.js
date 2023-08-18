/*
 * @Description:
 * @Author: Sunly
 * @Date: 2023-08-18 02:30:54
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/sub1/",
  plugins: [vue()],
});
