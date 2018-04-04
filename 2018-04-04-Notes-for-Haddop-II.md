---


---

<hr>
<h2 id="layout-articletemplatetitle-notes-for-hadoop-iidate-2018-01-08category-hadoop">layout: articleTemplate<br>
title: Notes for Hadoop II<br>
date: 2018-01-08<br>
category: hadoop</h2>
<h1 id="notes-for-hadoop-ii">Notes for Hadoop II</h1>
<p>Hadoop = HDFS  + MapReduce</p>
<p>HDFS is a data storage, and MapReduce is a program to process the data saved in HDFS.</p>
<p>When we login our Hadoop account, we are not in HDFS. In order to enable MapReduce to process a file A, we should first put the local_file into HDFS:</p>
<pre><code>{% highlight shell %}
$hdfs dfs -put local_file remote_file
{% endhighlight %}
</code></pre>
<h2 id="then-if-we-want-to">Then, if we want to</h2>
<blockquote>
<p>Written with <a href="https://stackedit.io/">StackEdit</a>.</p>
</blockquote>
