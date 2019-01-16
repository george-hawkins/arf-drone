---
id: fpv-x-racer
title: X-racer notes
---

DIY X-racer: <https://www.fpvmodel.com/x-racer-x-1-diy-combo_g1269.html> (it's assumed you have a TX).

Two photos: <https://photos.google.com/photo/AF1QipMnpYxfD9zhSFv5vbntky99G2c53I1Hcb97jyFk>

The only tool you need is a Phillips #00 screwdriver (like this [one](https://eustore.ifixit.com/en/Tools/Drivers-Wrenches/Phillips-00-Screwdriver-iFixit.html)) (not to be confused with the smaller #000 size or the larger #0 size).

TODO: look at desoldering camera.

---

The FPV Model [build video](https://www.youtube.com/watch?v=uFnxRmWBuGA) (the only apparent documentation) confusingly shows different motor configurations at different points (black and white motors at front right and at back left when showing motor assembly, then both at front when adding the flight controller).

Oscar Liang mentions this in his [review](https://oscarliang.com/x-racer-x1-micro-quad/), apparently the setup changed between preproduction and production and the front right and back left for the black and white motors is correct for production models.

TODO: comment on CW and CCW motors and also propellers - the propeller setup in particular is hard to see from the video.

---

The motors are hard to push in but don't try laying the frame down on a surface first and then pressing the motors in - the legs will buckle under the pressure.

Video doesn't mention clockwise and counterclockwise motors or propellers.

The battery died soon after being connected, despite never running the motors, so charge up properly before connecting for the first time.

To setup the model just the name and the mode for the internal RF need to set. The name can be whatever, the mode must be set to _D8_.

The flight controller software is [Betaflight](https://chrome.google.com/webstore/detail/betaflight-configurator/kdaghagfopacdngbohiknlhcocjccjao) (and is installed via the Chrome Web Store).

When running it automatically detects the serial device created when you plug it the quad via USB - at least on Linux. But it doesn't have permission to access it - you could create a rule or just change the permissions everytime you plug in the quad:

    $ sudo chmod ugo+rw /dev/ttyACM0

Where `ttyACM0` should match the port shown beside the _Connect_ button in Betaflight. Once the permissions are correct just press _Connect_.

On Mac no device was automatically created so presumably some extra setup is required. On Windows it looks like you need to use Zadig (as one does when connecting the Taranis Q X7 via USB).

_Setup_ - _Calibrate Accelerometer_ is enabled - all this requires is lay the quad on a level surface and press the button. The more complex _Calibrate Magnetometer_, that requires moving the quad during calibration, is not available.

_Configuration_ - under _ESC/Motor Features_ I disabled _MOTOR_STOP_ - I don't know how this feature is supposed to work but I could never get the motors to start with this feature enabled.

_Receiver_ - change _Channel Map_ to _JR / Spektrum / Graupner_ so that sequence becomes _TAER1234_, then press _Save_. Now the order matches the sequence you see if you go to _Radio setup_ on the transmitter and scroll right to the bottom and look at _Rx channel ord_.

Now you can try the sticks - you should see the bars for _Roll_ etc. respond as expected.

---

Switches
--------

TODO: following assumes TX is already bound. Cover binding.

Add an arm switch and a flight mode switch for the model on the transmitter as per <https://www.youtube.com/watch?v=NIR85KOqIAo&feature=youtu.be&t=491>

On the transmitter go to the main screen and press PAGE to get to the channels page and confirm which channel changes as you flick the switches you chose.

Channel 5 to 8 will map to what are called _AUX 1_ to _AUX 4_ in Betaflight.

Then in Betaflight go to _Modes_. Some of the modes, e.g. ARM, already have range bars showing - just remove all these existing bars by pressing the (x) in the upper right corner of each range bar "box".

There should be range bars showing now. Go to _ARM_ and click _Add Range_ now select the AUX value, e.g. _AUX 1_, that corresponds to the channel that your ARM switch is transmitted on.

Now flick the ARM switch on the transmitter on and off - you should see a little yellow marker move between a low and high point on the range, drag the handles on the range bar so that only the area of the range that corresponds to the on position of the switch is highligted (you might as well highligh a range from 100 below to 100 above this exact point - all that's really important is that the selected range doesn't also overlap the off point).

Then do the same e.g. for the _ANGLE_ and _HORIZON_ modes - you can use the same AUX with two modes, e.g. if you've assigned a three position switch in the transmitter to flight mode you can use it with both _ANGLE_ and _HORIZON_ - just select different areas of the range for each, i.e. capture the switch values corresponding to its different positions.

Betaflight supports far more modes than are shown when the X-racer is connected, so presumably the shown modes are the subset that the X-racer actually supports. The build video only mentions angle and beeperon. Note: beeperon does not cause it to beep, rather it causes the four downward facing LEDs to flash (rather than stay constantly lit).

---

Useful pages:

* Oscar Liang's review - <https://oscarliang.com/x-racer-x1-micro-quad/>
* Arming etc. via stick position - <https://github.com/martinbudden/betaflight/blob/master/docs/Controls.md>
* Stick PDF cheat sheet - <https://www.rcgroups.com/forums/showatt.php?attachmentid=6740971>
* Modes - <https://github.com/martinbudden/betaflight/blob/master/docs/Modes.md>

Arm - throttle to lower right.
Disarm - throttle to lower left.
Calibrate acceleromter - throttle to upper left, pitch to down (leave roll at center).

Note: the _Save and Exit_ stick positions are only needed in combination with the LCD related operations (as is clear from the PDF cheat sheet).

Important: using the sticks to arm stops working if you assign switches via Betaflight _Modes_ tab. Calibrate isn't listed on the _Modes_ tab and the quad still flashes (as if in acknowledgement) when you use push the sticks to the calibrate position - so it seems you can mix have some settings via sticks positions and some via switches (i.e. AUX1 etc. settings).

---

Extras:

* Buy three additional packs of two batteries - <https://www.fpvmodel.com/x-racer-hv-1s-250mah-3-8v-60c-high-voltage-rc-lipo-battery-2-pcs_g1249.html>
* Buy a charger - <https://www.fpvmodel.com/hobbytiger-bc-1s06-lipo-6-port-battery-charger-balance-quick_g1266.html> (does the AC adapter come with swappable pins? If not buy charger only variant).
* Or adapter for your balance charger, e.g. <https://hobbyking.com/en_us/micro-paraboard-micro-jst-jst-ph-connectors.html?___store=en_us>

---

USB charger
-----------

The LED setup on the USB charger isn't great. When you plug the charger in without a battery connected a red LED comes on, when you connect a battery the LED goes off (this made me think it was doing nothing) and eventually comes back on once the battery is charged.

TODO: time how long it takes to charge from both a standard USB port and a charging USB port.

---

LEDs
----

TODO: change "constant on" to "solid" and explain terms.

The underside of the flight controller PCB has four LEDs - two blue ones at front right and left, two red ones at back right and left. They seem mainly there to help you determine the quad's orientation in flight. You can get them to flash by enabling the beeperon mode. They also flash when the transmitter is off and go constant on when the transmitter is on.

The topside of the flight controller PCB has a number of LEDs, all partically hidden by the video transmitter PCB when stuck on on top. There's one at the back left that seems to just be power - it's constant red while powered. Then there's a set of three LEDs somewhat forward and left of center - the first is red, the other two blue.

Being powered via USB or batteries makes no difference to the behavior of the LEDs however the motors will not start to turn if the quad is armed while connected via USB.

Behavior of topside LEDs:

* No transmitter: red flashes slowly, first blue flashes fast, second is constant on.
* Transmitter on: red constant on, blue both off.
* Transmitter on and armed: red constant on, first blue on constant, second remains off.

If you you hold the quad at an angle while disarmed the first blue LED starts to flash and the quad will not arm until you lay it on a level surface (and the blue LED goes off).

The motors will not start if you try to arm while the throttle is not at zero. Other than the first blue LED not going, as you'd expect when armed, there's nothing to indicate that the problem is the throttle.

The video transmitter PCB has two tiny banks of LEDs - one containing four blue LEDs with one lit to indicate the currently selected band and one containing eight red LEDs with one lit to indicate the currently selected channel.

See Oscar Liang's [5.8GHz frequency bands table](https://oscarliang.com/5-8ghz-frequency-bands-b-e-f-different-brand/).
