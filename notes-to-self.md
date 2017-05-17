Notes to self
=============

The white arrow seen near the bottom of the front panel of the Pixhawk case isn't a pointless graphic - when installing the unit this arrow should be pointing towards the front of the quadcopter (see the [standard orientation](http://ardupilot.org/copter/docs/common-mounting-the-flight-controller.html#standard-orientation) section of the ArduPilot setup guide).

To shrink pictures to fit within a 2048x2048 box while maintaining their aspect ratio:

    $ mkdir small
    $ for i in *.jpg; do convert $i -resize 2048x2048\> small/$i; done

