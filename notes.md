Notes
=====

This page contains miscellaneous notes that came out of putting together the parts list for the quadcopter.

Motor direction
---------------

A quadcopter has two clockwise (CW) and two counterclockwise (CCW) motors and there are clockwise and counterclockwise specific propellars. So spare propellars generally come in packs of two, one for each direction.

External LED and USB port
-------------------------

When the Pixhawk is buried at the heart of the quadcopter its power LED can be hard to see and its USB port difficult to access so one can buy a module that provides an external LED and USB port. This just consists of an extension cable that attaches to the Pixhawk at one end and has a LED and USB port at the other end that can be mounted somewhere more accessable on the frame.

The Pixhawk has a GPS and an I2C port - the I2C port is shown [here](https://pixhawk.org/modules/pixhawk) as being intended either for the compass or for an I2C splitter. As most GPS modules also provide the compass they have two connectors and take up both the GPS port and the I2C port. The module providing the external LED and USB port also connects to the I2C port so an I2C splitter is required to connect both it and the compass connector of the GPS module at the same time.

F450 ARF kit
------------

The Flame Wheel F450 ARF (almost ready to fly) kit is a popular kit recommended by many sites. Coming, as it does, with many parts it seems a convenient way to buy many of the components you need. However these kits aren't so popular that you'll necessarily find them at all, or at the best price, at the normal big brand online sites like Amazon or the bigger technology oriented sites.

Searching online however quickly becomes confusing - on different sites there are lists and pictures that clearly involve somewhat different components.

It turns out the kit is really just a bundle of two things:

* The [F450 frame](http://www.dji.com/flame-wheel-arf/feature) consisting of just the quadcopter arms and the top and bottom central plates.
* The [E305 tuned propulsion system](http://store.dji.com/product/e305-4) consisting of motors, propellars, ESCs and the necessary bolts etc.

It's the propulsion system that makes up most of the cost, the 4 motor E305 variant costs around US$150, while the frame itself costs only $25. And it's the propulsion system that's the source of confusion when comparing the F450 ARF kit across sites.

It seems the kit originally shipped with 30A OPTO ESCs, these were then replaced with the E300 propulsion system around 2014. And the E300 system was itself replaced (sometime in 2015) with the current (as of April 2017) E305 propulsion system.

The 30A OPTO ESCs and the E300 propulsion system are no longer available, however the photos and descriptions on many sites still refer to this setup. You can easily spot what system is involved by looking at the photos and finding the ESCs (rectanglar plastic components). The original ESCs are white and labelled 30A OPTO, the E300 ones are black (and labelled E300) and the E305 ESCs have a more high tech reddish semi-transparent look and are labelled 420 LITE.

I presume most sites actually carry the current version of the ARF kit and simply haven't updated their photos and descriptions since they first started carrying the kit.

In the end I bought an E305 propulsion system and an F450 frame separately, rather than combined as a kit, to make sure I got what I expected (the price saving of buying them bundled together seems to be minimal).

However it looks like DJI are no longer selling the F450 frame separately in many markets so you may have no choice but to buy the frame and propulsion system together in an ARF kit.

E300 vs E305 vs E310
--------------------

DJI produces a number of [propulsion systems](http://www.dji.com/products/tuned-propulsion-system). The E300, E305 and E310 systems are the ones most commonly mentioned in relation to the F450 frame.

The E300 vs E305 situation is simple - the E300 is no longer available and the E305 is clearly seen as its replacement.

The E305 vs the E310 situation is more complicated. The E310 actually came out before the E305 and while E310 systems are more expensive than E305 systems that doesn't mean the E310 is necessarily better than the E305. What's "better" depends on your needs - with a basic setup you'll actually get longer flying times with the E305 and choosing the E310 over the E305 involves research and geeky tradeoffs (involving features like active braking etc.) and deciding what's relevant in relation to how you intend to use your drone.

For an in-depth review of the E305, with some comparison to the E310, along with a link to an older E310 review by the same reviewer see [this post](https://www.rcgroups.com/forums/showthread.php?2456770-Review-DJI-E305-Tuned-Propulsion-System) to RCGroups.com.

E305 motor variants
-------------------

The motors that are part of the E305 family come in two variants - 800KV and 960KV (for the meaning of KV in this context see [KV on Wikipedia](https://en.wikipedia.org/wiki/Motor_constants)). These variants are identically priced, which should give you an indication that a higher KV values isn't better (or worse). In fact the 800KV variant can handle a higher take off weight and it's recommended that one use 4S batteries with them while 3S batteries are recommended for the 960KV variant (see the [features section](http://store.dji.com/product/2312e-motor-800kv-cw) for either of the motor variants). See the [batteries](#batteries) section for an explanation of the terms 4S and 3S.

Important: the E305 bundles that include propellars, motors and ESCs always include the 800KV variant.

So why would one ever want the 960KV variant? You'll have to Google for this - basically there are certain applications where higher RPMs, at the cost of lower torque, are a better fit.

Power connectors
----------------

TODO: provide link to common competing connectors like T-plug and XT60. Comment on lack of standardization, e.g. Gens ace and Tattu are popular LiPo brands and both produce near identical 4S and 3S batteries but Tattu uses XT60 connectors while Gens ace uses T-plug.

The power module and charger come with connectors suitable for directly connecting to a battery with an XT60 connector. However I bought batteries with a T-plug connector.

The charger came with a cable with two banana plugs at one end and an XT60 connector at the other. So I replaced this cable with a cable (like [this one](http://shop.epproduct.com/pi/en/EP-Ladekabel-Deans-Stecker.html)) with a T-plug connector instead. And for the power module I bought a male T-plug to female XT60 adaptor (like [this one](https://www.unmannedtechshop.co.uk/male-t-plug-to-female-xt60-adaptor/)).

When I bought my batteries I wasn't aware that there were other makes with XT60 connectors, finding such batteries would have saved this trouble.

The power module actually has two XT60 connectors, a male one that's meant to connect to the battery and a female one that connects to the PDB. The F450 frame comes with an unterminated cable that's meant to be used for connecting the PDB to the power module, but rather than solder an XT60 connector onto this cable I simply bought a cable that was already terminated with a male XT60 connector.

Note: as well as the two XT60 connectors, the power module has a 6-position cable that connects to the flight controller.

TODO: add update on cutting off the power module's male XT60 connector and replacing it with a T-plug connector instead of using the adaptor.

Batteries
---------

As I'm using the an E305 bundle that includes 800KV batteries I bought 4S batteries as recommended by DJI but what does 4S mean? It simply means the battery contains 4 cells (that combined can deliver 14.8V). See [everything you need to know about LiPo batteries](http://www.rcuniverse.com/forum/rc-car-general-discussions-179/11586761-everything-you-need-know-about-lipo-batteries.html)).

As there are now many restrictions on shipping LiPo batteries it's probably best to order them locally even if you order other parts internationally.

While the batteries are expensive most people seem to buy at least two so that they can have one attached to their drone and one in reserve.

In addition to the batteries I bought:

* A battery alarm - this makes a loud noise when your battery is about to die - this gives you time to land the drone rather than being taken by surprise and seeing it drop from the skies.
* A LiPo safety bag - the lithium-ion technology of LiPo batteries can result in explosions (as made clear to the world by the Samsung Note 7), this bag provides some degree of protection when charging and for storage. Even when such a bag is used LiPo batteries should still not be left charging unattended. There is a commercial drone development team in the same office space that I work in and they definitely use these bags.

**Update:** see elsewhere for info on the FLVSS sensor - this looks like a better alternative to the simple alarm.

Initially I wanted the simplest battery charger possible - no LCD screen or other apparently pointless features. I was going to buy the much cheaper SkyRC E430 charger but in the end I bought the S60. Why? Because LiPos have a storage voltage, if you're going to leave a LiPo lying around for more than a few days it should be charged to about 50% before storage. The S60 can charge or discharge a battery to the appropriate storage voltage, whereas with the E430 you'd have to e.g. work out how long it takes to fully charge a battery and then unplug the battery after it had been charging for about half this time.

There are no end of scare stories around lithium-ion batteries, such as LiPos, but clearly most such batteries never explode - the message seems to be to always buy new batteries from a recognised dealer and if you treat them with respect everything will be OK. For more details see e.g. [15 things every LiPo battery user should know](http://thedronegirl.com/2015/02/07/lipo-battery/).

Charger
-------

The cells in a LiPo battery need to be charged in a [balanced manner](http://www.tjinguytech.com/charging-how-tos/balance-connectors) so the batteries actually have two connectors:

* The already mentioned T-plug connector used both to connect to the charger for charging and then to the drone to deliver power.
* A balance port connector that also connects to the charger and is necessary for monitoring the charging process. During flight this connector is left unconnected or can be connected to a battery alarm that uses it to monitor if the voltage falls below a predefined danger level.

So during charging the battery is connected via both its connectors to the charger.

IMU and MCU
-----------

As noted elsewhere the main group of sensors in the flight controller is called the IMU (inertial measurement unit). If you'd like to experiment with such sensors on their own then I suggest the Adafruit [NXP 9-DOF IMU breakout](https://www.adafruit.com/product/3463) along with their [barometric pressure sensor breakout](https://www.adafruit.com/product/2651).

Then work throught their tutorials for the [9-DOF IMU](https://learn.adafruit.com/nxp-precision-9dof-breakout?view=all) and the [barometric pressure sensor](https://learn.adafruit.com/adafruit-bmp280-barometric-pressure-plus-temperature-sensor-breakout?view=all). Afterwards go further and learn about things like the Madgwick IMU and AHRS sensor fusion algorithm with the Adafruit AHRS (altitude and heading reference system) [tutorial](https://learn.adafruit.com/ahrs-for-adafruits-9-dof-10-dof-breakout?view=all).

The Pixhawk uses an [STM32](https://en.wikipedia.org/wiki/STM32) MCU ([microcontroller](https://en.wikipedia.org/wiki/Microcontroller)). STMicroelectronics produce two very cheap development boards based around the STM32F429ZI (which is almost identical to the MCU in the Pixhawk) - the [Nucleo F429ZI](https://developer.mbed.org/platforms/ST-Nucleo-F429ZI/) and the [Discovery F429ZI](https://developer.mbed.org/platforms/ST-Discovery-F429ZI/).

While I prefer the Nucleo boards most of the pages covering the PX4 flight stack and its [NuttX RTOS](http://nuttx.org/) (real-time operating system) refer to the Discovery board, e.g.:

* Pixhawk.org - [Running PX4 firmware on the STM Discovery development kit](https://pixhawk.org/modules/stm32f4discovery).
* Bitbucket - [NuttX/boards/stm32f429i-disco](https://bitbucket.org/nuttx/boards/src/master/stm32f429i-disco/).
* NuttX - [supported platforms](http://www.nuttx.org/Documentation/NuttX.html#stm32f429x).
* [STM32 development on Mac OS](http://www.mjoldfield.com/atelier/2015/04/stm32-development.html).

Note: the NuttX source is hosted on Bitbucket, PX4 host their own versions of the [NuttX repos on Github](https://github.com/PX4-NuttX) - the two are not mirrors and it's unclear how far they've diverged from each other.

For developers using Macs the PX4 people provide a number of [homebrew formula](https://github.com/PX4/homebrew-px4) including one to install the appropriate GCC toolchain.

Vibration
---------

The drone depends on sensors that are susceptible to the vibrations produced by the propulsion system.

Damping these vibrations is the reason for the noticeable size increase in the [Pixhawk 2](http://www.proficnc.com/content/13-pixhawk2), the so called "cube" that provides a space in which to isolate the IMU.

On the whole it seems the classic Pixhawk can live with normal vibration, 3DR (the original manufacturer) just recommended attaching it directly to the frame with adhesive foam pad, but there are many home made and low volume commercial options that try to improve on this.

I bought a [vibration damping mounting set](https://www.unmannedtechshop.co.uk/vibration-damping-mounting-set/) and used it but didn't make any effort to see if its presence or absence noticeably affected any aspect of the drone's operation.

Waypoints
---------

The Pixhawk can take an SD card which can be used to store waypoints (among other things - see [here](https://pixhawk.ethz.ch/software/imu/sd_card)) and before flying you can connect directly to the Pixhawk via USB and so establish a flight plan without the ground control software then needing to communicate with the drone while in flight.

However in-flight interaction between the ground control software and the drone might be interesting and I might have bought the necessary telemetry kit (which also comes as a bundle option with the Unmanned Tech Pixhawk) if it had not been out of stock:

* [100mW telemetry kit](https://www.unmannedtechshop.co.uk/100mw-ardupilot-unmanned-telemetry-kit-v2-433mhz/)
* [500mW telemetry kit](https://www.unmannedtechshop.co.uk/500mw-unmanned-3dr-telemetry-kit-v2-433mhz/)

Note that the 100mW page advises also buying a [6-pos connector](https://www.unmannedtechshop.co.uk/df13-6-position-connector-15cm-pack-of-5/) (there are 15cm and 30cm versions) for connecting to the Pixhawk, while the 500mW page warns that 500mW may not be legal in certain countries.

TODO: merge some or all of this with the telemetry kit section on main page.

Pixhawk 2.1
-----------

As of March 2017 something called the [Pixhawk 2.1](http://www.proficnc.com/content/13-pixhawk2) is gradually becoming available. While it is open source hardware it appears to be a product of a particular individual, Philip Rowse, and his company ProfiCNC rather than a wider community.

It has exactly the same STM32 F4 MCU (running at the same speed etc.) as the classic Pixhawk. However it does have design features that the Pixhawk does not, such as vibration isolation, IMU (inertial measurement unit) redundancy, better connectors and more I/O. I.e. it appears to be a more professional design rather than something fundamentally different to the original Pixhawk.

While Philip Rowse deserves to make money from his efforts he clearly feels that he and his company ProfiCNC should be the sole manufactures of the unit, i.e. he does not seem to be an open hardware enthusiast encouraging the world to pick up on his design. For a sense of this see his interaction with the wider community on the ArduPilot forums, e.g. this [Pixhawk 2 Getting Started](http://discuss.ardupilot.org/t/pixhawk-2-getting-started/10031) thread.

Having said all that the Pixhawk 2 is [clearly listed](https://pixhawk.org/modules/pixhawk2) as one of the autopilot systems acknowledged on the pixhawk.org site.

And it does seem that the initial development did involve the wider community and 3DR, however 3DR seem to have gone their own way with closed hardware and it is only through the efforts of Philip Rowse that it has eventually come to market at all.

The classic Pixhawk is now quite an old design and some of its sensors are no longer readily available, there being better (and often cheaper) versions available now. So the design does need a refresh and the Pixhawk 2.1 provides that. Once it becomes more generally available (as of April 2017 it is still only being released in small batches) and has been around for a little longer I'll take another look at it.

Pixhawk.org vs ArduPilot.org
----------------------------

The [pixhawk.org](https://pixhawk.org/) site seems to be the spiritual home of the Pixhawk while the [ardupilot.org](http://ardupilot.org/ardupilot/) site seems to be more actively maintained and has far more detail.

Pixhawk.org seems to be concerned with higher level issues, like open hardware, while ardupilot.org focuses more on the practical hobbyist oriented issues of getting things working.

It's unclear if the pixhawk.org site's information is often just stale or if it reflects real differences in hardware supported by the PX4 and ArduPilot flight stacks (pixhawk.org claims to be somewhat agnostic when it comes to the flight stack but clearly most of the site assumes the PX4 stack), e.g. pixhawk.org recommends the D4R-II FrSKY receiver while ardupilot.org considers it deprecated and covers far newer FrSKY receivers.

Bag / case
----------

The main quoted dimension for a quadcopter seems to be its diagonal size which is the distance from the central shaft of one motor to that of the motor furthest away from it, i.e. the one diagonally opposite.

The DJI Phantom 3, one of the most popular ready assembled drones, has a diagonal size of 350mm.

The F450 has a diagonal size of 450mm (see [here](http://g03.a.alicdn.com/kf/HTB1srtkGVXXXXcnXFXXq6xXFXXXP/221683912/HTB1srtkGVXXXXcnXFXXq6xXFXXXP.jpg)) and as such is quite a lot larger than most consumer drones. So it won't fit in most cases, even those cases described as "universal".

I would have liked something like a cheap shoulder bag or messenger bag with padding and according to the pixhawk.org [F450 page](https://pixhawk.org/platforms/multicopters/dji_flamewheel_450) Parrot used to produce something like this for their AR.Drone 2.0 which would fit the F450 nicely. It doesn't seem to be available anymore but you can see it pictured on various sites (e.g. on [hobbysportz.com](http://www.hobbysportz.com/index.php?route=product/product&product_id=878)) and you can find knock-offs on eBay (e.g. [here](http://www.ebay.com/itm/New-PARROT-AR-DRONE-CANVAS-TOTE-BAG-CARRY-BAG-Black-FREE-SHIPPING-/232217382039?hash=item36113c0c97)).

The only other possibly suitable carry case that I found was the [Lowepro DroneGuard Kit](https://www.lowepro.de/brands/lowepro/droneguard/droneguard-kit/pd350/) which may be a good match for the F450 as the arms can stick out over the side of the bag. However without a shoulder strap it looks more suitable for just carrying a drone a short distance from the back of your car rather than e.g. carrying it on public transport.

Many people seem to have just made their own cases using foam and the kind of storage boxes you find at DIY stores, but again these kind of cases only really look suitable for transport by car.

Chinese copies
--------------

With some of the parts here being open source hardware it's perhaps odd to talk of Chinese "copies".

But there certainly seem to be no end of Chinese versions of all the parts used in this project, many masquerading as versions from more respected brands or lesser known brands that had already proved themselves capable of producing a quality version of a given component.

So while you can buy all necessary components from sites like [AliExpress](https://www.aliexpress.com/) or [Banggood](http://www.banggood.com/) it's definitely a case of buyer beware.

Miscellaneous parts
-------------------

[Threadlocker](https://en.wikipedia.org/wiki/Thread-locking_fluid) (also called thread or screw glue) comes in various strengths but for this situation it's a weak glue that's applied to the thread of a scew before you screw it into place, it's weak enough that you can still unscrew the screw later but strong enough that it stops the screw coming loose due to vibration (apparently it's common in automotive applications).

According to the [F450 user manual](http://dl.djicdn.com/downloads/flamewheel/en/F450_User_Manual_v2.2_en.pdf) you should use it for the various screws needed to assemble the frame (but not for attaching the propellars).

[Loctite 243](http://www.na.henkel-adhesives.com/industrial/blue-threadlockers-medium-strength-13231.htm) seems to be suitable (UHU also have something similar, [UHU schraubensicher mittelfest](http://www.uhu-profi.de/produkte/anaerobe-klebstoffe-schraubensicherung/detail/uhu-schraubensicher-mittelfest.html), but don't seem to market it internationally).

Sources:

* 3ml Loctite 243 - [Amazon UK](https://www.amazon.co.uk/Loctite-Lock-Acting-Thread-Sealant/dp/B003ZUXQIA).
* 10ml Loctite 243 - [Conrad CH](http://www.conrad.ch/ce/de/product/055936/Schraubensicherung-Festigkeit-mittel-10-ml-LOCTITE-243-1335840).
* 10ml UHU schraubensicher mittelfest - [Conrad CH](http://www.conrad.ch/ce/de/product/055357/Schraubensicherung-Festigkeit-mittel-10-ml-UHU-Schraubensicher-45590).

A 2mm hex key (or Allen key/wrench) is needed for the F450 screws - sources:

* Set of metric hex keys [Amazon UK](https://www.amazon.co.uk/metric-0-89mm-1-27mm-wrench-Engineer/dp/B002F9MNK4).
* Single 2mm hex screw driver [Conrad UK](http://www.conrad-electronic.co.uk/ce/en/product/817256/Workshop-Allen-wrench-Wera-354-Spanner-size-2-mm-Blade-length-75-mm).
* Set of hex keys [Conrad UK](http://www.conrad-electronic.co.uk/ce/en/product/818955/Allen-Allen-key-set-7-piece-Basetech).

Some other components involve very small hex key sizes, such as 1mm or 2.5mm, so a set of smaller key sizes is useful (rather than the more common sets where the smallest size key is 2mm or larger). It's nice though to have a proper 2mm screw driver, rather than a tiny basic hex key, for assembling things like the F450 frame.
