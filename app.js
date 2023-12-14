

function fetchChampionMovespeed(championName) {
    fetch('https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/champion.json', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    })
        .then(response => response.json())
        .then(response => {
            const stat = response.data[championName].stats.movespeed;
            movespeed.append(JSON.stringify(stat, null, 2));

        })
        .catch(error => {
            console.error('Error fetching champion data:', error);
        });
}
function fetchChampionHP(championName) {
    fetch('https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/champion.json', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    })
        .then(response => response.json())
        .then(response => {
            const stat = response.data[championName].stats.hp;
            hp.append(JSON.stringify(stat, null, 2));

        })
        .catch(error => {
            console.error('Error fetching champion data:', error);
        });
}
function fetchChampionMP(championName) {
    fetch('https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/champion.json', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    })
        .then(response => response.json())
        .then(response => {
            const stat = response.data[championName].stats.mp;
            mana.append(JSON.stringify(stat, null, 2));

        })
        .catch(error => {
            console.error('Error fetching champion data:', error);
        });
}
function fetchChampionHPregen(championName) {
    fetch('https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/champion.json', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    })
        .then(response => response.json())
        .then(response => {
            const stat = response.data[championName].stats.hpregen;
            HPregen.append(JSON.stringify(stat, null, 2));

        })
        .catch(error => {
            console.error('Error fetching champion data:', error);
        });
}
function fetchChampionStats(championName) {
    fetchChampionHP(championName);
    fetchChampionMovespeed(championName);
    fetchChampionMP(championName);
    fetchChampionHPregen(championName);
    fetchChampionSquareAsset(championName);
}
// Example usage:






















// let displayHPregen;
// fetch('https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/champion.json', {
//     method: 'GET',
//     headers: {
//         'Accept': 'application/json',
//     },
// }).then(response => response.json())
//     .then(response => HPregen.append(JSON.stringify(response.data.Braum.stats.hpregen, null, 2)))


// let displayMPregen;
// fetch('https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/champion.json', {
//     method: 'GET',
//     headers: {
//         'Accept': 'application/json',
//     },
// }).then(response => response.json())
//     .then(response => MPregen.append(JSON.stringify(response.data.Braum.stats.mpregen, null, 2)))


// let displayAttackdamage;
// fetch('https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/champion.json', {
//     method: 'GET',
//     headers: {
//         'Accept': 'application/json',
//     },
// }).then(response => response.json())
//     .then(response => attackdamage.append(JSON.stringify(response.data.Braum.stats.attackdamage, null, 2)))


// let displayAttackrange;
// fetch('https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/champion.json', {
//     method: 'GET',
//     headers: {
//         'Accept': 'application/json',
//     },
// }).then(response => response.json())
//     .then(response => attackrange.append(JSON.stringify(response.data.Braum.stats.attackrange, null, 2)))


// let displayArmor;
// fetch('https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/champion.json', {
//     method: 'GET',
//     headers: {
//         'Accept': 'application/json',
//     },
// }).then(response => response.json())
//     .then(response => armor.append(JSON.stringify(response.data.Braum.stats.armor, null, 2)))

// let displayAttackspeed;
// fetch('https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/champion.json', {
//     method: 'GET',
//     headers: {
//         'Accept': 'application/json',
//     },
// }).then(response => response.json())
//     .then(response => attackspeed.append(JSON.stringify(response.data.Braum.stats.attackspeed, null, 2)))


// let displayMagicresist;
// fetch('https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/champion.json', {
//     method: 'GET',
//     headers: {
//         'Accept': 'application/json',
//     },
// }).then(response => response.json())
//     .then(response => magicresist.append(JSON.stringify(response.data.Braum.stats.spellblock, null, 2)))

function fetchChampionSquareAsset(championName) {
    const ChampionIcon = document.getElementById('championIcon')
    ChampionIcon.src = 'https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/' + championName + '.png'
}





// let output = document.querySelector("#output")
// let hp = document.querySelector("#hp")
// let mana = document.querySelector("#mana")
// let HPregen = document.querySelector("#HPregen")
// let MPregen = document.querySelector("#MPregen")
// let movespeed = document.querySelector("#movespeed")
// let attackdamage = document.querySelector("#attackdamage")
// let attackrange = document.querySelector("#attackrange")


