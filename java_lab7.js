// Array of BTS members military status
let military = [
    { name: "jin", info: "Enlisted: Dec 13, 2022 — Discharge: June 12, 2024 — Active Duty", img: "jinm.jpg" },
    { name: "jhope", info: "Enlisted: Apr 18, 2023 — Discharge: Oct 17, 2024 — Active Duty", img: "jhopem.jpg" },
    { name: "suga", info: "Enlisted: Sept 22, 2023 — Discharge: June 21, 2025 — Public Service Agent", img: "sugam.jpg" },
    { name: "rm", info: "Enlisted: Dec 11, 2023 — Discharge: June 10, 2025 — Active Duty", img: "rmm.jpg" },
    { name: "v", info: "Enlisted: Dec 11, 2023 — Discharge: June 10, 2025 — Active Duty", img: "vm.jpg" },
    { name: "jimin", info: "Enlisted: Dec 12, 2023 — Discharge: June 11, 2025 — Active Duty", img: "jiminm.jpg" },
    { name: "jk", info: "Enlisted: Dec 12, 2023 — Discharge: June 11, 2025 — Active Duty", img: "jkm.jpg" }
];

function searchMilitary() {
    let input = document.getElementById("nameInput").value.toLowerCase();
    let result = document.getElementById("result");

    let found = false;
    for (let i = 0; i < military.length; i++) {
        if (military[i].name === input) {
            result.innerHTML = "💜 " + input.toUpperCase() + " – " + military[i].info + "<br>" +
                "<img src='" + military[i].img + "' alt='" + input + "' style='width:300px; margin-top:10px;'>";
            found = true;
            break;
        }
    }

    if (!found) {
        result.innerHTML = "No military data found. Try again!";
    }
}
