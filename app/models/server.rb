class Server
  include Mongoid::Document

  module Status
    AWAITING = 'awaiting'
    LAUNCHED = 'launched'
    UNDEFINED = 'undefined'
    MISSING = 'missing'
  end

  field :url
  field :status, type: String, default: Status::AWAITING
end
