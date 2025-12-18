const quotes = [
  "Whatever you lose, you'll find it again.",
  "Push through the pain. Giving up hurts more.",
  "If you don't take risks, you can't create a future.",
  "No matter how deep the night, it always turns to day.",
  "A real ninja never gives up.",
  "If you don't fight, you can't win.",
  "Your life is your own. Don't let anyone tell you otherwise.",
  "The moment you think of giving up, remember why you started.",
  "Whatever you decide to do, make sure it makes you happy.",
  "Hard work beats talent when talent doesn't work hard.",
  "Every soul has its dark.",
  "You died.",
  "Seek strength. The rest will follow.",
  "Failure is not defeat until you stop trying.",
  "Every journey has its final day. Don't rush.",
  "Hope is what makes us strong.",
  "In the face of death, we rise again.",
  "Stand up. Fight. And fall again.",
  "Legends are not born. They are forged through suffering.",
  "No victory without sacrifice.",
];

const mainEl = document.querySelector("main");
const createBtnEl = document.getElementById("createBtn");

createBtnEl.addEventListener("click", function () {
  const h1El = document.createElement("h1");
  h1El.classList.add("quote");
  const text = quotes[Math.floor(Math.random() * quotes.length)];
  h1El.textContent = text;
  let min = 25;
  let max = 100;
  let top = (Math.random() * 100).toFixed(2);
  let left = (Math.random() * 100).toFixed(2);
  let deg = Math.floor(Math.random() * 360);
  let c1 = Math.floor(Math.random() * ((max - min) + 1)) + min;
  let c2 = Math.floor(Math.random() * ((max - min) + 1)) + min;
  let c3 = Math.floor(Math.random() * ((max - min) + 1)) + min;
  let scale = (Math.random() * 3).toFixed(2) + 1;
  let fontFamily = Math.floor(Math.random() * 4);
  Object.assign(h1El.style, {
    color: `#ffffff`,
    position: `absolute`,
    zIndex: 10,
    top: `${top}%`,
    left: `${left}%`,
    scale: `${scale}`,
    rotate: `${deg}deg`,
    fontFamily: `var(--font-${fontFamily})`,
    textShadow: `1px 1px 1px rgba(${c1}, ${c2}, ${c3}, 1),
                    -1px -1px 1px rgba(${c3}, ${c2}, ${c1}, 1)`,
  });
  mainEl.appendChild(h1El);

  setTimeout(function() {
    mainEl.removeChild(h1El);
  }, 10000)
});