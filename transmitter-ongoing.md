There are no end of transmitter settings you can adjust but we can ignore nearly all of them. We'll just set some basic things like time and date and create a model.

A single transmitter can be used to control any number of remote controlled craft, e.g. you could have a model plane, tank, boat, submarine and quadcopter and use the same transmitter to control whichever one of these you wanted to use at a particular time.

On your transmitter you create models, each model corresponds to the one of the RC craft you own.

Each RC craft has a receiver - to control a craft the transmitter has to be bound to that craft's receiver. Binding is like pairing a new bluetooth device, e.g. a speaker, with your smartphone. Setting up binding is part of the process of creating a model.

TODO:

Date and time: current date and time.
Country code: set to EU (default is US), not so important.


Create new model (or edit existing MODEL01).
Name: F450 Pix (enter for capital letters)
Failsafe: No pulses (gets rid of no failsafe warning)

No pulses is the preferred option for a Quadcopter using a Pixhawk - see [ArduPilot failsafe setup](http://ardupilot.org/copter/docs/radio-failsafe.html#receiver-and-flight-controller-set-up).
TODO: in the accompanying video they, like RCdiy (see below) set up the failsafe via the receiver but the video shows [how to test things](https://youtu.be/FhKREgqjCpM?t=93) (I think they're using an ancient PX4 so arming is different). Cf with how RCdiy tests failsafe (see below also).

* Flite Test [Q X7 Setup and review - 16:50](https://www.youtube.com/watch?v=7cExS1tTOJA&feature=youtu.be&t=1010), create new model, 19:42 they set mode to D8 (as they're using a D4R-II), then press Bnd (transmitter starts to chirp at intervals). They bind for a different receiver and from then on it's very plane specific so not very relevant.
* Painless360 [Tips for setting up a new radio - 10:37](https://www.youtube.com/watch?v=YD3ojhwVmrI&feature=youtu.be&t=637) - date and time, 11:39 does callibration.
* Painless360 [Creating basic model types - 2:50](https://www.youtube.com/watch?v=NIR85KOqIAo&feature=youtu.be&t=170
) - names the model, then initially he does setup for a plane (which is more complicated than a quad), e.g. he sets up inputs (to make the sticks "calmer" at their extremes by changing their curve expo values) but then says that for a quad this is normally handled via the flight controller, you can just skip to 6:44 for his quadcopter setup (but actually there's not much relevant content), at 8:11 he sets up an arming switch (which isn't relevant for the Pixhawk as it has its own physical arming switch) and sets up a flight mode switch (we'll do this much later, using another Painless360 video where he sets flight modes specifically for the Pixhawk using OpenTX Companion). At 10:50 its all over as far as quadcopters are concerned.

TODO: at 8:10 in the [Creating basic model types](https://www.youtube.com/watch?v=NIR85KOqIAo&feature=youtu.be) Painless360 sets up switches using inputs and mixers and then at 9:53 comments that this seemingly complex approach works out better than the apparenetly simpler approach of connecting up a mixer entry directly via source without doing any input setup. See if he follows this inputs/mixers approach when setting things up for the Pixhawk in OpenTX Companion.

RCdiy has a [detailed page](http://rcdiy.ca/taranis-q-x7-tutorial-first-flight-setup/#Using_OpenTX_The_Transmitter), that's accompanied by a video, that covers similar content. He covers setting mode (in our case the default is what we want already), binding, setting failsafe (he leaves failsafe to the receiver, we configure it to "no pulses" in the transmitter)

TODO: RCdiy covers [testing failsafe](http://rcdiy.ca/taranis-q-x7-tutorial-first-flight-setup/#Testing_Failsafe) - make sure to include a section on doing the same.

TODO: RCdiy covers doing a [range check](http://rcdiy.ca/taranis-q-x7-tutorial-first-flight-setup/#Range_Check) via the transmitter - make sure to cover this too.

* Blue Falcon [Q X7 - setting up failsafes - 5:28](https://www.youtube.com/watch?v=LuJ_K0pOJkE&feature=youtu.be&t=328) - in this video he goes through the various failsafe options and a 5:28 he sets "no pulses".

---

Blue Falcon has a whole [playlist](https://www.youtube.com/playlist?list=PLiYYhnH4BhI-ot9OQ9djvRaacFHboFqC2) of videos on the Q X7, starting out with a [basic introduction](https://www.youtube.com/watch?v=W9zYI7KAtn8) and works through pretty much every aspect of the transmitter, both its hardware and its software. For some things I think there are better approaches, e.g. gimbal adjustment, but overall it at least makes you aware of pretty much everything one can do with the transmitter.

TODO: remove the following comment when finished - of the Blue Falcon series the only bits that cover things that still need to be covered are binding and telemetry - I've moved the links relevant to these actions into the in-progress sections for these operations.

---

Binding
-------

* Blue Falcon - https://www.youtube.com/watch?v=RH_RuVbF2YU cf with binding video below.

* DroneTrest - http://www.dronetrest.com/t/how-to-bind-your-x8r-receiver-to-taranis-x9d/633 - cf the video with above, note image shows that you only get max 8 channels out so up above video shouldn't have 1-16 selected.

DroneTrest recommend [this video](https://youtu.be/S-LSZQk1Ya8?t=324) on Taranis plus Mission Planner setup, but skip to 5:24 as most of what it covers looks easier in OpenTX Companion (as covered in the Painless360 series) but it is interesting to see stick callibration etc. for the flight controller and how the flight mode swtiches he configured earlier can be seen acting in Mission Planner.

---

Telemetry
---------

Wiring up telemetry for X8R and Pixhawk:

* http://ardupilot.org/copter/docs/common-frsky-telemetry.html (includes setup in Mission Planner, OpenTX Companion and on the Taranis).

TODO: make sure you enable the passthru telemetry option in Mission Planner cf the amount of telemetry info the Pixhawk will pass on if passthru is used vs if it's not.

Blue Falcon:

* Wiring telemetry: https://youtu.be/WKsFG29Q5mQ - not for Pixhawk but still intesting, zip forward to 8:08 once he gets aways from the receiver and info the flight controller (and then its software).
* Configuring telemetry: https://www.youtube.com/watch?v=n09q26Gh858

---

Flight modes
------------

Once everything is setup the final step (I hope) is to configure flight modes as per the Painless360 Pixhawk video series:

* https://www.youtube.com/watch?v=agjHu-WhCJw
