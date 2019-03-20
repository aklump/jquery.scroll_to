<?php

/**
 * @file
 * Load a source file, replace tokens and save to dist folder.
 */

namespace AKlump\WebPackage;

$build
  ->loadFile('jquery.scroll_to.js')
  ->replaceTokens()
  ->saveToDist()
  ->minifyFile('dist/jquery.scroll_to.js')
  ->addFilesToScm([
    "dist/jquery.scroll_to.js",
    "dist/jquery.scroll_to.min.js",
  ])
  ->displayMessages();
