export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'ceramico' | 'pulido' | 'interior' | 'ppf';
  duration: string;
  warranty: string;
  priceRange: {
    hatchback: number;
    sedan: number;
    suv: number;
    pickup: number;
  };
  description: string;
  features: string[];
  recommendedFor: string;
  popular?: boolean;
}

export interface BeforeAfterPreset {
  id: string;
  title: string;
  vehicle: string;
  serviceName: string;
  beforeLabel: string;
  afterLabel: string;
  beforeImg: string;
  afterImg: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const BRAND_INFO = {
  name: 'BM Car Detail',
  tagline: 'Más que un lavado, una transformación 🛡️',
  subtagline: 'Detailing Profesional | Car Detail Premium | Córdoba',
  instagram: 'https://instagram.com/bm.cardetail_',
  instagramHandle: '@bm.cardetail_',
  whatsappNumber: '5493510000000',
  whatsappDisplay: '+54 9 351 000-0000',
  address: 'Córdoba Capital, Argentina',
  zone: 'Córdoba (Atención con turno previo)',
  schedule: 'Lunes a Sábados: 08:30 a 19:30 hs',
  rating: 5.0,
  reviewsCount: 142,
  carsDetailed: 520,
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'pre-venta',
    title: 'Preparación Pre-Venta',
    subtitle: 'Acondicionamiento Integral para Maximizar el Valor de Reventa',
    category: 'pulido',
    duration: '1 Día',
    warranty: 'Valor Comercial Incrementado',
    popular: true,
    priceRange: {
      hatchback: 95000,
      sedan: 110000,
      suv: 130000,
      pickup: 150000,
    },
    description: 'Paquete de rejuvenecimiento pensado para publicar o entregar tu auto al mejor precio. Aumenta la atracción visual y acelera la venta.',
    features: [
      'Lavado técnico y descontaminado rápido de pintura',
      'Pulido abrillantador express para revivir el color original',
      'Limpieza rápida de tapizados y paneles de puertas',
      'Acondicionado satinado de plásticos y neumáticos',
    ],
    recommendedFor: 'Quienes van a vender su auto y quieren obtener el mayor valor en MercadoLibre o agencias.',
  },
  {
    id: 'ceramic-9h',
    title: 'Tratamiento Cerámico 9H',
    subtitle: 'Protección Nanotecnológica de Máximo Brillo Espejo',
    category: 'ceramico',
    duration: '2 - 3 Días',
    warranty: '2 Años de Garantía Escrita',
    popular: true,
    priceRange: {
      hatchback: 180000,
      sedan: 210000,
      suv: 250000,
      pickup: 290000,
    },
    description: 'El estándar de oro en protección de pintura. Crea una capa cristalina ultradura de Dióxido de Silicio (SiO2) que protege el barniz contra rayos UV, excrementos de aves, resina y manchas químicas con un repeliendo extremo al agua y tierra.',
    features: [
      'Descontaminado químico y físico intensivo con Claybar',
      'Corrección de laca multi-paso (eliminación del 85-95% de swirls)',
      'Desengrasado y preparación de superficie con Alcohol Isopropílico',
      'Aplicación de 2 capas de Recubrimiento Cerámico 9H',
      'Protección de ópticas, plásticos exteriores y llantas',
      'Curado por infrarrojo para adherencia molecular indestructible',
    ],
    recommendedFor: 'Vehículos nuevos o usados que buscan la mejor estética y valor de reventa en Córdoba.',
  },
  {
    id: 'pulido-correccion',
    title: 'Corrección de Laca & Pulido Pro',
    subtitle: 'Restauración Total de Brillo y Nitidez de Pintura',
    category: 'pulido',
    duration: '1 - 2 Días',
    warranty: 'Brillo Espejo Restaurado',
    priceRange: {
      hatchback: 120000,
      sedan: 145000,
      suv: 175000,
      pickup: 200000,
    },
    description: 'Elimina las micro-rayas circulares (swirls), holografías y opacidad grisácea dejada por lavados mal hechos. Recuperamos el tono profundo y reflejo cristalino de tu laca.',
    features: [
      'Lavado técnico detailing con espuma de PH neutro',
      'Descontaminado de la capa transparente de barniz',
      'Medición digital de espesor de pintura por panel',
      'Corte y refinado con pulidoras orbitales alemanas',
      'Sellado acrílico protector por 6 meses incluido',
    ],
    recommendedFor: 'Autos con pintura rayada, holografías o falta de reflejo profundo.',
  },
  {
    id: 'interior-premium',
    title: 'Detallado & Limpieza de Interior',
    subtitle: 'Desinfección Profunda, Inyección/Extracción & Cuidado de Cueros',
    category: 'interior',
    duration: '1 Día',
    warranty: 'Acabado Mate Original 0km',
    priceRange: {
      hatchback: 85000,
      sedan: 98000,
      suv: 115000,
      pickup: 135000,
    },
    description: 'Restauramos el habitáculo a estado 0km. Desinfectamos a vapor de alta temperatura, realizamos inyección-extracción en tapizados y aplicamos acondicionadores nutritivos sin brillo grasoso.',
    features: [
      'Inyección-extracción de alfombras, techo y tapizados',
      'Desinfección a vapor a 140°C en conductos de aire y tapizados',
      'Nutrición y acondicionamiento mate para superficies de cuero',
      'Protección UV para plásticos del torpedo y consola',
      'Neutralización de olores con tratamiento de Ozono',
    ],
    recommendedFor: 'Habitáculos que requieren limpieza profunda, desinfección o nutrición de cuero.',
  },
  {
    id: 'tratamiento-acrilico',
    title: 'Tratamiento Acrílico de Brillo',
    subtitle: 'Protección Sintética de Alto Rendimiento (6-12 Meses)',
    category: 'ceramico',
    duration: '1 Día',
    warranty: '6 a 12 Meses',
    priceRange: {
      hatchback: 105000,
      sedan: 125000,
      suv: 145000,
      pickup: 165000,
    },
    description: 'Excelente opción de protección accesible. Incluye pulido abrillantador en 1 paso y sellado sintético líquido de alta repeliencia.',
    features: [
      'Lavado de precisión y descontaminado básico',
      'Pulido abrillantador en 1 paso',
      'Aplicación de sellador polimérico sintético',
      'Tacto suave y repeliencia de agua inmediata',
    ],
    recommendedFor: 'Protección intermedia y mantenimiento periódico.',
  },
  {
    id: 'ppf-protection',
    title: 'Protección PPF (Paint Protection Film)',
    subtitle: 'Film Transparente Autocurable Anti-Piedrazos',
    category: 'ppf',
    duration: '2 - 4 Días',
    warranty: '5 Años de Garantía',
    priceRange: {
      hatchback: 450000,
      sedan: 520000,
      suv: 620000,
      pickup: 750000,
    },
    description: 'La máxima protección física del mercado. Film de poliuretano autorregenerable con el calor que absorbe impactos de piedras en ruta, rayones severos y vandalismo.',
    features: [
      'Película autorregenerable por calor (Heat self-healing)',
      'Protección real contra piedrazos, grava y raspones',
      'Claridad óptica 100% que no altera el color original',
      'Garantía contra amarilleo y descascarado',
    ],
    recommendedFor: 'Autos 0km, gama alta o vehículos de viaje frecuente en ruta.',
  },
];

