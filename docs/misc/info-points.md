---
id: Info-points
title: Info points
---

spark "info points" are extra snippets of information which display alongside well-known/notable call frames in the spark viewer (when the user hovers over the **ⓘ** icon).

![](../img/viewer-infopoint.png)

The descriptions are open-source (can be quite easily edited/changed/improved by the community!), so if you notice anything that looks incorrect or think there is a thread/method call that deserves an extra description, please consider contributing it! :sunglasses:

## Contributing

The descriptions are managed in a set of simple-ish YAML files in the **[lucko/spark-infopoints](https://github.com/lucko/spark-infopoints)** GitHub repository.

They are divided into separate files based on what they relate to, although the file name is only used to keep things organised within the repo, and doesn't matter other than that.

You can either clone the repo locally and make changes, or just use the GitHub web-based text editor. :)

### Method description format

A description for a method looks like this:

```yaml
- method: net.minecraft.network.protocol.PlayerConnectionUtils.run()
  description: >
    Manages player (client) connections to the server, in particular the processing of incoming
    packets (actions performed by players).
```

* The `method` key should contain the method name as it is displayed in the spark viewer (after any mappings have been applied).
* The `description` key should contain the description that is to be rendered in the viewer, formatted in Markdown.


### Thread description format

A description for a method looks like this:

```yaml
- thread: Server thread
  description: >
    The main server thread that the game loop is executed on. See the
    [Tick Loop guide](https://spark.lucko.me/docs/guides/The-tick-loop) for more info.
```

* The `thread` key should contain the thread name as it is displayed in the spark viewer.
* The `description` key should contain the description that is to be rendered in the viewer, formatted in Markdown.

### Multiple methods/threads with the same description

If multiple methods or threads should have the same description, these can be easily grouped together by using a plural key and specifying a list instead:

```yaml
- methods:
  - net.minecraft.server.MinecraftServer.waitUntilNextTick()
  - net.minecraft.server.IAsyncTaskHandler.sleepForTick()
  description: >
    todo
```

```yaml
- threads:
  - Server thread
  - Main thread
  description: >
    todo
```

### Regex match

The `method`/`thread` keys usually expect an exact match. However, it is also possible to use a regular expression by surrounding the desired pattern with `/`s.

```yaml
- thread: /^Craft Scheduler Thread.*$/
  description: >
    todo
```
