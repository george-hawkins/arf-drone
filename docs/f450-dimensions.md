---
id: f450-dimensions
title: F450 Dimensions
---

F450 dimensions
===============

There don't seem to be any comprehensive technical drawing for the F450 frame.

This page contains the best details I could find.

There is a nice technical drawing of the leg produced by [Hummingbird.UAV](https://vimeo.com/hummingbirduav/about):

<img width="512" src="images/f450-outline/f450-arm.png">

Just the dimensions for the "head" of the arm seem to be correct - the arm itself seems to be somewhat squashed length-wise.

Note: Hummingbird.UAV is a private individual who produced this image after-the-fact, i.e. this is not an original drawing used to produce the arms.

The next picture is for the HJ450 - a very close copy of the F450 produced by [Xin zhenhua Trading Co.](http://www.wtotoy.com/showproducts_431.html) and available from e.g. the [HKG store](http://stores.ebay.com/HKG-store?_dmd=2&_nkw=hj450):

<img width="512" src="images/f450-outline/hj450.jpg">

While the top and bottom plates are noticeably different from the F450, e.g. three slots rather than two in the protruding nose and tail areas, the overall dimensions are nearly identical.

The following drawings were extracted from the [F450 user manual](http://dl.djicdn.com/downloads/flamewheel/en/F450_User_Manual_v2.2_en.pdf):

[<img height="512" src="images/f450-outline/user-manual.png">](images/f450-outline/user-manual.svg)  
_This is a PNG - click to see the original SVG._

Note: while these are nice vector graphics they don't seem to be millimeter perfect (with the exception of the motors).

Finally I produced an outline combining the base plate from the user manual and an outline of the arm traced (by Inkscape) from the Hummingbird.UAV picture (and stretched to be the correct length):

[<img width="512" src="images/f450-outline/f450-outline.png">](images/f450-outline/f450-outline.svg)  
_This is a PNG - click to see the original SVG._

This was done quite quickly and it would be fairly easy to produce something more millimeter perfect with a little more effort.

Printing
--------

The F450 outline above is quite large - to print it to scale over multiple A4 or US Letter pages you can use Acrobat Reader DC on Windows and Mac or on Linux you can use the less satisfactory `pdfposter`. Either way you first need to save the original SVG as a PDF using your favorite vector graphics application, e.g. the excellent open source [Inkscape](https://inkscape.org/en/).

The resulting PDF will have a very large page size (about 362x362mm) - the easiest way to split this over multiple pages is to use [Acrobat Reader DC](https://get.adobe.com/reader/). Its standard print dialog features a poster option:

![reader print dialog](images/f450-outline/reader-print.png)

Just select the _Poster_ button and tick _Cut marks_ (to get marks that make it easier to line up the resulting pages).

Adobe are no longer supporting Acrobat Reader on Linux so an alternative there is to use `pdfposter` - again save the SVG as a PDF, e.g. `f450-outline.pdf`, and process it like so:

    $ sudo apt-get install pdfposter
    $ pdfposter -s1 --media-size=A4 f450-outline.pdf poster.pdf

Use `letter` rather than `A4` if that's what your printer uses. The resulting multi-page PDF ends up in `poster.pdf` and is less satisfactory than the result achieved with Acrobat Reader - the image isn't centered on the resulting pages, has no cut marks and doesn't take into account print margins.
