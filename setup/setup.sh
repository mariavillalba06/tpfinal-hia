#!/bin/bash
echo ******************************************************
echo Starting Replicaset
echo ******************************************************
# Sleep to wait for all mongo nodes to be ready
sleep 10 | echo Sleeping 
# Run script to initiate Replicaset
mongo mongodb://node1:27017 rsconf.js