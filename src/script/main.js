// import * as pako from "https://cdnjs.cloudflare.com/ajax/libs/pako/2.1.0/pako.min.js";

const inputForm = document.getElementById("factorio-form");
const bpForm = new FormData(inputForm);

const inputBPStr = document.getElementById("raw-bp");
const inputConfigStr = document.getElementById("config-json");

// const inputBPFile = document.getElementById("raw-bp-file");
// const inputConfigFile = document.getElementById("config-json-file");

const errorElement = document.getElementById("errors");

function decode() {
  alert("decoding");
  try {
    const bpForm = new FormData(document.querySelector("factorio-form"));
    console.log(bpForm);
    const bpStr = document.getElementById("raw-bp");
    console.log(bpStr);
  } catch (err) {
    console.log(err);
  }
}

inputForm.addEventListener("submit", (e) => {
  console.log({ inputForm, bpForm });
  const messages = [];
  if (inputBPStr.value === "" || inputBPStr.value === null) {
    console.log("no bp found");
    messages.push("blueprint");
  }

  if (inputConfigStr.value === "" || inputConfigStr.value === null) {
    console.log("no config found");
    messages.push("config");
  }
  if (messages.length > 0) {
    errorElement.innerText = "Please supply " + messages.join(" & ");
  }
  e.preventDefault();
});
