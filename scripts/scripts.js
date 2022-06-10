let form = document.querySelector('form');
let titleInp = document.getElementById('title');
let authorInp = document.getElementById('author');
let pageInp = document.getElementById('pages');
let list = document.getElementById('book-list');

function addBook() {
  let title = titleInp.value;
  let author = authorInp.value;
  let pages = pageInp.value;
  let item =
  `
  <thead>
  <tr>
    <th>${title}</th>
    <th>${author}</th>
    <th>${pages}</th>
    <th><input type="checkbox"></th>
  </tr>
</thead>
`;
  
  list.insertAdjacentHTML('beforeend', item);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addBook();
})