export const siteConfig = {
  name: "Pure Timepieces Co.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://puretimepiecesco.com",
  contact: {
    phone: "+1 647 960 0402",
    email: "Info@puretimepiecesco.com",
    address: "Suite #146\n6-14845 Yonge St\nAurora, ON L4G 6H8\nCanada"
  },
  nav: [
    { label: "Shop", href: "/shop" },
    { label: "Sell & Trade", href: "/sell-trade" },
    { label: "Dream Watch", href: "/dream-watch" },
    { label: "Reviews", href: "/reviews" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" }
  ],
  footer: {
    quickLinks: [
      { label: "Home", href: "/" },
      { label: "Shop", href: "/shop" },
      { label: "Sell & Trade", href: "/sell-trade" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" }
    ],
    collections: [
      { label: "Rolex", href: "/shop?brand=Rolex" },
      { label: "Omega", href: "/shop?brand=Omega" },
      { label: "Panerai", href: "/shop?brand=Panerai" },
      { label: "Hublot", href: "/shop?brand=Hublot" },
      { label: "Audemars Piguet", href: "/shop?brand=Audemars%20Piguet" }
    ]
  }
};

export const brands = [
  "Rolex",
  "Audemars Piguet",
  "Bell & Ross",
  "Breitling",
  "Cartier",
  "Grand Seiko",
  "Hublot",
  "IWC",
  "Jaeger-LeCoultre",
  "Omega",
  "Panerai",
  "Tudor",
  "Vacheron Constantin",
  "Zenith"
];
