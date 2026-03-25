export type IconKey =
  | "droplets"
  | "milk"
  | "candy"
  | "wheat"
  | "flower"
  | "leaf"
  | "package"
  | "cooking"
  | "scroll"
  | "sparkles"
  | "brush"
  | "cup"
  | "users"
  | "baby"
  | "heart"
  | "dumbbell"
  | "hand"
  | "briefcase"
  | "store"
  | "shopping"
  | "scale"
  | "shield"
  | "badge"
  | "truck"
  | "pin"
  | "file";

export type HeroSlide = {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  bullets: string[];
  cta: string;
  visual: "community" | "pantry" | "gift";
};

export type Category = {
  title: string;
  icon: IconKey;
};

export type Product = {
  name: string;
  price: string;
  compareAt: string;
  tags: string[];
  sizes: string[];
  tone: "bottle" | "jar" | "packet";
};

export type ProductTab = {
  id: string;
  label: string;
  products: Product[];
};

export type ProductSection = {
  title: string;
  subtitle: string;
  products?: Product[];
  tabs?: ProductTab[];
};

export type DesktopNavLink = {
  label: string;
  blurb: string;
  href: string;
};

export type DesktopNavColumn = {
  heading: string;
  links: DesktopNavLink[];
};

export type DesktopNavFeature = {
  eyebrow: string;
  title: string;
  description: string;
  icon: IconKey;
  highlights: string[];
};

export type DesktopNavItem = {
  label: string;
  href: string;
  chevron?: boolean;
  menu?: {
    intro: string;
    cta: string;
    columns: DesktopNavColumn[];
    feature: DesktopNavFeature;
  };
};

export const announcementItems = [
  "Free shipping on orders above Rs. 799",
  "Handcrafted pantry essentials",
  "Launch bundles with 5% savings",
];

