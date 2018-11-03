function getSearch() {
 console.log('hello');
 let searchtxt = document.getElementById("myInput").value;

 console.log(searchtxt);
 fetch("https://api.myjson.com/bins/udbm5")
  .then(function (response) {
   return response.json();
  })
  .then(function (myJson) {
   let data = myJson.books;
   let template = "";
   let filterTheBook = data.filter(book => book.titulo.toLowerCase().includes(searchtxt.toLowerCase()));
   console.log(filterTheBook);
   filterTheBook.forEach((oneBook, index) => {
    template += //template +
     `
    <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
      	
		<div class="flipper d-flex flex-wrap  align-items-center justify-content-start">
		
			<div class="front">
                  <img src="${ oneBook.portada}" height="400" width="300"> 
			</div>
			<div class="back">
                   <h1 class="title">${oneBook.titulo}</h1>
                   <p>${oneBook.descripcion}</p>
                   
                    <button id="${index}" type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#exampleModal" data-link="${oneBook.detalle}" onClick="putImgInModal(event)">More Info</button>
			</div>
		</div>
		
	</div>
    `
   })

   document.getElementById('books').innerHTML = template;
  })
}
getSearch();

function putImgInModal(event){
 document.querySelector('#modal-body').innerHTML="";
 console.log(event.target.id);
 console.log(event.target.dataset.link);
 var link = event.target.dataset.link;
 console.log("" + link)
// link.innerHTML="";
 let img = document.createElement('img');
 img.setAttribute("src", link);
 console.log(img)
 
document.querySelector('#modal-body').appendChild(img);

 
//  document.querySelector('#modal-body').innerHTML="";
//img.innerHTML="";
// event.forEach(function (book) {;
//  
// let index = book.target.id;
// let img = document.createElement('img').setAttribute('src', `${[index].detalle}`)
// document.querySelector('#modal-body').append(img);
// document.querySelector('#modal-body').innerHTML="";
//// let bookDetails =  document.getElementById('#modal-body').index[0];
// });
}


//showing the book images
//function showBooks(data) {
// data.forEach(function (book) {
//  var img = new Image();
//  img.src = book.portada;
//  img.setAttribute("class", "books-img");
//  img.setAttribute("alt", "books");
//  document.getElementById("img-container").appendChild(img);
//  console.log(img);
// });
//}

//
//book title and description  ,,  more info button
//function bookInfo(text) {
// var bookTitleDescription = document.getElementsByClassName("bookInformation")[0];
// console.log(bookTitleDescription);
// var items = text;
// for (var i = 0; i < items.length; i++) {
//
////  book title
//  var h = document.createElement("h2");
//  h.innerHTML = items[i].titulo;
//  bookTitleDescription.appendChild(h);
//
//  //book description
//  var p = document.createElement("p");
//  p.innerHTML = items[i].descripcion;
//  bookTitleDescription.appendChild(p);
//
//  link for more info 
//  var a = document.createElement("a");
//  a.href = items[i].detalle;
//  a.getAttribute("href");
//  a.innerText = "More Info"
//  bookTitleDescription.appendChild(a);
//  console.log(items);
// }
// showTheDetails(showOnebookDetail);
//}
//////
//////function showTheDetails(bookDetails) {
//////
////// //to filter the data
////// //var showOneBookDetail=[];
////// var showOneBookDetail = myBook.filter(oneBook => bookDetails.includes(oneBook.portada))
//////console.log(showOneBookDetail);
//////}
//
//
////searching book 
//function myFunction() {
// var search = document.getElementById("myInput");
// for (var i = 0; i < items.length; i++) {
//  document.getElementsByClassName("bookInformation")[0];
//  console.log(search);
// }
//}
//function changeEventHandler() {
// 
// var newTable = myMembers.filter(oneMember => box.includes(oneMember.party) && opt == oneMember.state)
// return  bookInfo(data);
// 
//}
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







//function slideShow() {
//
// var slideIndex = 1;
// showSlides(slideIndex);
//
// // Next/previous controls
// function plusSlides(n) {
//  showSlides(slideIndex += n);
// }
//
// function currentSlide(n) {
//  showSlides(slideIndex = n);
// }
//
// function showSlides(n) {
//  var i;
//  var slides = document.getElementsByClassName("mySlides");
//  if (n > slides.length) {
//   slideIndex = 1
//  }
//  if (n < 1) {
//   slideIndex = slides.length
//  }
//  for (i = 0; i < slides.length; i++) {
//   slides[i].style.display = "none";
//  }
//  for (i = 0; i < dots.length; i++) {
//   dots[i].className = dots[i].className.replace(" active", "");
//  }
//  slides[slideIndex - 1].style.display = "block";
//  dots[slideIndex - 1].className += " active";
// }
//}
