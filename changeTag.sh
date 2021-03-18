#! /bin/bash

sed 's/tagVersion/$1/g' deployment-apiserver.yaml > deployment-config.k8s.yaml