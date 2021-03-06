# frozen_string_literal: true

class User < ApplicationRecord
  attr_writer :login

  # Login With Username or email
  def login
    @login || username || email
  end

  def self.find_for_database_authentication(warden_conditions)
    conditions = warden_conditions.dup
    if (login = conditions.delete(:login))
      where(conditions.to_h).where(['lower(username) = :value OR lower(email) = :value',
                                    { value: login.downcase }]).first
    elsif conditions.key?(:username) || conditions.key?(:email)
      where(conditions.to_h).first
    end
  end

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable,
         :validatable, authentication_keys: [:login]

  validates :full_name, presence: true, length: { maximum: 30 }
  validates :username, presence: true, uniqueness: { case_sensitive: false }, length: { maximum: 15 }

  has_many :posts
end
