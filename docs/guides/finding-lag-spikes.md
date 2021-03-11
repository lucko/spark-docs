---
id: Finding-lag-spikes
title: Finding the cause of lag spikes
---

Lag spikes occur when a small number of ticks (or sometimes just one tick) takes a long time to execute.

This can either happen quite frequently, e.g. 1 in every 20 ticks, or rarely, e.g. once every minute. They're usually related to player behaviour.

Finding the cause of lag spikes just from looking at normal profiling data can be tricky, because the data is averaged. All of the other samples will "cancel out" the spike, and mask their impact.

Luckily, spark has two useful tools to workaround this.

### Step 1: identifying the spike threshold

In order to identify the cause of the lag spike in a profiling report, we need to be able to separate the "spike" tick from all of the others.

We can use the `/spark tickmonitoring` command to do this.

This command works by first establishing the average tick rate of the server, and then:

* Monitors the time taken for each subsequent tick
* Calculates the difference (as a percentage) between the time taken to execute the last tick and the average
* Sends a message in chat if the difference is over a certain threshold

By default, the threshold is 100% (a 100 percent increase means the tick took twice as long as average).

To enable the monitoring, just run `/spark tickmonitoring`

![](https://i.imgur.com/LWKFnYE.png)

Then, you just have to wait. If the spikes you're experiencing are noticeable in gameplay, then try to line up the effects on the spike in-game with the monitoring output.

If the output is just being constantly spammed, it's probably because a threshold of 100% is too low. If there are clear increase values that stick out, try tuning the command to only catch those.

e.g. `/spark tickmonitoring --threshold 200`

On the other hand, if the output isn't sensitive enough, try a lower threshold.

For the sake of explaining here, I'm going to "create" a lag spike using WorldEdit. :)

![](https://i.imgur.com/t4VVWPF.png)

As you can see, the ticks when the WorldEdit action was executing saw increases of 1000%!

### Step 2: running a profile only including ticks over a certain duration

The output shows that both actions took over 500 milliseconds to complete, but just to be sure they'll be included, I'll use a lower threshold of 400 milliseconds.

I can then run `/spark sampler --only-ticks-over 400` - this will start a new profiler, but will only include samples from ticks that took over 400ms to execute.

I then ran the same WorldEdit tasks again (to generate a lag spike), and stopped the profiler.

![](https://i.imgur.com/KHyRkia.png)

As you can see, the results of the profiler accurately trace the spike back to a WorldEdit command execution, and don't contain any data from the other ticks.
