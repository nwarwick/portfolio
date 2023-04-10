---
layout: project
image_url: "https://res.cloudinary.com/dbiyjyi0a/image/upload/v1547913798/portfolio/earthquake-visualizer2.png"
thumbnail_url: "https://res.cloudinary.com/dbiyjyi0a/image/upload/v1547913798/portfolio/earthquake-visualizer.png"
title: "Earthquake Data Visualizer"
hero_title: "Earthquake Data Visualizer"
preview_description: "An earthquake data visualization application."
description_paragraphs: ["A simple earthquake data visualization application that displays earthquakes from the last 24 hours and
encodes their location and magnitude as the location and radius of a circle."]
live_url: "https://earthquake-visualizer.netlify.com/"
technologies: [JavaScript, HTML, CSS, Mapbox GL, Firebase]
---

<%= render ProjectPage.new(title: resource.data.title, image_url: resource.data.image_url, description_paragraphs: resource.data.description_paragraphs, live_url: resource.data.live_url, technologies: resource.data.technologies) %>
