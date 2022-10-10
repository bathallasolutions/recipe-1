#! /bin/bash
sudo apt-get update
sudo apt-get install -y apache2
sudo systemctl start apache2
sudo systemctl enable apache2
echo "<h1>Test AWS</h1>" | sudo tee /var/www/html/index.html

sudo apt-get -y install git-core
git config --global user.name "Bathalla Solution"
git config --global user.email "bathallasolution@gmail.com"

sudo apt-get install docker.io
source /etc/bash_completion.d/docker.io
service docker.io status
service docker.io start