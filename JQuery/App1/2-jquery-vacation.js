$(document).ready(
    function(){

        $('.vacation').on('click','button',function(){
          var vacation=$(this).closest('.vacation');
          var amount=vacation.data('price');
         // $('.price').append(amount);
         var price=$(`<p>&#8377;${amount} per ticket</p>
                 <p>
                 Tickets:
                 <input type='number' class='quantity form-control' value='1'/> 
                </p>
                <p>Total Price: <span id='total'>&#8377; ${amount}</span></p>
              `);
         price.appendTo(vacation);
         $(this).remove();
        })

        $('#filters').on('click','.onSale-filter',function(){
            $('.bg-warning').removeClass('bg-warning');
            $('.vacation').filter('.onSale').addClass('bg-info');
        })

        $('#filters').on('click','.expiring-filter',function(){
            $('.bg-info').removeClass('bg-info');
            $('.vacation').filter('.expiring').addClass('bg-warning');
        })


         $('.vacation').on('keyup change','.quantity',function(){
             var price=$(this).closest('.vacation').data('price');
             var quantity=+$(this).val();
             $('#total').text(quantity*price);   
            })


    }
)