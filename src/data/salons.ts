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
    name: "Toi",
    image: "https://lh5.googleusercontent.com/p/AF1QipNkeXLbu48hCJeN5cpi-iYwHJTu5fbRhahdYDwT=s1536",
    location: {
      lat: 30.0706465,
      lng: 31.2201156,
      name: "Toi"
    },
    link: "https://maps.app.goo.gl/Z95tDWYy3Kp1Rx678"
  },
  {
    name: "Zoya",
    image: "https://lh5.googleusercontent.com/p/AF1QipOvba8kIU7Ggh8Msv5WD34ocV50PVKzCmsH2crw=s1536",
    location: {
      lat: 30.0284096,
      lng: 31.4804642,
      name: "ZOEYA Beauty Lounge "
    },
    link: "https://maps.app.goo.gl/TMyFfyJYvFMzbiB99"
  },

  {
    name: "Beauty Bar",
    image: "https://lh5.googleusercontent.com/p/AF1QipOGDER3SFCUGgum-9XSP67AmZveFjw2RwRY2iu5=s406-k-no",
    location: {
      lat: 30.0434,
      lng: 31.2367,
      name: "Beauty Bar Salon Cairo"
    },
    link: "https://maps.app.goo.gl/t89EyXUmi3SBDSAc8"
  },
  

  {
    name: "صالون النجوم",
    image: "https://www.insideedition.com/sites/default/files/images/2020-05/salon.jpg",
    location: {
      lat: 30.0424,
      lng: 31.2377,
      name: "Stars Beauty Lounge"
    }
  }
] 