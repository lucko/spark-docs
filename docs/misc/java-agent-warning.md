---
id: Java-agent-warning
title: Java agent warning
---

Starting in Java 21, you may see the following warning printed to the console/logs when using spark:


> WARNING: A Java agent has been loaded dynamically (/tmp/byteBuddyAgentxxxxxxxxxxxxxxxxxxx.jar)   
> WARNING: If a serviceability tool is in use, please run with -XX:+EnableDynamicAgentLoading to hide this warning   
> WARNING: If a serviceability tool is not in use, please run with -Djdk.instrument.traceUsage for more information   
> WARNING: Dynamic loading of agents will be disallowed by default in a future release   


### Why does spark use a Java agent?

spark uses the Java Instrumentation API to find metadata about Java classes loaded in the JVM (see [`ClassFinder.java`](https://github.com/lucko/spark/blob/master/spark-common/src/main/java/me/lucko/spark/common/util/ClassFinder.java)).

In order to access the instrumentation API, spark uses the [byte-buddy-agent](https://github.com/raphw/byte-buddy) library, which in dynamically loads a Java Agent to gain access to the Instrumentation API.

### I am using Java 21, what should I do?

spark will gracefully fallback to using a different (albeit less effective method) to lookup classes if the intrumentation agent is not available or fails to load.

For this reason, it is recommended that Java 21 users ignore the error, or follow the instructions below to explitly enable dynamic agent loading.


### I am using Java 22, what should I do?

You have two options:

#### 1. Re-enable dynamic agent loading
This will revert to the previous JVM behaviour and spark will function as normal.

To do this, you need to add the following to your java startup flags:

```
-XX:+EnableDynamicAgentLoading
```

#### 2. Do nothing
As noted above, spark will still work if the agent cannot be installed.
