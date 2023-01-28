async function getBookInfo(params) {
  let url =
    "https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyBmhrqwDDNQgZ2i4LaRnQDa4Nz1JDzG_xI";

  let data = await fetch(url);

  let commits = await data.json(); // читаем ответ в формате JSON

  console.log(commits);
}
