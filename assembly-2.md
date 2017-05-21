The transmitter
===============

It came as a bit of a surprise to me, initially at any rate, that the transmitter rather than the flight controller was the hardest thing to understand. This page is the longest of the steps covering the quadcopter build - don't let it intimidate you!

If you're new to the whole field, as I am, then the small folded black and white manual that comes with the Taranis Q X7 is impressively unhelpful (and it's not one of those cases where the manufacturer makes the real manual available online). Actually the information about the antenna (the side rather than the tip of the antenna should be pointing at the drone in flight) is useful, as is the model setup information (but only once you have enough background information to understand it).

The manual doesn't even tell you how to turn on the transmitter, the power button is actually missing completely from the incluced diagrams. I assumed it must be one of the many mechnical switches but it's actually the lower half of what I took to be just the power indicator in the very middle of the front panel.

So we've got the on/off button, the other immediately important things are either side of the LCD. To the left we've got PAGE and EXIT and the circular button between them is called MENU. And to the right we've got a dial - it's the ENTER button if you press it but you can also turn it.

_Q X7 LCD, buttons and dial_  
<img width="512" src="images/assembly/transmitter/taranis-q-x7-lcd-and-input.png">

What about all the other switches etc. do? At each of the upper corners we've got a set of three switches, then between them we've got two knobs (called pots), then two joysticks (always just called sticks) and finally, above the LCD and between the sticks, a set of four 2-way momentary switches (that together are referred to as digital trim). What do these all do? The odd answer is that they don't have any inherent meaning - but we'll get to that soon.

The only important thing for the moment is that the switches have names (SA, SB, SC, SD, SF and SH) as do the pots (S1 and S2) and that (initially at least) up/down on the left stick is the throttle (pull it all the way down and the throttle is at zero). The stick directions also have names - J1 to J4.

_Q X7 switches, pots and sticks_  
<img width="512" src="images/assembly/transmitter/taranis-q-x7-switches.png">

Note: that the upper left and right switches aren't quite identical - one is [momentary](https://learn.sparkfun.com/tutorials/switch-basics#momentary-switches) and one isn't. Similarly the pots are slightly different - one has a noticeable click at its midpoint.

Batteries
---------

Before we use the transmitter we have to add batteries. Take off the battery cover and you'll find a normal looking battery holder that takes 6 AA batteries. When my transmitter arrived the battery cover wouldn't close and it turned out the battery holder wasn't sitting quite right in the case. You can actually pull out the battery holder and instead of using AA batteries you can wire up something like a large LiPo. So just make sure the battery holder is sitting snugly in the case and everything shold be fine.

The battery cover is very loose, this is the only poor feature I've found so far. Eventually I taped it in place with masking tape.

_Battery cover taped in place_  
<img width="256" src="images/assembly/transmitter/taranis-q-x7-masking-tape.jpg">

