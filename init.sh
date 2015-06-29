#!/bin/bash
clear
echo -e "552525\n" | sudo -S iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3000
clear
export DEBUG=blogDev ; PORT=3000 ; nodemon bin/www

