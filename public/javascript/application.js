$(function(){
  $('.marker_list').on("click", ".marker", function(){
    $this = $(this);
    $this.toggleClass("active");
    var marker = allMarkers.filter(function(m){
      return m.title === $this.attr("name")})[0]
    if($this.hasClass("active")){
      marker.setVisible(true);
    }else{
      marker.setVisible(false);
    }
  });
});

function createMarkerCheckbox(name){
  var item = $('<div>').addClass("marker list-group-item active").attr("name", name).text(name);
      // item = $('<>').append(item);
  $('.marker_list').append(item);
}