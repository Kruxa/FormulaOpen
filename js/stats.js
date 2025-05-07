
const spelareData = {
	Kruxa: { namn: "Kruxa", poang: 1500, wins: "5" },
	Gås: { namn: "Gås", poang: 1200, wins: "2" },
	Isak: { namn: "Isak", poang: 1800, wins: "1" }
};


function visaSpelare(id) {
	const data = spelareData[id];
	document.getElementById('namn').textContent = `Namn: ${data.namn}`;
	document.getElementById('poang').textContent = `Poäng: ${data.poang}`;
	document.getElementById('vinster').textContent = `Vinster: ${data.wins}`;
}