	//set up variables
	//working url= https://www.omdbapi.com/?t=Forrest%20Gump&apikey=trilogy
	
	var queryURL = "https://www.omdbapi.com/?t="  + authKey;
	var authKey = "&apikey=trilogy";

	var movieLength  = "";
	var movieGenre   = "";
	var movieCountry = "";




	//functions
	function runQuery(queryURL){

		$.ajax({url: queryURL, Method: "GET"})
			.done(function(MovieData) {
				console.log(MovieData)
			})

			
	}


	//main proceccess 
	$('#searchBTN').on('click', function(){
		
		runQuery("https://www.omdbapi.com/?t=Forrest%20Gump&apikey=trilogy" );

		return false;
	})

	//1. Retrieve User inputs and convert to variables
	//2. Use those variables to run an ajax call to the OMDBapi
	//3 Break Down the OMDbai object into useable fields
	//4. Dynamically Generate html content

	//5. Dealing with bugs or situations