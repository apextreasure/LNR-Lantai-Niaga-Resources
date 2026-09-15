import { PackageItem, ServiceItem, PortfolioItem, FaqItem } from '../types';

// Import local generated images for high fidelity
import heroKitchenImg from '../assets/images/hero_kitchen_luxury_1789439979654.jpg';
import portfolioIslandImg from '../assets/images/portfolio_cabinet_island_1789439996114.jpg';
import portfolioWardrobeImg from '../assets/images/portfolio_wardrobe_swing_1789440012037.jpg';
import portfolioLivingImg from '../assets/images/portfolio_living_tv_1789440026894.jpg';
import portfolioGrilleImg from '../assets/images/portfolio_grille_window_1789440043492.jpg';
import factoryShowroomImg from '../assets/images/factory_showroom_kapar_1789440060417.jpg';

export const BUSINESS_INFO = {
  name: "LNR — Lantai Niaga Resources",
  shortName: "LNR",
  registration: "SA0496700",
  representative: "Hafiz",
  primaryPhone: "+6010-307 4277",
  primaryPhoneRaw: "60103074277",
  primaryWhatsAppUrl: "https://wa.me/60103074277",
  altPhone: "+6011-1308 4277",
  altPhoneRaw: "601113084277",
  altWhatsAppUrl: "https://wa.me/601113084277",
  address: "No 42 Jalan Haji Abdul Samat 1, Batu 10 1/4, Kapar Industrial Park, 42200 Kapar, Selangor",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=No+42+Jalan+Haji+Abdul+Samat+1%2C+Batu+10+1%2F4%2C+Kapar+Industrial+Park%2C+42200+Kapar%2C+Selangor",
  cidbMember: true,
  currentYear: 2026,
  heroImage: heroKitchenImg,
  factoryImage: factoryShowroomImg,
  tagline: "Kabinet Impian, Ruang Lebih Selesa",
  disclaimer: "Harga dan promosi berdasarkan bahan rujukan; sila sahkan harga semasa, spesifikasi dan ketersediaan dengan Hafiz."
};

