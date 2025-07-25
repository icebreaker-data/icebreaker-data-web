---
title: Icebreaker Concepts
description: Important concepts to help you understand and appreciate Icebreaker data lakehouse.
---

The best way to understand Icebreaker is to think of it as a **serverless SQL service** that you run in your enterprise accounts. 
Specifically, the enterprise data team manages Icebreaker for the **private benefit of your internal or external customers**.

Icebreaker's private serverless SQL experience is first made possible by an extremely **lightweight query engine**, which then makes it possible to run every query in its own isolated container, or pod. This is **query isolation**.

Once the query becomes the unit of execution, it is also the unit of efficiency, which **is ideal for rightsizing**.
Since each query runs in its own pod, instances don't have to be scoped and sized for full workloads and peak demand. 
The query isolation model supports **massive concurrency**, limited not by technology, but by optional budgets and usage limits that you define. 
Isolated query execution is also **inherently private and secure**, dramatically reducing the infrastructure and technical expertise required to produce multi-tenant data products.

You can choose to keep instances in warm stand-by mode for performance reasons. For lower-priority jobs, the best way to eliminate the costs of idle resources is to use "just-in-time" **ephemeral compute**. Larger (expensive) compute instances will spin up, but only when a query requires it. Smaller queries run on spare capacity or smaller instances.

These and other AI-driven automations are similar to the controls that hyperscalers use to **run profitable data cloud businesses**.
Considering managing supply and demand is where hyperscalers make their money, our thinking is that this is **where the opportunity lies** for data teams to do more -- much more -- with less.

The key concepts and principles behind Icebreaker are:

- **Ubiquity**: Data is everywhere and it is useful; make it easy for people and agents to use
- **Query Isolation:** The query -- not the cluster or warehouse -- is the ideal unit of efficiency
- **Demand Shaping**: Demand can be dynamically "shaped" to achieve different goals, with peaks and valleys smoothed over in real-time
- **Resource Management**: Capacity is always available, but performance can vary based on business priorities
- **BYOC (Bring Your Own Compute | Cloud)**: Customers get the best price / performance when they can use their own discounted compute or spot instances
- **Centralized Control**: Economies of scale and ease-of-compliance come from centralized control 
- **Shared Accountability**: Everyone shares accountability for usage costs