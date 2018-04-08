#!/bin/bash
set -e

aws configure list

echo "sync build dir ($TRAVIS_BUILD_DIR/build) to s3://staging2.skycoin.net ..."
aws s3 sync $TRAVIS_BUILD_DIR/build s3://staging2.skycoin.net --region ap-southeast-1 --delete --cache-control no-cache --acl public-read
echo "done."
