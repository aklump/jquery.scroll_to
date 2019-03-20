#!/usr/bin/env bash
#
# @file
# Remove generated files before all other build steps
#

# Remove the minified files so we ensure they get rebuilt
test -e "$7/jquery.scroll_to.min.js" && rm "$7/jquery.scroll_to.min.js"

# Remove the dist folder
wp_rm dist
