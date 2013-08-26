/*

Copyright 2013 Linus Unnebäck, http://linusu.se
Copyright 2011 Luke D Hagan, http://lukehagan.com

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/

(function () {

    // Options
    var opts = {
        violence: 4.0,     // single shake sensitivity
        hf: 0.2,           // high-pass filter constant
        shakethreshold: 5, // number of single shakes required to fire a shake event
        debounce: 1000     // delay between shake events (in ms)
    };

    // Initialize internal variables
    var axa = 0, aya = 0, aza = 0;
    var shakeaccum = 0;
    var prevtime = new Date();
    var cooldown = false;

    // Listen for motion
    window.addEventListener('devicemotion', function (event) {

        if(cooldown) { return ; }

        // get acceleration values
        var acc = (function () {

            if(event.acceleration) { return event.acceleration; }

            var acc = event.accelerationIncludingGravity;

            // high pass-filter to remove gravity
            // http://iphonedevelopertips.com/user-interface/accelerometer-101.html
            axa = acc.x - ((acc.x * opts.hf) + (axa * (1.0 - opts.hf)));
            aya = acc.y - ((acc.y * opts.hf) + (aya * (1.0 - opts.hf)));
            aza = acc.z - ((acc.z * opts.hf) + (aza * (1.0 - opts.hf)));

            return { x: acc.x - 2 * axa, y: acc.y - 2 * aya, z: acc.z - 2 * aza };

        })();

        // detect single shake
        // http://discussions.apple.com/thread.jspa?messageID=8224655
        if(
            Math.abs(acc.x) > opts.violence * 1.5 ||
            Math.abs(acc.y) > opts.violence * 2 ||
            Math.abs(acc.z) > opts.violence * 3
        ) {

            var curtime = new Date();
            var timedelta = curtime.getTime() - prevtime.getTime();

            if(timedelta >= opts.debounce) {
                shakeaccum = 0;
            }

            prevtime = curtime;
            shakeaccum += 1;

            if(shakeaccum >= opts.shakethreshold) {
                shakeaccum = 0;
                cooldown = true;
                window.dispatchEvent(new Event('deviceshake'));
                setTimeout(function () { cooldown = false; }, opts.debounce);
            }

        }

    }, false);

})();
