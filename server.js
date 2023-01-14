// Eksternal
const express = require("express")
const app = express()

let port = process.env.PORT || 8080

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

app.get("/home",(req,res)=>{
    res.send({
        message:"Home"
    })
})

app.get("/products",(req,res)=>{
    res.send(products)
})

app.get("/products/:id",(req,res)=>{
    res.send(products.filter(product=>{
        return product.productId === parseInt(req.params.id)
    }))
})

app.get("/add-product",(req,res)=>{
    res.send({
        message:"Halaman Tambah Produk"    
    })
})

app.get("/detail-product",(req,res)=>{
    res.send({
        message:"Halaman Detail Produk"    
    })
})

app.get("/cart",(req,res)=>{
    res.send({
        message:"Halaman Detail Cart"    
    })
})

app.listen(port,()=>{
    console.log("Server is running at port 6500")
})
