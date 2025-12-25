---
title: Linux Server | Config Archive
published: 2025-10-30T07:48:45.398Z
description: ''
abstract: '服务器 ssh 配置'
cover: 'https://lonelynotes-images.oss-cn-beijing.aliyuncs.com/202503170005913.png'
updated: 2025-12-26T02:56:03.666Z
tags:
  - Archive
  - Linux
  - Server
  - Tools
draft: false
pin: 0
toc: true
lang: zh
abbrlink: 'linux-server'
---
# 1. 基本信息
:::note[info]
花 **68 R** 买了一年的服务器，虽然我不知道可以干什么。

![服务器配置](https://lonelynotes-images.oss-cn-beijing.aliyuncs.com/202503162135924.png)
- **腾讯云：** `2C 2G`  `4M 带宽`  300G/月 
:::

# 2. 配置免密登陆
参考视频：[10分钟手把手教你通过SSH，使用密钥/账号远程登录Linux服务器（Windows/macOS）]( https://www.bilibili.com/video/BV1cL411w7RB/?share_source=copy_web&vd_source=bb345d1b6d774cfe2e8d6229f474eb57)
## 2.1 账号登录
### 2.1.1 设置密码
如果是云服务器，在还没有登录前，需要先重置一次密码。比如：腾讯云服务器控制台内：
![image.png](https://lonelynotes-images.oss-cn-beijing.aliyuncs.com/202502092322468.png)
>  用云服务器厂商提供的接口重置自己服务器密码后，服务器密码后会自动重启，这样密码就设置好了。
### 2.1.2 开放远程登录
> [!tip]
>  若使用腾讯云的控制台，进行 `重置密码`，那么重置后，腾讯云会帮你配置好 SSH（OpenSSH）远程登录，无需进行本次操作。

如果是使用虚拟机,则按照下列步骤：
编辑文件 `/etc/ssh/sshd_config`:
```shell
# 当前为root用户，非root用户请添加sudo  
vim /etc/ssh/sshd_config

PasswordAuthentication=yes # 添加这一行
```
重启 OpenSSH，使其生效：
```shell
# 当前为root用户  
systemctl restart sshd
```
到此，SSH 账号登录的服务器端，服务器（被连接端）配置完成。接下来，我们就可以使用客户端连接了。
### 2.1.3 连接 Linux
终端输入：
```shell
ssh root@服务器ip
```
:::note[参数解读]
- `@` 前参数为登录的用户；
- `@` 后参数为主机/服务器 ip.
:::

首次登陆需要输入密码，之后便可等待连接完成。

## 2.2 密钥登录
为实现密钥登录，我们只需要**客户端生成私钥和公钥**后，将**公钥放置到服务器**上，在使用 SSH 连接时，会**自动进行匹配验证，并完成登录**。
### 2.2.1 客户端生成密钥
```shell
ssh-keygen -t rsa -C "youremail@domain.com"
```
其中，`youremail@domain.com` 为你的电子邮箱，不需要制定邮箱可以简化为：
```shell
ssh-keygen
```
:::note[参数解读]
生成过程中会遇到以下参数：
- `Enter file in which to save the key`：密钥存放地址，默认为当前用户目录下的.ssh 文件夹下
- `Enter passphrase`：保护私钥的密码，一般留空，直接和上面一样回车即可。
- `Enter same passphrase again`：确认私钥密码
:::

生成后在  `~/.ssh`  可看到我们生成的密钥：
![image.png](https://lonelynotes-images.oss-cn-beijing.aliyuncs.com/202502092326318.png)
其中：
- `id_rsa`：生成的私钥，保留在电脑即可。
- `id_rsa.pub`：生成的公钥，打开后，复制内容，后文部署到服务器上。
![image.png](https://lonelynotes-images.oss-cn-beijing.aliyuncs.com/202503162138026.png)

### 2.2.2 服务端部署公钥
两种方式：通用方法&服务器一键部署。
#### 通用方法
进入服务器，进入 `.ssh` 文件夹内（**如果没有就使用mkdir命令创建**）,并使用vim创建并编辑 `authorized_keys` 文件：
```shell
cd .ssh  
vim authorized_keys
```
将生成的公钥粘贴进当前文件,保存并退出即可。
![image.png](https://lonelynotes-images.oss-cn-beijing.aliyuncs.com/202503162138651.png)

#### 服务器一键部署
![image.png](https://lonelynotes-images.oss-cn-beijing.aliyuncs.com/202503162141629.png)
到此，SSH 密钥登录的服务器端，配置完成。接下来，我们就可以使用客户端连接了。
> [!tip]
>
> `authorized_keys` 内，可以添加多个客户端的公钥，一行一个，或者换行隔开即可。

### 2.2.3 客户端远程连接
此时可以直接远程连接服务器，并且不用手动输入密码。

![连接成功图](https://lonelynotes-images.oss-cn-beijing.aliyuncs.com/202503162140788.png)