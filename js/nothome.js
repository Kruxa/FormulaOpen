const teams = {
	"avoxboatclub": "https://i.ibb.co/jvXzmvqD/IMG-2117.png",
	"evileyeracing": "https://i.ibb.co/DDTkzZqF/IMG-2898.png",
	"everdawnracing": "https://i.ibb.co/v4Vqxh3K/IMG-1929.jpg",
	"vinderacing": "https://i.ibb.co/tpWg4bpF/IMG-1930.jpg"
}

const userList = [
	[
		"Kruxa",
		24,
		"avoxboatclub"
	],
	[
		"Fy17",
		12,
		"avoxboatclub"
	],
	[
		"Swets_clan",
		38,
		"evileyeracing"
	],
	[
		"NissePRO",
		57,
		"evileyeracing"
	],
	[
		"VonEmil",
		111,
		"everdawnracing"
	],
	[
		"Xvalpen",
		27,
		"everdawnracing"
	],
	[
		"Adde_1313",
		12,
		"vinderacing"
	],
	[
		"Bobbis17",
		51,
		"vinderacing"
	]
]

userList.sort((b, a) => a[1] - b[1]);

const menu = document.getElementById("menu");
for (i = 0; i < userList.length; i++) {
	const user = userList[i];

	const playerContainer = document.createElement("div");

	const rankNumber = document.createElement("p");
	rankNumber.innerHTML = i + 1;
	playerContainer.appendChild(rankNumber);

	const coloredContainer = document.createElement("div");
	coloredContainer.classList.add(user[2]);

	const logo = document.createElement("img");
	logo.classList.add("logga");
	logo.src = teams[user[2]];
	coloredContainer.appendChild(logo);

	const face = document.createElement("img");
	face.classList.add("face");
	face.src = "https://mc-heads.net/avatar/" + user[0] + ".png";
	coloredContainer.appendChild(face);

	const name = document.createElement("p");
	name.innerHTML = user[0];
	coloredContainer.appendChild(name);

	playerContainer.appendChild(coloredContainer);

	const points = document.createElement("p");
	points.classList.add("points");
	points.innerHTML = user[1];
	playerContainer.appendChild(points);

	menu.appendChild(playerContainer);
}

function openMenu() {
	var x = document.getElementById("links");
	if (x.style.display === "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}
