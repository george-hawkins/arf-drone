Video
=====

TODO: remember to add SD card (see specific link below) to purchase list of things for video.

RunCam 2 - what you get in the box:

* Camera.
* Replacement lens protector.
* Battery.
* Four velcro straps - two narrow and two wider.
* Camera holder plus an adapter for a standard camera tripod.
* Two double-sided adhesive pads.
* Micro USB cable with power-in and video out connectors.
* RCA composite video adapter.
* USB cable (for recharging and connecting to your computer).
* Layard (that can be unscrewed at the middle).

_RunCam 2 parts_
<img width="512" src="images/video/parts.jpg">

The camera holder can take interchangeable adapters for different mounts - it just comes with an adapater for the standard 1/4-20 UNC screw found on most tripods but you can e.g. also get adapters like the ones included in this [package](https://www.banggood.com/RunCam2-Camera-Mount-Support-GoPro-Action-Camera-p-1031391.html) for GoPro style mounts.

The camera comes with a number of cables - as well a standard USB cable, for recharging the battery and for connecting the camera to you computer, there's a cable consisting of a micro USB connector with power and video connectors coming off it. This second cable is more interesting - if you want you can use the power connector to provide power from e.g. your craft's main battery, rather than use the camera's internal battery, and the video connector can be connected up to a video transmitter or it can be connected up to the RCA composite video adapter and from their directly to e.g. an LCD monitor that takes composite video input.

You don't need to use this second cable at all - you can just power the camera off its internal battery and record video to the internal SD card (rather than transmitting it to some other device). The camera doesn't come with an SD card - you need at least a class 6 card, something like 16GB class 10 [SanDisk card](https://www.amazon.co.uk/SanDisk-Ultra-MicroSDHC-Memory-Adapter/dp/B013UDL5V6/) is probably more than enough.

TODO: get figure for GBs used by camera at 1080p/60fps.

**Important**: if you're using the camera while powering it via USB, i.e. using its video capabilities rather than simply recharging its battery, then you must remove the battery first otherwise the battery can overheat and be damaged.

If you look at the battery you'll see a clear plastic tab with an arrow on it - I initially assumed that this was something that was meant to be pulled off, like the little protective film on the lens, but it's meant to be left there and enables you to pull the battery out of the battery compartment. Similarly I almost damaged the battery cover by assuming it's supposed to be pushed all the way to the side when removing it - instead you just push it over a few millimeters and then waggle it outwards as shown [here](https://youtu.be/r1Ju8icXsRQ?t=427) - this video also shows how to insert the SD card (upside down relative to the top of the camera).

_RunCam 2 battery compartment._
<img width="512" src="images/video/battery-compartment.jpg">

Usage
-----

To charge the battery you just need to install it in the RunCam and connect it to a USB charger or to a computer - the LED behind the main button will light up red initially before turning off later to indicate that it's fully charged.

However it takes a long time to charge and once charged you'll run it down quite quickly if you use it to power the RunCam during initial setup and getting to know the camera. So for setup I just took out the battery and powered the RunCam via USB (as noted above its important to remove the battery when using the camera like this). When powered via USB a small red LED at the edge of the main button pulses weakly but this seems to be fine.

**Important:** I found that while the camera would turn on if connected to a normal USB port you couldn't then turn on its WiFi. The issue seemed to be that the USB port couldn't provide enough power - if I connected it to a charging port or to a USB charger then everything worked fine.

The first thing you should do is install the [iOS or Android app](https://www.runcam.com/download/runcam2/) on your smartphone - this lets you see the video output of the camera, start and stop recording and adjust settings easily. Once the app is installed you can connect to the camera as follows:

* Turn on the camera by pressing the main button for 3 seconds - the LED behind this button will go blue (if it flashes blue this means you haven't inserted an SD card yet).
* Turn on WiFi by briefly pressing the WiFi button, i.e. don't hold it down.
* On your smartphone look for a wireless network named something like "RUNCAM2_2fc113" and connect using the password "1234567890".
* Open the RunCam app and select the RunCam 2 as your device type and then press _Connect your camera_. It then goes through a binding phase, this process failed for me but the app was able to explain why - it was necessary to turn off mobile data first on my phone - once this was done the binding completed without problem.
* Once bound and connected you'll see what the camera sees on your smartphone.

My camera came with a firmware version that was only one version behind the most recent version version available at the time. Some of the earlier firmware releases had noticeable image quality issues, these are long gone but it's still probably worth updating all the same.

Assuming you're still connected to your camera (as outlined above) you'll have to first press the back button in the app (the upper-left back arrow) to disconnect as you can't upgrade the firmware while connected. Once disconnected press the upper-left menu button and select firmware update - it'll tell you what the camera's current firmware version is and ask you if you want to check for a newer version - if it finds one it'll then lead you through the update process. This process requires an SD card so you'll need to have already installed one in the camera.

Note: in the unlikely event that your camera came with a firmware version earlier than 2.1 then you'll have to update the firmware via the SD card (see the instructions included on the [download page](https://www.runcam.com/download/runcam2/)).

You'll see a lot of criticism of early releases of the app and firmware but the latest versions of both make for a very easy to use camera. Once connected via the app try out the buttons above and below the video image, e.g. the white balance (WB) button, the field-of-view (FOV) button etc., drag the modes line, i.e. video, photo etc., left and right and try taking photos and videos (the big obvious red button). It's all pretty obvious.
