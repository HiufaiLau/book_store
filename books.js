//showing the book images
function showBooks(data) {
 data.forEach(function (book) {
  var img = new Image();
  img.src = book.portada;
  img.setAttribute("class", "books-img");
  img.setAttribute("alt", "books");
  document.getElementById("img-container").appendChild(img);
  console.log(img);
 });
}


//book title and description  ,,  more info button
function bookInfo(text) {
 var bookTitleDescription = document.getElementsByClassName("bookInformation")[0];
 console.log(bookTitleDescription);
 var items = text;
 for (var i = 0; i < items.length; i++) {
  
  //book title
  var h = document.createElement("h2");
  h.innerHTML = items[i].titulo;
  bookTitleDescription.appendChild(h);
  
  //book description
  var p = document.createElement("p");
  p.innerHTML = items[i].descripcion;
  bookTitleDescription.appendChild(p);
  
  //link for more info 
  var a = document.createElement("a");
  a.href = items[i].detalle;
 a.getAttribute("href");
  a.innerText="More Info"
 bookTitleDescription.appendChild(a);
  console.log(items);
 }
}
//function moreInfo(info) {
// info.forEach(function (book) {
//  console.log(info);
//  var a = new link();
//  
//  a.href = book.detalle;
//  a.setAttribute("href", "book.detalle");
//  a.innerText="More Info"
//  document.getElementById("bookInformation").appendChild(a);
//  console.log(a);
// });
//}
