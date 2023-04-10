---
layout: project
image_url: "https://res.cloudinary.com/dbiyjyi0a/image/upload/v1680878802/portfolio/kozy.webp"
thumbnail_url: "https://res.cloudinary.com/dbiyjyi0a/image/upload/v1547913806/portfolio/kozy-logo.png"
title:  "Kozy"
hero_title: "Kozy"
preview_description: "An ambient noise generator within your browser."
description_paragraphs: ["Kozy is a simple, lightweight, ambient sound web app written using vanilla JavaScript."]
live_url: "https://kozy.netlify.com/"
technologies: [JavaScript]
---

<%= render ProjectPage.new(title: resource.data.title, image_url: resource.data.image_url, description_paragraphs: resource.data.description_paragraphs, live_url: resource.data.live_url, technologies: resource.data.technologies) %>