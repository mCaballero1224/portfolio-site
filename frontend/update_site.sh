#!/bin/bash

# Install dependencies
npm install

# Create build
npm run build

# Upload build files to webserver
scp -r ./dist/* root@mcaballero.dev:/var/www/mcaballero.dev/html
