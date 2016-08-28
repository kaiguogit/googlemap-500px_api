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



