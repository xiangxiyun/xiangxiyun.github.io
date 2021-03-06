---
layout: articleTemplate
title: Some Notes for Python
date: 2017-01-11
category: python
---


# Some Notes for PYTHON #

In the first class of SI 618,  Professor began to talk about regular expression.... Unfortunately, I almost forgot all the things about regex that I learned in university and met countless problems while doing the homework. So I wrote them down in case I forget them again!!!

## Regular Expression Syntax ##

----------

English version:
[https://docs.python.org/2/library/re.html](https://docs.python.org/2/library/re.html)

Chinese version:
[Regular Expression Syntax](http://baike.baidu.com/link?url=acM6E6D3H-xjY7pBc0_0ntw1eZ-14qhcpry-yLbjelIJmRDSrcEVsH2zMG1my6ZXISTQ1rjBCdbXM1ZHjhN2ec5Lcek47Kp3Z29nLIlqCuDaCBnFMmZwmKrzGbwz3bkniGg8uRuv8WDIOBeeXjbJt_#4)

I think the most important point is the usage of parentheses. Sometimes it can be used for matching and creating a new group. Other times, if you add '?:' , it is only used for matching and cannot be retrieved.

>  (?:...) A non-capturing version of regular parentheses. Matches
> whatever regular expression is inside the parentheses, but the
> substring matched by the group cannot be retrieved after performing a
> match or referenced later in the pattern.
>      --(https://docs.python.org/2/library/re.html)

     

This character is useful when we create pattern with `|`.

## Delete List Item via Traversal ##

----------

In a list,  I want to remove elements which equal 3 and there are two adjacent elements that both equals three. I used `remove()` method to do it. However, the result shows that only one of them have been removed and it skips next element. That's weird!

```python 
>>> ls = [1, 2, 3, 3, 4, 5, 6]
>>> for ele in ls:
...     if ele == 3:
...             ls.remove(ele)
... 
>>> ls
[1, 2, 3, 4, 5, 6]
```

That is because the `for` statement just visits each item in the list in order: ls[0], then ls[1], then ls[2], and so on until it runs out of ls.

Removing one of the element shifts all the other items in the list to the left one slot; the original ls[3] is now ls[2], so the for loop will skip over it.

And I tried to delete specific item in a list using another kind of method, Python code below, it also has the same problem and the code always threw an exception:

```python
>>> ls = [1, 2, 3, 3, 4, 5, 6]
>>> for i in range(0, len(ls)):
...     if ls[i] == 5:
...             del ls[i]
... 
Traceback (most recent call last):
  File "<stdin>", line 2, in <module>
IndexError: list index out of range
>>> ls
[1, 2, 3, 4, 5, 6]
```

After debugging,  I found that when I deleted the item in that list, the length of that list would decrease one. However, in the for loop, the range of index didn't change after list length changed. In the last loop, i equaled to 10, but the actual length of ls was 9,  so list index out of range.

There are three solution to deal with this kind of problem:

 1. Copy the original list,  traverse the new list, use `remove()` method to remove items in original list.(This method require extra space for new list)
 2. Track the list indices of all items that you want to remove from the list and then remove them outside your for-loop
 3. Traverse the list in the reversed direction and remove the element required. Since the decrease of length will influence the index of elements which are behind the deleted element,  previous elements will never be influenced.
 
The last solution is the best one, because it does not need extra space and only traverse the whole list once.

## How to Initialize a List ##

----------

1D list can be initialized with the following code:

```python
>>> l1 = [0]*3
>>> l1
[0, 0, 0]
>>> l1[1] = 3  //have no impact on other elements
>>> l1
[0, 3, 0]
```

But the same trick won't work for a 2D list:

```python
>>> l2 = [[0]*3]*3
>>> l2
[[0, 0, 0], [0, 0, 0], [0, 0, 0]]
>>> l2[0][1] = 5
>>> l2
[[0, 5, 0], [0, 5, 0], [0, 5, 0]]
```

If we change a specific elements in 2D list, it will influence other elements.

The correct way to initialize a list larger than 1D is that:

```python
>>> l2 = [[0] * 3 for _ in range(3)]
>>> l2
[[0, 0, 0], [0, 0, 0], [0, 0, 0]]
>>> l2[0][0] = 5
>>> l2
[[5, 0, 0], [0, 0, 0], [0, 0, 0]]
```
