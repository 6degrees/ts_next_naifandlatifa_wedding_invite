type Location = {
  lat: number
  lng: number
  name: string
}

type Attraction = {
  name: string
  image: string
  location: Location
  link?: string // Optional custom link
}

export const attractions: Attraction[] = [
  {
    name: "الأهرامات",
    image: "https://s.france24.com/media/display/734382d2-c444-11ee-8c1b-005056a90284/w:900/p:3x4/000_34H49YZ.jpg",
    location: {
      lat: 29.9792,
      lng: 31.1342,
      name: "Great Pyramid of Giza"
    },
    link: "https://goo.gl/maps/QKN6QrKmvmR2" // Custom short link example
  },
  {
    name: "المتحف المصري",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/The_Egyptian_Museum.jpg/280px-The_Egyptian_Museum.jpg",
    location: {
      lat: 30.0478,
      lng: 31.2336,
      name: "The Egyptian Museum"
    }
  },
  {
    name: "قلعة صلاح الدين",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/%D9%82%D9%84%D8%B9%D9%87_%D8%B5%D9%84%D8%A7%D8%AD_%D8%A7%D9%84%D8%AF%D9%8A%D9%86_%D8%A7%D9%84%D8%A3%D9%8A%D9%88%D8%A8%D9%8A_23.jpg",
    location: {
      lat: 30.0291,
      lng: 31.2593,
      name: "Salah El Din Citadel"
    }
  },
  {
    name: "خان الخليلي",
    image: "https://tourismdaily.news/wp-content/uploads/2024/05/50398-%D8%AE%D8%A7%D9%86-%D8%A7%D9%84%D8%AE%D9%84%D9%8A%D9%84%D9%8A-1.jpeg",
    location: {
      lat: 30.0471,
      lng: 31.2620,
      name: "Khan el-Khalili"
    }
  }
] 