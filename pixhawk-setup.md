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
