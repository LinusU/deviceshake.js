# deviceshake event

A javascript plugin to add a event `deviceshake` when the device is shaken.

`deviceshake` is a simple-to-use javascript plugin that monitors the accelerometer in order to detect the user "shaking" the device. The goal of this script is to provide robust shake detection and minimize the chances of triggering spurious shake events.

## Usage

This is the minimum code required to detect a shake:

```html
<script type="text/javascript" src="deviceshake.js"></script>
<script type="text/javascript">
    window.addEventListener('deviceshake', function () {
        // Your code goes here...
    }, false);
</script>
```

## License

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

