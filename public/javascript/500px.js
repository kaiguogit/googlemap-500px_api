function searchPhoto(position){
  var loader_icon = $("#loader_icon_template").html();
  var template_loader_icon = Handlebars.compile(loader_icon);
  $("#image").html(template_loader_icon);
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
  if(photos.length >0){
    photos.forEach(function(photo){
      var img = $("<img>").addClass("col-xs-2").attr("src", photo.image_url);
      $("#image").append(img);
    });
    
    var infoWindowImg = $("<img>").attr("src", photos[0].image_url);
    $("#info_content .info_image").html(infoWindowImg);
  }else{
    $("#image").append("<p>No image found</p>");
  }
}
