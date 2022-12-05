import readTextFile from "../javascript/loadFile.js";

function handleName(txt) {
  var res = "";
  for (var x of txt) {
    if (x == "-") {
      res += " ";
    } else res += x;
  }
  return res;
}
function printText() {
  const text = readTextFile("./detail/order_1.txt");
  const arr = text.split(" ");
  arr[0] = handleName(arr[0]);
  arr[1] = handleName(arr[1]);
  console.log(arr);
}

printText();
