const products = [
    {
        id: 1,
        title: "Remera Negra",
        price: 20,
        description: "Remera negra mangas cortas",
        image: "https://acdn.mitiendanube.com/stores/002/140/898/products/remera-negra-puesta11-c2126ceece9c419cbb16513266147936-1024-1024.webp",
        stock: 25,
        category:"Remeras"
    },
    {
        id: 2,
        title: "Remera Blanca",
        price: 20,
        description: "Remera Blanca mangas cortas",
        image: "https://acdn.mitiendanube.com/stores/002/140/898/products/blanca-puesta1-27adfb9612c627badf16511809409839-1024-1024.webp",
        stock: 30,
        category:"Remeras"
    },
    {
        id: 3,
        title: "Campera Algodon",
        price: 28,
        description: "Campera negra de algodon",
        image: "https://sublimaq.com/893-large_default/campera-canguro-adulto-negra.jpg",
        stock: 25,
        category:"Camperas"
    },
    {
        id: 4,
        title: "Campera Puffer",
        price: 40,
        description: "Campera negra Puffer",
        image: "https://acdn.mitiendanube.com/stores/807/624/products/men-down-jacket-black-31-24a75782185f5ae37016832457834991-1024-1024.webp",
        stock: 35,
        category:"Camperas"
    },
    {
        id: 5,
        title: "Buzo Negro",
        price: 25,
        description: "Buzo negro de algodon",
        image: "https://i.ebayimg.com/images/g/fpAAAOSwPChjLW~R/s-l1600.jpg",
        stock: 30,
        category:"Buzos"
    },
    {
        id: 6,
        title: "Buzo Gris",
        price: 25,
        description: "Buzo gris de algodon",
        image: "https://i.ebayimg.com/images/g/DXQAAOSwUd1jLW-I/s-l960.jpg",
        stock: 30,
        category:"Buzos"
    },
    {
        id: 7,
        title: "Cargo",
        price: 25,
        description: "Pantalon Cargo negro",
        image: "https://acdn.mitiendanube.com/stores/001/484/136/products/341-c5214ffc9d3e9820c416486777108141-1024-1024.webp",
        stock: 30,
        category:"Pantalones"
    },
    {
        id: 8,
        title: "Jean",
        price: 25,
        description: "Pantalon Jean azul 01",
        image: "https://dcdn.mitiendanube.com/stores/001/065/335/products/154631-7c4d00fd96fa4acf3b15900708808358-640-0.jpg",
        stock: 30,
        category:"Pantalones"
    },
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 2000);
    });
};

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find((product) => product.id === id));
        }, 2000);
    });
};

export const getProductByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((product) => product.category === category));
        }, 2000);
    });
};