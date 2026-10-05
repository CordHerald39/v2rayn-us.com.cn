---
title: "GitHub Pages 部署成功仍然 404：入口文件、发布源与项目路径检查"
description: "GitHub Pages 部署成功仍然 404：入口文件、发布源与项目路径检查。按适用条件、操作步骤、失败分支和官方参考逐项检查。"
date: "2026-10-06"
category: "tutorials"
updated: "2026-10-06"
author: "v2rayN 桌面指南 内容编辑"
draft: false
label: "跨境办公学习开发者服务"
---

Actions 已经显示成功，或 Pages 提示已部署，打开站点却仍是 404。处理方向是把工作流构建成功和 Pages 部署成功分开核对：入口必须是所选发布源顶层的 index.html（大小写不能错），发布分支与目录要和设置一致，项目路径与自定义域名记录也要对。不要用强推或删除仓库来“重置”。可对照 [排查 GitHub Pages 站点的 404 错误](https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-404-errors-for-github-pages-sites) 与 [配置 GitHub Pages 站点的发布源](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)。

## 构建成功不等于站点已经可访问

配置发布源需要仓库的管理员或维护者权限。GitHub Pages 可用于公开仓库，以及部分付费计划下的公开或私有仓库。站点在互联网上公开可访问，即使仓库是私有（在计划或组织允许时也如此），发布前应去掉敏感数据。

不需要控制构建过程时，可在推送到指定分支后发布：源分支必须已经存在，源文件夹只能是该分支的根目录 / 或 /docs；推送到源分支后，源文件夹里的变更会发布到 Pages。若要用非 Jekyll 的构建，或不想单独用一个分支存放编译结果，可编写 GitHub Actions 工作流来发布。工作流常见顺序是：默认分支有推送，或在 Actions 选项卡手动运行；检出仓库；如需则生成静态文件；上传产物；仅在默认分支推送触发时部署，拉取请求触发会跳过部署。

即使使用了其他 CI，Pages 仍会通过 GitHub Actions 工作流部署。外部 CI 常把产物提交到 gh-pages 分支并带上 .nojekyll，此时工作流可能只做部署、不再构建。要区分“构建绿了”和“已经部署到 Pages 服务器”，应查看仓库里与 Pages 相关的工作流运行。含符号链接时需要改用 Actions 发布。由 GITHUB_TOKEN 提交的更改不会触发 Pages 构建。

## 入口文件、发布目录和仓库路径

Pages 会查找 index.html 作为站点入口，该文件必须位于所选发布源的顶层。若发布源是 main 上的 /docs，入口就必须在名为 main 的分支的 /docs 目录中。若发布源是 Actions 工作流，部署的产物顶层必须包含入口文件；也可以让工作流在运行时生成入口，而不预先放进仓库。文件名区分大小写，Index.html、index.HTML 等变体都不能当入口。同时检查目录内容是否位于发布源的根位置。

排查 404 时还要求：用于发布的分支是 main 或默认分支；仓库需要由具备管理员权限的人推送过提交。公开与私有可见性对调会改变 Pages 网址，站点重建前链接会失效。私有仓库托管 Pages 时，需确认 GitHub Pro、GitHub Team 或 GitHub Enterprise Cloud 订阅仍有效；续订后会自动重新部署，也可改为公开仓库以继续免费使用 Pages。这些都不等于删除仓库，也不要用强推代替一次由管理员、且已验证邮箱的人向发布源推送。

## 发布源设置、域名与失败分支

在 GitHub 打开站点所在仓库，点仓库名下方的 Settings；看不到该选项卡时，用下拉菜单再点 Settings。在侧边栏 Code, planning, and automation 中点 Pages。在 Build and deployment 的 Source 下，若选 Deploy from a branch，再用分支下拉菜单选择发布源，必要时用文件夹下拉菜单选择 / 或 /docs，然后点 Save。若选 GitHub Actions，已有发布工作流时可跳过模板，否则选用建议模板。Pages 设置不会绑定某一个工作流，但会链接到最近一次部署该站点的运行。

若曾把某分支的 docs 设为发布源，后又从该分支删掉 /docs，站点不会构建。分支发布没有自动出站时，确认具备管理员权限且邮箱已验证的人已向发布源推送。出错时可查看工作流运行并重新运行，而不是强推或删库。

使用自定义域名时，CNAME 应始终指向用户名.github.io 或组织名.github.io，不要带上仓库名。仓库中的 CNAME 文件不会自动添加或移除自定义域名，必须通过仓库设置或 API 配置。能打开首页但站内链接大量失效，常见于以前没有自定义域名、或正在从自定义域名退回；仅改路由不会触发重建，应让站点在增删自定义域名时自动重建。私有站点出现 404 时可尝试清除浏览器缓存。先查看 GitHub 状态页是否有故障，并核对 DNS。仍是 404 时，可到 GitHub Community 的 Pages 分类发起讨论。
