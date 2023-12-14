

function fetchChampionMovespeed(championName) {
    fetch('https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/champion.json', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    })
        .then(response => response.json())
        .then(response => {
            movespeed.innerHTML = "";
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
            hp.innerHTML = "";
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
            mana.innerHTML = "";
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
            HPregen.innerHTML = "";
            const stat = response.data[championName].stats.hpregen;
            HPregen.append(JSON.stringify(stat, null, 2));

        })
        .catch(error => {
            console.error('Error fetching champion data:', error);
        });
}
function fetchChampionMPregen(championName) {
    fetch('https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/champion.json', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    })
        .then(response => response.json())
        .then(response => {
            MPregen.innerHTML = "";
            const stat = response.data[championName].stats.mpregen;
            MPregen.append(JSON.stringify(stat, null, 2));

        })
        .catch(error => {
            console.error('Error fetching champion data:', error);
        });
}
function fetchChampionAD(championName) {
    fetch('https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/champion.json', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    })
        .then(response => response.json())
        .then(response => {
            attackdamage.innerHTML = "";
            const stat = response.data[championName].stats.attackdamage;
            attackdamage.append(JSON.stringify(stat, null, 2));

        })
        .catch(error => {
            console.error('Error fetching champion data:', error);
        });
}
function fetchChampionAttackRange(championName) {
    fetch('https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/champion.json', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    })
        .then(response => response.json())
        .then(response => {
            attackrange.innerHTML = "";
            const stat = response.data[championName].stats.attackrange;
            attackrange.append(JSON.stringify(stat, null, 2));

        })
        .catch(error => {
            console.error('Error fetching champion data:', error);
        });
}
function fetchChampionArmor(championName) {
    fetch('https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/champion.json', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    })
        .then(response => response.json())
        .then(response => {
            armor.innerHTML = "";
            const stat = response.data[championName].stats.armor;
            armor.append(JSON.stringify(stat, null, 2));

        })
        .catch(error => {
            console.error('Error fetching champion data:', error);
        });
}
function fetchChampionAttackSpeed(championName) {
    fetch('https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/champion.json', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    })
        .then(response => response.json())
        .then(response => {
            attackspeed.innerHTML = "";
            const stat = response.data[championName].stats.attackspeed;
            attackspeed.append(JSON.stringify(stat, null, 2));

        })
        .catch(error => {
            console.error('Error fetching champion data:', error);
        });
}
function fetchChampionMagicResist(championName) {
    fetch('https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/champion.json', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    })
        .then(response => response.json())
        .then(response => {
            magicresist.innerHTML = "";
            const stat = response.data[championName].stats.spellblock;
            magicresist.append(JSON.stringify(stat, null, 2));

        })
        .catch(error => {
            console.error('Error fetching champion data:', error);
        });
}
function fetchChampionSquareAsset(championName) {
    const ChampionIcon = document.getElementById('championIcon')
    ChampionIcon.src = "";
    ChampionIcon.src = 'https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/' + championName + '.png'
}
function fetchChampionStats(championName) {

    fetchChampionHP(championName);
    fetchChampionMovespeed(championName);
    fetchChampionMP(championName);
    fetchChampionHPregen(championName);
    fetchChampionMPregen(championName);
    fetchChampionSquareAsset(championName);
    fetchChampionAD(championName);
    fetchChampionAttackRange(championName);
    fetchChampionArmor(championName);
    fetchChampionAttackSpeed(championName);
    fetchChampionMagicResist(championName);
}








// let output = document.querySelector("#output")
// let hp = document.querySelector("#hp")
// let mana = document.querySelector("#mana")
// let HPregen = document.querySelector("#HPregen")
// let MPregen = document.querySelector("#MPregen")
// let movespeed = document.querySelector("#movespeed")
// let attackdamage = document.querySelector("#attackdamage")
// let attackrange = document.querySelector("#attackrange")


