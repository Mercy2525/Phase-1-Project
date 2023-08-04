//Ensures DOM has loaded fully before executing the code
document.addEventListener("DOMContentLoaded", ()=>{
    //get elements from HTML document
  let dataList= document.getElementById("datalistOptions")
  let productImages= document.getElementById("all-images")  
  let searchInput=document.querySelector("#search")
  let form= document.getElementById("form")
    
    //Fetch data from APIand display then in the DOM
  fetch("https://shop-ig.onrender.com/products")
    .then(res=>res.json())
    .then(data=>displayProducts(data))
    .catch(error=>console.log(error))
    
    //function to display product details
  function displayProducts(products){
    for( let product of products){
      const{id,title,price,image,description,stock}=product
        //Add product titles on the search option
        let searchOption=document.createElement("option")
        searchOption.innerHTML=`
        <option value="${title}"> 
        `
        dataList.appendChild(searchOption)
      
        // display images and their details
        let allImages=document.createElement("div")
        allImages.innerHTML=`
         <div class="card">
          <img class="card-img-top" src="${image}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${title}</h5>
              <p class="card-text">Ksh: ${price}</p>
              <p id="boughtStocks" class="card-text"><span id="boughtStock${id}">${stock}</span> items left</p>
              <p class="card-text">${description}</p>
              <button id='buyButton${id}'>Buy</button>
              <button id=deleteProduct${id}>Remove</button>
             </div>
            </div>`
        productImages.appendChild(allImages)

        //Add click Event listener to buy button
        let buyButton=allImages.querySelector(`#buyButton${id}`)
        buyButton.addEventListener("click", ()=>{
         let updateStock=document.querySelector(`#boughtStock${id}`)
         let currentStock=parseInt(updateStock.textContent)
          if (currentStock>0) {
            
            currentStock = parseInt(currentStock)-1
          }
          updateStock.textContent= `${currentStock}`
          updateBoughtStock(id, currentStock)

          if (currentStock === 0) {
            buyButton.setAttribute("disabled", true);
            buyButton.textContent = "Sold Out";
          }
       })

        //Add click Event listener to delete button for removing products
        let deleteButton=allImages.querySelector(`#deleteProduct${id}`)
        deleteButton.addEventListener("click", ()=>{
         let updateStock=document.querySelector(`#boughtStock${id}`)
         let currentStock=parseInt(updateStock.textContent)
          if (currentStock === 0) {
            allImages.textContent= ``
          deleteItem(id, currentStock)
          }
       })
    }

       //Add Input event listener on search list
       searchInput.addEventListener("input", () => {
        let searchTerm = searchInput.value.toLowerCase();
        let cards = document.querySelectorAll(".card");
        for (let card of cards) {
          let title = card.querySelector(".card-title").textContent.toLowerCase();
          if (title.includes(searchTerm)) {
            card.style.display= "block";
          } else {
            card.style.display = "none";
          }
        }  
        searchInput.value = ""
         })

   //Add more products
     //1.Submit Event listener to post more Products using POST
  form.addEventListener("submit", function(e){
       e.preventDefault()
        postProducts()
        form.reset()
    })

  //2. Function to add more products...POST Method
  function postProducts(){
    let newImage=document.getElementById("pic").value
    let newTitle= document.getElementById("title").value
    let otherPrice=document.getElementById("price").value
    let newStock= document.getElementById("stock").value
    let description=document.getElementById("describe").value

    fetch("https://shop-ig.onrender.com/products", {
        method: "POST",
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify({
            title:newTitle,
            price:otherPrice,
            stock:newStock,
            image:newImage,
            description:description
        })
    })
    .then(response=>response.json())
    .then(data=>console.log(data))
    .catch(error=>console.log(error))
  } 
 }

    //PATCH method to update bought items
 function updateBoughtStock(id, currentStock){
     fetch(`https://shop-ig.onrender.com/products/${id}`,{
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body:JSON.stringify({
      stock: currentStock,
      }),
    })
    .then(response=>response.json())
    .then(data=>console.log(data))
    .catch(error=>console.log(error))
 }

 //DELETE method to delete product when stock is bought out
  function deleteItem(id, currentStock){  
    fetch(`https://shop-ig.onrender.com/products/${id}`,{
      method: "DELETE",
      headers: {"Content-Type": "application/json"},
    })
    .then(response=>response.json())
    .then(data=>console.log(data))
    .catch(error=>console.log(error))
}


})

