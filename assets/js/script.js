function showCard(params) {
    $('#card-info').html('');

    const searchQuery = $('#search-input').val();

    $.ajax({
        url: `https://db.ygoprodeck.com/api/v7/cardinfo.php`,
        type: 'get',
        dataType: 'json',
        data:{
            'fname': `${searchQuery}`,
            'desc': `${searchQuery}`
        },
        success: function(data) {
  
            $.each(data['data'], function(key, item) {
                $('#card-info').append(`
                  <div class="col-md-3 mt-3">
                    <div class="card">
                      <img src="${item['card_images'][0]['image_url']}" class="card-img-top" alt="...">
                      <div class="card-body">
                        <h5 class="card-title">${item['name']}</h5>
                        <p>${item['type']}</p>
                        
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                      </div>
                    </div>
                  </div>
                `);
          });

          
  
        },
        error: function(jqXHR, textStatus, errorThrown) {
          console.error(errorThrown);
          alert('tidak ditemukan');
        }
      });
}

$('#search-btn').on('click', function() {
    showCard();
  });

$('#search-input').on('keyup', function (e) {
    if (e.which === 13) {
        showCard();
    }
})