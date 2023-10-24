function calcBalance(wins, losses) {
  const balance = wins - losses;
  const level = calcLevel(balance);
  return showMessage(balance, level);
}

function calcLevel(balance) {
  if (balance < 10) {
    return "Iron";
  } else if (balance >= 11 && balance <= 20) {
    return "Bronze";
  } else if (balance >= 21 && balance <= 50) {
    return "Silver";
  } else if (balance >= 21 && balance <= 80) {
    return "Gold";
  } else if (balance >= 81 && balance <= 90) {
    return "Diamond";
  } else if (balance >= 91 && balance <= 100) {
    return "Legendary";
  } else if (balance >= 101) {
    return "Immortal";
  }
}

function showMessage(balance, level) {
  return console.log(
    `Your Hero has a balance of ${balance} wins and a level ${level} rank.`
  );
}

calcBalance(55, 5);