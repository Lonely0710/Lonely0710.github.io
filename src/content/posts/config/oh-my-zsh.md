---
title: Oh-my-zsh配置
published: 2025-10-30T06:36:36.878Z
description: ''
abstract: 'Oh-my-zsh配置存档。'
cover: 'https://lonelynotes-images.oss-cn-beijing.aliyuncs.com/202502092217168.png'
updated: ''
tags:
  - oh-my-zsh
  - Linux
draft: false
pin: 0
toc: true
lang: ''
abbrlink: ''
---
# 1 说明
此前在 `macOS` 上的 `iTerm2` 就一直用的 **oh-my-zsh** + [powerlevel10k](https://github.com/romkatv/powerlevel10k).

这里记录一下在 `linux` 下的 `root` 和 `非root` 用户下的主题配置。
> [!note] 
>
> - OS：`Debian GNU/Linux 11 (bullseye) x86_64`
> - Shell: `zsh 5.8`
> - theme：`powerlevel10k`

# 2 环境配置
## 2.1 安装基本工具
```shell
# 更新软件源
sudo apt update && sudo apt upgrade -y
# 安装 zsh git curl
sudo apt install zsh git curl -y
```
oh-my-zsh 基于 `zsh`，`linux` 中一般默认的都是 `bash`，如果没有则需要提前下载。
设置默认终端为 zsh（**注意：不要使用 sudo**）。
```shell
chsh -s /bin/zsh
```
然后退出服务器重启。
## 2.2 安装 oh-my-zsh
| Method                                            | Command                                                                              |
| ------------------------------------------------- | ------------------------------------------------------------------------------------ |
| **curl**                                          | `sh -c "$(curl -fsSL https://install.ohmyz.sh/)"`                                    |
| **wget**                                          | `sh -c "$(wget -O- https://install.ohmyz.sh/)"`                                      |
| **fetch**                                         | `sh -c "$(fetch -o - https://install.ohmyz.sh/)"`                                    |
| 国内curl [镜像](https://gitee.com/pocmon/ohmyzsh) | `sh -c "$(curl -fsSL https://gitee.com/pocmon/ohmyzsh/raw/master/tools/install.sh)"` |
| 国内wget [镜像](https://gitee.com/pocmon/ohmyzsh) | `sh -c "$(wget -O- https://gitee.com/pocmon/ohmyzsh/raw/master/tools/install.sh)"`   |

使用 oh-my-zsh 会覆盖现有的 `.zshrc`.

# 3 配置主题
为了区分 `root` 和 `非root` 用户，对于两种设置的主题略有区别。
## 3.1 字体设置
由于在 powerlevel10k 主题中用到了很多 `unicode` 字符，因此需要设置带有 **`nerdfonts` 的等宽字体**。
链接： [nerdfonts]( https://www.nerdfonts.com/ )
宿主机使用的 `macOS` + `iTerm2`，字体样式如下：
![image.png|600](https://lonelynotes-images.oss-cn-beijing.aliyuncs.com/202502092349084.png)
> [!note] 
> - Font：[`0xProto Nerd Font Mono`](https://github.com/ryanoasis/nerd-fonts/releases/download/v3.3.0/0xProto.zip)
> - Non-ASCII Font：[`Hack Nerd Font`](https://github.com/ryanoasis/nerd-fonts/releases/download/v3.3.0/Hack.zip)
> 
> **注：** 设置  **Non-ASCII Font** 字体是为了能够让终端中的 icon 显示得大一点，否则在 `mono` 样式下会显得很小。

## 3.2 配色方案
![_iTerm配色](https://lonelynotes-images.oss-cn-beijing.aliyuncs.com/202502092351673.png)
## 3.3 root 用户
使用 [powerlevel10k](https://github.com/romkatv/powerlevel10k) 主题。
```shell
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k

# 中国用户可以使用 gitee.com 上的官方镜像加速下载
git clone --depth=1 https://gitee.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```
在 `~/.zshrc` 设置 `ZSH_THEME="powerlevel10k/powerlevel10k"`。
![image.png](https://lonelynotes-images.oss-cn-beijing.aliyuncs.com/202502092219874.png)
接下来，终端会自动引导你配置 `powerlevel10k`，最终效果如下：

![root用户效果图](https://lonelynotes-images.oss-cn-beijing.aliyuncs.com/202502092226525.png)

## 3.4 非 root 用户
这里使用的 [haoomz](https://cdn.haoyep.com/gh/leegical/Blog_img/zsh/haoomz.zsh-theme) 主题。
编辑 `~/.zshrc` 文件，将 `ZSH_THEME` 设为 `haoomz`。
```
nano ~/.zshrc

ZSH_THEME="haoomz"

source ~/.zshrc
```
![image.png](https://lonelynotes-images.oss-cn-beijing.aliyuncs.com/202502092232094.png)
一个很简洁干净的主题，最终效果如下：

![非root用户效果图](https://lonelynotes-images.oss-cn-beijing.aliyuncs.com/202502092232674.png)
# 4 插件安装
只安装了两个插件，也是觉得最实用的，插件太多太臃肿了反而没那么好用，编辑功能大多用 `neovim` 来解决，所以我实际需要的也就是**高亮提示**+**自动补全**。
基本流程都是：
- 将插件下载到 `~/.oh-my-zsh/custom/plugins` ；
- 然后在 `.zshrc ` 的 ` plugins ` 列表中插入。
## 4.1 zsh -autosuggestions
[zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions) 是一个命令提示插件，当你输入命令时，会自动推测你可能需要输入的命令，按下右键可以快速采用建议。
效果如下：
![image.png|400](https://lonelynotes-images.oss-cn-beijing.aliyuncs.com/202502092244925.png)

```shell
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

# 中国用户可以使用下面任意一个加速下载
# 加速1
git clone https://github.moeyy.xyz/https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
# 加速2
git clone https://gh.xmly.dev/https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
# 加速3
git clone https://gh.api.99988866.xyz/https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```
## 4.2 zsh-syntax-highlighting
[zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting) 是一个命令语法校验插件，在输入命令的过程中，若指令不合法，则指令显示为红色，若指令合法就会显示为绿色。
效果如下：
![image.png|400](https://lonelynotes-images.oss-cn-beijing.aliyuncs.com/202502092245396.png)

```shell
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

# 中国用户可以使用下面任意一个加速下载
# 加速1
git clone https://github.moeyy.xyz/https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
# 加速2
git clone https://gh.xmly.dev/https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
# 加速3
git clone https://gh.api.99988866.xyz/https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```
# 5 卸载 oh-my-zsh
```shell
uninstall_oh_my_zsh
Are you sure you want to remove Oh My Zsh? [y/N]  Y
```
提示信息：
```shell
Removing ~/.oh-my-zsh
Looking for original zsh config...
Found ~/.zshrc.pre-oh-my-zsh -- Restoring to ~/.zshrc
Found ~/.zshrc -- Renaming to ~/.zshrc.omz-uninstalled-20170820200007
Your original zsh config was restored. Please restart your session.
Thanks for trying out Oh My Zsh. It's been uninstalled.
```
# 6 手动更新 Oh My Zsh
```shell
upgrade_oh_my_zsh
```