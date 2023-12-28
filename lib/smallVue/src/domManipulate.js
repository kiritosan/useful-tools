export default function domManipulate(sm) {
  document.querySelector("#counter").innerText = sm.get("state");
  document.querySelector("#text").innerText = sm.get("state");

  document.querySelector("#input").value = sm.get("inputValue");
  document.querySelector("#inputText").innerText = sm.get("inputValue");

  document.querySelector("#toggleColor").style.backgroundColor =
    sm.get("color");
}
