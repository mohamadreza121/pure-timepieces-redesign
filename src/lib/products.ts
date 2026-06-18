import { Product } from "@/types";

export const products: Product[] = [
  {
    slug: "rolex-datejust-126234-silver-dial",
    name: "Rolex Datejust 126234 Silver Dial",
    brand: "Rolex",
    reference: "126234",
    price: "$17,950",
    availability: "Available",
    condition: "Excellent",
    includes: "Box & Papers",
    image: "/images/watch-rolex-datejust1.webp",
    gallery: [
      "/images/watch-rolex-datejust1.webp",
      "/images/watch-rolex-datejust2.webp",
      "/images/watch-rolex-datejust.webp"
    ],
    featured: true,
    description:
      "A timeless Datejust configuration with a refined silver dial and strong collector appeal.",
    specs: {
      Brand: "Rolex",
      Reference: "126234",
      Condition: "Excellent",
      Includes: "Box & Papers",
      Material: "Oystersteel / White Gold Bezel",
      Movement: "Automatic",
      Location: "Aurora, Ontario"
    }
  },
  {
    slug: "rolex-air-king-114200-34mm-box-papers",
    name: "Rolex Air-King 114200 34mm Box & Papers",
    brand: "Rolex",
    reference: "114200",
    price: "$8,999",
    availability: "Available",
    condition: "Excellent",
    includes: "Box & Papers",
    image: "/images/watch-airking.webp",
    gallery: [
      "/images/watch-airking.webp",
      "/images/watch-airking1.webp",
      "/images/watch-airking2.webp"
    ],
    featured: true,
    description:
      "A clean and wearable 34mm Rolex Air-King with box and papers included.",
    specs: {
      Brand: "Rolex",
      Reference: "114200",
      "Case size": "34mm",
      Condition: "Excellent",
      Includes: "Box & Papers",
      Movement: "Automatic",
      Availability: "Available"
    }
  },
  {
    slug: "tudor-black-bay-chrono-pink-dial",
    name: "Tudor Black Bay Chrono Pink Dial",
    brand: "Tudor",
    reference: "Black Bay Chrono",
    price: "$11,999",
    availability: "Available",
    condition: "Excellent",
    includes: "Full Set",
    image: "/images/watch-tudor-pink.webp",
    gallery: [
      "/images/watch-tudor-pink.webp",
      "/images/watch-tudor-pink1.webp",
      "/images/watch-tudor-pink2.webp"
    ],
    featured: true,
    description:
      "A bold Black Bay Chrono variant with a standout pink dial and modern collector energy.",
    specs: {
      Brand: "Tudor",
      Model: "Black Bay Chrono",
      Dial: "Pink",
      Condition: "Excellent",
      Includes: "Full Set",
      Movement: "Automatic Chronograph",
      Availability: "Available"
    }
  },
  {
    slug: "omega-seamaster-james-bond-007",
    name: "Omega Seamaster James Bond 007",
    brand: "Omega",
    reference: "Seamaster 007",
    price: "$12,800",
    availability: "Out of stock",
    condition: "Excellent",
    includes: "Box & Papers",
    image: "/images/watch-omega.webp",
    gallery: [
      "/images/watch-omega.webp",
      "/images/watch-omega1.webp",
      "/images/watch-omega2.webp"
    ],
    featured: false,
    description:
      "A cinematic Omega Seamaster connected to the James Bond legacy.",
    specs: {
      Brand: "Omega",
      Model: "Seamaster James Bond 007",
      Condition: "Excellent",
      Includes: "Box & Papers",
      Movement: "Automatic",
      Availability: "Out of stock"
    }
  },
  {
    slug: "limited-omega-speedmaster-ck2998",
    name: "Limited Omega Speedmaster CK2998",
    brand: "Omega",
    reference: "CK2998",
    price: "$11,839",
    availability: "Available",
    condition: "Excellent",
    includes: "Full Set",
    image: "/images/watch-speedmaster.webp",
    gallery: [
      "/images/watch-speedmaster.webp",
      "/images/watch-speedmaster1.webp",
      "/images/watch-speedmaster2.webp"
    ],
    featured: true,
    description:
      "A limited Speedmaster reference with strong heritage and collector recognition.",
    specs: {
      Brand: "Omega",
      Reference: "CK2998",
      Condition: "Excellent",
      Includes: "Full Set",
      Movement: "Manual / Chronograph",
      Availability: "Available"
    }
  },
  {
    slug: "rolex-submariner-starbucks-126610lv-full-set",
    name: "Rolex Submariner Starbucks 126610LV Full Set",
    brand: "Rolex",
    reference: "126610LV",
    price: "$22,899",
    availability: "Available",
    condition: "Excellent",
    includes: "Full Set",
    image: "/images/watch-submariner.webp",
    gallery: [
      "/images/watch-submariner.webp",
      "/images/watch-submariner1.webp",
      "/images/watch-submariner2.webp"
    ],
    featured: true,
    description:
      "The modern green-bezel Submariner configuration with strong demand and full-set presentation.",
    specs: {
      Brand: "Rolex",
      Reference: "126610LV",
      Model: "Submariner Starbucks",
      Condition: "Excellent",
      Includes: "Full Set",
      Movement: "Automatic",
      Availability: "Available"
    }
  },
  {
    slug: "iwc-ingenieur-automatic-40-aqua-dial",
    name: "IWC Ingenieur Automatic 40 – Aqua Dial",
    brand: "IWC",
    reference: "Ingenieur Automatic 40",
    price: "$12,650",
    availability: "Out of stock",
    condition: "Excellent",
    includes: "Full Set",
    image: "/images/watch-iwc.webp",
    gallery: [
      "/images/watch-iwc.webp",
      "/images/watch-iwc1.webp",
      "/images/watch-iwc2.webp"
    ],
    featured: false,
    description:
      "A modern integrated-bracelet IWC with an eye-catching aqua dial.",
    specs: {
      Brand: "IWC",
      Model: "Ingenieur Automatic 40",
      Dial: "Aqua",
      Condition: "Excellent",
      Includes: "Full Set",
      Movement: "Automatic",
      Availability: "Out of stock"
    }
  }
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}