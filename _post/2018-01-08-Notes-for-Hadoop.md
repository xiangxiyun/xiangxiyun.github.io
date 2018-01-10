---
layout: articleTemplate
title: Notes for Hadoop
date: 2018-01-08
category: hadoop
---


# Notes for Hadoop #

All the notes are based on *Hadoop: The Definitive Guide, 2nd Edition*

## MapReduce ##

----------

Hadoop is written with Java so that it support original Java interface and API for other programming languages like Python, Ruby (using Hadoop Streaming) and C++ (using Hadoop Pipes).

MapReduce works by breaking the processing into two phases: the map phase and the reduce phase. Each phase has key-value pairs as input and output, the types of which may be chosen by the programmer. The programmer also specifies two functions: the map function and the reduce function.

key-value pair:
(key, data)

## HDFS ##

----------

HDFS stands for *Hadoop Distributed Filesystem*. Filesystems that manage the storage across a network of machines are called *distributed filesystems*.

HDFS is designed for:

 - Very large files: megabytes, gigabytes, or terabytes in size.
 - Streaming data access: Write-once, read-many-times.
 - Commodity hardware: carry on working without a noticeable interruption to the user in the face of node failure.

HDFS is not a good fit for these today:

 - Low-latency data access
 - Lots of small files
 - Multiple writers, arbitrary file modifications

### HDFS Concepts ###

 **Blocks:**
	 The default block size of HDFS is actually 64 MB, although many HDFS installations use 128 MB blocks.  Unlike a filesystem for a single disk, a file in HDFS that is smaller than a single block does not occupy a full block’s worth of underlying storage. Making HDFS block size so large is to minimize the cost of seeks. By making a block large enough, the time to transfer the data from the disk can be made to be significantly larger than the time to seek to the start of the block. Thus the time to transfer a large file made of multiple blocks operates at the disk transfer rate.
	 Benifits of having a block abstraction for DFS:
	 

 1. A file can be larger than any single disk in the network
 2. Simplified the storage subsystem: storage management and eliminating the metadata concerns(another system can handle file metadata such as permission information).
 3. Blocks fit well with replication for providing fault tolerance and availability.

 **Namenodes and Datanodes**
Namenode: The namenode manages the filesystem namespace. It maintains the filesystem tree and the metadata for all the files and directories in the tree. This information is stored persistently on the local disk.  The namenode also knows the datanodes on which all the blocks for a given file are located.

Datanodes are the workhorses of the filesystem. They store and retrieve blocks when they are told to (by clients or the namenode), and they report back to the namenode periodically with lists of blocks that they are storing.

 