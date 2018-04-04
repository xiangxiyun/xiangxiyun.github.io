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

When we login our Hadoop account, we are not in HDFS. In order to enable MapReduce to process a file A, we should first put the local_file into HDFS: 

    {% highlight shell %}
    $hdfs dfs -put local_file remote_file
    {% endhighlight %}


Then, if we want to 
----------





> Written with [StackEdit](https://stackedit.io/).
