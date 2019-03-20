#!/bin/bash
#
# @file
# Copy distribution files to /dist
#
# YOU MUST USE 00_clean_slate.sh before this
#


test -e "$7/README.md" && cp "$7/README.md" "$7/dist/"
test -e "$7/CHANGELOG.md" && cp "$7/CHANGELOG.md" "$7/dist/"
