# stackb-ts-proto-example

Minimal example of using the [stackb/rules_proto
v2_prerelease](https://github.com/stackb/rules_proto/tree/v2_prerelease) with
the [stephenh/ts-proto](https://github.com/stephenh/ts-proto) plugin.

# Usage 

```bash
$ bazel build //proto:thing_ts_proto_compile
```

To regenerate or update the BUILD file:

```bash
$ rm proto/BUILD.bazel # not needed to update it, but to demonstrate that it can be created from scratch
$ bazel run //:gazelle
```