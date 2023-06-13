#Run on EC2 instance

cd /Localizator
npm install -g pm2
npm install
pm2 start server.js --name "Localizator"