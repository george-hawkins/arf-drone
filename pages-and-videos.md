Pages and videos
================

TODO: move initial website recommendations from README to here.

Watching videos is much more bearable if you double the speed - a feature that someone else only recently pointed out to me. Click on the video's settings cog and change the speed.

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

DroneTrest:

* [Binding video](http://www.dronetrest.com/t/how-to-bind-your-x8r-receiver-to-taranis-x9d/633) cf the video with above, note image shows that you only get max 8 channels out so up above video shouldn't have 1-16 selected.

* They recommend [this video](https://youtu.be/S-LSZQk1Ya8?t=324) on Taranis plus Mission Planner setup, but skip to 5:24 as most of what it covers looks easier in OpenTX Companion (as covered in the Painless360 series) but it is interesting to see stick callibration etc. for the flight controller and how the flight mode swtiches he configured earlier can be seen acting in Mission Planner.

Painless360:

* Model setup: https://www.youtube.com/watch?v=NIR85KOqIAo&feature=youtu.be&t=170
* Throttle de-self-centering: https://www.youtube.com/watch?v=YD3ojhwVmrI&feature=youtu.be&t=291 - jump on to 10:38 once he's done the gibles and see basic OS setup.

Note: you can see there is a backup battery for the RTC.

RCdiy doing same with throttles but also lots of other basic OS setup:

* https://youtu.be/yF8jrkYJ7nA?t=23
* Accompanying web page: http://rcdiy.ca/taranis-q-x7-tutorial-first-flight-setup/

Long but good indepth overview of the Q X7:

* https://www.youtube.com/watch?v=7cExS1tTOJA&feature=youtu.be&t=498

This is an excellent overview of the Q X7. It covers [disabling self centering at 4:19](https://www.youtube.com/watch?v=7cExS1tTOJA&feature=youtu.be&t=498), [removing the battery holder at 12:14](https://www.youtube.com/watch?v=7cExS1tTOJA&feature=youtu.be&t=734), [turning it on and interacting with it at 13:27](https://www.youtube.com/watch?v=7cExS1tTOJA&feature=youtu.be&t=807). The later half of the video is only really relevant if you're flying a plane but it's still interesting to see a setup where the receiver directly controls all the servos rather than just feeding its signal to a flight controller.

---

OpenTX splash screens suitable for the [Q X7](http://www.open-tx.org/screens-9x.html) that are much less exciting than [those](http://www.open-tx.org/screens-taranis.html) for the X9D+ (note the Q X7 doesn't support [model images](http://www.open-tx.org/icons-taranis.html)).

---

The Painless360 Pixhawk series:

* https://www.youtube.com/watch?v=uH2iCRA9G7k

---

DJI videos:

* <https://www.youtube.com/watch?v=pUTHIL_Xfcc> - assembling the original F450 kit.
* <https://www.youtube.com/watch?v=H_Rvi7xQLdw> - assembly with the (then) newer E300 propulsion system (now replaced by the E305). Note: with the F450 you don't have to use the E305 PDB as the bottom plate of the F450 is a PDB.
* <https://www.youtube.com/watch?v=qJZa7p3rsCU> - installing the Naza M V2 - while I didn't use this flight controller it's interesting to see how everything is fitted in.

Note: according to one of the comments the "video shows the base plate being mounted sideways. If you want to mount a front facing camera gimbal you should mount the base plate the other way." And someone else comments that "she moves the solder around with the iron and that means there is too little heat and the cable should be still until the solder has gotten hard again ... give a little more heat and hold it still a little longer after removing the heat! Better to use a more powerful soldering iron, then the time to heat it up is less and the heat doesn't go that deep in the board and the conector."

DJI user manual PDFs:

* [F450 assembly](http://dl.djicdn.com/downloads/flamewheel/en/F450_User_Manual_v2.2_en.pdf) - inclused soldering on ESCs.
* [E305 assembly](http://dl.djicdn.com/downloads/e305/en/E305_User_Manual_v1.00_en.pdf).

DJI wiki:

* [F450 assembly](http://wiki.dji.com/en/index.php/Flame_Wheel_F450_Assembly)
* [Motor orientation, mounting and ESCs](http://wiki.dji.com/en/index.php/F450_ESC_and_Motor_Mounting)

---

Assembling the F450 videos:

* [From Marionville Models](https://www.youtube.com/watch?v=ER2GxMo0X3E).

* [Nice RCGroups E305 review](https://www.rcgroups.com/forums/showthread.php?2456770-Review-DJI-E305-Tuned-Propulsion-System) - includes lots of pictures and wiring things up to the an F450 frame.

Assembly pages:

* [F450 as assembly example](https://pixhawk.org/platforms/multicopters/dji_flamewheel_450) on pixhawk.org.
* [F450 as assembly example](http://ardupilot.org/copter/docs/dji-f330-flamewheel.html) on ardupilot.org.
* [Similar thorough walkthru on Quadcopters are Fun](http://quadcoptersarefun.com/2FlamewheelsBuild.html) - uses older PX4 board.
* [A much less thorough walkthru using the old APM FC](http://diydrones.com/profiles/blogs/using-a-dji-450-flamewheel-quadcopter-with-the-apm) on DIYDrones.

Note: at least one of these builds uses a BEC - this is not necessary for my setup according to [this thread](http://diydrones.com/forum/topics/new-pixhawk-with-dji-f450-kit-motors-beeping) (search for BEC).

Might be nice to ask about BECs on DroneTrest, referencing the above DIYDrones thread and this old old [thread](http://www.dronetrest.com/t/what-kit-do-i-need-for-a-diy-quadcopter-using-the-pixhawk-platform/2168) on their own site.

---

* [Nice F550 wired up picture](https://static.rcgroups.net/forums/attachments/1/4/2/1/a6709904-57-FW550Flying1.jpg)

* [Video overview, but not a tutorial, on flying a Pixhawk controlled drone](https://www.youtube.com/watch?v=SdRZuQiS7G4), includes flight modes like altitude-hold, circling etc.

* Nice overview of [Pixhawk family](https://www.lambdrive.com/depot/Robotics/Controller/PixhawkFamily/index.html) including history, models (classic, SnapDragon etc.), MAVLink and flight stacks and ground controller software.

---

Zener diode and Pixhawk power:

* [Powering the Pixhawk](http://ardupilot.org/copter/docs/common-powering-the-pixhawk.html) and search down for "zerner".
* More on the same [on DIYDrones](http://diydrones.com/forum/topics/zener-diode-in-pixhawk).

Painless360 has a [full video on power options](https://www.youtube.com/watch?v=DKK0jms402Q&t=459s&list=PLYsWjANuAm4r4idFZY24pP6s1K6ABMU0p&index=6).

However I don't think any of this is relevant for the 420S Lite ESCs that come with the E305 as I think they don't come with a red power wire - so need for a Zener and no possibility to power the Pixhawk via them. TODO: check for red wire when E305 system finally arrives.

---

User guides covering assembly to flight controller setup etc.:

* [The PX4 guide](https://docs.px4.io/en/).
* [The ArduPilot guide](http://ardupilot.org/copter/docs/introduction.html).

The parst covering wiring up the Pixhawk:

* [The PX4 guide](https://docs.px4.io/en/assembly/quick_start_pixhawk.html).
* [The ArduPilot guide](http://ardupilot.org/copter/docs/common-pixhawk-wiring-and-quick-start.html).

Wiring up telemetry (shows ArduPilot at least prefer the X6R and X8R over earlier models like the D4R-II):

* [Telemetry wire for FrSKY receivers](http://ardupilot.org/copter/docs/common-frsky-telemetry.html) plus setup in Mission Planner, OpenTX Companion and on the Taranis (probably a better source than the X8R, but non-Pixhawk specific, Blue Falcon video linked to elsewhere).

The pixhawk.org page on [wiring up telemetry for the D4R-II](https://pixhawk.org/peripherals/telemetry/frsky), note they point non-developers to the uninformative [telemetry page](https://docs.px4.io/en/peripherals/frsky_telemetry.html) in the new user manual (by way of an old archived user manual site).

[ArduPilot GPS wiring up](http://ardupilot.org/copter/docs/common-installing-3dr-ublox-gps-compass-module.html) - not that interesting wiring-wise but covers why you'd use a mast and covers the LEDs - red for power and flashing blue for GPS lock.

Pixhawk.org [overview of the Pixhawk](https://pixhawk.org/modules/pixhawk#specifications) - it's sensors, interfaces etc.
A very similar [overview](http://ardupilot.org/copter/docs/common-pixhawk-overview.html) from ArduPilot.

Setting up [waypoints in Mission Planner](http://ardupilot.org/copter/docs/common-planning-a-mission-with-waypoints-and-events.html#common-planning-a-mission-with-waypoints-and-events).

---

The developer guides:

* [The PX4 guide](https://dev.px4.io/en/).
* [The ArduPilot guide](http://ardupilot.org/dev/).

Note: the PX4 guide covers lots of things that are of interest to an audience beyond core flight controller developers, just look down the TOC - there's lots of high level general information, sections on flight controllers and airframes, tutorials on things like video streaming.

---

Learn to fly
------------

Videos:

* https://www.youtube.com/watch?v=OcxUCepBHkM
* https://www.youtube.com/watch?v=eEKJq9tU85A (what to avoid)
* https://www.youtube.com/watch?v=KRzKkjskhEw
* https://www.youtube.com/watch?v=Nk2h06Ql3cM (trim)

Pages:

* http://uavcoach.com/how-to-fly-a-quadcopter-guide/
* http://newatlas.com/drone-school-3-first-quadcopter-flight-tips-exercises/40910/

---

Antenna placement:

* On RCGroups thread [one](https://www.rcgroups.com/forums/showthread.php?2158458-FrSky-PCB-Antenna-Placement#post28634518) and [two](https://www.rcgroups.com/forums/showthread.php?2177966-FrSky-X8R-antenna-placement).
* FrSKY's [advise](https://www.rcgroups.com/forums/showthread.php?2177966-FrSky-X8R-antenna-placement) on the whole thing.
* Popular [antenna holder](http://www.thingiverse.com/thing:258146) (that matches FrSKY's advise) on Thingverse and a [remix](http://www.thingiverse.com/thing:411491) that doesn't involve a raised arm.

Note: the intention with holder seems to be that the antenna will point upwards - this seems to maximize the changce that the copter body will come between antenna and transmitter but perhaps this is irrelevant if the body is essentially transparent (thought 2.4GHz in general has poor propagation through walls etc.). Mounting it upwards on an arm will bring it closer to the GPS - I don't think this should be an issue - the receiver and the GPS operate on completely different frequencies.

[Antenna mount](https://www.unmannedtechshop.co.uk/pcb-antenna-mount-for-x8r-l9r-v2/) on Unmanned Tech.

---

Arduino and receiver:

* Sparkfun and [wiring up receiver and plain PWM outputs](https://www.sparkfun.com/tutorials/348). And a better [diagram](https://cdn.shopify.com/s/files/1/1689/3027/files/Rc_Arduino_Schematic.png?v=1486084270).

TODO: find the original S.BUS Arduino libraries plus the page that at least tries to cover the interupt aspect well.

* [mbed derived Arduino S.BUS library](https://github.com/zendes/SBUS)

Building the necessary S.BUS inverter - [video](https://oscarliang.com/ctt/uploads/2015/12/sbus-inverter-diagram-schematics.jpg) and [schematic](https://oscarliang.com/ctt/uploads/2015/12/sbus-inverter-diagram-schematics.jpg). Question: why can't the inversion be done in software - the inverter seems to just swap zeroes and ones and do nothing else to the signal.

---

Camera mounts:

* [Simple F450 GoPro mount](http://www.thingiverse.com/thing:470945)
* [Multipart GoPro mount](http://www.thingiverse.com/thing:2094289)
* [Anti-jello GoPro mount](http://www.thingiverse.com/thing:92014/#remixes) and an [F450 remix](http://www.thingiverse.com/thing:246168/#files) (crudely done - why do his mounting "squares" protrude into the cetral space?).

I added some of these, plug a couple of gimbal protectors so my Shapeways models:

* https://www.shapeways.com/mymodels

---

Misc links:

* 1S Paraboard for charging 1S batteries - https://hobbyking.com/en_us/micro-paraboard-micro-jst-jst-ph-connectors.html
* Good introduction to setting up a SkyRC charger (a dual charger similar to the S60). In German but better than any of the useless English ones - https://www.youtube.com/watch?v=1w9ROBMUEgk

* [ArduPilot Mission Planner documentation](http://ardupilot.org/planner/docs/common-install-mission-planner.html)
* [Mission Planner downloads](http://firmware.eu.ardupilot.org/Tools/MissionPlanner/)

* [QGroundControl](https://docs.qgroundcontrol.com/en/).

* [DroneCode](https://www.dronecode.org/dronecode-software-platform) - a body involved in coordinating between lots of teams, including the PX4 team, and used to also include ArduPilot until they [parted ways](http://discuss.ardupilot.org/t/ardupilot-and-dronecode/11295) (for reasons that sound understandable, at least the way ArduPilot tell it).

* [Setup VirtualBox to grab USB device before something on host does](https://forums.virtualbox.org/viewtopic.php?f=8&t=54008)

* [Meaning of Pixhawk tones](https://3dr.com/support/articles/listen_to_notification_tones/) - not terribly "consumable".

* DroneTrest nice complete build walkthru [part 1](http://blog.dronetrest.com/emax-nighthawk-x-series-x5-build-guide/) and [part 2](https://www.dronetrest.com/t/emax-nighthawk-x-series-x5-build-guide-part-2-configuration-of-sp-f3-evo-flight-controller/2994). Even though it's for a completely different quadcopter type with different flight controller and software it's a nice overview of pretty much everything that one needs to consider in the course of a build.

* Ideally your flight controller and GPS should be oriented properly in the plane but you can [correct for actual orientation](http://discuss.px4.io/t/px4-qgc-internal-external-magnetometer-calibration-and-orientation/1219) in the flight software.

* ArduPilot's [vibration damping](http://ardupilot.org/copter/docs/common-vibration-damping.html) page, in particular Gut McCaldin's much referenced solution and a link to the vibration obsessed Forrest Frantz's pages. Note: if you go there you'll various people who pop up elsewhere all chatting, so it seems well respected, and the Guy McCaldin setup comes up there as a good buyable option (all Frantz's solutions involve DIYing).
* Thingverse [plans](http://www.thingiverse.com/thing:163472) for McCaldin's model and his [Shapeway page](https://www.shapeways.com/product/348KGX5PM/omnimac-pixhawk-mount-v1-1?optionId=42539551) for it (with a small markup), plus the relevant [rubber plugs and screws](https://hobbyking.com/en_us/general-purpose-anti-vibration-rubber-w-m3-x-11mm-screw-and-m3-nylock-nut-4pcs-set.html?___store=en_us) from HobbyKing.

* [ArduPilot - why mounting the GPS on a mast is a good idea](http://ardupilot.org/copter/docs/common-magnetic-interference.html#common-magnetic-interference).

* [Restricted fly zones in Switzerland](https://map.geo.admin.ch/?layers=ch.bazl.einschraenkungen-drohnen&topic=aviation&lang=en&bgLayer=ch.swisstopo.pixelkarte-grau&layers_opacity=0.6&catalogNodes=1379&X=248250.00&Y=673960.00&zoom=3) (click on the purple and blue areas to see what they mean - purple is an absolute prohibition near airffields and purple is a restriction to flying below 150m, both are relevant only to drones above 0.5Kg).

* [LiPo safety bag with reference to relevant in-cabin airline regulation](https://www.brack.ch/hyperion-lipo-protective-bag-408878) (suitable for at least 2 batteries of the size I use).

* [Debugging the Pixhawk via GDB](http://ardupilot.org/dev/docs/debugging-with-gdb.html)

* Inside a Pixhawk - from [above](http://fpvlab.com/forums/attachment.php?attachmentid=40348&d=1391147798) and [below](http://fpvlab.com/forums/attachment.php?attachmentid=40349&d=1391147820).

---

Completely left field links:

* [mbed pin header files for Nucleo F429ZI](https://developer.mbed.org/users/mbed_official/code/mbed-dev/file/e13f6fdb2ac4/targets/TARGET_STM/TARGET_STM32F4/TARGET_STM32F429xI/TARGET_NUCLEO_F429ZI).

* Hackaday's series on using [CAD packages](http://hackaday.com/2014/02/05/3d-printering-making-a-thing-in-freecad-part-i/) - FreeCAD (and possible OpenSCAD) are the most relevant to me. Videos on [using FreeCAD](https://www.youtube.com/watch?v=Ls5MI3gSSlk) and [using OpenSCAD](https://www.youtube.com/watch?v=_Pp8w8W5Sg8).

* [Gitbook image captions plugin](https://www.npmjs.com/package/gitbook-plugin-image-captions).
* [The most popular Javascript lightbox](http://lokeshdhakar.com/projects/lightbox2/).

---

Generally good sites
--------------------

Oscar Liang's [site](https://oscarliang.com/) (even though it focuses on [FPV racing](https://fpvracing.tv/guides/beginners)), good jumping off pages are:

* [Drone racing for beginners](https://oscarliang.com/mini-quad-racing-guide/), skip down past the initial FPV racing stuff to the "Should I Build My First Drone?" and beyond. There are links to his highly informative articles from [transmitters](https://oscarliang.com/choose-rc-transmitter-quadcopter/) to [batteries](https://oscarliang.com/lipo-battery-guide/) - note his howtos aren't about specific makes and models but all about the common features and technologies behind the things he's discussing.
* [Overview of the hardware components of a quadcopter](https://oscarliang.com/build-a-quadcopter-beginners-tutorial-1/).

---

Batteries:

* [Battery anatomy and plugging in your battery alarm](http://learn.trossenrobotics.com/index.php/getting-started-with-the-arbotix/11-lipo-battery-guide).
* [Batteries in-depth, including the 80% rule](http://www.rchelicopterfun.com/rc-lipo-batteries.html).

---

Unsorted URLs already used in the other pages:

* http://ardupilot.org/copter/docs/build-your-own-multicopter.html
* http://ardupilot.org/dev/docs/apmcopter-code-overview.html
* http://px4.io/docs/px4-basic-concepts/
* https://github.com/ArduPilot/ardupilot
* https://github.com/PX4/Firmware/
* http://ardupilot.org/copter/docs/common-choosing-a-ground-station.html
* http://blog.dronetrest.com/taranis-x9d-or-taranis-q-x7-which-is-better-to-buy/
* https://pixhawk.org/peripherals/telemetry/frsky
* https://pixhawk.org/peripherals/radio-control/frsky
* https://pixhawk.org/peripherals/radio-control/frsky#receivers
* https://pixhawk.org/peripherals/radio-control/frsky#parts_list - D4R-II warning
* http://www.dronetrest.com/t/everything-you-need-to-know-about-lipo-battery-chargers/1326
* https://oscarliang.com/taranis-q-x7-tx/
* http://open-txu.org/home/undergraduate-courses/fund-of-opentx/using-zadig/
* http://www.open-tx.org/
* https://oscarliang.com/flash-opentx-firmware-taranis/
* https://www.youtube.com/watch?v=q1D-LEfDprk&feature=youtu.be&t=179
* http://www.frsky-rc.com/download/
* http://www.frsky-rc.com/media/mediaItem.php?m_id=17
* http://ardupilot.org/copter/docs/flight-modes.html
* https://opentx.gitbooks.io/manual-for-opentx-2-2/content/
* http://openrcforums.com/forum/viewtopic.php?f=45&t=8724
* http://open-txu.org/home/undergraduate-courses/
* http://ardupilot.org/copter/docs/common-mounting-the-flight-controller.html#standard-orientation
* http://www.dji.com/flame-wheel-arf/feature
* http://store.dji.com/product/e305-4
* http://www.dji.com/products/tuned-propulsion-system
* https://www.rcgroups.com/forums/showthread.php?2456770-Review-DJI-E305-Tuned-Propulsion-System
* http://store.dji.com/product/2312e-motor-800kv-cw
* http://www.rcuniverse.com/forum/rc-car-general-discussions-179/11586761-everything-you-need-know-about-lipo-batteries.html
* http://thedronegirl.com/2015/02/07/lipo-battery/
* http://www.tjinguytech.com/charging-how-tos/balance-connectors
* https://pixhawk.org/modules/stm32f4discovery
* https://bitbucket.org/nuttx/boards/src/master/stm32f429i-disco/
* http://www.nuttx.org/Documentation/NuttX.html#stm32f429x
* http://www.mjoldfield.com/atelier/2015/04/stm32-development.html
* https://github.com/PX4-NuttX
* https://github.com/PX4/homebrew-px4
* http://www.proficnc.com/content/13-pixhawk2
* https://pixhawk.ethz.ch/software/imu/sd_card
* https://oscarliang.com/choose-rc-transmitter-quadcopter/#modes
* http://newatlas.com/drone-school-quadcopter-transmitter-mode-1-2/40847/
* https://www.wearechampionmag.com/quadcopter-transmitter-mode2-vs-mode1-difference
* https://dronebuff.com/drone-controller/
* https://www.youtube.com/watch?v=Nk2h06Ql3cM
* https://www.youtube.com/watch?v=7cExS1tTOJA&feature=youtu.be&t=498
* https://www.youtube.com/watch?v=YD3ojhwVmrI&feature=youtu.be&t=291
* https://www.youtube.com/watch?v=yF8jrkYJ7nA&feature=youtu.be&t=22
* http://rcdiy.ca/taranis-q-x7-tutorial-first-flight-setup/