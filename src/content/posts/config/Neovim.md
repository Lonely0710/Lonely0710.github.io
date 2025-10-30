---
title: Neovim主题配置
published: 2025-10-30T06:52:43.526Z
description: ''
abstract: 'Neovim主题配置存档。'
cover: 'https://lonelynotes-images.oss-cn-beijing.aliyuncs.com/202503162327939.png'
updated: ''
tags:
  - Linux
  - Neovim
draft: false
pin: 0
toc: true
lang: ''
abbrlink: ''
---
参考视频：[自从用了Neovim 鼠标我已经扔了]( https://www.bilibili.com/video/BV1TJCvYFE2T/?share_source=copy_web&vd_source=bb345d1b6d774cfe2e8d6229f474eb57)
![image.png|400](https://lonelynotes-images.oss-cn-beijing.aliyuncs.com/202502092344282.png)
# 1. 说明
为了便于自己有时候在终端使用 `vim` 编辑文件，将其替换为 **`neovim`** 来进行文本编辑，并且用 [LazyVim](https://www.lazyvim.org/) 主题进行一键配置。
# 2. 安装
## 2.1 Neovim & Lazyvim 下载
```shell
brew install neovim # 下载neovim
```
[LazyVim安装](https://www.lazyvim.org/installation)
```shell
git clone https://github.com/LazyVim/starter ~/.config/nvim

# Remove the `.git` folder, so you can add it to your own repo later
rm -rf ~/.config/nvim/.git
```
然后终端输入：
```shell
nvim
```
就可以看到 lazyvim 正在安装了。
> [!tip]
> 这一过程可能会提示报错/失败，按下<kbd>:</kbd>+<kbd>qa</kbd>退出，然后再输入 `nvim` 重新安装。

安装成功的界面如下图所示：

![LazyVim效果图](https://lonelynotes-images.oss-cn-beijing.aliyuncs.com/202502100001909.png)

## 2.2 插件安装
输入<kbd>:</kbd>+<kbd>LazyExtras</kbd> 打开扩展界面：
![image.png|700](https://lonelynotes-images.oss-cn-beijing.aliyuncs.com/202502100002956.png)

> [!note]
> - **Enabled Plugins:** 打开的插件；
> - **Enabled Languages:** 支持语法；
> - **Recommended Plugins:** 推荐安装的插件。

使用说明：
- 我们可以使用 <kbd>x</kbd> 键来打开/关闭插件
- <kbd>/</kbd>+ `"待搜索插件"`

## 2.3 效果展示
可以看到 `nvim` 对于各种语法都能支持**语法高亮**、**代码提示**、**代码报错**等.
![image.png](https://lonelynotes-images.oss-cn-beijing.aliyuncs.com/202502100009430.png)

## 2.4 其他配置（选做）
为了少打一个字母，我将 `vim` 直接映射为 `nvim`，以后就可以直接用 `vim` 命令打开上图所示的编辑器，具体做法就是在 `.zshrc` 中添加如下命令：
```shell
alias vim='nvim'
```
![image.png](https://lonelynotes-images.oss-cn-beijing.aliyuncs.com/202502100013292.png)
然后在终端中重新应用配置文件即可。
```shell
source ~/.zshrc
```

# 3. Neovim 语法学习
详见 [[../../ConfigGuidance/Neovim记录|Neovim记录]].