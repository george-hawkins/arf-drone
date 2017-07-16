Frame assembly
==============

TODO: see also [`frame-parts.md`](frame-parts.md).

Now that we've soldered up the PDB and done the continuity testing we can do a quick check with the battery before assembling the frame.

If you've done the continuity testing properly you should be pretty confident there are no shorts, however connecting the battery for the first time is the point at which you'll know for sure. As such you should do this test outside on concrete as it there is a short the battery will puff up and possibly explode and catch fire.

The ESCs will beep to indicate their state if everything is OK and they are getting power (you can see a description of the sounds they make in the [E305 user manual](http://dl.djicdn.com/downloads/e305/en/E305_User_Manual_v1.00_en.pdf)). They'll only make a sound if the motors are connected so connect a motor to each ESC. At this point the order of the connectors is unimportant, for each motor just plug its three connectors any-which-way into an ESC. The bullet connectors are quite hard to remove once fully inserted so push them in most but not all of the way for this test. Once all the motors are connected, connect the battery - for safety reasons don't lean over the battery while doing this.

_Outdoor battery test._  
<img width="512" src="images/assembly/frame/pdb-battery-test.jpg">

If all goes well you'll hear a continuous tone from all the ESCs. This is actually the ESC error tone - indicating that they're receiving no control signal - which isn't surprising as they're not connected yet to the flight controller. But it does indicate that the PDB is wired up correctly and delivering power to each ESC.

The tone is one of those sounds where it's hard to determine the source, I had to hold my ear right up to each ESC in turn to check that a sound was coming from each. The motors also seem to be making a sound, if you hold each one you can feel a little pulsing motion in each motor.

TODO: are both ESCs and motors really making separate sounds, is the pulsing feel from the motors covered anywhere.
