#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

echo 'Hello'
npm run test:unit
npm run test:unit:component