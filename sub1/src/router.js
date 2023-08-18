/*
 * @Description:
 * @Author: Sunly
 * @Date: 2023-08-18 06:23:40
 */
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./Home.vue";
import Foo from "./Foo.vue";
import Bar from "./Bar.vue";

const routes = [
  {
    path: "/",
    redirect: "/sub1",
  },
  {
    path: "/sub1",
    redirect: "/sub1/home",
    children: [
      {
        path: "home",
        name: "Home",
        component: Home,
      },
      {
        path: "foo",
        name: "Foo",
        component: Foo,
      },
      {
        path: "bar",
        name: "Bar",
        component: Bar,
      },
    ],
  },
  // {
  //   path: "/home",
  //   name: "Home",
  //   redirect: "/sub1",
  //   meta: { title: "主页" },
  //   component: () => import("./Home.vue"),
  //   children: [
  //     {
  //       path: "/sub1/:pathMatch(.*)*",
  //       name: "Sub1",
  //       meta: { title: "sub1" },
  //       component: sub1comp,
  //     },
  //     {
  //       path: "/sub2/:pathMatch(.*)*",
  //       name: "Sub2",
  //       meta: { title: "sub2" },
  //       component: sub2comp,
  //     },
  //   ],
  // },
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
