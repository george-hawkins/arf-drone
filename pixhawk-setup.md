Pixhawk setup
=============

For reasons we won't go into here Microsoft Windows has a much bigger issue with small hobbyist electronic devices that aren't backed by big corporations (who can pay up for a USB vendor ID and Windows certification).

Often these devices appear to your computer as simple serial devices (the kind of thing that was common back in the days when people still used analog modems) or as generic USB storage devices. As such they can generally be connected to Mac or Linux machines without the need to install any extra drivers. This is not the case with Windows - where driver installation and setup generally forms a major part of using one of these device with your computer.

If updating the firmware on your transmitter or receiver or trying to connect a small FPV flight controller to something like [CleanFlight](http://cleanflight.com/) or [BetaFlight](https://github.com/betaflight/betaflight/blob/master/README.md) the driver setup generally it involves something like [Zadig](http://zadig.akeo.ie/) (though recently an apparently more convenient/automatic solution is available in the form of the [ImpulseRC Driver Fixer Tool](http://www.dronetrest.com/t/fix-any-stm32-dfu-drivers-issues-when-flashing-betaflight-cleanflight-firmware/3603)).

Having said all that it's nice to find out that for the Pixhawk drivers aren't an issue on any plaform, whether it's Windows, Mac or Linux. Mac and Linux don't need any additional driver and on Windows the popular ground control application when installed also automatically install the correct Pixhawk related drivers rather than leaving it to you as a separate step.

But what's ground control software? They fulfil a number of roles. Once your system is fully setup it's the software that you run on your computer to plan out routes that can be uploaded to the Pixhawk and can then be followed autonomously by your drone once it's in the air. If you've got a telemetry kit (like this [one](https://www.unmannedtechshop.co.uk/100mw-ardupilot-unmanned-telemetry-kit-v2-433mhz/)), with a ground module that's plugged into your computer and an air module that's plugged into the flight controller on your drone, then the ground control software can track the status of your drone in flight (showing it's location, battery level and other telemetry data) and also control the drone in a similar fashion to your transmitter.

But most importantly initially, the ground control application is used to setup and configure your flight controller. It's use after this is optional. You connect your flight controller to your computer via USB and then the ground control application can be used to update the flight stack (either [ArduCopter](http://ardupilot.org/copter/) or [PX4](http://px4.io/) in our case), calibrate the drone's sensors and setup the flight stack (configuring things such as flight modes).

There are a number of ground control applications - the two most popular are [Mission Planner](http://ardupilot.org/planner/) and [QGroundControl](http://qgroundcontrol.com/). Mission Planner only supports the ArduPilot flight stack and only runs on Windows. QGroundControl supports both ArduPilot and PX4 and it runs on Windows, Mac and Linux.

However Mission Planner is by far the most used, so despite the fact that I use a Mac myself I'll go throught setup using Mission Planner on Windows first.

Note: the ArduCopter site describes another ground control application called APM Planner 2 (APMP2) as the [best one for Mac and Linux](http://ardupilot.org/copter/docs/common-choosing-a-ground-station.html#apm-planner-2-0). But this is simply a plug for a project that's closely associated with ArduPilot. I found that the most common questions asked regarding it were of the form "I can do X in Mission Planner, how do I do X in APMP2?" with the answer almost invariably of the form "You can't do X in APMP2, APMP2 isn't really intended for that use case." So it seems they're not even aiming to create a full feature ground control application, it's unclear though what particular audience they are targeting.

Inprogress notes
----------------

_Flat._  
<img width="512" src="images/calibration/flat.jpg">

_At 90&deg; on nose._  
<img width="512" src="images/calibration/on-nose.jpg">

_At 90&deg; on right side._  
<img width="512" src="images/calibration/on-left.jpg">

TODO: is that it's right side, it is relative to the labels on the ports, but if you consider the arrow as pointing in the direction of travel then it's the left when thinking in terms of forward movement (as one would in a car or a train).

TODO: flesh out...

Arming is done by pressing the safety button until it goes solid red and then pushing the throttle to the lower-right corner.

In the wizard you eventually get to a point where it asks you if you can arm.

I couldn't but in the wizard it gives you no info as to the failure reason.

For this you need the main _Flight Data_ view, on the area with the artificial horizon it'll show the failure reason if you cannot arm.

The Pixhawk indicates that it's not ready to arm with double flashing yellow.

TODO: this may not be true - according to pixhawk.org "Amber - Low battery or Failsafe (Return to home, etc)" - so this may just have been because I was in RTL flight mode. Hmmm... if I power up the Pixhawk while in flight mode RTL then it flashes yellow, if I then flip to stabilize then all is good and if I flip back to RTL it (oddly) flashes blue rather than going back to yellow. So flashing yellow only happens if you boot in a stupid mode.

If you try to arm in this situation the Pixhawk will beep loudly twice.

The initial arm failure reason was that the pixhawk had to be power cycled for calibration to take affect.

Then it complained about the lack of a GPS lock - so I then rested on a windowsill until the GPS's secondary blue LED started flashing.

The Pixhawk flashes blue while waiting for a lock.

Then it complained that "GPS speed error 1.4 (needs 1.0)".

However the real issue seems to have been that during the wizard steps I'd flipped the flight mode switches - I should have returned them all to their default position so that I was in acceptable flight mode for take off, i.e. stabilize.

From <http://ardupilot.org/copter/docs/arming_the_motors.html> "You can only arm or disarm in Stabilize, ACRO, AltHold and Loiter mode."

Once everything is good the Pixhawk flashes green to indicate its ready to be armed and once armed it goes solid green.

Note: if you arm the flight controller but then don't apply any throttle, it will fairly quickly return to the disarmed state.

To disarm move throttle to lower-left corner.

If it beeps twice and refuses to arm despite blinking green check you've pressed the safety button!

---

How to reset the flight controller: <http://ardupilot.org/copter/docs/common-parameter-reset.html>
