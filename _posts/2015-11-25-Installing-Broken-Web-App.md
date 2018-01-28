---
layout: post
title: Installing the Broken Web App (BWA) project
---

OWASP BWA is a safe place to practice some fun stuff and is basically a collection of applications to test everything security related. OWASP has a few projects like [Web Goat](https://www.owasp.org/index.php/Category:OWASP_WebGoat_Project), [Security Shepard](https://www.google.com/url?sa=t&amp;rct=j&amp;q=&amp;esrc=s&amp;source=web&amp;cd=1&amp;cad=rja&amp;uact=8&amp;ved=0ahUKEwjahuXB9qzJAhWLWz4KHTK8BAkQFggeMAA&amp;url=https%3A%2F%2Fwww.owasp.org%2Findex.php%2FOWASP_Security_Shepherd&amp;usg=AFQjCNE0sMNklObG9hzlM-XvL4Px7cuBwQ&amp;sig2=T5MMUedyANa9-jYNSmKTFw), and more. [Broken Web Apps](https://www.owasp.org/index.php/OWASP_Broken_Web_Applications_Project) is a collection of these guides and some outdated apps to test your developing skills.

# Install All The Things!
In order to set things up, it's important to have everything you need installed. While you don't need Kali to execute some web exploits,  it is useful because of all the tools at your disposal. You do however need VirtualBox or VMware player to host the VM. If you haven't set up a VM before, I suggest you use the VirtualBox and the .osa files. The rest of the guide will assume you want to use VirtualBox.

* Virtualization app: [VirtualBox](https://www.virtualbox.org/wiki/Downloads)
* Target virtual machine: [OWASP BWA](http://sourceforge.net/projects/owaspbwa/files/1.2/OWASP_Broken_Web_Apps_VM_1.2.ova/download)
* Attacker virtual machine: [Kali linux](https://images.offensive-security.com/virtual-images/Kali-Linux-2017.1-vbox-amd64.ova)

# Get the VMs imported
Run VirtualBox, and click File > Import Application. You will choose the .ova files that you just downloaded from the links above. The default settings that come from the app should appear and you can click ok.

After you start a new Virtual Machine, you'll want to check and make sure it you can access it from either your Kali VM or your actual machine. To do this you can set up either a NAT network or a Host-only Adapter for the VM. I choose to do Host-only but either will work as long as you configure it correctly. Go to File > Preferences. On the left sidebar click Network. There you'll see tabs for NAT and Host-only. Pick one, ether should work. If you don't see an available network, there will be three buttons on the right, click the one with the + icon. That will add a new network for your VM to use. Hit OK to go back to the main page of the app.

Go to your VM's setting by clicking to select it, then hit the big settings button above it. Go to Networks, then select the network type you just made and be sure the network is correct then hit ok for everything.

# Start up BWA
Run the VM! This should go without a hitch, the VM should start up in a new window, as it does it should display a lot of lines as it's starting but once it's ready to log in you can use the user: <strong>root</strong> and passwd: <strong>owaspbwa</strong>. This is the default user and password for all the administrative accounts across the VM. As you log in, the entrance text should say what the IP address is for the VM. On your actual machine, open a web browser and try to go to that site by typing the ip address into the URL, like [http://192.XXX.XXX.XXX](#)

To make it easier for future use, you can edit the hosts file on your main computer to accept a url instead of an IP address. On linux or a mac, open a terminal and write `sudo nano /etc/hosts` and add the following line:
```
192.XXX.XXX.XXX        owaspbwa.com
```
The URL can be whatever you want if you don't like owaspbwa.com. Change the IP Address in the browser and replace it with the new url. If that doesn't work, try restarting the browser and try again.
