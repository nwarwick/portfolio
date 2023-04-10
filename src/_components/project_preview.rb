class ProjectPreview < Bridgetown::Component
  def initialize(thumbnail_url:, title:, preview_description:, live_url:, relative_url:)
    @thumbnail_url = thumbnail_url
    @title = title
    @preview_description = preview_description
    @live_url = live_url
    @relative_url = relative_url
  end
end
