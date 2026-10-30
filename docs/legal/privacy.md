---
id: Privacy
title: Privacy Policy
---

_Last updated: 29 October 2026_

This policy explains how data is handled when you upload content using the spark plugin/mod (the "**client**") to the spark user content service (the "**storage service**") and view it using the spark viewer at [spark.lucko.me](https://spark.lucko.me/) (the "**viewer**"). The live-viewing relay (the "**relay service**") relays message payloads between the client and viewer. Together these are referred to as the "**service**".

In this policy, "we", "us" and "our" refer to the operator of the service, [lucko](https://github.com/lucko).

:::info

spark never uploads anything automatically. Data is uploaded only when a user runs a command that explicitly does so (for example `/spark profiler open`, `/spark health upload` or `/spark heapsummary`). Results can instead be saved locally using `--save-to-file`.

:::

## 1. What is uploaded

Depending on the command used, an upload ("**user content**") may contain:

* **Profiler data**: sampled stack traces (thread names, class names, method names, line numbers and timings), the profiler's settings (e.g. sampling interval, thread filters, start/end time), and optionally tick, CPU, TPS and MSPT statistics over time. If you supply a **comment** when starting a profile, it is included.
* **Heap summaries**: a histogram of Java class names with instance counts and sizes. Heap summaries do not include the contents of objects.
* **Health reports**: TPS/MSPT, CPU, memory, garbage collection, disk, network throughput and ping statistics over time.
* **Platform and system information**: the platform type, name, version and Minecraft version; operating system name, version and architecture; CPU model and thread count; Java vendor, version and **JVM startup arguments**; physical/swap memory and disk usage totals; and uptime.
* **Plugin and mod information**: the name, version, author and description of each installed plugin or mod.
* **Server configuration**: the contents of a fixed set of server configuration files (such as `server.properties` and, on Bukkit-based servers, files like `bukkit.yml`, `spigot.yml` and the Paper/Purpur/Pufferfish configuration files), plus any additional files the server administrator has configured. spark removes values known to be sensitive before upload, including the server IP, MOTD, resource pack, RCON settings, world and feature seeds, proxy secrets and database settings. This filtering only covers known settings, so other values (including those in custom or additional configuration files) may be included.
* **Game information**: game rules, data packs, and whether the server runs in online or offline mode.
* **World statistics**: the number of entities by type, per world, region and chunk (including chunk coordinates), and counts of loaded chunks, tile entities and online players.
* **Creator information**: the **name and UUID of the user who ran the command** (or "console"/other where it was run by a non-player).

spark does not intentionally collect passwords, chat messages, player inventories, or the names, UUIDs or IP addresses of players other than the person who created the upload. However, some fields can contain free text or arbitrary configuration (such as comments, JVM arguments, plugin descriptions and server configuration values), and thread, class and plugin names may reveal details about your setup. **Please review what you upload, and only share content you are comfortable making available to anyone who has the link.** The data format is documented on the [Raw spark data](../misc/Raw-spark-data) page.

The client also identifies itself as spark when uploading. This is used to apply the retention rules described below.

#### Live viewing

If you use the spark viewer's live mode, the client connects to a WebSocket relay service operated by us and sends a subset of the above data (such as updated statistics and a reference to the latest uploaded profile) to the connected viewer in real time, signed using a cryptographic key pair. The relay processes messages in transit to deliver them and does not permanently store them. Associated content uploaded to the storage service is retained for a short period only, as set out in [section 6](#6-retention).

## 2. Visibility of uploads

Each upload is assigned a randomly generated identifier, which forms part of its link. Uploads are not listed or publicly indexed by us, but **anyone who has the link can view and download the content**.

## 3. How we use the data

User content is processed only to:

* store it and make it available to people who have the link, via the viewer and the raw data endpoint;
* relay live-view messages between the client and the connected viewer;
* operate, secure, maintain and improve the service (including preventing abuse and diagnosing faults); and
* produce aggregate, non-identifying statistics about use of the service.

We do not sell user content, use it for advertising, or use it to build profiles of individuals. We do not share it with third parties other than the service providers described below, who process it on our behalf.

## 4. Other data we process

* **Request logs.** When you use the storage service, live relay or viewer, our servers and hosting providers may record technical information such as your IP address, user agent, the URL requested, content size and timestamps. This is used for security, rate-limiting, abuse prevention, and debugging. The relay processes live messages in transit to deliver them but does not permanently store them.
* **Analytics.** The viewer and documentation use a privacy-focused, cookie-less analytics tool to measure aggregate page views. It does not use cookies or build personal profiles.
* **Caching.** Content may be cached briefly by the storage service and by content delivery networks and your browser to improve performance.

## 5. Service providers and international transfers

We use third-party service providers to operate the service. They process data only on our behalf, and only for the purposes described in this policy. The categories of provider are:

* **Server hosting:** for the storage service and real-time relay, including stored uploads and request logs. Our servers are located in Germany.
* **Object storage:** for larger or longer-lived uploads. This storage is located in the Netherlands.
* **Content delivery, DNS and security:** requests to the service (including your IP address and uploaded content in transit) pass through a global content delivery and DDoS protection network.
* **Website hosting:** for the web apps, viewer and documentation.

Some of these providers operate globally, so your data (including your IP address and any content you upload or view) may be processed in countries outside your own, including the United States. Where UK GDPR or EU GDPR applies, we rely on appropriate safeguards for these transfers, such as an adequacy decision, data privacy framework certification or standard contractual clauses. You can contact us (see [section 15](#15-contact)) for more information about the providers we use.

## 6. Retention

Uploaded content stored by the storage service is kept for a limited time and then automatically and permanently deleted. At the time of writing:

| Type of upload                                                           | Retention |
| ------------------------------------------------------------------------ | --------- |
| Profiles, heap summaries and health reports uploaded by the spark client | 90 days   |
| Temporary content uploaded to the storage service for the live viewer    | 1 hour    |

Live-view messages relayed by the WebSocket service are processed in transit and are not permanently stored.

Individual uploads may not exceed 10 MB. These periods and limits may change, and are not a guarantee. **The service is not intended for permanent storage**; if you need to keep a copy, use `--save-to-file` or download the [raw data](../misc/Raw-spark-data).

Request logs are kept only for as long as reasonably necessary for the purposes in [section 4](#4-other-data-we-process).

We cannot retrieve or delete copies that have already been downloaded, cached or shared by others.

## 7. Legal basis (UK/EEA users)

Where the UK GDPR or EU GDPR applies, we process personal data on the basis of our **legitimate interests** in operating, securing and maintaining a performance-diagnostics service, and, in the case of content you choose to upload, to provide the service you have requested. We consider that this processing is proportionate and has minimal impact on your privacy.

## 8. Your rights

Depending on where you live, you may have the right to request access to, correction of, or deletion of personal data we hold about you; to object to or request restriction of processing; and to complain to your local data protection authority.

To request removal of an upload, please contact us using the details in [section 15](#15-contact). We may need to verify that you are entitled to make the request. Because uploads are identified only by their link, we may be unable to locate content without it.

## 9. Your responsibilities

If you upload content containing information about other people or your community (such as your own name or UUID, or details of your server's configuration and plugins), you are responsible for ensuring you have a lawful basis to share it, and that doing so complies with applicable laws and the privacy expectations of your community. Do not upload content that you do not have the right to share or that is unlawful.

## 10. Security

We take reasonable technical and organisational measures to protect the service, including encrypted connections (HTTPS) and rate-limiting. However, no system is completely secure, and because anyone with a link can access an upload, we cannot guarantee the confidentiality of user content.

## 11. Children

The service is not directed at children under 13 (or the minimum age required in your country), and we do not knowingly collect personal information from them. If you believe a child has uploaded personal data, please contact us so that it can be removed.

## 12. Self-hosting and third-party instances

The viewer and storage URLs used by the client can be changed in the [configuration](../Configuration). If you use a self-hosted or third-party instance, **that instance's operator, not us, is responsible for your data**, and this policy does not apply to it.

## 13. Disclaimers

The service is provided free of charge, "as is" and "as available", without warranties of any kind, express or implied, including availability, durability or fitness for a particular purpose. We do not guarantee that uploads will remain available for any period of time. To the fullest extent permitted by law, we are not liable for any loss or damage arising from your use of the service, loss of uploaded content, or the disclosure of content via a link you have shared. Nothing in this policy excludes liability that cannot be excluded by law.

spark is free and open source software. The source code of the client and viewer is available at [github.com/lucko/spark](https://github.com/lucko/spark) and [github.com/lucko/spark-viewer](https://github.com/lucko/spark-viewer).

## 14. Changes to this policy

We may update this policy from time to time. The date at the top of this page shows when it was last changed, and the full history is available in the [spark-docs repository](https://github.com/lucko/spark-docs). Continued use of the service after a change means you accept the updated policy.

## 15. Contact

For questions about this policy, [contact lucko](https://lucko.me/contact). For removal requests, include the upload link; requests without it may not be actionable. See [section 8](#8-your-rights) for details.