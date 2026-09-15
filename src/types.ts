export interface PackageItem {
  id: string;
  name: string;
  price: number;
  priceFormatted: string;
  subtitle: string;
  popular?: boolean;
  specs: {
    wallCabinet: string;
    baseCabinet: string;
    countertop: string;
    fanLighting: boolean;
    mainDoorGrille: boolean;
    yardSlidingWindow: boolean;
    additionalItems?: string[];
  };
  freeUpgrades: string[];
  recommendedFor: string;
}

export interface ServiceItem {
  id: string;
  titleMs: string;
  titleEn: string;
  description: string;
  iconName: string;
  category: 'kabinet' | 'besi-kaca' | 'renovasi' | 'kemasan';
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'kabinet' | 'almari' | 'besi-kaca' | 'kemasan';
  categoryLabel: string;
  image: string;
  isConcept: boolean;
  conceptLabel: string;
  description: string;
  features: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface EnquiryFormData {
  name: string;
  phone?: string;
  location: string;
  packageOrService: string;
  message: string;
}
