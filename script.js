document.getElementById("Submit").addEventListener("click", function(event) {
        event.preventDefault();
        const value = document.getElementById("cCode").value;
        if (value === ""){
                return;
        }
         const url2 = "https://calendarific.com/api/v2/countries?&api_key=1a7d6a0e58caf84e3b6e864e2c6ae55ac4b0c489";
        fetch(url2)
                .then(function(response) {
                        return response.json();
                }).then(function(json) {
                    
			let results2 = "";
                        results2 += "<h2>Country Codes</h2>";
                       	for (let i = 0; i < json.response.countries.length; i++){
				if ((i % 5) == 0){
					results2 += '<div class="container">';
				}
				results2 += '<div class="countryContain">';
                               	results2 += "<p>" + json.response.countries[i].country_name + ": " + json.response.countries[i]["iso-3166"] + "</p>";
				results2 += "</div>";
				if ((i % 5) == 4){
					results2 += "</div>";
				}
                     	}
                       	document.getElementById("countries").innerHTML = results2;
			
                });
	const url = "https://calendarific.com/api/v2/holidays?&api_key=1a7d6a0e58caf84e3b6e864e2c6ae55ac4b0c489&country=" + value + "&year=2020";
        fetch(url)
                .then(function(response) {
                        return response.json();
                }).then(function(json) {
			let results = "";
                        console.log(json);
			results += '<h2 style="text-align: center;">' + json.response.holidays[0].country.name + "</h2>";
			for (let i = 0; i < json.response.holidays.length; i++){
				if ((i % 3) == 0){
					results += '<div class="container">';
				}
				results += '<div class="holidayContain">';
                        	results += "<p>" + json.response.holidays[i].date.iso + ": " + json.response.holidays[i].name + "</p>";
				results += "<p>" + json.response.holidays[i].description + "</p>"
				results += "</div>";
				if ((i % 3) == 2 || i == (json.response.holidays.length - 1)){
					results += "</div>";
				}
			}
                        document.getElementById("holidays").innerHTML = results;
                });
});
