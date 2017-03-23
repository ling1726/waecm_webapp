#!/usr/bin/env bash
service mysql start && sleep 15



mysqladmin --user=root --password=rootpw create waecm

echo "GRANT ALL PRIVILEGES ON waecm.* To 'waecmuser'@'localhost' IDENTIFIED BY 'waecmpassword';" | mysql -u root --password=rootpw

su web

