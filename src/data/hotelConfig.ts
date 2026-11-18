export interface RoomData {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  gallery: string[];
  features: string[];
  isAvailableForEnquiry: boolean;
}

export interface AmenityItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  isConfirmed: boolean; // editable by client
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Property' | 'Rooms' | 'Interiors' | 'Meetings & Events' | 'Surroundings';
  imageUrl: string;
  aspect?: string;
}

export interface LandmarkItem {
  name: string;
  distance: string;
  category: string;
}

export const HOTEL_CONFIG = {
  brand: {
    name: "AYORA SUITES",
    shortName: "Ayora",
    tagline: "LUXURY STAYS | CONFERENCE | AIRPORT ROAD",
    headline: "A stay beyond expectations.",
    subheadline: "Discover thoughtfully designed spaces, warm hospitality and effortless comfort at Ayora Suites, near Bengaluru Airport.",
    welcomeEyebrow: "WELCOME TO AYORA SUITES",
    welcomeHeading: "Thoughtful hospitality. Timeless comfort.",
    welcomeDescription: "Experience a welcoming stay designed around comfort, convenience and attentive hospitality. Whether you are visiting Bengaluru for business, meetings or leisure, Ayora Suites offers a comfortable base near Bengaluru Airport.",
    footerTagline: "Your Comfort, Our Commitment.",
    copyrightYear: new Date().getFullYear(),
    logoUrl: "/images/ayora-logo.jpg",
    website: "https://ayorasuites.com",
  },

  contact: {
    primaryEmail: "ayorasuites@gmail.com",
    secondaryEmail: "sushanthshetty456.ss@gmail.com",
    primaryPhone: "+91 99800 28502",
    primaryPhoneClean: "+919980028502",
    secondaryPhone: "+91 91487 03006",
    secondaryPhoneClean: "+919148703006",
    whatsappNumber: "919980028502",
    whatsappUrl: "https://wa.me/919980028502",
    web3formsAccessKey: "57552c94-3a6b-422d-b971-0bce0cebb9f9",
    address: {
      building: "Building No: 1997/1289/9/32",
      street: "New International Airport Road",
      landmark: "Near Decathlon, Chikkajala, Kadigenahalli Gate",
      city: "Bengaluru Urban",
      state: "Karnataka",
      pincode: "562157",
      country: "India",
      formatted: "Building No: 1997/1289/9/32, New International Airport Road, Near Decathlon, Chikkajala, Kadigenahalli Gate, Bengaluru Urban, Karnataka – 562157, India."
    },
    googleMaps: {
      embedUrl: "https://maps.google.com/maps?q=Building%20No%201997%2F1289%2F9%2F32%2C%20New%20International%20Airport%20Road%2C%20Near%20Decathlon%2C%20Chikkajala%2C%20Kadigenahalli%20Gate%2C%20Bengaluru%20562157&t=&z=14&ie=UTF8&iwloc=&output=embed",
      directionsUrl: "https://www.google.com/maps/search/?api=1&query=Building+No+1997%2F1289%2F9%2F32+New+International+Airport+Road+Near+Decathlon+Chikkajala+Kadigenahalli+Gate+Bengaluru+562157"
    }
  },

  welcomeHighlights: [
    {
      title: "Comfortable Stays",
      description: "Thoughtfully appointed rooms for a relaxing experience.",
      icon: "Bed"
    },
    {
      title: "Meetings & Events",
      description: "A dedicated space for professional gatherings.",
      icon: "Users"
    },
    {
      title: "Convenient Location",
      description: "A welcoming base near Bengaluru Airport.",
      icon: "MapPin"
    }
  ],

  rooms: [
    {
      id: "deluxe-room",
      slug: "deluxe-room",
      name: "DELUXE ROOM",
      shortDescription: "A serene, thoughtfully appointed sanctuary designed for restful stays and discerning travelers seeking comfort near the airport.",
      fullDescription: "The Deluxe Room at Ayora Suites is tailored for both business executives and leisure guests who appreciate tranquil ambiance and refined comfort. Complete with premium bedding, ergonomic workspace, and modern ensuite bathroom.",
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
      ],
      features: [
        "Thoughtfully furnished bedroom interior",
        "Dedicated work desk with charging points",
        "Ensuite bathroom with modern fittings",
        "Individual climate control & high-speed Wi-Fi"
      ],
      isAvailableForEnquiry: true
    },
    {
      id: "twin-sharing-room",
      slug: "twin-sharing-room",
      name: "TWIN SHARING ROOM",
      shortDescription: "Spacious dual accommodation featuring two comfortable beds, ideal for corporate colleagues, friends, or traveling duos.",
      fullDescription: "The Twin Sharing Room provides generous floor space configured with two independent twin beds, offering complete privacy and comfort for co-workers or traveling companions attending conferences or airport transit.",
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80"
      ],
      features: [
        "Twin single bed configuration",
        "Spacious wardrobe and luggage storage",
        "Ensuite bathroom with hot & cold water",
        "High-speed Wi-Fi and bedside lighting"
      ],
      isAvailableForEnquiry: true
    },
    {
      id: "executive-room",
      slug: "executive-room",
      name: "EXECUTIVE ROOM",
      shortDescription: "An elevated stay experience featuring enhanced comfort, refined furnishings, and ample workspace tailored for business leaders.",
      fullDescription: "Designed for travelers who demand extra space and refined design, the Executive Room features an expansive layout, plush seating area, and dedicated work console for effortless productivity before or after flights.",
      image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80"
      ],
      features: [
        "Premium bedding and contemporary decor",
        "Ergonomic executive work station",
        "Spacious ensuite bathroom with luxury touches",
        "Ample seating area and smart entertainment setup"
      ],
      isAvailableForEnquiry: true
    },
    {
      id: "suite-room",
      slug: "suite-room",
      name: "SUITE ROOM",
      shortDescription: "Our signature luxury accommodation combining an opulent private bedroom with an expansive living and hosting lounge.",
      fullDescription: "The Suite Room represents the pinnacle of hospitality at Ayora Suites. Boasting a separate living lounge, master bedroom retreat, and deluxe bath appointments, it delivers an unforgettable boutique luxury experience.",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
      ],
      features: [
        "Separate living lounge and private master suite",
        "Expansive boutique styling with warm luxury tones",
        "Spacious ensuite with premium bath fixtures",
        "Ideal for VIP corporate guests & long stays"
      ],
      isAvailableForEnquiry: true
    }
  ] as RoomData[],

  amenities: [
    {
      id: "wifi",
      title: "High-Speed Wi-Fi",
      description: "Seamless wireless internet throughout the property for uninterrupted work and streaming.",
      icon: "Wifi",
      isConfirmed: true
    },
    {
      id: "parking",
      title: "Secure Parking",
      description: "Dedicated on-site parking space for resident guests and meeting attendees.",
      icon: "Car",
      isConfirmed: true
    },
    {
      id: "air-conditioning",
      title: "Air Conditioning",
      description: "Individually controlled climate settings in all rooms and public spaces.",
      icon: "AirVent",
      isConfirmed: true
    },
    {
      id: "dining",
      title: "Dining & Refreshments",
      description: "Delicious culinary offerings and morning refreshments prepared with quality ingredients.",
      icon: "UtensilsCrossed",
      isConfirmed: true
    },
    {
      id: "room-service",
      title: "In-Room Service",
      description: "Attentive assistance and dining served directly to the privacy of your suite.",
      icon: "Bell",
      isConfirmed: true
    },
    {
      id: "conference",
      title: "Conference & Events",
      description: "Dedicated spaces equipped for corporate meetings, workshops, and business discussions.",
      icon: "Presentation",
      isConfirmed: true
    },
    {
      id: "front-desk",
      title: "24/7 Front Desk",
      description: "Round-the-clock reception to assist with arrivals, transit coordination, and guest inquiries.",
      icon: "Clock",
      isConfirmed: true
    },
    {
      id: "housekeeping",
      title: "Daily Housekeeping",
      description: "Meticulous sanitization and room freshening maintaining the highest hygiene standards.",
      icon: "Sparkles",
      isConfirmed: true
    }
  ] as AmenityItem[],

  gallery: [
    {
      id: "g-1",
      title: "Boutique Suite Interior",
      category: "Rooms",
      imageUrl: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "g-2",
      title: "Executive Conference Hall",
      category: "Meetings & Events",
      imageUrl: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "g-3",
      title: "Warm Ivory Reception Lounge",
      category: "Property",
      imageUrl: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "g-4",
      title: "Luxury Suite Living Area",
      category: "Rooms",
      imageUrl: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "g-5",
      title: "Architectural Symmetry & Lighting",
      category: "Interiors",
      imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "g-6",
      title: "Corporate Meeting Room Setup",
      category: "Meetings & Events",
      imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "g-7",
      title: "Twin Sharing Accommodation",
      category: "Rooms",
      imageUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "g-8",
      title: "Contemporary Dining & Cafe",
      category: "Interiors",
      imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "g-9",
      title: "Kempegowda Airport Corridor",
      category: "Surroundings",
      imageUrl: "https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=1200&q=80"
    }
  ] as GalleryItem[],

  nearbyLandmarks: [
    { name: "Kempegowda International Airport (BLR)", distance: "~ 15 Mins", category: "Transit" },
    { name: "Decathlon Chikkajala", distance: "Walking Distance / 2 Mins", category: "Landmark" },
    { name: "KIADB Aerospace & IT Park", distance: "~ 12 Mins", category: "Business" },
    { name: "Devanahalli Business & Tech Hub", distance: "~ 15 Mins", category: "Business" },
    { name: "Yelahanka Commercial Centre", distance: "~ 15 Mins", category: "Retail & Transit" }
  ] as LandmarkItem[]
};

