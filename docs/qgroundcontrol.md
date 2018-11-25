---
id: qgroundcontrol
title: Qgroundcontrol
---

QGroundControl
==============

Install QGroundControl (QGC) as per the [Download and Install](https://docs.qgroundcontrol.com/en/getting_started/download_and_install.html) section of its manual.

For Mac and Windows this is no different to installing any other application. For Linux a few more step are involved.

### Linux installation

On the [download page](https://docs.qgroundcontrol.com/en/getting_started/download_and_install.html#ubuntu-linux) there's an easy to use AppImage (for more on AppImage see this [Ask Ubuntu question](https://askubuntu.com/q/774490)) and an old fashioned tar file. I opted for the tar file, so this involved downloading it and then:

    $ sudo apt-get install espeak libespeak-dev libudev-dev libsdl2-dev
    $ tar -xf ~/Downloads/QGroundControl.tar.bz2
    $ cd qgroundcontrol
    $ ./qgroundcontrol-start.sh

The `apt-get` is listed in the [README](https://github.com/mavlink/qgroundcontrol#install-additional-packages) as needed to install all additionally required packages.

Once up and running on Linux the first thing QGC does is point out the usual Linux permissions issue with connecting serial devices like the Pixhawk and tells you how to resolve this:

    $ sudo usermod -a -G dialout $USER
    $ sudo apt-get remove modemmanager

It's a historical hangover that the `modemmanager` package is still installed by default and that the primary user is not by default a member of the `dialout` group (the group of people who can access serial-like devices like the Pixhawk).

An alternative to using `usermod` and removing `modemmanager` is to setup [udev](https://wiki.archlinux.org/index.php/udev) rules for the Pixhawk like so:

    $ cat > 99-pixhawk.rules << EOF
    # Pixhawk udev rules:
    # * Make it accessable to all users and soft link it to /dev/pixhawk.
    # * Tell the ModemManager to ignore it.
    SUBSYSTEM=="tty", ATTRS{idVendor}=="26ac", ATTRS{idProduct}=="0011", SYMLINK+="pixhawk", MODE="0666"
    ATTRS{idVendor}=="03eb", ATTRS{idProduct}=="2404", ENV{ID_MM_DEVICE_IGNORE}="1"
    EOF
    $ sudo chown root:root 99-pixhawk.rules
    $ sudo mv 99-pixhawk.rules /etc/udev/rules.d

Note: udev will automatically pick up this new rule when you plug in the Pixhawk (you only ever need to force udev to reread rules if the device in question is already plugged in or you've modified an existing rule).

QGC can't spot that such rules are in place so it will still complain on startup about permissions but then successfully automatically connect to your Pixhawk device without issue.

Using udev rules appeals to nerds like myself - adding yourself to the `dialout` group and removing the ModemManager package is probably a more sensible solution that solves the whole issue, for this device and others, once and for all. The only issue is that existing processes will not automatically pickup on the group change - the bluntest solution to this is to reboot your system (just once after invoking `usermod`).

As often seems to happen with USB devices on Linux if you plug them in and out too often something eventually gets confused and they can no longer be successfully reconnected - in this situation I reset the whole USB system with a script I wrote. You can find it [here](https://gist.github.com/george-hawkins/5d93be322379afdc690b976e4b12dd71) and run it like so (assuming you've made it executable):

    $ sudo ./reset-usb
