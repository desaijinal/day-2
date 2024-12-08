let pname = document.getElementById('pname');
let pdescription = document.getElementById('pdescription');
let pcatagory = document.getElementById('pcatagory');
let pPrice = document.getElementById('pPrice');

const button = document.getElementById('btn');

const cardbody = document.querySelector("#cards-container");

button.addEventListener('click', () => {
    
    let data = JSON.parse(localStorage.getItem('cards')) || [];
    
    data.push({
        pname: pname.value,
        pdescription: pdescription.value,
        pcatagory: pcatagory.value,
        pPrice: pPrice.value,
    });

    localStorage.setItem('cards', JSON.stringify(data));

    pname.value = '';
    pdescription.value = '';
    pcatagory.value = '';
    pPrice.value = '';

    loadData();
});


const loadData = () => {
    const cardsContainer = document.getElementById('cards-container');
    cardsContainer.innerHTML = ""; 

    const data = JSON.parse(localStorage.getItem('cards')) || [];

    data.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        
        cardElement.innerHTML = `
          <h3>${card.pname}</h3>
          <p>${card.pdescription}</p>
          <p>${card.pcatagory}</p>
          <h5>${card.pPrice}</h5>
        `;
        
        cardsContainer.appendChild(cardElement);
    });
};

loadData();
