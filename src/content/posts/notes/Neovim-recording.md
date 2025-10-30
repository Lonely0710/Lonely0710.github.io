---
title: Neovim记录
published: 2025-10-30T06:59:30.715Z
description: ''
abstract: 'Neovim学习记录。'
cover: 'https://lonelynotes-images.oss-cn-beijing.aliyuncs.com/202503162327916.png'
updated: ''
tags:
  - Note
  - Neovim
draft: false
pin: 0
toc: true
lang: ''
abbrlink: ''
---

# 1. 快捷键
## 1.1 方向移动
<table style="text-align: center; width: 100%; border-collapse: collapse;">
  <thead style="background-color: #f2f2f2;">
    <tr>
      <th style="padding: 12px; border: 1px solid #ddd;">功能</th>
      <th style="padding: 12px; border: 1px solid #ddd;">按键</th>
      <th style="padding: 12px; border: 1px solid #ddd;">方向</th>
      <th style="padding: 12px; border: 1px solid #ddd;">说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="4" style="padding: 10px; border: 1px solid #ddd; vertical-align: middle;">切换光标</td>
      <td style="padding: 10px; border: 1px solid #ddd;"><kbd>H</kbd></td>
      <td style="padding: 10px; border: 1px solid #ddd;">⬅</td>
      <td style="padding: 10px; border: 1px solid #ddd; text-align: left;">光标左移</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #ddd;"><kbd>J</kbd></td>
      <td style="padding: 10px; border: 1px solid #ddd;">⬇</td>
      <td style="padding: 10px; border: 1px solid #ddd; text-align: left;">光标下移</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #ddd;"><kbd>K</kbd></td>
      <td style="padding: 10px; border: 1px solid #ddd;">⬆</td>
      <td style="padding: 10px; border: 1px solid #ddd; text-align: left;">光标上移</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #ddd;"><kbd>L</kbd></td>
      <td style="padding: 10px; border: 1px solid #ddd;">⮕</td>
      <td style="padding: 10px; border: 1px solid #ddd; text-align: left;">光标右移</td>
    </tr>
    <tr style="background-color: #f9f9f9;">
      <td rowspan="4" style="padding: 10px; border: 1px solid #ddd; vertical-align: middle;">切换焦点<br><kbd>Ctrl</kbd></td>
      <td style="padding: 10px; border: 1px solid #ddd;"><kbd>H</kbd></td>
      <td style="padding: 10px; border: 1px solid #ddd;">⬅</td>
      <td style="padding: 10px; border: 1px solid #ddd; text-align: left;">焦点左移</td>
    </tr>
    <tr style="background-color: #f9f9f9;">
      <td style="padding: 10px; border: 1px solid #ddd;"><kbd>J</kbd></td>
      <td style="padding: 10px; border: 1px solid #ddd;">⬇</td>
      <td style="padding: 10px; border: 1px solid #ddd; text-align: left;">焦点下移</td>
    </tr>
    <tr style="background-color: #f9f9f9;">
      <td style="padding: 10px; border: 1px solid #ddd;"><kbd>K</kbd></td>
      <td style="padding: 10px; border: 1px solid #ddd;">⬆</td>
      <td style="padding: 10px; border: 1px solid #ddd; text-align: left;">焦点上移</td>
    </tr>
    <tr style="background-color: #f9f9f9;">
      <td style="padding: 10px; border: 1px solid #ddd;"><kbd>L</kbd></td>
      <td style="padding: 10px; border: 1px solid #ddd;">⮕</td>
      <td style="padding: 10px; border: 1px solid #ddd; text-align: left;">焦点右移</td>
    </tr>
    <tr>
      <td rowspan="2" style="padding: 10px; border: 1px solid #ddd; vertical-align: middle;">不同文件间切换<br><kbd>Shift</kbd></td>
      <td style="padding: 10px; border: 1px solid #ddd;"><kbd>H</kbd></td>
      <td style="padding: 10px; border: 1px solid #ddd;">⬅</td>
      <td style="padding: 10px; border: 1px solid #ddd; text-align: left;">切换到上一个文件</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #ddd;"><kbd>L</kbd></td>
      <td style="padding: 10px; border: 1px solid #ddd;">⮕</td>
      <td style="padding: 10px; border: 1px solid #ddd; text-align: left;">切换到下一个文件</td>
    </tr>
  </tbody>
</table>

## 1.2 调出终端
<kbd>Ctrl</kbd> + <kbd>/</kbd>

## 1.3 WhichKey
按下<kbd>space</kbd>弹出提示待输入子命令

## 1.4 显示隐藏文件
<kbd>Shift</kbd> + <kbd>H</kbd>
> [!warning] 
> 此快捷键在不同的界面起到的作用不同：显示 hidden files/ 切换不同 tabs

## 1.5 调出 Cmdline
<kbd>Shift</kbd> + <kbd>:</kbd>
管理插件输入：`LazyExtras` 

## 1.6 关闭当前文件
<kbd>space</kbd> + <kbd>b</kbd>+<kbd>d</kbd>
> [!tip] 
> 实际上在 Neovim 中的每个文件都是 buffer，所以此处：
> - <kbd>b</kbd>: buffer
> - <kbd>d</kbd>: delete

## 1.7 返回文件顶部
<kbd>gg</kbd>

---

