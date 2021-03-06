import bcrypt from 'bcryptjs';
const data ={
    users:[
        {
            name:'Nalin',
            email:'nalinagrawal123@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            address: 'efsd regsdsd',
            isAdmin: true,
        },
        {
            name:'Max',
            email:'nalinagrawal333@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            address: 'efsd regsdsfddsd',
            isAdmin: false,
        },
    ],
    products: [
        {
            name: "Text Books",
            catagory: 'books',
            image: '/images/product-1.png',
            countInStock: 10,
            brand: "NCERT",
            address: "eafsgbgbf rgtggsfgv",
            rating: 4.5,
            numReviews: 10,
            description: "high qualitly books",
        },
        {
            name: "Natraj Pencil",
            catagory: 'Pencil',
            image: '/images/product-2.jpg',
            countInStock: 0,
            brand: "Natraj",
            address: "eafsgbgbf rgtggsfgv",
            rating: 4,
            numReviews: 13,
            description: 'high qualitly pencil',
        },
        {
            name: "Domes Pencil box",
            catagory: 'Pencil box',
            image: '/images/product-3.jpg',
            countInStock: 30,
            brand: "Domes",
            address: "eafsgbgbf rgtggsfgv",
            rating: 5,
            numReviews: 50,
            description: 'high qualitly pencil box',
        },
        {
            name: "Paras Appu Pens",
            catagory: 'Pens',
            image: '/images/product-4.jpg',
            countInStock: 40,
            brand: "Local",
            address: "eafsgbgbf rgtggsfgv",
            rating: 3.5,
            numReviews: 10,
            description: 'Low Quality Pens',
        },
        {
            name: "R. D. Sharama Text Books",
            catagory: 'books',
            image: '/images/product-1.png',
            countInStock: 50,
            brand: "R. D. Sharma",
            address: "eafsgbgbf rgtggsfgv",
            rating: 5,
            numReviews: 100,
            description: 'maths reference notebook',
        },
        {
            name: "Apsara Pencil",
            catagory: 'Pencil',
            image: '/images/product-2.jpg',
            countInStock: 60,
            brand: "Apsara",
            address: "eafsgbgbf rgtggsfgv",
            rating: 3,
            numReviews: 20,
            description: 'nice qualitly penciles',
        }
    ],
};
export default data;

