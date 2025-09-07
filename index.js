const categorieContainer = document.getElementById("CategorieContainer")
const plantsContainer = document.getElementById("plantsContainer")
const cartContainer = document.getElementById('cartContainer')
const cartList = cartContainer.querySelector('ul');
const totalPriceEl = cartContainer.querySelector('.total-price');
let totalPrice = 0;


const loadcatagory = () => {
    fetch('https://openapi.programming-hero.com/api/categories')
        .then(res => res.json())
        .then(data => {
            const catagories = data.categories

            showcatagories(catagories)
        })
        .catch(err => {
        })
}
const showcatagories = (catagories) => {
    catagories.forEach(cat => {
        console.log(cat.category_name)
        categorieContainer.innerHTML += `
</div>
    <li id="${cat.id}" class="w-full text-xl hover:bg-green-900 p-3 hover:text-white rounded-lg" >${cat.category_name}</li>
`
    })
}
categorieContainer.addEventListener('click', (e)=> {
   const allLi=document.querySelectorAll('li')
   allLi.forEach(li =>{
       li.classList.remove("bg-green-900", "text-white")
   } )
    if (e.target.localName
=== "li" ){

        e.target.classList.add("bg-green-900", "text-white" )
        loadNameCategory(e.target.id)
    }
})


const loadNameCategory =(fruiteId)=>{
    fetch(`https://openapi.programming-hero.com/api/category/${fruiteId}`)

    .then(res => res.json())
    .then(data=>{
        
        showNameByCategory(data.plants)

    })
}


const showNameByCategory=(plants)=>{
plantsContainer.innerHTML=""
plants.forEach(plants=>{
    plantsContainer.innerHTML+=`
    
           <div class="bg-white rounded-2xl shadow p-4">
                <!-- Image -->
              <div class="h-[200px] bg-gray-200 rounded-lg mb-4 overflow-hidden">
    <img src="${plants.image}" class="w-full h-full object-cover">
</div>


                <!-- Title -->
                <h4 id="${plants.id}" class="font-semibold text-lg mb-1">${plants.name}</h4>

                <!-- Description -->
                <p class="text-sm text-gray-600 mb-4">
                    A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green
                </p>

                <!-- Category + Price -->
                <div class="flex justify-between items-center mb-4">
                    <span class="bg-green-100 text-green-600 text-sm px-3 py-1 rounded-full">Fruit Tree</span>
                    <span id="${plants.id}" class="plant-price font-semibold">${plants.price}</span>
                </div>

                <!-- Button -->
                <button class="btn bg-green-700 hover:bg-green-800 text-white w-full py-3 rounded-full font-medium">
                    Add to Cart
                </button>
            </div>

    `
})

}


plantsContainer.addEventListener('click',(e)=>{
    if (e.target.innerText === 'Add to Cart') {

        const card = e.target.parentNode;

        const name = card.querySelector('h4').innerText;
        const price = parseFloat(card.querySelector('.plant-price').innerText);
        
        // div wrapper for each cart item
        const itemDiv = document.createElement('div');
        itemDiv.className = 'bg-green-100 p-3 rounded-lg shadow-sm';

        // ul container
        const ul = document.createElement('ul');
        ul.className = 'flex justify-between items-center';

        // li with name & price
        const li = document.createElement('li');
        li.className = 'font-bold text-gray-800';
        li.textContent = `${name}  $ ${price}`;

        // Remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = '✖️';
        removeBtn.className = ' text-white px-3 py-1 rounded';
        removeBtn.addEventListener('click', () => {
            itemDiv.remove();
            totalPrice -= price;
            totalPriceEl.textContent = `${totalPrice.toFixed(2)}`;
        });

        // append all elements
        ul.appendChild(li);
        ul.appendChild(removeBtn);
        itemDiv.appendChild(ul);
        cartList.appendChild(itemDiv);

        // update total price
        totalPrice += price;
        totalPriceEl.textContent = `$ ${totalPrice.toFixed(2)}`;
        
        


        alert(`${name} tree has been added to the cart`);
    }
    
    
})


// // Name & Price
// const name = card.querySelector('h4').innerText;
// const price = parseFloat(card.querySelector('.plant-price').innerText);

// // Add to cart list
// const li = document.createElement('li');
// li.textContent = `${name} - $${price}`;
// cartList.appendChild(li);

// // Update total price
// totalPrice += price;
// totalPriceEl.textContent = `$${totalPrice.toFixed(2)}`;





loadcatagory()