export const BEFORE_AFTER_PRESETS: BeforeAfterPreset[] = [
  {
    id: 'pre-venta-preset',
    title: 'Pre-Venta',
    vehicle: 'Acondicionamiento Pre-Venta',
    serviceName: 'Preparación Pre-Venta',
    beforeLabel: 'Antes',
    afterLabel: 'Después',
    beforeImg: '/img/PREVENTA-ANTES.png',
    afterImg: '/img/PREVENTA-DESPUES.png',
    description: 'Rejuvenecimiento total para venta.',
  },
  {
    id: 'paint-correction',
    title: 'Tratamiento Pintura',
    vehicle: 'Corrección de Laca & Cerámico',
    serviceName: 'Tratamiento Cerámico 9H',
    beforeLabel: 'Antes',
    afterLabel: 'Después',
    beforeImg: '/img/PINTURA-ANTES.png',
    afterImg: '/img/PINTUYRA-DESPUES.png',
    description: 'Eliminación de rayas y sellado cerámico.',
  },
  {
    id: 'interior-detail',
    title: 'Interiores',
    vehicle: 'Detallado & Limpieza de Tapizados',
    serviceName: 'Detallado de Interior',
    beforeLabel: 'Antes',
    afterLabel: 'Después',
    beforeImg: '/img/INTERIOR-ANTES.png',
    afterImg: '/img/INTERIOR-DESPUES.png',
    description: 'Limpieza a vapor e inyección-extracción.',
  },
];
