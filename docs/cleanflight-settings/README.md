---
id: cleanflight-settings-README
title: Cleanflight Settings README
---

TODO: the first part of below is just of technical interest - instead start with upgrading to 2.1.0, pasting in `parameters.txt` and then the appropriate LEDs file and then explaining what you get with this (_AUX1_ and _AUX2_ setup) and suggest that the reader calibrate their accelerometer. Perhaps add in something related to the batter monitor and https://github.com/cleanflight/cleanflight/issues/2951#issuecomment-332921466

---

The QX95 came with Cleanflight 1.13.0 and as this is too old a version for the modern configurator it dumped me straight into CLI mode on connecting.

Cleanflight 1.13.0 doesn't support the `diff` command so I created a diff manually like so:

* Dumped all the parameter values  that the QX95 shipped with using `dump`.
* Reset all parameters to their 1.13.0 defaults using `defaults`
* Did another dump and diffed it and the initial one outside Cleanflight.

The result can be found in [`1.13.0-diff.txt`](1.13.0-diff.txt).

I then upgraded the firmware to 2.1.0 (the latest version available at the time of writing), then after connecting I applied the diff I'd created from 1.13.0. I didn't go through any of the parameters to work out what they did, to see if any of the default 2.1.0 values were perhaps more appropriate, I just applied the diff blindly by pasting it in on the CLI tab, followed by `save`.

The LED setup that comes with the QX95 isn't particularly fancy but I stuck with it. It can be found in [`leds-4.txt`](leds-4.txt).

However when I switched to the [Matek LED strip](https://www.banggood.com/Matek-WS2812B-LED-Board-With-5V-Buzzer-For-Naze-32-Skyline-32-Flight-Controller-p-991715.html) that has six, rather than four, LEDs so I adjusted the setup slightly as otherwise the leftmost four LEDs continued to behave like the original four LED strip while the rightmost two just stayed permanently white. I just configured the rightmost two LEDs of the six LED strip to behave just like the rightmost two LEDs of the four LED strip and made the middle two LEDs of the six LED strip to behave just like the middle two LEDs of the four LED strip.

To apply these change just paste in the contents of [`leds-6.txt`](leds-6.txt).

When configuring my model on my transmitter I setup the value for switch _SF_ to be sent as channel 5 and that for switch _SA_ to be sent as channel 6.

Channel 5 and 6 are already mapped to _AUX1_ and _AUX2_ in Cleanflight and on the _Modes_ tab in Cleanflight I setup _AUX1_ just for _ARM_ and _AUX2_ to switch between _ANGLE_, _HORIZON_ and _BEEPER_.

![modes](modes.png)

The only other thing I did was do _Calibrate Accelerometer_ on the main _Setup_ tab and on the _PID Tuning_ tab I set the joint roll and pitch RC expo to 0.55 and the one for yaw to 0.35.

The final configuration can be found in [`parameters.txt`](parameters.txt) (produced by `diff`).

Note: upgrading from 1.13.0 to a later version is probably best done before you add a beeper as, for whatever reason, the beeper beeps incessantly while connected to the computer until this is completed.

---

It's possible to disable beeping while powered via USB which may save the sanity of people around you when you're working with the Configurator. On the CLI tab:

    beeper -ON_USB
    save

To reverse just do the same without the `-`.

Unfortunately it doesn't seem to be possible to disable the most common beep sequence - the startup sequence you here when you e.g. do `save` and cause the flight controller to restart. This seems to be a board specific issue - it seems to have been resolved for most boards - see [#218](https://github.com/betaflight/betaflight/issues/218) - but the related issues seem to show some boards still have issues.

Note `beeper` with human readable values like `ON_USB` (rather than bitmask numbers) was introduced via Betaflight - and is only documented there - see the [Betaflight CLI documentation](https://github.com/betaflight/betaflight/wiki/Betaflight-specific-CLI-commands).

It would be nice if there was something similar to dim the blindingly bright LEDs while on USB.
