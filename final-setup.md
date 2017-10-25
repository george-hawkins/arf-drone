Final setup
-----------

If you long press _PAGE_ from the main screen you get to the telemetry screens. If the receiver is off then all you'll see is "No Telemetry Screens", the top bar shows the currently selected model and the current voltage of the transmitter's batteries.

![no setup](images/opentx-screenshots/rssi-bat/01-no-setup.png)

Plug the Pixhawk in to USB (there's no need to connect the main LiPo battery). This will provide power to the receiver. Now (without you needing to configure anything) it will start displaying the [RSSI](https://en.wikipedia.org/wiki/Received_signal_strength_indication) (Received signal strength indication) (received signal strength indication). This tells you how strong the radio link between the receiver and the transmitter is. If you walk around with the transmitter you should the value increase and decrease as you'd expect. However when you get within about 2m things get a little odder as various affects kick-in due to the receiver and transmitter being too close together.

TODO: this should be explained way earlier as people get confused by the "telemetry lost" / "telmetetry recover" (yes it's "recover" and not "recovered"). Can I find a good explanation for the "saturation" affect when RX and TX are close.

TODO: I tried to get a good explanation of why RSSI behaves strangely when the RX and TX are in close proximity - there's lots of fairly random unconvincing explanations on the web. I asked on the OpenTX rocket chat but just got "I believe it's nothing more than the short distance causing a signal overload on the RX frontend." (see [here](https://opentx.rocket.chat/channel/OpenTX_General?msg=zeD5EoF765crgjuHR)). This seems the most common explanation that there's some kind of signal swamping issue.

![no setup-rssi](images/opentx-screenshots/rssi-bat/02-no-setup-rssi.png)

If you walk very far away then you'll hear the transmitter announce "RF signal low" (and the RSSI bar will turn from solid black to a checkered pattern). If you go even further it will announce "RF signal critical". It'll repeat these warning every 10 seconds while the signal remains low (or critical).

![no setup lo rssi](images/opentx-screenshots/rssi-bat/03-no-setup-lo-rssi.png)

So you get the RSSI value displayed as a bar and low and critical alarms without having to set up anything. The same isn't true of any other telemetry values - in particular the telemetry data from the FrSKY voltage sensor. This has to be setup explicitly. Make sure the voltage sensor is plugged in.

<img src="images/assembly/final-setup/rx-and-flvss.jpg" height="512">

Now on your transmitter go to the _Model selection_ screen and long press _PAGE_ twice to get to _Telemetry_, scroll down to _Discover new sensors_ and press _ENTER_. It should detect the _Cels_, _RSSI_ and _RxBt_ telemetry values being transmitted by the receiver. An asterisk should flash on and off beside the _RSSI_ and _RxBt_ values showing that updated values for these are being received continuously.

![discover](images/opentx-screenshots/rssi-bat/04-discover.png)

![discover flvss](images/opentx-screenshots/rssi-bat/05-discover-flvss.png)

_Cels_ is the value coming from the voltage sensor - initially its value shows as `---` but plug the sensor into the balance connector of the battery and it'll start generating data.

<img src="images/assembly/final-setup/rx-and-flvss-and-bat.jpg" height="512">

You can see that the basic _Cels_ value is the total voltage of the battery - but what we're really interested in is the voltage of the individual cells, in particular the lowest voltage one. It's crucial that the voltage of no one cell drops too low. We'll come back to this later - but for the moment will just work with the total battery voltage.

Press _Stop discovery_ and then press _PAGE_ to get to _Display_.

![discover flvss bat](images/opentx-screenshots/rssi-bat/06-discover-flvss-bat.png)

Here we can configure what's seen on the telemetry screens. Select _None_ for _Screen 1_ and change it to _Nums_. You can also choose to display values as bars but this involves a bit more setup as you have to set low and high range for each item you want to display.

![display](images/opentx-screenshots/rssi-bat/07-display.png)

![display nums](images/opentx-screenshots/rssi-bat/08-display-nums.png)

Now go down and add items to five of the `---` areas, when you press _ENTER_ you can scroll through a list of items that can be displayed. There are all kinds of things, like throttle value etc., the interesting things are right at the end. Select the three sensors that were discovered along with _Batt_ and _Time_.

![display vals](images/opentx-screenshots/rssi-bat/09-display-vals.png)

Note: for _RSSI_ (and many other values) there are also plus and minus variants, i.e. _RSSI+_ and _RSSI-_. These can be used to show the highest and lowest seen values for RSSI, i.e. the normal _RSSI_ value is updated continuously while _RSSI+_ and _RSSI-_ are only updated when the current RSSI value falls or rises above than the previous miniumum or maximum.

TODO: when are the _RSSI-_ and _RSSI+_ values reset - when the TX is switched on and off?

TODO: ask about the following on the [OpenTX 2.2 support thread](https://www.rcgroups.com/forums/showthread.php?2823315-OpenTx-2-2
https://youtu.be/Qo4Ck_vsJ6I):

1. The TX battery voltage is still displayed in the top bar but RSSI has disappeared from the bottom one. Why? If I remove _RSSI_ as a displayed value it's still gone (i.e. it's not removed to avoid duplication). In OpenTX 2.1 you could choose the voltage source displayed in the top bar, i.e. you could switch it from the TX value to the Cels value, but this feature seems have gone from the _Telemetry_ screen - has setting up the top and bottom bar moved elsewhere?

2. Note difference between RSSI that TX sees from RX and the the RSSI that the RX sees from the TX that's reported back via telemetry data. Presumably the first is what you see in the bottom bar below. Is there anyway to get "TX seen RSSI" as an item on the telemetry screen or is it gone forever once "RX seen RSSI" is available? Ask about this on some OpenTX forum.

Now if you exit all the way back to the main screen and long press _PAGE_ you see something a bit more interesting than "No telemetry screens". So _Cels_, as already mentioned, is the total voltage of your craft's battery, _Batt_ is the voltage of the transmitter's batteries (and just duplicates the value already seen in the top bar) and _RxBt_ is the voltage of the receiver's power source. The receiver is powered via the Pixhawk that provides it with about 5V - so this value isn't directly related to any battery and isn't very interesting.

![telemetry](images/opentx-screenshots/rssi-bat/10-telemetry.png)

So we've seen the varous voltage source values we can display - as _Batt_ is already shown in the top bar and _RxBt_ isn't very relevant let's remove them on the _Display_ screen and then return to the cleaned up telemetry screen.

![less vals](images/opentx-screenshots/rssi-bat/11-less-vals.png)

![less telemetry](images/opentx-screenshots/rssi-bat/12-less-telemetry.png)

The voltage of the lowest voltage cell is more important than the total voltage. To get this we have to go back to the _Telemetry_ screen and manually add a new sensor (that's actually derived from secondary data provided by the _Cels_ sensor but not yet displayed). Select _Add a new sensor_.

![add new-sensor](images/opentx-screenshots/rssi-bat/13-add-new-sensor.png)

Then enter an appropriate name, e.g. "LoCe" (it can be a maximum of four letters), set _Type_ to _Calculated_, _Formula_ to _Cell_ and _Cell sensor_ to the name of our sensor, i.e. _Cels_, and set set _Cell index_ to _Lowest_.

![lowest cell](images/opentx-screenshots/rssi-bat/14-lowest-cell.png)

On exiting out we now see LoCe as an additional sensor. You can add more sensors, just like above but with different _Cell index_ values, e.g. 1 to 4 for the specific cells or _Highest_ for the highest voltage cell or _Delta_ for the difference between the highest and the lowest voltage cell (to give you a measure of how balanced the cells in your battery are). For the moment we'll just stick with LoCe.

![loce added](images/opentx-screenshots/rssi-bat/15-loce-added.png)

You can now add LoCe to the displayed values and see it on your telemetry screen.

![display loce](images/opentx-screenshots/rssi-bat/16-display-loce.png)

![telemetry loce](images/opentx-screenshots/rssi-bat/17-telemetry-loce.png)

Low RSSI alarm
--------------

We don't have to do anything to set up audio alerts for low and critical RSSI values - this is done automatically. If you were looking carefully on the _Telemetry_ screen you'd have seen the _Low alarm_ and _Critical alarm_ values for RSSI - the defaults seem to be considered good (45 and 42 respectively).

![RSSI alarm](images/opentx-screenshots/rssi-bat/rssi-alarm.png)

As noted above if you take the transmitter and walk away from your receiver, watching the RSSI value getting smaller and smaller, you will eventually hear the "RF signal low" and then the "RF signal critical" audio alerts. Or if you live in a small apartment (like mine) where the RSSI never drops to 45, no matter where transmitter and receiver are, you can simply temporarily alter the low and critical levels to e.g. 75 (the maximum settable level) and 70 respectively to test things out.

Low battery alarm
-----------------

Surprisingly there isn't a similarly simple default setup for warning on low battery voltage. Instead we have to set up a logical switch that turns on when the value of LoCe falls below a particular value. Then we use this logical switch to trigger an audio alert.

So go to the _Logical switches_ screen, scroll down to a free slot, long press _ENTER_ and select _Edit_. Then for the _Func_ select _a<x_, then select LoCe and 3.5V for the _V1_ and _V2_ values respectively and choose a _Delay_ of 3 seconds.

![logical low](images/opentx-screenshots/rssi-bat/18-logical-low.png)

The 3 second delay means that the condition has to hold for at least 3 seconds - this avoids the switch being triggered for temporary voltage drops - these happen e.g. when you suddenly apply a lot of throttle.

Most web pages are fairly consistent in giving 3.3V as the value at which the battery voltage will start to drop very rapidly and is the point at which you should stop flying, however there's more variance as to what constiutes the low point before this at which you should start thinking of wrapping up a session with a paricular battery. I've chosen 3.5V and this seems fairly common.

So we've setup a logical switch to trigger at 3.5V, setup another to trigger at 3.3V.

![logical switches](images/opentx-screenshots/rssi-bat/19-logical-switches.png)

Now that we have two logical switches, that will trigger at our low and critical voltage values, go to the _Special Functions_ screen and add two additional functions that link these logical switches to the _Play track_ function. Select the _lowbat_ track for the 3.5V triggered switch and the _batcrt_ track for the 3.3V triggered switch.

Note: _batcrt_ isn't part of the standard OpenTX SD card contents and comes from the sounds in `opentx-extra-tracks.zip` that we installed previouly when setting up sounds for the flight modes.

![special functions](images/opentx-screenshots/rssi-bat/20-special-functions.png)

You can then test that the audio alert really gets triggered by going back and editing one of the logical switches, temporarily increase the _V2_ value to e.g. 4V and just leave it for the delay period (3 seconds), you don't have to exit out of editing. If all goes well you should hear the expect track - if all goes well return _V2_ to its proper value.

![trigger low](images/opentx-screenshots/rssi-bat/21-trigger-low.png)

Unlike the RSSI alarm, these alarms will only sound once rather than repeating every 10 seconds.

Notes
-----

For a nice video on setting up telemetry (discovering sensors) on the Q X7 see this [video](https://youtu.be/Qo4Ck_vsJ6I?t=122) from Painless360 (from 2:02 onwards). And for one on displaying all the data available from your FLVSS sensor on your transmitter, including the individual cell voltages, the highest and lowest values and the difference between these two, see this [video](https://youtu.be/lORZGjDpZEg).
