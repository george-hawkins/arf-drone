Electronics
===========

Now that we've upgraded the receiver we can connect up all the electronics (except the battery, ESCs and motors) and then connect everything to a laptop or PC via USB and set things up and experiment a bit without having to put together the full drone.

Note: the SD card really is just used for storage (logs, waypoint data etc.), it does not contain the Pixhawk OS - this is flashed to 2MB of non-removable internal RAM.

The receiver
------------

I was surprised how hard it was to find clear instructions on connecting the X8R receiver to the Pixhawk - it's trivial once you know how but still I didn't find anything that just plainly told you which set of three pins at the end of the Pixhawk to use and which port on the receiver to use.

The best I found was this [video starting at the 21 second mark](https://www.youtube.com/watch?v=uCcVCM7ajNA&feature=youtu.be&t=21).

Important: when he plugs the connector into the X8R he plugs in the cable such that the white wire (signal) is on the left and black (ground) is on the right, which is correct, but he clearly says "the signal is on the right side" which is incorrect.

In the video he just comments that we use the column of pins on the Pixhawk labelled RC and not the one labelled SB (for S.BUS) but doesn't explain why. The SB labelled pins are meant for controlling other S.BUS capable devices, not for taking receiver input (even if it is an S.BUS receiver).

You can confirm you've got the wiring right from the little graphics on both the X8R and the Pixhawk. On the top of X8R you see two little graphics representing the two S.BUS ports, one labelled RX IN and the other SBUS OUT. The cable is plugged into the SBUS OUT port - the little graphic, shaped like the port, contains a minus(for ground), a plus (for power) and a little square wave symbol (for signal) showing you which pin is which. On the Pixhawk right at the end of the three rows of pins simularly you see the labels minus, plus and S.

So for the Pixhawk you plug this cable into the very first column of pins (labelled RC) with the black (ground) wire at the top, red in the middle and white at the bottom. Black is ground, red is power and white is signal. For the receiver you plug the cable into the lower right S.BUS port with white (signal) to the left.
