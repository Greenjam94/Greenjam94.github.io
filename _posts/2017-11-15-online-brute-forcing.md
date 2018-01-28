---
layout: post
title: Online Brute Forcing 101
---

A close friend once mentioned how cool it'd be to practice brute forcing for a website login. I created a simple web page with a login form. Incorrect logins display a red error message while successful logins show the rest of the web page. There's no database or complex code behind the webpage. It simply hashes the user input and compares it to a stored value.

Before we continue, I must make it blatantly obvious that *hacking any online service without consent could land you in a lot of trouble*. For your safety, do not hack any systems outside of your personal domain or online labs / tutorials that give consent. If you're reading this blog post.

There is a couple tools that will help with brute forcing an online form. Two tools that I will demonstrate in this post is Burp suite's intruder module and Hydra. Both tools are available on Kali linux.

# Burp Suite
Burp suite is a proxy from [Portswigger](https://portswigger.net/). On the left hand side of the application, you can see all the files being called. What we care about are the files from the target site in particular. Hidden files are can be caught by the proxy or spider. Every POST attempt to login will be recorded.

Right click a POST request and click "Send to Intruder" or highlight it and press CTRL+I. This will take you to the Intruder module. Go to the positions tab. We do not want to change the user value, so remove that. The page should look like the following.

Next go to the payloads tab. Either paste the values in from a wordlist text file or upload the entire file if you saved a local copy.

Click the "start attack" button in the upper right corner. The attempts should go by quickly, even if using the free version of Burp suite. On some site, the error messages are not returned as HTTP codes, every response is 200 (OK). Our saving grace is that the successful login shows more content, so the size is larger.

# Hydra
Hydra is a command line tool that can make quick work of many kinds of brute force attempts. However the syntax can be a little confusing. Below is the command to use in order to bruteforce a login form. You'll also have to save the passwords file locally before trying this. The domain won't be active so be sure to use another target.

`hydra -l 'iAm' -P wordlist.txt www.greenjam94.me https-post-form -I "/login.php:name=^USER^&pswd=^PASS^:Incorrect password"`

I will break down the options used above.
* -l username value, (a lowercase L)
* -P password file, uppercase options are used for files with multiple values to attempt
* www.greenjam94.me domain, the next requirement is the domain to attack
* https-post-form form type, this is the kind of form you're targeting a full list is provided in the man pages (manual)
* -I a option to prevent trying to load restore files on multiple attempts to run hydra
* "1:2:3" form parameters separated by a colon,
  * 1 is the file after the domain which always starts with a "/"
  * 2 is the input names and values. ^USER^ and ^PASS^ must be used
  * 3 is an expected error message, it doesn't have to be the complete message. (Don't use colons unless escaped)

After finding the correct password, I suggest typing in the password manually and visiting the successful web page.

Know of any other good tools for online brute forcing? Let me know on twitter. I hope you found this post to be helpful.
