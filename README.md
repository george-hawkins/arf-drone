F450 quadcopter build
=====================

Parts:

* [DJI E305 propulsion system](https://www.estore.ch/flying-platforms/accessories/flame-wheel-accessoires/1336/e305-4x-motor/esc-3-pair-propeller-accessories-pack)
* [DJI Flame Wheel F450 frame](https://www.estore.ch/flying-platforms/flame-wheel/1304/flame-wheel-f450)
* [Landing gear](https://www.estore.ch/flying-platforms/accessories/flame-wheel-accessoires/1311/f450/f550-landing-gear)
* [Pixhawk flight controller](https://www.unmannedtechshop.co.uk/unmanned-pixhawk-autopilot-kit/) bundled with a Ublox Neo-M8N GPS module and an APM power module.
* [LiPo battery charger](https://www.unmannedtechshop.co.uk/skyrc-e430-lipo-life-2-4s-balance-charger/)
* [LiPo safety bag](https://www.unmannedtechshop.co.uk/lipo-safety-bag/)
* [Battery strap](https://www.unmannedtechshop.co.uk/hook-loop-battery-strap-pack-of-5/)
* [FrSKY D4R-II receiver](https://www.unmannedtechshop.co.uk/frsky-d4r-ii-4-8ch-accst-receiver/)
* [FrSKY USB upgrade cable](https://www.unmannedtechshop.co.uk/frusb-3-frsky-upgrade-cable-fuc-3/) bundled with a smart port converter (SPC).
* [FrSKY Taranis Q X7 transmitter](http://www.dronefactory.ch/produkt/frsky-taranis-q-x7-weiss/)
* [FrSKY FUL-1 TTL-to-RS232 converter](https://www.unmannedtechshop.co.uk/frsky-transmitter-receiver-upgrade-adapter-ful-1/)
* [Vibration damping mounting set](https://www.unmannedtechshop.co.uk/vibration-damping-mounting-set/)
* [Battery alarm](https://www.unmannedtechshop.co.uk/battery-monitor-alarm-1-8s/)
* [Spare propellars](https://www.estore.ch/flying-platforms/accessories/flame-wheel-accessoires/1349/e305-9450-self-tightening-rotor-composite-hub-white-with-silver-stripes?number=FE0014)
* Two 3300 mAh 4S 14.8V 25C LiPo batteries (see battery section below).

See upgrade warning regarding receiver [here](https://pixhawk.org/peripherals/radio-control/frsky#receivers) hence the FrSKY USB upgrade cable (this cable has a 4 pin connector while the FrSKY D4R-II has a 3 pin connector hence the SBC).

Extras:

* [External LED and USB module](https://www.unmannedtechshop.co.uk/all-in-one-led-and-usb-module-for-pixhawk/) for Pixhawk
* [I2C splitter](https://www.unmannedtechshop.co.uk/i2c-board/)

Once installed in the frame it can be hard to see the LED on the Pixhawk or get at its USB port hence the external LED and USB module.

This module connects to the same I2C port on the Pixhawk as the compass, hence the I2C splitter.

Note: the Pixhawk has a GPS and I2C port - the I2C port is shown [here](https://pixhawk.org/modules/pixhawk) as being intended either for the compass or for an I2C splitter. The Ublox Neo-M8N GPS module also provides the compass so it has two connectors and takes up both the GPS port and an I2C port.

Batteries
---------

Many pages that describe building an F450 based mention a 3s battery however the DJI [E305 product page](https://store.dji.com/product/e305-4) recommends a 4S battery (i.e. 4 cells rather than 3 - see [everything you need to know about LiPo batteries](http://www.rcuniverse.com/forum/rc-car-general-discussions-179/11586761-everything-you-need-know-about-lipo-batteries.html)).

As there are now many restrictions on shipping LiPo batteries it's probably best to order them locally even if you order other parts internationally.

While the batteries are expensive most people seem to buy at least two so that they can have one attached to their drone and one in reserve.

Swiss suppliers of Gens ace 3300 mAh 4S 14.8V 25C LiPo batteries:

* <https://www.pc-ostschweiz.ch/de/Genspow-GmbH-LiPo-Akku-14.8V-3300mAh-25C-136.35x42.72x30.62mm-366g-2a18048968.htm> Fr. 39.
* <https://www.brack.ch/gens-ace-lipo-akku-3300mah-234057> Fr. 39.
* <https://www.digitec.ch/de/s1/product/gens-ace-akku-1480v-3300mah-lipo-4s-rc-akku-5606232?tagIds=1-850-596> Fr. 55.

Note: theis battery comes with a T-plug (Deans) connector.

Q: what's the battery alarm (see parts list) for? A: it makes a loud noise when your battery is about to die - this gives you time to land the drone before it just drops out of the sky!

Waypoints
---------

The Pixhawk can take an SD card which can be used to store waypoints (among other things - see [here](https://pixhawk.ethz.ch/software/imu/sd_card)) and you can communicate directly with the Pixhawk via USB and so establish a flight plan without the ground control software then needing to communicate with the drone while in flight.

However in-flight interaction between the ground control software and the drone might be interesting and I might have bought the necessary telemetry kit (which also comes as a bundle option with the Unmanned Tech Pixhawk) if it had not been out of stock:

* [100mW telemetry kit](https://www.unmannedtechshop.co.uk/100mw-ardupilot-unmanned-telemetry-kit-v2-433mhz/)
* [500mW telemetry kit](https://www.unmannedtechshop.co.uk/500mw-unmanned-3dr-telemetry-kit-v2-433mhz/)

Note that the 100mW page advises also buying a [6-pos connector](https://www.unmannedtechshop.co.uk/df13-6-position-connector-15cm-pack-of-5/) (there's also a 30cm version) for connecting to the Pixhawk, while the 500mW page warns that 500mW may not be legal in certain countries.

Orientation
-----------

The white arrow seen near the bottom of the front panel of the Pixhawk case isn't a pointless graphic - when installing the unit this arrow should be pointing towards the front of the quadcopter (see the [standard orientation](http://ardupilot.org/copter/docs/common-mounting-the-flight-controller.html#standard-orientation) section of the ArduPilot setup guide).

Flight stack
------------

The Pixhawk supports two flight stacks - PX4 and ArduPilot. The pixhawk.org used to feature a page covering the choice between the two, but for whatever reason this is now gone, but you can still find [it on the Wayback Machine](https://web.archive.org/web/20150915080740/http://www.pixhawk.com/choice).

Note: the ArduPilot stack, often abbreviated as APM (for ArduPilotMega), is rather misleadingly named. It comes from its early days when it originally ran on the [Arduino Mega](https://www.arduino.cc/en/Main/arduinoBoardMega) - but those days are long gone. It now runs on ARM processors, like the one found in the Pixhawk, and various other platforms. This [code overview](http://ardupilot.org/dev/docs/apmcopter-code-overview.html) shows it can run on Linux and that when it runs on the Pixhawk it actually sits on top of the PX4 firmware.

When it comes to comparing the PX4 and ArduPilot flight stacks there's lots of confusing and often contradictory information out there. For some information see [this thread](http://discuss.ardupilot.org/t/apm-stack-question-apm-vs-px4/11497) and [this thread](http://discuss.ardupilot.org/t/new-guy-here-trying-to-make-sense-of-it-all/9255) on the ArduPilot forums and [this thread](http://discuss.px4.io/t/px4-vs-ardupilot-when-to-choose-what/2214) and [this thread](http://discuss.px4.io/t/px4-vs-ardupilot-arduplane-for-mapping-photogrammetry-using-fixed-wing/1766) on the the PX4 forums.

The [ArduPilot stack](https://github.com/ArduPilot/ardupilot) and the [PX4 one](https://github.com/PX4/Firmware/) can both be found on Github and both are clearly under active development.

PX4 appears to more a product of the academic community while ArduPilot appears to a product of the hobbyist community with some resulting differences in focus, e.g. PX4 seem to focus more on autonomous flight while ArduPilot perhaps more on direct control.

Both though work with ground control software for autonomous operation, e.g. Mission Planner (for ArduPilot) and QGroundControl (originally developed to work with PX4 but now also compatible with ArduPilot). See the [ground station](http://ardupilot.org/copter/docs/common-choosing-a-ground-station.html) section of the ArduPilot site for some comparison of ground control applications.

**Important:** the pixhawk.org and ardupilot.org sites cover much more than just flight stacks, most of the content on both is useful irrespective of which flight stack one uses.

Pixhawk.org vs ArduPilot.org
----------------------------

The pixhawk.org site seems to be the spiritual home of the Pixhawk while the ArduPilot.org site seems to be more actively maintained and has far more detail.

Pixhawk.org seems to be concerned with higher level issues, like open hardware, while ardupilot.org focuses more on the practical issues of getting working.

You can see obvious differences, e.g. pixhawk.org clearly lists the D4R-II receiver as their recommended FrSKY receiver (see [here](https://pixhawk.org/peripherals/radio-control/frsky)), while ardupilot.org lists the D4R-II as deprecated and recommend far newer FrSKY receivers (see [here](http://ardupilot.org/copter/docs/common-frsky-telemetry.html)).

It's unclear if the pixhawk.org site's information is often just stale or if it reflects real differences in hardware supported by PX4 and ArduPilot flight stacks (pixhawk.org claims to be somewhat agnostic when it comes to the flight stack but clearly most of the site assumes the PX4 stack).

Bag / case
----------

The main quoted dimension for a quadcopter seems to be its diagonal size which is the distance from the central shaft of one motor to that of the motor furthest away from it, i.e. the one diagonally opposite.

The DJI Phantom 3, one of the most popular ready assembled drones, has a diagonal size of 350mm.

The F450 has a diagonal size of 450mm (see [here](http://g03.a.alicdn.com/kf/HTB1srtkGVXXXXcnXFXXq6xXFXXXP/221683912/HTB1srtkGVXXXXcnXFXXq6xXFXXXP.jpg)) and as such is quite a lot larger than most common drones. So it won't fit it most cases, even those cases described as "universal".

I would have liked something like a cheap shoulder bag or messenger bag with padding and according to the pixhawk.org [F450 page](https://pixhawk.org/platforms/multicopters/dji_flamewheel_450) Parrot used to produce something like this for their AR.Drone 2.0 which would fit the F450 nicely. It doesn't seem to be available anymore but you can see it pictured on various sites (e.g. on [hobbysportz.com](http://www.hobbysportz.com/index.php?route=product/product&product_id=878)) and you can find knock-offs on eBay (e.g. [here](http://www.ebay.com/itm/New-PARROT-AR-DRONE-CANVAS-TOTE-BAG-CARRY-BAG-Black-FREE-SHIPPING-/232217382039?hash=item36113c0c97)) (presumably those eBay and hobbysportz links will soon go stale fairly quickly).

The only other possibly suitable carry case that I found was the [Lowepro DroneGuard Kit](https://www.lowepro.de/brands/lowepro/droneguard/droneguard-kit/pd350/) which may be a good match for the F450 as the arms can stick out over the side of the bag. However without a shoulder strap it looks more suitable for just carrying a drone a short distance from the back of your car rather than e.g. carrying it on public transport.

Many people seem to have just made their own cases using foam and the kind of storage boxes you find at DIY stores, but again these kind of cases only really look suitable for transport by car.

Transmitter
-----------

The Taranis X9D+ is a mid-spec transmitter that's a very popular choice for setups like the one here. However I'm not really interested in direct remote control of the drone, but just want it as an option, hence the choice of the Q X7 which is a cut down cheaper version of the X9D+ but is very similar in many respects and runs the same [OpenTX](http://www.open-tx.org/downloads) firmware (note the warning for Taranis users on the download page, it's probably better to get firmware updates via FrSKY).

See the Dronetrest blog for a [comparison of the two transmitters](http://blog.dronetrest.com/taranis-x9d-or-taranis-q-x7-which-is-better-to-buy/).

Pixhawk 2.1
-----------

As of March 2017 something called the [Pixhawk 2.1](http://www.proficnc.com/content/13-pixhawk2) is gradually becoming available.

While it is open source hardware it appears to be a product of a particular individual, Philip Rowse, and his company ProfiCNC rather than a wider community.

At its heart it is identical to the original Pixhawk - it has same STM32 F4 MCU (running at the same speed etc.).

However it does have design features that the Pixhawk does not, such as vibration isolation, IMU (inertial measurement unit) redundancy, better connectors and more I/O.

I.e. it appears to be a more professional design rather than something fundamentally different to the original Pixhawk.

While Philip Rowse deserves to make money from his efforts he clearly feels that he and ProfiCNC should be the sole manufactures of the unit, i.e. he does not seem to be an open hardware enthusiast encouraging the world to pick up on his design.

For a sense of this see his interaction with the wider community on the ArduPilot forums, e.g. this [Pixhawk 2 Getting Started](http://discuss.ardupilot.org/t/pixhawk-2-getting-started/10031) thread.

Having said all that the Pixhawk 2 is [clearly listed](https://pixhawk.org/modules/pixhawk2) as one of the autopilot systems on the pixhawk.org site.

And it does seem that the initial development did involve the wider community and 3DR, however 3DR seem to have gone their own way with closed hardware and it is only through the efforts of Philip Rowse that it has eventually come to market at all.

Telemetry
---------

The FrSKY D4R-II is the recommended receiver on the pixhawk.org [FrSKY page](https://pixhawk.org/peripherals/radio-control/frsky) and as outlined on their [FrSKY telemetry page](https://pixhawk.org/peripherals/telemetry/frsky) you can use an [FrSKY FUL-1 converter](https://www.unmannedtechshop.co.uk/frsky-transmitter-receiver-upgrade-adapter-ful-1/) to connect the Pixhawk to the receiver so it can send telemetry data to the transmitter.

However the ArduPilot [FrSKY telemetry page](http://ardupilot.org/copter/docs/common-frsky-telemetry.html) describes the D4R-II as deprecated and recommends the [FrSKY X8R](https://www.unmannedtechshop.co.uk/frsky-x8r-8-16ch-s-bus-accst-receiver-with-smart-port/) again with the FUL-1 but with an additional [smart port converter](https://www.unmannedtechshop.co.uk/frsky-smart-port-converter-spc/) (the same converter as bundled with the FrSKY USB upgrade cable above).

Pixhawk autopilot
-----------------

The [Pixhawk](https://pixhawk.org/modules/pixhawk) is an [open source hardware](http://freedomdefined.org/OSHW) flight controller that originated at [ETH Zurich](https://en.wikipedia.org/wiki/ETH_Zurich) and is the de-facto standard non-commerical flight controller.

The software for the Pixhawk is the [PX4 autopilot](http://px4.io/docs/px4-basic-concepts/) that covers both basic direct remote control and fully autonomous autopilot operation.

While the Pixhawk is open source hardware most discussions recommend the [3DR](https://3dr.com/) produced Pixhawk and warn against cheap chinese produced versions.

However 3DR no longer produce the Pixhawk version you see covered by the [pixhawk.org](https://pixhawk.org/) and [px4.io](http://px4.io/) but have now gone off and produced their own version called the [Pixhawk Mini](https://store.3dr.com/products/3dr-pixhawk).

I specifically wanted an open source hardware controller - after a bit of searching I came across versions produced by:

* Unmanned Tech - <https://www.unmannedtechshop.co.uk/unmanned-pixhawk-autopilot-kit/>
* 3DXR - <https://www.3dxr.co.uk/product/pixhawk-1-v2-4-8-m8n-gps-power-brick/>
* HolyBro - <https://synosystems.de/de/kategorien/315-pix32-px4-246-pixhawk-flight-controller.html>
* RadioLink - <http://www.robotshop.com/eu/en/radiolink-pixhawk-advanced-autopilot-se100-gps.html>
* Salange - <https://www.mhm-modellbau.de/part-FLC-HM07.php>

I went with the version from Unmanned Tech for no better reason than that they're linked to as a supplier from the pixhawk.org site and they seem to be a bit more engaged in the product than the other suppliers.

I bought it bundled with a [Ublox Neo-M8N GPS module](https://www.unmannedtechshop.co.uk/ublox-neo-m8n-gps-with-compass/) and an [APM power module](https://www.unmannedtechshop.co.uk/high-voltage-apm-power-module-with-3a-ubec/).

Stores
------

I live in Switzerland and generally look for stores in the UK, Germany and Switzerland.

These are the one I found that sell the E305 propulsion system:

* http://www.quadcopters.co.uk/
* https://www.buildyourowndrone.co.uk/
* https://www.marionvillemodels.com/
* https://www.mhm-modellbau.de/
* http://www.globe-flight.de/
* https://www.freakware.de/p/
* http://www.flight-place.de/
* https://www.estore.ch/
* http://www.visuals-switzerland.net

And you can also buy it direct from DJI (oddly their store doesn't offer the F450 frame or many other parts):

* http://store.dji.com/product/e305-4

Flame Wheel F450 ARF kit
------------------------

The Flame Wheel F450 ARF (almost ready to fly) kit is a popular kit recommended by many sites.

Coming, as it does, with many parts it seems a convenient way to buy almost all the components you need.

However these kits aren't so popular that you'll necessarily find them at all or at the best price at the normal big brand online sites like Amazon or the bigger technologu oriented sites.

Searching online however quickly becomes confusing - a wide variety of prices, pictures that clearly involve somewhat different components on different sites and list of slightly different number of components (with some sites listing e.g. a single set of propellars, some with both 8" and 10" propellar sets and some with additional spare propellars).

It turns out the kit is really just a bundle of two things:

* The [F450 frame](http://www.dji.com/flame-wheel-arf/feature) consisting of just the polyamide nylon arms and the top and bottom central plates/boards.
* The [E305 tuned propulsion system](http://store.dji.com/product/e305-4) consisting of motors, propellars, ESC (electronic speed control) units plus necessary bolts etc.

It's the propulsion system that makes up most of the cost, the 4 motor E305 variant costs around USD $150, while the frame itself just costs around $25.

And it's the propulsion system that's the source of confusion when comparing the F450 ARF kit across sites.

It seems the kit originally shipped with the no longer available E300 propulsion system and the photos and descriptions on many sites still refer to this setup (you can easily spot the white rectangular components labelled 30A OPTO - these are the ESCs).

On other sites you can see the components from the E305 propulsion system (here the ESCs have a more high tech reddish semi-transparent look and are labelled 420 LITE).

It's not clear whether sites simply haven't updated their photos and descriptions or if they really are selling older variants of the kit. Many sites make no mention at all of E300 or E305, simply listing "motots" etc. without specific part numbers.

And the components listed by some sites don't line up at all with what you get when buying the E305 propulsion system on its own, e.g. not listing the two spare propellars or listing two sets of different length propellars rather than just 9.4" propellars.

In the end I bought an E305 propulsion system and an F450 frame separately, rather than as a kit, to make sure I got what I expected (and the price savings of buying them bundled together in a kit seem to be minimal).

E300 vs E305 vs E310
--------------------

DJI products a number of [propulsion systems](http://www.dji.com/products/tuned-propulsion-system). The E300, E305 and E310 systems are the ones most commonly mentioned in relation to the F450 frame.

The E300 vs E305 situation is simple - the E300 is no longer available and the E305 is clearly seen as its replacement.

The E305 vs the E310 situation is more complicated. The E310 actually came out before the E305 and while E310 systems are more expensive than E305 systems that doesn't mean the E310 is necessarily better than the E305. "Better" depends on your needs - with a basic setup you'll actually get longer flying times with the E305 and choosing the E310 over the E305 involves research and geeky tradeoffs (involving features like active braking etc.) and deciding what's relevant in relation to how you intend to use your drone.

For an in-depth review of the E305, with some comparison to the E310, along with a link to an older E310 review by the same reviewer see [this post](https://www.rcgroups.com/forums/showthread.php?2456770-Review-DJI-E305-Tuned-Propulsion-System) to RCGroups.com.
