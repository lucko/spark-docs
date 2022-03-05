---
id: TPS-and-MSPT
title: TPS and MSPT
---

The [`/spark tps`](../Command-Usage#spark-tps) command shows the server TPS (ticks per second) and MSPT (milliseconds per tick), but what do these values mean?

These two metrics are the primary way to see how the game is performing. They relate to [The Tick Loop](The-tick-loop): how many "ticks" are happening and how long they're taking on average.

## TPS (ticks per second)

The TPS (ticks per second) metric reports how many ticks *on average* are being processed by the game each second.

For a normal, lag free experience, the magic number is **20** ticks per second.

To achieve this, on average, each tick needs to last 50 milliseconds or less.

![](../img/ticks-lagging-breakdown.png)

In this example, some ticks took longer than 50 milliseconds, and only 16 ticks were completed within a second. If this continued on average, spark would report that the server was running at **16 TPS**.


## MSPT (milliseconds per tick)

The MSPT (milliseconds per tick) metric reports how many milliseconds *on average* is taken by the game to process each tick.

For a normal, lag free experience, the magic number is **50 or less** milliseconds per tick.

![](../img/ticks-lagging-breakdown.png)

Using the same example again, you can see how the duration of each tick varies.

The "fastest" tick took only 20 milliseconds, so spark would report this as the "min MSPT".
The "slowest" tick took 100 milliseconds, so spark would report this as the "max MSPT".

spark also calculates other values using this data: the median value and the 95th percentile.

#### As command output..

This what the numbers in the `/spark tps` command mean. 😎

![](../img/tps-and-mspt.png)

spark will automatically highlight the values *green*, *amber* or *red* depending on good/bad they reflect the server performance to be.