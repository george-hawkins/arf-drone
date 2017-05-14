The transmitter
===============

It came as a bit of a surprise to me that, initially at any rate, the transmitter rather than the flight controller was the hardest thing to understand. This page is the longest of the steps covering the quadcopter build - don't let it intimidate you, everything afterward will be much simpler!

If you're new to the whole field, as I was, then the small folded black and white manual that comes with the Taranis Q X7 is impressively unhelpful (and it's not one of those cases where the manufacturer makes the real manual available online).

TODO: what useful things are in the manual.

The manual doesn't even tell you how to turn on the transmitter, the power button is actually missing completely from the incluced diagrams. I assumed it must be one of the many mechnical switches but it's actually the lower half of what I mistook to be just the power indicator in the very middle of the front panel.

So we've got the on button, the other immediately important things are either side of the LCD. To the left we've got PAGE and EXIT and the circular button between them is called MENU. And to the right we've got a dial - it's the ENTER button if you press it but you can also turn it (to navigate up and down menus or cycle through values for a setting).

TODO: include image of LCD and its buttons.

What about all the other switches etc. do? At each of the upper corners we've got a set of three switches, then between them we've got two knobs (called pots), then two joysticks (always just called sticks) and finally above the LCD and between the sticks a set of four 2-way momentary switches. What do these all do? The odd answer is they don't have any inherent meaning - but we'll get to that soon.

The only important thing for the moment is that the switches have names (SA, SB, SC, SD, SF and SH) as do the pots (S1 and S2) and that (initially at least) up/down on the left stick is the throttle (pull it all the way down and the throttle is at zero). The stick directions also have names - J1 to J4.

TODO: include manual image showing SA etc.

Note: that the upper left and right switches aren't quite identical - one is [momentary](https://learn.sparkfun.com/tutorials/switch-basics#momentary-switches) and one isn't. Similarly the pots are slightly different - one has a noticeable click at its midpoint.

Batteries
---------

OK - before we use the transmitter we have to add batteries. Take off the battery cover and you'll find a normal looking battery holder that takes 6 AA batteries. When my transmitter arrived the battery cover wouldn't close and it turned out the battery holder wasn't sitting quite right in the case. You can actually pull out the battery holder and instead of using AA batteries you can wire up something like a large LiPo. So just make sure the battery holder is sitting snugly in the case and everything shold be fine.

Note: my battery cover is very loose, this is the only poor feature I've found so far.

