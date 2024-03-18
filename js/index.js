const loadData = async () =>{
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json();
    displayData(data.data.tools);
}

const displayData = Phones =>{
    const phoneContainer = document.getElementById('Phone-container');
    Phones.forEach(element => {
        const phonediv = document.createElement('div');
        phonediv.classList.add('col');
        phonediv.innerHTML = `
        <div class="card h-100 p-3">
              <img src="${element.image}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
        `;
        phoneContainer.appendChild(phonediv)
    });
}

loadData(6);