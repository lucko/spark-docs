---
id: The-tick-loop
title: The tick loop
---

Nearly all video games (including Minecraft) are driven by one big program loop. The execution of the server (and the game) is broken down into "ticks".

Every time a "tick" happens, the game server will do a number of things, including:

* Process incoming packets from players (e.g. movement, place/break blocks, attacking other entities)
* Updating the position of players and other entities
* Send outgoing packets to all players about things happening on the server (block changes, entity movement and actions)
* Spawning wild mobs, processing mob AI, pathfinding, etc
* Processing redstone updates

and more!

The Minecraft server aims to run exactly **20 of these "ticks" every second**, or in other words, **one tick every 50 milliseconds**.


### When the server is running normally

When the server runs normally, the time taken to execute a full tick should be less than (or equal to) 50 milliseconds. 

If the time taken for a tick is less than 50 milliseconds, the server will "sleep" for the remaining time, until it's ready to execute the next tick.

e.g.
* The server spends 15 milliseconds executing a tick
* The tick loop controller "sleeps" (does nothing) for 35 milliseconds, before starting the execution of the next tick.

### When the server is lagging

If a tick takes longer than 50 milliseconds, the execution of the next tick has to be delayed, as ticks cannot execute in parallel. When this happens, the gameplay experience starts to deteriorate, as things become less responsive and "laggy".

### What this looks like in a profiling report

![](https://i.imgur.com/SUWxGqP.png)

In the example above, we can see that `java.lang.Thread.sleep()` accounts for 72% of the CPU activity on the "Server thread". This is healthy! It means that on average, the server was able to spend around 70% of the 50 milliseconds allocated for each tick doing absolutely nothing.

This is good because it indicates the server has spare capacity. If there is a spike in activity on the server (e.g. more players joining, more entities/blocks being updated), the server should be able to handle it.

Generally:

* A higher sleep percentage is good thing
* If you have less than 20% sleep (and therefore more than 80% tick), your server is working pretty hard, and might be lagging on *some* ticks (remember these values are averages!)
* If you have less than 5% sleep (and therefore more than 95% tick), your server is probably lagging, and has no spare capacity.

### One final note to remember: these values are averages!

Hypothetically, your server could be spending only 20 milliseconds processing *most* ticks (healthy), but then occasionally spend 300 milliseconds processing *some* ticks. (not healthy!) This is what is probably happening if you're experiencing "lag spikes" as opposed to overall bad performance.

If this is the case, the percentages for "sleep" and "tick" are deceiving - as the extreme values are averaged out.
