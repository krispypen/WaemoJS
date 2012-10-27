# Introduction

Offcourse this is not a full tutorial how you can create a new OS. This is a simple proof of concept explaining how "easy" it can be these days.

Alsmost every phone/tablet can run a webkit browser. And on some its possible to run only a webkit browser and nothing else (see nemo mobile). This is the reason I started to create a proof of concept of my favorite user interface: Maemo. I called it WaemoJS. It uses html5 to create the gui based on Maemo, and it uses nodejs for getting system things like battery status, talking to the phone controller, reading the filesystem, taking a picture. These functions are not yet implemented at the time of writing :).


# How to run

First download [node-webkit binary](http://github.com/rogerwang/node-webkit) for your platform, and then execute:

````bash
$ git clone --recursive https://github.com/krispypen/WaemoJS.git
$ cd WaemoJS
$ /Path/To/nw .
````
# Screenshots

### Home screen:

![alt text](https://raw.github.com/krispypen/WaemoJS/master/screenshots/screenshot1.png "screenshot1")


### Application menu:

![alt text](https://raw.github.com/krispypen/WaemoJS/master/screenshots/screenshot2.png "screenshot2")


### Calculator app:

![alt text](https://raw.github.com/krispypen/WaemoJS/master/screenshots/screenshot3.png "screenshot3")


### Running apps switcher:

![alt text](https://raw.github.com/krispypen/WaemoJS/master/screenshots/screenshot4.png "screenshot4")