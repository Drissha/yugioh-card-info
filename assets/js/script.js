const api = `https://6480b745f061e6ec4d49c101.mockapi.io/movies`



$.ajax({
  url: api,
  type: 'get',
  dataType: 'json',
  success: function(data) {
    $.each(data, function(key, item) {
      $('#card-info').append(`
        <div class="col-md-3 mt-3">
          <div class="card">
            <img src="${item.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <p>${item.releaseDate}</p>
              
              <a href="assets/pages/cardinfo.html?id=${item.id}" class="btn btn-primary detail">Go somewhere</a>
            </div>
          </div>
        </div>

      `);
    });
  },
  error: function(jqXHR, textStatus, errorThrown) {
    console.error(errorThrown);
    alert('An error occurred while retrieving the data.');
  }
});



function showCard() {
    $('#card-info').html('');

    const searchQuery = $('#search-input').val();

    $.ajax({
        url: api,
        type: 'get',
        dataType: 'json',
        data:{
            'title': `${searchQuery}`
        },
        success: function(data) {
  
          $.each(data, function(key, item) {
            $('#card-info').append(`
              <div class="col-md-3 mt-3">
                <div class="card">
                  <img src="${item.image}" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p>${item.releaseDate}</p>
                    
                    <a href="assets/pages/cardinfo.html?id=${item.id}" class="btn btn-primary detail">Go somewhere</a>
                  </div>
                </div>
              </div>
            `);
          });

          console.log(data);

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


function detailCard() {
  $.ajax({
    url: api,
    type: 'get',
    dataType: 'json',
    data: {
      'id': id
    },
    success: function(data) {
      // Ambil data kartu pertama
      let movie = data[0];
  
      // Tampilkan gambar kartu
      $('#info').append(`
        <img src="${movie.image}" class="card-img-top" alt="...">
      `);
  
      $('#detail-card').append(`
        <h1>${movie.title}</h1>
        <p>${movie.desc}</p>
        <p>Release Date : ${movie.releaseDate}</p>

        
      `);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.error(errorThrown);
      alert('Movie not found');
    }
  });
  
}

