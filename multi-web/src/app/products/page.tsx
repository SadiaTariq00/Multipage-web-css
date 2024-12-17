import React from 'react'
const Products =() => {

const productData = [
  {id:1, name: "Lipstick", price:50 , description: "Cosmetics", image: "/lipstick.jpg" },
  {id:2, name: "Foundation", price:120 , description: "Cosmetics", image: "/found.jpg" },
  {id:3, name: "Makeup Sponge & brushes", price:200 , description:"Cosmetics" , image: "/brush.jpg" },
  {id:4, name: "Eye-Shadow", price:500 , description: "Cosmetics" , image: "/eyesjadow.jpg" },
  {id:5,name: "Mascara & Lashes", price:100 , description:"Cosmetics" , image: "/lash.jpg"  },
  {id:6, name: "Face Powder", price:250 , description: "Cosmetics", image: "/powder.jpg" },
  {id:7, name: "Nail Polishes", price:50 , description: "Cosmetics" , image: "/nail.jpg" },
  {id:8, name: "Facial Kit", price:600 , description: "Cosmetics" , image: "/face.jpg" },
  {id:9, name: "Highlighters", price:300 , description: "Cosmetics" , image: "/lighter.jpg" },

];
 return (
    <div>
      <div className="pro">
      <h1>PRODUCTS</h1>
      </div>
      <div className='products'>
        {productData.map((product) => 
          <div key={product.id} className="product-card">
     <img src={product.image} alt={product.name} />
     <h3>{product.name}</h3>
     <p>{product.description}</p>
     <div className='price'>${product.price}</div>
     <button>Add to cart</button>
          </div>
        )}
      </div>

    </div>
  )
}

export default Products