---
id: antenna-mount-README
title: Antenna Mount README
---

Antenna mount
=============

This directory contains contains two antenna mount designs for laser cut POM. [`version-1`](version-1) contains the original design and [`version-2`](version-2) contains the follow-up improved design.

Each directory contains two SVG file - `antenna-mount-design.svg` contains the main design and includes all the work done to create all the shapes etc., while `antenna-mount-production.svg` is a completely cleaned up version suitable for upload to Scupteo.

Production notes
----------------

Scupteo will ship anything below &euro;10 for &euro;5, above this shipping jumps to &euro;15 (and is handled by DHL).

For version 1 of the design I initially specified some area engraving - but it proved to be relatively expensive - increasing the cost by about 50% - as such it pulled the cost above &euro;10 so in the end I turned it off - something that can be done with the Scupteo web interface, i.e. you don't have to upload a new design.

On Scupteo the material used is called POM and on Ponoko it's called Delrin. Delrin is a trade name for [POM](https://en.wikipedia.org/wiki/Polyoxymethylene). Sculpteo have POM at thicknesses of 2, 3 and 5 mm while Ponoko has Delrin at 0.8, 2.3, 3.2 and 4.9mm.

The designs here are for 2mm POM - the variation in thickness at 2mm is +/-0.26mm (approximated from the Ponoko values for 0.8 and 2.3mm). This variation comes into play in just two places in the design - the area under the "noses" of the notches is 2.26mm high and the slots for the notches are 2.26mm wide. To modify the design for a different thickness, e.g. Ponoko 0.8 or 2.3, these areas would have to be adjusted. If going down to 0.8mm consider that the thinness of the arms means that the attachment will probably waggle side to side more.

Material details:

* [Sculpteo POM](https://www.sculpteo.com/en/lasercutting/laser-cutting-materials/pom-material/).
* [Ponoko Delrin](https://www.ponoko.com/make-and-sell/show-material/66-delrin-white).

**Important:** both Sculpteo and Ponoko point out that POM comes with no protective coating and is generally noticeably scratched, as you'll see if you [google for images of it](https://www.google.com/search?q=delrin&tbm=isch).

Ponoko supports sizes P1 (181x181mm), P2 (384x384mm) and P3 (790x384mm) while Sculpteo is more flexible - you can have any size between 15x15mm and 940x480mm.

The Ponoko [Inkscape templates](https://www.ponoko.com/templates/all_product_design_templates_inkscape.zip) contain a lot of useful information:

* To cut a line use a blue `#0000ff` 0.01mm stroke.
* To engrave a line use a red `#ff0000` 0.01mm stroke.
* To engrave an area use a black `#000000` fill.
* The laser beam cuts away between 0.1 and 0.2mm on both sides of cutting lines.
* The minimum part size is 5mm x 5mm.
* The minimum feature size is 1mm wide.
* Convert images to paths using _Path / Trace bitmap_.
* Convert text to vectors using _Path / Object to path_.
* Delete double lines using the _Edit paths by nodes_ tool.

Hackaday has an informative [page](http://hackaday.com/2015/09/22/drawbacks-of-lased-delrin-and-how-to-slip-around-them/) covering various aspects and issues with laser cutting Delrin.
