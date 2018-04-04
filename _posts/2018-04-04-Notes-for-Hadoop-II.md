---


---

<hr>
<h2 id="layout-articletemplatetitle-notes-for-hadoop-2date-2018-04-04category-hadoop">layout: articleTemplate<br>
title: Notes for Hadoop 2<br>
date: 2018-04-04<br>
category: hadoop</h2>
<h1 id="notes-for-hadoop-2">Notes for Hadoop 2</h1>
<h2 id="notes">Notes</h2>
<hr>
<p>Hadoop = HDFS  + MapReduce</p>
<p>HDFS is a data storage, and MapReduce is a program to process the data saved in HDFS.</p>
<h2 id="put-data-file-to-hdfs">Put data file to HDFS</h2>
<hr>
<p>When we login our Hadoop account, we are not in HDFS. In order to enable MapReduce to process a file A, we should first put the local_file into HDFS:</p>
<pre><code>{% highlight shell %}
$hdfs dfs -put local_file remote_file
{% endhighlight %}
</code></pre>
<h2 id="java-file-to-print-content">Java file to print content</h2>
<hr>
<p>Then, if we want to write a JAVA file to print the content of remote_file, the JAVA code is given below. It’s copy from <em>Hadoop: The Definitive Guide</em>. Remember to import those package before compile.</p>
<pre><code>{% highlight java %}
import org.apache.hadoop.fs.*;
import org.apache.hadoop.conf.*;
import org.apache.hadoop.io.*;
import java.net.URL;
import java.io.InputStream;

public class URLCat{
	static {
	URL.setURLStreamHandlerFactory(new FsUrlStreamHandlerFactory());
	}
	public static void main(String[] args) throws Exception{
		InputStream in = null;
		try{
			in = new URL(args[0]).openStream();
			IOUtils.copyBytes(in, System.out, 4096, false);
		}finally{
			IOUtils.closeStream(in);
		}
	}
}
{% endhighlight %}
</code></pre>
<h2 id="how-to-compile-java-file-in-hadoop">How to compile Java file in Hadoop</h2>
<hr>
<p>After we finish the code, we want to run it. So do it as the normal way, first use <code>javac</code> to compile it.</p>
<pre><code>{% highlight shell %}
$javac URLCat.java -cp $(/usr/bin/hadoop classpath)
{% endhighlight %}
</code></pre>
<p>Since we imported multiple <code>org.apache.hadoop</code> packages, we need to specify the class path of hadoop to compile it, which is the <code>/usr/bin/hadoop</code>. You need to find yours. The most easy way to get the path is to show to hadoop version, it will show a path to the <code>bin/hadoop</code></p>
<pre><code>{% highlight shell %}
$hadoop version
{% endhighlight %}
</code></pre>
<h2 id="run-java-code">Run Java code</h2>
<hr>
<p>After compiling our Java code, we can run it as normal. The most important thing you need to pay attention to is that we should specify the hdfs URL of our data file.</p>
<pre><code>{% highlight shell %}
$hadoop URLCat hdfs:///user/xy/quangle.txt
{% endhighlight %}
</code></pre>
<blockquote>
<p>Written with <a href="https://stackedit.io/">StackEdit</a>.</p>
</blockquote>

