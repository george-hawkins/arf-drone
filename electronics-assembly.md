Electronics
===========

Now that we've got the transmitter and receiver setup we can connect up all the electronics (except the battery, ESCs and motors) and then connect everything to a laptop or PC via USB and set things up and experiment a bit without having to put together the full drone.

The Pixhawk comes with a number of parts (shown below) - these include a buzzer, a safety switch, a cable for connecting the receiver (bottom left), a micro SD card and a USB cable. There's also an SD card adapter and two other cables that aren't of immediate use.

Initially we'll just wire up the Pixhawk, safety switch, buzzer and the GPS (and compass) module.

_Pixhawk and accompanying parts._  
<img height="256" src="images/assembly/electronics/pixhawk-parts.jpg">

_GPS (and compass) module._  
<img height="256" src="images/assembly/electronics/gps-and-compass.jpg">

The style of connectors used by the Pixhawk and the components that connect to it (with the exception of the receiver) are horrible. I've come across them before in electronics projects - they're designed for production setups where it's not envisaged that a given connection will ever be unplugged again once connected, i.e. they're not very hobbyist friendly. It's no wonder that in the video [introducing the Pixracer](https://www.youtube.com/watch?v=mpb6Cq023N8&feature=youtu.be&t=62) that they say the best thing about it is that they've switched to a nicer style of connector (as has the Pixhawk 2.1). The downside of changing the connector type of course is that one then has to change the awful-but-standard connectors on all components one wants to connect.

Note: in [this video](https://www.youtube.com/watch?v=Kfu8M8t2fWY) from the ETH Pixhawk group it all looks so easy.

_Pixhawk wired up (without receiver)._  
<img height="256" src="images/assembly/electronics/pixhawk-wired-up-without-receiver.jpg">

Note: initially I mistook the _GPS_ label as labelling the socket above it and accidentally plugged the GPS into the _SERIAL 4/5_ socket.

When initially attempting to plug in the buzzer etc. I found the connectors so unwilling to go in that I wondered if I was really supposed to apply near board breaking pressure to just force them in. The answer is no - instead for each connector I repeatedly waggled it in and out until everything engaged nicely enough that it was then possible to force the connector in fully. This required a reasonable amount of force, with my thumbnails to the edges of the connector, but not too much.

Once this is done inserting the SD card is altogether more pleasant. There is enough open space beyond the slot in the case that it's possible to push the SD card in without pushing it into the actual SD card holder. The SD card holder is spring loaded so it's fairly obvious once you feel the resistance of the springs. The SD card has to be pushed so far in that I couldn't do it with just my finger nails, I needed to use a small screw driver to press it in the final millimeter or two (if you look closely at the next photo you'll see the SD card is quite far in).

_Pixhawk with microSD card inserted._  
<img height="256" src="images/assembly/electronics/pixhawk-with-sd-card-inserted.jpg">

Note: the SD card comes competely blank and is just used for storage (logs, waypoint data etc.), it does not contain the Pixhawk flight controller software - this is flashed to 2MB of non-removable internal RAM.

The receiver
------------

The final step (at this point) is to connect the receiver to the Pixhawk.  I was surprised how hard it was to find clear instructions on connecting the X8R receiver to the Pixhawk - it's trivial once you know how but still I didn't find anything that just plainly told you which set of three pins at the end of the Pixhawk to use and which port on the receiver to use.