export const navItems: DesktopNavItem[] = [
  {
    label: "Cold Pressed Oils",
    href: "#",
    chevron: true,
    menu: {
      intro:
        "Guide shoppers into everyday cooking oils, premium pressed variants, and benefit-led best sellers without making the menu feel crowded.",
      cta: "Browse all oils",
      columns: [
        {
          heading: "Everyday kitchen",
          links: [
            { label: "Groundnut Oil", blurb: "Family cooking, roasting, and daily sauteing", href: "#" },
            { label: "Coconut Oil", blurb: "Balanced pantry essential for sweet and savory use", href: "#" },
            { label: "Sesame Oil", blurb: "Traditional depth for South Indian meals", href: "#" },
          ],
        },
        {
          heading: "Specialty pressed",
          links: [
            { label: "Castor Oil", blurb: "Routine-led beauty and scalp care", href: "#" },
            { label: "Black Cumin Oil", blurb: "Premium wellness-led merchandising", href: "#" },
            { label: "Moringa Seed Oil", blurb: "High-value premium shelf with stronger margins", href: "#" },
          ],
        },
        {
          heading: "Shop by benefit",
          links: [
            { label: "Heart-Friendly Picks", blurb: "Cleaner entry route for health-conscious families", href: "#" },
            { label: "Hair & Skin Oils", blurb: "Cross-sell beauty and wellness from one menu", href: "#" },
            { label: "Trial Size Bottles", blurb: "Reduce hesitation for first-time buyers", href: "#" },
          ],
        },
      ],
      feature: {
        eyebrow: "Kitchen essential",
        title: "Start with wood-pressed staples",
        description:
          "Use this featured space for hero oils, margin-first bundles, or new-customer trial packs that deserve extra attention.",
        icon: "droplets",
        highlights: [
          "Cold-pressed and wood-pressed range",
          "Trial, family, and combo sizes",
          "Strong first-stop category for new shoppers",
        ],
      },
    },
  },
  {
    label: "Traditional Pantry",
    href: "#",
    chevron: true,
    menu: {
      intro:
        "Build a wider grocery story with grains, sweeteners, and home staples while keeping the structure easy to scan on first hover.",
      cta: "Explore the pantry",
      columns: [
        {
          heading: "Millets & mixes",
          links: [
            { label: "Health Mixes", blurb: "Breakfast-led staples for fast repeat buying", href: "#" },
            { label: "Millet Flour", blurb: "Fitness-forward and everyday family use", href: "#" },
            { label: "Instant Millet Cups", blurb: "Desk-friendly and travel-ready convenience", href: "#" },
          ],
        },
        {
          heading: "Sweeteners",
          links: [
            { label: "Palm Jaggery", blurb: "Traditional sweetness with stronger storytelling", href: "#" },
            { label: "Nattu Sakkarai", blurb: "Daily tea and coffee pantry staple", href: "#" },
            { label: "Jaggery Powder", blurb: "Baking and breakfast add-on purchase", href: "#" },
          ],
        },
        {
          heading: "Everyday pantry",
          links: [
            { label: "Traditional Rice", blurb: "Staple-led pantry depth and trust", href: "#" },
            { label: "Curry Powders", blurb: "High-frequency essentials for the main basket", href: "#" },
            { label: "Pappad & Pickle", blurb: "Small add-ons that lift cart value", href: "#" },
          ],
        },
      ],
      feature: {
        eyebrow: "Pantry expansion",
        title: "Broaden the basket beyond oils",
        description:
          "This panel can spotlight pantry combos, morning staples, or a curated essentials edit that increases cart depth naturally.",
        icon: "wheat",
        highlights: [
          "Breakfast, meals, and snack-time staples",
          "Great area for bundle-led merchandising",
          "Ideal for repeat-order pantry storytelling",
        ],
      },
    },
  },
  {
    label: "Shop by Category",
    href: "#",
    chevron: true,
    menu: {
      intro:
        "Give visitors a quick category scan route with sharper grouping, better labels, and far less visual noise than a basic dropdown.",
      cta: "See all categories",
      columns: [
        {
          heading: "Oils & ghee",
          links: [
            { label: "Cold Pressed Oils", blurb: "The core traffic-driving collection", href: "#" },
            { label: "Pure Cow Ghee", blurb: "Premium traditional fat category", href: "#" },
            { label: "Special Oils", blurb: "Higher-ticket wellness-led assortment", href: "#" },
          ],
        },
        {
          heading: "Sweeteners & snacks",
          links: [
            { label: "Natural Sweeteners", blurb: "Tea, coffee, and baking pantry staples", href: "#" },
            { label: "Dry Fruits & Seeds", blurb: "Fitness, office, and kids snacking", href: "#" },
            { label: "Millet Cups", blurb: "Portable, quick-prep modern pantry products", href: "#" },
          ],
        },
        {
          heading: "Pantry & care",
          links: [
            { label: "Traditional Rice", blurb: "Trust-led staple grain segment", href: "#" },
            { label: "Beauty Oils", blurb: "Skin and hair care crossover category", href: "#" },
            { label: "Hair Care", blurb: "Routine-based beauty merchandising", href: "#" },
          ],
        },
      ],
      feature: {
        eyebrow: "Quick access",
        title: "Let people browse their own way",
        description:
          "This featured area works well for a category snapshot, best-seller shortcuts, or a light promotional card tied to a collection.",
        icon: "shopping",
        highlights: [
          "Fast route for decisive shoppers",
          "Clear grouping for broad assortments",
          "Strong support for search-light visitors",
        ],
      },
    },
  },
  {
    label: "Find a Routine",
    href: "#",
    chevron: true,
    menu: {
      intro:
        "Turn the navigation into a guided discovery tool by mapping products to daily rituals instead of only raw categories.",
      cta: "Build a routine",
      columns: [
        {
          heading: "Morning ritual",
          links: [
            { label: "Breakfast Boosters", blurb: "Millet mixes, sweeteners, and seed add-ons", href: "#" },
            { label: "Tea & Coffee Pantry", blurb: "Palm jaggery and everyday sweeteners", href: "#" },
            { label: "Desk-Ready Cups", blurb: "Fast prep options for working days", href: "#" },
          ],
        },
        {
          heading: "Cooking essentials",
          links: [
            { label: "Daily Oil Routine", blurb: "Core kitchen oils for home cooking", href: "#" },
            { label: "Weekly Pantry Restock", blurb: "Staples for repeat household orders", href: "#" },
            { label: "Festival Cooking Picks", blurb: "Traditional ingredients for occasions", href: "#" },
          ],
        },
        {
          heading: "Beauty & care",
          links: [
            { label: "Hair Oiling", blurb: "Scalp and repair-focused weekly routines", href: "#" },
            { label: "Skin Nourish", blurb: "Face and body care oils for premium shoppers", href: "#" },
            { label: "Mother's Care", blurb: "Gentle essentials for care-focused journeys", href: "#" },
          ],
        },
      ],
      feature: {
        eyebrow: "Guided discovery",
        title: "Sell a lifestyle, not just a catalog",
        description:
          "Routine-led menus feel more premium and help new visitors understand what to buy together instead of browsing blindly.",
        icon: "sparkles",
        highlights: [
          "Ideal for bundles and cross-sells",
          "Makes the brand feel more curated",
          "Adds story without adding clutter",
        ],
      },
    },
  },
  {
    label: "Health Goals",
    href: "#",
    chevron: true,
    menu: {
      intro:
        "Keep the competitor's health-goal logic, but organize it with stronger labels so shoppers can self-select faster.",
      cta: "Shop by goals",
      columns: [
        {
          heading: "Family needs",
          links: [
            { label: "Kids Wellness", blurb: "Milder pantry and snacking picks", href: "#" },
            { label: "Couples Care", blurb: "Balanced household essentials and bundles", href: "#" },
            { label: "Gen Silver", blurb: "Comfort-led staples for older adults", href: "#" },
          ],
        },
        {
          heading: "Active lifestyle",
          links: [
            { label: "Fitness Fuel", blurb: "Seeds, blends, and lighter daily picks", href: "#" },
            { label: "Office Desk", blurb: "Portable and snackable workday options", href: "#" },
            { label: "Weight Balance", blurb: "Portion-led, better-for-you pantry picks", href: "#" },
          ],
        },
        {
          heading: "Everyday balance",
          links: [
            { label: "Heart Support", blurb: "Benefit-led oil and seed assortment", href: "#" },
            { label: "Immunity Pantry", blurb: "Traditional staples for daily use", href: "#" },
            { label: "Mother's Care", blurb: "Gentle and trust-led wellness basket", href: "#" },
          ],
        },
      ],
      feature: {
        eyebrow: "Goal-based browse",
        title: "Help people shop by what matters to them",
        description:
          "This area is perfect for outcome-led storytelling, curated edits, or a trust-forward health-goal collection spotlight.",
        icon: "heart",
        highlights: [
          "Fast self-selection for new visitors",
          "Clearer than a generic category list",
          "Supports a more premium brand narrative",
        ],
      },
    },
  },
  {
    label: "Gift Sets",
    href: "#",
    chevron: true,
    menu: {
      intro:
        "Use gifting to raise average order value with ready-made hampers, trial bundles, and corporate-friendly packs.",
      cta: "View gift sets",
      columns: [
        {
          heading: "Starter bundles",
          links: [
            { label: "Trial Oil Box", blurb: "Low-risk sampler for first-time buyers", href: "#" },
            { label: "Pantry Essentials Kit", blurb: "Everyday staples bundled together", href: "#" },
            { label: "Routine Starter Pack", blurb: "Cross-category discovery in one order", href: "#" },
          ],
        },
        {
          heading: "Seasonal hampers",
          links: [
            { label: "Festival Favorites", blurb: "Traditional gifting with richer storytelling", href: "#" },
            { label: "Healthy Snack Box", blurb: "Office and family-friendly curated hamper", href: "#" },
            { label: "Wellness Gift Edit", blurb: "Premium care-oriented presentable set", href: "#" },
          ],
        },
        {
          heading: "Corporate gifting",
          links: [
            { label: "Desk Snack Kits", blurb: "Compact gifting for teams and clients", href: "#" },
            { label: "Branded Thank-You Boxes", blurb: "Presentation-led premium gifting", href: "#" },
            { label: "Bulk Order Support", blurb: "Ideal space for larger gifting inquiries", href: "#" },
          ],
        },
      ],
      feature: {
        eyebrow: "Higher order value",
        title: "Make gifting feel elevated and easy",
        description:
          "A featured gift panel helps you promote occasion-led bundles and turns a simple nav item into a conversion surface.",
        icon: "package",
        highlights: [
          "Great for festive and corporate pushes",
          "Strong space for premium bundle photography",
          "Naturally lifts average order value",
        ],
      },
    },
  },
];

