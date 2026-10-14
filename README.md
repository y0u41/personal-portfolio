# yu · 个人作品集

基于 **React + TypeScript + Vite + Tailwind CSS** 构建的个人项目展示站点，采用深色渐变主题与 Framer Motion 滚动动画。

## 技术栈

| 类别 | 选型 |
| --- | --- |
| 框架 | React 18 + TypeScript |
| 构建 | Vite 6 |
| 样式 | Tailwind CSS v4（`@tailwindcss/vite` 插件接入） |
| 动画 | Framer Motion（滚动入场 / 错峰动画） |

## 目录结构

```
Personal portfolio/
├── index.html              # 入口 HTML（含 SEO / OG / favicon）
├── vite.config.ts          # Vite + Tailwind 配置
├── tsconfig*.json          # TypeScript 配置
├── public/
│   └── favicon.svg         # 站点图标
└── src/
    ├── main.tsx            # 应用入口
    ├── App.tsx             # 页面装配（Header/Hero/About/Projects/Contact/Footer）
    ├── index.css           # 全局样式 + Tailwind v4 指令 + 深色主题变量
    ├── components/         # 6 个区块组件
    │   ├── Header.tsx
    │   ├── Hero.tsx
    │   ├── About.tsx
    │   ├── Projects.tsx
    │   ├── Contact.tsx
    │   └── Footer.tsx
    └── data/               # 全部可编辑内容集中在此
        ├── site.ts         # 个人信息（姓名/头衔/头像/简介/关于我/邮箱/GitHub/社交）
        ├── projects.ts     # 项目列表（名称/截图/描述/技术栈/类型/链接）
        └── skills.ts       # 技能与熟练度
```

## 本地启动

```bash
cd Personal portfolio
npm install      # 本环境若 esbuild 安装失败，改用 npm install --ignore-scripts
npm run dev      # 打开 http://localhost:5173
```

> Node 版本见 `.nvmrc`（当前 22）。

## 构建与预览

```bash
npm run build    # 产物输出到 dist/
npm run preview  # 本地预览构建产物
```

## 如何替换内容（重要）

所有可编辑内容都集中在 `src/data/`，**修改这些文件即可，无需改动任何组件**：

- `site.ts` —— 姓名、头衔、头像、首页简介、关于我、邮箱、GitHub、社交链接
- `projects.ts` —— 项目列表（名称 / 截图 / 描述 / 技术栈 / 类型 / 链接）
- `skills.ts` —— 技能名称与熟练度（0–100）

**头像 / 项目截图**请放入 `public/` 目录（如 `public/avatar.jpg`、`public/shots/xxx.png`），
然后在 `site.ts` / `projects.ts` 里引用 `/avatar.jpg`、`/shots/xxx.png` 这类根路径。

## 部署

暂未配置自动部署。未来可接入 Vercel / Netlify / GitHub Pages：

- **构建命令**：`npm run build`
- **输出目录**：`dist/`
- **项目根目录**：本文件夹（`项目中`）
- 若在 GitHub Pages 等需要子路径的场景，需额外配置 Vite 的 `base`。

## 注意事项

- - 根仓库 `.gitignore` 含 `data/` 规则，会误伤本项目的源码目录 `src/data`，
  已在 `Personal portfolio/.gitignore` 用 `!src/data/` 特例放行，请勿删除该规则。
