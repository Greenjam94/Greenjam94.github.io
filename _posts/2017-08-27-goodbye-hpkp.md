---
layout: post
title: Do Not Waste Your Time With HPKP
---

This is my last post related to HTTP Public Key Pinning (HPKP). This is a post in response to Scott Helme's latest post about [him giving up on HPKP](https://scotthelme.co.uk/im-giving-up-on-hpkp/) and how my previous blog was a perfect example of his concerns.

In the past I've written three articles about the HPKP header:
* Testing HPKP headers
* Adding HPKP headers
* HPKP.. Public Key Pinning?

The point of each of these articles are pretty well summed up in their titles. For work, I was tasked with learning about HPKP and of course I made blog posts as I tired out the new header.

# Starting with HPKP
While learning about HPKP, Helme's posts were a great resource for me. Thanks to him, I was able to understand the process well enough to get some tests up online using this domain.

Everything worked fine until I had to renew my LetsEncrypt SSL certificate. Renewing caused the public key pin to not match the certificate and blocked all users who visited my blog with a browser that supported HPKP.

# Running into issues
In [Helme's post](https://scotthelme.co.uk/im-giving-up-on-hpkp/), my issue is part of the "bad hygiene" that is warned against. HPKP requires that the best practices are used to key certificates up to date as well as the pins. Using LetsEncrypt certbot to auto-renew my domain's certificate is not the best way to do this, since I can't keep track of the pins, I was unable to properly support the header.

In order to "resolve" the issue, I had to strip the header from my site and ask all effected clients to forget my domain from their browser's saved history that remembered my old pin.

# Conclusion
It is at this point that I agree with Helme's conclusion that "One of the biggest concerns I have with HPKP right now is sites trying to use it and getting it wrong". Especially that my blog is one of the sites that proves how easy it is to get wrong! It's because of this difficulty and the massive impact a bad certificate/pin combination has on end users that I agree HPKP is not worth implementing.

Please go and read Helme's post if HPKP is something you deal with or if you're starting to look into it as well!
