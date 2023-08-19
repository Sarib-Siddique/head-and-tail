var player_1 = prompt("Enter Heads Name");
var player_2 = prompt("Enter Tails Name");
var toss = Math.random() * 2;
var ch = Math.floor(toss);

if (ch == 0) {
  document.write(player_1 + " " + "Heads Win");
} else {
  document.write(player_2 + " " + "Heads Win");
}
