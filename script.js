function animals(animal) {
  let n = prompt("количество животных");
  document.write("<table>");
  document.write("<tr>");
  for (let i = 1; i < n; i++) {
    if (i < n / 2 && n % 2 == 0) {
      document.write(
        "<td><img src='img/" + animal + ".jpg' width='90px'></td>"
      );
    } else if (i > n / 2 && n % 2 == 0) {
      document.write(
        "<td><img src='img/" + animal + 1 + ".jpg' width='90px'></td>"
      );
    } else {
      document.write(
        "<td><img src='img/" + animal + ".jpg' width='90px'></td>"
      );
    }

    if (i % 10 == 0) {
      document.write("</tr>");
    }
  }
}
document.write("</table>");
let animal = prompt("Введите cat или dog");
animals(animal);
