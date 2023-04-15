---
layout: project
image_url: "https://res.cloudinary.com/dbiyjyi0a/image/upload/v1681578223/portfolio/chomp.webp"
thumbnail_url: "https://res.cloudinary.com/dbiyjyi0a/image/upload/v1681049541/portfolio/chomp-thumbnail.webp"
title: "Chomp"
hero_title: "Chomp"
preview_description: "A 2D survival game."
description_paragraphs: ["Chomp is a 2D game in which you play as a worm trying to survive in world where other worms are trying to kill you for some reason. The world is filled with power-ups and other items that can aid you in your quest to not die. The game was built by William Tsease and myself."]
live_url: "https://github.com/nwarwick/chomp"
technologies: [C#, Unity]
---

<%= render ProjectPage.new(title: resource.data.title, image_url: resource.data.image_url, description_paragraphs: resource.data.description_paragraphs, live_url: resource.data.live_url, technologies: resource.data.technologies) %>
