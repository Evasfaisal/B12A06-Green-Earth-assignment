const categorieContainer = document.getElementById("CategorieContainer")
const plantsContainer = document.getElementById("plantsContainer")



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
    //  console.log(e.target.id)
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
    console.log(plants
)
    plantsContainer.innerHTML+=`
    
           <div class="bg-white rounded-2xl shadow p-4">
                <!-- Image -->
              <div class="h-[200px] bg-gray-200 rounded-lg mb-4 overflow-hidden">
    <img src="${plants.image}" class="w-full h-full object-cover">
</div>


                <!-- Title -->
                <h4 class="font-semibold text-lg mb-1">${plants.name}</h4>

                <!-- Description -->
                <p class="text-sm text-gray-600 mb-4">
                    A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green
                </p>

                <!-- Category + Price -->
                <div class="flex justify-between items-center mb-4">
                    <span class="bg-green-100 text-green-600 text-sm px-3 py-1 rounded-full">Fruit Tree</span>
                    <span class="font-semibold">${plants.price}</span>
                </div>

                <!-- Button -->
                <button class="bg-green-700 hover:bg-green-800 text-white w-full py-3 rounded-full font-medium">
                    Add to Cart
                </button>
            </div>

    `
})

}


loadcatagory()












//     < div class="bg-white rounded-2xl shadow p-4 flex flex-col" >
//     < !--Image -->
//     <div class="h-52 bg-gray-200 rounded-lg mb-4 overflow-hidden">
//         <img src="${plants.image}" class="w-full h-full object-cover rounded-lg">
//     </div>

//     <!--Title -->
//     <h4 class="font-semibold text-lg mb-1">Mango Tree</h4>

//     <!--Description -->
//     <p class="text-sm text-gray-600 mb-4">
//         A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green
//     </p>

//     <!--Category + Price-- >
//     <div class="flex justify-between items-center mb-4">
//         <span class="bg-green-100 text-green-600 text-sm px-3 py-1 rounded-full">Fruit Tree</span>
//         <span class="font-semibold">৳ 500</span>
//     </div>

//     <!--Button -->
//     <button class="bg-green-700 hover:bg-green-800 text-white w-full py-3 rounded-full font-medium">
//         Add to Cart
//     </button>
// </div >
