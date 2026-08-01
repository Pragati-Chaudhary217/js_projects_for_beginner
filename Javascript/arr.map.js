

const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
  { id: 2, name: "Book", category: "Books", price: 30, inStock: true },
  { id: 3, name: "Coffee Maker", category: "Appliances", price: 150, inStock: false },
  { id: 4, name: "Headphones", category: "Electronics", price: 200, inStock: true }
];
// const productnames=products.map(product=>{return product.name})
// console.log(productnames)

//implementation

function useCallback (Element){
    console.log(Element.name);
}


products.mapping = function(useCallback) {
    for( const elem of products){
        console.log(elem.name);
        useCallback(elem);
    }
}

products.mapping(product=>{console.log(product.inStock)})
