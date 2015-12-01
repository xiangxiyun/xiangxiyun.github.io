---
layout: articleTemplate
title: mac下jekyll的安装与简单使用
date: 2015-11-13
category: jekyll
description: 前天调通blog在了github上的jekyll设置，然后我一直傻傻的用提交刷新网页的方式来调试……直到今天到了办公室才醒悟过来应该在本机上搭一个jekyll。于是我先在办公室的iMac上按照教程轻松搭好了，然后回到宿舍又准备再搭一次，结果就遇到很多问题。这篇文章记录了我在安装过程中遇到的一系列问题，供大家参考。
---


# mac下jekyll的安装与简单使用 #

## 写在前面##

----------

前天调通blog在了github上的jekyll设置，然后我一直傻傻的用提交刷新网页的方式来调试……直到今天到了办公室才醒悟过来应该在本机上搭一个jekyll。于是我先在办公室的iMac上按照教程轻松搭好了，然后回到宿舍又准备再搭一次，结果就遇到很多问题。这篇文章记录了我在安装过程中遇到的一系列问题，供大家参考。

## 本机配置 ##

----------

 - MacBookAir
 - OS X Yosemite 10.10.5
 - Xcode 7.1

## 安装前需要 ##

----------

 1. Xcode
 2. Ruby
 2. RubyGems

Xcode就直接在App Store下载吧，时间可能会比较久。mac 如无意外应该是自带了Ruby和RubyGems的。

命令行检查Ruby版本：

{% highlight bash %}
$ ruby -v
{% endhighlight %}

我这显示

{% highlight bash %}
ruby 2.0.0p481 (2014-05-08 revision 45883) [universal.x86_64-darwin14]
{% endhighlight %}

命令行检查RubyGems版本：

{% highlight bash %}
$ gem -v
{% endhighlight %}

我这显示

{% highlight bash %}
2.0.14
{% endhighlight %}

如果ruby版本过低，比如低于1.9.3，请用RVM升级一下，方便使用，有教程 [How to update Ruby to 1.9.x on Mac?](http://stackoverflow.com/questions/3696564/how-to-update-ruby-to-1-9-x-on-mac)。

升级gem可用命令行

{% highlight bash %}
$ gem update --system
{% endhighlight %}

如遇权限问题，用

{% highlight bash %}
$ sudo gem update --system
{% endhighlight %}

一切就绪，可以开始装jekyll了


## 安装jekyll ##

----------

如果你运气好，一条命令行就可以搞定

{% highlight bash %}
$ gem install jekyll
{% endhighlight %}

但是一般在天朝都会遇到被墙的问题

{% highlight bash %}
$ gem install jekyll
ERROR:  Could not find a valid gem 'jekyll' (>= 0), here is why:
        Unable to download data from https://rubygems.org/ - Errno::ECONNRESET: Connection reset by peer - SSL_connect (https://rubygems.org/latest_specs.4.8.gz)
{% endhighlight %}

事实证明翻墙依然不能成功安装。之后，百度参考 **易仁永澄的文章**

[【Mac01】小白教程：6大神器搭建免费无限流量博客方案](http://www.jianshu.com/p/1d6c56ea886a)

知道了把资源换成淘宝的RubyGems 镜像就可以啦。

首先我们看看gem 的资源里都有什么

{% highlight bash %}
$ gem source
*** CURRENT SOURCES ***
    
https://rubygems.org/
{% endhighlight %}

这个链接是官方的资源，接下来我们加入[淘宝的RubyGems 镜像](https://ruby.taobao.org)，删除官方源。

{% highlight bash %}
$ gem source -a https://ruby.taobao.org
https://ruby.taobao.org added to sources
$ gem source -r https://rubygems.org/
https://rubygems.org/ removed from sources
{% endhighlight %}

这里请注意！淘宝镜像已经停止基于 HTTP 协议的镜像服务, 请在配置中使用 HTTPS 协议代替。我之前一直用

{% highlight bash %}
$ gem source -a http://ruby.taobao.org
{% endhighlight %}

结果总是连接不上。

到这里按照一般教程都说可以愉快的安装jekyll了，于是我欢天喜地的敲入了一开始的那个指令，结果……前面欢快的跳了几行之后就出现了ERROR。

{% highlight bash %}
$ sudo gem install jekyll
Fetching: liquid-3.0.6.gem (100%)
Successfully installed liquid-3.0.6 
    /* ……省略…… */
Fetching: ffi-1.9.10.gem (100%) 
Building native extensions.  This could take a while... 
ERROR:  Error installing jekyll: 
		ERROR: Failed to build gem native extension.
		/System/Library/Frameworks/Ruby.framework/Versions/2.0/usr/bin/ruby extconf.rb checking for ffi.h... *** extconf.rb failed ***  
Could not create Makefile due to some reason, probably lack of necessary libraries and/or headers.  Check the mkmf.log file for more details.  You may need configuration options.
	
    /* ……省略…… */ 
/System/Library/Frameworks/Ruby.framework/Versions/2.0/usr/lib/ruby/2.0.0/mkmf.rb:434:in `try_do`: The compiler failed to generate an executable file. (RuntimeError)
You have to install development tools first.
{% endhighlight %}

 我先在百度上搜了一圈，挨个答案试了一遍都没有好。
 然后我把ERROR的描述google一下，果然高效地找到了[答案](_layouts_posts_sitedeployfontimagesjavascriptsstylesheetsresume.pdfabout.htmlindex.htmlportfolio.htmltechblog.html)，在命令行中输入一下：

{% highlight bash %}
$ xcode-select --install
xcode-select: note: install requested for command line developer tools
{% endhighlight %}

这一步是装命令行开发工具。
安装成功之后，打开Xcode，再次在命令行输入

{% highlight bash %}
$ sudo gem install jekyll
{% endhighlight %}

然后就装好啦！


## jekyll的简单使用 ##

----------

来确认一下是否真的已经装好了jekyll：

{% highlight bash %}
$ jekyll -v
jekyll 3.0.0
{% endhighlight %}

不错，诚不欺我。

之后我们可以随便进入一个文件夹建一个自带模版的blog：

{% highlight bash %}
$ jekyll new blog  /*blog可以换成你喜欢的名字*/
New jekyll site installed in /Users/XXX/Documents/blog.
{% endhighlight %}

现在在Documents文件夹下就有一个blog了。然后我们进入这个文件夹让它run起来：

{% highlight bash %}
$ cd blog/
$ jekyll server
{% endhighlight %}

如无报错，输出的最后两行是：

{% highlight bash %}
Server address: http://127.0.0.1:4000/ 
Server running... press ctrl-c to stop.
{% endhighlight %}

这时我们就已经在本地跑起来了一个服务器了，在浏览器地址栏中输入 http://127.0.0.1:4000/ ，你就能看到一个模版blog啦～