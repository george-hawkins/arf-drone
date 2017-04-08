Brief notes
-----------

* A quadcopter has two clockwise and two counterclockwise motors and there are clockwise and counterclockwise specific propellars, so a pack of two spare propellars contains one of each.
* When the Pixhawk is buried at the heart of the quadcopter its power LED can be hard to see and its USB port difficult to access - the external LED and USB is an extension cable that attaches to the Pixhawk at one end and has a power LED and USB port at the other end that can be mounted somewhere more accessable on the frame.

TODO: fold into above:
Once installed in the frame it can be hard to see the LED on the Pixhawk or get at its USB port hence the external LED and USB module. This module connects to the same I2C port on the Pixhawk as the compass, hence the I2C splitter. The Pixhawk has a GPS and I2C port - the I2C port is shown [here](https://pixhawk.org/modules/pixhawk) as being intended either for the compass or for an I2C splitter. The Ublox Neo-M8N GPS module also provides the compass so it has two connectors and takes up both the GPS port and an I2C port.

F450 ARF kit
------------

The Flame Wheel F450 ARF (almost ready to fly) kit is a popular kit recommended by many sites.

Coming, as it does, with many parts it seems a convenient way to buy almost all the components you need.

However these kits aren't so popular that you'll necessarily find them at all or at the best price at the normal big brand online sites like Amazon or the bigger technologu oriented sites.

Searching online however quickly becomes confusing - on different sites there are pictures that clearly involve somewhat different components, along with lists of slightly different number of components (with some sites listing e.g. a single set of propellars, some with both 8" and 10" propellar sets and some with additional spare propellars).

It turns out the kit is really just a bundle of two things:

* The [F450 frame](http://www.dji.com/flame-wheel-arf/feature) consisting of just the polyamide nylon arms and the top and bottom central plates/boards.
* The [E305 tuned propulsion system](http://store.dji.com/product/e305-4) consisting of motors, propellars, ESC (electronic speed control) units plus necessary bolts etc.

It's the propulsion system that makes up most of the cost, the 4 motor E305 variant costs around USD $150, while the frame itself just costs around $25.

And it's the propulsion system that's the source of confusion when comparing the F450 ARF kit across sites.

It seems the kit originally shipped with the 30A OPTO ESCs, these were then replaced with the E300 propulsion system around 2014. And the E300 system was replaced (sometime in 2015) with the current (as of April 2017) E305 propulsion system.

The 30A OPTO ESCs and the E300 propulsion system are no longer available, however the photos and descriptions on many sites still refer to this setup. You can easily spot what system is involved by looking at the photos and finding the ESCs (rectanglar plastic components). The original ESCs are white and labelled 30A OPTO, the E300 ones are black (and labelled E300) and the E305 ESCs have a more high tech reddish semi-transparent look and are labelled 420 LITE.

It's not clear whether sites simply haven't updated their photos and descriptions or if they really are selling older variants of the kit. Many sites make no mention at all of E300 or E305, simply listing "motors" etc. without specific part numbers.

In the end I bought an E305 propulsion system and an F450 frame separately, rather than as a kit, to make sure I got what I expected (and the price savings of buying them bundled together in a kit seem to be minimal).

However it looks like DJI are no longer selling the F450 frame separately in many markets so you may have no choice but to buy the frame and propulsion system together in an ARF kit.

E300 vs E305 vs E310
--------------------

DJI products a number of [propulsion systems](http://www.dji.com/products/tuned-propulsion-system). The E300, E305 and E310 systems are the ones most commonly mentioned in relation to the F450 frame.

The E300 vs E305 situation is simple - the E300 is no longer available and the E305 is clearly seen as its replacement.

The E305 vs the E310 situation is more complicated. The E310 actually came out before the E305 and while E310 systems are more expensive than E305 systems that doesn't mean the E310 is necessarily better than the E305. "Better" depends on your needs - with a basic setup you'll actually get longer flying times with the E305 and choosing the E310 over the E305 involves research and geeky tradeoffs (involving features like active braking etc.) and deciding what's relevant in relation to how you intend to use your drone.

For an in-depth review of the E305, with some comparison to the E310, along with a link to an older E310 review by the same reviewer see [this post](https://www.rcgroups.com/forums/showthread.php?2456770-Review-DJI-E305-Tuned-Propulsion-System) to RCGroups.com.

Batteries
---------

Many pages that describe building an F450 based mention a 3s battery however the DJI [E305 product page](https://store.dji.com/product/e305-4) recommends a 4S battery (i.e. 4 cells rather than 3 - see [everything you need to know about LiPo batteries](http://www.rcuniverse.com/forum/rc-car-general-discussions-179/11586761-everything-you-need-know-about-lipo-batteries.html)).

As there are now many restrictions on shipping LiPo batteries it's probably best to order them locally even if you order other parts internationally.

While the batteries are expensive most people seem to buy at least two so that they can have one attached to their drone and one in reserve.

The batteries I bought, like most similar batteries, come with a T-plug (Deans) connector. The power module has two female T-plugs, one connects to the battery and the other connects to the PDB so one of the additional parts that I bought is a cable that's already terminated with a male T-plug connector for connecting the PDB to the power module (that seemed easier than soldering a T-plug connector to the unterminated cable that comes with the frame kit).

Note: as well as the two T-plugs connectors, the power module has a 6-position DF13 cable that connects to the flight controller.

In addition to the batteries and T-plug connector I bought:

* A battery alarm - this makes a loud noise when your battery is about to die - this gives you time to land the drone rather than being taken by surprise and see it drop from the skies.
* A LiPo safety bag - the lithium-ion technology of LiPo batteries is prone to explosion (as made clear to the world by the Samsung Note 7), this bag provides some degree of protection when charging and for storage. Even when such a bag is used LiPo batteries should still not be left charging unattended.

Vibration
---------

The drone depends on sensors, the [IMU](https://en.wikipedia.org/wiki/Inertial_measurement_unit) (intertial measurement unit) in particular, that are susceptible to the vibrations produced by the propulsion system.

Damping these vibrations is the reason for the noticeable size increase in the Pixhawk 2, the so called "cube" that provides a space in which to isolate the IMC.

On the whole it seems the classic Pixhawk can live with normal vibration, 3DR (the original manufacturer) just recommended attaching it directly to the frame with adhesive foam pad, but there are many home made and low volume commercial options for improving on this.

I bought a [vibration damping mounting set](https://www.unmannedtechshop.co.uk/vibration-damping-mounting-set/) and used it but didn't make any effort to see if its presence or absence noticeable affected any aspect of the drone's operation.

Waypoints
---------

The Pixhawk can take an SD card which can be used to store waypoints (among other things - see [here](https://pixhawk.ethz.ch/software/imu/sd_card)) and you can communicate directly with the Pixhawk via USB and so establish a flight plan without the ground control software then needing to communicate with the drone while in flight.

However in-flight interaction between the ground control software and the drone might be interesting and I might have bought the necessary telemetry kit (which also comes as a bundle option with the Unmanned Tech Pixhawk) if it had not been out of stock:

* [100mW telemetry kit](https://www.unmannedtechshop.co.uk/100mw-ardupilot-unmanned-telemetry-kit-v2-433mhz/)
* [500mW telemetry kit](https://www.unmannedtechshop.co.uk/500mw-unmanned-3dr-telemetry-kit-v2-433mhz/)

Note that the 100mW page advises also buying a [6-pos connector](https://www.unmannedtechshop.co.uk/df13-6-position-connector-15cm-pack-of-5/) (there are 15cm and 30cm versions) for connecting to the Pixhawk, while the 500mW page warns that 500mW may not be legal in certain countries.

Pixhawk 2.1
-----------

As of March 2017 something called the [Pixhawk 2.1](http://www.proficnc.com/content/13-pixhawk2) is gradually becoming available.

While it is open source hardware it appears to be a product of a particular individual, Philip Rowse, and his company ProfiCNC rather than a wider community.

At its heart it is identical to the original Pixhawk - it has the same STM32 F4 MCU (running at the same speed etc.).

However it does have design features that the Pixhawk does not, such as vibration isolation, IMU (inertial measurement unit) redundancy, better connectors and more I/O.

I.e. it appears to be a more professional design rather than something fundamentally different to the original Pixhawk.

While Philip Rowse deserves to make money from his efforts he clearly feels that he and ProfiCNC should be the sole manufactures of the unit, i.e. he does not seem to be an open hardware enthusiast encouraging the world to pick up on his design.

For a sense of this see his interaction with the wider community on the ArduPilot forums, e.g. this [Pixhawk 2 Getting Started](http://discuss.ardupilot.org/t/pixhawk-2-getting-started/10031) thread.

Having said all that the Pixhawk 2 is [clearly listed](https://pixhawk.org/modules/pixhawk2) as one of the autopilot systems acknowledged on the pixhawk.org site.

And it does seem that the initial development did involve the wider community and 3DR, however 3DR seem to have gone their own way with closed hardware and it is only through the efforts of Philip Rowse that it has eventually come to market at all.

The classic Pixhawk is now quite an old design and some of its sensors are no longer readily available, there being better (and often cheaper) versions available now. So the design does need a refresh and the Pixhawk 2.1 provides that. Once it becomes more generally available (as of April 2017 it is still only being released in small batches) and has been around for a little longer I will consider buying one.

Pixhawk.org vs ArduPilot.org
----------------------------

The pixhawk.org site seems to be the spiritual home of the Pixhawk while the ArduPilot.org site seems to be more actively maintained and has far more detail.

Pixhawk.org seems to be concerned with higher level issues, like open hardware, while ardupilot.org focuses more on the practical hobbyist oriented issues of getting things working.

It's unclear if the pixhawk.org site's information is often just stale or if it reflects real differences in hardware supported by PX4 and ArduPilot flight stacks (pixhawk.org claims to be somewhat agnostic when it comes to the flight stack but clearly most of the site assumes the PX4 stack), e.g. pixhawk.org recommends the D4R-II FrSKY receiver while ardupilot.org considers it deprecated and covers far newer FrSKY receivers.

Bag / case
----------

The main quoted dimension for a quadcopter seems to be its diagonal size which is the distance from the central shaft of one motor to that of the motor furthest away from it, i.e. the one diagonally opposite.

The DJI Phantom 3, one of the most popular ready assembled drones, has a diagonal size of 350mm.

The F450 has a diagonal size of 450mm (see [here](http://g03.a.alicdn.com/kf/HTB1srtkGVXXXXcnXFXXq6xXFXXXP/221683912/HTB1srtkGVXXXXcnXFXXq6xXFXXXP.jpg)) and as such is quite a lot larger than most common drones. So it won't fit it most cases, even those cases described as "universal".

I would have liked something like a cheap shoulder bag or messenger bag with padding and according to the pixhawk.org [F450 page](https://pixhawk.org/platforms/multicopters/dji_flamewheel_450) Parrot used to produce something like this for their AR.Drone 2.0 which would fit the F450 nicely. It doesn't seem to be available anymore but you can see it pictured on various sites (e.g. on [hobbysportz.com](http://www.hobbysportz.com/index.php?route=product/product&product_id=878)) and you can find knock-offs on eBay (e.g. [here](http://www.ebay.com/itm/New-PARROT-AR-DRONE-CANVAS-TOTE-BAG-CARRY-BAG-Black-FREE-SHIPPING-/232217382039?hash=item36113c0c97)) (presumably those eBay and hobbysportz links will soon go stale fairly quickly).

The only other possibly suitable carry case that I found was the [Lowepro DroneGuard Kit](https://www.lowepro.de/brands/lowepro/droneguard/droneguard-kit/pd350/) which may be a good match for the F450 as the arms can stick out over the side of the bag. However without a shoulder strap it looks more suitable for just carrying a drone a short distance from the back of your car rather than e.g. carrying it on public transport.

Many people seem to have just made their own cases using foam and the kind of storage boxes you find at DIY stores, but again these kind of cases only really look suitable for transport by car.

Chinese copies
--------------

With some of the parts here being open source hardware it's perhaps odd to take of Chinese copies.

But there certainly seem to be no end of Chinese versions of all the parts used in this project, many masquerading as versions from more respected brands (or from lesser known brands that have proved themselves capable of producing a quality version of a given component).

So while you can buy all necessary components from sites like [AliExpress](https://www.aliexpress.com/) or [Banggood](http://www.banggood.com/) it's definitely a case of buyer beware.

Miscellaneous parts
-------------------

[Threadlocker](https://en.wikipedia.org/wiki/Thread-locking_fluid) (also called thread or screw glue) comes in various strengths but for this situation it's a weak glue that's applied to the thread of a scew before you screw it into place, it's weak enough that you can still unscrew the screw later but strong enough that it stops the screw coming loose due to vibration (apparently its commonly used in automotive applications).

According to the [F450 user manual](http://dl.djicdn.com/downloads/flamewheel/en/F450_User_Manual_v2.2_en.pdf) you should use it for the various screws (but not for attaching the propellars).

[Loctite 243](http://www.na.henkel-adhesives.com/industrial/blue-threadlockers-medium-strength-13231.htm) seems to be suitable (UHU also have something similar, [UHU schraubensicher mittelfest](http://www.uhu-profi.de/produkte/anaerobe-klebstoffe-schraubensicherung/detail/uhu-schraubensicher-mittelfest.html), but don't seem to market it in the UK).

Sources:

* 3ml Loctite 243 - [Amazon UK](https://www.amazon.co.uk/Loctite-Lock-Acting-Thread-Sealant/dp/B003ZUXQIA).
* 10ml Loctite 243 - [Conrad CH](http://www.conrad.ch/ce/de/product/055936/Schraubensicherung-Festigkeit-mittel-10-ml-LOCTITE-243-1335840).
* 10ml UHU schraubensicher mittelfest - [Conrad CH](http://www.conrad.ch/ce/de/product/055357/Schraubensicherung-Festigkeit-mittel-10-ml-UHU-Schraubensicher-45590).

2mm hex key (or Allen key/wrench) for the F450 screws - sources:

* Set of hex keys [Amazon UK](https://www.amazon.co.uk/Silverline-HK11-Hex-Key-2-10/dp/B000LFXJUM).
* Single 2mm hex screw driver [Conrad CH](http://www.conrad-electronic.co.uk/ce/en/product/817256/Workshop-Allen-wrench-Wera-354-Spanner-size-2-mm-Blade-length-75-mm).
* Set of hex keys [Conrad CH](http://www.conrad-electronic.co.uk/ce/en/product/818955/Allen-Allen-key-set-7-piece-Basetech).