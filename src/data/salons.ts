type Location = {
  lat: number
  lng: number
  name: string
}

type Salon = {
  name: string
  image: string
  location: Location
  link?: string // Optional custom link
}

export const salons: Salon[] = [
  {
    name: {
      en: "Ashour",
      ar: "توي"
    },
    description: {
      en: "Hair Stylost",
      ar: "توي"
    },
    image: "/salon1.png",
    location: {
      lat: 30.0706465,
      lng: 31.2201156,
      name: "Toi"
    },
    link: "https://www.instagram.com/p/CaAQ7rWqODX/?igsh=MWNteHM3aW50dzc5dg%3D%3D"
  },
  {
    name: {
      en: "Al Sagheer ",
      ar: "زويا"
    },
    description: {
      en: "Beauty Salons",
      ar: "توي"
    },
    image: "/salon2.png",
    location: {
      lat: 30.0284096,
      lng: 31.4804642,
      name: "ZOEYA Beauty Lounge "
    },
    link: "https://www.instagram.com/alsagheersalons?igsh=MW5xY3V5amZjOGN5cg%3D%3D"
  },
  {
    name: {
      en: "Nehal Khalil",
      ar: "بيوتي بار"
    },
    description: {
      en: " Artist",
      ar: "توي"
    },
    image: "/salon3.png",
    location: {
      lat: 30.0434,
      lng: 31.2367,
      name: "Beauty Bar Salon Cairo"
    },
    link: "https://www.instagram.com/nehal_khalil_makeup_artist/"
  },
  {
    name: {
      en: "Zeina El Naggar",
      ar: "صالون النجوم"
    },
    description: {
      en: "Makeup Artist",
      ar: "توي"
    },
    image: "/salon4.png",
    location: {
      lat: 30.0424,
      lng: 31.2377,
      name: "Stars Beauty Lounge"
    },
    link: "https://www.instagram.com/zeinaelnaggar/"
  },
  {
    name: {
      en: "Mona Gamal",
      ar: "صالون النجوم"
    },
    description: {
      en: "Artist",
      ar: "توي"
    },
    image: "/salon5.png",
    location: {
      lat: 30.0424,
      lng: 31.2377,
      name: "Stars Beauty Lounge"
    },
    link: "https://www.instagram.com/monagamalofficial/"
  },
  {
    name: {
      en: "Mai Elbahey",
      ar: "صالون النجوم"
    },
    description: {
      en: "Makeup Artist",
      ar: "توي"
    },
    image: "/salon6.png",
    location: {
      lat: 30.0424,
      lng: 31.2377,
      name: "Stars Beauty Lounge"
    },
    link: "https://www.instagram.com/mai_elbahey/"
  },
  {
    name: {
      en: "Nesma Mansour",
      ar: "صالون النجوم"
    },
    description: {
      en: "Makeup Artist",
      ar: "توي"
    },
    image: "/salon7.png",
    location: {
      lat: 30.0424,
      lng: 31.2377,
      name: "Stars Beauty Lounge"
    },
    link: "https://www.instagram.com/nesmamansourmakeup/"
  }
] 