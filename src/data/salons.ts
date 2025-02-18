type Location = {
  lat: number;
  lng: number;
  name: {
    en: string;
    ar: string;
  };
};

type Salon = {
  name: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  image: string;
  location: Location;
  link?: string;
};

export const salons: Salon[] = [
  {
    name: {
      en: "Ashour",
      ar: "أشور",
    },
    description: {
      en: "Hair Stylist",
      ar: "تصفيف شعر",
    },
    image: "/salon1.png",
    location: {
      lat: 30.0706465,
      lng: 31.2201156,
      name: {
        en: "Ashour",
        ar: "أشور",
      },
    },
    link: "https://www.instagram.com/p/CaAQ7rWqODX/?igsh=MWNteHM3aW50dzc5dg%3D%3D",
  },
  {
    name: {
      en: "Mohammed Al Sagheer",
      ar: "محمد الصغير",
    },
    description: {
      en: "Beauty Salons",
      ar: "صالون تجميل",
    },
    image: "/salon2.png",
    location: {
      lat: 30.0284096,
      lng: 31.4804642,
      name: {
        en: "Mohammed Al Sagheer",
        ar: "محمد الصغير",
      },
    },
    link: "https://www.instagram.com/alsagheersalons?igsh=MW5xY3V5amZjOGN5cg%3D%3D",
  },
  {
    name: {
      en: "Nehal Khalil",
      ar: "نهال خليل",
    },
    description: {
      en: "Artist",
      ar: "فنانة",
    },
    image: "/salon3.png",
    location: {
      lat: 30.0434,
      lng: 31.2367,
      name: {
        en: "Nehal Khalil",
      ar: "نهال خليل",
      },
    },
    link: "https://www.instagram.com/nehal_khalil_makeup_artist/",
  },
  {
    name: {
      en: "Zeina El Naggar",
      ar: "زينة النجار",
    },
    description: {
      en: "Makeup Artist",
      ar: "فنانة مكياج",
    },
    image: "/salon4.png",
    location: {
      lat: 30.0424,
      lng: 31.2377,
      name: {
        en: "Zeina El Naggar",
      ar: "زينة النجار",
      },
    },
    link: "https://www.instagram.com/zeinaelnaggar/",
  },
  {
    name: {
      en: "Mona Gamal",
      ar: "منى جمال",
    },
    description: {
      en: "Artist",
      ar: "فنانة",
    },
    image: "/salon5.png",
    location: {
      lat: 30.0424,
      lng: 31.2377,
      name: {
        en: "Mona Gamal",
        ar: "منى جمال",
      },
    },
    link: "https://www.instagram.com/monagamalofficial/",
  },
  {
    name: {
      en: "Mai Elbahey",
      ar: "مي البحيري",
    },
    description: {
      en: "Makeup Artist",
      ar: "فنانة مكياج",
    },
    image: "/salon6.png",
    location: {
      lat: 30.0424,
      lng: 31.2377,
      name: {
        en: "Mai Elbahey",
        ar: "مي البحيري",
      },
    },
    link: "https://www.instagram.com/mai_elbahey/",
  },
  {
    name: {
      en: "Nesma Mansour",
      ar: "نسمة منصور",
    },
    description: {
      en: "Makeup Artist",
      ar: "فنانة مكياج",
    },
    image: "/salon7.png",
    location: {
      lat: 30.0424,
      lng: 31.2377,
      name: {
        en: "Nesma Mansour",
        ar: "نسمة منصور",
      },
    },
    link: "https://www.instagram.com/nesmamansourmakeup/",
  },
];
