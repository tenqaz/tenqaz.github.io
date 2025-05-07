---
title: 初识 MCP Server
date: 2025-05-01 16:05:29
permalink: /pages/92e280/
categories:
  - AI
tags:
  - AI
author: 
  name: zhengwenfeng
  link: https://github.com/tenqaz
description: 
comment: true
feed: 
  enable: true
---
## 简介

MCP 全称为 Model Context Protocol，是一个大模型智能体与外部工具或者数据源的交互协议。也就是说，智能体可以通过该协议去调用所以支持该协议的服务，来增强智能体的能力。

在没有 MCP 时，不同的智能体都需要对不同的外部工具做单独的适配才能调用，也就是都用自己独有的协议，有 MCP 后也就是统一了外部调用协议，减轻了智能体的开发成本，也可以快速接入不同的外部服务。

![17460888546831746088854424.png](https://gcore.jsdelivr.net/gh/tenqaz/BLOG-CDN@main/17460888546831746088854424.png)

本文主要是简单认识下 MCP，并利用 MCP 来调用本地文件系统和数据库来完成案例。

## 准备工作

本文使用的是[CherryStduio](https://www.cherry-ai.com/)来作为大模型的客户端。

然后再去阿里云百炼上申请免费的大模型的额度，拿到 API KEY

最后将将 API KEY 配置到 CherryStudio 中，就可以使用大模型进行对话了。

![17465931307191746593130706.png](https://gcore.jsdelivr.net/gh/tenqaz/BLOG-CDN@main/17465931307191746593130706.png)

## 通过大模型操作本地文件

首先需要配置支持本地文件系统的 MCP Server，这里选择是的[desktop-commander](https://smithery.ai/server/@wonderwhy-er/desktop-commander)

在页面中找到服务运行的命令
![17465935776721746593577635.png](https://gcore.jsdelivr.net/gh/tenqaz/BLOG-CDN@main/17465935776721746593577635.png)

然后填写到 CherryStudio 中，点击保存即可
![17465937074921746593706853.png](https://gcore.jsdelivr.net/gh/tenqaz/BLOG-CDN@main/17465937074921746593706853.png)

进入到对话页面，选择使用的大模型，然后再选择上面添加好的desktop-commander服务，就可以进行对话了。
![17465937714921746593771327.png](https://gcore.jsdelivr.net/gh/tenqaz/BLOG-CDN@main/17465937714921746593771327.png)

在对话中，让大模型帮忙在桌面上创建一个文件，可以看到客户端分别调用了desck-commander服务中的两个方法：create_directory和write_file
![17465939094911746593909062.png](https://gcore.jsdelivr.net/gh/tenqaz/BLOG-CDN@main/17465939094911746593909062.png)

在看向桌面发现了文件hello.txt，并打开发现内容和我们对话中的内容一致。
![17465940965271746594096244.png](https://gcore.jsdelivr.net/gh/tenqaz/BLOG-CDN@main/17465940965271746594096244.png)

## 通过大模型来完成postgres的查询

首先需要提前准备好一个postgres数据库，数据如下：
![17465947805321746594780132.png](https://gcore.jsdelivr.net/gh/tenqaz/BLOG-CDN@main/17465947805321746594780132.png)

然后我们选择是的[server-postgres](https://github.com/modelcontextprotocol/servers/tree/main/src/postgres)作为我们的postgres MCP Server，找到服务运行的命令。

![17465943985321746594397638.png](https://gcore.jsdelivr.net/gh/tenqaz/BLOG-CDN@main/17465943985321746594397638.png)

将命令配置到 CherryStudio 中，点击保存即可
![17465944875321746594486638.png](https://gcore.jsdelivr.net/gh/tenqaz/BLOG-CDN@main/17465944875321746594486638.png)

在对话框中选择我们配置到server-postgres服务，然后就可以进行对话了。
![17465945375331746594537198.png](https://gcore.jsdelivr.net/gh/tenqaz/BLOG-CDN@main/17465945375331746594537198.png)

现在可以来对话中数据库的操作，让它帮我们查询表以及表中数据。
![17465948515321746594850757.png](https://gcore.jsdelivr.net/gh/tenqaz/BLOG-CDN@main/17465948515321746594850757.png)

## 总结

AI的发展趋势是越来越快，而MCP的出现，使得AI可以更加方便的与外部服务进行交互，从而实现更加智能的应用。