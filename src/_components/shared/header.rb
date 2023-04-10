class Shared::Header < Bridgetown::Component
  def initialize(heading:, subheading: nil)
    @heading = heading
    @subheading = subheading
  end
end
