[Online App with 'Address Bar UI'](https://redirect-tracker.herokuapp.com/)
[![Known Vulnerabilities](https://snyk.io/test/github/mykelangelo/redirect-tracker/badge.svg?targetFile=package.json)](https://snyk.io/test/github/mykelangelo/redirect-tracker?targetFile=package.json)
[![Dependabot](https://api.dependabot.com/badges/status?host=github&repo=mykelangelo/redirect-tracker)](https://dependabot.com)
[![Uptime Robot status](https://img.shields.io/uptimerobot/status/m782778115-57149be7fcb265ad179ce587.svg)](https://stats.uptimerobot.com/LP5Q8CZZy)

## This Service 
- detects two types of redirects: 
  - by HTTP 3xx status and 
  - by HTML tag \<meta http-equiv="refresh" content="{url}">
- prevents redirection loops, 
- limits one redirection chain up to 20 entries,
- prints cookies acquired by visiting those urls and
- supports relative urls (first url must include protocol though)

#### Available Endpoints:
 - /track/{url} - track url redirecting
 - /pulse - see server status
 - /proxy - see list of provided proxies 

__PS:__ proxy will only be enabled for /track/ endpoint when you append `?proxy=` query and proxy code `XX` to the end.
Proxy allows to route service's traffic through remote server in selected region.
 
__Disclaimer:__ _although private proxy worked, current proxies are not stable/public - if you know where to get free reliable proxies, please contact me :)_


## How to use:
 - #### locally:    
    - install node.js (if you do not have it yet)
    - clone (or download and unpack) this repository
    - install dependencies if needed
    - open downloaded redirect-tracker directory in terminal
    - run `node src/main.js` in terminal
    - open browser
    - in address bar type `localhost/track/` and then append your `url` and press enter
 - #### online:
    - visit [https://redirect-tracker.herokuapp.com/](https://redirect-tracker.herokuapp.com/)
    - in address bar append `track/` after `.com/` and your `url` after it (and optionally add `?proxy=XX` as well)
    - hit enter and enjoy 😊
    - hint: consider visiting other endpoints (e.g. to get proxy code `XX` you must visit `proxy/`) 


## Example

##### Link with multiple redirects: 
- https://bit.ly/2HHkf2q (note, however, it might expire soon and no longer redirect)

##### Usage: 
- (locally) [localhost/https://bit.ly/2HHkf2q](localhost/https://bit.ly/2HHkf2q) or
- (online) [https://redirect-tracker.herokuapp.com/track/https://bit.ly/2HHkf2q](https://redirect-tracker.herokuapp.com/track/https://bit.ly/2HHkf2q)

