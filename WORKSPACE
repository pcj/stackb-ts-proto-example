load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

# --- build_stack_rules_proto ---

# Commit: df8f82e4fb806e07362aa37f7eb23b2e18cca5ae
# Date: 2021-10-29 16:18:29 +0000 UTC
# URL: https://github.com/stackb/rules_proto/commit/df8f82e4fb806e07362aa37f7eb23b2e18cca5ae
#
# Update README; use canonical labels
# Size: 877766 (878 kB)
http_archive(
    name = "build_stack_rules_proto",
    sha256 = "e707173400a15982ccc1147ea58ef81f65d414e5c33b45b505110b53d4d23a76",
    strip_prefix = "rules_proto-df8f82e4fb806e07362aa37f7eb23b2e18cca5ae",
    urls = ["https://github.com/stackb/rules_proto/archive/df8f82e4fb806e07362aa37f7eb23b2e18cca5ae.tar.gz"],
)

# local_repository(
#     name = "build_stack_rules_proto",
#     path = "../rules_proto",
# )

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

# --- nodejs ---

load("@build_stack_rules_proto//deps:nodejs_deps.bzl", "nodejs_deps")

nodejs_deps()

# --- npm_ts_proto ---

load("@build_stack_rules_proto//deps:ts_proto_deps.bzl", "ts_proto_deps")

ts_proto_deps()
