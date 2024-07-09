---
layout: post
title:  How can I evaluate you, technically?
date:   2024-07-08 20:00:00
description: "Is it possible to create great technical interviews?"
categories: interviewing
tags: interviewing preparation hiring
---

As I was writing about [how to prepare as an interviewer](/interviewing/2024/07/06/the-onus-is-on-the-interviewer) I started to think about technical interviews, too. Technical interviews feel different than behavioral interviews. It feels... softer to evaluate someone's character. Every person has a different heuristic for what traits are desirable, anyway. But can you really measure someone's technical capabilities? How can you determine who - between two similar candidates with equal experience in the same tech stack - is the better engineer? What does "better" even mean, really? Technical interviews aren't _that_ different from behavioral interviews. You still need to understand what it is you want in an engineer and work backwards from the "ideal candidate" to devise interview questions that can suss out candidate capabilities.

Let's start from the common interview: data structures & algorithm (DS&A) based questions. Reverse a binary tree. Find the shortest path between two nodes in a graph. Determine if a linked list is cyclical. There are _so_ many potential questions related to DS&A that it seems like a logical choice for generating technical challenges (and I'm just talking about "classic" questions right now, like sliding window algorithms, dynamic programming, etc). As it turns out (at least in my experience), these types of questions are indeed quite common, probably just because (again) creating great interview questions is really hard. I also don't find it very controversial to state that these questions really don't do much to evaluate candidate competency. For the most part, canned DS&A questions are just an extension of Comp Sci exams. There are even professional sites (e.g. leetcode, hackerrank) dedicated to teaching engineers how to solve these problems. If a candidate is willing and able, they can pretty much spam the easy and medium difficult questions on any of these sites and find _something_ close to your interview question, at which point it's pretty much a memorization game.

Don't get me wrong, DS&A questions can be valuable. It's safe to say you'd prefer a candidate that understands the basic data structures and when to use them over one that doesn't know anything about data structures. A fundamental understanding of when to use, say, a map over a list can have massive implications on algorithm time complexity and I do see scenarios that require basic DS&A knowledge present themselves in day to day development. I don't, however, see a reason to grill candidates on Big-O notation or specific, specialized, implementations especially if they can demonstrate through problem solving or intuition which data structure or algorithm would be most appropriate to solve a particular problem. When you really get down to it, every problem consists of _some_ DS&A components, somewhere. The caveat, here, is when your software _does_ require deep knowledge of specific data structures. Even then, though, you will prefer a candidate that can learn on the job and work through an unfamiliar problem over one that has knowledge of the specific data structure but struggles with novel problems.

In technical interviews there are only a handful of qualifications that need to be tested:

1. Can the candidate code?
2. Can the candidate learn new technology?
3. Can the candidate problem solve effectively?

Let's inspect these, one by one, and then build an interview question to test all of them together.


