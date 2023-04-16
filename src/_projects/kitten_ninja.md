---
layout: project
image_url: "https://res.cloudinary.com/dbiyjyi0a/image/upload/v1681579032/portfolio/kitten-ninja.webp"
thumbnail_url: "https://res.cloudinary.com/dbiyjyi0a/image/upload/v1681579032/portfolio/kitten-ninja-thumbnail.webp"
title: "Kitten Ninja"
hero_title: "Kitten Ninja"
preview_description: "A 2D side scrolling game."
description_paragraphs: ["Kitten Ninja is a simple game about a kitten who also happens to be a ninja. The game was created for a class assignment and may be expanded upon in the future."]
live_url: "https://github.com/nwarwick/kitten-ninja"
technologies: [C#, Unity]
created_at: '08-03-2017'
---

<%= render ProjectPage.new(title: resource.data.title, image_url: resource.data.image_url, description_paragraphs: resource.data.description_paragraphs, live_url: resource.data.live_url, technologies: resource.data.technologies, created_at: resource.data.created_at) %>
