/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import indianOil from "./assets/images/indian_oil.jpg";
import solarPV from "./assets/images/solar_pv.jpg";
import smartLedLight from "./assets/images/smart_led_light.jpg";
import sustainableGrowth from "./assets/images/sustainable_growth.jpg";
import commercialTruck from "./assets/images/commercial_truck.jpg";
import businessJourney from "./assets/images/business_journey.jpg";
import fuelSolution from "./assets/images/fuel_solution.jpg";
import switchAward from "./assets/images/switch_ev_award.jpg";
import switchIEV3 from "./assets/images/switch_iev3.jpg";
import mrAgnel from "./assets/images/mragnel.jpeg";
import { Vehicle, FuelService, GreenTechProduct } from './types';

export const APP_LOGOS = {
  header: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDo1z_4WbyE77lq5H2A5Y4Y8N4uCdf8mG8LreE4V2r6H9V_wh9QxXW9h_c_RtRK7egQQqJvofN7-l_L_vjoAdc_FCCF_AsI_c2L_UK_Nuv_3n9_85B_4H_JOB_8_vt5rv_EyP_U5L_V3_uaB_36W_Fv_sKw_K_cgS_wmC_AXX_Ht_cg4_k8_LH_4Az_p8N_CHd_ibS_QUoF_drz_CVMBXP_5if_uCmc_IIAcBMRNl_VkD4_c_0VUEqSqqW_Qzw_ohNcB9A',
  footer: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDo1z_4WbyE77lq5H2A5Y4Y8N4uCdf8mG8LreE4V2r6H9V_wh9QxXW9h_c_RtRK7egQQqJvofN7-l_L_vjoAdc_FCCF_AsI_c2L_UK_Nuv_3n9_85B_4H_JOB_8_vt5rv_EyP_U5L_V3_uaB_36W_Fv_sKw_K_cgS_wmC_AXX_Ht_cg4_k8_LH_4Az_p8N_CHd_ibS_QUoF_drz_CVMBXP_5if_uCmc_IIAcBMRNl_VkD4_c_0VUEqSqqW_Qzw_ohNcB9A'
};

export const VEHICLES: Vehicle[] = [
  // LCVs
  {
    id: 'l-series-25t',
    name: 'Gemini L-Series 2.5T',
    category: 'lcv',
    description: 'A modern, clean white light commercial delivery truck designed with sharp, aerodynamic lines and a robust chassis for urban distribution.',
    imageUrl: commercialTruck,
    specs: [
      { label: 'PAYLOAD', value: '2,500 KG' },
      { label: 'ENGINE', value: 'Turbo Diesel i4' },
      { label: 'TORQUE', value: '320 NM' },
      { label: 'FUEL', value: 'Diesel / CNG' }
    ]
  },
  {
    id: 'x-utility-plus',
    name: 'Gemini X-Utility Plus',
    category: 'lcv',
    description: 'A rugged pickup truck in deep industrial gray, optimized for off-road operations and heavy-duty regional light transport.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAd02icjfOVlkcLDGTF6DlW1yWYPchfounlhlRpT1Z0RxHYKrgUuh5wPd_TkvNNy7Now7B6E9uB8_mWtP0KwIPDyDOmvkl-XnAvnRQWTlWFM_B3iMuhO4ISK0B6wgu9oYdFqZ0vzPKaWA3QrAv-rDSxEMIgUMsI7mmaJNxlZf37tI0bsvsLFVIs2jbO6On-ak1xRjj0Zrt5fSHs75yOuyJu9F1j8ggP5fpspblm1mJJ5GYg1fiTtOL7ww',
    specs: [
      { label: 'PAYLOAD', value: '1,800 KG' },
      { label: 'ENGINE', value: '2.2L mHawk' },
      { label: 'TORQUE', value: '280 NM' },
      { label: 'CABIN', value: 'Crew / Single' }
    ]
  },
  {
    id: 'urban-pro-van',
    name: 'Gemini Urban-Pro Van',
    category: 'lcv',
    description: 'A sleek white high-capacity cargo van customized for courier operations, express logistics, and cold chain urban networks.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJLgLmvXfItHXOj5I4Mac7qiQPmYfvXMHSQs8As2XNP3hxb6ReiiahzJQt6ZSbZ14tIBAMpNNxV3AzJWOAIoo2gR4Lo9gjpeppKb7EQMXMezbSang-0rs8mtpEgTZvjQnSKzGe-0ergkA9BRLGyR9Z-Y8xkVB-V8QWur4viNcV6u_s33tUv6irf5siAlkYXMGv07vIc2Py3wm8uEseb1pemgPxFVbb0hhQEW8EwtnU7vlYQfVpMf5b2A',
    specs: [
      { label: 'VOLUME', value: '12 m³' },
      { label: 'WHEELBASE', value: '3500 mm' },
      { label: 'POWER', value: '140 HP' },
      { label: 'GEARBOX', value: '6-Speed MT' }
    ]
  },

  // M&HCVs
  {
    id: 'hercules-5525',
    name: 'Hercules 5525 Tractor',
    category: 'mhcv',
    description: 'A majestic, royal blue 16-wheeler tractor-trailer built for heavy-haul, multi-axle bulk transportation with unmatched uptime.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAI53Z7UoZXfD9qnhRuD2fvncfhH9bujkDylrbI3F-Cbiw4QdgNtwJcrWLIu6C80pV5JmGpBljfazIXYxzQSm0kUBj4gdOFaf94B6ZWk3HPvLG5n5B8nVod2r_wKSHi6xi3wI37l8YdssazaozwLyeX1DHnCzlrxoUy1zXeyLhj80U-92t4Vlrwc7vM52KXklhH3ln4NmyzdEn0HqpCTXabbsv97yR0lpOezVz5drQqMntFuBWXUBaEPg',
    specs: [
      { label: 'MAX POWER', value: '250 HP @ 2400 RPM' },
      { label: 'TORQUE', value: '900 NM' },
      { label: 'AXLE CONFIG', value: '4x2 / 6x4' },
      { label: 'GCW CAPACITY', value: '55 Tons' }
    ]
  },
  {
    id: 'rhino-2825',
    name: 'Rhino 2825 Tipper',
    category: 'mhcv',
    description: 'A heavy-duty yellow construction and mining tipper truck with a reinforced high-tensile steel bucket and massive hydraulic arm.',
    imageUrl: 'https://www.adraxles.in/gallery/medium_applicazione.JPG',
    specs: [
      { label: 'BODY CAPACITY', value: '16 m³ - 22 m³' },
      { label: 'GRADEABILITY', value: '42% (In 1st Gear)' },
      { label: 'SUSPENSION', value: 'Heavy Bogie' },
      { label: 'ENGINE TYPE', value: 'A Series CRS' }
    ]
  },

  // EVs
  {
    id: 'switch-electric',
    name: 'Switch Mobility EV',
    category: 'ev',
    description: 'Pioneering electric heavy commercial and bus platforms, designed for emissions-free municipal networks and high efficiency.',
    imageUrl: 'https://www.switchmobilityev.com/themes/custom/switchmobility/resources/images/SWITCH-EiV-12.webp',
    specs: [
      { label: 'REAL-WORLD RANGE', value: '250 KM+' },
      { label: 'BATTERY TYPE', value: 'Lithium-Ion Pouch' },
      { label: 'CHARGING SPEED', value: '80% in 45 Mins' },
      { label: 'TAILPIPE EMISSION', value: 'Zero (City Compliant)' }
    ]
  }
];

