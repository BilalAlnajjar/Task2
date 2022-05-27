const welcomePrag = document.getElementById("welcomeParagraph");
const btnUpdate = document.getElementById("btnUpdate");

nameInput.addEventListener("change",() => {
  const nameInput = document.getElementById('nameInput').value;
  let helloName = document.getElementById("helloName");
  helloName.innerHTML = nameInput;
})

btnUpdate.addEventListener("click",() => {
  const inputColor = document.getElementById("inputColor").value;
  const fontSize = document.getElementById("inputNumber").value;
  updateColor(inputColor,fontSize);
})

function updateColor (newColor,fontSize) {
  welcomePrag.style.color = newColor;
  welcomePrag.style.fontSize = fontSize+"px";

}



