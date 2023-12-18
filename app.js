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
// Passive icon path
async function fetchPassiveIconPath(championName, statKey) {
    try {
        const individualChampionDataUrl = `${baseUrl}/data/en_US/champion/${championName}.json`;
        const response = await fetch(individualChampionDataUrl);
        const data = await response.json();
        const stat = data.data[championName].passive.image[statKey];
        const championPassiveIcon = document.getElementById('championPassiveIcon');
        championPassiveIcon.src = `${baseUrl}/img/passive/${stat}`;
    } catch (error) {
        console.error('Error fetching champion data:', error);
    }
}
// Abilities icon path
async function fetchAbilityIconPath(championName, spellIndex, statKey, iconElementId) {
    try {
        const individualChampionDataUrl = `${baseUrl}/data/en_US/champion/${championName}.json`;
        const response = await fetch(individualChampionDataUrl);
        const data = await response.json();
        const stat = data.data[championName].spells[spellIndex].image[statKey];
        const championAbilityIcon = document.getElementById(iconElementId);
        championAbilityIcon.src = `${baseUrl}/img/spell/${stat}`;
    } catch (error) {
        console.error('Error fetching champion data:', error);
    }
}

// Q
async function fetchQ_AbilityIconPath(championName, statKey) {
    await fetchAbilityIconPath(championName, 0, statKey, 'championQIcon');
}

// W
async function fetchW_AbilityIconPath(championName, statKey) {
    await fetchAbilityIconPath(championName, 1, statKey, 'championWIcon');
}

// E
async function fetchE_AbilityIconPath(championName, statKey) {
    await fetchAbilityIconPath(championName, 2, statKey, 'championEIcon');
}

// R
async function fetchR_AbilityIconPath(championName, statKey) {
    await fetchAbilityIconPath(championName, 3, statKey, 'championRIcon');
}

// Champion icon path
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
    fetchPassiveIconPath(championName, 'full');
    fetchQ_AbilityIconPath(championName, 'full');
    fetchW_AbilityIconPath(championName, 'full');
    fetchE_AbilityIconPath(championName, 'full');
    fetchR_AbilityIconPath(championName, 'full');
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
