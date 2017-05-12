Electronics
===========

Now that we've upgraded the receiver we can connect up all the electronics (except the battery, ESCs and motors) and then connect everything to a laptop or PC via USB and set things up and experiment a bit without having to put together the full drone.

The Pixhawk comes with a number of parts, shown here with it - a buzzer, an arming button, a cable for connecting the receiver (bottom left), a micro SD card, a USB cable and a SD card adapter and two other cables (that aren't of immediate use).  
<img height="256" src="images/assembly/electronics/pixhawk-parts.jpg">

GPS and compass module.  
<img height="256" src="images/assembly/electronics/gps-and-compass.jpg">

Pixhawk wired up (without receiver).  
<img height="256" src="images/assembly/electronics/pixhawk-wired-up-without-receiver.jpg">

Pixhawk with microSD card inserted.  
<img height="256" src="images/assembly/electronics/pixhawk-with-sd-card-inserted.jpg">

There is enough space beyond the external SD card slot that it's possible to insert the SD card without pushing it into the actual SD card holder. The SD card holder is spring loaded and it's fairly obvious once you feel the resistance of the springs - the SD card has to be pushed so far in that I couldn't do it with just my fingers, I needed to use a small screw driver to press it in the final millimeter or two.

Note: the SD card really is just used for storage (logs, waypoint data etc.), it does not contain the Pixhawk flight controller software - this is flashed to 2MB of non-removable internal RAM.

The style of connectors used by the Pixhawk and the components that connect to it (with the exception of the receiver) are horrible. I've come across them before in electronics projects - they're designed for production setups where it's not envisaged that a given connection will ever be unplugged again once plugged in, i.e. they're not very hobbyist friendly. It's no wonder that in the video [introducing the Pixracer](https://www.youtube.com/watch?v=mpb6Cq023N8&feature=youtu.be&t=62) that they say the best thing about it is that they've switched to a nicer style of connector. As has the Pixhawk 2.1. The downside of changing the connector type of course is that one then has to change the awful-but-standard connectors on all components one wants to connect.

When initially attempting to plug in the buzzer etc. I found the connectors so unwilling to go in that I wondered if I was really supposed to apply near board breaking pressure to just force them in. The answer is no - instead for each connector I repeatedly waggled it in and out until everything engaged nicely enough that it was then possible to force the connector in fully. This required a reasonable amount of force, with my thumbnails to the edges of the connector, but not too much.

The receiver
------------

Receiver cable plugged into Pixhawk.  
<img height="256" src="images/assembly/electronics/pixhawk-to-receiver-1.jpg"> <img height="256" src="images/assembly/electronics/pixhawk-to-receiver-2.jpg">

Receiver cable plugged into receiver.  
<img height="256" src="images/assembly/electronics/receiver-to-pixhawk.jpg">

I was surprised how hard it was to find clear instructions on connecting the X8R receiver to the Pixhawk - it's trivial once you know how but still I didn't find anything that just plainly told you which set of three pins at the end of the Pixhawk to use and which port on the receiver to use.

The best I found was this [video starting at the 21 second mark](https://www.youtube.com/watch?v=uCcVCM7ajNA&feature=youtu.be&t=21).

Important: when he plugs the connector into the X8R he plugs in the cable such that the white wire (signal) is on the left and black (ground) is on the right, which is correct, but he clearly says "the signal is on the right side" which is incorrect.

In the video he just comments that we use the column of pins on the Pixhawk labelled RC and not the one labelled SB (for S.BUS) but doesn't explain why. The SB labelled pins are meant for controlling other S.BUS capable devices, not for taking receiver input (even if it is an S.BUS receiver).

You can confirm you've got the wiring right from the little graphics on both the X8R and the Pixhawk. On the top of X8R you see two little graphics representing the two S.BUS ports, one labelled RX IN and the other SBUS OUT. The cable is plugged into the SBUS OUT port - the little graphic, shaped like the port, contains a minus(for ground), a plus (for power) and a little square wave symbol (for signal) showing you which pin is which. On the Pixhawk right at the end of the three rows of pins simularly you see the labels minus, plus and S.

So for the Pixhawk you plug this cable into the very first column of pins (labelled RC) with the black (ground) wire at the top, red in the middle and white at the bottom. Black is ground, red is power and white is signal. For the receiver you plug the cable into the lower right S.BUS port with white (signal) to the left.

Pixhawk fully wired up
----------------------

Pixhawk wired up (with receiver).  
<img height="256" src="images/assembly/electronics/pixhawk-wired-up-with-receiver.jpg">
