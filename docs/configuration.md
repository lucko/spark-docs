---
id: Configuration
title: Configuration
---

spark has a limited set of configuration options. Most users will never need to change from the defaults. For this reason, the configuration file is not automatically generated.

To change options from their default settings, you need to create the configuration file. The file is named `config.json`, and should be placed inside the spark folder.

## Options
Below is a list of the available configuration settings.

### `backgroundProfiler`
If background profiling is enabled.

When true, spark will automatically start profiling in the background when the server/client/proxy starts up. The profile can be uploaded using the usual commands. The default value is `true`.

#### Example
```json
{
    "backgroundProfiler": true
}
```

### `backgroundProfilerInterval`
The interval that the background profiler should sample at. The default value is `10` (milliseconds).

#### Example
```json
{
    "backgroundProfilerInterval": 10
}
```

### `backgroundProfilerEngine`
The engine that the background profiler should use.

The default value is `"async"`, but `"java"` is also supported.

#### Example
```json
{
    "backgroundProfilerEngine": "async"
}
```

### `viewerUrl`
The URL used when providing a link to the viewer in command outputs.

The data "code" is appended after the URL, so it should always end with a `/`.

The default value is [`"https://spark.lucko.me/"`](https://spark.lucko.me/).

#### Example
```json
{
    "viewerUrl": "https://spark.lucko.me/"
}
```

### `bytebinUrl`
The URL for the bytebin instance which profiles & heap dump summaries should be uploaded to. The URL should end with a `/`.

The default value is `"https://spark-usercontent.lucko.me/"`.

#### Example
```json
{
    "bytebinUrl": "https://spark-usercontent.lucko.me/"
}
```

### `bytesocksUrl`
The hostname for the bytesocks instance which should be used for communicating with the spark viewer.

The default value is `"spark-usersockets.lucko.me"`.

#### Example
```json
{
    "bytesocksUrl": "spark-usersockets.lucko.me"
}
```

### `overrideTpsCommand`
If spark should override the default TPS command with its own. This setting is only read when spark is running on a Bukkit server.

The default value is `true`.

#### Example
```json
{
    "overrideTpsCommand": true
}
```

### `disableResponseBroadcast`
If spark shouldn't broadcast command output to all online administrators (players with the necessary permissions to use spark).

The default value is `false`.

#### Example
```json
{
    "disableResponseBroadcast": false
}
```
