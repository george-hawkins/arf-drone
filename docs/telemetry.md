---
id: telemetry
title: Telemetry
---


TODO
====

Wiring up telemetry for X8R and Pixhawk - <http://ardupilot.org/copter/docs/common-frsky-telemetry.html> (includes setup in Mission Planner).

Make sure you enable the passthru telemetry option in Mission Planner cf the amount of telemetry info the Pixhawk will pass on if passthru is used vs if it's not.

As you can see in the table with passthru values there's only so much information - you can fairly easily see the kind of values you'd want on your primary telemetry screen. And the rest can be fitted on 2nd, 3rd and 4th screens (or ignored altogether). Having the last known GPS location can be good if your drone goes missing!

Note: in addition to _RSSI_, there's _RSSI-_ and _RSSI+_, the same goes for various other telemetry values. The - and + variants just show the lowest and highest values seen for the given telemetry value (presumably these values are transient and survive for the lifetime of the current session).

The common-frsky-telemetry.html is the usual confusion of lots of different things - I suspect the OpenTX Companion stuff is irrelevant and that much of the Mission Planner related stuff, like battery capacity might be better handled in the transmitter.

I did sensor discovery without any telemetry from the Pixhawk - all you get when the receiver is the only source is RSSI and RxBT. RxBT is just the "battery" seen by the RX - if you had telemetry from the Pixhawk you'd see the more interesting VFAS (but possibly only if you're running off a real battery rather than USB - it's unclear from what I've read).

Configuring alarms based on RSSI, Cell (the lowest cell is the important thing I guess the Pixhawk can't see this, so the battery meter is a good idea but the FrSKY device shown in this video is probably better still) and altitude - <https://www.youtube.com/watch?v=rLMpBZZSMno> (includes warning sound and reading value out loud).

Painless360 also nicely covers this in his video <https://www.youtube.com/watch?v=Lq3JwnuCrys> and shows how to record telemetry data and look at it later in OpenTX Companion - Strava for your drone :)

In addition to the telemetry cable Craft and Theory also do a nice telemetry visualization app for the X9D+ and Q X7. You can get a nice idea of what values you might like to see, even just as numbers/bars from their [app overview](http://www.craftandtheoryllc.com/flightdeck-taranis-opentx-ardupilot-arducopter-pixhawk-2-cube-servo-frsky-x9d-x7-q-x7-qx7-telemetry-smartport-smart-port-serial/). Note they do a full bundle with Q X7, X8R, telemetry cable, FlightDeckQ and a cell sensor - see [telemetry package](http://www.craftandtheoryllc.com/product/package-flightdeck-taranis-opentx-ardupilot-arducopter-pixhawk-2-cube-servo-frsky-x9d-x7-q-x7-qx7-telemetry-smartport-smart-port-serial/#configuration). So the cell sensor clearly seems to be _the_ telemetry addon to have.

In OpenTX 2.1 clearly you could set additional top bar values, in addition to the TX battery voltage, but this doesn't seem to be there or has moved in 2.2. See <http://www.multi-rotor.co.uk/index.php?topic=15143.0>

Blue Falcon - wiring telemetry <https://youtu.be/WKsFG29Q5mQ> - not for Pixhawk but still interesting, zip forward to 8:08 once he gets away from the receiver and into the flight controller (and then its software).

RSSI and MAVLink
----------------

Most of the telemetry information comes from the Pixhawk so it's feed back to the RX, which adds on RSSI and RxBT - though I've yet to see if this is the case, does it interleave it with the passthru data?

So the transmitter can see all the Pixhawk telemetry data and all the RX telemetry data.

But the Pixhawk can't see the RX telemetry data so my impression is that if you're using MAVLink you won't see this data - with RSSI being particularly obvious by its absense. Though note that you're now interested in two RSSI values that between TX and RX and between the two ends of the ends on the MAVLink connection - so I guess you can tell the drone to come home even if the TX/RX RSSI has gone too low as long as the MAVLink RSSI hasn't (assuming you can issue inflight commands via MAVLink - which is what I currently assume).

Anyway to get the RSSI data from the RX to the Pixhawk you have to connect the RSSI out port of the X8R to the Pixhawk as shown here <https://pixhawk.org/users/rc_rssi> - but then the setup in Mission Planner and QGroundControl/PX4 is a little less than clear.

The ArduCopter it _seems_ simple enough, according to [this page](http://hypomaniac.co.uk/passing-rssi-x8r-pixhawk/) you just have to set _RSSI_PIN_ and _RSSI_RANGE_ (this missing picture link is <http://ardupilot.org/copter/_images/pixhawk2.jpg>). So what's this 103 pin that's mentioned - see [Pixhawk analog input pins section](http://ardupilot.org/copter/docs/common-pixhawk-overview.html#pixhawk-analog-input-pins).

However this [page on ArduPilot.org](http://ardupilot.org/copter/docs/common-rssi-received-signal-strength-indication.html) mentions _RSSI_ANA_PIN_ - I suspect though this is well stale information or that at the very least that _RSSI_TYPE_ and _RSSI_CHANNEL_ are only relevant for the EZ-UHF / OpenLRS and that for the X8R the page above is more relevant and all that's important is if the correct setting is _RSSI_ANA_PIN_ or _RSSI_PIN_ - neither page disagrees about _RSSI_RANGE_.

So ArduCopter looks resolvable in terms of getting RSSI to the Pixhawk and on from there. But for PX4? The already mentioed above <https://pixhawk.org/users/rc_rssi> may have the answer in there somewhere.

RSSI and RX8R
-------------

An important difference between the X8R and the RX8R is that the second port, beside the SBUS OUT, is no longer an RSSI output port but has been repurposed as an S.BUS input port for connecting a second failover RX.

It's unclear if RSSI is on the PCB but not broken out (what does "on board" [here](https://www.rcgroups.com/forums/showthread.php?2792329-FrSky-New-Arrival-%C2%96-RX8R) mean).

I couldn't find much on the RX8R and RSSI beyond this RCGroups [thread](https://www.rcgroups.com/forums/showthread.php?2792329-FrSky-New-Arrival-%C2%96-RX8R/page6) where the RX8R is clearly being opened up to get at the RSSI signal and this [review](https://marketchangers.wordpress.com/%D0%BE%D0%B1%D0%B7%D0%BE%D1%80%D1%8B/frsky-rx8r-redundancy-bus-receiver/) that clearly states that the RSSI output has been replaced by S.BUS in (this review also provides a clear explanation of using the redundancy features).
