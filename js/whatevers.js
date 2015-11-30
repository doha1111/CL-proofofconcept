$('.closeall').click(function(e){
                     e.preventDefault();
                     $('.panel-collapse.in')
                     
                     .collapse('hide');
                     
                     });

$('.openall').click(function(e){
                    e.preventDefault();
                    $('.panel-collapse:not(".in")')
                    
                    .collapse('show');
                    
                    });