# 2. Coding 快捷键
> [!note] 
> 个人觉得要**区分在不同的模式**下的快捷键哪个更顺手，目前感觉更习惯 `INSERT` 下的一系列操作。

## 2.1 快捷移动
### 2.1.1 切换光标：以**单词**为单位进行移动

#### `INSERT` 编辑模式

> 在插入或编辑文本时，可使用以下组合键快速移动光标，无需切换回 `NORMAL` 模式。

*   **光标移动**:
    *   <kbd>Shift</kbd> + <kbd>H</kbd>  →  光标左移 ⬅
    *   <kbd>Shift</kbd> + <kbd>J</kbd>  →  光标下移 ⬇
    *   <kbd>Shift</kbd> + <kbd>K</kbd>  →  光标上移 ⬆
    *   <kbd>Shift</kbd> + <kbd>L</kbd>  →  光标右移 ⮕


#### `NORMAL` 普通模式

> 在普通模式下，可以使用更丰富的命令进行高效导航和跳转。

*   **按词移动**
    *   <kbd>w</kbd> ：向后移动，跳转到下一个单词的开头。
    *   <kbd>b</kbd> ：向前移动，跳转到当前或上一个单词的开头。

*   **行内查找 (`f`)**
    *   按下 <kbd>f</kbd> 后，再输入你想要查找的**单个字符**，光标会立即跳转至该字符在当前行的下一个匹配位置。
    *   **重复查找**：
        *   <kbd>f</kbd> ：正向重复上一次的查找，跳转到下一个匹配项。
        *   <kbd>Shift</kbd> + <kbd>F</kbd> ：反向重复上一次的查找，跳转到上一个匹配项。

*   **前缀跳转 (`s`)**
    *   这是一个强大的跳转功能，通过输入单词前缀来快速定位。
    *   **使用方法**：
        1.  按下 <kbd>s</kbd> 键。
        2.  输入目标单词的**前缀** (例如，输入 `co` 来查找 `command`)。
        3.  此时，所有匹配该前缀的单词都会被高亮，并且每个高亮处都会被分配一个临时的**快捷字母**。
        4.  只需按下对应的字母，即可瞬间跳转到你想要的位置。

### 2.1.2 快捷跳转
#### 1. 前缀智能跳转 (`s`)

> 这是一个极其高效的跳转方式，通过输入单词的开头几个字符来快速定位。

**使用流程：**
1.  按下 <kbd>s</kbd> 键。
2.  输入你想要查找的**字符或前缀**。
3.  此时，所有符合条件的字符组合都会被高亮，并且每个位置会被随机分配一个快捷字母。
4.  只需按下对应的字母，即可瞬间跳转到指定位置。


#### 2. 相对行号跳转

> 无需开启行号显示，即可在当前行的基础上进行快速向上或向下跳转。

**使用方法：**
*   **向下跳转**：`<行数>` + <kbd>j</kbd>
*   **向上跳转**：`<行数>` + <kbd>k</kbd>

:::note[示例]
假如当前光标位于第 4 行，想要跳转到第 11 行，则需向下移动 7 行。

**操作**：按下 <kbd>7</kbd> 然后再按 <kbd>j</kbd>。
:::


#### 3. 错误/诊断信息跳转

> 在代码中快速定位LSP（语言服务器协议）检测到的错误或警告信息。

*   <kbd>]</kbd> + <kbd>e</kbd> ：跳转到 **下一个** 错误/警告 ⬇
*   <kbd>[</kbd> + <kbd>e</kbd> ：跳转到 **上一个** 错误/警告 ⬆

### 2.1.3 移动文件末尾
<kbd>Shift</kbd> + <kbd> g </kbd>


## 2.2 跳转函数 gd
鼠标点选到指定函数处 + <kbd>gd</kbd>
> [!tip] 
> <kbd>gd</kbd>: go to definition

## 2.3 调整缩进
- 增加缩进：<kbd> >> </kbd>
- 减少缩进：<kbd> << </kbd>

## 2.4 删除单词
- 单纯删除：<kbd> dw </kbd>/ <kbd> diw </kbd>
- 删除后进入 `INSERT`：<kbd> cw </kbd> / <kbd> ciw </kbd>
> [!tip]
>  - `iw` 的会删除整个单词，单 `w` 的只会删除当前光标所在位置到末尾的部分。

## 2.5 撤销相关
- 撤销：<kbd>u</kbd>
- 重做被撤销的操作：<kbd> Crtl </kbd> + <kbd> r </kbd>

## 2.6 行选择模式
<kbd>Shift</kbd> + <kbd>V</kbd> 
> [!tip]
>  - 进入行选择模式，然后使用方向键移动到指定行；
>  - 同时可以配合相对跳转快速多选多行。

## 2.7 快捷注释 gc
<kbd>gc</kbd>
> [!tip] 
> <kbd>c</kbd>: comment

## 2.8 保存
- <kbd>\:wq</kbd>
- <kbd>Ctrl</kbd> + <kbd>s</kbd>

---

# 3. fzf 用法
## 3.1 文件查找
按下两次空格进入文件查找页面便可进行**模糊搜索**：

使用 <kbd>Ctrl</kbd> + <kbd>H</kbd> ⬅  <kbd>J</kbd> ⬇  <kbd>K</kbd> ⬆  <kbd>L</kbd> ⮕ 来切换文件选定