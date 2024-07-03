cd /var/www
rm -rf web-radacam web-cms-qtmt web-next-zigbeelight .git
git clone https://github.com/minhnguyen389/ocp23.git
cp -a ocp23/* /var/www
rm -rf ocp23
sudo chmod -R 755 /var/www/*
