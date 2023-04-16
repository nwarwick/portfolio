class ProjectPage < Bridgetown::Component
  def initialize(image_url:, title:, description_paragraphs:, live_url:, technologies:, created_at:)
    @image_url = image_url
    @title = title
    @description_paragraphs = description_paragraphs
    @live_url = live_url
    @technologies = technologies
    @created_at = created_at
  end
end
