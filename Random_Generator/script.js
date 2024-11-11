const music = [
    "Utada Hikaru-Beautiful World",
    "Sakanaction- Wasurerarenaino",
    "iri-Aitaiwa",
    "Utada Hikaru- Bad mode",
    "Utada Hikaru- Somewhere near Marseilles",
    "Milet- Inside you",
    "MAN WITH A MISSION- Blaze",
    "Hamasaki Ayumi- MY ALL",
    "Sakanaction- Music",
    "Sakanaction- Bach no Senritsu o Yoru ni Kiita Sei Desu",
    "iri- Night Groove",
    "Sheena Ringo- Marunouchi Sadistic",
    "Tokyo Incidents- Leap & Pearl",
    "Aimer- Kataomoi",
    "MISIA- Orphans no Namida",
    "MISIA- Hi no ataru basho"
];

function generate() {
    const name = document.getElementById("visitorName").value || "Visitor";
    const randomMusic = music[Math.floor(Math.random() * music.length)];
    const output = document.getElementById("output");
    output.textContent = `${name}, the recommendation for you is: ${randomMusic}`;
    restyle();
}

function restyle() {
    const output = document.getElementById("output");

    const fontSize = `${Math.floor(Math.random() * 20) + 18}px`;
    const color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    const backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

    output.style.fontSize = fontSize;
    output.style.color = color;
    output.style.backgroundColor = backgroundColor;
}