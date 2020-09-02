const screen = document.querySelector(".screen");

console.log(screen);

const row = document.querySelectorAll(".row:not(.screen)");

let isScreenEmpty = true;
let value1;
let value2;

for (let i = 0; i < row.length; i++) {
  row[i].addEventListener(
    "click",
    function(e) {
      switch (e.target.textContent) {
        case "C":
          clearScreen();
          break;
        case "/":
          screenDisplay("division", e.target.textContent);

        case "*":
          screenDisplay("multiplication", e.target.textContent);

        case "+":
          screenDisplay("addition", e.target.textContent);

        case "-":
          screenDisplay("substraction", e.target.textContent);

        case "=":
          screen.textContent = performComputation();
          break;
        default:
          if (isScreenEmpty) {
            console.log("Here");
            screen.textContent = String(e.target.textContent);
            isScreenEmpty = false;
          } else {
            screen.textContent += String(e.target.textContent);
          }
      }
    },
    true
  );
}

function clearScreen() {
  screen.textContent = 0;
  value1 = 0;
  value2 = 0;
  isScreenEmpty = true;
}

function performComputation(f, x1, x2) {
  switch (f) {
    case "division":
      return x1 / x2;
    case "multiplication":
      return x1 * x2;
    case "substraction":
      return x1 - x2;
    case "addition":
      return x1 + x2;
  }
}

function screenDisplay(f, value) {
  if (isScreenEmpty) {
    screen.textContent = 0;
  } else {
    if (!value1) {
      len_current = screen.textContent.length;
      value1 = Number(screen.textContent.substring(0, len_current));
    } else {
      if (!value2) {
        value2 = Number(
          screen.textContent.substring(
            len_current + 1,
            screen.textContent.length
          )
        );
        flag = f;
        screen.textContent = String(performComputation(flag, value1, value2));
        value1 = Number(screen.textContent);
        value2 = 0;
      }
    }
    screen.textContent += value;
  }
}