export const heroSlides: HeroSlide[] = [
  {
    eyebrow: "Cold-pressed goodness",
    title: "Pure pantry staples",
    accent: "for everyday wellness",
    description:
      "Small-batch oils, trusted pantry essentials, and modern kitchen favourites curated to feel premium, useful, and easy to shop.",
    bullets: [
      "Wood-pressed oils",
      "PAN India delivery",
      "Daily kitchen essentials",
    ],
    cta: "Shop signature oils",
    visual: "community",
  },
  {
    eyebrow: "Traditional pantry",
    title: "Clean ingredients",
    accent: "with richer everyday flavour",
    description:
      "From natural sweeteners and millets to home staples and healthy mixes, the full range is presented with calmer luxury and stronger retail focus.",
    bullets: [
      "Millets & sweeteners",
      "Staples for repeat orders",
      "Small-batch sourcing",
    ],
    cta: "Explore the pantry",
    visual: "pantry",
  },
  {
    eyebrow: "Curated gifting",
    title: "Wellness bundles",
    accent: "made to impress",
    description:
      "Thoughtful starter kits, festive hampers, and gift-ready assortments designed to lift cart value while still feeling elegant and brand-right.",
    bullets: [
      "Starter bundles",
      "Festive hampers",
      "Corporate gifting",
    ],
    cta: "View curated bundles",
    visual: "gift",
  },
];

