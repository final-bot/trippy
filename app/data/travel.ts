// ─── Types ─────────────────────────────────────────────────────────────────

export interface Destination {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  image: string;
}

export interface ThumbnailItem {
  id: number;
  label: string;
  image: string;
}

export interface TravelPlan {
  id: string;
  name: string;
  eyebrow?: string;
  price: number;
  description: string;
  cta: string;
  features: string[];
  featured?: boolean;
}

// ─── Data ──────────────────────────────────────────────────────────────────

export const HERO_THUMBNAILS: ThumbnailItem[] = [
  {
    id: 1,
    label: "Nature",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&q=80",
  },
  {
    id: 2,
    label: "Mountain",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80",
  },
  {
    id: 3,
    label: "Village",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
  },
];

export const DESTINATIONS: Destination[] = [
  {
    id: 1,
    title: "Beautiful Bali Beaches",
    subtitle: "Relax and enjoy Bali's stunning tropical beaches.",
    category: "Adventure",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
  },
  {
    id: 2,
    title: "Rice Terraces of Vietnam",
    subtitle: "Trek through lush emerald hillsides in the north.",
    category: "Nature",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=600&q=80",
  },
  {
    id: 3,
    title: "Cable Cars, Langkawi",
    subtitle: "Soar above the ancient rainforest canopy.",
    category: "Culture",
    image: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=600&q=80",
  },
  {
    id: 4,
    title: "Santorini Sunsets",
    subtitle: "Whitewashed walls, blue domes, golden hour.",
    category: "Romance",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&q=80",
  },
  {
    id: 5,
    title: "Kyoto in Autumn",
    subtitle: "Maples set the ancient temples ablaze.",
    category: "Culture",
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80",
  },
  {
    id: 6,
    title: "Patagonian Peaks",
    subtitle: "The raw, untouched end of the world.",
    category: "Adventure",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80",
  },
  {
    id: 7,
    title: "Amalfi Coast",
    subtitle: "Clifftop villages draped above azure waters.",
    category: "Leisure",
    image: "https://images.unsplash.com/photo-1612538498456-e861df91d4d0?w=600&q=80",
  },
  {
    id: 8,
    title: "Marrakech Medina",
    subtitle: "Labyrinthine souks and rooftop terraces.",
    category: "Culture",
    image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=600&q=80",
  },
  {
    id: 9,
    title: "Maldives Lagoon",
    subtitle: "Crystalline waters over living coral reefs.",
    category: "Nature",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=80",
  },
];

export const NAV_ITEMS = ["Home", "Trips", "Community", "About", "Contact"] as const;

export const TRAVEL_PLANS: TravelPlan[] = [
  {
    id: "basic",
    name: "Basic Explorer",
    price: 199,
    description: "Perfect for solo travelers and short adventures.",
    cta: "Start Journey",
    features: [
      "3 Days / 2 Nights Package",
      "Standard Hotel Stay",
      "Airport Pickup",
      "Free Breakfast",
      "City Tour (1 Location)",
      "Email Support",
    ],
  },
  {
    id: "comfort",
    name: "Most Popular",
    eyebrow: "Comfort Plan",
    price: 399,
    description: "Best for couples and small groups looking for comfort.",
    cta: "Book Now",
    featured: true,
    features: [
      "5 Days / 4 Nights Package",
      "4-Star Hotel Accommodation",
      "Airport Pickup & Drop",
      "Daily Breakfast + 1 Dinner",
      "Guided City Tours",
      "Professional Travel Guide",
    ],
  },
  {
    id: "premium",
    name: "Premium Voyager",
    price: 299,
    description: "For luxury lovers and premium explorers.",
    cta: "Start Journey",
    features: [
      "7 Days / 6 Nights Package",
      "5-Star Luxury Hotel",
      "Private Transport",
      "All Meals Included",
      "Personalized Travel Itinerary",
      "24/7 Dedicated Support",
    ],
  },
];
