# 贡献指南

感谢你对本项目的关注！本文档说明如何参与开发。

## 项目信息

- **项目名称**：个人作品集
- **技术栈**：React 18 + TypeScript + Vite + Tailwind CSS

## 快速开始

```
npm install
npm run dev
```

## 项目结构

```
├── src/
│   ├── components/  # 区块组件
│   ├── data/        # ✏️ 内容数据（改这里）
│   └── __tests__/   # 测试
└── public/          # 静态资源
```

## 开发流程

### 1. 创建分支

```
git checkout -b feature/your-feature-name
```

### 2. 修改代码

- 遵循现有代码风格
- 新功能需添加测试
- 修复 Bug 需说明复现步骤

### 3. 验证

```
# 测试
npm test

# 构建
npm run build
```

### 4. 提交代码

```
git add .
git commit -m "feat: 添加 XXX 功能"
git push origin feature/your-feature-name
```

**提交信息规范**：

| 前缀 | 说明 |
|------|------|
| ` ` ` ` ` `feat:` ` ` ` ` ` | 新功能 |
| ` ` ` ` ` `fix:` ` ` ` ` ` | 修复 Bug |
| ` ` ` ` ` `docs:` ` ` ` ` ` | 文档更新 |
| ` ` ` ` ` `test:` ` ` ` ` ` | 测试 |
| ` ` ` ` ` `chore:` ` ` ` ` ` | 构建/工具 |

### 5. 创建 Pull Request

- 描述改动内容和原因
- 关联相关 Issue（如有）
- 确保 CI 通过

## 注意事项

- 修改内容只需改 src/data/ 下的文件
- 新组件需添加对应测试
- 保持 Tailwind 类名一致性

## Issue 反馈

提交 Issue 时请包含：

1. **环境信息**：操作系统、相关工具版本
2. **复现步骤**：最小复现操作
3. **期望行为 vs 实际行为**
4. **错误日志**（如有）

## 行为准则

- 尊重他人，友善交流
- 聚焦技术讨论
- 欢迎新人提问
