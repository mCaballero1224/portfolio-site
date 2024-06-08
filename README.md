# Portfolio Site

This repository shows the code behind my website (domain name TBD). I wanted to put this up that way
anyone could copy the repository, change a few files and have their own website up and running. 
So, feel free to fork the repo and carve out your own chunk of the internet with your website!

## Technologies Used
- Node.js with the following modules/packages:
    - Express for the web server
    - Handlebars for templating
    - Mongoose for MongoDB integration
- MongoDB for blog database

## Services Used
- [VULTR](https://www.vultr.com/)for a VPS to host the site along with various services
- [NameCheap](https://www.namecheap.com) for domain names

NameCheap has DNS settings available for the domains you purchase, but if you're comfortable with something like Cloudfare, the process should be largely the same.

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

### Setting Up a New User 

The following comes largely from [this handy guide](https://medium.com/illumination/how-to-setup-a-vps-server-a-complete-guide-a3094f8e53f7) I found on Medium about setting up a new VPS.
Check it out if you'd like to go more in-depth on the subject.

Use the following command to create a new user:

`sudo adduser newusername`

To grant this user sudo priveliges:

`sudo usermod -aG sudo newusername`


To further modify access, you can edit the `/etc/sudoers` file via the following command:

`sudo visudo`

To use a specific editor, you can modify the command like so:

`sudo EDITOR=nvim visudo`

#### Disabling Root Login

Edit the file `/etc/ssh/sshd_config`. Locate the line with the text `PermitRootLogin yes`, and change `yes` to `no`. Doing this is for additional security, but not necessary.

#### Setting up Local SSH Settings

On your local machine (or wherever you're logging into your VPS from), edit the file `~/.ssh/config`, and enter the following lines:

```
Host *
    ServerAliveInterval 10
    ServerAliveCountMax 6

Host landchad
    Hostname (VPS ip address)
    User newusername
    LogLevel=error
```

Doing this allows you to log into your VPS from your local machine by entering this

`ssh landchad`

instead of this

`ssh newusername@(VPS ip address)`
