function generateStatblock() {
    // Dati base
    const name = document.getElementById("creature-name").value;
    const size = document.getElementById("creature-size").value;
    const type = document.getElementById("creature-type").value;
    const ac = document.getElementById("creature-ac").value;
    const armorType = document.getElementById("armor-type").value;
    const hp = document.getElementById("creature-hp").value;

    // Statistiche
    const str = document.getElementById("str").value;
    const dex = document.getElementById("dex").value;
    const con = document.getElementById("con").value;
    const int = document.getElementById("int").value;
    const wis = document.getElementById("wis").value;
    const cha = document.getElementById("cha").value;

    // Velocità
    const speedWalk = document.getElementById("speed-walk").value;
    const speedSwim = document.getElementById("speed-swim").value;
    const speedClimb = document.getElementById("speed-climb").value;
    const speedFly = document.getElementById("speed-fly").value;
    const speedBurrow = document.getElementById("speed-burrow").value;

    // Costruzione velocità
    let speedText = speedWalk;
    if (speedSwim) speedText += `, nuoto ${speedSwim}`;
    if (speedClimb) speedText += `, scalare ${speedClimb}`;
    if (speedFly) speedText += `, volare ${speedFly}`;
    if (speedBurrow) speedText += `, tana ${speedBurrow}`;

    // Generazione Statblock
    const statblockHTML = `
        <h3>${name}</h3>
        <p><em>${size} ${type}</em></p>
        <hr>
        <p><strong>Classe Armatura</strong> ${ac} (${armorType})</p>
        <p><strong>Punti Ferita</strong> ${hp}</p>
        <p><strong>Velocità</strong> ${speedText}</p>
        <hr>
        <div class="ability-scores">
            <p><strong>FOR</strong> ${str} (${Math.floor((str - 10) / 2)})</p>
            <p><strong>DES</strong> ${dex} (${Math.floor((dex - 10) / 2)})</p>
            <p><strong>COS</strong> ${con} (${Math.floor((con - 10) / 2)})</p>
            <p><strong>INT</strong> ${int} (${Math.floor((int - 10) / 2)})</p>
            <p><strong>SAG</strong> ${wis} (${Math.floor((wis - 10) / 2)})</p>
            <p><strong>CAR</strong> ${cha} (${Math.floor((cha - 10) / 2)})</p>
        </div>
    `;

    document.getElementById("statblock-preview").innerHTML = statblockHTML;
}

function downloadStatblock() {
    // (Da implementare con html2canvas)
    alert("Funzionalità di download da implementare!");
}                                                  