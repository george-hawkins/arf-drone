Assembly
========

The white arrow seen near the bottom of the front panel of the Pixhawk case isn't a pointless graphic - when installing the unit this arrow should be pointing towards the front of the quadcopter (see the [standard orientation](http://ardupilot.org/copter/docs/common-mounting-the-flight-controller.html#standard-orientation) section of the ArduPilot setup guide).

To shrink pictures to fit within a 2048x2048 box while maintaining their aspect ratio:

    $ mkdir small
    $ for i in *.jpg; do convert $i -resize 2048x2048\> small/$i; done

Good introduction to setting up a SkyRC charger (a dual charger similar to the S60). In German but better than any of the useless English ones - https://www.youtube.com/watch?v=1w9ROBMUEgk

DJI videos
----------

* <https://www.youtube.com/watch?v=pUTHIL_Xfcc> - assembling the original F450 kit.
* <https://www.youtube.com/watch?v=H_Rvi7xQLdw> - assembly with the (then) newer E300 propulsion system (now replaced by the E305). Note: with the F450 you don't have to use the E305 PDB as the bottom plate of the F450 is a PDB.
* <https://www.youtube.com/watch?v=qJZa7p3rsCU> - installing the Naza M V2 - while I didn't use this flight controller it's interesting to see how everything is fitted in.

Note: according to one of the comments the "video shows the base plate being mounted sideways. If you want to mount a front facing camera gimbal you should mount the base plate the other way." And someone else comments that "she moves the solder around with the iron and that means there is too little heat and the cable should be still until the solder has gotten hard again ... give a little more heat and hold it still a little longer after removing the heat! Better to use a more powerful soldering iron, then the time to heat it up is less and the heat doesn't go that deep in the board and the conector."
