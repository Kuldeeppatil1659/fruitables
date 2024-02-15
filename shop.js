let prodel=document.querySelector(".prod")
let fruits=[
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
        image:"images/fruite-item-5.jpg",
        name:"Grapes",
        price:4.99,
        stock:30,
        qty:0
    },
    {
        id:9,
        image:"images/fruite-item-2.jpg",
        name:"Raspberries",
        price:5.93,
        stock:20,
        qty:0
    }
]

function displayprod()
{
    fruits.forEach((f)=>{
        prodel.innerHTML+=`
        <div class="col">
            <div class="card border border-warning">
            <img src=${f.image} class="card-img-top img1" alt="...">
            <div class="card-body text-center">
            <h5 class="card-title">${f.name}</h5>
            <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt optio ratione
                totam, aliquid eius assumenda
                repudiandae enim.</p>
            <div style="display: flex;gap: 30px;">
                <h5 class="mt-2">$${f.price}/kg</h5>
                <button type="button" class="btn btn-outline-warning text-success rounded-pill">
                <i class="fa-solid fa-bag-shopping me-2" style="color: #81C408;"></i>
                Add to cart
                </button>
            </div>
            </div>
        </div>
        </div>
        `
    })
}
displayprod()