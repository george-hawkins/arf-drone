OK - this page contains all remaining useful stuff to do with transmitter and receiver and telemetry. All relevant stuff in pages-and-videos.md is now here.

Once everything is setup the final step (I hope) is to configure flight modes as per the Painless360 Pixhawk video series:

* https://www.youtube.com/watch?v=uH2iCRA9G7k

Note: in the common power options the only immediatelly relevant bit is at [1:13](https://www.youtube.com/watch?v=DKK0jms402Q&feature=youtu.be&t=73) where he briefly shows configuring a low voltage warning in Mission Planner.

Transmitter setup
-----------------

Flite Test:

https://www.youtube.com/watch?v=7cExS1tTOJA

* 13:41 callibration
* 17:08 new model, 18:03 name, 20:00 internal RF mode, bind.

Not so importat - 21:30 output - allows you to invert sticks if necessary. 23:23 on is plane specific.

Painless360:

First time setp video - https://www.youtube.com/watch?v=YD3ojhwVmrI

* 10:50 date and time, country code (doesn't seem to be as important as it sounds - regulation compliance seems to be determined by installing a region specific firmware).
* 11:45 callibration

Model specific video - https://www.youtube.com/watch?v=NIR85KOqIAo&feature=youtu.be&t=170

Start at 2:50 - just sets name, then from 4:25 he sets up a plane, 5:10 inputs (calm your controls down by changing curve expo - though at 7:58 he says you don't do expo on the trasmitter for a quad but instead handle this via the flight controller), 6:44 modifying this setup for a quadcopter - at 8:10 he adds a flight mode switch and an arming switch (using inputs and mixers - he says there's a seemingly easier way to do this but his approach is better). At 10:50 it's all over for quads.

Note: he handles flight modes better in his Pixhawk series and the Pixhawk has a pyhsical arming switch so a virtual one seems unnecessary.

RCdiy:

http://rcdiy.ca/taranis-q-x7-tutorial-first-flight-setup/

* Binding an X series receiver.
* Setting failsafe (he chooses to leave this to the receiver).
* Range check

Like Flite Test he also covers outputs.

Foo
---

Taranis Q X7 playlist - https://www.youtube.com/playlist?list=PLiYYhnH4BhI-ot9OQ9djvRaacFHboFqC2

Includes:

* Failsafe: no pulses - https://youtu.be/LuJ_K0pOJkE?t=330
* Binding: https://www.youtube.com/watch?v=RH_RuVbF2YU cf with binding video below.
* Wiring telemetry: https://youtu.be/WKsFG29Q5mQ - not for Pixhawk but still intesting, zip forward to 8:08 once he gets aways from the receiver and info the flight controller (and then its software).
* Configuring telemetry: https://www.youtube.com/watch?v=n09q26Gh858

I don't like his throttle de-self-centering video so find another one.

Note: in one of these videos he does use a blank SD card - he never plugs the SD into his own computer. He sets up the initial contents via the USB to the transmitter.

No pulses is the preferred option - see http://ardupilot.org/copter/docs/radio-failsafe.html#receiver-and-flight-controller-set-up
In their video they setup the failsafe via the receiver - we should do it via the transmitter - but the video shows how to test things - https://youtu.be/FhKREgqjCpM?t=93 - note that I think they've got an ancient PX4 so arming is different.

Binding
-------

Covered above but also in:

* DroneTrest - http://www.dronetrest.com/t/how-to-bind-your-x8r-receiver-to-taranis-x9d/633 - cf the video with above, note image shows that you only get max 8 channels out so up above video shouldn't have 1-16 selected.

DroneTrest recommend [this video](https://youtu.be/S-LSZQk1Ya8?t=324) on Taranis plus Mission Planner setup, but skip to 5:24 as most of what it covers looks easier in OpenTX Companion (as covered in the Painless360 series) but it is interesting to see stick callibration etc. for the flight controller and how the flight mode swtiches he configured earlier can be seen acting in Mission Planner.

Telemetry
---------

Wiring up telemetry for X8R and Pixhawk:

* http://ardupilot.org/copter/docs/common-frsky-telemetry.html (includes setup in Mission Planner, OpenTX Companion and on the Taranis).

TODO: make sure you enable the passthru telemetry option in Mission Planner cf the amount of telemetry info the Pixhawk will pass on if passthru is used vs if it's not.

