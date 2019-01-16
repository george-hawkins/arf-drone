---
id: pixhawk-driver
title: Pixhawk Windows device driver
---

Both Mission Planner and QGroundControl will install the necessary Pixhawk device driver as part of their installation process on Windows. You can also [download](https://pixhawk.org/firmware/downloads) the driver from pixhawk.org and install it directly. The dev.px4.io [Windows development page](https://dev.px4.io/en/setup/dev_env_windows.html) just links to the version on pixhawk.org.

At the time of writing (May 2017) the driver version installed by Mission Planner is 2.0.0.9 while the version installed by QGroundControl, and available from pixhawk.org, is 2.0.0.4.

However there's no significant difference between these two versions. You can see the [commit history](https://github.com/ArduPilot/MissionPlanner/commits/master/Drivers/px4fmu.inf) going from version 2.0.0.4 to 2.0.0.9 on Github. All the changes have been made by meee1, the Github username of Michael Oborne (whose name you'll see as the signer if you look at the driver properties in the Windows Device Manager). The changes made for version 2.0.0.5 and above seem to have nothing to do with the Pixhawk and just revolve around support for the MAVStation daughterboard - a piece of hardware for which nothing of interest.

When you connect a Pixhawk via USB (and the driver is already installed) then it appears under _Ports_ in the Device Manager as "PX4 FMU (COM3)" (where COM3 varies depending on your setup). If you fail to install a driver then it just appears as "USB Serial Device (COM3)" under _Ports_.

Note: in no situation does anything appear under _Universal Serial Bus controllers_ in Device Manager - I thought something might, given that the Pixhawk is connected via USB, but it always just appears under _Ports_.
