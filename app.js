const version = '13.24.1';
const baseUrl = `https://ddragon.leagueoflegends.com/cdn/${version}`;
const championDataUrl = `${baseUrl}/data/en_US/champion.json`;

async function fetchData(championName, statKey, element) {
    try {
        const response = await fetch(championDataUrl);
        const data = await response.json();
        const stat = data.data[championName].stats[statKey];
        element.innerHTML = JSON.stringify(stat, null, 2);
    } catch (error) {
        console.error('Error fetching champion data:', error);
    }
}

function fetchChampionSquareAsset(championName) {
    const championIcon = document.getElementById('championIcon');
    championIcon.src = `${baseUrl}/img/champion/${championName}.png`;
}

function fetchChampionStats(championName) {
    fetchData(championName, 'movespeed', movespeed);
    fetchData(championName, 'hp', hp);
    fetchData(championName, 'mp', mana);
    fetchData(championName, 'hpregen', HPregen);
    fetchData(championName, 'mpregen', MPregen);
    fetchData(championName, 'attackdamage', attackdamage);
    fetchData(championName, 'attackrange', attackrange);
    fetchData(championName, 'armor', armor);
    fetchData(championName, 'attackspeed', attackspeed);
    fetchData(championName, 'spellblock', magicresist);
    fetchChampionSquareAsset(championName);
}

const input = document.querySelector('#championInput');
input.addEventListener('click', () => searchChampion());

function searchChampion() {
    const championName = prompt('Please enter a champion name');
    if (championName) {
        const capitalizedString = capitalizeFirstLetter(championName);
        fetchChampionStats(capitalizedString);
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}



// function fetchChampionMovespeed(championName) {
//     fetch('https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/champion.json', {
//         method: 'GET',
//         headers: {
//             'Accept': 'application/json',
//         },
//     })
//         .then(response => response.json())
//         .then(response => {
//             movespeed.innerHTML = "";
//             const stat = response.data[championName].stats.movespeed;
//             movespeed.append(JSON.stringify(stat, null, 2));

//         })
//         .catch(error => {
//             console.error('Error fetching champion data:', error);
//         });
// }
// function fetchChampionHP(championName) {
//     fetch('https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/champion.json', {
//         method: 'GET',
//         headers: {
//             'Accept': 'application/json',
//         },
//     })
//         .then(response => response.json())
//         .then(response => {
//             hp.innerHTML = "";
//             const stat = response.data[championName].stats.hp;
//             hp.append(JSON.stringify(stat, null, 2));

//         })
//         .catch(error => {
//             console.error('Error fetching champion data:', error);
//         });
// }
// function fetchChampionMP(championName) {
//     fetch('https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/champion.json', {
//         method: 'GET',
//         headers: {
//             'Accept': 'application/json',
//         },
//     })
//         .then(response => response.json())
//         .then(response => {
//             mana.innerHTML = "";
//             const stat = response.data[championName].stats.mp;
//             mana.append(JSON.stringify(stat, null, 2));

//         })
//         .catch(error => {
//             console.error('Error fetching champion data:', error);
//         });
// }
// function fetchChampionHPregen(championName) {
//     fetch('https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/champion.json', {
//         method: 'GET',
//         headers: {
//             'Accept': 'application/json',
//         },
//     })
//         .then(response => response.json())
//         .then(response => {
//             HPregen.innerHTML = "";
//             const stat = response.data[championName].stats.hpregen;
//             HPregen.append(JSON.stringify(stat, null, 2));

//         })
//         .catch(error => {
//             console.error('Error fetching champion data:', error);
//         });
// }
// function fetchChampionMPregen(championName) {
//     fetch('https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/champion.json', {
//         method: 'GET',
//         headers: {
//             'Accept': 'application/json',
//         },
//     })
//         .then(response => response.json())
//         .then(response => {
//             MPregen.innerHTML = "";
//             const stat = response.data[championName].stats.mpregen;
//             MPregen.append(JSON.stringify(stat, null, 2));

//         })
//         .catch(error => {
//             console.error('Error fetching champion data:', error);
//         });
// }
// function fetchChampionAD(championName) {
//     fetch('https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/champion.json', {
//         method: 'GET',
//         headers: {
//             'Accept': 'application/json',
//         },
//     })
//         .then(response => response.json())
//         .then(response => {
//             attackdamage.innerHTML = "";
//             const stat = response.data[championName].stats.attackdamage;
//             attackdamage.append(JSON.stringify(stat, null, 2));

//         })
//         .catch(error => {
//             console.error('Error fetching champion data:', error);
//         });
// }
// function fetchChampionAttackRange(championName) {
//     fetch('https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/champion.json', {
//         method: 'GET',
//         headers: {
//             'Accept': 'application/json',
//         },
//     })
//         .then(response => response.json())
//         .then(response => {
//             attackrange.innerHTML = "";
//             const stat = response.data[championName].stats.attackrange;
//             attackrange.append(JSON.stringify(stat, null, 2));

//         })
//         .catch(error => {
//             console.error('Error fetching champion data:', error);
//         });
// }
// function fetchChampionArmor(championName) {
//     fetch('https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/champion.json', {
//         method: 'GET',
//         headers: {
//             'Accept': 'application/json',
//         },
//     })
//         .then(response => response.json())
//         .then(response => {
//             armor.innerHTML = "";
//             const stat = response.data[championName].stats.armor;
//             armor.append(JSON.stringify(stat, null, 2));

//         })
//         .catch(error => {
//             console.error('Error fetching champion data:', error);
//         });
// }
// function fetchChampionAttackSpeed(championName) {
//     fetch('https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/champion.json', {
//         method: 'GET',
//         headers: {
//             'Accept': 'application/json',
//         },
//     })
//         .then(response => response.json())
//         .then(response => {
//             attackspeed.innerHTML = "";
//             const stat = response.data[championName].stats.attackspeed;
//             attackspeed.append(JSON.stringify(stat, null, 2));

//         })
//         .catch(error => {
//             console.error('Error fetching champion data:', error);
//         });
// }
// function fetchChampionMagicResist(championName) {
//     fetch('https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/champion.json', {
//         method: 'GET',
//         headers: {
//             'Accept': 'application/json',
//         },
//     })
//         .then(response => response.json())
//         .then(response => {
//             magicresist.innerHTML = "";
//             const stat = response.data[championName].stats.spellblock;
//             magicresist.append(JSON.stringify(stat, null, 2));

//         })
//         .catch(error => {
//             console.error('Error fetching champion data:', error);
//         });
// }
// function fetchChampionSquareAsset(championName) {
//     const ChampionIcon = document.getElementById('championIcon')
//     ChampionIcon.src = "";
//     ChampionIcon.src = 'https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/' + championName + '.png'
// }
// function fetchChampionStats(championName) {

//     fetchChampionHP(championName);
//     fetchChampionMovespeed(championName);
//     fetchChampionMP(championName);
//     fetchChampionHPregen(championName);
//     fetchChampionMPregen(championName);
//     fetchChampionSquareAsset(championName);
//     fetchChampionAD(championName);
//     fetchChampionAttackRange(championName);
//     fetchChampionArmor(championName);
//     fetchChampionAttackSpeed(championName);
//     fetchChampionMagicResist(championName);
// }
// const input = document.querySelector(`#championInput`);
// input.addEventListener(`click`, () => { searchChampion() })

// function searchChampion() {
//     championName = prompt("Please enter a champion name");
//     capitalizedString = capitalizeFirstLetter(championName);
//     fetchChampionStats(capitalizedString);
// }

// function capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }
