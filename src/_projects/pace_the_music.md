---
layout: project
image_url: "https://res.cloudinary.com/dbiyjyi0a/image/upload/v1680966771/portfolio/pace-the-music.webp"
thumbnail_url: "https://res.cloudinary.com/dbiyjyi0a/image/upload/v1680966771/portfolio/pace-the-music-thumbnail.webp"
title: "PaceTheMusic"
hero_title: "PaceTheMusic"
preview_description: "A program that generates music playlists based on user specified tempos."
description_paragraphs: ["PaceTheMusic is a desktop application created by Kaileen McCulloch, James Gray, and myself. It allows users to create playlists based on tempos. If you want your playlist to start off with slower music then ramp up to fast music, simply specify your tempos and the application will do the rest! I worked on the front end of the application and tied it together with the backend."]
live_url: "https://github.com/james-gray/pace-the-music"
technologies: [Python, SQLAlchemy, PyQt5]
created_at: '13-04-2016'
---

<%= render ProjectPage.new(title: resource.data.title, image_url: resource.data.image_url, description_paragraphs: resource.data.description_paragraphs, live_url: resource.data.live_url, technologies: resource.data.technologies, created_at: resource.data.created_at) %>