export const categories: Category[] = [
  { title: "Cold Pressed Oils", icon: "droplets" },
  { title: "Pure Cow Ghee", icon: "milk" },
  { title: "Natural Sweeteners", icon: "candy" },
  { title: "Millets & Health Mix", icon: "wheat" },
  { title: "Beauty Oils", icon: "flower" },
  { title: "Dry Fruits & Seeds", icon: "leaf" },
  { title: "Pappad & Pickle", icon: "package" },
  { title: "Curry Powders", icon: "cooking" },
  { title: "Traditional Rice", icon: "scroll" },
  { title: "Special Oils", icon: "sparkles" },
  { title: "Hair Care", icon: "brush" },
  { title: "Instant Millet Cups", icon: "cup" },
];

export const audienceGoals = [
  { title: "Couples", icon: "users" as const },
  { title: "Kids", icon: "baby" as const },
  { title: "Gen Silver", icon: "heart" as const },
  { title: "Fitness Fuel", icon: "dumbbell" as const },
  { title: "Mother's Care", icon: "hand" as const },
  { title: "Office Desk", icon: "briefcase" as const },
];

const coldPressedProducts: Product[] = [
  {
    name: "Wood Pressed Groundnut Oil",
    price: "Rs. 108",
    compareAt: "Rs. 140",
    tags: ["Family", "Fitness"],
    sizes: ["250ml", "500ml", "1L"],
    tone: "bottle",
  },
  {
    name: "Cold Pressed Coconut Oil",
    price: "Rs. 156",
    compareAt: "Rs. 209",
    tags: ["Kids", "Daily"],
    sizes: ["200ml", "500ml", "1L"],
    tone: "bottle",
  },
  {
    name: "Traditional Sesame Oil",
    price: "Rs. 124",
    compareAt: "Rs. 159",
    tags: ["Pantry", "Office"],
    sizes: ["200ml", "500ml", "1L"],
    tone: "bottle",
  },
  {
    name: "Virgin Coconut Cooking Oil",
    price: "Rs. 117",
    compareAt: "Rs. 149",
    tags: ["Light", "Everyday"],
    sizes: ["200ml", "500ml", "750ml"],
    tone: "bottle",
  },
];

const beautyOilProducts: Product[] = [
  {
    name: "Cold Pressed Castor Oil",
    price: "Rs. 125",
    compareAt: "Rs. 160",
    tags: ["Hair", "Care"],
    sizes: ["200ml", "500ml", "1L"],
    tone: "bottle",
  },
  {
    name: "Cold Pressed Mahua Oil",
    price: "Rs. 85",
    compareAt: "Rs. 109",
    tags: ["Kids", "Skin"],
    sizes: ["200ml", "500ml", "1L"],
    tone: "bottle",
  },
  {
    name: "Herbal Hair Blend",
    price: "Rs. 239",
    compareAt: "Rs. 309",
    tags: ["Repair", "Routine"],
    sizes: ["100ml", "200ml", "300ml"],
    tone: "bottle",
  },
  {
    name: "Cold Pressed Neem Oil",
    price: "Rs. 139",
    compareAt: "Rs. 179",
    tags: ["Purify", "Glow"],
    sizes: ["200ml", "500ml", "750ml"],
    tone: "bottle",
  },
];

const specialOilProducts: Product[] = [
  {
    name: "Tamanu Seed Oil",
    price: "Rs. 733",
    compareAt: "Rs. 1,026",
    tags: ["Skin", "Routine"],
    sizes: ["100ml", "200ml", "300ml"],
    tone: "bottle",
  },
  {
    name: "Black Cumin Seed Oil",
    price: "Rs. 761",
    compareAt: "Rs. 1,066",
    tags: ["Immunity", "Wellness"],
    sizes: ["100ml", "200ml", "300ml"],
    tone: "bottle",
  },
  {
    name: "Moringa Seed Oil",
    price: "Rs. 1,190",
    compareAt: "Rs. 1,600",
    tags: ["Premium", "Care"],
    sizes: ["100ml", "200ml", "300ml"],
    tone: "bottle",
  },
  {
    name: "Multi Millet Flour",
    price: "Rs. 179",
    compareAt: "Rs. 245",
    tags: ["Fitness", "Staple"],
    sizes: ["Pack 1", "Pack 2", "Family"],
    tone: "packet",
  },
];

