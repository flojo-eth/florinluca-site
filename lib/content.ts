// Real, validated content for Pensiunea Amonte (extracted from the approved
// design prototype). Conversion is WhatsApp-only — there is no custom form.

// The single tracked conversion: WhatsApp click. Used by every WhatsApp CTA.
export const WHATSAPP_URL =
  "https://wa.me/40747342280?text=Salut!%20A%C8%99%20dori%20s%C4%83%20verific%20disponibilitatea%20pentru%20o%20rezervare%20la%20Pensiunea%20Amonte.";

// Fallback when WhatsApp is unavailable.
export const GOOGLE_FORM_URL = "https://forms.gle/Ft4iFEuRJUfbyAPV6";

export const CONTACT = {
  phoneMobile: "0747 342 280", // mobil / WhatsApp
  phoneLandline: "0369 420 619", // fix
  email: "contact@pensiunea-amonte.ro",
  address: "Valea Avrigului 642, jud. Sibiu, România",
  social: "@pensiunea.amonte", // Instagram · Facebook · TikTok
} as const;

export const LOCATION = "Valea Avrigului · Munții Făgăraș";

export const STATS = [
  { value: "10", label: "Unități de cazare" },
  { value: "24", label: "Oaspeți" },
  { value: "30'", label: "De Sibiu" },
] as const;

export type Room = {
  slug: string;
  name: string;
  spec: string;
  /** Short description for cards. */
  desc: string;
  /** Longer description for the detail page. */
  longDesc: string;
  price: string; // "de la 500"
  features: string[];
  photoLabel: string;
};

export const ROOMS: Room[] = [
  {
    slug: "camera-dubla-vedere-munte",
    name: "Cameră dublă cu vedere la munte",
    spec: "2 persoane · balcon privat · vedere munte",
    desc: "Cameră modernă cu balcon privat și priveliște spre munte. Ideală pentru relaxare în cuplu. Mic dejun inclus.",
    longDesc:
      "Cameră modernă, luminoasă, cu balcon privat și priveliște deschisă spre Munții Făgăraș. Gândită pentru relaxare în cuplu, cu acces la zona de wellness (jacuzzi & saună) și living-ul cu șemineu. Mic dejun inclus.",
    price: "de la 500",
    features: [
      "2 persoane",
      "Balcon privat",
      "Vedere la munte",
      "Mic dejun inclus",
    ],
    photoLabel: "[ cameră dublă ]",
  },
  {
    slug: "studio-de-familie",
    name: "Studio de familie",
    spec: "4 persoane · pat matrimonial + canapea extensibilă",
    desc: "Spațios și confortabil, potrivit pentru familii și grupuri mici. Mic dejun inclus.",
    longDesc:
      "Studio spațios și confortabil, cu pat matrimonial și canapea extensibilă — potrivit pentru familii și grupuri mici de până la 4 persoane. Acces la zona de wellness și la living-ul cu șemineu. Mic dejun inclus.",
    price: "de la 800",
    features: [
      "4 persoane",
      "Pat matrimonial + canapea extensibilă",
      "Potrivit pentru familii",
      "Mic dejun inclus",
    ],
    photoLabel: "[ studio familie ]",
  },
];

export function getRoom(slug: string): Room | undefined {
  return ROOMS.find((r) => r.slug === slug);
}

export type Amenity = { icon: string; label: string };

export const AMENITIES: Amenity[] = [
  { icon: "🍳", label: "Mic dejun inclus" },
  { icon: "🧖", label: "Jacuzzi & saună" },
  { icon: "🔥", label: "Living cu șemineu" },
  { icon: "🍸", label: "Bar pentru oaspeți" },
  { icon: "🏔️", label: "Terasă panoramică" },
  { icon: "🪵", label: "Firepit exterior" },
  { icon: "🅿️", label: "Parcare gratuită" },
  { icon: "🐕", label: "Dog-friendly (Bruno)" },
];

export type Activity = {
  name: string;
  desc: string;
  dist: string;
  photoLabel: string;
};

export const ACTIVITIES: Activity[] = [
  {
    name: "Drumeții în Făgăraș",
    desc: "Trasee montane și plimbări în natură, în Munții Făgăraș.",
    dist: "în zonă",
    photoLabel: "[ trasee Făgăraș ]",
  },
  {
    name: "Brambura Park",
    desc: "Parc de aventură și activități pentru toată familia.",
    dist: "în apropiere",
    photoLabel: "[ Brambura Park ]",
  },
  {
    name: "Palatul Brukenthal",
    desc: "Reședința de vară și grădinile din Avrig.",
    dist: "în apropiere",
    photoLabel: "[ Palatul Brukenthal ]",
  },
  {
    name: "Castelul de Lut",
    desc: "Atracție unică din Valea Zânelor.",
    dist: "în apropiere",
    photoLabel: "[ Castelul de Lut ]",
  },
  {
    name: "Călărie & ATV",
    desc: "Experiențe în aer liber, în funcție de sezon.",
    dist: "sezonier",
    photoLabel: "[ ATV / călărie ]",
  },
  {
    name: "Fermă de cerbi",
    desc: "Vizită la ferma de cerbi din zonă.",
    dist: "sezonier",
    photoLabel: "[ fermă de cerbi ]",
  },
];

export type GalleryItem = { label: string; span: 1 | 2 };

export const GALLERY: GalleryItem[] = [
  { label: "[ exterior pensiune ]", span: 2 },
  { label: "[ jacuzzi & saună ]", span: 1 },
  { label: "[ mic dejun ]", span: 1 },
  { label: "[ cameră / balcon ]", span: 1 },
  { label: "[ priveliște Făgăraș ]", span: 2 },
  { label: "[ firepit / terasă seara ]", span: 1 },
];

// Reviews are intentionally left as marked placeholders — the owner fills these
// in with real Google / Booking / Facebook reviews. Do NOT invent reviews.
export type Review = {
  stars: string;
  text: string;
  name: string;
  meta: string;
  initial: string;
};

export const REVIEWS: Review[] = [
  {
    stars: "★★★★★",
    text: "„[Recenzie reală — de adăugat din Google]”",
    name: "[Nume oaspete]",
    meta: "Google · [lună an]",
    initial: "•",
  },
  {
    stars: "★★★★★",
    text: "„[Recenzie reală — de adăugat din Booking]”",
    name: "[Nume oaspete]",
    meta: "Booking · [lună an]",
    initial: "•",
  },
  {
    stars: "★★★★★",
    text: "„[Recenzie reală — de adăugat din Facebook]”",
    name: "[Nume oaspete]",
    meta: "Facebook · [lună an]",
    initial: "•",
  },
];

// Primary site navigation (anchors on the home page).
export const NAV_LINKS = [
  { href: "/despre-noi", label: "Despre" },
  { href: "/camere", label: "Camere" },
  { href: "/galerie", label: "Galerie" },
  { href: "/activitati-in-zona", label: "Împrejurimi" },
  { href: "/servicii", label: "Servicii" },
] as const;
