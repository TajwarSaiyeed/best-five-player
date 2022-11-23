function selectPlayer(element) {
  const playerName = element.parentNode.children[1].innerText;

  const ol = document.getElementById("selectedV");
  if (ol.children.length < 5) {
    const li = document.createElement("li");
    li.innerText = playerName;
    ol.appendChild(li);

    const selectButton = element;
    selectButton.setAttribute("disabled", "");
    selectButton.style.backgroundColor = "#9696da";
  } else {
    alert("You can select only five player");
  }
}
document.getElementById("calculate").addEventListener("click", function () {
  const perPlayerString = document.getElementById("per-player");
  const perPlayerAmount = perPlayerString.value;
  const validate = perPlayerAmount * 1;
  if (isNaN(validate) || perPlayerAmount === "") {
    alert("PLease Enter Right Emount !!");
    return;
  } else {
    const perPlayer = parseFloat(perPlayerAmount);
    const ol = document.getElementById("selectedV");
    const result = ol.children.length * perPlayer;

    const expenses = document.getElementById("expenses");
    expenses.innerText = result;
    expenses.classList.add("text-primary");
    return expenses;
  }
});

function getManagerCoach(eldmentId) {
  const getString = document.getElementById(eldmentId);
  const getAmount = getString.value;
  const validate = getAmount * 1;
  if (isNaN(validate) || getAmount === "") {
    alert(`Please Enter the Correct Value of ${eldmentId}`);
    getString.value = "";
    return;
  } else {
    const returnNum = parseFloat(getAmount);
    return returnNum;
  }
}

document.getElementById("total").addEventListener("click", function () {
  const manager = getManagerCoach("manager");
  const coach = getManagerCoach("coach");

  const total = (parseFloat(expenses.innerText) + manager + coach).toFixed(2);
  if (isNaN(total)) return;
  else {
    const totalFinal = document.getElementById("total-final");
    totalFinal.innerText = total;
  }
});
