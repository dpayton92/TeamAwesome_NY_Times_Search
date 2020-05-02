



$("button").on("click", function (e) {
    e.preventDefault();
    var startDate = 0;
    var endDate = 0;
    //var 
    var q = "election";
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?" + q + "&api-key=efWJomCcAFjL906E7wsSXcmo9P6CALNX";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            console.log(response);
        })

}); 