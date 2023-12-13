fetch('https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/champion.json', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
})
    .then(response => response.json())
    .then(response => console.log(JSON.stringify(response, null, 2)))



let data = document.querySelector("#myData");
data.append("data goes here")
