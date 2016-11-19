
// Gets ISS latitude/longitude information from open-notify.org
var getIssLocation = function(cb){
  $.get(
    "http://api.open-notify.org/iss-now.json",
    {},
    function(data){
      console.dir(data);
      cb(data.iss_position);
    },
    "json"
  );
}

// Gets timezone and appropriate country name from latitude and longitude
var lookUpCountryFromLatLong = function(lat, long, cb){
  $.get(
    "http://api.geonames.org/timezoneJSON",
    {
      lat,
      long,
      "username":"demo",
      "lng":"10.2"
    },
    function(data){
      console.dir(data);
      cb(data);
    },
    "json"
  );
}

// This sets the description for the default suggestion
chrome.omnibox.setDefaultSuggestion({
  description: "Type to see the location fo the ISS"
});

// This event is fired whenever the user types
chrome.omnibox.onInputChanged.addListener(function(text, suggest) {
  getIssLocation(function(position){
    lookUpCountryFromLatLong(position.latitude, position.longitude, function(data){
      if(data.countryName){
        suggest([
          {content: "google.com", description: "The ISS is currently over " + data.countryName}
        ]);
      } else{
        suggest([
          {content: "google.com", description: "The ISS is at: Lat: " + position.latitude + " Long: " + position.longitude}
        ]);
      }
    });
  })
});
