<script src = "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"">
</script>

<script type="text/javascript">
  //for zooming into the graphs
  $(document).ready(function() {
    $('body').prepend('<div class=\"zoomDiv\"><img src=\"\" class=\"zoomImg\"></div>');
    // onClick function for all plots (img's)
    $('img:not(.zoomImg)').click(function() {
      $('.zoomImg').attr('src', $(this).attr('src')).css({width: '100%'});
      $('.zoomDiv').css({opacity: '1', width: 'auto', border: '1px solid white', borderRadius: '5px', position: 'fixed', top: '50%', left: '50%', marginRight: '-50%', transform: 'translate(-50%, -50%)', boxShadow: '0px 0px 50px #888888', zIndex: '50', overflow: 'auto', maxHeight: '100%'});
    });
    // onClick function for zoomImg
    $('img.zoomImg').click(function() {
      $('.zoomDiv').css({opacity: '0', width: '0%'}); 
    });
  });
</script>