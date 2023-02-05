async function searchBookData(
  request,
  categorie,
  sorting,
  index,
  check,
  bookData
) {
  let url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${request
    .split(" ")
    .join(
      "+"
    )}${categorie}&orderBy=${sorting}&maxResults=20&startIndex=${index}&key=AIzaSyBmhrqwDDNQgZ2i4LaRnQDa4Nz1JDzG_xI`;
  console.log(request, categorie, sorting);
  console.log(url);
  let data = await fetch(url);
  let commits = await data.json();

  console.log(1, index);
  if (commits.items === undefined && check !== true) {
    return [[], 20];
  } else {
    if (check === true) {
      console.log("TT", [...bookData.items, ...commits.items]);
      commits.items = [...bookData.items, ...commits.items];

      return [commits, index + 20];
    } else {
      return [commits, 20];
    }
  }
}
export default searchBookData;
