# --- build_stack_rules_proto ---

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

# --- overrides ---

# Commit: 1c8afa18d5dd347f7b46fb74022673bc26d6a20d
# Date: 2021-10-30 01:16:13 +0000 UTC
# URL: https://github.com/stackb/rules_proto/commit/1c8afa18d5dd347f7b46fb74022673bc26d6a20d
#
# Add transitive support
# Size: 879406 (879 kB)
http_archive(
    name = "build_stack_rules_proto",
    sha256 = "565c8e9892aa4bdf1fc83342bd935c58b3e4daef56e2f1d8ed1633c78a93d8b3",
    strip_prefix = "rules_proto-1c8afa18d5dd347f7b46fb74022673bc26d6a20d",
    urls = ["https://github.com/stackb/rules_proto/archive/1c8afa18d5dd347f7b46fb74022673bc26d6a20d.tar.gz"],
)
# local_repository(
#     name = "build_stack_rules_proto",
#     path = "../rules_proto",
# )

http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "4501158976b9da216295ac65d872b1be51e3eeb805273e68c516d2eb36ae1fbb",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/4.4.1/rules_nodejs-4.4.1.tar.gz"],
)

register_toolchains("@build_stack_rules_proto//toolchain:standard")

# --- proto core ---

load("@build_stack_rules_proto//deps:core_deps.bzl", "core_deps")

core_deps()

load("@build_stack_rules_proto//deps:protobuf_core_deps.bzl", "protobuf_core_deps")

protobuf_core_deps()

# --- rules_go ---

load(
    "@io_bazel_rules_go//go:deps.bzl",
    "go_register_toolchains",
    "go_rules_dependencies",
)

go_rules_dependencies()

go_register_toolchains(version = "1.16.2")

# --- gazelle ---

load("@bazel_gazelle//:deps.bzl", "gazelle_dependencies")

gazelle_dependencies()

# --- gazelle extension dependencies ---

load("@build_stack_rules_proto//:go_deps.bzl", "gazelle_protobuf_extension_go_deps")

gazelle_protobuf_extension_go_deps()

# --- nodejs ---

load("@build_stack_rules_proto//deps:nodejs_deps.bzl", "nodejs_deps")

nodejs_deps()

# --- npm_ts_proto ---

load("@build_stack_rules_proto//deps:ts_proto_deps.bzl", "ts_proto_deps")

ts_proto_deps()

# --- nodejs ---

load("@build_bazel_rules_nodejs//:index.bzl", "node_repositories", "yarn_install")

node_repositories(
    package_json = ["//:package.json"],
)

yarn_install(
    name = "npm",
    frozen_lockfile = True,
    package_json = "//:package.json",
    yarn_lock = "//:yarn.lock",
)
