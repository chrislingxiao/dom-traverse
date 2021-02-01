const nodes = [];
function getNodes(element, className) {
  if (element.classList && element.classList.contains(className)) {
    nodes.push(element);
  }

  if (element.childNodes) {
    [...element.childNodes].forEach((node) => {
      getNodes(node, className);
    });
  }
}

const body = document.querySelector("body");

getNodes(body, "test");

const result = document.querySelector(".result");

var content = document.createElement("P"); // Create a <p> node
content.innerHTML = nodes.map((node) => node.tagName).join(", ");

result.appendChild(content);
