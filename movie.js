	var movie = $(this).attr("data-name");
	var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

	$.ajax({
	  url: queryURL,
	  method: "GET"
	}).then(function(response) {
	  $("#movies-view").text(JSON.stringify(response));
	});

	alert(movieName)
  }



