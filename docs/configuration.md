---
id: Configuration
title: Configuration
---

spark has a limited set of configuration options. They are quite niche and most users will never need to change from the defaults!

To override the default configuration values, you can either:

* create a configuration **file**, `config.json`, in the spark plugin/mod folder (the config file is not automatically generated)
* set **environment variables**
* set a Java **system properties**


## Options
Below is a list of the available configuration settings.

---

### `backgroundProfiler`
If background profiling is enabled.

When true, spark will automatically start profiling in the background when the server/client/proxy starts up. The profile can be uploaded using the usual commands. The default value is `true`.

#### Example (config file)
```json
{
    "backgroundProfiler": true
}
```

#### Example (environment variable)
```shell
export SPARK_BACKGROUNDPROFILER=true
```

#### Example (system property)
```shell
java -Dspark.backgroundProfiler=true
```
---

### `backgroundProfilerInterval`
The interval that the background profiler should sample at. The default value is `10` (milliseconds).

#### Example (config file)
```json
{
    "backgroundProfilerInterval": 10
}
```

#### Example (environment variable)
```shell
export SPARK_BACKGROUNDPROFILERINTERVAL=10
```

#### Example (system property)
```shell
java -Dspark.backgroundProfilerInterval=10
```
---

### `backgroundProfilerEngine`
The engine that the background profiler should use.

The default value is `"async"`, but `"java"` is also supported.

#### Example (config file)
```json
{
    "backgroundProfilerEngine": "async"
}
```

#### Example (environment variable)
```shell
export SPARK_BACKGROUNDPROFILERENGINE=async
```

#### Example (system property)
```shell
java -Dspark.backgroundProfilerEngine=async
```
---

### `viewerUrl`
The URL used when providing a link to the viewer in command outputs.

The data "code" is appended after the URL, so it should always end with a `/`.

The default value is [`"https://spark.lucko.me/"`](https://spark.lucko.me/).

#### Example (config file)
```json
{
    "viewerUrl": "https://spark.lucko.me/"
}
```

#### Example (environment variable)
```shell
export SPARK_VIEWERURL=https://spark.lucko.me/
```

#### Example (system property)
```shell
java -Dspark.viewerUrl=https://spark.lucko.me/
```
---

### `bytebinUrl`
The URL for the bytebin instance which profiles & heap dump summaries should be uploaded to. The URL should end with a `/`.

The default value is `"https://spark-usercontent.lucko.me/"`.

#### Example (config file)
```json
{
    "bytebinUrl": "https://spark-usercontent.lucko.me/"
}
```

#### Example (environment variable)
```shell
export SPARK_BYTEBINURL=https://spark-usercontent.lucko.me/
```

#### Example (system property)
```shell
java -Dspark.bytebinUrl=https://spark-usercontent.lucko.me/
```
---

### `bytesocksHost`
The hostname for the bytesocks instance which should be used for communicating with the spark viewer.

The default value is `"spark-usersockets.lucko.me"`.

#### Example (config file)
```json
{
    "bytesocksHost": "spark-usersockets.lucko.me"
}
```

#### Example (environment variable)
```shell
export SPARK_BYTESOCKSHOST=spark-usersockets.lucko.me
```

#### Example (system property)
```shell
java -Dspark.bytesocksHost=spark-usersockets.lucko.me
```
---

### `overrideTpsCommand`
If spark should override the default TPS command with its own. This setting is only read when spark is running on a Bukkit server.

The default value is `true`.

#### Example (config file)
```json
{
    "overrideTpsCommand": true
}
```

#### Example (environment variable)
```shell
export SPARK_OVERRIDETPSCOMMAND=true
```

#### Example (system property)
```shell
java -Dspark.overrideTpsCommand=true
```
---

### `disableResponseBroadcast`
If spark shouldn't broadcast command output to all online administrators (players with the necessary permissions to use spark).

The default value is `false`.

#### Example (config file)
```json
{
    "disableResponseBroadcast": false
}
```

#### Example (environment variable)
```shell
export SPARK_DISABLERESPONSEBROADCAST=false
```

#### Example (system property)
```shell
java -Dspark.disableResponseBroadcast=false
```
---

### `maxStackDepth`
The max depth of stack frames recorded by the sampler. Any frames over this depth are discarded/ignored.

Setting to a modest figure ensures that excess data is not needlessly recorded and prevents stack overflow errors if downstream processes are reading the data via recursive method calls.

The default value is `300`.

:::note

This setting can only be configured using a system property.

:::

#### Example (system property)
```shell
java -Dspark.maxStackDepth=300
```
---

### `continuousProfilingHistorySize`
The number of windows to record in continuous profiling before data is dropped. Each window is approximately 1 minute.

The default value is `60`.

The official spark viewer does not accept uploads above 10MB in size, and setting this value above 60 is more likely to breach this limit. If you run into HTTP 413 errors, try reducing this value.

:::note

This setting can only be configured using a system property.

:::

#### Example (system property)
```shell
java -Dspark.continuousProfilingHistorySize=60
```
---

### `useOsTmpDir`
Whether to use the built-in operating system's temporary directory to store temporary spark files.

The default value is `false`.

| `useOsTmpDir` setting | OS      | Likely path                               |
|-----------------------|---------|-------------------------------------------|
| `true`                | Windows | `C:\Users\<username>\AppData\Local\Temp\` |
| `true`                | macOS   | `/var/folders/.../T/`                     |
| `true`                | Linux   | `/tmp/`                                   |
| `false`               | n/a     | `plugins/spark/tmp` (or similar)          |

:::note

This setting can only be configured using a system property.

:::

#### Example (system property)
```shell
java -Dspark.useOsTmpDir=true
```
---
