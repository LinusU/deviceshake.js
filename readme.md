
# deviceshake event

A javascript plugin to add a event `deviceshake` when the device is shaken.

`deviceshake` is a simple-to-use javascript plugin that monitors the accelerometer in order to detect the user "shaking" the device. The goal of this script is to provide robust shake detection and minimize the chances of triggering spurious shake events.

## Usage

This is the minimum code required to detect a shake:

```js
<script type="text/javascript" src="deviceshake.js"></script>
<script type="text/javascript">
    window.addEventListener('deviceshake', function () {
        // Your code goes here...
    }, false);
</script>
```