export const generateWhatsAppBookingLink = (params: {
  checkIn?: string;
  checkOut?: string;
  guests?: string | number;
  roomCategory?: string;
  name?: string;
}) => {
  const { checkIn, checkOut, guests, roomCategory, name } = params;
  let text = "Hello Ayora Suites, ";
  
  if (name) {
    text += `my name is ${name}. `;
  }

  if (checkIn && checkOut) {
    text += `I would like to enquire about a stay from ${checkIn} to ${checkOut}`;
    if (guests) text += ` for ${guests} guests`;
    if (roomCategory) text += ` in the ${roomCategory}`;
    text += ". Please share availability and details.";
  } else if (roomCategory) {
    text += `I am interested in booking a ${roomCategory}. Please share the details.`;
  } else {
    text += "I would like to know more about your property and room availability.";
  }

  return `https://wa.me/${HOTEL_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
};

export const generateWhatsAppMeetingLink = (params: {
  name?: string;
  company?: string;
  date?: string;
  attendees?: string | number;
  eventType?: string;
}) => {
  const { name, company, date, attendees, eventType } = params;
  let text = "Hello Ayora Suites, ";
  if (name) text += `I am ${name}`;
  if (company) text += ` from ${company}`;
  text += ". I would like to enquire about conference and meeting facilities";
  if (eventType) text += ` for a ${eventType}`;
  if (date) text += ` on ${date}`;
  if (attendees) text += ` for approx ${attendees} attendees`;
  text += ". Please connect with me.";
  return `https://wa.me/${HOTEL_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
};
