$(function () {

	$("select").filter(function(index) {
			return $($("select")[index]).val()!="blank";
		}).addClass("selected")
	$(".selected").each(function(index) {
		 
	}
});



// 			if ((filteredGames[i].score[0] + filteredGames[i].odds[0]) < filteredGames[i].score[1]) {
// 				lossCount++;
// 			} else if ((filteredGames[i].score[0] + filteredGames[i].odds[0]) > filteredGames[i].score[1]) {
// 				winCount++;
// 			} else {
// 				pushCount++;
// 			}
// 		}
	
			



// 			if ((gameData[i].score[1] + gameData[i].odds[1]) < gameData[i].score[0]) {
// 				lossCount++;
// 			} else if ((gameData[i].score[1] + gameData[i].odds[1]) > gameData[i].score[0]) {
// 				winCount++;
// 			} else {
// 				pushCount++;
// 			}
// 		}
// 	}
// 	console.log(winCount + " - " + lossCount + " - " + pushCount);
// };

// function totalGrab() {
// 	var overCount = 0;
// 	var underCount = 0;
// 	var pushTotalCount = 0;
// 	var totalScore = 0;
// 	for (i=0; i < gameData.length; i++) {
// 		var $opponent = $("#opponent").val();
// 		var $team			= $("#team").val();
// 	if (gameData[i].teams[0] === $team || gameData[i].teams[1] === $team) {
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
// 	console.log($team);
// 	console.log("Over Count: " + overCount + " - " + "Under Count: " + underCount + " - " +  "Push Count: " + pushTotalCount);
// }

// 	$('#testClick').on('click', function () {
// 	totalGrab();
// 	spreadGrab();
// })
// });
