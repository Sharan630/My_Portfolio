#!/bin/bash

echo "Building and deploying portfolio..."

# Clean up any previous builds
rm -rf dist

# Build the app
npm run build

# Verify build succeeded
if [ $? -ne 0 ]; then
  echo "Build failed. Aborting deployment."
  exit 1
fi

# Deploy to Vercel
echo "Deploying to Vercel..."
vercel --prod

echo "Deployment complete!" 