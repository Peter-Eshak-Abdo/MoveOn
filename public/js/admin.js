//card 1
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
button1.addEventListener("click", () => (button2.disabled = false));
function changeLabel1() {
  const button = document.getElementById("button1");
  button.innerHTML = "Confirmed";
}
function changeLabel() {
  const button = document.getElementById("button11");
  button.innerHTML = "cancelled";
}
button1.addEventListener("click", () => (button11.disabled = true));
button11.addEventListener("click", () => (button1.disabled = true));
//card 2
const button21 = document.getElementById("button21");
const button22 = document.getElementById("button22");
button21.addEventListener("click", () => (button22.disabled = false));
function changeLabel21() {
  const button = document.getElementById("button21");
  button.innerHTML = "Confirmed";
}
function changeLabel2() {
  const button = document.getElementById("button211");
  button.innerHTML = "cancelled";
}
button21.addEventListener("click", () => (button211.disabled = true));
button211.addEventListener("click", () => (button21.disabled = true));
//card 3
const button31 = document.getElementById("button31");
const button32 = document.getElementById("button32");
button31.addEventListener("click", () => (button32.disabled = false));
function changeLabel31() {
  const button = document.getElementById("button31");
  button.innerHTML = "Confirmed";
}
function changeLabel3() {
  const button = document.getElementById("button311");
  button.innerHTML = "cancelled";
}
button31.addEventListener("click", () => (button311.disabled = true));
button311.addEventListener("click", () => (button31.disabled = true));
//card 4
const button41 = document.getElementById("button41");
const button42 = document.getElementById("button42");
button41.addEventListener("click", () => (button42.disabled = false));
function changeLabel41() {
  const button = document.getElementById("button41");
  button.innerHTML = "Confirmed";
}
function changeLabel4() {
  const button = document.getElementById("button411");
  button.innerHTML = "cancelled";
}
button41.addEventListener("click", () => (button411.disabled = true));
button411.addEventListener("click", () => (button41.disabled = true));

