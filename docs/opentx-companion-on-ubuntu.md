---
id: opentx-companion-on-ubuntu
title: OpenTX Companion on Ubuntu
---

Installing OpenTX Companion on Ubuntu
-------------------------------------

To install OpenTX Companion on Ubuntu just follow the instructions on <https://launchpad.net/~opentx-test/+archive/ubuntu/rel>:

    $ sudo add-apt-repository ppa:opentx-test/rel
    $ sudo apt-get update
    $ sudo apt-get install opentx-companion22

Then to launch it from the command line:

    $ companion22

After that setup is the same as on Windows and Mac. And as with those platforms OpenTX Companion only works with the transmitter when it is started in bootloader mode (normal mode and connecting while its off don't work).

Note: I have automounting of USB drives disabled. So while the drives show up in Unity I had to explicitly open the _Taranis_ drive (and so trigger mounting) before Companion could get the `EEPROM.BIN` file it needs if you want to load exisitng models.
