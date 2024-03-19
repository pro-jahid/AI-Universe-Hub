const loadData = async () =>{
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json();
    displayData(data.data.tools);
}

const displayData = Phones =>{

    const phoneContainer = document.getElementById('Phone-container');
    Phones.forEach(element=> {
        const phonediv = document.createElement('div');
        phonediv.classList.add('col');
        const featuresDiv = document.createElement('ol');
        featuresDiv.classList.add('ps-3')

        for (let i = 0; i < element.features.length; i++) {
            const li = document.createElement('li');
            li.textContent = element.features[i]; 
            featuresDiv.appendChild(li); 
        }
        phonediv.innerHTML = `
        <div class="card h-100 p-3">
              <img src="${element.image}" class="card-img-top rounded-3" alt="...">
              <div class="card-body p-0">
                <h5 class="card-title fs-3 pb-2 ps-0">Features</h5>
                
               
              </div>
              <div class="card-footer border-top border-2 bg-transparent px-0 pb-0 pt-3">
                <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex flex-column gap-3">
                    <h2 class="mb-0 fs-4 fw-semibold">${element.name}</h2>
                    <div class="d-flex align-content-center gap-2">
                        <i class="fa-solid fa-calendar-days text-secondary fa-fw fs-5"></i>
                        <p class="mb-0">${element.published_in}</p>
                    </div>
                </div>
                <button class="btn rounded-circle  details-btn">
                    <img src="./img/Frame.png" alt="">
                </button>
                </div>
            </div>
            </div>
        `;

        phonediv.querySelector('.card-body').appendChild(featuresDiv);
        phoneContainer.appendChild(phonediv);
        
    });
}

loadData();