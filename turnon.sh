#!/bin/bash

PIN=$1

echo "turning on pin $PIN"
echo "$PIN" > /sys/class/gpio/export
echo "out" > /sys/class/gpio/gpio$PIN/direction
echo "$PIN" > /sys/class/gpio/unexport

