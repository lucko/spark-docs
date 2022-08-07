---
id: About-spark-metrics
title: About spark metrics
---

spark is able to report and calculate a number of different metrics.

In all cases, the source data for the metrics comes from elsewhere. If something seems wrong, it is likely because the raw data spark receives is incorrect.

| Metric Name         | Data Source                                             |
| --------------------|---------------------------------------------------------|
| TPS                 | Server event (via spark's `TickHook` interface)         |
| MSPT                | Server event (via spark's `TickReporter` interface)     |
| CPU Usage           | Java API ([jdk.management/OperatingSystemMXBean](https://docs.oracle.com/en/java/javase/17/docs/api/jdk.management/com/sun/management/OperatingSystemMXBean.html)) |
| Memory Usage        | Java API ([jdk.management/OperatingSystemMXBean](https://docs.oracle.com/en/java/javase/17/docs/api/jdk.management/com/sun/management/OperatingSystemMXBean.html)) & `/proc/meminfo` (Linux only) |
| Disk Usage          | Java API ([java.base/FileStore](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/nio/file/FileStore.html)) |
| GC                  | Java API ([jdk.management/GarbageCollectorMXBean](https://docs.oracle.com/en/java/javase/17/docs/api/jdk.management/com/sun/management/GarbageCollectorMXBean.html)) |
| Network Usage       | `/proc/net/dev` (Linux only)                            |
| Player Ping         | Server API (via spark's `PlayerPingProvider` interface) |
| CPU Name            | `/proc/cpuinfo` on Linux, `wmic cpu` on Windows         |
| OS name and version | `/etc/os-release` on Linux, `wmic os` on Windows        |

### Containers and Docker
Occasionally, we see some metrics (mostly CPU/Memory Usage) being misreported when the server (and by extension spark) is running inside a container (Pterodactyl, etc). 

There's not much spark can do about this. As you can see above, spark just uses the standard Java and OS APIs to obtain raw metrics data. If it's not accurate, then this is either a problem with your setup or a Java/Docker/OS bug.
