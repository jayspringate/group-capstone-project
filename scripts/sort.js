function dataAdjust() {
	for (i=0; i < gameData.length; i++) {
		if (gameData[i].odds[0] < 100) {
			gameData[i].odds.splice(1,0,-(gameData[i].odds[0]));
		} else {
			var temp;
			temp = gameData[i].odds[0];
			gameData[i].odds[0] = gameData[i].odds[1];
			gameData[i].odds[1] = temp;
			gameData[i].odds.splice(0,0,-(gameData[i].odds[0]));
		}
}
};

dataAdjust();


function spreadGrab() {
	var winCount = 0;
	var lossCount = 0;
	var pushCount = 0;
for (i=0; i < gameData.length; i++) {
	if (gameData[i].teams[0] == "ATL") {
		if ((gameData[i].score[0] + gameData[i].odds[0]) < gameData[i].score[1]) {
			lossCount++;
		} else if ((gameData[i].score[0] + gameData[i].odds[0]) > gameData[i].score[1]) {
			winCount++;
		} else {
			pushCount++;
		}
	}
	if (gameData[i].teams[1] == "ATL") {
		if ((gameData[i].score[1] + gameData[i].odds[1]) < gameData[i].score[0]) {
			lossCount++;
		} else if ((gameData[i].score[1] + gameData[i].odds[1]) > gameData[i].score[0]) {
			winCount++;
		} else {
			pushCount++;
		}
	}
}
console.log(winCount + " - " + lossCount + " - " + pushCount);
};
oddsGrab();

// function totalGrab(team, location, favOrDog, spread, opponent) {
// 	var overCount = 0;
// 	var underCount = 0;
// 	var pushTotalCount = 0;
// 	var totalScore = 0;
// 	for (i=0; i < gameData.length; i++) {
// 	if (gameData[i].teams[0] == team || gameData[i].teams[1] == team) {
// 		totalScore = gameData[i].score[0] + gameData[i].score[1];
// 		if (totalScore < gameData[i].odds[2]) {
// 			underCount++;
// 		} else if (totalScore > gameData[i].odds[2]) {
// 			overCount++;
// 			} else {
// 				pushTotalCount++;
// 			}
// 		}
// 	}
// 	console.log(overCount + " - " + underCount + " - " + pushTotalCount);
// };
// totalGrab("SA");
		

