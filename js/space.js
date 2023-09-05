const URL = 'https://images-api.nasa.gov/search?q=';

const input = document.getElementById('inputBuscar');
const searchBtn = document.getElementById('btnBuscar');
const container = document.getElementById('contenedor');

let data = {};

const getJSONData = async () => {
  const data = fetch(URL + input.value)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Something went wrong');
      }
    })
    .then((data) => data.collection.items)
    .catch((err) => console.log(err));
  return data;
};

const showCards = (items) => {
  items.forEach((item) => {
    if (item.data[0].media_type == 'image') {
      const { title, description } = item.data[0];
      const image = item.links[0].href;

      const card = document.createElement('div');
      card.classList = 'card';
      container.appendChild(card);
      card.innerHTML = `
          <img class="card-img-top" src="${image}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${description}</p>
          </div>
      `;
    }
  });
};

const clearCards = () => {
  if (document.querySelectorAll('.card')) {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => card.remove());
  }
};

searchBtn.addEventListener('click', async (e) => {
  e.stopPropagation();
  clearCards();
  data = await getJSONData();
  if (data != undefined) {
    showCards(data);
  }
});
