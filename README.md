# Portfolio Site

This repository shows the code behind my website (domain name TBD). I wanted to put this up that way
anyone could copy the repository, change a few files and have their own website up and running. 
So, feel free to fork the repo and carve out your own chunk of the internet with your website!

## Technologies Used
- Node.js with the following modules/packages:
    - Express for the web server
    - Handlebars for templating

## Services Used
- VULTR for a VPS to host the site along with various services

## Setting up the VPS

I ended up going with a Shared CPU instance running Debian with 1 core, 2GB of RAM, and 55GB of 
storage. All that with no add-ons is set to cost me about $10/month. Not too bad, honestly. I 
nabbed a few domains from [NameCheap](https://namecheap.com). I got multiple so that I could choose 
from the lot a later date.


### Logging into your VPS

After purchasing your VPS instance, you should have an IP address (IPv4 and IPv6) to use to login 
to your machine. The following command will prompt you to enter in the password associated with 
your instance. Since it's a fresh machine, you'll be logging in as the root user.

`ssh root@(ip address here)`

NOTE: Add an image here to show VULTR dashboard for VPS info

### Updating Packages

After logging into your  the following commands (assuming you're also running Debian) to update/upgrade packages

To update packages:

`sudo apt update`

To upgrade packages: 

`sudo apt upgrade`

### Creating a new User 

The following comes largely from [this handy guide](https://medium.com/illumination/how-to-setup-a-vps-server-a-complete-guide-a3094f8e53f7) I found on Medium about setting up a new VPS.
Check it out if you'd like to go more in-depth on the subject.



