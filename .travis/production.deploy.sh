#!/bin/bash
set -e

aws configure list

echo "sync build dir ($TRAVIS_BUILD_DIR/build) to s3://www.skycoin.net ..."
aws s3 sync $TRAVIS_BUILD_DIR/build s3://www.skycoin.net --region ap-southeast-1 --delete --cache-control no-cache --acl public-read
echo "done."

echo "setting no cache for html files ..."
aws s3 cp s3://www.skycoin.net/index.html s3://www.skycoin.net/index.html --metadata-directive REPLACE --cache-control max-age=0,no-cache,no-store,must-revalidate --content-type text/html --acl public-read
aws s3 cp s3://www.skycoin.net/200.html s3://www.skycoin.net/200.html --metadata-directive REPLACE --cache-control max-age=0,no-cache,no-store,must-revalidate --content-type text/html --acl public-read
aws s3 cp s3://www.skycoin.net/buy/index.html s3://www.skycoin.net/buy/index.html --metadata-directive REPLACE --cache-control max-age=0,no-cache,no-store,must-revalidate --content-type text/html --acl public-read
aws s3 cp s3://www.skycoin.net/downloads/index.html s3://www.skycoin.net/downloads/index.html --metadata-directive REPLACE --cache-control max-age=0,no-cache,no-store,must-revalidate --content-type text/html --acl public-read
aws s3 cp s3://www.skycoin.net/ecosystem/index.html s3://www.skycoin.net/ecosystem/index.html --metadata-directive REPLACE --cache-control max-age=0,no-cache,no-store,must-revalidate --content-type text/html --acl public-read
aws s3 cp s3://www.skycoin.net/team/index.html s3://www.skycoin.net/team/index.html --metadata-directive REPLACE --cache-control max-age=0,no-cache,no-store,must-revalidate --content-type text/html --acl public-read
aws s3 cp s3://www.skycoin.net/whitepapers/index.html s3://www.skycoin.net/whitepapers/index.html --metadata-directive REPLACE --cache-control max-age=0,no-cache,no-store,must-revalidate --content-type text/html --acl public-read
echo "done."

