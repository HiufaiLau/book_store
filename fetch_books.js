function fetchData(){
fetch("https://api.myjson.com/bins/udbm5")
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    let data = myJson.books;
    console.log(data);
//    showBooks(data);
//    bookInfo(data);
      printBooks(data);
//  let arr = myFunction();
//  console.log(arr);

//    moreInfo(data);
  });
  }

//function myFunction() {
//  let books = document.getElementById("books").getElementsByTagName("h1");
//  console.log(books);
//  var arr = Array.prototype.slice.call( books );
//   
//}
//	.then(function (res) {
//		myMembers = res.results[0].members;
//		if (document.title == "House") {
//			showThisTable(myMembers);
//			changeOption(myMembers);
//		} else if (document.title == "House Attendance") {
//			numOfReps(myMembers);
//			missVote(myMembers);
//			showTable();
//		} else{
//			numOfReps(myMembers);
//			loyalVote(myMembers);
//			showTable();
//		}
//	})
