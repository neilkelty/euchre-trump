$(document).ready(function() {
                
    /*******************************************************************************************************************
    *  Tabs                                                                                                  
    *******************************************************************************************************************/
    $('.tabs li a').click(function(a) {
        a.preventDefault();
        var tab = $(this).attr('href');
        $('.tabs .active').removeClass('active');
        $(this).parent().addClass('active');
        if($(tab).hasClass('hidden')){
            $('.tab:not(.hidden)').fadeOut(200, function() {
                $(this).addClass('hidden');
                $(tab).fadeIn(500).removeClass('hidden');
            });
        }
    });
    
    /*******************************************************************************************************************
    *  Twitter account                                                                                                  
    *******************************************************************************************************************/
    getTwitters('tweet', { 
      id: 'AppsTemplates', 
      count: 1, 
      enableLinks: true, 
      ignoreReplies: true, 
      clearContents: true,
      template: '<p>%text% <a class="date" href="http://twitter.com/%user_screen_name%/statuses/%id_str%/">%time%</a></p>'
    });
  
});