const URL = 'https://images-api.nasa.gov/search?q=';

const input = document.getElementById('inputBuscar');
const searchBtn = document.getElementById('btnBuscar');
const container = document.getElementById('contenedor');

let data = {};

const getJSONData = async () => {
  const data = await fetch(URL + input.value)
    .then((res) => res.json())
    .then((data) => data.collection.items);
  return data;
};

const showCards = (items) => {
  items.forEach((item) => {
    console.log(item);
    if (data[0].media_type == 'image') {
      console.log(data[0].media_type);
    }
    // const { title, description } = item.data[0];
    // // let image = '';
    // // // for (const property in item) {
    // // //   image = item[property][0];
    // // //   // console.log(`${property}: ${item[property]}`);
    // // // }
    // console.log(image);

    // const card = document.createElement('div');
    // card.classList = 'card';
    // container.appendChild(card);
    // card.innerHTML = `
    //   <img class="card-img-top" src="${image}" alt="Card image cap">
    //   <div class="card-body">
    //     <h5 class="card-title">${title}</h5>
    //     <p class="card-text">${description}</p>
    //   </div>
    // `;
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
  data.forEach((item) => {});
  showCards(data);
});
