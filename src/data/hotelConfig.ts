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
    logoUrl: "/images/ayora-logo.png",
    logoWhiteUrl: "/images/ayora-logo-white.png",
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
      image: "/images/hotel/rooms/deluxe/deluxe-main.jpg",
      gallery: [
        "/images/hotel/rooms/deluxe/deluxe-main.jpg",
        "/images/hotel/rooms/deluxe/deluxe-bed.jpg",
        "/images/hotel/rooms/deluxe/deluxe-workdesk.jpg",
        "/images/hotel/rooms/deluxe/deluxe-angle.jpg",
        "/images/hotel/rooms/deluxe/deluxe-washroom.jpg"
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
      image: "/images/hotel/rooms/twin/twin-main.jpg",
      gallery: [
        "/images/hotel/rooms/twin/twin-main.jpg",
        "/images/hotel/rooms/twin/twin-beds.jpg",
        "/images/hotel/rooms/twin/twin-view.jpg",
        "/images/hotel/rooms/twin/twin-desk.jpg",
        "/images/hotel/rooms/twin/twin-washroom.jpg"
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
      image: "/images/hotel/rooms/executive/executive-main.jpg",
      gallery: [
        "/images/hotel/rooms/executive/executive-main.jpg",
        "/images/hotel/rooms/executive/executive-suite.jpg",
        "/images/hotel/rooms/executive/executive-desk.jpg",
        "/images/hotel/rooms/executive/executive-bed.jpg",
        "/images/hotel/rooms/executive/executive-washroom.jpg"
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
      image: "/images/hotel/rooms/suite/suite-main.jpg",
      gallery: [
        "/images/hotel/rooms/suite/suite-main.jpg",
        "/images/hotel/rooms/suite/suite-view.jpg",
        "/images/hotel/rooms/suite/suite-living.jpg",
        "/images/hotel/rooms/suite/suite-foyer.jpg",
        "/images/hotel/rooms/suite/suite-bedside.jpg",
        "/images/hotel/rooms/suite/suite-amenities.jpg"
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
      title: "Ayora Suites Architectural Facade",
      category: "Property",
      imageUrl: "/images/hotel/exterior/exterior-front.jpg"
    },
    {
      id: "g-2",
      title: "Executive Conference & Boardroom",
      category: "Meetings & Events",
      imageUrl: "/images/hotel/conference/conference-main.jpg"
    },
    {
      id: "g-3",
      title: "Welcoming Reception Lobby & Foyer",
      category: "Property",
      imageUrl: "/images/hotel/reception/reception-lobby.jpg"
    },
    {
      id: "g-4",
      title: "Signature Suite Master Bedroom",
      category: "Rooms",
      imageUrl: "/images/hotel/rooms/suite/suite-main.jpg"
    },
    {
      id: "g-5",
      title: "Boutique Reception Desk & Guest Welcome",
      category: "Interiors",
      imageUrl: "/images/hotel/reception/reception-main.jpg"
    },
    {
      id: "g-6",
      title: "Corporate Meeting & Audio-Visual Hall",
      category: "Meetings & Events",
      imageUrl: "/images/hotel/conference/conference-presentation.jpg"
    },
    {
      id: "g-7",
      title: "Twin Sharing Room Accommodation",
      category: "Rooms",
      imageUrl: "/images/hotel/rooms/twin/twin-beds.jpg"
    },
    {
      id: "g-8",
      title: "Ayora Suites Dining & Restaurant",
      category: "Interiors",
      imageUrl: "/images/hotel/dining/dining-main.jpg"
    },
    {
      id: "g-9",
      title: "Evening Illumination & Architectural Night View",
      category: "Property",
      imageUrl: "/images/hotel/exterior/exterior-night.jpg"
    },
    {
      id: "g-10",
      title: "Executive King Room Sanctuary",
      category: "Rooms",
      imageUrl: "/images/hotel/rooms/executive/executive-main.jpg"
    },
    {
      id: "g-11",
      title: "Gourmet Buffet & Dining Counter",
      category: "Interiors",
      imageUrl: "/images/hotel/dining/dining-buffet.jpg"
    },
    {
      id: "g-12",
      title: "Airport Corridor Landmark Exterior",
      category: "Surroundings",
      imageUrl: "/images/hotel/exterior/exterior-facade.jpg"
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
