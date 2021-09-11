---
layout: post
title:  Tabs Example
date:   2021-09-10 00:00:00
description: Example of my tab switcher
categories: programming
tags: learning functions programming
---

<div class="tabs">
  <ul>
    <li class="tab active" data-lang="ts">TS/JS</li>
    <li class="tab" data-lang="c#">C#</li>
    <li class="tab" data-lang="java">Java</li>
  </ul>
  <div class="tab-content active" data-lang="ts">
    {% highlight typescript %}
    export const myFunction = async (): Promise<void> => {
      console.log('this is some code!');
      await Promise.resolve();
    };
    {% endhighlight %}
  </div>
  <div class="tab-content" data-lang="c#">
    {% highlight csharp %}
    System.Console.WriteLine("whoa");
    {% endhighlight %}
  </div>
  <div class="tab-content" data-lang="java">
    {% highlight csharp %}
    System.out.println("whoa");
    {% endhighlight %}
  </div>
</div>