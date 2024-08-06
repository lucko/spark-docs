---
id: The-tick-loop
title: The Tick Loop
---

Nearly all video games (including Minecraft) are driven by one big program loop. The execution of the server (and the game) is broken down into "ticks".

Every time a "tick" happens, the game server will do a number of things, including:

* Process incoming packets from players (e.g. movement, place/break blocks, attacking other entities)
* Updating the position of players and other entities
* Send outgoing packets to all players about things happening on the server (block changes, entity movement and actions)
* Spawning wild mobs, processing mob AI, pathfinding, etc
* Processing redstone updates

and more!

## Ticks in Minecraft

The Minecraft server aims to run exactly **20 of these game "ticks" every second**, or in other words, **one tick every 50 milliseconds**.

![](../img/ticks-linear.png)

Of course, the amount of work required in each tick **varies**, depending on what's happening in the game, so ticks will in practice never be this regular!

### When the server is running normally

When the server runs normally, the time taken to execute a full tick should be less than (or equal to) 50 milliseconds. 

If the time taken for a tick is less than 50 milliseconds, the server will "sleep" for the remaining time, until it's ready to execute the next tick.

e.g.
* The server spends 15 milliseconds executing a tick
* The tick loop controller "sleeps" (does nothing) for 35 milliseconds, before starting the execution of the next tick.

![](../img/ticks-with-sleeping.png)

As you can see, all ticks in this example took less than 50 milliseconds, but they were spaced out to ensure that exactly 20 were processed in a second.

If the server didn't space the ticks out (sleep in-between), then the game would actually "feel" faster - everything would happen more quickly!

### When the server is lagging

If a tick takes longer than 50 milliseconds, the execution of the next tick has to be delayed, as ticks cannot execute in parallel. When this happens, the gameplay experience starts to deteriorate, as things become less responsive and "laggy".

![](../img/ticks-lagging.png)

As you can see, when individual ticks start taking longer, everything "shifts to the right", and less game ticks happen in the same amount of time. This is why when the server lags, everything happens more slowly.

You can also see where the **TPS** (ticks per second) and **MSPT** (milliseconds per tick) metrics come from.

In the example case shown above:

* spark would report the TPS as **17**, because only 17 ticks were processed in the second
* spark would report a minimum MSPT of **~20ms** (good!) but a maximum MSPT of **~80ms** (over 50ms, bad!)

## Ticks in spark profiles

You can clearly identify the tick loop in spark profiles, it's usually visible right near the top!

![](../img/ticks-in-profiler.png)

In the example above, we can see that `waitForNextTick()` accounts for 81% of the CPU activity on the "Server thread". This is healthy! It means that on average, the server was able to spend around 80% of the 50 milliseconds allocated for each tick doing absolutely nothing.

This is good because it indicates the server has spare capacity. If there is a spike in activity on the server (e.g. more players joining, more entities/blocks being updated), the server should be able to handle it.

Generally:

* A higher sleep percentage is good thing
* If you have less than 20% sleep (and therefore more than 80% tick), your server is working pretty hard, and might be lagging on *some* ticks (remember these values are averages!)
* If you have less than 5% sleep (and therefore more than 95% tick), your server is probably lagging, and has no spare capacity.

**One final note to remember: these values are averages!**

Hypothetically, your server could be spending only 20 milliseconds processing *most* ticks (healthy), but then occasionally spend 300 milliseconds processing *some* ticks. (not healthy!) This is what is probably happening if you're experiencing "lag spikes" as opposed to overall bad performance.

If this is the case, the percentages for "sleep" and "tick" are deceiving - as the extreme values are averaged out.
