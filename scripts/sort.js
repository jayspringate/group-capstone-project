function oddsAdjust() {
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
}

oddsAdjust();

function favoriteAdjust () {
	for (i=0; i < gameData.length; i++) {
		if (gameData[i].odds[0] < 0) {
			gameData[i].favorite = ["favorite","underdog"];
		} else {
			gameData[i].favorite = ["underdog","favorite"];
		}
		}
}

favoriteAdjust();

function courtAdjust () {
	for (i=0; i < gameData.length; i++) {
			gameData[i].court = ["road","home"];
		}
}

courtAdjust();

console.log(gameData[0]);
console.log(gameData[1]);

$(function () {

function spreadGrab() {
	var winCount = 0;
	var lossCount = 0;
	var pushCount = 0;
	for (i=0; i < gameData.length; i++) {
		var $opponent = $("#opponent").val();
		var $team			= $("#team").val();
		if (
			gameData[i].teams[0] === $team
			&&
			gameData[i].favorite[0] == "favorite"
			// &&
			// gameData[i].court[0] == "home"
			// &&
			// gameData[i].odds[0] == 4
			// &&
			// gameData[i].teams[1] === $opponent) {
			){
			if ((gameData[i].score[0] + gameData[i].odds[0]) < gameData[i].score[1]) {
				lossCount++;
			} else if ((gameData[i].score[0] + gameData[i].odds[0]) > gameData[i].score[1]) {
				winCount++;
			} else {
				pushCount++;
			}
		}
		if (
			gameData[i].teams[1] === $team
			&&
			gameData[i].favorite[1] == "favorite"
			// &&
			// gameData[i].court[1] == "home"
			// &&
			// gameData[i].odds[1] == 4
			// &&
			// gameData[i].teams[0] === $opponent) {
			){
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

function totalGrab() {
	var overCount = 0;
	var underCount = 0;
	var pushTotalCount = 0;
	var totalScore = 0;
	for (i=0; i < gameData.length; i++) {
		var $opponent = $("#opponent").val();
		var $team			= $("#team").val();
	if (gameData[i].teams[0] === $team || gameData[i].teams[1] === $team) {
		totalScore = gameData[i].score[0] + gameData[i].score[1];
		if (totalScore < gameData[i].odds[2]) {
			underCount++;
		} else if (totalScore > gameData[i].odds[2]) {
			overCount++;
			} else {
				pushTotalCount++;
			}
		}
	}
	console.log($team);
	console.log("Over Count: " + overCount + " - " + "Under Count: " + underCount + " - " +  "Push Count: " + pushTotalCount);
}

	$('#testClick').on('click', function () {
	totalGrab();
	spreadGrab();
})
});
