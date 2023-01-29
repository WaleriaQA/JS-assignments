Enter here https://www.worldometers.info/coronavirus/
Go to DevTools
Copy and paste the code below into the Console

let total = document.getElementsByClassName("maincounter-number")[0].innerText;
let totalNum = Number(total.replace(/,/g, ""));

let deaths = document.getElementsByClassName("maincounter-number")[1].innerText;
let deathsNum = Number(deaths.replace(/,/g, ""));

let recovered =
  document.getElementsByClassName("maincounter-number")[2].innerText;
let recoveredNum = Number(recovered.replace(/,/g, ""));

document.getElementsByClassName("maincounter-number")[1].style.color = "black";

let noVac = () => {
  if (totalNum >= 1000) {
    totalNum -= 1111;
    recoveredNum += 1111;
    deathsNum -= 0;
  } else {
    totalNum -= 1;
    recoveredNum += 1;
    deathsNum = 0;
  }
  document.getElementsByClassName("maincounter-number")[0].innerText = totalNum;

  document.getElementsByClassName("maincounter-number")[1].innerText =
    deathsNum;

  document.getElementsByClassName("maincounter-number")[2].innerText =
    recoveredNum;

  if (document.getElementsByClassName("maincounter-number")[0].innerText <= 0) {
    stopFunction();
  }
};

let stopFunction = () => {
  clearInterval(clearInt);
};

let clearInt = setInterval(noVac, 1);
