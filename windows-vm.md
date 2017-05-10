Some of applications used in this drone build only run on Windows. As I only use Linux and MacOS I had to run these in a VM.

This is very simple. I used [VirtualBox](https://www.virtualbox.org) and the very nicely preconfigured [Windows 10 (stable) VM](https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/) that Microsoft makes available for browser testing.

Note: these VMs are not meant for general purpose long term use and are only valid for 90 days (which I don't find an issue).

Once you've installed VirtualBox you just need to unzip the Windows VM download, this produces an OVA file which you should double click - this will start VirtualBox and cause it to automatically install the new VM.

Note: the native MacOS `unzip` can't handle the zip format Microsoft is using for these VMs - you need to use `p7zip` (if you're using [Homebrew](https://brew.sh/) you just install it with `brew install p7zip`), see this [SO answer](https://superuser.com/a/626731/238591) for more details.

Once installed start the VM - when up and running for the first time just leave it alone for a few minutes and it will automatically activate itself (it also encouraged me to upgrade OneDrive - which I did, it did not then force me to log in to any related cloud service).

The VM is already setup with VirtualBox [guest additions](https://www.virtualbox.org/manual/ch04.html) so there's no need to install these.

In order to use USB passthrough, i.e. access USB devices connected to the host, you do however need to install the VirtualBox extension pack. Go to VirtualBox [downloads](https://www.virtualbox.org/wiki/Downloads), find the "VirtualBox Extension Pack" and click the "all supported platforms" link - this downloads a `vbox-extpack` file. Just double click this to install it.

Note: host is the term used in virtualization to refer to the real machine, i.e. the physical machine running VirtualBox (though technically you can run VMs within VMs within VMs and so on, so the host may be a VM running another VM).

Once the extensions are installed shutdown the Windows VM, if it's currently running, and then go to the settings for the VM. Go to Ports and then to USB, click "Enable USB Controller" and then select "USB 2.0" (or 3.0 if your machine has USB 3.0 ports). At the same time I also went to Display and increased the video memory to 18MB (simply because there was a warning at the bottom of the setting screen saying that the original value was too low).

Now restart the VM. When you connect a USB device you can go to the VirtualBox Devices menu and then to USB and select the device you're interested in. This will cause the device to become disconnected from the host machine and appear as connected within the VM.

That's it. Now you can use the VM just as you would a physical Windows machine. VirtualBox has many interesting features but if you're new to VirtualBox one feature that's worth mention straight away is the ability to share folders between the host machine and the VM.

Just go to the Devices menu, select Shared Folders, click the folded icon with a plus, select Other... from the Folder Path dropdown, leave Folder Name as it is (unless you want the folder to have a different name on the VM), tick Auto-Mount and Make Permanent (so the folder is automatically available whenever the VM starts) and then OK.

I had to restart the VM for the shared folder to become visible - once done you'll find it as a shared folder under This PC in Explorer.
