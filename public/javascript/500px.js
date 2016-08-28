function searchPhoto(position){
  api_key_500px(function(key){
    $.ajax({
      url: "https://api.500px.com/v1/photos/search",
      method: "get",
      data:{
        consumer_key: key,
        geo: (position + ",0.2km")
      },
      success: function(response){
        updateImg(response.photos);
      }
    });
  });
}

function api_key_500px(fn){
  debugger;
  $.ajax({
    url: "/api/key/500px",
    method: "get",
    success: function(response){
      fn(response.key);
    }
  });
}

function updateImg(photos){
  $("#image").html("");
  photos.forEach(function(photo){
    var img = $("<img>").addClass("col-xs-2").attr("src", photo.image_url);
    $("#image").append(img);
  });
  if(photos[0]){
    var infoWindowImg = $("<img>").attr("src", photos[0].image_url);
    $("#info_content .info_image").html(infoWindowImg);
  }
  
}
