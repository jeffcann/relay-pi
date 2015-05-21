#!/bin/bash

PIN=$1

echo "turning off pin $PIN"
echo "$PIN" > /sys/class/gpio/export
echo "in" > /sys/class/gpio/gpio$PIN/direction
echo "$PIN" > /sys/class/gpio/unexport

