Notes to self
=============

The white arrow seen near the bottom of the front panel of the Pixhawk case isn't a pointless graphic - when installing the unit this arrow should be pointing towards the front of the quadcopter (see the [standard orientation](http://ardupilot.org/copter/docs/common-mounting-the-flight-controller.html#standard-orientation) section of the ArduPilot setup guide).

To shrink pictures to fit within a 2048x2048 box while maintaining their aspect ratio:

    $ mkdir small
    $ for i in *.jpg; do convert $i -resize 2048x2048\> small/$i; done

    $ convert ~/Downloads/IMG_2017XYZ.jpg -resize 2048x2048\> result.jpg

To setup screen capture in OpenTX:

* Go to _Model selection_.
* PAGE to _Special functions_.
* Use the dial to select a free slot.
* Press ENTER and then flick e.g. the upper right momentary switch.
* Press ENTER to confirm this switch.
* Dial over one to the function, press ENTER and dial down to _Screenshot_ and ENTER to select.

No whenever you flip the momentary switch a screenshot ends up in the SCREENSHOTS directory on the SD card.

To scale the resulting BMPs without any smoothing:

    $ convert -scale 200% x.bmp y.png

Or for multiple files:

    for i in *.bmp
    do
        convert -scale 200% $i ${i%.bmp}.png
    done

The warnings can be ignored and seem to be a result of incorrect header data in the original BMPs from OpenTX.

Note that BMP is a space inefficient format - even at up to 16 times multiplication the resulting PNG is still smaller than the original BMP.
