let subtotalel=document.getElementById("subtot")
let totalel=document.querySelector("sup")
const  items=[
    {
        id:1,
        image:"images/fruite-item-5.jpg",
        name:"Grapes",
        price:4.99,
        stock:30,
        qty:0
    },
    {
        id:2,
        image:"images/fruite-item-2.jpg",
        name:"Raspberries",
        price:5.93,
        stock:20,
        qty:0
    },
    {
        id:3,
        image:"images/fruite-item-4.jpg",
        name:"Apricots",
        price:3.90,
        stock:35,
        qty:0
    },
    {
        id:4,
        image:"images/fruite-item-3.jpg",
        name:"Banana",
        price:2.59,
        stock:40,
        qty:0
    },
    {
        id:5,
        image:"images/fruite-item-1.jpg",
        name:"Orange",
        price:5.79,
        stock:20,
        qty:0
    },
    {
        id:6,
        image:"images/featur-1.jpg",
        name:"Apple",
        price:5.67,
        stock:33,
        qty:0
    },
    {
        id:7,
        image:"images/featur-2.jpg",
        name:"Strawberry",
        price:7.49,
        stock:30,
        qty:0
    },
    {
        id:8,
        image:"images/vegetable-item-2.jpg",
        name:"Brocolli",
        price:1.49,
        stock:20,
        qty:0
    },
    {
        id:9,
        image:"images/vegetable-item-1.jpg",
        name:"Tomato",
        price:2.59,
        stock:10,
        qty:0
    },
    {
        id:10,
        image:"images/vegetable-item-5.jpg",
        name:"Potatoes",
        price:1.90,
        stock:15,
        qty:0
    },
    {
        id:11,
        image:"images/vegetable-item-6.jpg",
        name:"Parsely",
        price:3.49,
        stock:21,
        qty:0
    },
    {
        id:12,
        image:"images/vegetable-item-4.jpg",
        name:"Bell Paper",
        price:5.59,
        stock:10,
        qty:0
    },
    {
        id:13,
        image:"images/bread-item-1.jpg",
        name:"Garlic Bread",
        price:2.49,
        stock:17,
        qty:0
    }, 
    {
        id:14,
        image:"images/bread-item-2.jpg",
        name:"Rosted Bread",
        price:1.76,
        stock:13,
        qty:0
    },
    {
        id:15,
        image:"images/meat-1.jpg",
        name:"Mix Salad",
        price:3.59,
        stock:17,
        qty:0
    },
    {
        id:16,
        image:"images/meat-2.jpg",
        name:"Chichken Masala",
        price:5.79,
        stock:11,
        qty:0
    }
]
let productel=document.querySelector(".products")
function displayproducts()
{
    items.map((prod)=>{
        productel.innerHTML+=`
        <div class="col">
            <div class="card border border-warning">
              <img src=${prod.image} class="card-img-top img1" alt="...">
              <div class="card-body text-center">
                <h5 class="card-title">${prod.name}</h5>
                <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt optio ratione
                  totam, aliquid eius assumenda
                  repudiandae enim.</p>
                <div style="display: flex;gap: 30px;">
                  <h5 class="mt-2">$${prod.price}/kg</h5>
                  <button type="button" class="btn btn-outline-warning text-success rounded-pill" onclick=addtocart(${prod.id})>
                    <i class="fa-solid fa-bag-shopping me-2" style="color: #81C408;"></i>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>`
    })
}
displayproducts()
// Veges
let vegesel=document.querySelector(".veges")
function displayveges()
{
    items.slice(7,12).map((prod)=>{
        vegesel.innerHTML+=`
        <div class="col">
            <div class="card border border-warning">
              <img src=${prod.image} class="card-img-top img1" alt="...">
              <div class="card-body text-center">
                <h5 class="card-title">${prod.name}</h5>
                <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt optio ratione
                  totam, aliquid eius assumenda
                  repudiandae enim.</p>
                <div style="display: flex;gap: 30px;">
                  <h5 class="mt-2">$${prod.price}/kg</h5>
                  <button type="button" class="btn btn-outline-warning text-success rounded-pill">
                    <i class="fa-solid fa-bag-shopping me-2" style="color: #81C408;"></i>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>`
    })
}
displayveges()

// Fruits
let fruitel=document.querySelector(".fruits")
function displayfruits()
{
    items.slice(0,7).map((prod)=>{
        fruitel.innerHTML+=`
        <div class="col">
            <div class="card border border-warning">
              <img src=${prod.image} class="card-img-top img1" alt="...">
              <div class="card-body text-center">
                <h5 class="card-title">${prod.name}</h5>
                <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt optio ratione
                  totam, aliquid eius assumenda
                  repudiandae enim.</p>
                <div style="display: flex;gap: 30px;">
                  <h5 class="mt-2">$${prod.price}/kg</h5>
                  <button type="button" class="btn btn-outline-warning text-success rounded-pill">
                    <i class="fa-solid fa-bag-shopping me-2" style="color: #81C408;"></i>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>`
    })
}
displayfruits()

// Bread
let breadel=document.querySelector(".bread")
function displaybreads()
{
    items.slice(12,14).map((prod)=>{
        breadel.innerHTML+=`
        <div class="col">
            <div class="card border border-warning">
              <img src=${prod.image} class="card-img-top img1" alt="...">
              <div class="card-body text-center">
                <h5 class="card-title">${prod.name}</h5>
                <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt optio ratione
                  totam, aliquid eius assumenda
                  repudiandae enim.</p>
                <div style="display: flex;gap: 30px;">
                  <h5 class="mt-2">$${prod.price}/kg</h5>
                  <button type="button" class="btn btn-outline-warning text-success rounded-pill">
                    <i class="fa-solid fa-bag-shopping me-2" style="color: #81C408;"></i>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>`
    })
}
displaybreads()

