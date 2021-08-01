---
id: Using-the-viewer
title: Using the viewer
---

Once you have created a profile using the [`/spark profiler`](Command-Usage#spark-profiler) command, your profile will be automatically uploaded to the viewer and you will be presented with a link.

You can freely share this link with other people, send it to someone helping you or to a plugin developer to point out a problem!



### Interpret the profiler tree

When you first open the viewer, you will be presented with a list of the **threads** which were profiled.

In the case of Minecraft *servers*, the thread we are usually most interested in is the "Server thread". You can think of a thread just like an isolated unit of work within the client/server/whatever.

![](img/viewer-tree-thread.png)

Threads (at the root/top of the profile) will always show `100%` next to them - this is because 100 percent of the time spent profiling the thread was, well, spent within that thread.

When you **hover** over a node, the time the sampler predicted was spent executing it during the profile will be shown to thr right.

You can **click** on a node to view its **children**. These will be expanded out below it.

![](img/viewer-tree-expand.png)

When expanding "Server thread" in this example program:

* the only child is `java.lang.Thread.run()` - this is just the server thread entry point, we can ignore it.
* the only child of *that* is `MinecraftServer.run()` - ok great! This is the entry point to the Minecraft server.
* the two children of *that* are `MinecraftServer.tick()` and `Thread.sleep()`.

As explained in the [tick loop guide](guides/The-tick-loop), any time spent sleeping (or with a thread "parked") is healthy! We can probably ignore that.

However, `MinecraftServer.tick()` is where the work happens. We can click to expand further.

![](img/viewer-tree-expand-again.png)

At this stage, we can see distinct parts of the server executing and showing up in our profile.

Some key things we can see already:

* `WorldServer.doTick()` - probably "ticking" the world - blocks, redstone etc?
* `WorldServer.tickEntities()` - probably "ticking" entities - seems like a safe guess!
* `CraftScheduler.mainThreadHeartbeat()` - this is executing plugin tasks
* ..and so on - you can usually make a good guess about what's going on!

Of course, if you don't know what the method name refers to, or if more detail is needed (it usually is): you can expand the nodes more.

#### How to find the cause of a performance problem

Now you know how to navigate the tree, the trick to finding "problematic" areas is to just follow the numbers - specifically, the **percentages** shown **next to each node**.

These percentages indicate how much time was spent in that area.

So, if you keep expanding the tree, following which areas have *relatively* high percents - you will eventually find the problem - hopefully!

An example of this process is demonstrated in the [Finding lag spikes guide](guides/Finding-lag-spikes).

### Using the sources (per-plugin or per-mod) view

If you specifically want to look for badly performing plugins or mods, the **sources** view may be useful.

Click on the `👁️` view button in the top menu bar to switch view modes. In the sources view, a separate profiler tree will be shown for each plugin/mod. The tree is filtered and at the top level, shows all outgoing calls made by the source.

### Apply deobfuscation mappings

The Minecraft client/server obfuscates ("scrambles, makes hard to interpret") all method and class names. This is obviously a slight problem when trying to find out what is causing a performance issue!

Luckily, the viewer can apply deobfuscation mappings ("unscramble") the names for us.

By default, **the viewer will automatically detect which mappings to apply**. However, if this doesn't work, you may need to select the correct mappings manually.

You can do this using the **dropdown menu** in the **top right** of the page.

![](img/viewer-deobf.png)

### Bookmark a method call

When analysing your profile, you may come across a noteworthy method call which you want to save to refer back to later or to show to someone else.

The easiest way to do this is to "bookmark" the method.

You can do this by holding down the `alt` key and clicking on the method call.

You can also **right-click** on the method call, then select "**Toggle bookmark**".

![](img/viewer-bookmark.png)

You will notice the method will become highlighted red.

Additionally, a special query parameter will be added to the URL in your browser window to "encode" the bookmark. If you **share** this modified link with someone else, when they open the viewer your bookmarked methods will be highlighted and automatically expanded for them too!

### View as a flame graph

Flame graphs have become a popular way to interpret profiler output.

The viewer makes it easy to view your profile (or a subsection of it) as a flame graph. To open the flame view, just **right-click** on a thread/method call, then select "**View as Flame Graph**".

![](img/viewer-flame-open.png)

This will open the flame view.

![](img/viewer-flame.png)

The **width** of each node in this view **corresponds** to the portion of time spent executing it.

You can **click** on a node to "**focus**" it, and expand it to fill the full width of the page. The child nodes beneath it will expand accordingly.

You can **hover** over a node to view the full method name & profiled time.

To **exit** the flame view and go back to the profiler tree, just click the "**Exit Flame View**" button in the **top right** of the page.

![](img/viewer-flame-exit.png)

