class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/users" do
    users = User.all
    users.to_json(include: :tickets)
  end

  get "/concerts" do
    concerts = Concert.all
    concerts.to_json
  end

  post '/users' do
    newUser = User.create(name:params[:name], password:params[:password], email: params[:email])
    newUser.to_json
  end

  post '/concerts' do
    newConcert = Concert.create(artist:params[:artist], date:params[:date], num_tickets: params[:num_tickets])
    newConcert.to_json
  end

end
