---
title: Orbstack使用
published: 2025-10-30T07:45:51.389Z
description: ''
abstract: 'Orbstack学习使用记录。'
cover: 'https://lonelynotes-images.oss-cn-beijing.aliyuncs.com/202503170029023.png'
updated: ''
tags:
  - Linux
  - Orbstack
  - Tools
draft: false
pin: 0
toc: true
lang: ''
abbrlink: ''
---
按照[参考教程](https://www.bilibili.com/video/BV1fj411k7oa/?share_source=copy_web&vd_source=bb345d1b6d774cfe2e8d6229f474eb57)目前进度：
- 安装一个 docker 
- 创建两个 Linux 虚拟机模拟网络连接。
![image.png|500](https://lonelynotes-images.oss-cn-beijing.aliyuncs.com/202503162131124.png)

## Containers
拉取的一个 `Ubuntu` 的 demo 来演示。
```shell
docker pull [Repository Name] # Repository Name
```
![Containers](https://lonelynotes-images.oss-cn-beijing.aliyuncs.com/202503162131844.png)


## Machines
```shell
orb create arch # orb create "OS"
```
创建 `arch linux` & `ubuntu` 来模拟通信。

![Machines](https://lonelynotes-images.oss-cn-beijing.aliyuncs.com/202503162132741.png)