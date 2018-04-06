#!/bin/bash
set -e

aws configure list

echo "sync build dir ($TRAVIS_BUILD_DIR/build) to s3 bucket ..."
aws s3 sync $TRAVIS_BUILD_DIR/build s3://staging2.skycoin.net --region ap-southeast-1 --delete --cache-control no-cache --acl public-read
echo "done."

echo "setting no cache for index.html ..."
aws s3 cp s3://staging2.skycoin.net/index.html s3://staging2.skycoin.net/index.html --metadata-directive REPLACE --cache-control max-age=0,no-cache,no-store,must-revalidate --content-type text/html --acl public-read
echo "done."

