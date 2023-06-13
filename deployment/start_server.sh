#Run on EC2 instance

cd /Localizator
sudo npm install -g pm2
sudo npm install
pm2 start server.js --name "Localizator"