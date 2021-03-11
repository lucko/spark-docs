---
id: spark-vs-others
title: spark vs. others
---

## spark's CPU Profiler vs others

### WarmRoast

Whilst the CPU profiler in spark is based on WarmRoast, it has been improved over time and differs from upstream in the following ways:

* Installation and usage is significantly easier.
  * Access to the underlying server machine is not needed.
  * No need to expose/navigate to a temporary web server (open ports, disable firewall?, go to temp webpage)
* Profiling output can be quickly viewed & shared with others.
* Deobfuscation mappings can be applied without extra setup, and CraftBukkit and Fabric sources are supported in addition to MCP (Searge) names.
* Sampler & viewer components have both been significantly optimized.
  * Now able to sample at a higher rate & use less memory doing so
* Additional customisation options added.
  * Ability to filter output by "laggy ticks" only, group threads from thread pools together, etc
  * Ability to filter output to parts of the call tree containing specific methods or classes
* Sampling accuracy improved
  * The profiler groups by distinct methods, and not just by method name

### Minecraft Timings

Aikar's [timings](https://github.com/aikar/timings) system (built into Spigot and Sponge) is similar to spark in the sense that it also records data about server performance and presents this for analysis.

Timings can do the following things that spark does not:

* Count the number of times certain things (events, entity ticking, etc) occur within the recorded period
* Display output in a way that is more easily understandable by server admins unfamiliar with reading profiler data
* Break down server activity by "friendly" descriptions of the nature of the work being performed

If these things are important to you, then timings is likely a better option.

However, if they are less important, then spark has a few advantages:

* Each area of analysis does not need to be manually defined - spark will record data for everything.
  * For example, timings might identify that a certain listener in plugin x is taking up a lot of CPU time processing the PlayerMoveEvent, but it won't tell you which part of the processing is slow - spark will.
* For programmers interested in optimizing plugins or the server software (or server admins wishing to report issues), the spark output is usually more useful.
  * Timings is not detailed enough to give information about slow areas of code. 

### Other Java profilers

* spark (a sampling profiler) is typically less numerically accurate compared to other profiling methods (e.g. instrumentation), but allows the target program to run at near full speed.
  * In practice, sampling profilers can often provide a more accurate picture of the target program's execution than other approaches, as they are not as intrusive to the target program, and thus don't have as many side effects.
* With spark it is not necessary to inject a Java agent when starting the server.
* Easy to apply deobfuscation mappings.
* spark is more than good enough for the vast majority of performance issues likely to be encountered on Minecraft servers, but may fall short when analysing performance of code ahead of time (in other words before it becomes a bottleneck / issue).