The best I found was this [video starting at the 21 second mark](https://www.youtube.com/watch?v=uCcVCM7ajNA&feature=youtu.be&t=21). **Important:** when he plugs the connector into the X8R he plugs in the cable such that the white wire (signal) is on the left and black (ground) is on the right, which is correct, but he clearly says "the signal is on the right side" which is incorrect. In the video he just comments that we use the column of pins on the Pixhawk labelled RC and not the one labelled SB (for S.BUS) but doesn't explain why. The SB labelled pins are meant for S.BUS output, not for taking receiver input (whether in S.BUS format or not).

In the end it's all very simple and shown clearly in the following pictures.

_Receiver cable plugged into Pixhawk._  
<img height="256" src="images/assembly/electronics/pixhawk-to-receiver-1.jpg"> <img height="256" src="images/assembly/electronics/pixhawk-to-receiver-2.jpg">

_Receiver cable plugged into receiver._  
<img height="256" src="images/assembly/electronics/receiver-to-pixhawk.jpg">

You can confirm you've got the wiring right from the little graphics on both the X8R and the Pixhawk. On the top of X8R you see two little graphics representing the two S.BUS ports, one labelled RX IN and the other SBUS OUT. The cable is plugged into the SBUS OUT port - the little graphic, shaped like the port, contains a minus, a plus and a little square wave symbol, for ground, power and signal respectively, showing you which pin is which. On the Pixhawk right at the end of the three rows of pins similarly you see the labels minus, plus and S.

So for the Pixhawk you plug this cable into the very first column of pins (labelled RC) with the black wire at the top, red in the middle and white at the bottom. Black is ground, red is power and white is signal. For the receiver you plug the cable into the lower right S.BUS port with white (signal) to the left.

Pixhawk fully wired up
----------------------

Now the Pixhawk is wired up and ready to be connected to a computer.

_Pixhawk wired up (with receiver)._  
<img height="256" src="images/assembly/electronics/pixhawk-wired-up-with-receiver.jpg">

Initially I was worriend that the whole setup would need more power than a laptop USB port could easily provide so I connected the Pixhawk to one of the higher ampage capable ports on a powered USB hub but, for whatever reason, this didn't work (the Pixhawk made an unhappy squawking sound). As it turns out the whole system runs fine off my laptop USB port. I used a USB power meter to measure how many amps the whole setup draws - it's never more than 300mA so well wihtin the 500mA minimum that all USB ports should support.

### Device drivers

On Linux and Mac you don't have to worry about device drivers - on Windows though you need to have the appropriate driver installed beforehand. This is taken care of for you if you install [Mission Planner](http://ardupilot.org/planner/docs/common-install-mission-planner.html) or [QGroundControl](https://docs.qgroundcontrol.com/en/getting_started/download_and_install.html) - two of the most popular ground station applications for Pixhawk. For more details see [`pixhawk-driver.md`](pixhawk-driver.md)).

Cardboard layout
----------------

Now we're almost ready to connect the Pixhawk via USB to a computer and configure it for the first time. This configuration will involve all the parts, i.e. Pixhawk, GPS, receiver etc., and will involve some calibration steps, that require rotating the Pixhawk about its axes, so it's best to mount everything on a piece of cardboard first using [Blu Tack](https://en.wikipedia.org/wiki/Blu_Tack) to make these steps easier.

_White tack on back of Pixhawk and other parts._  
<img height="512" src="images/assembly/electronics/white-tacked-parts.jpg">

_Pixhawk and other parts mounted on cardboard._  
<img height="512" src="images/assembly/electronics/cardboard-layout.jpg">

Actually as you can see I used a alternative to Blu Tack that's white rather than blue - it comes from UHU, has the original name [White Tack](https://www.amazon.co.uk/UHU-White-Tack-Twin-Pack/dp/B00A1KV52Q/) (in German it's called patafix) and is less oily than Blu Tack.

Make sure to get the orientation correct, you'll need to know which side corresponds to nose, tail, left and right. The arrows on the Pixhawk and the GPS module must both be pointing forward, i.e. in the nose direction. In the photo you can see GPS module is pointing slightly to the right, this isn't too critical at this stage but when it comes to mounting the components on the actual frame it's important to get this as dead on as you can so the Pixhawk and the GPS both agree exactly on what direction is forward. The arrow on this GPS module points in one direction and its cable comes out the other side like a tail, this seems an intuitive arrangement but isn't universal - some GPS modules have the cable coming out the same side that the arrow is pointing.

As mentioned the initial setup will involve some calibration steps, these steps will need to be repeated once the parts are mounted in their final position on the frame as proper calibration depends on the current layout of the components involved.