var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

var grades = {
	gradeA: 0,
	gradeB: 0,
	gradeC: 0,
	gradeD: 0,
	gradeF: 0,
	lowestGrade: 100,
	highestGrade: 0
};

for(var i = 0; i < scores.length; i++){

	var currentScore = scores[i];

	// If the current score is lower than the lowest score, reset the lowest score
	if(currentScore < grades.lowestGrade){
		grades.lowestGrade = currentScore;
	}

	// If the current score is higher than the hgihest score, reset the highest score
	if(currentScore > grades.highestGrade){
		grades.highestGrade = currentScore;
	}

	if(currentScore >= 91){
		grades.gradeA++;
	}else if(currentScore >= 81){
		grades.gradeB++;
	}else if(currentScore >= 71){
		grades.gradeC++;
	}else if(currentScore >= 61){
		grades.gradeD++;
	}else{
		grades.gradeF++;
	}

}

console.log("All Letter Grades: \n", grades);
console.log("-----------------------------");
console.log("Lowest Grade Received: ", grades.lowestGrade);
console.log("Highest Grade Received: ", grades.highestGrade);