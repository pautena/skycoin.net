#!/bin/bash
set -e

aws s3 sync $TRAVIS_BUILD_DIR/build s3://staging2.skycoin.net --region ap-southeast-1 --delete --cache-control no-cache
aws s3 cp s3://staging2.skycoin.net/index.html s3://staging2.skycoin.net/index.html --metadata-directive REPLACE --cache-control max-age=0,no-cache,no-store,must-revalidate --content-type text/html --acl public-read
