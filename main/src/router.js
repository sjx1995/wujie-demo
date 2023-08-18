/*
 * @Description:
 * @Author: Sunly
 * @Date: 2023-08-18 03:02:03
 */
import { createRouter, createWebHashHistory } from "vue-router";
import sub1comp from "./Sub1.vue";
import sub2comp from "./Sub2.vue";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    meta: { title: "登录" },
    component: () => import("./Login.vue"),
  },
  {
    path: "/home",
    name: "Home",
    redirect: "/sub1",
    meta: { title: "主页" },
    component: () => import("./Home.vue"),
    children: [
      {
        path: "/sub1/:pathMatch(.*)*",
        name: "Sub1",
        meta: { title: "sub1" },
        component: sub1comp,
      },
      {
        path: "/sub2/:pathMatch(.*)*",
        name: "Sub2",
        meta: { title: "sub2" },
        component: sub2comp,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   start();
//   const isLogin = sessionStorage.getItem("cloud-token");
//   if (to.name !== "Login" && !isLogin) {
//     next({ name: "Login" });
//   } else if (to.name === "Login" && isLogin) {
//     if (from.fullPath === "/login" || from.fullPath === "/") {
//       goVisitedPage(to, next);
//     } else {
//       next(false);
//     }
//   } else if (to.name === "404" || to.name === "403") {
//     next();
//   } else {
//     goVisitedPage(to, next);
//   }
// });

// function goVisitedPage(to: RouteLocationNormalized, next: NavigationGuardNext) {
//   const { permission } = to.meta;
//   if (permission) {
//     const sessionPer = sessionStorage.getItem("cloud-permissions");
//     let curPermissions: string[] = [];
//     if (sessionPer) {
//       curPermissions = JSON.parse(sessionPer);
//       if (curPermissions.some((p) => p === permission)) {
//         return next();
//       }
//     }
//     next({ name: "403" });
//   } else {
//     next();
//   }
// }

// router.afterEach((guard) => {
//   if (guard.meta.title) {
//     document.title = `${guard.meta.title} - ${TITLE}`;
//   }
//   done();
// });

export { router as default };
