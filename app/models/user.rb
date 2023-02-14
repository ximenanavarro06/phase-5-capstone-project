class User < ApplicationRecord
    has_secure_password

    has_one :diet

    validates :username, presence: true, uniqueness: true
end
