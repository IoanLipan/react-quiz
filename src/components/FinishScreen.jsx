function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = Math.ceil((points / maxPossiblePoints) * 100);

  let emoji;

  if (percentage === 100) {
    emoji = "🥇";
  } else if (percentage >= 80) {
    emoji = "😎";
  } else if (percentage >= 60) {
    emoji = "🙂";
  } else if (percentage >= 40) {
    emoji = "😐";
  } else if (percentage >= 20) {
    emoji = "😕";
  } else {
    emoji = "😭";
  }

  return (
    <>
      <p className="result">
        <span>{emoji}</span>You scored <strong>{points}</strong> out of{" "}
        {maxPossiblePoints} points. {percentage}%!
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      {/* <button onClick={() => dispatch({ type: "reset" })}>Play Again</button> */}
    </>
  );
}

export default FinishScreen;
