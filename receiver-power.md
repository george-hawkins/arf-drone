Receiver power
==============

Normally the flight controller provides power to the receiver. But if you want to experiment with it on its own then it's easy to power it directly.

The following images show it powered via a breadboard power supply, an Arduino and directly off USB.

_Breadboard power supply_  
<img width="256" src="images/receiver-power/breadboard.jpg">

_USB_  
<img width="256" src="images/receiver-power/usb.jpg">

_Arduino_  
<img width="256" src="images/receiver-power/arduino.jpg">

The breadboard power supply above is [PRT-08376](https://www.sparkfun.com/products/8376) from Sparkfun. The little adapter for breaking out the power pins directly from a USB cable came from this [Kickstarter project](https://www.kickstarter.com/projects/252587878/the-worlds-smallest-tiny-breadboard-power-supply-u) but presumably you could use any basic USB breakout like [this one](https://www.kickstarter.com/projects/252587878/the-worlds-smallest-tiny-breadboard-power-supply-u) (as the receiver doesn't need any more than the 100mA that USB will provide without any extra negotiation). The Arduino shown is the classic [UNO](https://www.arduino.cc/en/Main/ArduinoBoardUno) but obviously any hobbyist board, with a 5V out, would do as long as it can deliver at least 100mA (the UNO can provide up to 200mA).
