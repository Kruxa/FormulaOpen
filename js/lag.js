const teams = {
	"avoxboatclub": "https://i.ibb.co/jvXzmvqD/IMG-2117.png",
	"evileyeracing": "https://i.ibb.co/6cdrtN7F/IMG-2118.png",
	"everdawnracing": "https://i.ibb.co/v4Vqxh3K/IMG-1929.jpg",
	"vinderacing": "https://i.ibb.co/tpWg4bpF/IMG-1930.jpg"
}

const userList = [
	[
		"Avox Boatclub",
		122,
		"avoxboatclub"
	],
	[
		"Vinde Racing",
		73,
		"vinderacing"
	],
	[
		"Evileye Racing",
		22,
		"evileyeracing"
	],
	[
		"Everdawn Racing",
		34,
		"everdawnracing"
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

  // const menu = document.querySelector(".menu");
  // const spelare = Array.from(menu.children);
  // console.log(spelare);
  // console.log(spelare[0].dataset.score);
  // spelare.sort((a, b) => b.dataset.score - a.dataset.score);
  // spelare.forEach(spelare => menu.appendChild(spelare));

function openMenu() {
	var x = document.getElementById("links");
	if (x.style.display === "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}

