function createGame(gameName) {
  let score = 0;
  return function () {
    score++;
    return `Your ${gameName} game score is ${score}`;
  };
}

const scoreGoal = createGame('hockey');
scoreGoal();
scoreGoal();
scoreGoal();
const result = scoreGoal();

console.log('result: ', result);
