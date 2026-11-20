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
  category: 'Rooms & Suites' | 'Property & Facade' | 'Lobby & Reception' | 'Dining' | 'Meetings & Events' | 'Property' | 'Rooms' | 'Interiors' | 'Surroundings';
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
    tagline: "Boutique Hotel · Bengaluru Airport Road",
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
    web3formsAccessKey: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "",
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
      id: "g-ext-1",
      title: "Ayora Suites Architectural Facade & Portico",
      category: "Property & Facade",
      imageUrl: "/images/hotel/exterior/exterior-front.jpg"
    },
    {
      id: "g-suite-1",
      title: "Signature Suite Master King Bedroom",
      category: "Rooms & Suites",
      imageUrl: "/images/hotel/rooms/suite/suite-main.jpg"
    },
    {
      id: "g-rec-1",
      title: "Grand Reception Lobby & Foyer",
      category: "Lobby & Reception",
      imageUrl: "/images/hotel/reception/reception-lobby.jpg"
    },
    {
      id: "g-din-1",
      title: "Ayora Suites Restaurant & Dining Space",
      category: "Dining",
      imageUrl: "/images/hotel/dining/dining-main.jpg"
    },
    {
      id: "g-conf-1",
      title: "Executive Conference & Banquet Hall",
      category: "Meetings & Events",
      imageUrl: "/images/hotel/conference/conference-main.jpg"
    },
    {
      id: "g-exec-1",
      title: "Executive King Room Sanctuary",
      category: "Rooms & Suites",
      imageUrl: "/images/hotel/rooms/executive/executive-main.jpg"
    },
    {
      id: "g-ext-2",
      title: "Evening Illumination & Architectural Night View",
      category: "Property & Facade",
      imageUrl: "/images/hotel/exterior/exterior-night.jpg"
    },
    {
      id: "g-rec-2",
      title: "Boutique Reception & Concierge Desk",
      category: "Lobby & Reception",
      imageUrl: "/images/hotel/reception/reception-main.jpg"
    },
    {
      id: "g-dlx-1",
      title: "Deluxe King Room Atmosphere",
      category: "Rooms & Suites",
      imageUrl: "/images/hotel/rooms/deluxe/deluxe-main.jpg"
    },
    {
      id: "g-din-2",
      title: "Gourmet Breakfast & Buffet Counter",
      category: "Dining",
      imageUrl: "/images/hotel/dining/dining-buffet.jpg"
    },
    {
      id: "g-conf-2",
      title: "Audio-Visual Seminar & Stage Setup",
      category: "Meetings & Events",
      imageUrl: "/images/hotel/conference/conference-presentation.jpg"
    },
    {
      id: "g-twin-1",
      title: "Twin Sharing Room Accommodation",
      category: "Rooms & Suites",
      imageUrl: "/images/hotel/rooms/twin/twin-beds.jpg"
    },
    {
      id: "g-ext-3",
      title: "Airport Corridor Architectural Landmark",
      category: "Property & Facade",
      imageUrl: "/images/hotel/exterior/exterior-facade.jpg"
    },
    {
      id: "g-suite-2",
      title: "Signature Suite Private Living Lounge",
      category: "Rooms & Suites",
      imageUrl: "/images/hotel/rooms/suite/suite-living.jpg"
    },
    {
      id: "g-rec-3",
      title: "Executive Guest Welcome Lounge",
      category: "Lobby & Reception",
      imageUrl: "/images/hotel/reception/reception-lounge.jpg"
    },
    {
      id: "g-din-3",
      title: "Multi-Cuisine Dining Hall",
      category: "Dining",
      imageUrl: "/images/hotel/dining/dining-restaurant.jpg"
    },
    {
      id: "g-conf-3",
      title: "Corporate Boardroom & Strategy Table",
      category: "Meetings & Events",
      imageUrl: "/images/hotel/conference/conference-boardroom.jpg"
    },
    {
      id: "g-exec-2",
      title: "Executive Room Spacious Perspective",
      category: "Rooms & Suites",
      imageUrl: "/images/hotel/rooms/executive/executive-suite.jpg"
    },
    {
      id: "g-ext-4",
      title: "Modern Facade & Corner Perspective",
      category: "Property & Facade",
      imageUrl: "/images/hotel/exterior/exterior-angle.jpg"
    },
    {
      id: "g-rec-4",
      title: "Concierge & Front Desk Service",
      category: "Lobby & Reception",
      imageUrl: "/images/hotel/reception/reception-desk.jpg"
    },
    {
      id: "g-suite-3",
      title: "Signature Suite Plush Sofa & Sitting Area",
      category: "Rooms & Suites",
      imageUrl: "/images/hotel/rooms/suite/suite-lounge.jpg"
    },
    {
      id: "g-din-4",
      title: "Intimate Restaurant Table Setting",
      category: "Dining",
      imageUrl: "/images/hotel/dining/dining-tables.jpg"
    },
    {
      id: "g-dlx-2",
      title: "Deluxe King Bed & Luxury Headboard",
      category: "Rooms & Suites",
      imageUrl: "/images/hotel/rooms/deluxe/deluxe-bed.jpg"
    },
    {
      id: "g-conf-4",
      title: "Flexible Corporate Event Seating Layout",
      category: "Meetings & Events",
      imageUrl: "/images/hotel/conference/conference-layout.jpg"
    },
    {
      id: "g-twin-2",
      title: "Twin Sharing Room Overview",
      category: "Rooms & Suites",
      imageUrl: "/images/hotel/rooms/twin/twin-main.jpg"
    },
    {
      id: "g-rec-5",
      title: "Plush Waiting & Transit Lounge",
      category: "Lobby & Reception",
      imageUrl: "/images/hotel/reception/reception-seating.jpg"
    },
    {
      id: "g-din-5",
      title: "Warm Ambient Dining Lighting & Decor",
      category: "Dining",
      imageUrl: "/images/hotel/dining/dining-ambience.jpg"
    },
    {
      id: "g-exec-3",
      title: "Executive Plush King Bedding",
      category: "Rooms & Suites",
      imageUrl: "/images/hotel/rooms/executive/executive-bed.jpg"
    },
    {
      id: "g-ext-5",
      title: "Ground Floor Welcome & Porte-Cochère",
      category: "Property & Facade",
      imageUrl: "/images/hotel/exterior/exterior-entrance.jpg"
    },
    {
      id: "g-suite-4",
      title: "Signature Suite Panoramic Living View",
      category: "Rooms & Suites",
      imageUrl: "/images/hotel/rooms/suite/suite-view.jpg"
    },
    {
      id: "g-dlx-3",
      title: "Deluxe Ergonomic Work Desk",
      category: "Rooms & Suites",
      imageUrl: "/images/hotel/rooms/deluxe/deluxe-workdesk.jpg"
    },
    {
      id: "g-din-6",
      title: "Window-Side Restaurant Seating",
      category: "Dining",
      imageUrl: "/images/hotel/dining/dining-view.jpg"
    },
    {
      id: "g-rec-6",
      title: "Interior Aesthetic & Design Accents",
      category: "Lobby & Reception",
      imageUrl: "/images/hotel/reception/reception-details.jpg"
    },
    {
      id: "g-exec-4",
      title: "Executive Velvet Armchair Corner",
      category: "Rooms & Suites",
      imageUrl: "/images/hotel/rooms/executive/executive-seating.jpg"
    },
    {
      id: "g-twin-3",
      title: "Twin Room Airy Room Layout",
      category: "Rooms & Suites",
      imageUrl: "/images/hotel/rooms/twin/twin-view.jpg"
    },
    {
      id: "g-dlx-4",
      title: "Deluxe Room Wide Angle Comfort",
      category: "Rooms & Suites",
      imageUrl: "/images/hotel/rooms/deluxe/deluxe-angle.jpg"
    },
    {
      id: "g-suite-5",
      title: "Signature Suite Bedside Decor & Warm Lighting",
      category: "Rooms & Suites",
      imageUrl: "/images/hotel/rooms/suite/suite-bedside.jpg"
    },
    {
      id: "g-exec-5",
      title: "Executive Business Workstation & Vanity",
      category: "Rooms & Suites",
      imageUrl: "/images/hotel/rooms/executive/executive-desk.jpg"
    },
    {
      id: "g-twin-4",
      title: "Twin Room Study & Utility Desk",
      category: "Rooms & Suites",
      imageUrl: "/images/hotel/rooms/twin/twin-desk.jpg"
    },
    {
      id: "g-suite-6",
      title: "Signature Suite Entry Vestibule",
      category: "Rooms & Suites",
      imageUrl: "/images/hotel/rooms/suite/suite-foyer.jpg"
    },
    {
      id: "g-dlx-5",
      title: "Deluxe Sanitized Ensuite Bathroom",
      category: "Rooms & Suites",
      imageUrl: "/images/hotel/rooms/deluxe/deluxe-washroom.jpg"
    },
    {
      id: "g-exec-6",
      title: "Executive Luxury Ensuite Washroom",
      category: "Rooms & Suites",
      imageUrl: "/images/hotel/rooms/executive/executive-washroom.jpg"
    },
    {
      id: "g-twin-5",
      title: "Twin Room Sparkling Clean Bathroom",
      category: "Rooms & Suites",
      imageUrl: "/images/hotel/rooms/twin/twin-washroom.jpg"
    },
    {
      id: "g-suite-7",
      title: "Signature Suite In-Room Tea & Coffee Station",
      category: "Rooms & Suites",
      imageUrl: "/images/hotel/rooms/suite/suite-amenities.jpg"
    },
    {
      id: "g-dlx-6",
      title: "Deluxe Room Thoughtful In-Room Amenities",
      category: "Rooms & Suites",
      imageUrl: "/images/hotel/rooms/deluxe/deluxe-amenities.jpg"
    },
    {
      id: "g-twin-6",
      title: "Twin Room Window & Lighting Perspective",
      category: "Rooms & Suites",
      imageUrl: "/images/hotel/rooms/twin/twin-angle.jpg"
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
