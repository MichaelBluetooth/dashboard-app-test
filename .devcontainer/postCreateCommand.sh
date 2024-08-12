#!/usr/bin/env bash

echo "Installing client and server dependencies"

cd "/workspaces/dashboard-app-test/dashboard-app-server"
npm install

cd "/workspaces/dashboard-app-test/dashboard-app-client"
npm install
