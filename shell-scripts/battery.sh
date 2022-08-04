#! /bin/bash


[[ $(pmset -g batt) =~ ([0-9]{2}:[0-9]{2}) ]]
BATTERY_STATUS=${BASH_REMATCH[1]}
[[ $(pmset -g batt) =~ ([0-9]{1,2}%) ]]

BATTERY_STATUS="${BASH_REMATCH[1]}, ${BATTERY_STATUS}"
echo $BATTERY_STATUS



