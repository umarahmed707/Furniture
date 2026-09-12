const products = [
  {
    id: 1,
    title: "Leviosa",
    subtitle: "Stylish cafe chair",
    price: "Rp 2.500.000",
    disprice: "Rp 3.500.000",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Syltherine",
    subtitle: "Stylish cafe chair",
    price: "Rp 2.500.000",
    disprice: "Rp 3.500.000",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Lolito",
    subtitle: "Luxury big sofa",
    price: "Rp 7.000.000",
    disprice: "Rp 14.000.000",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Respira",
    subtitle: "Outdoor bar table and stool",
    price: "Rp 500.000",
    disprice: "Rp 1.000.000",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Grifo",
    subtitle: "Night lamp",
    price: "Rp 1.500.000",
    disprice: "Rp 2.200.000",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Muggo",
    subtitle: "Small mug",
    price: "Rp 150.000",
    disprice: "Rp 250.000",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 7,
    title: "Pingky",
    subtitle: "Cute bed set",
    price: "Rp 7.000.000",
    disprice: "Rp 14.000.000",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 8,
    title: "Potty",
    subtitle: "Minimalist flower pot",
    price: "Rp 500.000",
    disprice: "Rp 800.000",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 9,
    title: "Asgard",
    subtitle: "Comfortable armchair",
    price: "Rp 3.200.000",
    disprice: "Rp 4.500.000",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 10,
    title: "Kaja",
    subtitle: "Ergonomic study chair",
    price: "Rp 1.800.000",
    disprice: "Rp 2.600.000",
    image: "https://images.unsplash.com/photo-1505797149-43b0069ec26b?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 11,
    title: "Nordic Soft",
    subtitle: "Wooden lounge chair",
    price: "Rp 4.100.000",
    disprice: "Rp 5.200.000",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 12,
    title: "Vimla",
    subtitle: "3-seater fabric sofa",
    price: "Rp 12.000.000",
    disprice: "Rp 15.500.000",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 13,
    title: "Strandmon",
    subtitle: "Wing chair",
    price: "Rp 2.900.000",
    disprice: "Rp 3.800.000",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=400&auto=format&fit=crop"

  },
  {
    id: 14,
    title: "Poäng",
    subtitle: "Armchair with cushion",
    price: "Rp 1.200.000",
    disprice: "Rp 1.900.000",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 15,
    title: "Nockeby",
    subtitle: "Corner sofa bed",
    price: "Rp 18.000.000",
    disprice: "Rp 22.000.000",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 16,
    title: "Landskrona",
    subtitle: "Leather accent chair",
    price: "Rp 6.500.000",
    disprice: "Rp 8.000.000",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 17,
    title: "Söderhamn",
    subtitle: "Modern section sofa",
    price: "Rp 9.500.000",
    disprice: "Rp 12.000.000",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 18,
    title: "Ektorp",
    subtitle: "Cozy armchair",
    price: "Rp 2.100.000",
    disprice: "Rp 3.000.000",
    image: "https://images.unsplash.com/photo-1505797149-43b0069ec26b?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 19,
    title: "Klippan",
    subtitle: "Compact 2-seater sofa",
    price: "Rp 5.200.000",
    disprice: "Rp 6.800.000",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 20,
    title: "Vedbo",
    subtitle: "High-back armchair",
    price: "Rp 4.500.000",
    disprice: "Rp 5.900.000",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 21,
    title: "Melltorp",
    subtitle: "Dining chair set",
    price: "Rp 1.100.000",
    disprice: "Rp 1.600.000",
    image: "https://plus.unsplash.com/premium_photo-1670076513880-f58e3c377903?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnVybml0dXJlfGVufDB8fDB8fHww"
  }
];

export default products;