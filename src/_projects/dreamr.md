---
layout: project
image_url: "https://res.cloudinary.com/dbiyjyi0a/image/upload/v1680967371/portfolio/dreamr.webp"
thumbnail_url: "https://res.cloudinary.com/dbiyjyi0a/image/upload/v1680967371/portfolio/dreamr-thumbnail.webp"
title: "DREAMR"
hero_title: "DREAMR"
preview_description: "A Mixed Reality risk/data evaluation and analyisis program."
description_paragraphs: ["DREAMR (Data and Risk Evaluation and Analysis in Mixed Reality) is a data and risk evaluation tool that takes advantage of the Mixed Reality environment provided by the HoloLens, in order to help with data visualization."]
live_url: "https://www.youtube.com/watch?v=l92_MlJ-OFs"
technologies: [C#, Unity, HoloLense SDK]
---

<%= render ProjectPage.new(title: resource.data.title, image_url: resource.data.image_url, description_paragraphs: resource.data.description_paragraphs, live_url: resource.data.live_url, technologies: resource.data.technologies) %>