// meat
let meatel=document.querySelector(".meat")
function displaymeat()
{
    items.slice(14,16).map((prod)=>{
        meatel.innerHTML+=`
        <div class="col">
            <div class="card border border-warning">
              <img src=${prod.image} class="card-img-top img1" alt="...">
              <div class="card-body text-center">
                <h5 class="card-title">${prod.name}</h5>
                <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt optio ratione
                  totam, aliquid eius assumenda
                  repudiandae enim.</p>
                <div style="display: flex;gap: 30px;">
                  <h5 class="mt-2">$${prod.price}/kg</h5>
                  <button type="button" class="btn btn-outline-warning text-success rounded-pill">
                    <i class="fa-solid fa-bag-shopping me-2" style="color: #81C408;"></i>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>`
    })
}
displaymeat()


// Card Fruits 
let cardfruitel=document.querySelector(".bestprod")
function displaycardfruits()
{
    items.slice(0,6).map((prod)=>{
        cardfruitel.innerHTML+=`
        <div class="col">
        <div class="card mb-3 p-4 rounded bg-light border-0" style="max-width: 540px;">
          <div class="row g-0">
            <div class="col-md-6">
              <img src=${prod.image} class="img-fluid rounded-circle h-100 w-100" alt="...">
            </div>
            <div class="col-md-6">
              <div class="card-body">
                <h5 class="card-title">${prod.name}</h5>
                <p>
                  <i class="fa-solid fa-star" style="color: #81C408;"></i>
                  <i class="fa-solid fa-star" style="color: #81C408;"></i>
                  <i class="fa-solid fa-star" style="color: #81C408;"></i>
                  <i class="fa-solid fa-star" style="color: #81C408;"></i>
                  <i class="fa-solid fa-star" style="color: gray;"></i>
                </p>
                <h5 class="card-title">${prod.price}$</h5>
                <button type="button" class="btn btn-outline-warning text-success rounded-pill">
                  <i class="fa-solid fa-bag-shopping me-2" style="color: #81C408;"></i>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>`
    })
}
displaycardfruits()

let cardfruitel2=document.querySelector(".sellerprod")
function displaysellerfruits()
{
    items.slice(0,4).map((prod)=>{
        cardfruitel2.innerHTML+=`
        <div class="col">
        <div class="card h-100  border-0">
          <img src=${prod.image} class="card-img-top rounded-3" alt="...">
          <div class="card-body text-center">
            <h5 class="card-title"><a href="#" class="text-decoration-none txt1">${prod.name}</a></h5>
            <p>
              <i class="fa-solid fa-star" style="color: #81C408;"></i>
              <i class="fa-solid fa-star" style="color: #81C408;"></i>
              <i class="fa-solid fa-star" style="color: #81C408;"></i>
              <i class="fa-solid fa-star" style="color: #81C408;"></i>
              <i class="fa-solid fa-star" style="color: gray;"></i>
            </p>
            <h5 class="card-title">${prod.price}$</h5>
            <button type="button" class="btn btn-outline-warning text-success rounded-pill">
              <i class="fa-solid fa-bag-shopping me-2" style="color: #81C408;"></i>
              Add to cart
            </button>
          </div>
        </div>
      </div>`
    })
}
displaysellerfruits()

let cart=JSON.parse(localStorage.getItem("Cart"))||[]
updatecart()
function addtocart(id)
{
  if(cart.some((itm)=>itm.id===id))
  {
    changeqty("plus",id)
  }
  else
  {
    const p=items.find((prod)=>prod.id===id)
    cart.push({
      ...p,
      qty:1
    })
    console.log(cart)
  }
}



function updatecart()
{
  
  rendersubtotal()
  localStorage.setItem("Cart",JSON.stringify(cart))
}
// totalel.innerHTML=cart.length
let cartel=document.getElementById("cartitems")
console.log(cartel)
function displaycartitems()
{
  cart.map((c)=>{
    cartel.innerHTML+=`
    <tr>
        <td><img src=${c.image} height=80 width=80></td>
        <td>${c.name}</td>
        <td>$${c.price}</td>
        <td><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16" onclick="changeqty('minus',${c.id})">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
<path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
</svg> ${c.qty} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16" onclick="changeqty('plus',${c.id})">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg> </td>
        <td>${c.price}</td>
        <td><i class="fa-solid fa-trash text-danger fs-4" onclick="removeprod(${c.id})"></i></td>
    </tr>`
  })
}
displaycartitems()

function changeqty(action,id)
{
  cart=cart.map((c)=>{
    let qty=c.qty
    console.log("Quantity",c.qty,"Stock",c.stock)
    if(c.id===id)
    {
      if(action==="minus" && qty>1)
      {
        qty--
      }
      else if(action==="plus" && qty<c.stock)
      {
        qty++
      }
    }
    return {
      ...c,
      qty
    }
  })
  updatecart()
}
function removeprod(id)
{
  cart=cart.filter((item)=>item.id!==id)
  updatecart()
}

function rendersubtotal()
{
  let totalprice=0,totalitems=0;
  cart.forEach((item)=>{
    totalprice+=item.price*item.qty;
    totalitems+=item.qty;
  })
  subtotalel.innerHTML=`Subtotal(${totalitems} items):$${totalprice.toFixed(2)}`
  totalel.innerHTML=totalitems
}
