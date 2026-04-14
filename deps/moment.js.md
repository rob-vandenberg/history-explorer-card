# moment.js

## Links
https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.min.js
Website: http://momentjs.com/?
Source: https://github.com/moment/moment/

## Version
Version 2.18.1 [2017-03-21]
Latest: 2.30.1 [2023-12-27]

## Changes
Comparing to source at: https://raw.githubusercontent.com/moment/moment/2.18.1/moment.js
Only change is to register the moment library at `window.HXLocal_moment`, rather than `window.moment`
Makes sense, avoids overlaps with other versions of the moment library on the page.