const dryFruitProducts: Product[] = [
  {
    name: "Pumpkin Seeds",
    price: "Rs. 95",
    compareAt: "Rs. 121",
    tags: ["Couples", "Fitness"],
    sizes: ["100g", "200g", "500g"],
    tone: "packet",
  },
  {
    name: "Dry Amla",
    price: "Rs. 115",
    compareAt: "Rs. 149",
    tags: ["Kids", "Office"],
    sizes: ["200g", "400g", "600g"],
    tone: "packet",
  },
  {
    name: "Sunflower Seeds",
    price: "Rs. 89",
    compareAt: "Rs. 113",
    tags: ["Heart", "Snack"],
    sizes: ["100g", "200g", "500g"],
    tone: "packet",
  },
  {
    name: "Chia Seeds",
    price: "Rs. 73",
    compareAt: "Rs. 99",
    tags: ["Fiber", "Daily"],
    sizes: ["100g", "200g", "500g"],
    tone: "packet",
  },
];

const arrivalProducts: Product[] = [
  {
    name: "Palm Blossom Drink Mix",
    price: "Rs. 219",
    compareAt: "Rs. 289",
    tags: ["New", "Cooling"],
    sizes: ["250g", "500g", "Combo"],
    tone: "jar",
  },
  {
    name: "Village Spice Ghee",
    price: "Rs. 264",
    compareAt: "Rs. 332",
    tags: ["Rich", "Aromatic"],
    sizes: ["250g", "500g", "1kg"],
    tone: "jar",
  },
  {
    name: "Black Sesame Crunch",
    price: "Rs. 148",
    compareAt: "Rs. 190",
    tags: ["Snack", "Gift"],
    sizes: ["120g", "240g", "Box"],
    tone: "jar",
  },
  {
    name: "Millet Breakfast Cup",
    price: "Rs. 99",
    compareAt: "Rs. 140",
    tags: ["Fast", "Desk"],
    sizes: ["Single", "Pack 3", "Pack 6"],
    tone: "packet",
  },
];

const sweetenerProducts: Product[] = [
  {
    name: "Karupatti Palm Jaggery",
    price: "Rs. 247",
    compareAt: "Rs. 309",
    tags: ["Couples", "Fitness"],
    sizes: ["500g", "1kg", "2kg"],
    tone: "packet",
  },
  {
    name: "Nattu Sakkarai",
    price: "Rs. 75",
    compareAt: "Rs. 95",
    tags: ["Tea", "Coffee"],
    sizes: ["500g", "1kg", "2kg"],
    tone: "packet",
  },
  {
    name: "Palm Jaggery Powder",
    price: "Rs. 70",
    compareAt: "Rs. 99",
    tags: ["Baking", "Daily"],
    sizes: ["100g", "500g", "1kg"],
    tone: "packet",
  },
  {
    name: "Village Jaggery Blocks",
    price: "Rs. 77",
    compareAt: "Rs. 98",
    tags: ["Traditional", "Pantry"],
    sizes: ["500g", "1kg", "2kg"],
    tone: "packet",
  },
];

export const productSections: ProductSection[] = [
  {
    title: "Cold Pressed Oil",
    subtitle:
      "A familiar opening rail with clearer product hierarchy and tighter spacing than the reference.",
    products: coldPressedProducts,
  },
  {
    title: "Oil Collection",
    subtitle:
      "Tabbed browsing keeps the same structure as the reference while feeling more premium.",
    tabs: [
      { id: "beauty", label: "Natural Beauty Oils", products: beautyOilProducts },
      { id: "special", label: "Special Oils", products: specialOilProducts },
    ],
  },
  {
    title: "Dry Fruits, Nuts & Seeds",
    subtitle:
      "A repeated rail format for pantry expansion without changing the shopping behavior.",
    products: dryFruitProducts,
  },
  {
    title: "New Arrivals",
    subtitle: "Fresh drops and seasonal bundles shown using the same reusable section shell.",
    products: arrivalProducts,
  },
  {
    title: "Natural Sweeteners",
    subtitle:
      "Traditional pantry staples presented with the same mobile-first card logic.",
    products: sweetenerProducts,
  },
];

