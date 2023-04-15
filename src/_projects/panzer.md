---
layout: project
image_url: "https://res.cloudinary.com/dbiyjyi0a/image/upload/v1681578641/portfolio/panzer.webp"
thumbnail_url: "https://res.cloudinary.com/dbiyjyi0a/image/upload/v1681578640/portfolio/panzer-thumbnail.webp"
title: "Panzer"
hero_title: "Panzer"
preview_description: "A 2.5D survival game."
description_paragraphs: ["Panzer is a 2.5D survival game in which you play as a sentient tank fighting for survival in a world filled with other sentient tanks."]
live_url: "https://github.com/nwarwick/panzer"
technologies: [C#, Unity]
---

<%= render ProjectPage.new(title: resource.data.title, image_url: resource.data.image_url, description_paragraphs: resource.data.description_paragraphs, live_url: resource.data.live_url, technologies: resource.data.technologies) %>
