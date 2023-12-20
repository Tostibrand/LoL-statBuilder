const version = '13.24.1';
const baseUrl = `https://ddragon.leagueoflegends.com/cdn/${version}`;
const championDataUrl = `${baseUrl}/data/en_US/champion.json`;
const itemDataUrl = `${baseUrl}/data/en_US/item.json`;
let champions;
let items;
let selectedChamp;

// -----------------------------------------------------------------
///////////////////////////////     GLOBALLY DECLARED VARIABLES      /////////////////////////////////////
// -----------------------------------------------------------------
// per level stats
let hpperlevel = null;
let mpperlevel = null;
let armorperlevel = null;
let spellblockperlevel = null;
let hpregenperlevel = null;
let mpregenperlevel = null;
let critperlevel = null;
let attackdamageperlevel = null;
let attackspeedperlevel = null;
let championLevel = null;
// at selected level stats
let hpatlevel = null;
let mpatlevel = null;
let armoratlevel = null;
let spellblockatlevel = null;
let attackdamageatlevel = null;
let attackspeedatlevel = null;
let hpregenatlevel = null;
let mpregenatlevel = null;
// base stats
let hpbase = null;
let mpbase = null;
let armorbase = null;
let spellblockbase = null;
let attackdamagebase = null;
let attackspeedbase = null;
let hpregenbase = null;
let mpregenbase = null;
// -------------------------------------------------------------------------------------------------------------------
////////////////////////////   TO FETCH BASE STATS VARIABLES USED IN CALCULATIONS    ////////////////////////////////
// ------------------------------------------------------------------------------------------------------------------
async function fetchData(championName, statKey, element) {
    try {
        const response = await fetch(championDataUrl);
        const data = await response.json();
        const stat = data.data[championName].stats[statKey];
        element.innerHTML = JSON.stringify(stat, null, 2);
        switch (statKey) {
            case "mp": mpbase = stat;
                break;
            case "hp": hpbase = stat;
                break;
            case "armor": armorbase = stat;
                break;
            case "spellblock": spellblockbase = stat;
                break;
            case "attackdamage": attackdamagebase = stat;
                break;
            case "attackspeed": attackspeedbase = stat;
                break;
            case "mpregen": mpregenbase = stat;
                break;
            case "hpregen": hpregenbase = stat;
                break;
        }
    } catch (error) {
        console.error('Error fetching champion data:', error);
    }
}
// --------------------------------------------------------------------------------------------------------------------------------------------------
///////////////////////////////////  TO FETCH PER LEVEL STATS AND ASSIGN THEM TO A GLOBAL VARIALBLE FOR LATER USE    ////////////////////////////////
// --------------------------------------------------------------------------------------------------------------------------------------------------
async function fetchDataPerlvl(championName, statKey) {
    try {
        const response = await fetch(championDataUrl);
        const data = await response.json();
        const stat = data.data[championName].stats[statKey];
        console.log(stat);


    } catch (error) {
        console.error('Error fetching champion data:', error);
    }
}
async function fetch_hpperlevel(championName) {
    try {
        const response = await fetch(championDataUrl);
        const data = await response.json();
        const stat = data.data[championName].stats.hpperlevel;
        console.log(stat);
        hpperlevel = stat;


    } catch (error) {
        console.error('Error fetching champion data:', error);
    }
}
async function fetch_mpperlevel(championName) {
    try {
        const response = await fetch(championDataUrl);
        const data = await response.json();
        const stat = data.data[championName].stats.mpperlevel;
        console.log(stat);
        mpperlevel = stat;


    } catch (error) {
        console.error('Error fetching champion data:', error);
    }
}
async function fetch_armorperlevel(championName) {
    try {
        const response = await fetch(championDataUrl);
        const data = await response.json();
        const stat = data.data[championName].stats.armorperlevel;
        console.log(stat);
        armorperlevel = stat;


    } catch (error) {
        console.error('Error fetching champion data:', error);
    }
}
async function fetch_spellblockperlevel(championName) {
    try {
        const response = await fetch(championDataUrl);
        const data = await response.json();
        const stat = data.data[championName].stats.spellblockperlevel;
        console.log(stat);
        spellblockperlevel = stat;


    } catch (error) {
        console.error('Error fetching champion data:', error);
    }
}
async function fetch_attackdamageperlevel(championName) {
    try {
        const response = await fetch(championDataUrl);
        const data = await response.json();
        const stat = data.data[championName].stats.attackdamageperlevel;
        console.log(stat);
        attackdamageperlevel = stat;


    } catch (error) {
        console.error('Error fetching champion data:', error);
    }
}
async function fetch_attackspeedperlevel(championName) {
    try {
        const response = await fetch(championDataUrl);
        const data = await response.json();
        const stat = data.data[championName].stats.attackspeedperlevel;
        console.log(stat);
        attackspeedperlevel = stat;


    } catch (error) {
        console.error('Error fetching champion data:', error);
    }
}
async function fetch_hpregenperlevel(championName) {
    try {
        const response = await fetch(championDataUrl);
        const data = await response.json();
        const stat = data.data[championName].stats.hpregenperlevel;
        console.log(stat);
        hpregenperlevel = stat;


    } catch (error) {
        console.error('Error fetching champion data:', error);
    }
}
async function fetch_mpregenperlevel(championName) {
    try {
        const response = await fetch(championDataUrl);
        const data = await response.json();
        const stat = data.data[championName].stats.mpregenperlevel;
        console.log(stat);
        mpregenperlevel = stat;


    } catch (error) {
        console.error('Error fetching champion data:', error);
    }
}
// -----------------------------------------------------------------
////////////////////////////       CHAMPION ABILITY ICONS       ////////////////////////
// -----------------------------------------------------------------

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
// Abilities icon path MAIN FUNCTION
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
    if (championName == "default") {

        const championIcon = document.getElementById('championIcon');
        championIcon.src = "./docs/assets/images/ChampionSquare.webp"

        const P = document.getElementById('championPassiveIcon');
        P.src = "./docs/assets/images/T.jpg"

        const Q = document.getElementById('championQIcon');
        Q.src = "./docs/assets/images/O.jpg"

        const W = document.getElementById('championWIcon');
        W.src = "./docs/assets/images/S.jpg"

        const E = document.getElementById('championEIcon');
        E.src = "./docs/assets/images/T.jpg"

        const R = document.getElementById('championRIcon');
        R.src = "./docs/assets/images/i.jpg"


    } else {
        const championIcon = document.getElementById('championIcon');
        championIcon.src = `${baseUrl}/img/champion/${championName}.png`;
    }
}
// -----------------------------------------------------------------
///////////////////      MAIN FUNCTION    ////////////////////////////
// -----------------------------------------------------------------

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
    fetchDataPerlvl(championName, 'hpperlevel');


    fetch_hpperlevel(championName);
    fetch_mpperlevel(championName);
    fetch_armorperlevel(championName);
    fetch_spellblockperlevel(championName);
    fetch_attackdamageperlevel(championName);
    fetch_attackspeedperlevel(championName);
    fetch_hpregenperlevel(championName);
    fetch_mpregenperlevel(championName);


    fetchDataPerlvl(championName, 'mpperlevel');
    fetchDataPerlvl(championName, 'armorperlevel');
    fetchDataPerlvl(championName, 'spellblockperlevel');
    fetchDataPerlvl(championName, 'hpregenperlevel');
    fetchDataPerlvl(championName, 'mpregenperlevel');
    fetchDataPerlvl(championName, 'critperlevel');
    fetchDataPerlvl(championName, 'attackdamageperlevel');
    fetchDataPerlvl(championName, 'attackspeedperlevel');
    fetchChampionSquareAsset(championName);
    fetchPassiveIconPath(championName, 'full');
    fetchQ_AbilityIconPath(championName, 'full');
    fetchW_AbilityIconPath(championName, 'full');
    fetchE_AbilityIconPath(championName, 'full');
    fetchR_AbilityIconPath(championName, 'full');
}
// -----------------------------------------------------------------
/////////////////////////     EVENTLISTENERS      /////////////////////////////////
// -----------------------------------------------------------------

