#! /bin/bash

cd dist
aws s3 rm s3://sclaret.com --recursive
aws s3 cp . s3://sclaret.com --recursive --acl public-read
