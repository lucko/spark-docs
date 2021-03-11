---
id: Command-Usage
title: Command Usage
---

Note that `/sparkb`, `/sparkv`, and `/sparkc` must be used instead of `/spark` on BungeeCord, Velocity and Forge/Fabric client installations respectively. 

___
### `/spark profiler`
The `profiler` subcommand is used to control the spark CPU profiler.

Requires the permission `spark` or `spark.profiler`.

For basic operation, run:
* `/spark profiler` to start the profiler in the default operation mode.
* `/spark profiler --stop` to stop the profiler and view the results.
* `/spark profiler --info` to check the current status of the profiler.

There are a number of flags which can be used to customize the behaviour of the profiler.

You can use:
* `/spark profiler --interval <milliseconds>` to start the profiler and sample at the given interval (default is 4)
* `/spark profiler --thread *` to start the profiler and track all threads.
* `/spark profiler --thread <thread name>` to start the profiler and only track specific threads.
* `/spark profiler --only-ticks-over <milliseconds>` to start the profiler, but only record samples from ticks which take longer than the given duration.
* `/spark profiler --timeout <seconds>` to start the profiler and automatically stop it after x seconds
* `/spark profiler --regex --thread <thread name pattern>` to start the profiler and only track threads matching the given regex.
* `/spark profiler --combine-all` to start the profiler but combine all threads under one root node.
* `/spark profiler --not-combined` to start the profiler but disable grouping threads from a thread pool together.
* `/spark profiler --force-java-sampler` to start the profiler and force usage of the Java sampler, instead of the async one.
* `/spark profiler --stop --comment <comment>` to stop the profiler and include the specified comment in the viewer.
* `/spark profiler --stop --order-by-time` to stop the profiler and order the threads in the viewer by time instead of alphabetically.
* `/spark profiler --stop --separate-parent-calls` to stop the profiler and separate calls in the viewer if they were invoked by a different parent method. (*deprecated*)
* `/spark profiler --ignore-sleeping` to start the profiler but ignore sleeping threads. (*deprecated*)
* `/spark profiler --ignore-native` to start the profiler but ignore sleeping threads. (*deprecated*)

___
### `/spark tps`
The `tps` subcommand prints information about the servers TPS (ticks per second) rate and CPU usage.

Requires the permission `spark` or `spark.tps`.

___
### `/spark healthreport`
The `healthreport` subcommand generates a health report for the server, including TPS, CPU, Memory and Disk Usage.

Requires the permission `spark` or `spark.healthreport`.

You can use:
* `/spark healthreport --memory <milliseconds>` to include additional information about the JVMs memory usage

___
### `/spark tickmonitor`
The `tickmonitor` subcommand controls the tick monitoring system.

Requires the permission `spark` or `spark.tickmonitor`.

Simply running the command without any extra flags will toggle the system on and off.

You can use:
* `/spark tickmonitor --threshold <percent>` to start the tick monitor, only reporting ticks which exceed a percentage increase from the average tick duration.
* `/spark tickmonitor --threshold-tick <milliseconds>` to start the tick monitor, only reporting ticks which exceed the given duration in milliseconds.
* `/spark tickmonitor --without-gc` to start the tick monitor, and disable reports about GC activity.

___
### `/spark gc`
The `gc` subcommand prints information about the servers GC (garbage collection) history.

Requires the permission `spark` or `spark.gc`.

___
### `/spark gcmonitor`
The `gcmonitor` subcommand controls the GC (garbage collection) monitoring system.

Requires the permission `spark` or `spark.gcmonitor`.

Simply running the command will toggle the system on and off.

___
### `/spark heapsummary`
The `heapsummary` subcommand generates a new memory (heap) dump summary and upload it to the viewer.

Requires the permission `spark` or `spark.heapsummary`.

You can use:
* `/spark heapsummary --run-gc-before` to suggest that the JVM runs the garbage collector before the heap summary is generated. (*deprecated*)

___
### `/spark heapdump`
The `heapdump` subcommand generates a new heapdump (.hprof snapshot) file and saves to the disk.

Requires the permission `spark` or `spark.heapdump`.

You can use:
* `/spark heapdump --compress <type>` to specify that the heapdump should be compressed using the given type. The supported types are gzip, xz and lzma.
* `/spark heapdump --include-non-live` to specify that "non-live" objects (objects that are not reachable and are eligible for garbage collection) should be included. (*deprecated*)
* `/spark heapdump --run-gc-before` to suggest that the JVM runs the garbage collector before the heap dump is generated. (*deprecated*)

___
### `/spark activity`
The `activity` subcommand prints information about recent activity performed by spark.

Requires the permission `spark` or `spark.activity`.

You can use:
* `/spark activity --page <page no>` to view a specific page.