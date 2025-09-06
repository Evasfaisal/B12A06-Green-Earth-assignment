const categorieContainer = document.getElementById("CategorieContainer")



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

 
    <li id="${cat.id}" class="w-[250px] text-2xl hover:bg-green-900 p-3 hover:text-white rounded-lg mt-2" >${cat.category_name}</li>
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
    }
})








loadcatagory()

