class MovementHowToSerializer < ActiveModel::Serializer
  attributes :id, :link
  has_one :movement
end
