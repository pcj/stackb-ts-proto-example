# --- build_stack_rules_proto ---
# workspace(
#     name = "com_github_stackb_example",
#     managed_directories = {"@npm": ["node_modules"]},
# )

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

# Commit: cf3f47ea65021dc5b23b229e93be61dc191a7aba
# Date: 2021-10-29 17:29:58 +0000 UTC
# URL: https://github.com/stackb/rules_proto/commit/cf3f47ea65021dc5b23b229e93be61dc191a7aba
#
# Add yaml deps to gazelle_protobuf_extension_deps
# Size: 877744 (878 kB)
# http_archive(
#     name = "build_stack_rules_proto",
#     sha256 = "f46b8d3ce8708120ea0643a1211b57cb59c0da3e92302c68ee003dfa8acf6814",
#     strip_prefix = "rules_proto-cf3f47ea65021dc5b23b229e93be61dc191a7aba",
#     urls = ["https://github.com/stackb/rules_proto/archive/cf3f47ea65021dc5b23b229e93be61dc191a7aba.tar.gz"],
# )
local_repository(
    name = "build_stack_rules_proto",
    path = "../rules_proto",
)

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
