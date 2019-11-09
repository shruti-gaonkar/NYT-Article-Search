$('#search').on('click', function (event) {
    event.preventDefault();
    if ($('#searchTerm').val().trim() === "") {
        alert("You must put in a search term")
    }
    var search = $('#searchTerm').val()
    var record = $('#records').val()
    var syear = $('#startYear').val()
    var eyear = $('#endYear').val()

    var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=' + search + 'AND' + 'pub_year("' + syear + '")' + 'pub_year("' + eyear + '")' + '&api-key=YJE0LviXncbBAzRQKSGdaB750Xp5EGV5'
    //pub_date fq=searchItem
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        $('#top-articles').append(response.response.docs[0].byline.original);
        $('#top-articles').append('<a href="' + response.response.docs[0].web_url + '">' + "LINK!" + '</a>')
        $('#top-articles').append(response.response.docs[0].lead_paragraph)
    });


})









//Phase 3
//Info we're retrieving: all articles (in array of 0-9) from response.docs

// Then from the arrays, we want multimedia.thumblarge
// lead_paragraph and byline.original and web_url

