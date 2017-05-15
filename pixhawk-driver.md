Pixhawk Windows device driver
=============================

It turns out that Mission Planner installs a newer version (2.0.9) of the Pixhawk driver than the version (2.0.0.4) available from the [USB driver downloads section](https://pixhawk.org/firmware/downloads) of the pixhawk.org site.

As an indication of how much I over check things I setup three VMs, with a pristine Windows 10 new installation on each, and used the three to look at what happenend when I connected the Pixhawk:

1. Without having installed any driver or application first.
2. With just the pixhawk.org Pixhawk USB driver installed.
3. With just Mission Planner installed.

In situation 1 the system detects the new device immediately but takes ages to find and install a driver for it - when it does the Pixhawk appears as "USB Serial Device (COM3)" under _Ports_ in the Device Manager. In situation 2 the system sets up the device much more quickly and it appears as "PX4 FMU (COM3)" under _Ports_ (and the driver version is 2.0.0.4). In situation 3 the same thing happens except that the driver version is 2.0.0.9.

So installing Mission Planner is the best way to ensure the correct drivers are installed (it's obvious that some drivers are installed during the Mission Planner installation process - it's just not immediately obvious that they're for the Pixhawk).

Note: in none of the three situations did anything appear under _Universal Serial Bus controllers_ in Device Manager - I thought something might given that the Pixhawk is connected by USB but it always just appears under _Ports_.
