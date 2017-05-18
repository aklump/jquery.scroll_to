#!/bin/bash
#
# @file
# Copy distribution files to /dist
#
# YOU MUST USE 00_clean_slate.sh before this
#

# Allow time for all CodeKit to minify.
while [ ! -f "$7/jquery.scroll_to.min.js" ]; do
  sleep 1
done

test -h "$7/dist" && rm "$7/dist"
test -d "$7/dist" || mkdir -p "$7/dist"

test -e "$7/README.md" && cp "$7/README.md" "$7/dist/"
test -e "$7/CHANGELOG.md" && cp "$7/CHANGELOG.md" "$7/dist/"
cp "$7/jquery.scroll_to.js" "$7/dist/"
cp "$7/jquery.scroll_to.min.js" "$7/dist/"
