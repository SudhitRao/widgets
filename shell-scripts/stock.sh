#!/bin/sh

TICKER=$(grep "ticker" resources.json)
[[ $TICKER =~ (: \"[a-z]{1,5}\") ]]
TICKER=${BASH_REMATCH[1]}
[[ $TICKER =~ ([a-z]{1,5}) ]]
TICKER=${BASH_REMATCH[1]}

URL='curl -s https://www.marketwatch.com/investing/stock/$companyName' 

price()
{
    companyName="$1"
    final=$(eval "$URL")
    current=$(printf '%s' "$final" | grep '<bg-quote class="value" field="Last" format="0,0.00"' | cut -d">" -f2 | awk -F'<' '{print "$" $1}')
    echo $current
}

price $TICKER


