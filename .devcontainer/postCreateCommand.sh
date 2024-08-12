#!/usr/bin/env bash

echo "Installing client and server dependencies"
echo $containerWorkspaceFolder

cd "${containerWorkspaceFolder}/dashboard-app-server"
npm install

cd "${containerWorkspaceFolder}/dashboard-app-client"
npm install

