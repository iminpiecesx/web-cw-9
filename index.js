let products = [
   {name:`brulee`, price:0.5},
   {name:`oreo` , price:1},
   {name:`dates`, price:0.75}
]

// console.log(products)

let cart =[];

function addtocart(index){
    let product = products[index];
    let quantity = document.getElementById(index).value;
    product.quantity =quantity;
    cart.push(product);
    
    document.getElementById("list").innerHTML= "";

    let total = 0

    for (let index = 0; index < cart.length; index++) {
        const element = cart[index];
        let price = element.price * element.quantity;
        total = total + price;
        
        let list = document.getElementById("list");
        list.innerHTML += `<li> ${element.quantity} ${element.name} ${element.price}`

    }
    document.getElementById("total").innerText=`${total} KD`;
}
