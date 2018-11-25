Power module connector
======================

Rather than use an adapter I eventually cut off the XT60 connector on my power module and replaced it with a T-plug connector suitable for use with my batteries.

On one side of the power module you have the six wire cable that goes to the flight controller and the red and black cable pair that end in a female XT60 connector. This XT60 connector mates with the connector on the cable from the PDB.

On the other side of the power module you have just a red and black cable pair that end in a male XT60 connector. This is the one that needs to be removed and replaced with a male T-plug connector that will mate with the connector from the battery.

Note: male and female XT60 connectors are a little difficult to tell apart as the male connector is shrouded but it's clear if you look closely.

I bought some [T-plug connectors](https://www.unmannedtechshop.co.uk/deans-connectors-pack-of-5/) and some [heat shrink tubing](https://www.unmannedtechshop.co.uk/dronebuildr-240pcs-heat-shrink-tube-kit/).

If you take a T-plug connector and look at the metal blades, that you'll solder to, you'll see a plug sign (+) above one of them, this is the one that you'll solder the red power wire to.

I removed the heat shrink tubing around the ends of the cables connected to the male XT60 on the power module and initially tried to desolder the connector. I presume it was originally soldered with lead-free solder (which has a higher melthing point than leaded solder) and even after turning the heat on my iron to nearly 450C I couldn't remove it so I ended up cutting it off.

I watched several YouTube videos on how to solder T-plug connectors:

* <https://www.youtube.com/watch?v=3tEBQC-qNE0>
* <https://www.youtube.com/watch?v=7ijE9aeqHjs>
* <https://www.youtube.com/watch?v=opMBIIB6l1M>
* <https://www.youtube.com/watch?v=WtJIrnbl_JI>

Note: in the third video he gets his black and red wires mixed up but otherwise its nice and succinct.

I've done a lot of through hole soldering and thought this wouldn't be a problem but it wasn't as easy as I expected.

I switched my normal small point solder tip for a wider chisel style tip and set my soldering iron to around 380C, a much higher temperature than I normally use with the leaded solder that I use.

When I tried to tin the thick multi-strand wire I found it seemed to be capable of absorbing huge amounts of solder without becoming nice and shinny all over. I guess the solder soaked far along the wire (making it less flexible - hardly a desirable result), I think I should have just held the cable horizontal and turned it a few times, just applying a small amount of solder. However I held it vertically as seemed to be suggested in one of the videos (that advised using gravity to draw the solder into the wire). Perhaps applying flux to the cable (as that same video suggested) would make the difference.

The strands in the cable also started to fuzz from contact with the soldering iron tip as I tried to apply more and more solder. So I ended up with a cable that looked like it ended in a hedgehog - a large blob of solder with fuzzy strands sticking out all over.

I then applied was too much solder to the blades of the T-plug - I thought a mound somewhat proportional to the diameter of the cable was what was needed but if you look at the connections to the PCB at the center of the power module you can see that nothing of the sort is required.

So I had too much solder on the connector and on the wire. When I tried to solder the first cable onto the connector I didn't mount the connector in my vice such that I could see clearly if the cable was coming down dead center on the blade and ended up soldering the cable way off center. I then found there was so much solder involved that it was impossible to remove again (the thick cables quickly drew off huge amounts of heat making the whole power module very hot) and I ended up cutting throught the solder with a flush cutter (and stupidly losing some of my wire in the process).

When finally done the resulting connections between cables and blades looked very little like the perfectly shaped connections seen in the videos and involved way more solder, making for very oversized connections. It was a relief to be able to hide the connections beneath the heat shrink tubing. The connections do however seem to be very solid - I can hold the connector and really pull on the cables without any obvious issue.

Notes:

* I used the largest diameter heat shrink tubing in the pack that I had - this was 6mm.
* I set my soldering iron to around 380C.
* Rather than using a wire stripper I cut the silicon coating off the cable with hobby knife (and didn't have a problem losing strands this way).
* I soldered the T-plug connector while it was plugged into a female connector (as advised to prevent the blades moving and the connector deforming while hot).
* When tinning I really had to turn the wire in order not to miss filling and coating all the way around - while there should be enough of a solder coating to help create the connection I completely overdid the filling in with solder.
* Make sure to remember to put the heat shrink on before you start soldering on the connector.

If repeating I'd probably just review the first two videos above and I'd practice with some spare connectors and cable before working on the actualy power module - I'd try to use way less solder and I'd try twisting the cable far more to prevent it fuzzing up when worked on (and I'd try to do less work on the cable so reducing the contact that resulted in this fuzzing).

As with anything I suspect even a little practice would lead to vastly improved results.

TODO: maybe include pictures from album <https://goo.gl/photos/1qXUWfSuwAp4U5uNA>
