const kanjiElement = document.querySelector("#kanji");
const countSelect = document.querySelector("#count-select");
const drawButton = document.querySelector("#draw-button");
const kanjiList = [...window.KANJI_DATA];

function showRandomKanji() {
  const count = Number(countSelect.value);
  const result = Array.from({ length: count }, () => {
    const index = Math.floor(Math.random() * kanjiList.length);
    return kanjiList[index];
  }).join("");

  kanjiElement.dataset.count = count;
  kanjiElement.dataset.state = "ready";
  kanjiElement.replaceChildren(...[...result].map((character) => {
    const characterElement = document.createElement("span");
    characterElement.className = "kanji-character";
    characterElement.textContent = character;
    return characterElement;
  }));
}

function initialize() {
  if (kanjiList.length > 0) {
    countSelect.disabled = false;
    drawButton.disabled = false;
    showRandomKanji();
    return;
  }

  kanjiElement.dataset.state = "error";
  kanjiElement.textContent = "漢字データが見つかりません。";
}

countSelect.addEventListener("change", showRandomKanji);
drawButton.addEventListener("click", showRandomKanji);
initialize();
