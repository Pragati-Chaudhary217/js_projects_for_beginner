

const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
  { id: 2, name: "Book", category: "Books", price: 30, inStock: true },
  { id: 3, name: "Coffee Maker", category: "Appliances", price: 150, inStock: false },
  { id: 4, name: "Headphones", category: "Electronics", price: 200, inStock: true }
];
// products.forEach((element,index)=>{console.log(element,index)})

//implementation

let useCallback= function(element,index){
  console.log(element,index)
}

products.forLoop = function() {
  for(let i=0;i<products.length;i++){
    useCallback(products[i],i);

  }
}
products.forLoop((num,index)=>{
    console.log(num,index);
 });