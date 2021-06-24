#!/usr/bin/bash

waves="troisième quatrième cinquième sixième septième huitième neuvième dixième onzième douzième treizième quatorzième quinzième seizième dix-septième dix-huitième dix-neuvième"

variant_name=$(cat gentilee | head -n $((RANDOM % $(cat gentilee | wc -l) + 1)) | tail -n 1)
wave_number=$(echo $waves | cut -d' ' -f $((RANDOM % 17 + 1)))

echo "$variant_name $wave_number"

title="Face à la menace du variant $variant_name, une $wave_number vague est-elle inévitable ?"
title2="par le variant $variant_name."

sed -i "2532s/.*/$title/" index.html
sed -i "2537s/.*/$title2/" index.html
firefox index.html
