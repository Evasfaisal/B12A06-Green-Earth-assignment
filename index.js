const categorieContainer = document.getElementById("CategorieContainer");
const plantsContainer = document.getElementById("plantsContainer");
const cartContainer = document.getElementById('cartContainer');
const cartList = cartContainer.querySelector('ul');
const totalPriceEl = cartContainer.querySelector('.total-price');
const spinner = document.getElementById('spinner');
let totalPrice = 0;


const loadCategory = () => {
    spinner.classList.remove('hidden');
    fetch('https://openapi.programming-hero.com/api/categories')
        .then(res => res.json())
        .then(data => {
            const categories = data.categories;
            showCategories(categories);
        })
        .catch(err => console.error(err));
}

const showCategories = (categories) => {
    categorieContainer.innerHTML = '';
    categories.forEach(cat => {
        categorieContainer.innerHTML += `
            <li id="${cat.id}" class="w-full text-xl hover:bg-green-900 p-3 hover:text-white rounded-lg">
                ${cat.category_name}
            </li>
        `;
    });
    spinner.classList.add('hidden');
}

categorieContainer.addEventListener('click', (e) => {
    if (e.target.localName === "li") {
        const allLi = categorieContainer.querySelectorAll('li');
        allLi.forEach(li => li.classList.remove("bg-green-900", "text-white"));
        e.target.classList.add("bg-green-900", "text-white");

        loadPlantsByCategory(e.target.id);
    }
});

const loadPlantsByCategory = (fruitId) => {
    spinner.classList.remove('hidden');  
    fetch(`https://openapi.programming-hero.com/api/category/${fruitId}`)
        .then(res => res.json())
        .then(data => {
            const plants =  data.plants;
            showPlantsByCatagory(plants);
            spinner.classList.add('hidden'); 

        })
        .catch(err => console.error(err))
      
}

const loadAllPlants = () => {
    spinner.classList.remove('hidden');
    fetch('https://openapi.programming-hero.com/api/plants')
        .then(res => res.json())
        .then(data => {
            showPlantsByCatagory(data.plants);
            spinner.classList.add('hidden');

        })
    
};

document.addEventListener('DOMContentLoaded', () => {
    loadCategory(); 
    loadAllPlants(); 
});


const showPlantsByCatagory = (plants) => {
    plantsContainer.innerHTML = '';
    plants.forEach(plant => {
        plantsContainer.innerHTML += `
            <div class="bg-white rounded-2xl shadow p-4">
                <div class="h-[200px] bg-gray-200 rounded-lg mb-4 overflow-hidden">
                    <img src="${plant.image}" class="w-full h-full object-cover">
                </div>
                <h4 id="${plant.id}" class="font-semibold text-lg mb-1">${plant.name}</h4>
 <!-- Description -->
                <p class="text-sm text-gray-600 mb-4 h-[100px]">${plant.description}
                </p>


                <div class="flex justify-between items-center mb-4">
                    <span class="bg-green-100 text-green-600 text-sm px-3 py-1 rounded-full">Fruit Tree</span>
                    <span class="plant-price font-semibold">${plant.price}</span>
                </div>
                <button class="btn bg-green-700 hover:bg-green-800 text-white w-full  py-3 rounded-full font-medium">
                    Add to Cart
                </button>
            </div>
        `;
    });
}

plantsContainer.addEventListener('click', (e) => {
    if (e.target.innerText === 'Add to Cart') {
        const card = e.target.parentNode;
        const name = card.querySelector('h4').innerText;
        const price = parseFloat(card.querySelector('.plant-price').innerText);

        const itemDiv = document.createElement('div');
        itemDiv.className = 'bg-green-100 p-3 rounded-lg shadow-sm';

        const leftSide = document.createElement('div');
        leftSide.className = 'flex flex-col';
        const nameEl = document.createElement('span');
        nameEl.className = 'font-bold text-gray-800';
        nameEl.textContent = name;
        const priceEl = document.createElement('span');
        priceEl.className = 'text-gray-600';
        priceEl.textContent = `$ ${price}`;
        leftSide.appendChild(nameEl);
        leftSide.appendChild(priceEl);

        const removeBtn = document.createElement('button');
        removeBtn.textContent = '✖️';
        removeBtn.className = 'text-red-600 text-lg hover:text-red-800';
        removeBtn.addEventListener('click', () => {
            itemDiv.remove();
            totalPrice -= price;
            totalPriceEl.textContent = `$ ${totalPrice.toFixed(2)}`;
        });

        const flexContainer = document.createElement('div');
        flexContainer.className = 'flex justify-between items-center';
        flexContainer.appendChild(leftSide);
        flexContainer.appendChild(removeBtn);

        itemDiv.appendChild(flexContainer);
        cartList.appendChild(itemDiv);

        totalPrice += price;
        totalPriceEl.textContent = `$ ${totalPrice.toFixed(0)}`;

        alert(`${name} tree has been added to the cart`);
    }
})

plantsContainer.addEventListener('click', (e) => {


    if (e.target.tagName === 'H4') {
        const plantId = e.target.id;
        fetch(`https://openapi.programming-hero.com/api/plants`) 
            .then(res => res.json())
            .then(data => {
                const tree = data.plants;
              const  plant = tree.find(p => p.id == plantId);
               

                document.getElementById('modalImage').src = plant.image;
                document.getElementById('modalTitle').textContent = plant.name;
                document.getElementById('modalCategory').textContent = plant.category;
                document.getElementById('modalPrice').textContent = `$ ${plant.price}`;
                document.getElementById('modalDesc').textContent = plant.description;

                document.getElementById('my_modal_5').showModal();

            });
    }

    })
loadCategory();