export const featureItems = [
  {
    title: "Organic Store & Natural Foods",
    description:
      "A flexible feature card for produce, pantry staples, and high-quality everyday ingredients.",
    icon: "store" as const,
  },
  {
    title: "Best Organic Groceries",
    description:
      "Space for rice, spices, millets, and dry fruits with tighter content rhythm than the reference.",
    icon: "shopping" as const,
  },
  {
    title: "High Protein & Fitness Foods",
    description:
      "Built for seed mixes, snack blends, and routine-forward nutrition messaging.",
    icon: "dumbbell" as const,
  },
  {
    title: "Healthy Weight-Loss Snacks",
    description:
      "A clean visual home for portion-led, low-sugar, and travel-ready snack storytelling.",
    icon: "scale" as const,
  },
];

export type TestimonialItem = {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  tone: "sage" | "sand" | "stone" | "sun";
};

export const testimonials: TestimonialItem[] = [
  {
    quote:
      "The oils feel exceptionally fresh, the packaging is thoughtful, and the ordering experience is simple enough for repeat family purchases.",
    name: "Aadhira Raman",
    role: "Founder",
    company: "Nila Living",
    initials: "AR",
    tone: "sage",
  },
  {
    quote:
      "Every detail feels more premium than a typical organic store. The curation is clear, the ingredients are easy to trust, and the delivery has been consistent.",
    name: "Rohit Menon",
    role: "Operations Lead",
    company: "House of Verve",
    initials: "RM",
    tone: "sand",
  },
  {
    quote:
      "We first ordered a small bundle to try the range and ended up becoming repeat customers. The quality holds up beautifully across categories.",
    name: "Mira Subramaniam",
    role: "Creative Director",
    company: "Mysa Studio",
    initials: "MS",
    tone: "stone",
  },
  {
    quote:
      "The pantry selection feels calm, trustworthy, and genuinely well considered. It is rare to find this level of clarity in a growing retail brand.",
    name: "Keshav Menon",
    role: "UX Consultant",
    company: "Northline Collective",
    initials: "KM",
    tone: "sun",
  },
  {
    quote:
      "From cold-pressed oils to gifting bundles, everything feels cohesive. It does not look mass-market, and that makes the brand easier to remember.",
    name: "Ria Prakash",
    role: "Brand Strategist",
    company: "Studio Aster",
    initials: "RP",
    tone: "sage",
  },
  {
    quote:
      "The mobile experience is especially strong. Browsing feels smooth, the sections are easy to scan, and the whole store reads as premium from the first touch.",
    name: "Vikram Iyer",
    role: "Product Designer",
    company: "Craftlane",
    initials: "VI",
    tone: "sand",
  },
  {
    quote:
      "It feels like a modern wellness brand rather than a generic catalog. The storytelling is subtle, and the trust signals are placed exactly where they matter.",
    name: "Priya Nair",
    role: "Merchandising Head",
    company: "Amber & Co.",
    initials: "PN",
    tone: "stone",
  },
  {
    quote:
      "The balance of utility and polish is excellent. This is the kind of store experience that helps customers feel confident before they even add to cart.",
    name: "Arjun Das",
    role: "Retail Advisor",
    company: "Field House",
    initials: "AD",
    tone: "sun",
  },
];

export const trustItems = [
  { title: "100% Natural", description: "Quality-led everyday essentials", icon: "shield" as const },
  { title: "Trusted Products", description: "Built for repeat shoppers", icon: "badge" as const },
  { title: "Free Shipping", description: "Orders above Rs. 799", icon: "truck" as const },
  { title: "PAN India Delivery", description: "Shipped across India", icon: "pin" as const },
  { title: "Responsible Sourcing", description: "Community-first sourcing", icon: "hand" as const },
  { title: "Certified Promise", description: "Documentation-ready trust", icon: "file" as const },
];

export const quickLinks = [
  "Cold Pressed Oils",
  "Natural Sweeteners",
  "Dry Fruits & Seeds",
  "Special Oils",
  "Beauty Oils",
  "Millets & Health Mix",
  "Traditional Rice",
];

export const accountLinks = [
  "Home",
  "About Us",
  "Journal",
  "My Orders",
  "My Account",
  "Contact Us",
];

export const policyLinks = [
  "Privacy Policy",
  "Shipping & Delivery",
  "Cancellation & Returns",
  "Terms & Conditions",
];



