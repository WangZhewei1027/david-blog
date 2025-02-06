## if anything goes wrong

try to run:

rm -rf node_modules package-lock.json .next .vscode
npm cache clean --force
npm install
npm run dev