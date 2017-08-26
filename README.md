2017 first time large quadcopter build
======================================

**Goal:** I wanted to go from knowing nothing about remote control vehicles to building a quadcopter that could complete a route autononmously, i.e. without human control from the ground. I wanted as few black box elements as possible in the system and so used open source software and hardware wherever reasonably possible.

TODO: include photo of final build here.

Having some experience with hobbyist electronics projects I initially thought that I'd really be able to make a quadcopter from scratch, 3D printing elements of the frame, sourcing most of the components, like motors, as generic parts from a big distributor like Digi-Key, and only having to buy a few drone-specific components like propellers.

I was quite disappointed when I found various pages (such as [this one](http://ardupilot.org/copter/docs/build-your-own-multicopter.html) from ArduPilot) making clear that this wasn't an option to consider when making ones first drone. Apparently I'd have to start with what's referred to as an ARF (almost ready to fly) kit, i.e. an unassembled frame and the parts for the propulsion system (propellers, motors etc.).

The ARF acronym makes it sound like all the interesting work has been taken care of and all that's left is to put things together lego style. But it turns out, if starting from scratch with no prior experience of drones, that there's quite enough additional complexity without also having to worry about the frame and the propulsion system.

Important: this build requires a small amount of soldering and it's assumed you've already got a soldering iron, solder etc. If you've never tried soldering before it's not that hard - see [`soldering.md`](soldering.md) for details.

TODO: add summary explaining that this page covers parts and that there are other pages - [`notes.md`](notes.md), [`stores.md`](stores.md), [`purchase-order.md`](purchase-order.md) and [`assembly.md`](assembly.md). Fill out [`assembly.md`](assembly.md) file properly.

TODO: move following sections elsewhere, they no longer belong here.


Websites
--------

When putting together this page the most useful sites I found were:

* ArduPilot - in particular its [assembly](http://ardupilot.org/copter/docs/common-pixhawk-wiring-and-quick-start.html) and related sections.
* [Pixhawk.org](https://pixhawk.org/)
* RCGroups - in particualr the [multicopter drone forums](https://www.rcgroups.com/aircraft-electric-multirotor-drones-790/).

The [ArduPilot forums](http://discuss.ardupilot.org/) and [PX4 forums](http://discuss.px4.io/) were also useful.

Note: the terms Pixhawk and PX4 are often used interchangeably - though Pixhawk generally refers to the flight controller hardware while PX4 generally refers to the flight controller software stack.

---

In writing the [`parts.md`](parts.md) page I started including so many side notes that they started clogging up the whole thing, so I've moved these notes out into [`notes.md`](notes.md). They're worth scanning over quickly. They cover:

* Brief notes on [clockwise and counterclockwise motors](notes.md#motor-direction) and the [external LED and USB connector](notes.md#external-led-and-usb-port).
* The [F450 ARF kit](notes.md#f450-arf-kit) and why I choose to buy the F450 frame and propulsion system as separate components rather than bundled as an ARF kit.
* The [E300 vs E305 vs E310](notes.md#e300-vs-e305-vs-e310) propulsion systems and the [E305 motor variants](notes.md#e305-motor-variants).
* The [power connectors](notes.md#power-connectors) of the power module and the charger.
* The [LiPo batteries](notes.md#batteries), the [charger](notes.md#charger), the battery alarm and the battery safety bag.
* The [IMU and MCU](notes.md#imu-and-mcu) - the core parts of the flight controller and how you can experiment with them.
* [Vibration](notes.md#vibration) and why a vibration damping kit might improve the performance of the sensors in the flight controller.
* Predefined [waypoints](notes.md#waypoints) and in-flight drone-to-computer communication (as opposed to using the hand-held transmitter).
* The [Pixhawk 2.1](notes.md#pixhawk-21) and some background leading to my choice of the classic Pixhawk flight controller.
* [Pixhawk.org vs the ArduPilot site](notes.md#pixhawkorg-vs-ardupilotorg).
* [Bags and cases](notes.md#bag--case) and why the size of the F450 makes it hard to find a good bag for it.
* [Chinese copies](notes.md#chinese-copies) and how buying drone parts is a case of caveat emptor.
