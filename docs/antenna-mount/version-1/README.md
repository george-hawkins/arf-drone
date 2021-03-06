---
id: antenna-mount-v1-README
title: Antenna mount - version 1
---

This directory contains the original antenna mount design.

Design notes
------------

I refer to the small secondardy arm that's meant to be attached at right angles to the main body as the "attachment" in rest of this page.

If you look at [`antenna-mount-design.svg`](../../assets/antenna-mount/version-1/antenna-mount-design.svg) you'll see the attachment - if you look carefully you'll see it's 1mm taller between the two catches used to attach it to the main body than it is at the ends - this is so you can wrap tape around the ends to hold the antenna in place and not have the thickness of the tape interfere with plugging the arm into the main body.

[`antenna-mount-production.svg`](../../assets/antenna-mount/version-1/antenna-mount-production.svg) contains some important features that are hard to spot - the antenna outlines on the right arm and on the attachment arm are actually each made up of two rounded rectangle overlaid on each other. One rectangle is simply the outer boundary that's stroked in red for edge engraving, in the case of the arm nothing has been done to the rectangle, but for the attachment the path has been broken to remove the left edge. The other rectangle is filled in black for area engraving and in both the arm and the attachment case the intersection tool has been used to remove areas of the rectangles that don't need to be engraved (e.g. the holes for the notches). For the left arm a single rectangle suffices that is filled with black and stroked with red.

Finished result
---------------

This section shows the laser cut parts that I received from Sculpteo and their assembly with the receiver.

The laser cutting process results in some scorching. At first I thought it might just be soot but it couldn't be cleaned off with soapy water or isopropyl alcohol.

![03](../../assets/antenna-mount/version-1/images/DSC_0006.jpg)

![01](../../assets/antenna-mount/version-1/images/DSC_0001.jpg)

![02](../../assets/antenna-mount/version-1/images/DSC_0004.jpg)

The scorching is a little odd - particular above you can see that it's at it's darkest about 0.5mm back from the actual edge of the cut.

On the underside there's no scorching - though the material is translucent enough that you can notice the dark areas from the other side.

Both Sculpteo and Ponoko warn that POM, unlike e.g. acrylic, does not come with a protective plastic film and so is generally noticeably scratched. This is indeed the case - if you look closely at the photos you'll see quite clear scratches. Apparently the scratches are less noticeable on white POM than on black POM - and this is the reason I chose white (however presumably the scorching is less obvious on black POM). While noticeable close up the scratches are not obvious from a distance.

Note: Ponoko refer to POM as Delrin - the DuPont trade name for POM.

The laser didn't completely cut through at all points and a little force was required to break the parts away from the surrounding material - this caused a little anxiety particular when breaking out the "heads" on the small attachment.

![04](../../assets/antenna-mount/version-1/images/DSC_0007.jpg)

![05](../../assets/antenna-mount/version-1/images/DSC_0009.jpg)

First I taped one PCB antenna onto the attachment - with a little extra tape around the point where the transmission line joins the PCB.

![06](../../assets/antenna-mount/version-1/images/DSC_0010.jpg)

![07](../../assets/antenna-mount/version-1/images/DSC_0013.jpg)

Then I used a cable-tie to attach the receiver to the main part of the mount.

![08](../../assets/antenna-mount/version-1/images/DSC_0015.jpg)

I locked the smaller attachment into place on the arm with the slots and taped down the other antenna on the other arm.

![11](../../assets/antenna-mount/version-1/images/DSC_0020.jpg)

The result looks quite neat I think.

![12](../../assets/antenna-mount/version-1/images/DSC_0022.jpg)

I think the biggest weakness of the design is in how the cable-tie doesn't sit flat against the underside. It almost acts like a semi-eliptical [leaf spring](https://en.wikipedia.org/wiki/Leaf_spring) and means that the adhesive mounting pads used to attach it to the frame of the vehicle will need to be quite thick if they're not to be affected by the spring like nature of the cable-tie.

![13](../../assets/antenna-mount/version-1/images/DSC_0023.jpg)

The notches fitted perfectly length-wise and locked into place properly, however the slots for the notches were noticeably wider than necessary. This meant the pressure from the transmission line could force the attachment well away from the desired 90&deg; to the main arm.

![09](../../assets/antenna-mount/version-1/images/DSC_0017.jpg)

![10](../../assets/antenna-mount/version-1/images/DSC_0018.jpg)

I could fix this with a rubber band but perhaps a cleverer design could fix this. I'm not sure what to do about this - 2mm POM can vary in width between 2.26mm and 1.74mm so the slot has to be wide enough to accommodate the 2.26mm thickness but the actual part that's inserted may be just 1.74mm thick.

![14](../../assets/antenna-mount/version-1/images/DSC_0026.jpg)

![15](../../assets/antenna-mount/version-1/images/DSC_0028.jpg)

Version 2
---------

If I was ordering a second version I would probably make both the attachment and the arms a little longer so that the standard 15mm wide insulation tape that I used can be wrapped round while still leaving a millimeter or two clear from the ends and so that the tape at the base of the non-attachment arm doesn't overlap with the curve that joins the arm to the main body.

I'd consider what change, if any, I could make to deal with the width of the slots and the resulting problem of the attachment not being at 90&deg; to the arm it's attached to.

And I'd consider if the cable-tie arrangement could be improved so that it sits flatter against the underside of the mount - or if the cable-tie was simply a bad idea and that the receiver should just be affixed to the mount with e.g. double-sided adhesive tape.
