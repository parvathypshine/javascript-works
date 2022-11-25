class ProductService{
      
      getAllProducts(){
        fetch("https://fakestoreapi.com/products").then(res=>res.json()).then(item=>item)
        
      }
      getProductDetail(id){
        return fetch(`https://fakestoreapi.com/products/${id}`).then(res=>res.json()).then(data=>data)
      }
      getCategories(){
        
        return  fetch(`https://fakestoreapi.com/products/categories`).then(res=>res.json()).then(data=>data)
      }
      getProdutsByCategory(category){
       
        return fetch(`https://fakestoreapi.com/products/category/${category}`).then(res=>res.json()).then(data=>data)
      }
}

var service= new ProductService()
var allcategories=service.getCategories()
displaycategories(allcategories);

function displaycategories(categories){
  let html=``

  categories.forEach(c=>{
    html+=`<li class="nav-item">
    <button class="nav-link active" aria-current="page"  value="${c}" onclick="fetchProductsByCategory(event)">${c}</button>
  </li>`
  })
  document.querySelector("#id_nav").innerHTML=html
}


var allproducts=service.getAllProducts();

displayProducts(allproducts)

function displayProducts(products){
  let htmlData=''
  products.forEach(p=>{
    htmlData+=`
    
    <div class="col-3">
    <div class="card" style="width:100%;">
    <img src="${p.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${p.title}</h5>
      <p class="card-text">${p.description}</p>
      <p class="card-text">${p.category}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">price: ${p.price}</li>
      <li class="list-group-item"></li>
      <li class="list-group-item">A third item</li>
    </ul>
    <div class="card-body">
     
    <button class="btn btn-info " value="${p.id}"  onclick=" fetchProduct(event)">ViewMore</button>
      
    </div>
  </div>
  
  </div>
  `
  })
  document.querySelector("#id_result").innerHTML=htmlData
  
}


function fetchProduct(e){
 let id=e.target.value;
 let details=service.getProductDetail(id)
 let displayData=`<div class="col-4"></div>
 <div class="col-4">
 <div class="card" style="width: 18rem;">
  <img src="${details.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${details.title}</h5>
    <p class="card-text">${details.description}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
 </div>
 <div class="col-4"></div>`

 document.querySelector("#id_result").innerHTML=displayData
}

function fetchProductsByCategory(event){
  let category=event.target.value;

  let products=service.getProdutsByCategory(category)
  displayProducts(products)

}
