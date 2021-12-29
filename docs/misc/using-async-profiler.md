---
id: Using-async-profiler
title: Using async-profiler engine
---

spark has two profiler engines:

* Java (based on WarmRoast)
* async-profiler



The async-profiler engine is more accurate than the Java/WarmRoast engine, as it does not suffer from the safe-point sampling bias problem. It will be used automatically if your system supports it.



## System Requirements

The async-profiler engine mode is only supported for systems with a **Linux** operating system using **x86_64** architecture.

The good news is, most dedicated servers, VPSes and shared hosting servers use this!



## Containers

If you are running your server inside a container (e.g. using Pterodactyl Panel), you may need to tweak some things for the async-profiler engine to work correctly.

Give it a try first, and if you run into errors, try the steps listed below.


### Install libstdc++
async-profiler depends on libstdc++. You may need to install it manually if it is not already present in the image.

The following error indicates this problem:

> java.lang.UnsatisfiedLinkError: /tmp/spark-xxxx-libasyncProfiler.so.tmp: Error loading shared library libstdc++.so.6: No such file or directory (needed by /tmp/spark-xxxx-libasyncProfiler.so.tmp)

To install libstdc++ on Alpine, run:

```bash
apk add libstdc++
```

To install libstdc++ on Debian/Ubuntu, run:

```bash
apt-get install libstdc++6
```

If you are using an Alpine-based Java Docker image, add the following to your Dockerfile:

```docker
RUN apk add --no-cache libstdc++
```

If you are using an Debian-based Java Docker image, add the following to your Dockerfile:

```docker
RUN apt-get install libstdc++6
```


### Allow access to kernel perf-events

async-profiler will automatically use the "itimer" mode to profile if it cannot access perf-events. This is the case for most Docker runtimes, as access to these events is restricted by default.

For the vast majority of users, this is absolutely fine, however, if you want to record profiling information for native code, you'll need to set the following flag when starting the container to ensure that async-profiler has access.

```bash
docker run --cap-add SYS_ADMIN ...
```