I used rechargeable NiMH batteries (this [Varta charger](https://www.amazon.co.uk/Varta-57677-PLUG-Charger-Battery/dp/B00HV5XOEG/ref=pd_sim_23_2), that includes four batteries, and an additional [pack of batteries](https://www.amazon.co.uk/Varta-Rechargeable-Batteries-2100mAh-Ni-MH-x/dp/B000EGWOCM/). The Varta charger has a Europlug - Amazon have an own branded [charger](https://www.amazon.co.uk/AmazonBasics-Ni-MH-Battery-Charger-Port/dp/B00TS18AEA/), that presumably comes with a plug to match the market it's sold in, and [batteries](https://www.amazon.co.uk/AmazonBasics-Capacity-Pre-Charged-Rechargeable-Batteries/dp/B00HZV9WTM/). Non-rechargeable batteries, depending on how much you intend to use your drone, may also be fine - the transmitter batteries will last for many hours and given that the LiPo on the drone will only last for about 20 minutes of flight time this means a single set of batteries in the transmitter will last for many flights.

See Oscar Liang's in-depth [review of the Q X7] that provides a nice walkthru of the transmitter and covers things like replacing the battery pack with a LiPo.

Power on
--------

Before switching on the transmitter just play with the switches, pots and sticks. You'll find that some of the switches are 3-way and some 2-way. Each of the mechanical swiches has a neutral position, a position the Taranis considers safe. If a switch isn't in its neutral position before you turn on the transmitter then the transmitter will complain during startup.

I actually recommend that you flip some of the mechanical switches into different positions, some all the way back/up, some all the way forward/down, so that we see the transmitter warnings and how to resolve them.

OK - press the power button. The first thing you see is a throttle warning. Pull the throttle (left stick) all the way down and this warning will go away (you can also press and button to the left or right of the LCD to ignore the warning). Next, if you've flipped some of the switches out of their neutral position you'll see a switch warning, again you can ignore this but I suggest instead resolving the issue, below the warning you'll see what switches its complaining about, e.g. SB and SC. Look at the diagram above (from the user manual) and find the relevant switch and flip it all the way up (or back) so that the warning goes away for that button - once this is done for all problem switches the warning goes away. The next warning is that the failsafe hasn't been set - for the moment you'll have to ignore this by pressing e.g. PAGE.

Now you're at the main screen, move the sticks around, flick the switches (including the black plastic 2-way monentary switches) and twist the pots and see how this is reflected on the LCD. As you can see the LCD updates to show the state of the switches etc. as they change.

To turn off the transmitter just hold down the power button for a few seconds (if you don't keep holding until the transmitter is off you'll just return to whatever screen you were on).

Meaning
-------

So what do the switches etc. all do? Nothing actually - as stated above they have no inherent meaning.

It turns out the transmitter is actually a fairly general purpose computer. It has an operating system called [OpenTX](http://www.open-tx.org/) and you can interact with this OS via the LCD and the buttons either side of it. The basic job of OpenTX is simply to detect changes in the state of the sticks etc. and transmit these changes to a receiver connected to the drone.

So actually there are two distinct groups of controls - the sticks etc. and the controls for the OS.

The transmitter simply transmits the state of the sticks etc. to the drone. On a quadcopter the state of the sticks will be communicated to the flight controller and it will decide how to change the speed of the various motors to achieve the desired action, e.g. drift left. On a classic remote control plane there might be no flight controller and the receiver will directly drive various servos - the position of one stick will control the position of the aileron and other the position of the rudder.

The important thing is that it's up to the drone to give meaning to the state of the sticks etc. The wiring of the receiver and servos or the configuration of the flight controller determines whether the moving the left stick up and down controls the throttle or something else entirely.

There are some conventions, particularly as to what the sticks do, but that's all they are - conventions. And the conventions can differ by craft type or by country, e.g. mapping the throttle to up/down on the left stick is the norm in the US and much of the rest of the world but in some countries, e.g. Japan, it's often mapped to the right stick.

OpenTX
------

So the OS on the transmitter is OpenTX and you can interact with via the LCD and the controls to its left and right. Power on your transmitter and let's try them out:

* PAGE - you can use this to page through various screens, in the default mode (where the state of the sticks etc. are shown) this isn't too intereting but for the screens reached with MENU there's more to see using PAGE. If you hold the PAGE button a little longer you'll go back a screen rather than forward.
* MENU - press and release quickly and you get to "model selection", press EXIT to get back to the main screen, press and hold MENU for a little longer and you get to "radio setup".
* EXIT - as noted gets you back to the main screen, it's also used in combination with the dial when changing setting values. If you've scrolled far down a long screen, with the dial, pressing EXIT quickly will return you to the top of the screen.

Go to "radio setup" and press the PAGE button repeatedly to cycle through various screens (you can see the screen you're on, e.g. 3 of 9, in the upper right corner).

Note: confusingly in this context "radio" just means the overall device, i.e. your Taranis Q X7 and doesn't mean the radio hardware (also called the transmitter or TX module) that communicates with the receiver on the drone.

Let's try out something simple, safe and mildly important to do early on - callibration. Go to "radio setup", press PAGE until you reach the last screen - the callibration screen. Before you press ENTER, i.e. press down the dial on the right, turn the pots so that they're set at half way, i.e. make sure their neither as far as they can go clockwise nor as far as they can go counterclockwise (if a pot is e.g. all the way clockwise before starting then callibration can only work out its lower limit but not its upper limit). Now press ENTER and move the sticks, it'll ask you to set the sticks to their midpoint - as the sticks are self centering you don't have to do anything so just press ENTER again. Now move the sticks so you touch every point of the outline of their corresponding boxes, to callibrate how far the sticks can travel in any direction. Finally turn both pots fully in both directions to similarly calibrate hem and press ENTER - callibration is done.

Note: you may want to disable self centering on the throttle but we'll come to that later.

Before we go on you may also want to note down the details of the current firmware version so you can compare them with the values you see after upgrading the transmitter as described below. Just go to "radio setup" as before and then page to the version screen, you should see something like:

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

If you're used to laptops and PCs then OpenTX is the OS and is not specific to your particular transmitter, it can run on a whole range of transmitters, not just the Q X7, the radio firmware is like a device driver and is specific to the particular radio hardware of a particular transmitters model. Then the bootloader - if you've played around with something like an [Arduino](https://learn.sparkfun.com/tutorials/what-is-an-arduino) then you'll know what a bootloader is, otherwise just think of it as the BIOS - the very basic low level software that boots the OS (among other things).

Aside: in a modern OpenTX setup there are actually two bootloaders - a super low level one called the STM32 bootloader, that you can always fall back to, and the OpenTX bootloader that provides more features (and allows you to do fancy things like update the firmware on other devices, like the receiver, without needing a laptop or PC).

When people use the term "firmware" you'll have to deduce from context whether they mean the OS, i.e. OpenTX, or the low level radio firmware - often it's not very clear.

OpenTX Companion
----------------

You can setup everything to with your transmitter via the transmitter itself, but this can be fairly fiddly using just the dial and the other buttons. One of the great features of OpenTX is that you can connect the transmitter to a computer via a normal USB connection and do all the setup using an application called OpenTX Companion.

We'll use OpenTX Companion first to update the OpenTX version on the transmitter, along with the bootloader and radio firmware.

OpenTX Companion can run on Mac, Linux and Windows. On Mac and Linux it doesn't need any extra driver but if you're using Windows you'll need to download [Zadig](http://zadig.akeo.ie/) and get it to install a USB driver for the STM32 bootloader. With a modern Windows setup and the current version of Zadig this is trivial but at with much OpenTX documentation they make it sound very complication. So I suggest you just download Zadig, run it and then go to the OpenTX [Zadig documentation](http://open-txu.org/home/undergraduate-courses/fund-of-opentx/using-zadig/) and just jump straight down to the point where it says "The first screen you see will be the Zadig install window" and work through the three following simple steps.

Go to [OpenTX.org](http://www.open-tx.org/) and then to the News section, click on the link to the latest OpenTX 2.2.0 RC (RC18 at the time of writing). Go to the bottom of the resulting page and click on the link for the OpenTX Companion version for your system (Window, Mac or Linux).

TODO: normally I wouldn't recommend an RC release but it's actually a prerelease version of 2.2.0 that comes on the Q X7 and 2.2.X is the first version that comes with direct support for the Q X7. Once 2.2.0 stable is out update this section telling people to go to Downloads (where stable versions are) rather than to New and an RC release.

When you start OpenTX it'll complain that it's "Unable to check for updates" - this is a consequence of using an RC release and you can resolve it as described [here](https://github.com/opentx/opentx/issues/4012) (actually you need to tick both "Use OpenTX firmware nightly builds" and "Use Companion nightly builds").

TODO: remove link to above Github issue - and uncheck the options involved - once a stable release is available.

When you start OpenTX it'll check for the latest firmware and ask if you want to download it - **don't** as you haven't configured your transmitter model yet and it defaults to downloading firmware for the Taranis X9D+.

So go to settings (the cog icon), change the radio type to "FrSky Taranis X7" and tick lua, sqt5font and massstorage as build options. Only the radio type is very important, the build options could all be left unchecked - the three suggested options are just commonly selected - _lua_ enables [Lua](https://en.wikipedia.org/wiki/Lua_(programming_language)) scripting for the transmitter (a feature I can't see myself ever using), _sqt5font_ seems to be an alternative font that many people prefer and _massstorage_ means that your Taranis looks like a USB drive when it's plugged into your computer.

Note: I tried the firmware with _sqt5font_ ticked and with it unticked and didn't see any difference in the transmitter's font so perhaps this setting is irrelevant for the Q X7.

For a more detailed walkthru of these basic settings see Oscar Liang's [walkthru](https://oscarliang.com/flash-opentx-firmware-taranis/), just jump down to the "Firmware Download and Flashing". Note that he's setting things up for a Taranis X9D+ and that he turns off _massstorage_ (as a side effect of having it enabled is not being able to use the transmitter with simulators, something I've never tried). Also this [video from the 179 second mark](https://www.youtube.com/watch?v=q1D-LEfDprk&feature=youtu.be&t=179) covers the same thing for the Q X7.

Backup
------

OK - now we're ready to connect the transmitter to the computer. You'll need a USB cable with a mini-B connector (like [this one](https://www.amazon.co.uk/AmazonBasics-USB-2-0-Cable-Male/dp/B00NH11N5A)), i.e. the kind of cable usually used to connect to cameras.

First start the transmitter in bootloader mode - this involves pressing the two swtiches above the LCD inwards while you press the power button. Again Oscar Liang has a nice picture on his [walkthru](https://oscarliang.com/flash-opentx-firmware-taranis/) in the "Backup Current Configuration" section (however we're going to back things up in a different way).

Once started in bootloader mode it'll say "Or plug in a USB cable" so do that (the USB port is under the flap at the bottom of the transmitter) and connect it to your computer running OpenTX Companion. First we're going to backup the concurrent transmitter setup - go to the Read/Write menu and first select Read Firware from Radio and save the result as e.g. `orig-firmware.bin`, then select Backup Radio to File and save the result as e.g. `orig-eeprom.bin`.

If _massstorage_ is currently enabled for your Q X7 (which is the factory default) then you transmitter should appear as a USB drive called Taranis, if you open this drive you should find two files called `EEPROM.BIN` and `FIRMWARE.BIN` that contain exactly the same contents as the two files we just backed up. So if _massstorage_ is enabled an even easier way to backup your transmitter is to copy these two files to your computer.

Note: if you recorded your current OpenTX firmware version as described above then you may also want to record the bootloader version to see how it also is affected by the upgrade process - just record the top title of the bootloader screen, it should be something like "X7 Bootloader 2.2.0".

In all likelyhood you'll never need these backups.

While USB is connected it's not acutally possible to power off the transmitter, so eject the Taranis USB drive (if _massstorage_ is enabled), disconnect the transmitter and turn off the transmitter.

Upgrade
-------

For upgrading we're going to plug the transmitter in again but without turning in on first, you may here a little pop from the speaker but nothing else should happen.

Assuming you haven't already downloaded the latest OpenTX firmware suitable for your transmitter type (OpenTX will nag you everytime you restart it to do so) then go to the File menu and select Download..., then click Check for updates, it'll find the latest firmware and prompt you to save it to your local drive - do this. Now we're ready to write the latest version of OpenTX to the transmitter - go to the Read/Write menu and select Write Firmware to Radio - you should now see the firmware version you just downloaded - just click Write to TX. If you click Show Details you'll then see a more informative indication of progress.

That's it - unplug the transmitter (as we never turned it on it was never mounted as a USB drive so we don't have to be careful about ejecting it first).

It you turn on the transmitter now and go to the version screen (as described above) you should see the new version details, similarly if you startup the transmitter in bootloader mode you should see that the bootloader version that's shown has changed as well.

**Important:** there are other ways, described elsewhere, to upgrade the firmware - however this approaches are only able to update the OpenTX firmware, while this approach updates both the OpenTX firmware and the OpenTX bootloader. E.g. Oscar Liang, in his walkthru connects the transmitter in bootloader mode both for the backup (as above) and for the upgrade - but if you start in bootloader mode then the bootloader is active and it cannot be upgraded so only the OpenTX firmware is upgraded.

SD card
-------

The Q X7 doesn't come with an SD card but we're going to need one to upgrade the radio firmware next.

The SD card can store images and sound files that the OpenTX firmware can use and you can backup to the SD card and store firmware updates for the radio (and later as we'll see also for the receiver).

You don't need a very big one - the standard set of sound files etc. are only around 37MB and a complete backup takes less than 1MB so a 2GB card would be more than enough. However the smallest card you can buy these days seems to be about 8GB - something like this [Kingston 8GB microSD card](https://www.amazon.co.uk/Kingston-8GB-Micro-SD-HC/dp/B001CQT0X4/).

Go to the same place that you downloaded OpenTX Companion (see above) and just above the links to OpenTX Companion for various OSes you should find a link to "SDCard content". Click this and download the latest version shown for the Q X7 (`sdcard-taranis-x9-2.2V0009.zip` at the time of writing).

TODO: update once 2.2.0 stable comes out.

Format your SD card for FAT (rather than e.g. exFAT or NTFS), unzip the downloaded SD card contents and copy them to the card so that it ends up containing a set of top level directories named `EEPROM`, `FIRMWARE` etc.

Note: FAT means FAT32 these days - essentially nothing is using earlier FAT variants anymore.

If you're on a Mac you may end up with a whole load of [extended attribute](https://apple.stackexchange.com/q/14980) files and other Mac specific stuff. The transmitter ignores them but you may want to remove them while the SD card is still plugged into your Mac. Close any Finder windows showing any folders on the SD card, then in terminal find the appropriate volume under `/Volumes` (I called my SC card `OPENTX`) and do something like this:

    $ cd /Volumes/OPENTX
    $ rm -rf .Trashes ._.Trashes .Spotlight-V100 .fseventsd
    $ rm $(find . -name '._*')

As always be very careful what you're doing when using `rm` from the command line!

Once you're ready eject the card and put it into the transmitter (the SD card slot is beside the USB connector). The card goes in upside down, i.e. connector pins facing upward.

**Important:** the Q X7 warns that you should never insert or remove the SD card while the transmitter is on.

Now turn on the transmitter - the first thing you'll notice is that the transmitter starts talking to you. This can be a little disturbing but apparently it's useful when your flying and you want to stay looking at your drone rather than the LCD screen.

Now if you go to "radio setup" (see how above) and then press PAGE to get to the SD card screen you'll see the contents of the card. If you haven't already try playing with the dial and pressing it to navigate around the contents of the card - it's fairly intuitive.

If you turn off the transmitter, restart it in bootloader mode and connect to your computer you'll now see two USB drives (assuming you enabled _massstorage_ as outlined above). One is the Taranis drive we saw before and the other is the SD card - it looks just as it did when directly connected to your computer.

Note: once after setting up the SD card the bootloader froze in the same fashion as described [here](http://openrcforums.com/forum/viewtopic.php?t=8882). I didn't pull a battery to turn if off - I'd pressed power for a long time and then left the transmitter alone and eventually it turned itself off. I don't know if this was related to adding the SD card and the transmitter successfully entered bootloader mode the next time I tried.

Radio upgrade
-------------

The internal XJT module is the hardware within the transmitter that communicates with the receiver on your drone.

Aside: I haven't been able to find out what XJT means - it's probably just a meaningless FrSKY acronym.

Go to [download](http://www.frsky-rc.com/download/) on the FrSKY, select Firmware, then select Tx Modules (from the dropdown) and click on Firmware-XJT - the picture shows an external XJT module but if you look at the compatibility list you'll see that it's also appropriate for the Taranis Q X7 and other transmitters where the XJT is the standard internal module.

Click on Download and extract the resulting ZIP file. It will contain two `.frk` files. You'll just need one or the other depending on the jurisdication that you'll be flying in (the `LBT` file for the EU and the other file for the US).

TODO: move over explanation from receiver about LBT being for EU.

If you can see you're transmitters SD card via USB connection as described above then just copy the appropriate `.frk` file to the `FIRMWARE` directory on the card. Otherwise turn off the transmitter, pop out the card and copy the file on directly from your computer.

Once you've disconnected USB (or reinsterted the SD card) restart the transmitter in normal mode and navigate to the contents of the SD card (as described above). Navigate to `FIRMWARE` and select the `.frk` file that you just copied on (it should have a name like `XJT_LBT_build161214.frk` or the same without `LBT` for the US). Select it and press ENTER, i.e. press the dial, You should see a popup with various options - select _Flash int module_ and you should see a progress bar indicating that it's being written.

Oddly the process just finishes without any confirmation (presumably if there was a problem it would have told you) and there appears to be no way to query the XJT firmware version via OpenTX - you just have to trust that it's been done (I've confirmed this on the [OpenTX chat channel](https://opentx.rocket.chat/channel/OpenTX_General?msg=mszoW8QwiAirmFfvy)).

Wrap up
-------

OK - that's it for the moment with the transmitter. Later on we'll use Open Companion again to configure some of the switches to select between various [flight modes](http://ardupilot.org/copter/docs/flight-modes.html) for the quadcopter. And we'll look at disabling self-centering for the throttle.

As noted at the start of this page getting the transmitter ready is the most complex task in the whole build - everything gets simpler from now on.

Notes
-----

If you're really interested the OpenTX project has a lot of documentation - however I'm not sure I'd recommend it, it can be rather overwhelming and some of it is more confusing than helpful. But for reference here's the material either directly produced by or recommended by the OpenTX project:

* [The OpenTX 2.2 manual](https://opentx.gitbooks.io/manual-for-opentx-2-2/content/) - this is probably the most digestable of these items but isn't terribly detailed.
* [The OpenTX 2.1 documentation](http://openrcforums.com/forum/viewtopic.php?f=45&t=8724) - despite the similar name this is a completely different set of documentation, it has far more detail but can be confusing at times.
* [OpenTX University](http://open-txu.org/home/undergraduate-courses/) - someone has put a lot of work into this but I found it so meandering as to be almost useful - but there is some good information in there.

For any given task it's often easier just to Google for information - you'll generally find someone else has writetn something shorter and clearer on that particular thing.
