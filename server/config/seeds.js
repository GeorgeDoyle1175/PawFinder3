const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Golden Retriever' },
    { name: 'French Bulldog' },
    { name: 'Maltipoos' },
    { name: 'English Shepherd' },
    { name: 'pending mike' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Bella',
      category: categories[4]._id,
      sex: 'female',
      age: '3 months',
      description: 'Bella is a friendly and intelligent English Shepherd dog. She loves playing fetch and is great with kids. She is always ready for an adventure!',
      image: 'bella.jpg',
      price: 799.99
    },

    {
      name: 'Max',
      category: categories[4]._id,
      sex: 'male',
      age: '6 months',
      description: 'Max is a loyal and energetic English Shepherd dog. He enjoys long walks and learning new tricks. He will be a great companion for an active family!',
      image: 'max.jpg',
      price: 899.99
    },

    {
      name: 'Lucy',
      category: categories[4]._id,
      sex: 'female',
      age: '6 months',
      description: 'Lucy is a playful and affectionate English Shepherd dog. She loves cuddling and enjoys being around people. She will bring lots of joy to your home!',
      image: 'lucy.jpg',
      price: 999.99
    },

    {
      name: 'Cooper',
      category: categories[4]._id,
      sex: 'male',
      age: '9 months',
      description: 'Cooper is a smart and obedient English Shepherd dog. He excels in obedience training and can learn new commands quickly. He will be a great working companion!',
      image: 'cooper.jpg',
      price: 1199.99
    },

    {
      name: 'Daisy',
      category: categories[4]._id,
      sex: 'emale',
      age: '7 months',
      description: 'Daisy is a gentle and protective English Shepherd dog. She is great with children and has a calm demeanor. She will be a loving and loyal family pet!',
      image: 'daisy.jpg',
      price: 999.99
    },

    {
      name: 'Cooper',
      category: categories[1]._id,
      sex: 'male',
      age: '6 months',
      image: 'cooper.png',
      description: 'Cooper is a friendly and playful Golden Retriever with a golden coat that shines in the sun. He loves swimming and has a talent for fetching frisbees. Coopers fun fact is that he once set a record for the longest frisbee catch by a Golden Retriever, covering an impressive distance of 100 meters!',
      price: 1199.99,
    },

    {
      name: 'Bentley',
      category: categories[1]._id,
      sex: 'male',
      age: '3 months',
      image: 'bentley.jpg',
      description: 'Bentley is a loyal and playful Golden Retriever with a golden coat that shines in the sunlight. He is a natural at finding hidden treasures and has an incredible knack for discovering buried bones in the backyard. Fun fact His talent for sniffing out buried goodies never fails to impress his family and friends!',
      price: 999.99,
    },

    {
      name: 'Max',
      category: categories[1]._id,
      sex: 'male',
      age: '8 months',
      image: 'max-2.jpg',
      description: 'Max is a spirited and adventurous Golden Retriever with a golden coat that shines. He is an excellent swimmer and has a knack for catching objects in mid-air with impressive agility. Fun fact: Maxwell holds the title for the highest jump by a Golden Retriever in his local dog competition, soaring an incredible 5 feet into the air!',
      price: 1099.99,
    },

    {
      name: 'Ruby',
      category: categories[1]._id,
      sex: 'female',
      age: '12 months',
      image: 'Ruby.jpg',
      description: 'Ruby is a loving and playful Golden Retriever with a golden coat that shimmers. She has a talent for finding hidden toys and treasures around the house, making playtime an exciting adventure for everyone! Fun fact: Ruby cannot resist singing along whenever she hears her favorite tunes, often surprising her family with her adorable and melodious howls of joy!',
      price: 1199.99,
    },

    {
      name: 'Kodi',
      category: categories[1]._id,
      sex: 'male',
      age: '10 months',
      image: 'kodi.jpg',
      description: 'Kodi is an adventurous and friendly Golden Retriever with a golden coat that sparkles. He is a natural-born retriever and can fetch objects with impressive precision. Fun fact: Kodi has an extraordinary talent for balancing objects on his nose, mesmerizing everyone with his impeccable poise and focus!',
      price: 1299.99,
    },

    {
      name: 'Rocky',
      category: categories[2]._id,
      sex: 'male',
      age: '4 months',
      image: 'rocky_fb.jpeg',
      description: 'Rocky is a playful and energetic French Bulldog. He loves cuddling and enjoys going for long walks.',
      price: 1499.99,
    },

    {
      name: 'Luna',
      category: categories[2]._id,
      sex: 'female',
      age: '3 months',
      image: 'luna_fb.jpeg',
      description: 'Luna is a sweet and gentle French Bulldog. She gets along well with children and other pets.',
      price: 1799.99,
    },

    {
      name: 'Max',
      category: categories[2]._id,
      sex: 'male',
      age: '7 months',
      image: 'max_fb.jpeg',
      description: 'Max is a friendly and outgoing French Bulldog. He loves playing fetch and going on adventures.',
      price: 1599.99,
    },

    {
      name: 'Bella',
      category: categories[2]._id,
      sex: 'female',
      age: '10 months',
      image: 'bella_fb.jpeg',
      description: 'Bella is a loyal and affectionate French Bulldog. She enjoys spending time with her family and relaxing in the sun.',
      price: 1699.99,
    },

    {
      name: 'Oscar',
      category: categories[2]._id,
      sex: 'male',
      age: '2.5 years',
      image: 'oscar_fb.jpeg',
      description: 'Oscar is an intelligent and playful French Bulldog. He learns quickly and enjoys learning new tricks.',
      price: 1899.99,
    },

    {
      name: 'Stella',
      breed: categories[3]._id,
      sex: 'female',
      age: '16 weeks',
      image: 'stella.jpg',
      description: 'Stella is an enchanting female Maltipoo puppy with a silky, multicolored coat that glistens in the sunlight. She is incredibly intelligent and picks up new tricks in no time. Stella loves to sing along to your favorite tunes, and her howling harmonies will have you convinced shes the next rising star of the doggy world!',
      price: 2999.99,
    },

    {
      name: 'Sunshine',
      breed: categories[3]._id,
      sex: 'female',
      age: '12 weeks',
      image: 'sunshine.jpg',
      description: 'Sunshine is a charming female Maltipoo puppy with a soft, fluffy coat that resembles a cloud. She loves to cuddle up in your lap and shower you with sweet puppy kisses. Sunshine has a hidden talent for doing somersaults when she gets excited, and it is guaranteed to make you smile!',
      price: 2899.99,
    },

    {
      name: 'Princess',
      breed: categories[3]._id,
      sex: 'female',
      age: '19 weeks',
      image: 'princess.jfif',
      description: 'Meet Princess, an adorable female Maltipoo puppy with eyes that sparkle like stars. She has a playful and mischievous nature, always keeping you on your toes. Princess has a unique talent for balancing treats on her nose and catching them in mid-air. Get ready for some entertaining snack time with this little acrobat!',
      price: 2599.99,
    },

    {
      name: 'Chonks',
      breed: categories[3]._id,
      sex: 'male',
      age: '16 weeks',
      image: 'Chonks.jpeg',
      description: 'Chinks is a dashing male Maltipoo puppy with an irresistible teddy bear face that melts hearts wherever he goes. He is a social butterfly and adores meeting new people and furry friends. Chonks has a remarkable talent for playing hide-and-seek and can find the most clever hiding spots. Get ready for hours of fun and laughter with this little explorer!',
      price: 2799.99,
    },

    {
      name: 'Gunther',
      breed: categories[3]._id,
      sex: 'male',
      age: '12 weeks',
      image: 'gunther.jpg',
      description: 'Gunther is a charismatic male Maltipoo puppy with a luxurious, wavy coat that is perfect for snuggling. Gunther loves playing dress-up, and his fashion sense is off the charts. You will have a blast dressing him up in adorable outfits and capturing the most Instagram-worthy moments!',
      price: 2999.99,
    }

  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
