$(document).on("ready", function () {
	$(".js-artist-submit").on("click", function () {
		$.ajax({
			url: "https://api.spotify.com/v1/search?type=artist&query=SEARCHTERM",

			success: function (theData) {
				console.log("Success!");
				console.log(theData);
				console.log(theData.artist);

			// theData.forEach(function (oneArtist) {
			// 	var html= `
			// <li>
			// 	<p> Arist: ${oneArtist.name} </p>
			// </li> `;

			// });
			// },

			// error: function() {console.log("it failed!")}
		}
	})
})
})
