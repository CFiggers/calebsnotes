#!/bin/bash
# Script to build a new version of the public site, push it to GitHub

yarn build && rm -rf ../calebs-notes-static/public && cp -r public ../calebs-notes-static && cd ../calebs-notes-static
