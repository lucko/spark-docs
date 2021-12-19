---
id: Using-async-profiler
title: Using async-profiler engine
---

spark has two profiler engines:

* Java (based on WarmRoast)
* async-profiler



The async-profiler engine is more accurate than the Java/WarmRoast engine, as it does not suffer from the safe-point sampling bias problem. It will be used automatically if your system supports it.



## System requirements

The async-profiler engine mode is only supported for systems with a **Linux** operating system using **x86_64** architecture. (most dedicated servers, VPSes and shared hosting servers will use this!)

However you may need to perform some extra steps to get things to work correctly.

If you used a "shared" Minecraft specific host for your server, you may need to ask them to perform these steps for you.



### Install libstdc++
async-profiler depends on libstdc++. You may need to install it manually for async-profiler to function correctly.

async-profiler may try to warn you that you need to do this by printing the following message in the console:

> java.lang.UnsatisfiedLinkError: /tmp/spark-xxxx-libasyncProfiler.so.tmp: Error loading shared library libstdc++.so.6: No such file or directory (needed by /tmp/spark-xxxx-libasyncProfiler.so.tmp)


To install libstdc++ on Debian/Ubuntu, run:

```bash
apt-get install libstdc++6
```

If you are using an Alpine based Java Docker image, add the following to your Dockerfile:

```docker
RUN apk add --no-cache libstdc++
```


### Install debug symbols

If you are using an OpenJDK (not Oracle) install of Java, you may need to install debug symbols to get async-profiler to work correctly.

To install the OpenJDK debug symbols on Debian/Ubuntu, run:

```bash
apt-get install openjdk-8-dbg  # for Java 8
apt-get install openjdk-11-dbg  # for Java 11
```

async-profiler may try to warn you that you need to do this by printing the following message in the console:

> [WARN] Install JVM debug symbols to improve profile accuracy



### Allow access to kernel perf-events call stack capturing

As of Linux 4.6, capturing kernel call stacks (async-profiler does this!) from a non-root process requires setting two runtime variables. You may also need to do this if you are running your server inside a container (e.g. Docker).

The variables can be set using the `sysctl` command as follows:

```bash
sysctl kernel.perf_event_paranoid=1
sysctl kernel.kptr_restrict=0
```

async-profiler may try to warn you that you need to do this by printing the following message in the console:

> [WARN] Kernel symbols are unavailable due to restrictions. Try ...



### Enabling non-safepoint debug metadata

You may also need to include the `-XX:+DebugNonSafepoints` flag in your server start script to allow async-profiler to retrieve the necessary metadata from the JVM to complete sampling.

Just add/merge the following two flags into your run script:

```
java -XX:+UnlockDiagnosticVMOptions -XX:+DebugNonSafepoints -jar server.jar
```

