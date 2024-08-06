---
id: Raw-spark-data
title: Raw spark data
---

Occasionally people ask how to get their hands on raw spark data, usually to create cool bots or fancy tools to do fun things with spark's data. This page explains how you can do just that. :sunglasses:

## JSON

Let's say you have a spark viewer URL: `https://spark.lucko.me/abc123`

The simplest way to obtain the raw metadata for this session is to append the `?raw=1` query string to the end of the URL, and send off an HTTP request:

```http
GET https://spark.lucko.me/abc123?raw=1
```

You should get some JSON back that looks like:

```json
{
  "type": "sampler",
  "metadata": {
    "user": {
      "type": 1,
      "name": "Luck",
      "uniqueId": "c1d60c50-70b5-4722-8057-87767557e50d"
    },
    "startTime": 1678186955567
    // and so on
}
```

You can also do [JSONPath](https://github.com/json-path/JsonPath) filtering by appending `&path=some.jsonpath.here`. e.g.

```http
GET https://spark.lucko.me/abc123?raw=1&path=metadata.platform
```

```json
{
  "type": 0,
  "name": "Bukkit",
  "version": "git-Paper-386 (MC: 1.19.3)",
  "minecraftVersion": "1.19.3",
  "sparkVersion": 2
}
```
<br />

:::note

By default, these endpoints only return the **metadata** associated with the session. This should be sufficient for most use-cases.

If you really-really want the actual sampler/heapdump data too, firstly, please consider downloading/parsing the **raw** data yourself. It saves resources at my end! (see below for info)

If this isn't feasible, you can also append `&full=true` to the URL and get **everything** back, but be warned, this can potentially return tens of **megabytes** of JSON!

:::

## Raw data

The storage service used by spark is called [bytebin](https://github.com/lucko/bytebin).   
The specific instance used by spark is: https://spark-usercontent.lucko.me/

To obtain the raw data for a given profile (e.g. `https://spark.lucko.me/abc123`), send an HTTP GET request to the user content endpoint:

```http
GET https://spark-usercontent.lucko.me/abc123
```

If successful, you should receive a response similar to this:
```http
HTTP/2 200
Content-Type: application/x-spark-sampler
Last-Modified: Tue, 07 Mar 2023 13:16:44 GMT
Cache-Control: public, max-age=604800, no-transform, immutable

<body>
```

There are currently three content types used by spark:
* `application/x-spark-sampler` - sampler data
* `application/x-spark-heap` - heap data
* `application/x-spark-health` - health report

You should then use the sampler or heap schema to parse the raw data, depending on what one you get back.


### Protobuf format

The raw data transferred between the spark "client" (the plugin/mod) and the spark viewer is encoded using a format called [protobuf](https://protobuf.dev/) (or Protocol Buffers). In order to parse the data, you'll need the protobuf schemas.

There are two versions of the schema (although they can both parse the same data):
* spark (Java) schema: https://github.com/lucko/spark/tree/master/spark-common/src/main/proto/spark
* spark-viewer (TypeScript) schema: https://github.com/lucko/spark-viewer/tree/master/proto

### Example code

Here is a simple CLI tool written with Node.js which illustrates how the raw data can be parsed: https://github.com/lucko/spark2json

(this is actually the code that powers the JSON endpoint above :stuck_out_tongue:)
