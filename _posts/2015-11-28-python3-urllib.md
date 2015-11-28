---
layout: articleTemplate
title: python3 urllib 
date: 2015-11-28
author: xiangxiyun
category:  python
description:  之前写了篇总结HTTP协议的文章，今天来总结pyhton3的urllib库，我只挑了些我已经用到的来介绍。实习boss要求项目用python3，所以开始了python3的学习。而网上大多都是python2的教程，所以我就艰难的从官方文档开始学习了。这篇文章有点官方文档译文的性质。话说，虽然已经考过了托福和GRE，怎么感觉看个英文文档还是这么吃力呢……
---


# python3 urllib #

## 写在前面 ##

----------

之前写了篇总结HTTP协议的文章，今天来总结pyhton3的urllib库，我只挑了些我已经用到的来介绍。实习boss要求项目用python3，所以开始了python3的学习。而网上大多都是python2的教程，所以我就艰难的从官方文档开始学习了。这篇文章有点官方文档译文的性质。话说，虽然已经考过了托福和GRE，怎么感觉看个英文文档还是这么吃力呢……

## urllib －－URL handling modules ##

----------

urllib 中有一共有四个操作URLs的模块：

 - urllib.request 用来打开和读取URLs
 - urllib.error 处理从 urllib.request 出现的异常
 - urllib.parse 分析URLs
 - urllib.robotparser 

下面分别介绍每个模块

## urllib.request  ##

----------