// const input = document.querySelector('#championInput');
// input.addEventListener('click', () => searchChampion());

document.addEventListener('DOMContentLoaded', function () {

    const lvlIndicator = document.getElementById('lvlIndicator');
    const championSelect = document.getElementById('championSelect');

    lvlIndicator.addEventListener('change', function () {
        const selectedLevel = lvlIndicator.value;
        championLevel = parseInt(selectedLevel);
        fetchChampionLevel(selectedLevel);
    });

    championSelect.addEventListener('change', function () {
        const selectedchampion = championSelect.value;
        championName = selectedchampion;
        lvlIndicator.value = '1';
        if (championSelect.value == "default") {
            const championIcon = document.getElementById('championIcon');
            championIcon.src = "./docs/assets/images/ChampionSquare.webp"
        }

        fetchChampionStats(championName);

    })
    // -----------------------------------------------------------------
    ////////////////////////         CALCULATIONS FOR PER LEVEL STATS    /////////////////////////////
    // -----------------------------------------------------------------
    // Your function to fetch and display champion icon
    function fetchChampionLevel(championLevel) {
        // Replace this with your logic to fetch and display the champion level
        console.log(`Champion level is ${championLevel}`);

        hpatlevel = Math.round(hpbase + (hpperlevel * championLevel) - hpperlevel);
        mpatlevel = Math.round(mpbase + (mpperlevel * championLevel) - mpperlevel);
        armoratlevel = Math.round(armorbase + (armorperlevel * championLevel) - armorperlevel);
        spellblockatlevel = Math.round(spellblockbase + (spellblockperlevel * championLevel) - spellblockperlevel);
        attackdamageatlevel = Math.round(attackdamagebase + (attackdamageperlevel * championLevel) - attackdamageperlevel);
        // BaseAS x (1 + per_level_AS x (level-1) + AS_from_other_sources)
        attackspeedatlevel = attackspeedbase * (1 + (attackspeedperlevel / 100) * (championLevel - 1));
        roundedattackspeedatlevel = attackspeedatlevel.toFixed(2);

        hpregenatlevel = (hpregenbase + (hpregenperlevel * championLevel) - hpregenperlevel);
        roundedhpregenatlevel = hpregenatlevel.toFixed(1);
        mpregenatlevel = (mpregenbase + (mpregenperlevel * championLevel) - mpregenperlevel);
        roundedmpregenatlevel = mpregenatlevel.toFixed(1);

        hp.innerHTML = hpatlevel;
        mana.innerHTML = mpatlevel;
        armor.innerHTML = armoratlevel;
        magicresist.innerHTML = spellblockatlevel;
        attackdamage.innerHTML = attackdamageatlevel;
        attackspeed.innerHTML = roundedattackspeedatlevel;
        HPregen.innerHTML = roundedhpregenatlevel;
        MPregen.innerHTML = roundedmpregenatlevel;


    }
});
// -----------------------------------------------------------------
/////////////////////////////     HELPERS    //////////////////////////////
// -----------------------------------------------------------------

