@restaurants.each do |restaurant|
 json.set! restaurant.id do
    json.partial! 'api/restaurants/restaurant', restaurant: restaurant
    json.photoUrls restaurant.photos.map { |file| url_for(file) }
 end
end


