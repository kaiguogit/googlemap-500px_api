# Homepage (Root path)
get '/' do
  erb :index
end

namespace '/api' do
  namespace '/key' do
    get '/500px' do
      json({key: ENV["api_key_500px"]})
    end
  end
end


