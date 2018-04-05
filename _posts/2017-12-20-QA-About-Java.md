---
layout: articleTemplate
title: QA About Java
date: 2018-01-08
category: hadoop
---

#QA About Java#

## QA: Can a class instantiate itself? ##
 
----------

 When I read *Head First Java*, I noticed a code snippet that a class can be instantiated in its main function. I was wondering how could this happened? 

    public class Someclass{
	    public static void main(String[] args){
    	    new Someclass();
        }
    }
    
And I found the reason: It's not uncommon for a main method to create a new instance of the class it's defined in. But creating an instance won't call main again. Remember, main is a static method, not tied to any particular instance. 
From stackoverflow: 
[https://stackoverflow.com/questions/18241281/can-a-class-instantiate-itsel](https://stackoverflow.com/questions/18241281/can-a-class-instantiate-itself) 


##  QA: Differences between HashMap and Hashtable##
 
----------

> There are several differences between HashMap and Hashtable in Java:
>  1.Hashtable is synchronized, whereas HashMap is not. This makes HashMap better for non-threaded applications, as unsynchronized Objects typically perform better than synchronized ones.
> 
> 2.Hashtable does not allow null keys or values.  HashMap allows one null key and any number of null values.
> 
> 3.One of HashMap's subclasses is LinkedHashMap, so in the event that you'd want predictable iteration order (which is insertion order by default), you could easily swap out the HashMap for a LinkedHashMap. This wouldn't be as easy if you were using Hashtable.
> 
> Since synchronization is not an issue for you, I'd recommend HashMap. If synchronization becomes an issue, you may also look at ConcurrentHashMap.

From Stackoverflow:
[https://stackoverflow.com/questions/40471/differences-between-hashmap-and-hashtable](https://stackoverflow.com/questions/40471/differences-between-hashmap-and-hashtable)
 
## QA: The difference between String, StringBuilder and StringBuffer. ##

----------

> Mutability Difference:
> 
> String is immutable, if you try to alter their values, another object gets created, whereas StringBuffer and StringBuilder are mutable so they can change their values.
> 
> Thread-Safety Difference:
> 
> The difference between StringBuffer and StringBuilder is that StringBuffer is thread-safe. So when the application needs to be run only in a single thread then it is better to use StringBuilder. StringBuilder is more efficient than StringBuffer.
> 
> Situations:
> If your string is not going to change use a String class because a String object is immutable.
> If your string can change (example: lots of logic and operations in the construction of the string) and will only be accessed from a single thread, using a StringBuilder is good enough.
> If your string can change, and will be accessed from multiple threads, use a StringBuffer because StringBuffer is synchronous so you have thread-safety.

From StackOverflow 
[https://stackoverflow.com/questions/2971315/string-stringbuffer-and-stringbuilder](https://stackoverflow.com/questions/2971315/string-stringbuffer-and-stringbuilder)


## QA: How to Create a Generic Array###

------------

Generic Types: [Java Documentation](https://docs.oracle.com/javase/tutorial/java/generics/types.html)

[https://stackoverflow.com/questions/18581002/how-to-create-a-generic-array](https://stackoverflow.com/questions/18581002/how-to-create-a-generic-array)

    private E[] elements = (E[]) new Object[10];

## QA: CompareTo() vs Compare() ##

----------

While using PriorityQueue class in java, I met the situation to override the default `compare()` function. But I also remember that I have used to override `compareTo()` method in some code I wrote before. So I'm a little confused about this.

After searching the Internet, I found that:
`compare()` method comes from **Comparator** interface.
`compareTo()` method comes from **Comparable** interface.

`compare()` is used as `compare(a,b)`
`compareTo()` is used as `a.compareTo(b)`

Then, what is the difference between **Comparator** interface and **Comparable** interface?

It said that, if your class objects have a **natural order**, implement the **Comparable<T>** interface and define this method. All java classes that have a natural ordering implement **Comparable<T>**, like `string, wrapper classes, BigInteger`

To Compare values of two objects. you need to choose **Comparator<T>** interface. The typical use is to define one or more small utility classes that implement this, to pass to methods such as sort() or for use by sorting data structures such as TreeMap and TreeSet. You might want to create a Comparator object for the following:

 - Multiple comparisons: To provide several different ways to sort something. For example, you might want to sort a Person class by name, ID, age, height, ... You would define a Comparator for each of these to pass to the sort() method.
 - System class: To provide comparison methods for classes that you have no control over. For example, you could define a Comparator for Strings that compared them by length. 
 - Strategy pattern To implement a Strategy pattern, which is a situation where you want to represent an algorithm as an object that you can pass as a parameter, save in a data structure, etc.

From StackOverflow:
[https://stackoverflow.com/questions/420223/what-is-the-difference-between-compare-and-compareto](https://stackoverflow.com/questions/420223/what-is-the-difference-between-compare-and-compareto)


## PriorityQueue ##

min-heap: default priorityQueue, ascending.

max-heap: change the Comparator, descending.

```java
import java.util.Comparator;
public class MyComparator implements Comparator<Integer>{
    public int compare( Integer x, Integer y {
	    return y - x;
	}
}
PriorityQueue minHeap = new PriorityQueue();
PriorityQueue maxHeap = new PriorityQueue(size, new MyComparator());
//Or
PriorityQueue<Integer> maxHeap = new PriorityQueue<>(size, Collections.reverseOrder());
```
From StackOverflow:
[https://stackoverflow.com/questions/6065710/how-does-javas-priorityqueue-differ-from-a-min-heap](https://stackoverflow.com/questions/6065710/how-does-javas-priorityqueue-differ-from-a-min-heap)


## How to convert an int array to String with toString method in Java ##

[https://stackoverflow.com/questions/29140402/how-do-i-print-my-java-object-without-getting-sometype2f92e0f4](https://stackoverflow.com/questions/29140402/how-do-i-print-my-java-object-without-getting-sometype2f92e0f4)
