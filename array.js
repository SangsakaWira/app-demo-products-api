let products = [{
    productId:1,
    nama:"Baju"
},{
    productId:2,
    nama:"Celana"
},{
    productId:3,
    nama:"Sepatu"
}]

console.log(products)

let hasil = products.filter(product=>{
    return product.productId === 4
})

products.push({
    productId:4,
    nama:"Ikat Pinggang"
})

console.log(products)