---
layout: page
permalink: /research/
title: research 
description: This page documents a list of my publications and talks.
nav: true
nav_order: 3
---

<div> 

<div class="publications">
  Publications
  {% bibliography --query @*[category=article] %}
</div>

<div class="publications">
  Talks
  {% bibliography --query @*[category=talk] %}
</div>

</div>
