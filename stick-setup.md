Stick configuration
-------------------

Lot's of tutorials on the transmitter go into intense detail on choosing a configuration of the sticks.

There are a number of popular conventions as to stick configuration, i.e. whether moving the left or right stick up and down controls throttle etc.

The most popular conventions have been given names - very uninformative names - "mode 1", "mode 2" etc.

By far the most common mode is mode 2 and this is the default for the Q X7 so there's no need to go into detail on how to change the mode. The next most common is mode 1 and then the other modes almost never come up.

If you're interested in the different setups of the different modes see Oscar Liang's description of [modes](https://oscarliang.com/choose-rc-transmitter-quadcopter/#modes) but before you do a note...

The stick directions have names, people who come to quadcopter flying from flying RC planes tend to continue using names that meant something for planes but mean little for quadcopters - i.e. aileron, elevator and rudder. For people less wedded to the thinking that went with planes the terms pitch, yaw and roll are used. Both schools use the term throttle.

If you're new to RC then neither set of terms may mean much so here's a simple table:

| Planes | Multicopters | Meaning |
|--------|--------------|---------|
| elevator | pitch | go forward or backward |
| aileron | roll | go left or right |
| rudder | yaw | turn clockwise or counterclockwise |
| throttle | throttle | ascend or descend |

The "term" elevator seems particularly confusing - it doesn't mean up and down as one might guess. Hopefully the distinction between _going_ right and _turning_ clockwise is clear - if you're used to first person shooters then _going_ right is the equivalent of siddling left crabwise while still facing the same direction while _turning_ clockwise means staying put but changing the direction your facing (turning round to face right, turning further to face back and so on until you do a full 360).

I couldn't find a perfect page showing the use of the terms pitch, roll etc. This [page](http://newatlas.com/drone-school-quadcopter-transmitter-mode-1-2/40847/) clearly labels the sticks for mode 1 and 2 while this [page](https://www.wearechampionmag.com/quadcopter-transmitter-mode2-vs-mode1-difference) shows nicely the affect of the controls on the drone (unfortunately it uses the term roll for forward and backward, as well as left and right, rather than the more common _pitch_ forward and backward).

Another aspect of stick setup, that isn't fixed before flying, is trim - I won't go into that here but you can see the digital trim buttons if you go back to the diagrams I used when first introducing the transmitter. For details on this see the "controller trim" section of this [page](https://dronebuff.com/drone-controller/) and see this [video](https://www.youtube.com/watch?v=Nk2h06Ql3cM) (he's not terribly successful at getting trim right but you get the idea).

Disabling throttle self centering
---------------------------------

The Q X7 comes with both sticks self centering in all directions, i.e. if you let go of either it returns to the center point.

However throttle, i.e. up/down, controls overall power to the propellers - when throttle is all the way down the propellers should be off and when its all the way up they should be turning at maximum. So you don't really want throttle just springing half way to a value between these.

Most people want throttle at zero when they're getting ready for talkoff and then they want it just staying where it is if they take their finger off it.

Aside: older consumer drones used to behave much like this too, at least for the low throttle case. On older DJI models the throttle only self centered if you took your finger off it when it was above the midpoint - on the latest models though the throttle always self centers, with the center point meaning "hold current altitude" while up and down mean ascend and descend respectively.

_Throttle with self centering disabled_  
<img height="256" src="images/assembly/transmitter/throttle-self-centering-disabled.jpg">

To disable self centering on the throttle you have to open up the transmitter - this isn't a big issue, unlike many consumer electronic items that come with strick injunctions against opening them up it's expected that you'll take apart the transmitter (though if you break anything that's still your problem).

The whole mechnical mechanism behind a stick is called a gimbal and you often hear people using the terms stick and gimbal interchangeably (though confusingly the term gimbal on its own often means the remote control camera setup that's common on many drones these days - to see the clear distinction between the two see e.g. the [gimbal sticks section](https://hobbyking.com/en_us/radios-receivers-1/parts-accessories/gimbal-sticks-extensions.html) and the [camera gimbals section](https://hobbyking.com/en_us/multi-rotors-drones/camera-gimbals.html) on the HobbyKing online store).

I'm not going to go in-depth into disabling self centering for the throttle, instead I suggest watching these three videos (each link brings you to the specific point in the video that discusses disabling self centering):

* [Painless360 at 4:51](https://www.youtube.com/watch?v=YD3ojhwVmrI&feature=youtu.be&t=291)
* [Flite Test 8:18](https://www.youtube.com/watch?v=7cExS1tTOJA&feature=youtu.be&t=498)
* [RCdiy at 0:22](https://www.youtube.com/watch?v=yF8jrkYJ7nA&feature=youtu.be&t=22)

All three videos do things slightly differently. The Painless360 one is the closest to how I did things - however he mixes this step in with removing the battery holder (so he can put in a LiPo instead) which is something I didn't do. Also when removing the back cover he removes two screws that you don't need to remove (the upper left and right screws under the battery cover). Flite Test leave the battery holder connected to the main PCB but, like Painless360, I unplugged it. The whole thing is easy to do but I was a little nervous I'd yank out the wires when unplugging the battery holder or that the screw driver would slip and I'd stab the PCB when tightening the screw that disengages the gimbal spring.

Note: while the transmitter is opened up in these videos you can take a look at the rest of the internals, not just the gimbals. You'll see things like the little watch battery that will keep the transmitter's clock (called an [RTC](https://en.wikipedia.org/wiki/Real-time_clock)) going even when the main battery compartment is empty.

So the steps I took in brief:

* Removed both the battery door and the external module doors from the back cover before starting.
* Removed the four large Phillips screws holding the back cover on and took it off.
* Left the battery holder in place, in the back cover, but unplugged it from the main PCB.
* Screwed down (all the way) the lower of the two screws related to the up/down spring arrangement for the left gimbal.
* Screwed down (all the way) the upper screw of the non-notched bar that provides the friction needed to stop the gimbal just flopping about. I then loosed the screw about half a turn to make the movement a little less stiff.
* Plugged the battery holder back in and put the back cover back on, taking care to watch out for the pins on the PCB that stick up into the external module bay.

The screw that disengages the gimbal spring is only barely screwed in initially - it actually popped out when I started trying to screw it in. Take care that you don't accidentally rest everything on one switch or gimbal while focusing e.g. on tightening a screw.

In RCdiy's video he removes the battery holder from the back cover - which is unnecessary - and he loosens the upper of two screws related to the up/down spring arrangement rather than the better approach of tightening the lower one. But his video is accompanied by an otherwise excellent [page](http://rcdiy.ca/taranis-q-x7-tutorial-first-flight-setup/) that describes the disassembly and provides lots of close up pictures (along with lots of other details on getting the transmitter set up).

Now that the throttle doesn't self center you can leave it pulled down when turning on the transmitter and you'll now longer get any throttle warning when it starts up.
