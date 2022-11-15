// import * as pako from "https://cdnjs.cloudflare.com/ajax/libs/pako/2.1.0/pako.min.js";

function decode() {
  alert('decoding')
  try {
    const bpForm = new FormData(document.querySelector("factorio-form"));
    console.log(bpForm);
    const bpStr = document.getElementById("raw-bp");
    console.log(bpStr);
  } catch (err) {
    console.log(err);
  }
}
