var moviesHistory = localStorage.getItem("movies")
moviesHistory.push(newmovie)
localStorage.setItem("movies", JSON.stringify(moviesHistory))

var moviesHistory = localStorage.getItem("cocktails")
cocktailsHistory.push(newcocktail)
localStorage.setItem("cocktails", JSON.stringify(moviesHistory))