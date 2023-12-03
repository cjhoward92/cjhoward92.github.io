---
layout: post
title:  Don't cut quality
date:   2023-12-03 12:00:00
description: "Reduce scope but don't take shortcuts."
categories: craftsmanship
tags: quality programming
---

Lately, I have been thinking a lot about development process bottlenecks for my teams. Most software developers have heard of agile development, or heard the saying "Move fast and break things." In essence, these ideas mean "get something in the hands of customer quickly." There are a variety of ways to reduce software development time, but generally speaking, the only _real_ way is to reduce the amount of work needed for a release. Once we all agree that we need to reduce the total amount of work we can begin the process of determining what work to cut from our release. Unfortunately, I often see younger engineers allow the _wrong_ work to be cut - typically for reasons seemingly outside of their control.

What work is the wrong work to cut? Simple - anything related to your software's quality. What, exactly, does "anything related to your software's quality" mean, though? The answer is "it depends" but from my experience here are a few items that sometimes get tossed until later (or never):

1. Metrics, alarms, and a corresponding operational dashboard
2. Unit tests and other types of test
3. Documentation, like operational process documentation or technical decision documentation
4. Refining the deployment process to make it fast and consistent
5. Refining the development process to make the software easy to setup and test
6. Refactoring code that has evolved poorly since the beginning of the project
7. Anything else that "doesn't add value to the bottom line" or speed up delivery, really

Typically, the items I listed above are cut because of time pressure from management and _not_ from lazy or ineffective developers. The onus ultimately lies on the development team to educate management (or the relevant stakeholders) as to why cutting these things is not good for the project. Here is a scenario:

> A junior engineer ran into some issues implementing some new UI. It took them a little longer than they hoped so the UI they are responsible for is now behind by a week. The manager is feeling pressure from their manager, and passing that pressure down to the engineer. The manager askes the engineer how they can reduce the time to delivery, so the engineer says "Well, if I don't write the selenium tests, or add the metrics for render latency I can save 2 days." The manager says to test manually and add the rest later. The engineer agrees. Later, however, is the next sprint, and the engineer is already behind, so decides to just pick up the next tasks, filing away the tests and metrics into the backlog. The cycle continues for one reason or another, and suddenly there are few (if any) tests or metrics.

This is a simple example, maybe even a trivial one, but it happens _all of the time_ in reality. Now extrapolate this example out to other deliverables - say the CI/CD pipeline responsible for deploying the code on each commit that's pushed to the main git branch. The pipeline works - it deploys code to production - but adding automated tests, monitors, rollback alarms, and other quality safeguards are cut to "save time." Again, this happens _all of the time_.

What are the engineers to do? Management doesn't care about these missing quality safeguards since they seemingly don't offer immediate value. Instinctually, engineers may understand why this is not true but it can be hard to communicate why to management.

Let's take the testing example further: how do we convince managers that we cannot skip testing (you might argue that a good manager would understand why tests are important, and I agree, but we don't live in a world where that always matters so we as engineers must take ownership over our deliverables). Tests, specifically automated tests, are great for many reasons. They help prevent regressions in existing code, they help you ensure your new code actually works as expected, and they can help you identify code that's difficult to extend or consume prompting higher quality refactors. Just think about regressions: you release a component and it works fine for months but then some other component changes breaking something obscure in your component. It takes your junior engineer hours to debug and diagnose, another few hours to write a fix and add tests, and then you need to hope you didn't accidentally break something else as test coverage is still spotty. If you would have spent the original few hours writing tests with the feature you could have theoretically saved the time to debug and fix the issue assuming the tests caught the regression before it was released.

That scenario is simple and obviously we can never _guarantee_ we will prevent all regressions just by adding tests. We aren't in a universe where we can guarantee much, though, so we do our best to mitigate risk. If you add the time spent fixing regressions on code that doesn't have tests it's quite probable you would find that adding tests in the past would have saved you time in the present. This same line of thinking applies to pretty much everything I listed above: no metrics or alarming? You don't have a way to tell if your application works. No operational process documentation? Engineers need to re-learn how to handle issues as they present themselves.

I guess the moral of the story is: we shouldn't cut anything from our development process now that could cause us to pay more in the future. Any good leader, manager, or engineer will understand that there is always a probability of failure, so we should do our best to protect against as much of the failure as we can imagine. My adivce for those that do struggle with the scenarios I mentioned above would be to have a frank conversation with your manager/leader about the costs of cutting quality. Come up with some scenarios (or better yet, real examples) of when these costs presented themselves. Better yet, if you can quantify real costs you'll likely have an easier time getting what you need from leadership.