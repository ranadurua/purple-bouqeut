function checkName() {
  const name = document.getElementById("nameInput").value.trim().toUpperCase();
  if (name === "İLKER") {
    document.getElementById("nameScreen").classList.add("hidden");
    document.getElementById("bouquet").classList.remove("hidden");
  } else {
    alert("Bu çiçek senin değil 🌙");
  }
}

function openLetter() {
  document.getElementById("letter").classList.remove("hidden");
}
