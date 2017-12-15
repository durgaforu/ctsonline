$(document).ready(
    function(){
       
        //$('h1').text('jQuery has modified this text');
       // $("#france,.promo").text('Hyderabad');

      //  $('#destinations').find('li').text('Secunderabad');
       // $("p").css("background-color","red");

      /*  $('.disp').on('click',function(){
          console.log('Display button Clicked');
       })

       $('.save').on('click',function(){
        console.log('Save button Clicked');
     })
     $('.edit').on('click',function(){
        console.log('Edit button Clicked');
     })

     $('.delete').on('click',function(){
        console.log('Delete button Clicked');
     }) */


    /* $('#filters').on('click','.save-filter',function(){
        console.log('Save Button');
    })

    $('#filters').on('click','.disp-filter',function(){
        console.log('Display Button');
    }) */

   /*  $('.save-filter').on('click',function(){
        console.log('Save button Clicked');
     }) */


     $('#links').on('click','.doc-filter',function(){
        $('.doc').css("background-color","yellow");
        $('.pdf').css("background-color","white");
     }
    )

    $('#links').on('click','.pdf-filter',function(){
        $('.pdf').css("background-color","lightblue");
        $('.doc').css("background-color","white");
    }
   )


    }
); 

