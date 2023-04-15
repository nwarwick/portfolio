---
# Feel free to add content and custom Front Matter to this file.
layout: 'page'
container_class: 'container-md'
wrapper_class: 'projects'
title: 'Projects | Nicholas Warwick'
hero_title: 'Projects'
hero_subtitle: "It's not much but it's honest work."
---
<div class="projects">
  <ul class='project-list'>
    <% collections.projects.resources.each do |project| %>
      <li>
        <%= render ProjectPreview.new(title: project.data.title, thumbnail_url: project.data.thumbnail_url, preview_description: project.data.preview_description, live_url: project.data.live_url, relative_url: project.relative_url) %>
      </li>
    <% end %>
  </ul>
</div>