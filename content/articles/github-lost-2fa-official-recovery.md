---
title: "GitHub 换手机后无法两步验证：恢复码、通行密钥与官方恢复路径"
description: "GitHub 换手机后无法两步验证：恢复码、通行密钥与官方恢复路径。按适用条件、操作步骤和失败分支处理，保留官方参考入口。"
date: "2026-10-05"
category: "tutorials"
updated: "2026-10-05"
author: "v2rayN 桌面指南 内容编辑"
draft: false
label: "海外工具"
---

换手机后身份验证器或旧手机不可用、无法完成 GitHub 两步验证时，适用按手头仍保留的手段走官方恢复，而不是只靠邮箱和密码，也不是指望客服关闭 2FA。官方写明：若丢失双重身份验证凭据或无法使用账户恢复方法，GitHub Support 不能恢复已启用 2FA 的账户访问；若任何恢复方法都不可用，将永久失去该账户。可依次核对手头是否还有恢复码、通行密钥、安全密钥，以及是否知道密码并能用已验证设备、SSH 密钥或 personal access token。不要向任何人出示恢复码、私钥或令牌。步骤以 [Recovering your account if you lose your 2FA credentials](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/recovering-your-account-if-you-lose-your-2fa-credentials) 与 [配置双重身份验证恢复方法](https://docs.github.com/zh/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods) 为准。

## 仍有恢复码、通行密钥或安全密钥时

恢复码是一次性代码，默认文件名是 github-recovery-codes.txt，可能在密码管理器或电脑下载目录。打开 [GitHub 官方恢复指南中的登录入口](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/recovering-your-account-if-you-lose-your-2fa-credentials)，输入用户名和密码后选择 Sign in；若已绑定社交账户，也可用社交登录。在 More options 下选择 2FA recovery code，输入一条恢复码后选择 Verify。一条码用过后不能再用。若提示 Recovery code authentication failed，说明该码无效，应换另一条，并核对是否曾经生成过新列表——生成新的一组会使此前全部失效。不知道密码时，可先申请新密码，再在重置过程中使用恢复码。

若账户已添加通行密钥，可用通行密钥自动恢复访问。通行密钥同时满足密码和 2FA 要求，不必知道密码。若当初用安全密钥配置 2FA，可用该安全密钥作为第二因素自动恢复。额外配置备用短信号码已不再支持，不要把旧手机短信当成一定可用的退路。任何步骤都不要把恢复码发给所谓代操作人员。

## 只有密码：用已验证设备、SSH 或 PAT 申请

若知道密码，但没有 2FA 凭据也没有恢复码，可向已验证邮箱发送一次性密码并开始核验，再用已验证设备、SSH 密钥或 personal access token 证明身份。该路径可能需要最多三个工作日，期间不会审查额外提交的申请；在约 3 至 5 天等待期内，一旦找回 2FA 或恢复码，仍可随时登录。

在登录页输入用户名和密码后，于 More options 选择 Begin account or email recovery，在对话框选择 I understand, get started。随后可能要验证邮箱：选择 Send one-time password，一次性密码会发到主邮箱和备用邮箱；若未指定备用，所有已验证邮箱都视为备用。在 One-time password 栏输入后选择 Verify email address，再选 Verify with this device、SSH key 或 Personal access token。即使以前用过某种方法，也可能因安全原因不可用，例如 SSH 密钥会在一段时间不活跃后从账户移除。成员将在三个工作日内审查；获批会收到完成恢复的链接，被拒的邮件会说明如何联系支持。

没有密码且账户已启用 2FA 时，必须先走密码重置：打开 [官方恢复指南中的密码重置入口](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/recovering-your-account-if-you-lose-your-2fa-credentials)，仅主邮箱和备用邮箱可申请，邮件链接须在 3 小时内点击，并检查垃圾邮件文件夹。随后仍会被要求 2FA，再按同样的账户恢复流程选择设备、SSH 或 PAT。

## 方法用尽时客服不能关 2FA

「联系客服一定能关掉 2FA」与官方不符。邮箱加密码本身不保证能恢复。若恢复选项已经用尽，可将锁定账户上的邮箱解除关联，再把该地址关联到新账户或已有账户，以保留提交历史；官方另有从锁定账户取消链接电子邮件地址的说明，本文不展开未给出的逐步界面。

常见失败：反复提交已用过或已作废的恢复码；审核等待期间连续发起新申请；在从未登录过该账户的新设备上选择 Verify with this device；使用已因不活跃被移除的 SSH 密钥；把 PAT 或私钥交给第三方。能重新进入账户后，应配置两种以上身份验证方法，并将恢复码放入密码管理器：可在 Settings 的 Password and authentication 中查看、下载、打印或复制，且不得分享。重新生成 16 条恢复码会使旧码全部失效。不为 TOTP 关闭 2FA 而只改应用设置，不会更换恢复码。事前还可为 TOTP 应用做应用自身备份，并添加用于身份验证类型的 SSH 密钥以及选择了存储库范围的 PAT；这些都是丢失手机之前就要备好的路径，不能当成换机当天的捷径。
