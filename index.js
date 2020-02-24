const main = document.querySelector('main')
let data;

function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(gotData => {
    data = gotData;
    renderBooks(gotData)
  })
};

function renderBooks(gotData) {
  gotData.forEach(book => {
    const h1 = document.createElement('h1')
    const h3 = document.createElement('h3')
    h1.innerHTML = `<h3>Book Name: <h1>${book.name}</h1></h3>`
    h3.innerHTML = `<h3>Number of Pages: ${book.numberOfPages}</h3>`
    main.appendChild(h1)
    main.appendChild(h3)
  })
}

const eventFn = () => {
  console.log(event.target)
  event.target.style.color = 'blue'
}

fetchBooks()
main.addEventListener('mouseover', eventFn)
