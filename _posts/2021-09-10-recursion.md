---
layout: post
title:  Recursion
date:   2021-09-10 23:00:00
description: Why is recursion difficult? Can we break it down to make it simple?
categories: microblog
tags: learning functions programming
---


I often hear about recursion as one of those topics that stump new engineers. I think the difficulty lies in
how we try to break down recursive functions.

#### What is it?

Recursion is when a function invokes itself to complete a computation. Functions that use recursion are
called "recursive functions".

#### Why is it hard?

It's hard because engineers think of recursive functions as very abstract. Mapping them
directly to a for or while loop can be a way to break down the abstraction. Next, recursion
is hard because it can add a lot of complexity to an otherwise simple algorithm. Here is some simple code
to append file paths:

{% highlight typescript %}
const buildPath = (root: string, separator: string, remainingFiles: Array<string>): string => {
  if (!remainingFiles.length) {
    return root;
  }
  const [nextFile, ...restOfTheFiles] = remainingFiles;
  return buildPath(root + separator + nextFile, separator, restOfTheFiles);
};

const fileNames: Array<string> = [
  'development',
  'project',
  'index.js',
];

console.log(buildPath('', '/', fileNames));
{% endhighlight %}

If you read the logic carefully, you'll see this is no more than a for loop:

{% highlight typescript %}
const fileNames: Array<string> = [
  'development',
  'project',
  'index.js',
];

let fullPath = '';
for (const file of fileNames) {
  fullPath = fullPath + '/' + file;
}

console.log(fullPath)
{% endhighlight %}

This illustrates how much complexity recursion can add. Practice taking typical loops and writing
recursive versions of those functions. Practice will help build the muscles necessary to
understand more complex algorithms even if just blindly applying recusion isn't always a good idea.

#### Why use recursion?

It can remove the need for stateful operations. See how in the loop we needed to keep a path variable
and constantly mutate it? When using recursion the state is bound to a single function. This
is a contrived example, but it can help in more complex scenarios.

To that point, some algorithms are just plain simpler with recursion. A good example is the
classic [DFS graph traversal algorithm](https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/)
that is generally solved with recursion. Also, [merge sort](https://www.geeksforgeeks.org/merge-sort/).

### What can I learn next?

- [Tail call optimization](https://stackoverflow.com/questions/310974/what-is-tail-call-optimization)
- [Functional programming](https://www.geeksforgeeks.org/functional-programming-paradigm/)
- [This guy's opinions on recursion](https://levelup.gitconnected.com/advanced-concepts-in-recursion-every-effective-programmer-should-know-de233a092dbf)