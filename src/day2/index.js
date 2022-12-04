const EnumIThink = {
  X: "Rock",
  Y: "Paper",
  Z: "Scissors",
};

const EnumElfSaid = {
  X: "Loose",
  Y: "Draw",
  Z: "Win",
};

const Enum = {
  A: "Rock",
  B: "Paper",
  C: "Scissors",
  X: "Loose",
  Y: "Draw",
  Z: "Win",
  Rock: "Rock",
  Paper: "Paper",
  Scissors: "Scissors",
  Loose: "Loose",
  Draw: "Draw",
  Win: "Win",
};

const score = {
  Rock: 1,
  Paper: 2,
  Scissors: 3,
  Loose: 0,
  Draw: 3,
  Win: 6,
};

function usingMyAssumption(rounds) {
  let result = 0;
  rounds.forEach((line) => {
    const player = line.split(" ")[0];
    const you = line.split(" ")[1];

    // Win results
    if (Enum[player] === Enum.Rock && EnumIThink[you] === Enum.Paper) {
      result += score.Paper + score.Win;
    }

    if (Enum[player] === Enum.Scissors && EnumIThink[you] === Enum.Rock) {
      result += score.Rock + score.Win;
    }

    if (Enum[player] === Enum.Paper && EnumIThink[you] === Enum.Scissors) {
      result += score.Scissors + score.Win;
    }

    // Loose results
    if (Enum[player] === Enum.Paper && EnumIThink[you] === Enum.Rock) {
      result += score.Rock + score.Loose;
    }

    if (Enum[player] === Enum.Scissors && EnumIThink[you] === Enum.Paper) {
      result += score.Paper + score.Loose;
    }

    if (Enum[player] === Enum.Rock && EnumIThink[you] === Enum.Scissors) {
      result += score.Scissors + score.Loose;
    }

    // Draw results
    if (Enum[player] === Enum.Scissors && EnumIThink[you] === Enum.Scissors) {
      result += score.Scissors + score.Draw;
    }

    if (Enum[player] === Enum.Rock && EnumIThink[you] === Enum.Rock) {
      result += score.Rock + score.Draw;
    }

    if (Enum[player] === Enum.Paper && EnumIThink[you] === Enum.Paper) {
      result += score.Paper + score.Draw;
    }
  });

  return result;
}

function likeElfSaid(rounds) {
  let result = 0;
  rounds.forEach((line) => {
    const player = line.split(" ")[0];
    const you = line.split(" ")[1];

    // Win results
    if (Enum[player] === Enum.Rock && EnumElfSaid[you] === Enum.Win) {
      result += score.Paper + score.Win;
    }

    if (Enum[player] === Enum.Scissors && EnumElfSaid[you] === Enum.Win) {
      result += score.Rock + score.Win;
    }

    if (Enum[player] === Enum.Paper && EnumElfSaid[you] === Enum.Win) {
      result += score.Scissors + score.Win;
    }

    // Loose results
    if (Enum[player] === Enum.Paper && EnumElfSaid[you] === Enum.Loose) {
      result += score.Rock + score.Loose;
    }

    if (Enum[player] === Enum.Scissors && EnumElfSaid[you] === Enum.Loose) {
      result += score.Paper + score.Loose;
    }

    if (Enum[player] === Enum.Rock && EnumElfSaid[you] === Enum.Loose) {
      result += score.Scissors + score.Loose;
    }

    // Draw results
    if (Enum[player] === Enum.Scissors && EnumElfSaid[you] === Enum.Draw) {
      result += score.Scissors + score.Draw;
    }

    if (Enum[player] === Enum.Rock && EnumElfSaid[you] === Enum.Draw) {
      result += score.Rock + score.Draw;
    }

    if (Enum[player] === Enum.Paper && EnumElfSaid[you] === Enum.Draw) {
      result += score.Paper + score.Draw;
    }
  });

  return result;
}

module.exports = {
  usingMyAssumption,
  likeElfSaid,
};