export const PACKAGES_DATA: PackageItem[] = [
  {
    id: "pakej-7588",
    name: "Pakej Asas 6.5 Kaki",
    price: 7588,
    priceFormatted: "RM 7,588",
    subtitle: "Penyelesaian praktikal & kemas untuk dapur kompak atau kediaman baru.",
    specs: {
      wallCabinet: "Kitchen Cabinet Wall Unit — 6.5 kaki",
      baseCabinet: "Kitchen Cabinet Base Unit — 6.5 kaki",
      countertop: "Quartz Stone Tabletop — 6.5 kaki",
      fanLighting: true,
      mainDoorGrille: true,
      yardSlidingWindow: true,
    },
    freeUpgrades: [
      "Upgrade 3 Tier Drawer with Soft Closed",
      "Upgrade Sink Carcass Foam Board (Kalis Air)"
    ],
    recommendedFor: "Sesuai untuk apartment / kondo atau dapur kompak yang inginkan kemasan kukuh."
  },
  {
    id: "pakej-8888",
    name: "Pakej Popular 8 Kaki",
    price: 8888,
    priceFormatted: "RM 8,888",
    subtitle: "Pilihan paling digemari pemilik rumah teres & kondo dengan ruang simpanan ekstra.",
    popular: true,
    specs: {
      wallCabinet: "Kitchen Cabinet Wall Unit — 8 kaki",
      baseCabinet: "Kitchen Cabinet Base Unit — 8 kaki",
      countertop: "Quartz Stone Tabletop — 8 kaki",
      fanLighting: true,
      mainDoorGrille: true,
      yardSlidingWindow: true,
    },
    freeUpgrades: [
      "Upgrade 3 Tier Drawer with Soft Closed",
      "Upgrade Sink Carcass Foam Board (Kalis Air)"
    ],
    recommendedFor: "Paling seimbang untuk rumah keluarga dengan kepanjangan 8 kaki dan material premium."
  },
  {
    id: "pakej-19888",
    name: "Pakej Komprehensif Lengkap",
    price: 19888,
    priceFormatted: "RM 19,888",
    subtitle: "Ubah suai menyeluruh termasuk Kabinet Full Height, Island, TV Console, Wardrobe & Siling Plaster.",
    specs: {
      wallCabinet: "Kitchen Cabinet Wall Unit — 8 kaki (Full Height ke siling)",
      baseCabinet: "Kitchen Cabinet Base Unit — 8 kaki",
      countertop: "Quartz Stone Tabletop — 8 kaki",
      fanLighting: true,
      mainDoorGrille: true,
      yardSlidingWindow: true,
      additionalItems: [
        "Island with Quartz Stone Top — 5 kaki",
        "TV Console Reka Bentuk Moden — 5 kaki",
        "Wardrobe Swing Door Design (Full Height) — 5 kaki",
        "Plaster Ceiling (Ruang Tamu / Makan / Dapur)"
      ]
    },
    freeUpgrades: [
      "Installation Fan & Lighting (Pemasangan Kipas & Lampu)",
      "Upgrade 3 Tier Drawer with Soft Closed",
      "Upgrade Sink Carcass Foam Board (Kalis Air)"
    ],
    recommendedFor: "Pakej serba lengkap untuk pemilik rumah yang mahukan renovasi menyeluruh serentak."
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "kitchen-cabinet",
    titleMs: "Kitchen Cabinet",
    titleEn: "Kabinet Dapur Tersuai",
    description: "Pembuatan kabinet dapur modular atau custom mengikut ukuran tepat ruang anda dengan pilihan kemasan luminate moden, quartz stone, dan aksesori soft-close.",
    iconName: "ChefHat",
    category: "kabinet"
  },
  {
    id: "wardrobe",
    titleMs: "Wardrobe",
    titleEn: "Almari Pakaian / Wardrobe",
    description: "Almari pakaian bilik tidur pintu swing atau sliding, reka bentuk 'full-height' sehingga paras siling untuk penggunaan ruang optimum dan pencahayaan terbina.",
    iconName: "DoorClosed",
    category: "kabinet"
  },
  {
    id: "grill-door-window",
    titleMs: "Grill Door / Window",
    titleEn: "Gril Pintu & Tingkap",
    description: "Pemasangan jeriji keselamatan besi tempa atau mild steel bersalut serbuk (powder-coated) untuk pintu utama, balkoni, dan seluruh tingkap rumah.",
    iconName: "ShieldCheck",
    category: "besi-kaca"
  },
  {
    id: "aluminium-glass-door-window",
    titleMs: "Aluminium Glass Door / Window",
    titleEn: "Pintu & Tingkap Kaca Aluminium",
    description: "Pintu gelongsor (sliding door), folding door bifold, casement window, dan tingkap yard berkaca tebal dengan bingkai aluminium kukuh dan kemas.",
    iconName: "Maximize2",
    category: "besi-kaca"
  },
  {
    id: "awning-canopy",
    titleMs: "Awning Canopy",
    titleEn: "Kanopi Awning",
    description: "Penyediaan awning car porch, kanopi polycarbonate, aluminium composite panel (ACP), atau tempered glass untuk teduhan cuaca tahan lama.",
    iconName: "SunMedium",
    category: "besi-kaca"
  },
  {
    id: "demolish-extension",
    titleMs: "Demolish / Extension",
    titleEn: "Kerja Pecah & Sambung Rumah",
    description: "Kerja meroboh dinding (hacking), penyambungan dapur basah ke belakang, membina struktur baru, dan renovasi struktur rumah dengan pembersihan sisa.",
    iconName: "Hammer",
    category: "renovasi"
  },
  {
    id: "invisible-grill",
    titleMs: "Invisible Grill",
    titleEn: "Gril Halimunan / Invisible Grille",
    description: "Sistem kabel keluli tahan karat berkekuatan tinggi untuk keselamatan anak kecil tanpa mengganggu pemandangan luas kondominium atau balkoni.",
    iconName: "Eye",
    category: "besi-kaca"
  },
  {
    id: "painting",
    titleMs: "Painting",
    titleEn: "Pengecatan Dalam & Luar",
    description: "Kerja mengecat dinding dalaman dan luaran rumah menggunakan cat berkualiti tinggi tahan kulat dengan sapuan rata dan kemasan licin.",
    iconName: "Paintbrush",
    category: "kemasan"
  },
  {
    id: "plasterer",
    titleMs: "Plasterer",
    titleEn: "Kerja Melepa / Plaster Dinding",
    description: "Kerja skim coat dan melepa simen pada dinding baru mahupun dinding lama untuk menghasilkan permukaan yang licin dan tegak sebelum mengecat.",
    iconName: "Trowel",
    category: "renovasi"
  },
  {
    id: "plumbing",
    titleMs: "Plumbing",
    titleEn: "Paip & Sanitari",
    description: "Pemasangan sistem paip air bersih, saluran sinki buangan, pemasangan mangkuk tandas, water heater, pili paip, dan kerja mengesan kebocoran.",
    iconName: "Wrench",
    category: "renovasi"
  },
  {
    id: "plaster-ceiling",
    titleMs: "Plaster Ceiling",
    titleEn: "Siling Plaster Bertingkat & Rata",
    description: "Reka bentuk siling kapur moden jenis flat, L-box, cove lighting, dan cornice untuk menyembunyikan pendawaian serta mencantikkan pencahayaan.",
    iconName: "Layers",
    category: "kemasan"
  },
  {
    id: "spc-flooring",
    titleMs: "SPC Flooring",
    titleEn: "Lantai Vinyl SPC Kalis Air",
    description: "Pemasangan jubin lantai SPC (Stone Plastic Composite) tahan lasak, kalis air 100%, kalis anai-anai, dengan corak ira kayu semulajadi yang hangat.",
    iconName: "Grid3X3",
    category: "kemasan"
  },
  {
    id: "wiring",
    titleMs: "Wiring",
    titleEn: "Pendawaian Elektrik & Lampu",
    description: "Penambahan soket plug kuasa, laluan wayar lampu siling, point pendingin hawa (aircond), pemasangan kipas siling, dan pemeriksaan peti agihan (DB box).",
    iconName: "Zap",
    category: "renovasi"
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: "port-1",
    title: "Kabinet Dapur Minimalis Warm Oak & Quartz",
    category: "kabinet",
    categoryLabel: "Kabinet Dapur",
    image: heroKitchenImg,
    isConcept: true,
    conceptLabel: "Inspirasi reka bentuk",
    description: "Gabungan tona kayu warm oak pada unit bawah dengan kaunter kuarza putih tahan calar serta pencahayaan linear LED di bawah kabinet dinding.",
    features: ["Top Quartz Stone putih", "Pintu kabinet melamine bertekstur oak", "Undermount single sink dengan paip hitam matte", "Laci 3 tingkat dengan sistem soft-close"]
  },
  {
    id: "port-2",
    title: "Dry Kitchen Moden Bersama Island 5 Kaki",
    category: "kabinet",
    categoryLabel: "Kabinet Dapur & Island",
    image: portfolioIslandImg,
    isConcept: true,
    conceptLabel: "Inspirasi reka bentuk",
    description: "Susun atur dapur kering dengan kaunter pulau (island) 5 kaki sebagai ruang penyediaan makanan dan sarapan santai sekeluarga.",
    features: ["Meja Island 5 kaki dengan kuarza", "Kombinasi kabinet gading (ivory) & kayu", "Ruang simpanan barangan kering", "Sistem pembahagi laci praktikal"]
  },
  {
    id: "port-3",
    title: "Almari Pakaian Master Bedroom Full Height",
    category: "almari",
    categoryLabel: "Almari / Wardrobe",
    image: portfolioWardrobeImg,
    isConcept: true,
    conceptLabel: "Inspirasi reka bentuk",
    description: "Almari pakaian 5 kaki rekaan pintu swing berpenutup penuh sehingga ke siling, memanfaatkan ketinggian siling tanpa habuk di atas.",
    features: ["Pintu swing ketinggian penuh (Full Height)", "Pemegang panjang minimalist", "Pencahayaan LED automatik apabila pintu dibuka", "Ruang gantung baju labuh & laci berkunci"]
  },
  {
    id: "port-4",
    title: "TV Console Panel Kayu & Siling Plaster Cove",
    category: "kemasan",
    categoryLabel: "TV Console & Kemasan",
    image: portfolioLivingImg,
    isConcept: true,
    conceptLabel: "Inspirasi reka bentuk",
    description: "Ruang tamu elegan dengan TV console 5 kaki berpanel fluted wood, dipadankan bersama lantai SPC kalis air dan siling plaster bertingkat.",
    features: ["TV Console gantung 5 kaki", "Panel fluted timber bertekstur", "Lantai SPC corak oak semulajadi", "Siling plaster dengan pencahayaan cove hangat"]
  },
  {
    id: "port-5",
    title: "Gril Pintu Utama & Tingkap Gelongsor Yard",
    category: "besi-kaca",
    categoryLabel: "Gril & Aluminium",
    image: portfolioGrilleImg,
    isConcept: true,
    conceptLabel: "Inspirasi reka bentuk",
    description: "Pemasangan gril keselamatan pintu utama salutan serbuk hitam matte dan tingkap gelongsor aluminium pada bahagian yard belakang.",
    features: ["Jeriji keselamatan mild steel powder coated", "Tingkap aluminium sliding kaca tinted", "Kunci keselamatan berbilang titik", "Tahan cuaca dan karat"]
  },
  {
    id: "port-6",
    title: "Bilik Pameran & Bengkel Fabrikasi Kapar",
    category: "kabinet",
    categoryLabel: "Bilik Pameran Kilang",
    image: factoryShowroomImg,
    isConcept: true,
    conceptLabel: "Inspirasi reka bentuk",
    description: "Ruang contoh material, sampel slab quartz stone, karkas foam-board kalis air, serta demonstrasi aksesori perkakasan di Kapar Industrial Park.",
    features: ["Sampel papak batu kuarza pelbagai corak", "Contoh karkas foam-board kalis air", "Ujian perkakasan engsel & runner soft-close", "Rundingan spesifikasi bahan secara terus"]
  }
];

