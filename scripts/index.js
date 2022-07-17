document.addEventListener("DOMContentLoaded", () => {
  const result = document.querySelector(".result");
  const js = document.querySelector(".js-text");
  const css = document.querySelector(".css-text");
  const html = document.querySelector(".html-text");
  const run = document.querySelector(".run");

  let htmlCode, cssCode, jsCode;
  let javascript;

  html.onkeyup = function (event) {
    htmlCode = event.target.value;
  };

  css.onkeyup = function (event) {
    cssCode = event.target.value;
  };

  js.onkeyup = function (event) {
    jsCode = event.target.value;
  };

  run.onclick = function () {
    createHtml();
    createCss();
    createJs();
  };

  function createHtml() {
    if (htmlCode != undefined) return (result.innerHTML = htmlCode);
  }

  function createCss() {
    let style = document.createElement("style");
    style.innerText = cssCode;
    result.append(style);
  }

  function createJs() {
    javascript = document.createElement("script");
    javascript.type = "text/javascript";
    if (jsCode) {
      javascript.innerText = `try {  ${jsCode} ${console.clear()}  } catch (error) { throw error; }`;
    } else {
      result.textContent = "";
    }
  }
});