官方文档链接：
[https://docs.python.org/3/library/urllib.request.html](https://docs.python.org/3/library/urllib.request.html)

在python中引用这个模块的方法是：

    {% highlight python %}
    import urllib.request
    {% endhighlight %}

urllib.request 模块中定义了很多用来打开URLs的函数和类，我只挑了些我已经用到的来介绍。

### urllib.request.urlopen() 函数 ###

----------

    {% highlight python %}
    urllib.request.urlopen(url, data=None, [timeout,]*, cafile=None, capath=None, cadefault=False, context=None)
    {% endhighlight %}

函数如其名，是用来打开URL的。对应着python2.x中的urllib2.urlopen函数。里面的参数可以是url，也可以是一个Request对象，Request对象会在之后介绍。

两种写法分别是：

    {% highlight python %}
    urllib.request.urlopen('http://www.baidu.com')
    {% endhighlight %}

    {% highlight python %}
    request_object = urllib.request.Request('http://www.baidu.com')
    urllib.request.urlopen(request_object)
    {% endhighlight %}

来说一下函数原型中的各个参数：

 - url 这个就是你想要爬取的网络页面的url
 - data 必须是一个 bytes 对象（这个十分重要！！！可以用encode()函数编码成bytes类型。在公司服务器调试时因为byte的问题总是获取不到数据），它指定了想要传给服务器的额外数据。如果没有的话（GET方法）就可以省略这个参数，默认值是None。data也可以是可迭代的对象（iterable object，这个和byte对象不冲突），当这种情况时，Content-Length 值就需在头（header）中指明。目前，HTTP 请求是唯一使用data的请求，如果提供了data参数，那么默认的请求类型GET就会变为POST。
 - timeout 这个可选参数指定了超时时间，没有指定的时候就使用通用的超时时间。
 -  context （我没有用过）它必须是一个ssl.SSLContext的实例，用来描述SSL 选择的
 - cafile and capath （我没有用过）用于指定HTTPS请求可信任的CA证书
 - cadefault 参数可忽略

调用这个函数之后会返回一个对象，可以用来操作响应内容（如果没有handler处理这个请求那么会返回None）。常用方法下面在urllib.response中会讲到。


### urllib.request.Request 类 ###

----------

构造函数：

    {% highlight python %}
    urllib.request.Request(url, data=None, headers={}, origin_req_host=None, unverifiable=False, method=None)
    {% endhighlight %}

这个类是对URL请求的抽象，实例化方法如下：

    {% highlight python %}
    req = urllib.request.Request('www.baidu.com', data, {}, None, False, 'GET')
    {% endhighlight %}

使用方法见urlopen函数，来说一下构造函数中的各个参数：

 - url 这个就是你想要爬取的网络页面的url
 - data 必须是一个 bytes 对象（和urlopen中的data用法一样）
 - headers 必须是一个字典
 - origin_req_host 和 unverifable （我没有用过）可以忽略
 - method 指定HTTP请求的方式，必须是string，比如‘GET’。如果提供了这个参数，它会储存在method属性内，可以通过get_method()方法使用。

Request 对象中的公共接口：

 - Request.full_url： 传给构造函数的原始URL
 - Request.type： URI scheme 统一资源标识符URI的命名结构（不是URL。具体什么是URI请看wiki [Uniform Resource Identifier](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier)）
 - Request.host：URI authority 通常是host，也会包含由冒号分隔的端口
 - Request.origin_req_host：请求的原始host，不包括端口
 - Request.selector：URI path，如果请求使用代理，那么就是通过代理的url
 - Request.data：请求的正文（body），如果没有就是None
 - Request.method：HTTP请求的方法，例如‘GET’，‘POST’
 - Request.get_method()：返回HTTP请求的方法，默认为‘GET’
 - Request.add_header(key, val)：为请求添加头
 - Request.add_unredirected_header(key, header)：为请求添加不会赋予重定向请求的头
 - Request.has_header(header)：返回是否有名为header的头
 - Request.remove_header(header)：移除名为header的头
 - Request.get_full_url()：返回在构造函数中设置的URL
 - Request.set_proxy(host, type)：为请求设置代理
 - Request.get_header(header_name, default=None)：返回给定header的值
 - Request.header_items()：返回头中元组的list，格式为 (header_name, header_value)


## urllib.response — Response classes used by urllib ##

----------

官方文档链接：
[https://docs.python.org/3/library/urllib.request.html#module-urllib.response](https://docs.python.org/3/library/urllib.request.html#module-urllib.response)

urllib.response模块定义了操作响应的一些函数和对象。通常这些函数都是通过urllib.request 模块内部调用。

通过调用 urllib.request.urlopen() 函数会返回一个response对象

这个对像有些常用的方法（针对HTTP请求）：

 - geturl() 返回得到资源的url，通常用来判断是否发生重定向
 - info() 返回页面的meta-information，例如headers
 - read() 返回HTML页面内容
 - getcode() 返回HTTP响应状态码

使用这些方法的方式为

    {% highlight python %}
    data = urllib.request.urlopen().read()
    {% endhighlight %}

或者写成

    {% highlight python %}
    resp = urllib.request.urlopen()
    data = resp.read()
    {% endhighlight %}

## urllib.parse — Parse URLs into components ##

----------

官方文档链接：
[https://docs.python.org/3/library/urllib.parse.html](https://docs.python.org/3/library/urllib.parse.html)

 urllib.parse 模块定义了很多处理url的函数，可以将URL解析成不同的部分，也可以将不同的部分拼装成URL，甚至可以将相对URL在基础URL的辅助下转换成绝对URL。完整的介绍请看官网[urllib.parse — Parse URLs into components](https://docs.python.org/3/library/urllib.parse.html)，我也只挑我用过的来说。

 - .encode() 函数。可以将str编码成bytes，默认ASCII编码，也可以通过赋参数改成uft－8编码：`.encode('utf-8')`
 - .decode() 函数。与encode对应，将bytes解码成str。
 - urllib.parse.urlencode()函数。将 mapping object 或者一系列 two-element tuples转化成完全编码的ASCII text string。生成的string是一系列由‘&’分隔的键值对。如果生成的string要用作POST请求的data，那么需要再编码成bytes，否则会出现TypeError错误。

使用urllib.parse.urlencode()函数的例子：

    {% highlight python %}
    >>> import urllib.parse
    >>> urllib.parse.urlencode({'spam': 1, 'eggs': 2, 'bacon': 0})
    'spam=1&eggs=2&bacon=0'    
    {% endhighlight %}

    {% highlight python %}
    >>> import urllib.request
    >>> import urllib.parse
    >>> data = urllib.parse.urlencode({'spam': 1, 'eggs': 2, 'bacon': 0})
    >>> data = data.encode('ascii')
    >>> with urllib.request.urlopen("http://requestb.in/xrbl82xr", data) as f:
    ...     print(f.read().decode('utf-8'))
    {% endhighlight %}


## urllib.error — Exception classes raised by urllib.request ##

----------

官方文档链接：
[https://docs.python.org/3/library/urllib.error.html#urllib.error.URLError](https://docs.python.org/3/library/urllib.error.html#urllib.error.URLError)

这个模块为由urillib.request引起的异常定义了异常类。由以下三个类：

 - urllib.error.URLError： handler发生异常的时候回抛出这个错误。它有一个reason属性，是描述error的string
 - urllib.error.HTTPError：遇到外部HTTP异常的时候用它来处理。他有三个属性：code——HTTP状态码，reason——对error的描述，headers——造成error的HTTP请求的响应头。
 - urllib.error.ContentTooShortError(msg, content)：这个没用过，官方文档解释 This exception is raised when the urlretrieve() function detects that the amount of the downloaded data is less than the expected amount (given by the Content-Length header). The content attribute stores the downloaded (and supposedly truncated) data.

由于python3中`try …… except ……` 的语法改了所以大家要注意，下面提供一个例子：

    {% highlight python %}
    try:
	    resp = urllib.request.urlopen(request)  
    except urllib.error.HTTPError as e:
	    print(e.code)
	    print(e.reason)
	    print(e.headers)
    {% endhighlight %}

## 结语 ##

----------

这篇文章居然花了两天来写……终于写完了……长吁一口气……以后用到新的我再来更新。

写于2015-11-28
