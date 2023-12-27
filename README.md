[![Online API](https://img.shields.io/badge/online-API-blue.svg)](https://redirect-tracker.herokuapp.com/)
[![Known Vulnerabilities](https://snyk.io/test/github/mykelangelo/redirect-tracker/badge.svg?targetFile=package.json)](https://snyk.io/test/github/mykelangelo/redirect-tracker?targetFile=package.json)
[![Uptime Robot status](https://img.shields.io/uptimerobot/status/m782778115-57149be7fcb265ad179ce587.svg)](https://stats.uptimerobot.com/LP5Q8CZZy)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fmykelangelo%2Fredirect-tracker.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fmykelangelo%2Fredirect-tracker?ref=badge_shield)
[![Awesome Badges](https://img.shields.io/badge/badges-awesome-violet.svg)](https://github.com/Naereen/badges)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-goldenrod.svg?style=shield)](http://makeapullrequest.com)

## Contributions are welcome here!
Please, [check issues page](https://github.com/mykelangelo/redirect-tracker/issues)!

Current to-do-list:
- [x] add UI (made by the magnificent https://github.com/jsoneclick)
- [x] connect UI with the backend
- [ ] make proxies work
- [ ] redeploy to heroku or smth else
- [ ] add some tests for the main logic

Feel free to edit this Readme as you contribute and change the scope of work and/or the behaviour of the application!

## This Service 
- detects two types of redirects: 
  - by HTTP 3xx status and 
  - by HTML tag \<meta http-equiv="refresh" content="{url}">
- prevents redirection loops, 
- limits one redirection chain up to 20 entries,
- prints cookies acquired by visiting those urls and
- supports relative urls (first url must include protocol though)
- supports routing through proxies (redirection can depend on location)

#### Available Endpoints:
 - /track/{url} - track url redirecting
 - /pulse - see server status
 - /proxies - see list of provided proxies 
 - /gui - Graphical User Interface

__PS:__ proxy will only be enabled for /track/ endpoint when you append `?proxy=` query and proxy code `XX` to the end.
Proxy allows to route service's traffic through remote server in selected region.

## How to use:
 - #### locally:    
    - install node.js (if you do not have it yet)
    - clone (or download and unpack) this repository
   - open downloaded redirect-tracker directory in terminal
    - install dependencies if needed (run either `npm install` or `npm update`)
    - run `node src/main.js` in terminal
    - open browser
    - in address bar type `localhost/track/` (use http, not https) and then append your `url` and press enter
 - #### online:
    - visit -broken link, need to redeploy- [https://redirect-tracker.herokuapp.com/](https://redirect-tracker.herokuapp.com/)
    - in address bar append `track/` after `.com/` and your `url` after it (and optionally add `?proxy=XX` as well)
    - hit enter and enjoy 😊
    - hint: consider visiting other endpoints (e.g. to get proxy code `XX` you must visit `proxies/`) 


## Example

##### Link with multiple redirects: 
- https://bit.ly/2HHkf2q (note, however, it might expire soon and no longer redirect)

##### Usage: 
- (locally) [localhost/https://bit.ly/2HHkf2q](localhost/https://bit.ly/2HHkf2q) or
- (online) [https://redirect-tracker.herokuapp.com/track/https://bit.ly/2HHkf2q](https://redirect-tracker.herokuapp.com/track/https://bit.ly/2HHkf2q)

## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fmykelangelo%2Fredirect-tracker.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fmykelangelo%2Fredirect-tracker?ref=badge_large)