I used rechargeable NiMH batteries - I used this [Varta charger](https://www.amazon.co.uk/Varta-57677-PLUG-Charger-Battery/dp/B00HV5XOEG/ref=pd_sim_23_2), that includes four batteries, and an additional [pack of batteries](https://www.amazon.co.uk/Varta-Rechargeable-Batteries-2100mAh-Ni-MH-x/dp/B000EGWOCM/). The Varta charger has a Europlug - Amazon have an own branded [charger](https://www.amazon.co.uk/AmazonBasics-Ni-MH-Battery-Charger-Port/dp/B00TS18AEA/), that presumably comes with a plug to match the market it's sold in, and their own brand [batteries](https://www.amazon.co.uk/AmazonBasics-Capacity-Pre-Charged-Rechargeable-Batteries/dp/B00HZV9WTM/). Non-rechargeable batteries, depending on how much you intend to use your drone, may also be fine - the transmitter batteries will last for many hours and, given that the LiPo on the drone will only last for about 20 minutes of flight time, this means a single set of batteries in the transmitter will last for many flights.

See Oscar Liang's in-depth [review of the Q X7](https://oscarliang.com/taranis-q-x7-tx/) that provides a nice walkthru of the transmitter and covers things like replacing the battery pack with a LiPo.

Power on
--------

Before switching on the transmitter just play with the switches, pots and sticks. You'll find that some of the switches are 3-way and some 2-way. Each of the mechanical swiches has a neutral position, i.e. a position the Taranis considers safe. If a switch isn't in its neutral position before you turn on the transmitter then the transmitter will complain during startup.

I actually recommend that you flip some of the mechanical switches into different positions, some all the way back or up, some all the way forward or down, so that we see the transmitter warnings and how to resolve them.

OK - press the power button. The first thing you see is a throttle warning. Pull the throttle (left stick) all the way down and this warning will go away (you can also press any button to the left or right of the LCD to ignore the warning). Next, if you've flipped some of the switches out of their neutral position you'll see a switch warning - again you can ignore this but I suggest instead resolving the issue, below the warning you'll see what switches its complaining about, e.g. SB and SC. Look at the diagram above (from the user manual) and find the relevant switch and flip it all the way up (or back) so that the warning goes away for that button - once this is done for all problem switches the overall warning goes away. The next warning is that the failsafe hasn't been set - for the moment you'll have to ignore this by pressing e.g. PAGE.

Now you're at the main screen, move the sticks around, flick the switches (including the black plastic 2-way monentary switches) and twist the pots and see how this is reflected on the LCD. As you can see the LCD updates to show the state of the switches etc. as they change.

To turn off the transmitter just hold down the power button for a few seconds (if you don't keep holding until the transmitter is off you'll just return to whatever screen you were on).

Meaning
-------

So what do the switches etc. all do? Nothing actually - as stated above they have no inherent meaning.

It turns out the transmitter is actually a fairly general purpose computer. It has an operating system called [OpenTX](http://www.open-tx.org/) and you can interact with this OS via the LCD and the buttons either side of it. The basic job of OpenTX is simply to detect changes in the state of the sticks etc. and transmit these changes to a receiver connected to the drone.

So actually there are two distinct groups of controls - the sticks, mechanical switches etc. and the controls either side of the LCD that are for the OS.

The transmitter simply transmits the state of the sticks etc. to the drone. On a quadcopter the state of the sticks will be communicated to the flight controller and it will decide how to change the speed of the various motors to achieve the desired action, e.g. drift left. On a classic remote control plane there might be no flight controller and the receiver will directly drive various [servos](https://learn.sparkfun.com/tutorials/hobby-servo-tutorial), e.g. mildlythe position of one stick will control the position of the aileron and other the position of the rudder.

TODO: should I ask someone, e.g. Henrik, to pick out terms that some geeks might not get, e.g. if they'd done no electronics, like "servo". Probably I should just rely on people not being too stupid to be able to Google.

The important thing is that it's up to the drone to give meaning to the state of the sticks etc. The wiring of the receiver and servos or the configuration of the flight controller determines whether the moving the left stick up and down controls the throttle or something else entirely.

There are some conventions, particularly as to what the sticks do, but that's all they are - conventions. And the conventions can differ by craft type or by country, e.g. mapping the throttle to up/down on the left stick is the norm in the US and much of the rest of the world but in some countries, e.g. Japan, it's often mapped to the right stick.

OpenTX
------

So the OS on the transmitter is OpenTX and you can interact with via the LCD and the controls to its left and right. Power on your transmitter and let's try them out:

* PAGE - you can use this to page through various screens, in the default mode (where the state of the sticks etc. are shown) this isn't too intereting but for the screens reached with MENU there's more to see using PAGE. If you hold the PAGE button a little longer you'll go back a screen rather than forward.
* MENU - press and release quickly and you get to _model selection_, press EXIT to get back to the main screen, press and hold MENU for a little longer and you get to _radio setup_.
* EXIT - gets you back to the main screen, it's also used in combination with the dial when changing setting values. Also - if you've scrolled far down a long screen, with the dial, pressing EXIT quickly will return you to the top of the screen.

Go to _radio setup_ and press the PAGE button repeatedly to cycle through various screens (you can see the screen you're on, e.g. 3 of 9, in the upper right corner).

Note: confusingly in this context _radio_ just means the overall device, i.e. your Taranis Q X7 and doesn't mean the radio hardware (also called the transmitter or TX module) that communicates with the receiver on the drone.

Let's try out something simple, safe and mildly important - callibration. Go to _radio setup_, press PAGE until you reach the last screen - the _callibration_ screen. Before you start (by pressing ENTER, i.e. the dial), turn the pots so that they're set at half way, i.e. make sure they're neither as far as they can go clockwise nor as far as they can go counterclockwise (if a pot is e.g. all the way clockwise before starting then callibration will only work out its lower limit but not its upper limit). Now press ENTER and move the sticks, it'll ask you to set the sticks to their midpoint - as the sticks are self centering you don't have to do anything so just press ENTER again. Now move the sticks so you touch every point of the outline of their corresponding boxes, this callibrates how far the sticks can travel in every direction. Finally turn both pots fully in both directions to similarly calibrate them and then press ENTER - callibration is done.

Note: you may want to disable self centering on the throttle but we'll come to that later.

Before we go on you may also want to note down the details of the current firmware version so you can compare them with the values you see after upgrading the transmitter as described below. Just go to _radio setup_ as before and then page to the _version_ screen, you should see something like:

* FW: opentx-x7
* VERS: 2.2.0 (0)
* DATE: 2017-02-16 17:22:25
* EEPR: 218

Note: we won't be changing the EEPROM value (this is to do with your own models and settings).

Transmitter software
--------------------

We're going to update everything on our transmitter. Confusing there are three different things that can be updated:

* OpenTX - this is the OS of the transmitter.
* The radio firmware - this is the low level firmware for the radio hardware.
* The bootloader.

If you're used to laptops and PCs then OpenTX is the OS and is not specific to your particular transmitter, it can run on a whole range of transmitters, not just the Q X7. The radio firmware is like a device driver and is specific to the particular radio hardware of a particular transmitter model. Last the bootloader - if you've played around with something like an [Arduino](https://learn.sparkfun.com/tutorials/what-is-an-arduino) then you'll know what a bootloader is, otherwise just think of it as the BIOS - the very basic low level software activated on startup that boots the OS (among other things).

Aside: in a modern OpenTX setup there are actually two bootloaders - a super low level one called the STM32 bootloader, that you can always fall back to, and the OpenTX bootloader that provides more features (and allows you to do fancy things like update the firmware on other devices, like the receiver, without needing a laptop or PC).

When people use the term "firmware" you'll have to deduce from context whether they mean the OS, i.e. OpenTX, or the low level radio firmware - often it's not very clear.

OpenTX Companion
----------------

You can setup everything to with your transmitter via the transmitter itself, but this can be fairly fiddly using just the dial and the other buttons. One of the great features of OpenTX is that you can connect the transmitter to a computer via a normal USB connection and do all the setup using an application called OpenTX Companion.

We'll use OpenTX Companion first to update the OpenTX version on the transmitter along with the bootloader.

OpenTX Companion can run on Mac, Linux and Windows. On Mac and Linux it doesn't need any extra driver but if you're using Windows you'll need to download [Zadig](http://zadig.akeo.ie/) and get it to install a USB driver for the STM32 bootloader. With a modern Windows setup and the current version of Zadig this is trivial but as with much OpenTX documentation they make it sound very complicated. So I suggest you just download Zadig, run it and then go to the OpenTX [Zadig documentation](http://open-txu.org/home/undergraduate-courses/fund-of-opentx/using-zadig/) and just jump straight down to the point where it says "The first screen you see will be the Zadig install window" and work through the three following simple steps.

To get OpenTX Companion go to [OpenTX.org](http://www.open-tx.org/) and then to the _News_ section, click on the link to the latest OpenTX 2.2.0 RC (RC18 at the time of writing). Go to the bottom of the resulting page and click on the link for the OpenTX Companion version for your system (Window, Mac or Linux).

TODO: normally I wouldn't recommend an RC release but it's actually a prerelease version of 2.2.0 that comes on the Q X7 and 2.2.X is the first version that comes with direct support for the Q X7. Once 2.2.0 stable is out update this section telling people to go to Downloads (where stable versions are) rather than to New and an RC release.

When you start OpenTX it'll complain that it's "Unable to check for updates" - this is a consequence of using an RC release and you can resolve it as described [here](https://github.com/opentx/opentx/issues/4012) (actually you need to tick both "Use OpenTX firmware nightly builds" and "Use Companion nightly builds").

TODO: remove link to above Github issue - and uncheck the options involved - once a stable release is available.

When you start OpenTX it'll check for the latest firmware and ask if you want to download it. Don't - you haven't configured your transmitter model yet and it defaults to downloading firmware for the Taranis X9D+.

So go to settings (the cog icon), change the radio type to _FrSky Taranis X7_ and tick _lua_ and _massstorage_ as build options. Only the radio type is very important, the build options could probably all be safely left unchecked. The three options suggested in nearly all guides are:

* _lua_ - this enables [Lua](https://en.wikipedia.org/wiki/Lua_(programming_language)) scripting for the transmitter. While you may probably never use Lua scripting yourself it is used in some standard operations such as the new model setup wizard (that currently is only available if using the older X9D+), but it does not seem to be used in any really core functionality (see [my question](https://opentx.rocket.chat/channel/OpenTX_General?msg=z9X8qKSt2afERAy6y) on the OpenTX chat channel).
* _massstorage_ - this means that your Taranis looks like a USB drive when it's plugged into your computer via a USB cable. I find this very convenient and the only reason not to enable it is that you have to choose between this feature and being able to connect the transmitter up to simulator software running on your computer (see [here](https://oscarliang.com/free-quadcopter-simulator-drone-multirotor-trainer/) and [here](http://www.dronethusiast.com/drone-flight-simulator/) for more on simulators).
* _sqt5font_ - this is an alternative font, for use by the transmitter, that some people prefer. I tried the firmware with _sqt5font_ ticked and with it unticked and didn't see any difference so perhaps this setting is irrelevant for the Q X7 - as such I don't select it.

For a more detailed walkthru of these basic settings see Oscar Liang's [walkthru](https://oscarliang.com/flash-opentx-firmware-taranis/), just jump down to the "Firmware Download and Flashing" section. Note that he's setting things up for a Taranis X9D+ and that he turns off _massstorage_ (as he wants to be able to use the transmitter with simulators, something I haven't tried). Also this [video from the 179 second mark](https://www.youtube.com/watch?v=q1D-LEfDprk&feature=youtu.be&t=179) covers the same thing for the Q X7.

Backup
------

Now we're ready to connect the transmitter to the computer. You'll need a USB cable with a mini-B connector (like [this one](https://www.amazon.co.uk/AmazonBasics-USB-2-0-Cable-Male/dp/B00NH11N5A)), i.e. the kind of cable usually used to connect to cameras.

First start the transmitter in bootloader mode - this involves pressing the two swtiches above the LCD inwards while you press the power button. Again Oscar Liang has a nice picture in his [walkthru](https://oscarliang.com/flash-opentx-firmware-taranis/) , see the "Backup Current Configuration" section (however we're going to back things up in a different way).

Once started in bootloader mode you'll see "plug in a USB cable" at the bottom of the screen - so do that (the USB port is under the flap at the bottom of the transmitter) and connect it to your computer running OpenTX Companion.

First we're going to backup the current transmitter setup - in OpenTX Companion go to the _Read/Write_ menu and first select _Read Firware from Radio_ and save the result as e.g. `orig-firmware.bin`, then select _Backup Radio to File_ and save the result as e.g. `orig-eeprom.bin`.

If _massstorage_ is currently enabled for your Q X7 (which is the factory default) then you transmitter should appear on your computer as a USB drive called _Taranis_, if you open this drive you should find two files called `EEPROM.BIN` and `FIRMWARE.BIN` that contain exactly the same contents as the two files we just backed up. So if _massstorage_ is enabled an even easier way to backup your transmitter is to just copy these two files to your computer.

In all likelyhood you'll never need these backups.

Note: if you recorded your current OpenTX firmware version as described above then you may also want to record the bootloader version to see how it is affected by the upgrade process - just record the top title of the bootloader screen, it should be something like "X7 Bootloader 2.2.0".

While USB is connected it's not acutally possible to power off the transmitter, so eject the Taranis USB drive (if _massstorage_ is enabled), disconnect and turn off the transmitter.

Upgrade
-------

For upgrading we're going to connect the transmitter to the computer again but this time without turning the transmitter on first. When you connected the transmitter you may here a little pop from its speaker but nothing else should happen.

Now, using OpenTX Companion, let's download the latest OpenTX firmware suitable for your transmitter (assuming you haven't already done so - OpenTX Companion nags you everytime you restart it to do so). Go to the _File_ menu and select _Download..._, then click _Check for updates_. It'll go off and find the latest firmware and prompt you to save it to your local drive - do so. Now we're ready to write the latest version of OpenTX to the transmitter - go to the _Read/Write_ menu and select _Write Firmware to Radio_. It will now pop up a dialog showing the details of the firmware version you just downloaded, just click the _Write to TX_ button. Now you'll see a progress bar, click _Show Details_ and you'll then see a more informative indication of progress.

Once that's finished it's all done - unplug the transmitter (as we never turned it on it was never mounted as a USB drive so we don't have to be careful about ejecting it first).

It you turn on the transmitter now and go to the _version_ screen (as described above) you should see the new version details, similarly if you startup the transmitter in bootloader mode you should see that the bootloader version that's shown has changed as well.

**Important:** there are other ways, described elsewhere on the web, to upgrade the firmware - however these approaches are only able to update the OpenTX firmware, while this approach updates both the OpenTX firmware and the OpenTX bootloader. E.g. Oscar Liang, in his walkthru connects the transmitter in bootloader mode both for the backup (as above) and for the upgrade - but if you start in bootloader mode then the bootloader is active and it cannot be upgraded while active so only the OpenTX firmware is upgraded.

SD card
-------

The Q X7 doesn't come with an SD card but we're going to need one to upgrade the radio firmware next.

The SD card can store images and sound files that the OpenTX firmware can use and you can backup to the SD card and store firmware updates for the radio (and, as we'll see later, also for the receiver).

You don't need a very big one - the standard set of sound files etc. are only around 37MB and a complete backup takes less than 1MB so a 2GB card would be more than enough. However the smallest card you can buy these days seems to be about 8GB - something like this [Kingston 8GB microSD card](https://www.amazon.co.uk/Kingston-8GB-Micro-SD-HC/dp/B001CQT0X4/).

Go to the same place that you downloaded OpenTX Companion (see above) and just above the links to OpenTX Companion you should find a link to _SDCard content_. Click this and download the latest version shown for the Q X7 (`sdcard-taranis-x7-2.2V0009.zip` at the time of writing).

TODO: update once 2.2.0 stable comes out.

Format your SD card for FAT (rather than e.g. exFAT or NTFS), unzip the downloaded SD card contents and copy them to the card so that it ends up containing a set of top level directories with names like `EEPROM`, `FIRMWARE` etc.

Note: FAT means FAT32 these days - essentially nothing is using earlier FAT variants anymore.

If you're on a Mac you may end up with a whole load of [extended attribute](https://apple.stackexchange.com/q/14980) files and other Mac specific stuff. The transmitter ignores them but you may want to remove them while the SD card is still plugged into your Mac. Close any Finder windows showing any folders on the SD card, then in terminal find the appropriate volume under `/Volumes` (I called my SC card `OPENTX`) and do something like this:

    $ cd /Volumes/OPENTX
    $ rm -rf .Trashes ._.Trashes .Spotlight-V100 .fseventsd
    $ rm $(find . -name '._*')

As always be very careful what you're doing when using `rm` from the command line!

Once you're ready eject the card and put it into the transmitter (the SD card slot is beside the USB connector). The card goes in upside down, i.e. connector pins facing upward.

**Important:** the Q X7 manual warns that you should never insert or remove the SD card while the transmitter is on.

Now turn on the transmitter - the first thing you'll notice is that the transmitter starts talking to you. This can be a little disconcerting but apparently it's useful when your flying and you want to stay looking at your drone rather than the LCD screen.

Now if you go to _radio setup_ (as described already above) and then press PAGE to get to the _SD card_ screen you'll see the contents of the card. If you haven't already, try playing with the dial and pressing it to navigate around the contents of the card - it's fairly intuitive.

If you turn off the transmitter, restart it in bootloader mode and connect to your computer you'll now see two USB drives (assuming you enabled _massstorage_ as outlined above). One is the _Taranis_ drive we saw before and the other is the SD card - it looks just as it did when directly connected to your computer.

Notes: Once after setting up the SD card the bootloader froze in the same fashion as described [here](http://openrcforums.com/forum/viewtopic.php?t=8882). I didn't have to pull a battery to turn if off - I pressed power for a long time, left the transmitter alone in order to look for help of the web and eventually it turned itself off unattended. I don't know if this was related to adding the SD card or just a random crash - the transmitter successfully entered bootloader mode the next time I tried.

Here I setup the initial contents of the SD card on my computer before putting it into the transmitter - in [this video](https://www.youtube.com/watch?v=2wZM_dqvBJ4&feature=youtu.be&list=PLiYYhnH4BhI-ot9OQ9djvRaacFHboFqC2&t=170) the presenter inserts a blank SD card straight into the transmitter and then connects the transmitter to his computer and copies the extracted SD card contents over via USB. The end result is the same but don't try to interact with the SD card via the transmitter before this is done. I tried doing this - I put the transmitter into bootloader and just wanted to use its _Write Firmware_ option to backup the firmware to a blank SD card. But this just results in the somewhat cryptic error "No directory found" - OpenTX and its bootloader expect the directory structure seen above, i.e. `FIRMWARE` etc. to already be there.

XJT module upgrade
-------------

The internal XJT module is the hardware within the transmitter that communicates with the receiver on your drone, i.e. the XJT module is the core radio hardware.

Aside: I don't know what XJT stands for though I'd make a wild guess that the X indicates the FrSKY X series, the J is for [JR](http://www.jramericas.com/) and T is for telemetry - i.e. an XJT module is an FrSKY X series telemetry module for use with JR compatible devices. The X series is FrSKY's S.BUS based range (the older D series, that includes models like the D4R-II, is PPM based). For a summary of receiver technologies (PWM, PPM etc.) see this [video](https://www.youtube.com/watch?v=GbUMC8h2uhU) from Painless360.

I don't think XJT means - it's probably just a meaningless FrSKY product identifier. Now that we've upgraded we've upgraded the OpenTX and its bootloader the last step is to upgrade the XJT module.

Go to [_Download_](http://www.frsky-rc.com/download/) on the FrSKY site, select _Firmware_, then select _Tx Modules_ (from the dropdown) and click on _Firmware-XJT_ - the picture shows an external XJT module but if you look at the compatibility list you'll see that it's also appropriate for the Taranis Q X7 and other transmitters where the XJT is the standard internal module.

Click on Download and extract the resulting zip file. It will contain two `.frk` files, one with `LBT` in the middle of its name. The US and the EU have different wireless regulations and you should use only the `.frk` file appropriate for your jurisdiction, the LBT one for the EU and the other for the US.

Notes:

* LBT stands for Listen Before Talk and is the firmware type FrSKY is now using for the EU (see their [press release](http://www.frsky-rc.com/media/mediaItem.php?m_id=17)).
* Your transmitter needs to be compatible with the firmware used by the receiver - so when we come to setting up the receiver next we'll upgrade it too to ensure this is the case. Mixing EU firmware on the transmitter with US firmware on the receiver, or vice-versa, won't work.

If you can see you're transmitters SD card via USB connection as described above then just copy the appropriate `.frk` file to the `FIRMWARE` directory on the card (otherwise if you disabled _massstorage_ then turn off the transmitter, pop out the card and copy the file on directly from your computer).

Once you've disconnected USB (or reinsterted the SD card) restart the transmitter in normal mode and navigate to the contents of the SD card (as described above). Navigate to `FIRMWARE` and select the `.frk` file that you just copied on (it should have a name like `XJT_LBT_build161214.frk` or the same without `LBT` for the US). Select it and press ENTER, i.e. press the dial. You should see a popup with various options - select _Flash int module_ and a progress bar will appear indicating that it's being written.

Oddly the process just finishes without any confirmation (if there had been a problem though it would have told you) and there appears to be no way to query the XJT firmware version via OpenTX - you just have to trust that it's been done (I've confirmed this on the [OpenTX chat channel](https://opentx.rocket.chat/channel/OpenTX_General?msg=mszoW8QwiAirmFfvy)).

Note: the version history section on the XJT module page only goes up to 23rd Dec 2015, however the notes above refer to version 61214 which came out late 2016. The main download button downloads the latest version, i.e. 61214 at the time of writing.

Wrap up
-------

OK - that's it for the moment with the transmitter. Later on we'll use Open Companion again to configure some of the switches to select between various [flight modes](http://ardupilot.org/copter/docs/flight-modes.html) for the quadcopter. And we'll look at disabling self-centering for the throttle.

As noted at the start of this page getting the transmitter ready is the most involved task in the whole build - everything gets simpler from now on.

Notes
-----

If you're really interested the OpenTX project has a lot of documentation - however I'm not sure I'd recommend it, it can be rather overwhelming and some of it is more confusing than helpful. But for reference here's the material either directly produced by or recommended by the OpenTX project:

* [The OpenTX 2.2 manual](https://opentx.gitbooks.io/manual-for-opentx-2-2/content/) - this is probably the most digestable of these items but it isn't terribly detailed.
* [The OpenTX 2.1 documentation](http://openrcforums.com/forum/viewtopic.php?f=45&t=8724) - despite the similar name this is a completely different set of documentation, it has far more detail but can be confusing at times.
* [OpenTX University](http://open-txu.org/home/undergraduate-courses/) - someone has put a lot of work into this but I found it so meandering as to be almost useful - but there is some good information in there.

For any given task it's often easier just to Google for information - you'll generally find someone else has writen something shorter and clearer on that particular thing.
