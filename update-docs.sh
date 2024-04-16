#!/bin/bash

cd vendor/composer/composer
git checkout -q main
git fetch -q origin
git rebase -q origin/main > /dev/null
git pull -q origin main
cd ../../..
