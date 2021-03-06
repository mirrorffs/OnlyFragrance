import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'avi',
      email: 'avi@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
      isSeller: true,
      seller: {
        name: 'mirror',
        logo: '/images/logo1.png',
        description: 'seller',
        rating: 4.5,
        numReviews: 120,
      },
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Versace Blue',
      category: 'Mens Perfume',
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Versace',
      rating: 4.5,
      numReviews: 10,
      description: 'Premium product',
    },
    {
      name: 'Versace Ocean',
      category: 'Mens Perfume',
      image: '/images/p2.jpg',
      price: 150,
      countInStock: 10,
      brand: 'Versace',
      rating: 4.8,
      numReviews: 7,
      description: 'Premium product',
    },
    {
      name: 'Versace Flames',
      category: 'Mens Perfume',
      image: '/images/p3.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Versace',
      rating: 4.2,
      numReviews: 10,
      description: 'Premium product',
    },
    {
      name: 'Versace Eros',
      category: 'Mens Perfume',
      image: '/images/p4.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Versace',
      rating: 4.5,
      numReviews: 10,
      description: 'Premium product',
    },
    {
      name: 'Versace Pour',
      category: 'Mens Perfume',
      image: '/images/p5.jpg',
      price: 150,
      countInStock: 10,
      brand: 'Versace',
      rating: 4.6,
      numReviews: 10,
      description: 'Premium product',
    },
    {
      name: 'Versace Honey',
      category: 'Womens Perfume',
      image: '/images/p6.jpg',
      price: 130,
      countInStock: 10,
      brand: 'Versace',
      rating: 4.2,
      numReviews: 10,
      description: 'Premium product',
    },
    {
      name: 'Versace Pink',
      category: 'Womens Perfume',
      image: '/images/p7.jpg',
      price: 130,
      countInStock: 10,
      brand: 'Versace',
      rating: 4.2,
      numReviews: 10,
      description: 'Premium product',
    },
    {
      name: 'Versace Gold',
      category: 'Womens Perfume',
      image: '/images/p8.jpg',
      price: 180,
      countInStock: 10,
      brand: 'Versace',
      rating: 4.5,
      numReviews: 10,
      description: 'Premium product',
    },
    {
      name: 'Versace Dew',
      category: 'Womens Perfume',
      image: '/images/p9.jpg',
      price: 100,
      countInStock: 10,
      brand: 'Versace',
      rating: 4.2,
      numReviews: 10,
      description: 'Premium product',
    },
    {
      name: 'Versace Night',
      category: 'Womens Perfume',
      image: '/images/p10.jpg',
      price: 100,
      countInStock: 10,
      brand: 'Versace',
      rating: 4.2,
      numReviews: 10,
      description: 'Premium product',
    },
    {
      name: 'Versace Noir',
      category: 'Womens Perfume',
      image: '/images/p11.jpg',
      price: 200,
      countInStock: 10,
      brand: 'Versace',
      rating: 4.8,
      numReviews: 10,
      description: 'Premium product',
    },
  ],
};
export default data;
