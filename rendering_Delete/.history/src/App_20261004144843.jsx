import Product from './components/Product.jsx';

const App = () => {
  let data = [
    {
      id: 1,
      name: 'Wireless Headphones',
      image: 'https://picsum.photos/seed/headphones/400/300',
      description:
        'Premium wireless headphones with clear sound and deep bass.',
      price: 2499,
    },
    {
      id: 2,
      name: 'Smart Watch',
      image: 'https://picsum.photos/seed/smartwatch/400/300',
      description:
        'Smart watch with fitness tracking, heart-rate monitoring and notifications.',
      price: 3299,
    },
    {
      id: 3,
      name: 'Running Shoes',
      image: 'https://picsum.photos/seed/runningshoes/400/300',
      description:
        'Lightweight and comfortable running shoes designed for everyday workouts.',
      price: 1899,
    },
    {
      id: 4,
      name: 'Laptop Backpack',
      image: 'https://picsum.photos/seed/backpack/400/300',
      description:
        'Durable backpack with dedicated laptop compartment and multiple pockets.',
      price: 1299,
    },
    {
      id: 5,
      name: 'Bluetooth Speaker',
      image: 'https://picsum.photos/seed/speaker/400/300',
      description:
        'Portable Bluetooth speaker with powerful audio and long battery life.',
      price: 1599,
    },
    {
      id: 6,
      name: 'Mechanical Keyboard',
      image: 'https://picsum.photos/seed/keyboard/400/300',
      description:
        'RGB mechanical keyboard with responsive keys for gaming and programming.',
      price: 2799,
    },
    {
      id: 7,
      name: 'Gaming Mouse',
      image: 'https://picsum.photos/seed/gamingmouse/400/300',
      description:
        'High-precision gaming mouse with adjustable DPI and RGB lighting.',
      price: 999,
    },
    {
      id: 8,
      name: 'USB-C Hub',
      image: 'https://picsum.photos/seed/usbhub/400/300',
      description:
        'Multi-port USB-C hub with HDMI, USB 3.0 and SD card support.',
      price: 899,
    },
    {
      id: 9,
      name: 'Mobile Phone Stand',
      image: 'https://picsum.photos/seed/phonestand/400/300',
      description:
        'Adjustable phone stand suitable for desks, video calls and watching movies.',
      price: 499,
    },
    {
      id: 10,
      name: 'Power Bank',
      image: 'https://picsum.photos/seed/powerbank/400/300',
      description:
        '10000mAh fast-charging power bank with compact and lightweight design.',
      price: 1199,
    },
    {
      id: 11,
      name: 'Smart LED Bulb',
      image: 'https://picsum.photos/seed/ledbulb/400/300',
      description:
        'Wi-Fi enabled smart LED bulb with adjustable brightness and colors.',
      price: 699,
    },
    {
      id: 12,
      name: 'Coffee Mug',
      image: 'https://picsum.photos/seed/coffeemug/400/300',
      description: 'Premium ceramic coffee mug with a stylish minimal design.',
      price: 349,
    },
    {
      id: 13,
      name: 'Water Bottle',
      image: 'https://picsum.photos/seed/waterbottle/400/300',
      description:
        'Stainless steel insulated water bottle that keeps drinks cold or hot.',
      price: 799,
    },
    {
      id: 14,
      name: 'Sunglasses',
      image: 'https://picsum.photos/seed/sunglasses/400/300',
      description:
        'Stylish UV-protection sunglasses suitable for everyday outdoor use.',
      price: 899,
    },
    {
      id: 15,
      name: 'Wireless Mouse',
      image: 'https://picsum.photos/seed/wirelessmouse/400/300',
      description:
        'Ergonomic wireless mouse with silent clicks and precise tracking.',
      price: 749,
    },
    {
      id: 16,
      name: 'Desk Lamp',
      image: 'https://picsum.photos/seed/desklamp/400/300',
      description: 'Adjustable LED desk lamp with multiple brightness levels.',
      price: 1099,
    },
    {
      id: 17,
      name: 'Fitness Band',
      image: 'https://picsum.photos/seed/fitnessband/400/300',
      description:
        'Fitness band for tracking steps, calories, sleep and daily activity.',
      price: 1499,
    },
    {
      id: 18,
      name: 'Tablet Stand',
      image: 'https://picsum.photos/seed/tabletstand/400/300',
      description:
        'Foldable aluminum tablet stand with adjustable viewing angles.',
      price: 649,
    },
    {
      id: 19,
      name: 'Portable SSD',
      image: 'https://picsum.photos/seed/ssd/400/300',
      description:
        'Fast and compact portable SSD for storing and transferring large files.',
      price: 4599,
    },
    {
      id: 20,
      name: 'Webcam',
      image: 'https://picsum.photos/seed/webcam/400/300',
      description:
        'Full HD webcam with built-in microphone for meetings and streaming.',
      price: 1999,
    },
  ];

  return (
    <div className="p-2 flex flex-wrap gap-4">
      {data.map((elem)=> <Product key={data.i} product={elem}/>)}
    </div>
  );
};

export default App;
