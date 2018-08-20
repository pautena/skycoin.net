#!/bin/bash
set -e

aws configure list

echo "sync build dir ($TRAVIS_BUILD_DIR/build) to s3://staging.skycoin.net ..."
aws s3 sync $TRAVIS_BUILD_DIR/build s3://staging.skycoin.net --region ap-southeast-1 --delete --cache-control max-age=604800 --acl public-read
echo "done."

echo "setting no cache for html files ..."
aws s3 cp s3://staging.skycoin.net/index.html s3://staging.skycoin.net/index.html --metadata-directive REPLACE --cache-control max-age=0,no-cache,no-store,must-revalidate --content-type text/html --acl public-read
aws s3 cp s3://staging.skycoin.net/200.html s3://staging.skycoin.net/200.html --metadata-directive REPLACE --cache-control max-age=0,no-cache,no-store,must-revalidate --content-type text/html --acl public-read
aws s3 cp s3://staging.skycoin.net/downloads/index.html s3://staging.skycoin.net/downloads/index.html --metadata-directive REPLACE --cache-control max-age=0,no-cache,no-store,must-revalidate --content-type text/html --acl public-read
aws s3 cp s3://staging.skycoin.net/ecosystem/index.html s3://staging.skycoin.net/ecosystem/index.html --metadata-directive REPLACE --cache-control max-age=0,no-cache,no-store,must-revalidate --content-type text/html --acl public-read
aws s3 cp s3://staging.skycoin.net/team/index.html s3://staging.skycoin.net/team/index.html --metadata-directive REPLACE --cache-control max-age=0,no-cache,no-store,must-revalidate --content-type text/html --acl public-read
aws s3 cp s3://staging.skycoin.net/skyminer/index.html s3://staging.skycoin.net/skyminer/index.html --metadata-directive REPLACE --cache-control max-age=0,no-cache,no-store,must-revalidate --content-type text/html --acl public-read
echo "done."
