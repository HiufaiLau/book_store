fetch("https://api.myjson.com/bins/udbm5")
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    var data = myJson.books;
    console.log(data);
//    showBooks(data);
//    bookInfo(data);
      printBooks(data)
//    moreInfo(data);
  });
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