export const WORKFLOW_STEPS = [
  {
    step: "1",
    title: "Hubungi Hafiz di WhatsApp",
    desc: "Hantarkan mesej ringkas melalui WhatsApp untuk menyatakan jenis perkhidmatan atau pakej yang anda minati beserta lokasi rumah.",
    icon: "MessageCircle"
  },
  {
    step: "2",
    title: "Bincang Keperluan & Ukuran",
    desc: "Kongsi pelan lantai pemaju (floor plan), anggaran ukuran kasar ruang anda, atau bincang konsep reka bentuk kabinet yang diingini.",
    icon: "Ruler"
  },
  {
    step: "3",
    title: "Pengesahan Sebut Harga",
    desc: "Terima sebut harga terperinci mengikut spesifikasi bahan yang dipilih dan semak senarai skop kerja dengan jelas.",
    icon: "FileCheck"
  },
  {
    step: "4",
    title: "Susun Atur & Perlaksanaan Kerja",
    desc: "Setelah sebut harga dipersetujui, kerja fabrikasi di kilang dan jadual pemasangan di tapak akan diatur dengan cermat.",
    icon: "CalendarCheck"
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: "faq-customisation",
    question: "Bolehkah saiz atau komponen pakej kabinet diubah suai mengikut pelan dapur saya?",
    answer: "Boleh. Pakej promosi kami adalah panduan standard (contohnya 6.5 kaki atau 8 kaki). Jika saiz dapur anda lebih panjang, berbentuk L atau U, Hafiz akan mengira penambahan kaki mengikut kadar sebut harga semasa kilang berserta pilihan aksesori pilihan anda."
  },
  {
    id: "faq-measurements",
    question: "Bagaimanakah cara untuk mendapatkan anggaran sebut harga yang tepat?",
    answer: "Anda boleh menghantar pelan lantai (floor plan) atau gambar lakaran kasar bersama ukuran panjang dinding dapur kepada Hafiz melalui WhatsApp. Sila maklumkan juga lokasi perumahan anda supaya kami dapat menyediakan anggaran yang bersesuaian."
  },
  {
    id: "faq-coverage",
    question: "Apakah kawasan liputan bagi perkhidmatan LNR?",
    answer: "Operasi dan kilang kami berpusat di Kapar, Selangor. Sila hubungi kami melalui WhatsApp dengan menyatakan kawasan perumahan anda untuk semakan terus sama ada kawasan anda termasuk dalam liputan semasa projek kami."
  },
  {
    id: "faq-site-visit",
    question: "Adakah lawatan tapak dan ukuran tapak (site visit) disediakan?",
    answer: "Ya, lawatan tapak untuk ukuran akhir boleh diatur bagi pelanggan yang telah menerima dan menyemak anggaran sebut harga awal. Penjadualan dan lawatan tapak adalah tertakluk kepada pengesahan bersama dan kelapangan jadual teknikal kami."
  },
  {
    id: "faq-materials",
    question: "Apakah kelebihan 'Foam Board' untuk karkas sinki dan 'Quartz Stone'?",
    answer: "Karkas foam board di bahagian bawah sinki direka khas kalis air sepenuhnya, mengelakkan isu kembang atau reput jika berlaku limpahan air. Meja Quartz Stone pula mempunyai ketumpatan tinggi, tahan calar, kalis kotoran dan mudah dibersihkan berbanding konkrit bersimen biasa."
  },
  {
    id: "faq-promotions",
    question: "Adakah harga promosi di laman web ini kekal sepanjang masa?",
    answer: "Harga dan promosi yang dipaparkan adalah ditranskripsi berdasarkan bahan rujukan promosi kami. Sila sahkan harga semasa, spesifikasi terperinci bahan serta ketersediaan slot bersama Hafiz sebelum sebarang pengesahan."
  }
];
