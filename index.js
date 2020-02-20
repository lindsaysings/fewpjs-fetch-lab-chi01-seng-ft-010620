function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => renderBooks(json));

}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h1 = document.createElement('h1')
    const h3 = document.createElement('h3')
    h1.innerHTML = `<h3>Book Name: <h1>${book.name}</h1></h3>`
    h3.innerHTML = `<h3>Number of Pages: ${book.numberOfPages}</h3>`
    main.appendChild(h1)
    main.appendChild(h3)
  })
}

function clickListener(json) {
  const main = document.querySelector('main')
    main.addEventListener('click', function(event) {
      
    })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
  clickListener()
})
