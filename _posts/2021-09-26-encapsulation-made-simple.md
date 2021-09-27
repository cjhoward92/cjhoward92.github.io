---
layout: post
title:  Encapsulation Made Simple
date:   2021-09-26 22:00:00
description: What is encapsulation and why would we need it?
categories: microblog
tags: learning encapsulation programming
---

This post is greater than 300 words. I tried.

Encapsulation is often misunderstood as to just mean "A means of hiding data". Encapsulation is really a tool for hiding information _around_ data and how data is used, leading to highly extensible data structures.

#### What is encapsulation?

Encapsulation is referred to as ["information hiding"](https://en.wikipedia.org/wiki/Encapsulation_(computer_programming)#Information_hiding). You use it to hide how you operate on data. It is easy to share code to manipulate data across your app. Instead, you can build encapsulated components to manage your data and reference those versus the data directly.

For instance, say you have a contact with a name. You think the name only comprises of a first and last name. So you write some code:

{% highlight typescript %}
const getFullName = (firstName: string, lastName: string): string => `${firstName} ${lastName}`;
{% endhighlight %}

To save time you use this function in many places across your app. You are asked to add prefix (e.g. Mr, Mrs) and suffix (e.g. Jr, Sr). You could update the original function:

{% highlight typescript %}
const getFullName = (firstName: string, lastName: string, prefix: string, suffix: string): string => `${prefix} ${firstName} ${lastName} ${suffix}`;
{% endhighlight %}

You are told that prefix and suffix are optional. Your code gets even more complicated:

{% highlight typescript %}
const getFullName = (firstName: string, lastName: string, prefix?: string, suffix?: string): string => {
  let fullName = '';
  if (prefix) {
    fullName += `${prefix} `;
  }

  fullName += `${firstName} ${lastName}`;

  if (suffix) {
    fullName += ` ${suffix}`;
  }
  return fullName;
};
{% endhighlight %}

Now you want to show a prefix with just last name (e.g. Dr. Smith). You create another function to avoid adding parameters to the first function:

{% highlight typescript %}
const getFormalName = (prefix: string, lastName: string): string => `${prefix} ${lastName}`;
{% endhighlight %}

Lastly, you realize you sometimes need to append a `.` to the prefix along with other validations. Middle names are now optional. Next you are asked to track maiden names. This name has become messy!

Thankfully, you can encapsulate all of this information.

{% highlight typescript %}
class PersonName {
  constructor(
    private firstName: string,
    private lastName: string,
    private prefix?: string,
    private suffix?: string,
    private middleName?: string,
    private maidenName?: string,
  ) {}

  public getFormalName() {
    if (!this.prefix) {
      // Example fallback logic
      return this.lastName;
    }

    return `${this.prefix} ${this.lastName}`;
  }

  public getStandardName() {
    return `${this.firstName} ${this.lastName}`;
  }

  public getFullName() {
    let fullName = '';
    if (this.prefix) {
      fullName += `${this.prefix} `;
    }

    fullName += this.getStandardName();

    if (this.suffix) {
      fullName += ` ${this.suffix}`;
    }
    return fullName;
  }

  public getWithMaidenName() { /* logic */ }
}
{% endhighlight %}

From now on you can just use a `PersonName` to handle all of your name logic. The class itself is extensible and is a single container for all business logic around names. If you do use the `PersonName` class everywhere and you make a change the entire app reflects that change.

#### Why is encapsulation hard?

Encapsulation is hard because it can feel simpler to use the data you need everywhere it feels needed. You might find yourself with several data that reference a first and last name making helper function practical. Even minor changes in the requirements can lead to an explosion of new parameters. If you have referenced a single function in multiple places across your app adding a new parameter can result in serious refactoring.

It is also difficult to determine the correct amount of encapsulation. Understanding your data and how it is used is key. You wouldn't need the abstraction above if you only reference first and last name one place in your application. As your system grows the need for encapsulation does, too.

#### Why use encapsulation?

You use it to share logic and to keep details of how you handle data private. What's important is that you have a full name when you need one, not how it's made. If tomorrow you need to remove prefix from the full name you can do it in a single place if you use proper encapsulation.

#### What can I learn next?

- [Wiki entry on encapulation](https://en.wikipedia.org/wiki/Encapsulation_(computer_programming))
- [Extensibilty isn't information hiding](https://www.infoworld.com/article/2075271/encapsulation-is-not-information-hiding.html)
- [Write Object-Oriented TypeScript: Encapsulation](https://blog.jetbrains.com/webstorm/2019/03/write-object-oriented-typescript-encapsulation/)