// function searchChampion() {
//     const championName = prompt('Please enter a champion name');
//     if (championName) {
//         const capitalizedString = capitalizeFirstLetter(championName);
//         fetchChampionStats(capitalizedString);
//     }
// }

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------
// ///////////////////////////////////  TO FETCH LIST OF CHAMPION ID'S, THESE CAN BE USED TO SEARCH CHAMPIONS AND FETCH ALL THE DATA   //////////////////////////
// --------------------------------------------------------------------------------------------------------------------------------------------------------------


fetch(championDataUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        // Extract champion names from the response
        champions = Object.keys(data.data).map(championKey => data.data[championKey].id);

        // Now 'champions' is an array containing all the champion id's
        // console.log(champions);

        // Call the loop function here or use champions as needed
        populateSelect();
    })
    .catch(error => console.error("Error fetching data:", error));

function populateSelect() {
    const selectElement = document.getElementById('championSelect');

    // Loop through each champion name in the 'champions' array and create an option element
    champions.forEach(championName => {
        const optionElement = document.createElement('option');
        optionElement.value = championName; // Set the value attribute if needed
        optionElement.text = championName;
        selectElement.appendChild(optionElement);
    });
}

fetch(itemDataUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        // Extract champion names from the response
        items = Object.keys(data.data).map(itemKey => data.data[itemKey]);

        // Now 'champions' is an array containing all the champion id's
        // console.log(champions);

        // Call the loop function here or use champions as needed
    })
    .catch(error => console.error("Error fetching data:", error));