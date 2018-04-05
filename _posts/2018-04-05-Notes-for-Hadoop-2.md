---
layout: articleTemplate
title: Notes for Hadoop 2
date: 2018-04-04
category: hadoop
---


# Notes for Hadoop 2 #

## Notes ##
----------

Hadoop = HDFS  + MapReduce

HDFS is a data storage, and MapReduce is a program to process the data saved in HDFS.

## Put data file to HDFS ##
----------

When we login our Hadoop account, we are not in HDFS. In order to enable MapReduce to process a file A, we should first put the local_file into HDFS: 

``` shell    
$hdfs dfs -put local_file remote_file
```


## Java file to print content ##
----------

Then, if we want to write a JAVA file to print the content of remote_file, the JAVA code is given below. It's copy from *Hadoop: The Definitive Guide*. Remember to import those package before compile.

``` java
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
```

## How to compile Java file in Hadoop ##
----------

After we finish the code, we want to run it. So do it as the normal way, first use `javac` to compile it.

```shell
$javac URLCat.java -cp $(/usr/bin/hadoop classpath)
```

Since we imported multiple `org.apache.hadoop` packages, we need to specify the class path of hadoop to compile it, which is the `/usr/bin/hadoop`. You need to find yours. The most easy way to get the path is to show to hadoop version, it will show a path to the `bin/hadoop`

```shell
$hadoop version
```

## Run Java code ##
----------

After compiling our Java code, we can run it as normal. The most important thing you need to pay attention to is that we should specify the hdfs URL of our data file.

```shell
$hadoop URLCat hdfs:///user/xy/quangle.txt
```


> Written with [StackEdit](https://stackedit.io/).
