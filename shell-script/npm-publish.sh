rm -rf dist/
tsc
cp ../package.json ../dist/package.json
cp ../README.md ../dist/README.md
npm publish ../dist