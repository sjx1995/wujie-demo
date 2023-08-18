# wujie-demo

🚧 [无界微前端](https://github.com/Tencent/wujie)框架的demo 

A wujie micro-frontends demo

## 项目介绍

基于[无界微前端](https://github.com/Tencent/wujie)框架实现的Demo，项目目录：

```
├── main  # 主应用
├── sub1  # 子应用1
└── sub2  # 子应用2
```

主应用使用和子应用都使用Vue框架，主应用提供登录功能

主应用通过Hash路由切换子应用，`/sub1/*`切换到子应用1，`/sub2/*`切换到子应用2，具体的路由由子应用自己管理

## 项目运行

```bash
# 安装依赖
pnpm i

# 启动主应用
pnpm run main:dev

# 启动子应用1
pnpm run sub1:dev

# 启动子应用2
pnpm run sub2:dev

# 打包应用
pnpm run main:build
```