export const GENSETS = [
  {
    id: 'compact-series',
    name: 'Compact Leypower Series',
    range: '5kVA - 125kVA',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDCyVs1QfQHgG0aeanU0vboES3I-0tI2CCk9Gq7N2mog6yWmd3gfCEnxo&s=10',
    description: 'Sound-proof, weatherproof canopy enclosures perfectly suited for residential apartments, small industries, commercial workspaces, and emergency response.',
    features: ['Ultra-silent acoustic canopy', 'Compact footprint', 'Low lube oil consumption', 'CPCB II emission standard compliant']
  },
  {
    id: 'industrial-series',
    name: 'Industrial Leypower Series',
    range: '250kVA - 2500kVA',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9BRoHm-cOsbrw7G_s66EgHKrPJLp88EX3kpSJ-d3mY30zTWJqH1UuJCM&s=10',
    description: 'High-capacity heavy-duty engines housed in purpose-built engine rooms for large industrial factories, multi-specialty hospitals, data centers, and mines.',
    features: ['High-performance CRDI engines', 'Heavy steel chassis base', 'Advanced digital controller panel', 'Synchronous multi-generator clustering']
  }
];

export const FUEL_SERVICES: FuelService[] = [
  {
    id: 'fuel-retail',
    title: 'Retail Fuel Solutions',
    description: 'High-throughput premium petrol and diesel dispensing with strict quality control protocols, operating 24/7 with digital tracking.',
    iconName: 'local_gas_station',
    features: ['BS-VI ultra-clean fuels', 'High-speed flow dispensing', 'Integrated digital payment', 'Automatic density monitors'],
    imageUrl: 'https://content.jdmagicbox.com/comp/ambedkar_nagar/l9/9999p5271.5271.211114120522.a6l9/catalogue/indian-oil-petrol-pump-old-jetly-brothers-saidapur-ambedkar-nagar-gyrcbocz8p.jpg'
  },
  {
    id: 'premium-fuels',
    title: 'Premium Performance Fuels',
    description: 'Specialized high-octane additives designed to keep fuel injectors clean, increase mileage, and reduce emissions in high-end heavy-duty engines.',
    iconName: 'verified',
    features: ['High-octane premium additives', 'Friction-reduction elements', 'Lower soot production', 'Active carbon inhibitors'],
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8lO8d0BFwryPLPX_FRdreKLfGT5no4UO3QLHIYOAK4YufVTJCB53JXe4U&s=10'
  },
  {
    id: 'lubricants',
    title: 'Industrial Lubricants',
    description: 'Authorized wholesale distributor of premium high-viscosity lubricants, coolants, and greases for mining rigs, marine vessels, and heavy transport machinery.',
    iconName: 'oil_barrel',
    features: ['Extreme pressure resistance', 'Extended change intervals', 'High thermal stability', 'Eco-friendly biodegradable oils'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAP67OCBlaxY5W7XUPUoE4Qb47bH6qQQRrmQZjXSkNeJ1k_whT2QXIW9hycRbRKKegQQqJbofO7-lYLBjoAVcmFCCFLAsIF0c2LUKYhNuvJv3n9385Bd4HJOB8ZWt5rv-EyPhU5LAV3QauaBsB36WrFvzsKwK-cgSiwmCPAXXHtqcg4k8LH4Azp8NCHdibSQUoFdrzCVMBXP5iifuCmc_IIAcBMRNlVkD4c-0VUEqSqqW_Qzw-ohNcB9A'
  },
  {
    id: 'bowser-supply',
    title: 'Bowser Supply & B2B Logistics',
    description: 'Mobile on-site fuel delivery for real-time machinery fueling at construction zones and mines. Fleet of high-capacity tankers for wholesale supply chains.',
    iconName: 'local_shipping',
    features: ['Capacities from 12,000L to 20,000L', 'Response times under 4 hours', 'GPS-tracked secure delivery routes', 'Weights & measures verified meters'],
     imageUrl: indianOil,
  }
];

export const HUBS = [
  {
    id: 'north-goa',
    name: 'North Goa Hub',
    address: 'Mapusa Industrial Estate, Unit 4B',
    type: 'Fuel Retail & LCV Support',
    phone: '+91 94223 93288'
  },
  {
    id: 'south-goa',
    name: 'South Goa Logistics',
    address: 'Verna Industrial Estate, Phase III',
    type: 'Heavy Haulage & EV Charging Station',
    phone: '+91 94223 93288'
  },
  {
    id: 'port-ops',
    name: 'Port Operations Terminal',
    address: 'Mormugao Port Trust Terminal',
    type: 'Bulk Storage & Oil Depot',
    phone: '+91 94223 93288'
  }
];

export const GREEN_TECH_PRODUCTS: GreenTechProduct[] = [
  {
    id: 'solar-pv',
    title: 'Industrial & Rooftop Solar PV',
    category: 'solar-pv',
    description: 'Monocrystalline solar PV grid-tied systems designed for industrial sheds, warehouses, and commercial spaces to slash utility costs up to 80%.',
    benefits: [
      'Expected 25-year service lifetime',
      'High conversion efficiency above 21.8%',
      'Net-metering support with state electricity grid',
      'Premium Tier-1 materials with automated weather tracking'
    ],
    imageUrl:
  "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: 'EFFICIENCY', value: '22.4%' },
      { label: 'ROI PERIOD', value: '3.5 Years' },
      { label: 'SAVINGS POTENTIAL', value: '80%' }
    ]
  },
  {
    id: 'solar-thermal',
    title: 'High-Temperature Solar Thermal',
    category: 'solar-thermal',
    description: 'Advanced evacuated tube collectors and flat-plate collector arrays for hot water generation in hotels, hospitals, and industrial boiler pre-heating.',
    benefits: [
      'Heats water up to 95°C consistently',
      'Inner tank with glass enamel food-grade coating',
      'Auxiliary smart electric backup heater system included',
      'Significant reduction in LPG/Diesel boiler fuel consumption'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80',
    stats: [
      { label: 'MAX TEMP', value: '95°C' },
      { label: 'HEATRETENTION', value: '72 Hours' },
      { label: 'BOILER AID', value: '60% Fuel cut' }
    ]
  },
  {
    id: 'led-solutions',
    title: 'Smart LED & High-Mast Lighting',
    category: 'led',
    description: 'Energy-saving architectural commercial illumination, smart high-mast lights for shipyards, factory floors, and municipal roads.',
    benefits: [
      'Up to 150 Lumens per Watt high efficiency',
      'IP66 ingress protection with surge safety up to 10kV',
      'Smart sensor integration for sunrise-sunset automated dimming',
      'Sturdy pressure die-cast aluminum heat sinks'
    ],
    imageUrl: smartLedLight,
    stats: [
      { label: 'LUMINOUS FLUX', value: '150 Lm/W' },
      { label: 'LIFESPAN', value: '50,000 Hrs' },
      { label: 'ENERGY CUT', value: '65%' }
    ]
  },
  {
    id: 'garbage-mgmt',
    title: 'Organic Waste & Garbage Solutions',
    category: 'waste',
    description: 'Organic waste shredders and biological composter systems for resorts, municipal sectors, and large industrial facilities to achieve zero waste-to-landfill.',
    benefits: [
      'Converts food waste into rich nutrient compost in 24 hours',
      'Fully automated PLC touchscreen controllers',
      'Eco-friendly odor control unit with high efficiency carbon filter',
      'Heavy-duty dual shaft shredding blades'
    ],
     imageUrl: sustainableGrowth,
    stats: [
      { label: 'COMPOST CYCLE', value: '24 Hours' },
      { label: 'VOLUME CUT', value: '90%' },
      { label: 'PLC SYSTEM', value: 'Auto-shred' }
    ]
  }
];
