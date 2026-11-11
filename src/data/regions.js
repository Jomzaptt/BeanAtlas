/**
 * BeanAtlas — 咖啡产区数据
 */

export const REGIONS = {
  // ==================== 南美洲 ====================

  // ===== 巴西 =====
  'minas-gerais': {
    id: 'minas-gerais',
    countryId: 'brazil',
    name: 'Minas Gerais',
    nameZh: '米纳斯吉拉斯',
    description:
      'The heart of Brazil\'s coffee country, Minas Gerais produces about 50% of the nation\'s coffee. The region spans multiple microclimates, from the Cerrado (high, dry plains) to the Mantiqueira Mountains. Minas Gerais is known for producing smooth, chocolatey, nutty coffees with good body and low acidity.',
    flavorProfile: ['Chocolate', 'Nutty', 'Caramel', 'Low Acidity'],
    altitude: '800–1,300m',
    varieties: ['Mundo Novo', 'Catuaí', 'Bourbon', 'Acaiá'],
    notableFor: 'Cerrado, Sul de Minas, Matas de Minas — three distinct sub-regions with different flavor profiles.',
    image: '',
  },
  'sao-paulo': {
    id: 'sao-paulo',
    countryId: 'brazil',
    name: 'São Paulo (Mogiana)',
    nameZh: '圣保罗（莫吉亚纳）',
    description:
      'The Mogiana region in northeastern São Paulo state has a long coffee tradition. The historic coffee farms (fazendas) here produce excellent quality, benefiting from the high-altitude microclimates of the Espinhaço range.',
    flavorProfile: ['Sweet', 'Balanced', 'Caramel', 'Citrus Acidity'],
    altitude: '800–1,200m',
    varieties: ['Bourbon', 'Catuaí', 'Mundo Novo'],
    notableFor: 'Historic coffee fazendas, some operating for over 100 years.',
    image: '',
  },
  'espirito-santo': {
    id: 'espirito-santo',
    countryId: 'brazil',
    name: 'Espírito Santo',
    nameZh: '圣埃斯皮里图',
    description:
      'Espírito Santo is Brazil\'s largest Robusta-producing state. The mountainous terrain in the south produces quality Arabica, while the lowlands grow Conilon (Robusta). The region is known for innovative farming techniques.',
    flavorProfile: ['Bold', 'Earthy', 'Chocolate', 'Full Body'],
    altitude: '200–800m',
    varieties: ['Conilon', 'Catuai', 'Mundo Novo'],
    notableFor: 'Brazil\'s largest Robusta producer, pioneer in Conilon coffee.',
    image: '',
  },
  'bahia': {
    id: 'bahia',
    countryId: 'brazil',
    name: 'Bahia',
    nameZh: '巴伊亚',
    description:
      'Bahia is the newest frontier for Brazilian specialty coffee. The Cerrado and Chapada Diamantina regions produce excellent quality Arabica with modern farming techniques and large-scale irrigated farms.',
    flavorProfile: ['Sweet', 'Fruity', 'Chocolate', 'Medium Body'],
    altitude: '800–1,100m',
    varieties: ['Catuaí', 'Bourbon', 'Topázio'],
    notableFor: 'Fast-growing specialty coffee region with cutting-edge technology.',
    image: '',
  },
  'rana': {
    id: 'rana',
    countryId: 'brazil',
    name: 'Rondônia & Amazon',
    nameZh: '朗多尼亚 & 亚马逊',
    description:
      'The Amazon region produces Robusta with unique characteristics due to the rainforest terroir. Rondônia has developed Amazonian Robusta varieties with surprising quality.',
    flavorProfile: ['Bold', 'Earthy', 'Herbal', 'Low Acidity'],
    altitude: '100–500m',
    varieties: ['Robusta', 'Conilon'],
    notableFor: 'Amazon-grown Robusta with unique terroir characteristics.',
    image: '',
  },

  // ===== 哥伦比亚 =====
  'caldas': {
    id: 'caldas',
    countryId: 'colombia',
    name: 'Caldas',
    nameZh: '卡尔达斯',
    description:
      'Part of Colombia\'s famed Coffee Triangle, Caldas produces excellent washed Arabica. The department\'s capital, Manizales, is a hub for coffee research and education. Caldas coffee is balanced with bright acidity and caramel sweetness.',
    flavorProfile: ['Bright Acidity', 'Caramel', 'Nutty', 'Medium Body'],
    altitude: '1,200–1,800m',
    varieties: ['Castillo', 'Caturra', 'Colombia', 'Typica'],
    notableFor: 'Home to the National Coffee Research Center (Cenicafé).',
    image: '',
  },
  'risaralda': {
    id: 'risaralda',
    countryId: 'colombia',
    name: 'Risaralda',
    nameZh: '里萨拉尔达',
    description:
      'Risaralda is the smallest of the Coffee Triangle departments but produces outstanding coffee. The region is characterized by steep slopes and rich volcanic soil. Its coffee is known for bright acidity and fruity notes.',
    flavorProfile: ['Bright', 'Fruity', 'Citrus', 'Floral Notes'],
    altitude: '1,300–1,800m',
    varieties: ['Castillo', 'Caturra', 'Colombia'],
    notableFor: 'Steep mountain farms with exceptional microclimates.',
    image: '',
  },
  'quindio': {
    id: 'quindio',
    countryId: 'colombia',
    name: 'Quindío',
    nameZh: '金迪奥',
    description:
      'The smallest department in Colombia, Quindío is a coffee paradise. The region\'s theme park, Parque del Café, celebrates the cultural heritage. Quindío coffee is clean, bright, and well-balanced.',
    flavorProfile: ['Clean', 'Bright', 'Sweet', 'Medium Acidity'],
    altitude: '1,200–1,700m',
    varieties: ['Castillo', 'Caturra', 'Typica'],
    notableFor: 'UNESCO World Heritage-listed coffee cultural landscape.',
    image: '',
  },
  'huila': {
    id: 'huila',
    countryId: 'colombia',
    name: 'Huila',
    nameZh: '乌伊拉',
    description:
      'Huila has emerged as one of Colombia\'s premier specialty coffee regions. Its high altitude and diverse microclimates produce complex, fruity coffees that consistently score well in competitions.',
    flavorProfile: ['Complex', 'Fruity', 'Winey', 'Bright Acidity'],
    altitude: '1,500–2,100m',
    varieties: ['Castillo', 'Caturra', 'Pink Bourbon', 'Gesha'],
    notableFor: 'Winner of multiple Colombia Cup of Excellence competitions.',
    image: '',
  },
  'nariño': {
    id: 'nariño',
    countryId: 'colombia',
    name: 'Nariño',
    nameZh: '纳里尼奥',
    description:
      'Nariño sits at the southern tip of Colombia, near the equator, with some of the highest coffee farms in the world. Growing conditions are extreme — high altitude, steep slopes, and volcanic soil — producing intensely flavorful coffee.',
    flavorProfile: ['Intense', 'Bright Acidity', 'Fruity', 'Complex'],
    altitude: '1,600–2,300m',
    varieties: ['Castillo', 'Caturra', 'Typica', 'Tabi'],
    notableFor: 'Some of the highest-elevation coffee farms in the world.',
    image: '',
  },

  // ===== 秘鲁 =====
  'cajamarca': {
    id: 'cajamarca',
    countryId: 'peru',
    name: 'Cajamarca',
    nameZh: '卡哈马卡',
    description:
      'Cajamarca is Peru\'s largest coffee-producing region, located in the northern Andes. The high altitude, consistent rainfall, and rich soil produce sweet, complex coffees with bright acidity and floral notes.',
    flavorProfile: ['Sweet', 'Bright Acidity', 'Floral', 'Fruity'],
    altitude: '1,500–2,000m',
    varieties: ['Typica', 'Bourbon', 'Caturra', 'Pache'],
    notableFor: 'Peru\'s largest coffee region and a hub for organic coffee cooperatives.',
    image: '',
  },
  'cusco': {
    id: 'cusco',
    countryId: 'peru',
    name: 'Cusco',
    nameZh: '库斯科',
    description:
      'Coffee grown near Machu Picchu in the Cusco region produces exceptional quality Arabica. The combination of high altitude, rich volcanic soil, and heirloom varieties yields complex, bright, and balanced coffees.',
    flavorProfile: ['Complex', 'Bright', 'Fruity', 'Balanced'],
    altitude: '1,400–2,000m',
    varieties: ['Typica', 'Bourbon', 'Caturra'],
    notableFor: 'Coffee grown on ancient Inca terraces near Machu Picchu.',
    image: '',
  },
  'puno': {
    id: 'puno',
    countryId: 'peru',
    name: 'Puno',
    nameZh: '普诺',
    description:
      'Puno, on the shores of Lake Titicaca, produces coffee at extreme altitudes. The cool climate and intense sunlight create dense beans with bright acidity and distinctive fruity character.',
    flavorProfile: ['Bright', 'Fruity', 'Floral', 'Sweet'],
    altitude: '1,500–2,000m',
    varieties: ['Typica', 'Bourbon', 'Caturra'],
    notableFor: 'One of the highest-altitude coffee regions in Peru.',
    image: '',
  },
  'amazonas-peru': {
    id: 'amazonas-peru',
    countryId: 'peru',
    name: 'Amazonas',
    nameZh: '亚马逊斯',
    description:
      'The Amazonas region, bordering Ecuador, produces coffee on the eastern slopes of the Andes. The Amazon microclimate creates unique growing conditions, yielding coffee with tropical fruit notes and a creamy body.',
    flavorProfile: ['Fruity', 'Creamy', 'Sweet', 'Mild Acidity'],
    altitude: '1,200–1,800m',
    varieties: ['Typica', 'Caturra', 'Catimor'],
    notableFor: 'Grown on the Andean-Amazon transition zone with unique biodiversity.',
    image: '',
  },
  'junin': {
    id: 'junin',
    countryId: 'peru',
    name: 'Junín',
    nameZh: '胡宁',
    description:
      'Junín, in Peru\'s central highlands, is the heartland of quality coffee production. The Chanchamayo valley produces balanced, nutty-sweet coffees that are highly regarded by international buyers.',
    flavorProfile: ['Balanced', 'Nutty', 'Sweet', 'Chocolate'],
    altitude: '1,200–1,800m',
    varieties: ['Typica', 'Caturra', 'Catimor', 'Pache'],
    notableFor: 'Home to the renowned Chanchamayo valley coffee.',
    image: '',
  },

  // ===== 委内瑞拉 =====
  'tachira': {
    id: 'tachira',
    countryId: 'venezuela',
    name: 'Táchira',
    nameZh: '塔奇拉',
    description:
      'Táchira, in the Venezuelan Andes bordering Colombia, is Venezuela\'s premier coffee region. High altitude and fertile mountain soils produce a mild, balanced, and aromatic coffee that once competed with the best Colombian lots.',
    flavorProfile: ['Mild', 'Balanced', 'Aromatic', 'Sweet'],
    altitude: '1,000–1,600m',
    varieties: ['Typica', 'Bourbon', 'Caturra', 'Mundo Novo'],
    notableFor: 'Venezuela\'s finest coffee region, long considered among South America\'s best.',
    image: '',
  },
  'merida': {
    id: 'merida',
    countryId: 'venezuela',
    name: 'Mérida',
    nameZh: '梅里达',
    description:
      'Mérida, high in the Sierra Nevada, produces coffee at some of Venezuela\'s highest elevations. Cool temperatures slow cherry ripening, developing a sweet, complex cup with bright acidity.',
    flavorProfile: ['Bright', 'Sweet', 'Complex', 'Fruity'],
    altitude: '1,200–1,800m',
    varieties: ['Typica', 'Bourbon', 'Caturra'],
    notableFor: 'High-altitude coffee in the dramatic Sierra Nevada range.',
    image: '',
  },

  // ===== 厄瓜多尔 =====
  'loja': {
    id: 'loja',
    countryId: 'ecuador',
    name: 'Loja',
    nameZh: '洛哈',
    description:
      'Loja, in southern Ecuador, is the country\'s most important coffee region. The high altitude, rich volcanic soil, and ideal microclimate produce sweet, balanced coffee with bright fruit notes and floral aroma.',
    flavorProfile: ['Sweet', 'Balanced', 'Fruity', 'Floral'],
    altitude: '1,200–1,800m',
    varieties: ['Typica', 'Bourbon', 'Caturra', 'Catuai'],
    notableFor: 'Ecuador\'s leading coffee region for specialty Arabica production.',
    image: '',
  },
  'zamora-chinchipe': {
    id: 'zamora-chinchipe',
    countryId: 'ecuador',
    name: 'Zamora Chinchipe',
    nameZh: '萨莫拉钦奇佩',
    description:
      'Zamora Chinchipe, in the Amazon headwaters of southeastern Ecuador, is an emerging specialty coffee hotspot. The region\'s unique biodiversity and pristine environment produce complex, exotic coffees.',
    flavorProfile: ['Complex', 'Fruity', 'Bright', 'Exotic'],
    altitude: '1,200–1,800m',
    varieties: ['Typica', 'Bourbon', 'Caturra', 'Gesha'],
    notableFor: 'Emerging specialty coffee region with exceptional biodiversity.',
    image: '',
  },
  'galapagos': {
    id: 'galapagos',
    countryId: 'ecuador',
    name: 'Galápagos',
    nameZh: '加拉帕戈斯',
    description:
      'Galápagos coffee is grown on the volcanic slopes of San Cristóbal Island. The unique island ecosystem, volcanic soil, and equatorial climate produce a distinctive, smooth coffee with a unique terroir found nowhere else on Earth.',
    flavorProfile: ['Smooth', 'Sweet', 'Balanced', 'Unique Terroir'],
    altitude: '200–600m',
    varieties: ['Typica', 'Bourbon'],
    notableFor: 'Coffee from a UNESCO World Heritage site with a truly unique island terroir.',
    image: '',
  },
  'pichincha': {
    id: 'pichincha',
    countryId: 'ecuador',
    name: 'Pichincha',
    nameZh: '皮钦查',
    description:
      'The Pichincha region, surrounding Quito, produces coffee on the slopes of active volcanoes. Volcanic ash-enriched soils and cool highland temperatures produce clean, bright coffees.',
    flavorProfile: ['Clean', 'Bright', 'Citrus', 'Sweet'],
    altitude: '1,200–1,700m',
    varieties: ['Typica', 'Caturra', 'Bourbon'],
    notableFor: 'Coffee grown on the slopes of active volcanoes near the capital.',
    image: '',
  },

  // ===== 玻利维亚 =====
  'yungas': {
    id: 'yungas',
    countryId: 'bolivia',
    name: 'Yungas',
    nameZh: '永加斯',
    description:
      'The Yungas region, where the Andes plunge into the Amazon basin, is Bolivia\'s coffee heartland. Extremely steep slopes, high altitude, and rich soil produce some of the world\'s most distinctive, bright, and fruity coffees.',
    flavorProfile: ['Bright', 'Fruity', 'Floral', 'Complex'],
    altitude: '1,400–2,000m',
    varieties: ['Typica', 'Caturra', 'Catuai', 'Java'],
    notableFor: 'Dramatic high-altitude coffee grown where the Andes meet the Amazon.',
    image: '',
  },
  'caranavi': {
    id: 'caranavi',
    countryId: 'bolivia',
    name: 'Caranavi',
    nameZh: '卡拉纳维',
    description:
      'Caranavi is Bolivia\'s most productive coffee province. The region\'s smallholder farmers produce sweet, clean, fruity coffees that have won awards in international competitions.',
    flavorProfile: ['Sweet', 'Clean', 'Fruity', 'Balanced'],
    altitude: '1,300–1,700m',
    varieties: ['Typica', 'Caturra', 'Catuai', 'Java'],
    notableFor: 'Bolivia Cup of Excellence winners consistently come from Caranavi.',
    image: '',
  },
  'samaipata': {
    id: 'samaipata',
    countryId: 'bolivia',
    name: 'Samaipata',
    nameZh: '萨迈帕塔',
    description:
      'Samaipata, in the foothills of the Andes near Santa Cruz, is a small but high-quality coffee region. The unique transition-zone climate produces a mellow, sweet, and well-rounded cup.',
    flavorProfile: ['Sweet', 'Mellow', 'Well-Rounded', 'Mild Acidity'],
    altitude: '1,200–1,700m',
    varieties: ['Typica', 'Caturra', 'Bourbon'],
    notableFor: 'Small-scale, high-quality production in a unique transitional climate zone.',
    image: '',
  },

  // ==================== 中美洲 & 加勒比 ====================

  // ===== 洪都拉斯 =====
  'copan': {
    id: 'copan',
    countryId: 'honduras',
    name: 'Copán',
    nameZh: '科潘',
    description:
      'Copán, in western Honduras near the Guatemalan border, is one of the country\'s premier coffee regions. High altitude, consistent rainfall, and rich soil produce complex, sweet coffees with chocolate and citrus notes.',
    flavorProfile: ['Chocolate', 'Citrus', 'Sweet', 'Complex'],
    altitude: '1,200–1,600m',
    varieties: ['Catuai', 'Caturra', 'Bourbon', 'Lempira'],
    notableFor: 'Named after the ancient Maya city — coffee with archaeological heritage.',
    image: '',
  },
  'marcala': {
    id: 'marcala',
    countryId: 'honduras',
    name: 'Marcala',
    nameZh: '马卡拉',
    description:
      'Marcala, in the La Paz department, is renowned for producing some of Honduras\'s finest specialty coffee. The region consistently wins national quality competitions with its bright, sweet, and clean coffees.',
    flavorProfile: ['Bright', 'Sweet', 'Clean', 'Fruity'],
    altitude: '1,300–1,700m',
    varieties: ['Catuai', 'Caturra', 'Pacas', 'Lempira'],
    notableFor: 'Consistently produces Honduras Cup of Excellence winners.',
    image: '',
  },

  // ===== 墨西哥 =====
  'chiapas': {
    id: 'chiapas',
    countryId: 'mexico',
    name: 'Chiapas',
    nameZh: '恰帕斯',
    description:
      'Chiapas, near the Guatemalan border, is Mexico\'s most celebrated coffee region. High-altitude farms on volcanic soils produce bright, sweet coffees with excellent complexity and a clean finish.',
    flavorProfile: ['Bright', 'Sweet', 'Complex', 'Clean Acidity'],
    altitude: '1,200–1,700m',
    varieties: ['Typica', 'Bourbon', 'Mundo Novo', 'Catuai'],
    notableFor: 'Mexico\'s premier coffee state, producing the country\'s finest lots.',
    image: '',
  },
  'oaxaca': {
    id: 'oaxaca',
    countryId: 'mexico',
    name: 'Oaxaca',
    nameZh: '瓦哈卡',
    description:
      'Oaxaca produces coffee predominantly on small indigenous farms using traditional organic methods. The region\'s coffee is known for its smooth, nutty-chocolate profile with mild acidity.',
    flavorProfile: ['Smooth', 'Nutty', 'Chocolate', 'Mild Acidity'],
    altitude: '900–1,500m',
    varieties: ['Typica', 'Bourbon', 'Mundo Novo'],
    notableFor: 'Indigenous smallholder organic coffee with deep cultural heritage.',
    image: '',
  },
  'veracruz': {
    id: 'veracruz',
    countryId: 'mexico',
    name: 'Veracruz',
    nameZh: '韦拉克鲁斯',
    description:
      'Veracruz, on the Gulf coast, is one of Mexico\'s oldest coffee regions. Lower elevations produce a milder, lighter-bodied cup that is balanced and easy-drinking, ideal for everyday brewing.',
    flavorProfile: ['Balanced', 'Mild', 'Sweet', 'Light Body'],
    altitude: '800–1,300m',
    varieties: ['Typica', 'Bourbon', 'Caturra', 'Garnica'],
    notableFor: 'One of Mexico\'s oldest and most historic coffee-growing regions.',
    image: '',
  },

  // ===== 危地马拉 =====
  'antigua': {
    id: 'antigua',
    countryId: 'guatemala',
    name: 'Antigua',
    nameZh: '安提瓜',
    description:
      'Antigua is Guatemala\'s most famous coffee region, surrounded by three volcanoes (Agua, Fuego, Acatenango). The volcanic soil, known as pómez, retains moisture and provides perfect growing conditions. Antigua coffee is known for its bright acidity, rich chocolate notes, and a distinctive smoky hint from the volcanic terroir.',
    flavorProfile: ['Bright Acidity', 'Chocolate', 'Smoky', 'Complex'],
    altitude: '1,300–1,800m',
    varieties: ['Bourbon', 'Caturra', 'Catuai', 'Pacamara'],
    notableFor: 'Three volcanoes create a unique microclimate and volcanic pómez soil.',
    image: '',
  },
  'huehuetenango': {
    id: 'huehuetenango',
    countryId: 'guatemala',
    name: 'Huehuetenango',
    nameZh: '韦韦特南戈',
    description:
      'Huehuetenango is Guatemala\'s highest non-volcanic coffee region. The high altitude (some farms exceed 2,000m), dry hot winds from Mexico, and diverse climate produce coffee with outstanding complexity, bright acidity, and intense fruit-forward flavors.',
    flavorProfile: ['Intense', 'Fruity', 'Bright Acidity', 'Complex'],
    altitude: '1,500–2,100m',
    varieties: ['Bourbon', 'Caturra', 'Catuai', 'Pacas'],
    notableFor: 'Guatemala\'s highest and most extreme non-volcanic coffee region.',
    image: '',
  },
  'atitlan': {
    id: 'atitlan',
    countryId: 'guatemala',
    name: 'Atitlán',
    nameZh: '阿蒂特兰',
    description:
      'The Atitlán region surrounds the stunning Lake Atitlán, with volcanoes San Pedro, Atitlán, and Tolimán. The volcanic soil and lake-moderated climate produce coffee with bright, crisp acidity, floral notes, and sweet citrus character.',
    flavorProfile: ['Bright', 'Floral', 'Citrus', 'Crisp Acidity'],
    altitude: '1,300–1,800m',
    varieties: ['Typica', 'Bourbon', 'Caturra', 'Pacamara'],
    notableFor: 'Coffee grown on the slopes of volcanoes surrounding Lake Atitlán.',
    image: '',
  },

  // ===== 尼加拉瓜 =====
  'jinotega': {
    id: 'jinotega',
    countryId: 'nicaragua',
    name: 'Jinotega',
    nameZh: '希诺特加',
    description:
      'Jinotega is Nicaragua\'s largest and most productive coffee region. The cool, misty highlands produce sweet, mild, and balanced coffees with notes of chocolate and stone fruit.',
    flavorProfile: ['Sweet', 'Mild', 'Balanced', 'Chocolate', 'Stone Fruit'],
    altitude: '1,200–1,600m',
    varieties: ['Catuai', 'Caturra', 'Bourbon', 'Maragogipe'],
    notableFor: 'Nicaragua\'s coffee capital — the largest producing region in the country.',
    image: '',
  },
  'matagalpa': {
    id: 'matagalpa',
    countryId: 'nicaragua',
    name: 'Matagalpa',
    nameZh: '马塔加尔帕',
    description:
      'Matagalpa, with its rich volcanic soils and perfect elevation, produces some of Nicaragua\'s finest specialty coffee. The region is known for clean, bright cups with citrus acidity and a smooth, sweet finish.',
    flavorProfile: ['Clean', 'Bright', 'Citrus', 'Smooth', 'Sweet'],
    altitude: '1,200–1,500m',
    varieties: ['Catuai', 'Caturra', 'Bourbon', 'Pacas'],
    notableFor: 'Historic coffee region producing top-tier Nicaraguan specialty lots.',
    image: '',
  },
  'nueva-segovia': {
    id: 'nueva-segovia',
    countryId: 'nicaragua',
    name: 'Nueva Segovia',
    nameZh: '新塞哥维亚',
    description:
      'Nueva Segovia, near the Honduran border, has rapidly gained recognition for its exceptional specialty coffee. High altitude and diverse microclimates produce complex, fruity, and intense coffees.',
    flavorProfile: ['Complex', 'Fruity', 'Intense', 'Sweet'],
    altitude: '1,300–1,700m',
    varieties: ['Catuai', 'Caturra', 'Pacamara', 'Maragogipe'],
    notableFor: 'Fast-rising specialty coffee region producing Cup of Excellence winners.',
    image: '',
  },

  // ===== 哥斯达黎加 =====
  'tarrazu': {
    id: 'tarrazu',
    countryId: 'costa-rica',
    name: 'Tarrazú',
    nameZh: '塔拉苏',
    description:
      'Tarrazú is Costa Rica\'s most famous coffee region, producing some of the country\'s best beans. The high elevation and volcanic soil yield dense beans with bright acidity, complex fruit notes, and excellent clarity. Many of Costa Rica\'s finest micro-mills are located here.',
    flavorProfile: ['Bright', 'Complex', 'Fruity', 'Clean', 'Excellent Clarity'],
    altitude: '1,400–1,900m',
    varieties: ['Caturra', 'Catuai', 'Villa Sarchi', 'Gesha'],
    notableFor: 'Costa Rica\'s premier specialty coffee region with cutting-edge micro-mills.',
    image: '',
  },
  'west-valley': {
    id: 'west-valley',
    countryId: 'costa-rica',
    name: 'West Valley',
    nameZh: '西部山谷',
    description:
      'The West Valley region is characterized by consistent rainfall and moderate temperatures. The region produces coffees with good body, sweet fruit notes, and balanced acidity. It\'s known for a wide range of processing experiments.',
    flavorProfile: ['Sweet', 'Balanced', 'Fruity', 'Medium Body'],
    altitude: '1,200–1,600m',
    varieties: ['Villalobos', 'Villa Sarchi', 'Gesha', 'Catuai'],
    notableFor: 'Known for experimental honey and natural processing.',
    image: '',
  },
  'central-valley': {
    id: 'central-valley',
    countryId: 'costa-rica',
    name: 'Central Valley',
    nameZh: '中央山谷',
    description:
      'The Central Valley is the historic heart of Costa Rican coffee, with the capital San José surrounded by coffee farms. The region produces classic Costa Rican coffee — bright, clean, with crisp acidity and sweet citrus notes.',
    flavorProfile: ['Bright', 'Clean', 'Citrus', 'Sweet', 'Crisp Acidity'],
    altitude: '1,200–1,600m',
    varieties: ['Caturra', 'Catuai', 'Villa Sarchi'],
    notableFor: 'Historic coffee region surrounding the capital city.',
    image: '',
  },

  // ===== 萨尔瓦多 =====
  'santa-ana': {
    id: 'santa-ana',
    countryId: 'el-salvador',
    name: 'Santa Ana',
    nameZh: '圣安娜',
    description:
      'Santa Ana, dominated by the Santa Ana volcano (Ilamatepec), is El Salvador\'s largest coffee region. Rich volcanic soil and high altitude produce sweet, balanced coffees with a creamy body and chocolate notes.',
    flavorProfile: ['Sweet', 'Balanced', 'Chocolate', 'Creamy'],
    altitude: '1,200–1,700m',
    varieties: ['Bourbon', 'Pacas', 'Pacamara', 'Catuai'],
    notableFor: 'Home to El Salvador\'s iconic Pacamara variety on volcanic slopes.',
    image: '',
  },
  'ahuachapan': {
    id: 'ahuachapan',
    countryId: 'el-salvador',
    name: 'Ahuachapán',
    nameZh: '阿瓦查潘',
    description:
      'Ahuachapán, in western El Salvador, produces coffee in the Apaneca-Ilamatepec mountain range. The region is known for its bright, fruity coffees with outstanding complexity from the Bourbon and Pacamara varieties.',
    flavorProfile: ['Bright', 'Fruity', 'Complex', 'Sweet'],
    altitude: '1,200–1,600m',
    varieties: ['Bourbon', 'Pacamara', 'Pacas'],
    notableFor: 'High-quality Bourbon and Pacamara lots from the Apaneca range.',
    image: '',
  },
  'chalatenango': {
    id: 'chalatenango',
    countryId: 'el-salvador',
    name: 'Chalatenango',
    nameZh: '查拉特南戈',
    description:
      'Chalatenango, in northern El Salvador, is an emerging specialty region. Its high-altitude farms near the Honduras border produce clean, sweet coffees with bright acidity and distinctive floral notes.',
    flavorProfile: ['Clean', 'Sweet', 'Bright Acidity', 'Floral'],
    altitude: '1,300–1,700m',
    varieties: ['Bourbon', 'Pacas', 'Caturra'],
    notableFor: 'Rising specialty region with clean, high-grown El Salvador coffees.',
    image: '',
  },

  // ===== 巴拿马 =====
  'boquete': {
    id: 'boquete',
    countryId: 'panama',
    name: 'Boquete',
    nameZh: '波奎特',
    description:
      'Boquete, in the Chiriquí highlands near Volcán Barú, is where the legendary Gesha (Geisha) variety achieved global fame. The unique microclimate — cool temperatures, misty afternoons, and volcanic soil — creates coffees of extraordinary complexity, with intense jasmine, bergamot, and stone fruit notes that command record-breaking auction prices.',
    flavorProfile: ['Jasmine', 'Bergamot', 'Stone Fruit', 'Complex', 'Tea-like'],
    altitude: '1,400–1,900m',
    varieties: ['Gesha', 'Typica', 'Catuai', 'Caturra', 'Pacamara'],
    notableFor: 'The birthplace of Gesha coffee\'s global fame — world record auction prices.',
    image: '',
  },

  // ===== 牙买加 =====
  'blue-mountain': {
    id: 'blue-mountain',
    countryId: 'jamaica',
    name: 'Blue Mountain',
    nameZh: '蓝山',
    description:
      'Jamaica Blue Mountain is one of the most legendary coffee names in the world. Grown at high altitude in the Blue Mountain range, this coffee is renowned for its perfect balance, mild but complex flavor, lack of bitterness, and clean, smooth finish. Strict regulations and certification ensure only coffee from this specific region carries the prestigious Blue Mountain name.',
    flavorProfile: ['Mild', 'Smooth', 'Perfectly Balanced', 'Nutty', 'Chocolate'],
    altitude: '900–1,500m',
    varieties: ['Typica', 'Blue Mountain'],
    notableFor: 'One of the world\'s most expensive and regulated coffees — a true icon.',
    image: '',
  },

  // ===== 多米尼加 =====
  'barahona': {
    id: 'barahona',
    countryId: 'dominican-republic',
    name: 'Barahona',
    nameZh: '巴拉奥纳',
    description:
      'Barahona, in the southwestern mountains, is the Dominican Republic\'s premier coffee region. High altitude, consistent moisture, and rich soil produce a mild, sweet, and well-balanced coffee with a smooth finish.',
    flavorProfile: ['Mild', 'Sweet', 'Balanced', 'Smooth'],
    altitude: '800–1,400m',
    varieties: ['Typica', 'Caturra', 'Catuai'],
    notableFor: 'The Dominican Republic\'s most celebrated coffee region.',
    image: '',
  },
  'cibao': {
    id: 'cibao',
    countryId: 'dominican-republic',
    name: 'Cibao',
    nameZh: '锡瓦奥',
    description:
      'The Cibao valley in the northern Dominican Republic produces coffee in the foothills of the Cordillera Central. The region yields a clean, mild cup with nutty sweetness and light acidity.',
    flavorProfile: ['Clean', 'Mild', 'Nutty', 'Sweet'],
    altitude: '500–1,200m',
    varieties: ['Typica', 'Caturra', 'Catuai', 'Mundo Novo'],
    notableFor: 'The heartland of Dominican organic coffee production.',
    image: '',
  },
  'jarabacoa': {
    id: 'jarabacoa',
    countryId: 'dominican-republic',
    name: 'Jarabacoa',
    nameZh: '哈拉瓦科阿',
    description:
      'Jarabacoa, in the central highlands of the Cordillera Central, is known for its lush, mountainous terrain. Coffee here benefits from cool nights and rich soil, producing a balanced, sweet cup with pleasant acidity.',
    flavorProfile: ['Balanced', 'Sweet', 'Clean', 'Mild Acidity'],
    altitude: '800–1,400m',
    varieties: ['Typica', 'Caturra', 'Catuai'],
    notableFor: 'Mountain-grown organic coffee from the Dominican Alps.',
    image: '',
  },

  // ===== 古巴 =====
  'sierra-maestra': {
    id: 'sierra-maestra',
    countryId: 'cuba',
    name: 'Sierra Maestra',
    nameZh: '马埃斯特腊山',
    description:
      'The Sierra Maestra mountains in eastern Cuba are the country\'s primary coffee-growing region. Historically, coffee from this region was exported worldwide. Today, small-scale farmers produce a balanced, smooth, and mild cup.',
    flavorProfile: ['Balanced', 'Smooth', 'Mild', 'Sweet'],
    altitude: '600–1,200m',
    varieties: ['Typica', 'Catuai', 'Caturra'],
    notableFor: 'Cuba\'s most historic coffee region in the island\'s tallest mountain range.',
    image: '',
  },
  'escambray': {
    id: 'escambray',
    countryId: 'cuba',
    name: 'Escambray',
    nameZh: '埃斯坎布拉伊',
    description:
      'The Escambray mountains in central Cuba produce quality Arabica on limestone-rich soils. The region\'s coffee is known for its smooth body and mild, pleasant character with subtle sweetness.',
    flavorProfile: ['Smooth', 'Mild', 'Sweet', 'Pleasant'],
    altitude: '500–1,000m',
    varieties: ['Typica', 'Catuai', 'Caturra'],
    notableFor: 'Central Cuba\'s main coffee region with distinctive limestone terroir.',
    image: '',
  },

  // ===== 海地 =====
  'thiotte': {
    id: 'thiotte',
    countryId: 'haiti',
    name: 'Thiotte',
    nameZh: '蒂奥特',
    description:
      'Thiotte, in Haiti\'s southeast, is the country\'s largest coffee-growing region. Shade-grown coffee under native trees produces a sweet, mild cup with fruity notes and a smooth finish.',
    flavorProfile: ['Sweet', 'Mild', 'Fruity', 'Smooth'],
    altitude: '800–1,400m',
    varieties: ['Typica', 'Bourbon'],
    notableFor: 'Haiti\'s largest coffee region — shade-grown under native forest canopy.',
    image: '',
  },
  'kenscoff': {
    id: 'kenscoff',
    countryId: 'haiti',
    name: 'Kenscoff',
    nameZh: '肯斯科夫',
    description:
      'Kenscoff, in the mountains above Port-au-Prince, produces coffee at high elevations. Cool temperatures create a slow maturation period, yielding dense beans with bright acidity and complex flavor.',
    flavorProfile: ['Bright', 'Complex', 'Fruity', 'Clean'],
    altitude: '1,000–1,500m',
    varieties: ['Typica', 'Bourbon'],
    notableFor: 'High-altitude coffee from the mountains overlooking the Haitian capital.',
    image: '',
  },
  'baptiste': {
    id: 'baptiste',
    countryId: 'haiti',
    name: 'Baptiste',
    nameZh: '巴蒂斯特',
    description:
      'Baptiste, in Haiti\'s Nord department, is known for growing quality Arabica in a traditional shade-grown system. The coffee is characterized by its mild, sweet, and nutty flavor with a clean finish.',
    flavorProfile: ['Mild', 'Sweet', 'Nutty', 'Clean'],
    altitude: '600–1,100m',
    varieties: ['Typica', 'Bourbon'],
    notableFor: 'Traditional shade-grown coffee from Haiti\'s northern mountains.',
    image: '',
  },

  // ==================== 非洲 ====================

  // ===== 埃塞俄比亚 =====
  'yirgacheffe': {
    id: 'yirgacheffe',
    countryId: 'ethiopia',
    name: 'Yirgacheffe',
    nameZh: '耶加雪菲',
    description:
      'Yirgacheffe is the crown jewel of Ethiopian coffee. This tiny region in Sidamo produces some of the world\'s most distinctive and celebrated coffees. Washed Yirgacheffe is known for its intense floral aroma, tea-like body, and clean citrus acidity. Natural-processed Yirgacheffe explodes with blueberry, strawberry, and tropical fruit notes.',
    flavorProfile: ['Floral', 'Citrus', 'Blueberry', 'Tea-like', 'Winey'],
    altitude: '1,700–2,200m',
    varieties: ['Heirloom', 'Kurume', 'Wolisho', 'Dega'],
    notableFor: 'Widely considered the birthplace of Ethiopian specialty coffee.',
    image: '',
  },
  'sidamo': {
    id: 'sidamo',
    countryId: 'ethiopia',
    name: 'Sidamo',
    nameZh: '西达摩',
    description:
      'Sidamo is one of Ethiopia\'s largest and most diverse coffee regions. The coffee here is known for its balanced acidity, full body, and complex flavor profile with notes of citrus, chocolate, and berries. The region produces both washed and natural-processed coffees.',
    flavorProfile: ['Balanced', 'Citrus', 'Chocolate', 'Berry', 'Medium Acidity'],
    altitude: '1,500–2,200m',
    varieties: ['Heirloom', 'Bourbon', 'Mundo Novo'],
    notableFor: 'One of the largest coffee-producing regions in Ethiopia.',
    image: '',
  },
  'harrar': {
    id: 'harrar',
    countryId: 'ethiopia',
    name: 'Harrar',
    nameZh: '哈拉尔',
    description:
      'Harrar is a highland region in eastern Ethiopia known for its distinctive, wild, and winey natural-processed coffee. The beans are irregular in shape and the cup is intensely fruity, with notes of blueberry, blackberry, and dark chocolate. Harrar coffee has a distinctive, almost wild character that coffee lovers either adore or find challenging.',
    flavorProfile: ['Winey', 'Blueberry', 'Dark Chocolate', 'Wild', 'Full Body'],
    altitude: '1,400–2,000m',
    varieties: ['Heirloom', 'Dawairi', 'Udaini'],
    notableFor: 'One of the oldest coffee varieties still in production.',
    image: '',
  },
  'limmu': {
    id: 'limmu',
    countryId: 'ethiopia',
    name: 'Limmu',
    nameZh: '利姆',
    description:
      'Limmu is located in southwestern Ethiopia. The coffee is known for its spicy, winey character with good body and balanced acidity. Limmu coffee is typically processed using the washed method, producing a clean, sweet cup.',
    flavorProfile: ['Spicy', 'Winey', 'Sweet', 'Balanced'],
    altitude: '1,200–1,800m',
    varieties: ['Heirloom', 'Dega', 'Serto'],
    notableFor: 'Known for both washed and natural process quality.',
    image: '',
  },
  'guji': {
    id: 'guji',
    countryId: 'ethiopia',
    name: 'Guji',
    nameZh: '古吉',
    description:
      'Guji is a relatively new recognized region, having split from Sidamo. It has quickly become famous for its exceptional specialty coffee. Guji coffees are known for their intense fruitiness, complex floral notes, and clean, bright acidity.',
    flavorProfile: ['Fruity', 'Floral', 'Bright', 'Complex', 'Clean'],
    altitude: '1,500–2,200m',
    varieties: ['Heirloom', 'Kurume', 'Wolisho'],
    notableFor: 'One of Ethiopia\'s fastest-rising specialty coffee regions.',
    image: '',
  },

  // ===== 乌干达 =====
  'rwenzori': {
    id: 'rwenzori',
    countryId: 'uganda',
    name: 'Rwenzori',
    nameZh: '鲁文佐里',
    description:
      'The Rwenzori Mountains (Mountains of the Moon) in western Uganda produce the country\'s finest Arabica. High altitude, cool temperatures, and rich volcanic soil yield complex, winey, and fruity coffees with bright acidity.',
    flavorProfile: ['Winey', 'Fruity', 'Complex', 'Bright Acidity'],
    altitude: '1,500–2,000m',
    varieties: ['SL14', 'SL28', 'Typica', 'Kent'],
    notableFor: 'Uganda\'s premier Arabica region in the legendary Mountains of the Moon.',
    image: '',
  },
  'mount-elgon': {
    id: 'mount-elgon',
    countryId: 'uganda',
    name: 'Mount Elgon',
    nameZh: '埃尔贡山',
    description:
      'Mount Elgon, straddling the Uganda-Kenya border, produces quality Arabica on volcanic slopes. The region\'s coffee is known for its full body, chocolate notes, and balanced acidity.',
    flavorProfile: ['Full Body', 'Chocolate', 'Balanced', 'Fruity'],
    altitude: '1,600–2,100m',
    varieties: ['SL14', 'SL28', 'Typica', 'Kent'],
    notableFor: 'Volcanic highland coffee on one of Africa\'s oldest volcanoes.',
    image: '',
  },

  // ===== 坦桑尼亚 =====
  'kilimanjaro': {
    id: 'kilimanjaro',
    countryId: 'tanzania',
    name: 'Kilimanjaro',
    nameZh: '乞力马扎罗',
    description:
      'Coffee from the slopes of Mount Kilimanjaro, Africa\'s tallest mountain, is some of Tanzania\'s finest. Volcanic soil, high altitude, and ideal rainfall produce bright, complex, and winey coffees with blackcurrant and citrus notes.',
    flavorProfile: ['Bright', 'Complex', 'Winey', 'Blackcurrant', 'Citrus'],
    altitude: '1,400–1,800m',
    varieties: ['Bourbon', 'Kent', 'Typica', 'N39'],
    notableFor: 'Coffee grown on Africa\'s highest mountain — a legendary origin.',
    image: '',
  },

  // ===== 肯尼亚 =====
  'nyeri': {
    id: 'nyeri',
    countryId: 'kenya',
    name: 'Nyeri',
    nameZh: '涅里',
    description:
      'Nyeri sits on the slopes of Mount Kenya and produces some of Kenya\'s finest coffee. The region is known for the highly productive Kikuyu smallholders who deliver cherry to modern cooperative washing stations. Nyeri coffee is intense, with bright acidity, complex blackcurrant and citrus notes, and a winey finish.',
    flavorProfile: ['Intense', 'Blackcurrant', 'Citrus', 'Winey', 'Bright Acidity'],
    altitude: '1,500–2,100m',
    varieties: ['SL28', 'SL34', 'Ruiru 11', 'Batian'],
    notableFor: 'Home to legendary cooperatives like Gichathaini and Aguthi.',
    image: '',
  },
  'kiambu': {
    id: 'kiambu',
    countryId: 'kenya',
    name: 'Kiambu',
    nameZh: '基安布',
    description:
      'Kiambu is a historic coffee region near Nairobi. The area is famous for the Riuki and Chinga factories producing exceptional SL28 and SL34 varieties. Kiambu coffee is elegant, with fine acidity, complex fruit notes, and a long, sweet finish.',
    flavorProfile: ['Elegant', 'Fruity', 'Complex', 'Long Finish', 'Fine Acidity'],
    altitude: '1,500–1,900m',
    varieties: ['SL28', 'SL34', 'Ruiru 11', 'K7'],
    notableFor: 'The birthplace of Kenya\'s famous SL28 and SL34 varieties.',
    image: '',
  },
  'kirinyaga': {
    id: 'kirinyaga',
    countryId: 'kenya',
    name: 'Kirinyaga',
    nameZh: '基里尼亚加',
    description:
      'Kirinyaga sits on the southern foothills of Mount Kenya. The region\'s rich volcanic soil and high altitude produce outstanding coffee known for its deep berry sweetness, clean mouthfeel, and bold acidity. Some of Kenya\'s most award-winning coffees come from here.',
    flavorProfile: ['Berry', 'Sweet', 'Clean', 'Bold Acidity', 'Fruity'],
    altitude: '1,600–2,000m',
    varieties: ['SL28', 'SL34', 'Ruiru 11', 'Batian'],
    notableFor: 'Consistently produces some of Kenya\'s top-scoring coffees.',
    image: '',
  },

  // ===== 科特迪瓦 =====
  'sassandra': {
    id: 'sassandra',
    countryId: 'cote-d-ivoire',
    name: 'Sassandra',
    nameZh: '萨桑德拉',
    description:
      'Sassandra, in southwestern Côte d\'Ivoire, is a key Robusta-growing region. The area\'s low elevation and tropical climate produce bold, earthy, and full-bodied coffee that forms the backbone of the country\'s export production.',
    flavorProfile: ['Bold', 'Earthy', 'Full Body'],
    altitude: '200–500m',
    varieties: ['Robusta', 'Arabusta'],
    notableFor: 'One of Côte d\'Ivoire\'s traditional Robusta heartlands.',
    image: '',
  },
  'man': {
    id: 'man',
    countryId: 'cote-d-ivoire',
    name: 'Man',
    nameZh: '马恩',
    description:
      'The Man region in western Côte d\'Ivoire produces Robusta coffee at slightly higher elevations than coastal areas. The region\'s forested landscape provides natural shade, contributing to a richer, more nuanced cup.',
    flavorProfile: ['Bold', 'Earthy', 'Rich'],
    altitude: '300–600m',
    varieties: ['Robusta'],
    notableFor: 'Forested western region producing shade-grown Ivorian Robusta.',
    image: '',
  },
  'abengourou': {
    id: 'abengourou',
    countryId: 'cote-d-ivoire',
    name: 'Abengourou',
    nameZh: '阿本古鲁',
    description:
      'Abengourou, in eastern Côte d\'Ivoire near the Ghana border, is a traditional coffee-growing area. The region produces robust, earthy Robusta with the classic bold character expected of Ivorian coffee.',
    flavorProfile: ['Bold', 'Robust', 'Earthy'],
    altitude: '200–500m',
    varieties: ['Robusta'],
    notableFor: 'Eastern Côte d\'Ivoire\'s historic coffee-producing region.',
    image: '',
  },

  // ===== 刚果（金）=====
  'north-kivu': {
    id: 'north-kivu',
    countryId: 'democratic-republic-of-congo',
    name: 'North Kivu',
    nameZh: '北基伍',
    description:
      'North Kivu, on the shores of Lake Kivu, is DR Congo\'s premier Arabica region. High altitude volcanic soil, ideal climate, and proximity to Rwanda\'s coffee renaissance create conditions for exceptional, bright, and complex coffees.',
    flavorProfile: ['Bright', 'Complex', 'Fruity', 'Winey'],
    altitude: '1,500–2,000m',
    varieties: ['Bourbon', 'Typica', 'SL28'],
    notableFor: 'DR Congo\'s leading specialty coffee region with enormous potential.',
    image: '',
  },
  'south-kivu': {
    id: 'south-kivu',
    countryId: 'democratic-republic-of-congo',
    name: 'South Kivu',
    nameZh: '南基伍',
    description:
      'South Kivu, also bordering Lake Kivu, produces quality Arabica from smallholder farmers. The region\'s coffee is known for its sweet, fruity character and clean finish, rivaling neighboring Rwanda and Burundi.',
    flavorProfile: ['Sweet', 'Fruity', 'Clean', 'Balanced'],
    altitude: '1,500–2,000m',
    varieties: ['Bourbon', 'Typica', 'SL28'],
    notableFor: 'Smallholder farmers producing quality coffee in a post-conflict revival.',
    image: '',
  },
  'ituri': {
    id: 'ituri',
    countryId: 'democratic-republic-of-congo',
    name: 'Ituri',
    nameZh: '伊图里',
    description:
      'The Ituri region in northeastern DR Congo is an emerging Arabica area. High altitude rainforest conditions produce unique coffees with distinctive forest fruit notes and wild character.',
    flavorProfile: ['Fruity', 'Wild', 'Bright', 'Complex'],
    altitude: '1,200–1,800m',
    varieties: ['Bourbon', 'Typica', 'Robusta'],
    notableFor: 'Emerging origin with unique rainforest terroir characteristics.',
    image: '',
  },

  // ===== 马达加斯加 =====
  'analamanga': {
    id: 'analamanga',
    countryId: 'madagascar',
    name: 'Analamanga',
    nameZh: '阿纳拉曼加',
    description:
      'The Analamanga region around Antananarivo produces quality Arabica in Madagascar\'s central highlands. The region\'s red lateritic soil and moderate climate produce a bright, fruity coffee with winey overtones.',
    flavorProfile: ['Bright', 'Fruity', 'Winey', 'Balanced'],
    altitude: '800–1,200m',
    varieties: ['Bourbon', 'Robusta'],
    notableFor: 'Madagascar\'s central highland coffee, reflecting the island\'s unique terroir.',
    image: '',
  },
  'vakinankaratra': {
    id: 'vakinankaratra',
    countryId: 'madagascar',
    name: 'Vakinankaratra',
    nameZh: '瓦基南卡拉特拉',
    description:
      'Vakinankaratra, south of Antananarivo, is known for its volcanic highlands. The region produces clean, sweet Arabica with bright acidity and complex fruit notes from Bourbon varieties.',
    flavorProfile: ['Clean', 'Sweet', 'Bright', 'Complex', 'Fruity'],
    altitude: '1,000–1,500m',
    varieties: ['Bourbon'],
    notableFor: 'Volcanic highland Arabica from Madagascar\'s premier growing zone.',
    image: '',
  },
  'atsinanana': {
    id: 'atsinanana',
    countryId: 'madagascar',
    name: 'Atsinanana',
    nameZh: '阿齐纳纳纳',
    description:
      'Atsinanana, on Madagascar\'s eastern coast, primarily grows Robusta. The tropical coastal climate produces bold, earthy coffee used mostly for domestic consumption and blends.',
    flavorProfile: ['Bold', 'Earthy', 'Full Body'],
    altitude: '200–600m',
    varieties: ['Robusta'],
    notableFor: 'Madagascar\'s main Robusta region along the tropical eastern coast.',
    image: '',
  },

  // ===== 卢旺达 =====
  'nyamasheke': {
    id: 'nyamasheke',
    countryId: 'rwanda',
    name: 'Nyamasheke',
    nameZh: '尼亚马谢凯',
    description:
      'Nyamasheke, in western Rwanda near Lake Kivu, produces exceptional specialty coffee. High altitude, volcanic soil, and ideal climate create sweet, floral, and complex coffees that consistently score well internationally.',
    flavorProfile: ['Sweet', 'Floral', 'Complex', 'Bright'],
    altitude: '1,600–2,000m',
    varieties: ['Bourbon', 'Jackson', 'BM139'],
    notableFor: 'One of Rwanda\'s premier specialty regions, producing Cup of Excellence winners.',
    image: '',
  },
  'gakenke': {
    id: 'gakenke',
    countryId: 'rwanda',
    name: 'Gakenke',
    nameZh: '加肯凯',
    description:
      'Gakenke, in Rwanda\'s Northern Province, produces coffee at high elevations with distinctive floral and berry notes. The region\'s well-organized cooperatives consistently deliver high-quality lots.',
    flavorProfile: ['Floral', 'Berry', 'Bright', 'Sweet', 'Clean'],
    altitude: '1,600–2,100m',
    varieties: ['Bourbon', 'Jackson', 'BM139'],
    notableFor: 'Known for bright, floral coffees from well-organized cooperative systems.',
    image: '',
  },
  'rulindo': {
    id: 'rulindo',
    countryId: 'rwanda',
    name: 'Rulindo',
    nameZh: '鲁林多',
    description:
      'Rulindo, in the Northern Province, is home to some of Rwanda\'s most famous washing stations. The region produces exceptionally clean, bright, and sweet coffees with remarkable consistency.',
    flavorProfile: ['Clean', 'Bright', 'Sweet', 'Balanced'],
    altitude: '1,600–2,000m',
    varieties: ['Bourbon', 'Jackson', 'BM139'],
    notableFor: 'Home to renowned washing stations producing consistently excellent lots.',
    image: '',
  },
  'huye': {
    id: 'huye',
    countryId: 'rwanda',
    name: 'Huye',
    nameZh: '胡耶',
    description:
      'Huye (formerly Butare), in southern Rwanda, is a historic coffee region. The area\'s moderate climate and organized cooperatives produce sweet, clean coffees with balanced acidity and chocolate notes.',
    flavorProfile: ['Sweet', 'Clean', 'Balanced', 'Chocolate'],
    altitude: '1,500–1,800m',
    varieties: ['Bourbon', 'Jackson', 'BM139'],
    notableFor: 'Southern Rwanda\'s historic coffee hub with excellent cooperative infrastructure.',
    image: '',
  },

  // ===== 布隆迪 =====
  'kayanza': {
    id: 'kayanza',
    countryId: 'burundi',
    name: 'Kayanza',
    nameZh: '卡扬扎',
    description:
      'Kayanza, in northern Burundi, is the country\'s premier coffee region. High altitude, rich volcanic soil, and meticulous processing produce exceptionally clean, sweet, and complex coffees with bright acidity.',
    flavorProfile: ['Clean', 'Sweet', 'Complex', 'Bright Acidity', 'Fruity'],
    altitude: '1,600–2,000m',
    varieties: ['Bourbon', 'Jackson', 'Mibirizi', 'BM139'],
    notableFor: 'Burundi\'s premier coffee region — producing the country\'s finest lots.',
    image: '',
  },
  'ngozi': {
    id: 'ngozi',
    countryId: 'burundi',
    name: 'Ngozi',
    nameZh: '恩戈齐',
    description:
      'Ngozi, in northern Burundi, rivals Kayanza in quality. The region\'s highland farms and excellent washing stations produce bright, fruity coffees with remarkable sweetness and floral complexity.',
    flavorProfile: ['Bright', 'Fruity', 'Sweet', 'Floral', 'Complex'],
    altitude: '1,600–2,000m',
    varieties: ['Bourbon', 'Jackson', 'Mibirizi'],
    notableFor: 'Produces coffees that consistently rival Kayanza in quality and complexity.',
    image: '',
  },
  'muyinga': {
    id: 'muyinga',
    countryId: 'burundi',
    name: 'Muyinga',
    nameZh: '穆因加',
    description:
      'Muyinga, in northeastern Burundi, is an emerging coffee region. The area\'s high-altitude farms produce clean, balanced coffees with stone fruit notes and a smooth, sweet finish.',
    flavorProfile: ['Clean', 'Balanced', 'Stone Fruit', 'Sweet', 'Smooth'],
    altitude: '1,500–1,900m',
    varieties: ['Bourbon', 'Jackson', 'BM139'],
    notableFor: 'Northeastern Burundi\'s rising specialty coffee region.',
    image: '',
  },
  'karuzi': {
    id: 'karuzi',
    countryId: 'burundi',
    name: 'Karuzi',
    nameZh: '卡鲁济',
    description:
      'Karuzi, in central Burundi, produces quality Arabica from smallholder farms. The moderate elevation and organized cooperative washing stations produce sweet, well-balanced coffees.',
    flavorProfile: ['Sweet', 'Balanced', 'Clean', 'Mild Acidity'],
    altitude: '1,400–1,800m',
    varieties: ['Bourbon', 'Jackson', 'BM139'],
    notableFor: 'Central Burundi\'s coffee heartland with strong cooperative infrastructure.',
    image: '',
  },

  // ===== 安哥拉 =====
  'uige': {
    id: 'uige',
    countryId: 'angola',
    name: 'Uíge',
    nameZh: '威热',
    description:
      'Uíge, in northern Angola, was once a major Robusta-producing region. After decades of decline during the civil war, coffee production is slowly recovering, with bold, earthy Robusta dominating.',
    flavorProfile: ['Bold', 'Earthy', 'Full Body'],
    altitude: '500–1,200m',
    varieties: ['Robusta', 'Arabica'],
    notableFor: 'Once Angola\'s coffee heartland, now slowly rebuilding after decades of conflict.',
    image: '',
  },
  'cuanza-sul': {
    id: 'cuanza-sul',
    countryId: 'angola',
    name: 'Cuanza Sul',
    nameZh: '南宽扎',
    description:
      'Cuanza Sul, south of Luanda, was historically an important Arabica-producing region. Today, smallholder farmers are reviving production with a focus on quality Arabica.',
    flavorProfile: ['Mild', 'Balanced', 'Sweet'],
    altitude: '800–1,400m',
    varieties: ['Arabica', 'Robusta'],
    notableFor: 'Historic Arabica zone showing early signs of revival.',
    image: '',
  },
  'huambo': {
    id: 'huambo',
    countryId: 'angola',
    name: 'Huambo',
    nameZh: '万博',
    description:
      'Huambo, in Angola\'s central highlands, has ideal altitude and climate for Arabica production. Pre-war, this region produced Angola\'s finest coffees. Recovery efforts are underway.',
    flavorProfile: ['Bright', 'Fruity', 'Clean'],
    altitude: '1,300–1,800m',
    varieties: ['Arabica'],
    notableFor: 'Angola\'s highest-potential Arabica region in the central highlands.',
    image: '',
  },

  // ===== 喀麦隆 =====
  'bafoussam': {
    id: 'bafoussam',
    countryId: 'cameroon',
    name: 'Bafoussam (West)',
    nameZh: '巴富萨姆（西部省）',
    description:
      'The West Region around Bafoussam is Cameroon\'s primary Arabica zone. High altitude volcanic soils of the Bamboutos Mountains produce bold, fruity coffees with bright acidity.',
    flavorProfile: ['Bold', 'Fruity', 'Bright Acidity', 'Complex'],
    altitude: '1,200–1,700m',
    varieties: ['Java', 'Bourbon', 'Typica'],
    notableFor: 'Cameroon\'s leading Arabica region in the Bamboutos volcanic highlands.',
    image: '',
  },
  'bamenda': {
    id: 'bamenda',
    countryId: 'cameroon',
    name: 'Bamenda (Northwest)',
    nameZh: '巴门达（西北省）',
    description:
      'The Northwest Region around Bamenda produces quality Arabica on the slopes of the Bamenda Highlands. The region\'s coffee is known for its balanced body and fruity-earthy complexity.',
    flavorProfile: ['Balanced', 'Fruity', 'Earthy', 'Medium Body'],
    altitude: '1,200–1,600m',
    varieties: ['Java', 'Bourbon', 'Typica'],
    notableFor: 'Highland Arabica from Cameroon\'s anglophone northwest.',
    image: '',
  },
  'littoral-cameroon': {
    id: 'littoral-cameroon',
    countryId: 'cameroon',
    name: 'Littoral (Mungo)',
    nameZh: '滨海省（蒙戈）',
    description:
      'The Littoral region, particularly the Mungo division, is Cameroon\'s main Robusta zone. Low-elevation tropical conditions produce bold, earthy Robusta for domestic consumption and export blends.',
    flavorProfile: ['Bold', 'Earthy', 'Full Body'],
    altitude: '200–600m',
    varieties: ['Robusta'],
    notableFor: 'Cameroon\'s primary Robusta-producing region near the coast.',
    image: '',
  },

  // ===== 赞比亚 =====
  'northern-province': {
    id: 'northern-province',
    countryId: 'zambia',
    name: 'Northern Province',
    nameZh: '北方省',
    description:
      'The Northern Province, particularly around Kasama, is Zambia\'s main coffee zone. High altitude and ideal climate produce bright, clean, and fruity Arabica with excellent cup quality.',
    flavorProfile: ['Bright', 'Clean', 'Fruity', 'Sweet'],
    altitude: '1,300–1,800m',
    varieties: ['Bourbon', 'Typica', 'Catimor', 'Castillo'],
    notableFor: 'Zambia\'s largest coffee-growing region, producing the nation\'s best lots.',
    image: '',
  },
  'muchinga': {
    id: 'muchinga',
    countryId: 'zambia',
    name: 'Muchinga',
    nameZh: '穆钦加',
    description:
      'The Muchinga province in northeastern Zambia is an emerging coffee area. Similar to nearby Tanzanian growing zones, the region produces balanced, sweet Arabica with bright acidity.',
    flavorProfile: ['Balanced', 'Sweet', 'Bright', 'Clean'],
    altitude: '1,200–1,600m',
    varieties: ['Bourbon', 'Typica', 'Catimor'],
    notableFor: 'Emerging coffee region in Zambia\'s northeastern highlands.',
    image: '',
  },

  // ===== 津巴布韦 =====
  'eastern-highlands': {
    id: 'eastern-highlands',
    countryId: 'zimbabwe',
    name: 'Eastern Highlands',
    nameZh: '东部高地',
    description:
      'The Eastern Highlands, bordering Mozambique, are Zimbabwe\'s coffee heartland. High altitude and cool temperatures produce bright, winey, and complex coffees that once rivaled the best East African origins.',
    flavorProfile: ['Bright', 'Winey', 'Complex', 'Citrus', 'Fruity'],
    altitude: '1,200–1,600m',
    varieties: ['Catimor', 'Nyika', 'SL28'],
    notableFor: 'Zimbabwe\'s historic coffee region, producing the country\'s finest lots.',
    image: '',
  },
  'chipinge': {
    id: 'chipinge',
    countryId: 'zimbabwe',
    name: 'Chipinge',
    nameZh: '奇平盖',
    description:
      'Chipinge, in the southern Eastern Highlands, is known for its distinctive terroir. The region produces coffee with bright citrus acidity, full body, and winey complexity.',
    flavorProfile: ['Bright Acidity', 'Full Body', 'Winey', 'Citrus'],
    altitude: '1,000–1,500m',
    varieties: ['Catimor', 'Nyika', 'SL28'],
    notableFor: 'Southern Eastern Highlands — Zimbabwe\'s most productive coffee zone.',
    image: '',
  },
  'mutare': {
    id: 'mutare',
    countryId: 'zimbabwe',
    name: 'Mutare',
    nameZh: '穆塔雷',
    description:
      'Mutare, in the northern Eastern Highlands, produces small volumes of quality Arabica. The region\'s proximity to Mozambique creates a unique transitional climate for coffee growing.',
    flavorProfile: ['Balanced', 'Sweet', 'Fruity', 'Mild Acidity'],
    altitude: '1,000–1,400m',
    varieties: ['Catimor', 'SL28'],
    notableFor: 'Northern Eastern Highlands coffee with a unique transitional climate.',
    image: '',
  },

  // ===== 马拉维 =====
  'mzuzu': {
    id: 'mzuzu',
    countryId: 'malawi',
    name: 'Mzuzu',
    nameZh: '姆祖祖',
    description:
      'The Mzuzu region in northern Malawi is the country\'s coffee hub. High altitude and cool temperatures produce clean, bright, and fruity Arabica from smallholder cooperatives.',
    flavorProfile: ['Clean', 'Bright', 'Fruity', 'Sweet'],
    altitude: '1,200–1,800m',
    varieties: ['Catimor', 'Gesha', 'Mundo Novo', 'Bourbon'],
    notableFor: 'Malawi\'s main coffee region around the northern highland city of Mzuzu.',
    image: '',
  },
  'phoka': {
    id: 'phoka',
    countryId: 'malawi',
    name: 'Phoka',
    nameZh: '波卡',
    description:
      'The Phoka hills in northern Malawi are an emerging specialty region. Smallholder farmers produce sweet, complex coffees under shade trees in a pristine highland environment.',
    flavorProfile: ['Sweet', 'Complex', 'Clean', 'Balanced'],
    altitude: '1,300–1,700m',
    varieties: ['Catimor', 'Gesha', 'Bourbon'],
    notableFor: 'Pristine highland specialty coffee from Malawi\'s Phoka hills.',
    image: '',
  },
  'misuku-hills': {
    id: 'misuku-hills',
    countryId: 'malawi',
    name: 'Misuku Hills',
    nameZh: '米苏库山',
    description:
      'The Misuku Hills, in Malawi\'s far north near the Tanzanian border, produce some of the country\'s best coffee. Steep slopes and high altitude create bright, complex cups with distinctive fruit flavors.',
    flavorProfile: ['Bright', 'Complex', 'Fruity', 'Distinctive'],
    altitude: '1,400–1,900m',
    varieties: ['Catimor', 'Gesha', 'Bourbon'],
    notableFor: 'Malawi\'s highest-altitude coffee region with exceptional cup quality.',
    image: '',
  },

  // ===== 利比里亚 =====
  'nimba': {
    id: 'nimba',
    countryId: 'liberia',
    name: 'Nimba',
    nameZh: '宁巴',
    description:
      'Nimba County, in northern Liberia, produces Robusta and rare Liberica coffee. The region\'s tropical forest environment provides natural shade, yielding bold, earthy coffee with distinctive character.',
    flavorProfile: ['Bold', 'Earthy', 'Full Body'],
    altitude: '300–600m',
    varieties: ['Robusta', 'Liberica'],
    notableFor: 'One of the few places growing Liberica — the species that originated in Liberia.',
    image: '',
  },
  'lofa': {
    id: 'lofa',
    countryId: 'liberia',
    name: 'Lofa',
    nameZh: '洛法',
    description:
      'Lofa County, in northwestern Liberia, produces mostly Robusta coffee. The remote forested region\'s smallholder farmers grow coffee in a traditional low-input system.',
    flavorProfile: ['Bold', 'Earthy', 'Rustic'],
    altitude: '300–600m',
    varieties: ['Robusta', 'Liberica'],
    notableFor: 'Remote northwestern Liberia — traditional, low-input coffee farming.',
    image: '',
  },
  'bong': {
    id: 'bong',
    countryId: 'liberia',
    name: 'Bong',
    nameZh: '邦县',
    description:
      'Bong County, in central Liberia, is a traditional coffee-growing area. The region produces Robusta and small amounts of the historically significant Liberica variety.',
    flavorProfile: ['Bold', 'Earthy', 'Distinctive'],
    altitude: '200–500m',
    varieties: ['Robusta', 'Liberica'],
    notableFor: 'Central Liberia\'s coffee region, home to the historic Liberica variety.',
    image: '',
  },

  // ===== 尼日利亚 =====
  'taraba': {
    id: 'taraba',
    countryId: 'nigeria',
    name: 'Taraba',
    nameZh: '塔拉巴',
    description:
      'Taraba State, in eastern Nigeria, is the country\'s most promising coffee region. The Mambilla Plateau offers high altitude conditions suitable for quality Arabica and Robusta production.',
    flavorProfile: ['Bold', 'Earthy', 'Balanced'],
    altitude: '800–1,400m',
    varieties: ['Robusta', 'Arabica'],
    notableFor: 'Nigeria\'s most promising coffee zone on the Mambilla Plateau.',
    image: '',
  },
  'cross-river': {
    id: 'cross-river',
    countryId: 'nigeria',
    name: 'Cross River',
    nameZh: '克里斯河',
    description:
      'Cross River State, in southeastern Nigeria, grows Robusta coffee under shade in tropical forest conditions. The region has potential for increased specialty production.',
    flavorProfile: ['Bold', 'Earthy', 'Smooth'],
    altitude: '300–800m',
    varieties: ['Robusta'],
    notableFor: 'Southeastern Nigeria\'s traditional shade-grown Robusta region.',
    image: '',
  },
  'ogun': {
    id: 'ogun',
    countryId: 'nigeria',
    name: 'Ogun',
    nameZh: '奥贡',
    description:
      'Ogun State, in southwestern Nigeria, was historically an important coffee area. Today, efforts are underway to revive coffee production with a focus on quality Robusta and Arabica.',
    flavorProfile: ['Bold', 'Earthy', 'Traditional'],
    altitude: '200–500m',
    varieties: ['Robusta'],
    notableFor: 'Historic southwestern coffee region now undergoing revival.',
    image: '',
  },

  // ===== 圣多美和普林西比 =====
  'sao-tome-island': {
    id: 'sao-tome-island',
    countryId: 'sao-tome-and-principe',
    name: 'São Tomé Island',
    nameZh: '圣多美岛',
    description:
      'São Tomé Island, the main island of this tiny nation, produces quality Arabica on volcanic slopes. The rich basalt soil, equatorial climate, and Portuguese coffee heritage create a sweet, mild, and fruity cup.',
    flavorProfile: ['Sweet', 'Mild', 'Fruity', 'Aromatic'],
    altitude: '300–1,000m',
    varieties: ['Typica', 'Bourbon'],
    notableFor: 'Volcanic island Arabica with a rich Portuguese colonial coffee heritage.',
    image: '',
  },
  'principe': {
    id: 'principe',
    countryId: 'sao-tome-and-principe',
    name: 'Príncipe',
    nameZh: '普林西比岛',
    description:
      'Príncipe, the smaller of the two islands, produces tiny volumes of Arabica in a pristine, UNESCO Biosphere Reserve environment. The coffee is exceptionally rare and prized for its unique island terroir.',
    flavorProfile: ['Rare', 'Sweet', 'Floral', 'Clean'],
    altitude: '200–600m',
    varieties: ['Typica', 'Bourbon'],
    notableFor: 'Exceptionally rare coffee from a UNESCO Biosphere Reserve island.',
    image: '',
  },

  // ===== 多哥 =====
  'plateaux': {
    id: 'plateaux',
    countryId: 'togo',
    name: 'Plateaux',
    nameZh: '高原区',
    description:
      'The Plateaux region in southwestern Togo is the country\'s primary coffee zone. Moderate elevation and consistent rainfall produce mild, balanced Robusta used for domestic consumption and regional export.',
    flavorProfile: ['Mild', 'Balanced', 'Earthy'],
    altitude: '400–800m',
    varieties: ['Robusta'],
    notableFor: 'Togo\'s main coffee-growing region in the southwestern highlands.',
    image: '',
  },
  'centrale': {
    id: 'centrale',
    countryId: 'togo',
    name: 'Centrale',
    nameZh: '中部区',
    description:
      'The Centrale region in Togo produces small volumes of Robusta. The area\'s savanna-forest transition zone creates unique growing conditions for the country\'s coffee.',
    flavorProfile: ['Mild', 'Earthy', 'Smooth'],
    altitude: '300–600m',
    varieties: ['Robusta'],
    notableFor: 'Togo\'s secondary coffee region in the savanna transition zone.',
    image: '',
  },

  // ==================== 亚洲 & 中东 ====================

  // ===== 越南 =====
  'dak-lak': {
    id: 'dak-lak',
    countryId: 'vietnam',
    name: 'Dak Lak',
    nameZh: '多乐',
    description:
      'Dak Lak is Vietnam\'s largest coffee-producing province, located in the Central Highlands. Robusta dominates, grown on red basalt soil. The region produces bold, earthy, full-bodied coffee with distinct chocolate notes.',
    flavorProfile: ['Bold', 'Earthy', 'Chocolate', 'Full Body'],
    altitude: '500–800m',
    varieties: ['Robusta', 'TR4', 'TR9', 'TR11'],
    notableFor: 'Vietnam\'s coffee capital — the largest Robusta-producing region in the world.',
    image: '',
  },
  'lam-dong': {
    id: 'lam-dong',
    countryId: 'vietnam',
    name: 'Lam Dong',
    nameZh: '林同',
    description:
      'Lam Dong province, anchored by the city of Da Lat, is Vietnam\'s premier Arabica-growing area. The cooler climate of the Langbiang Plateau allows for quality Arabica production. This is where Vietnam\'s specialty coffee revolution is centered.',
    flavorProfile: ['Mild', 'Sweet', 'Balanced', 'Medium Body'],
    altitude: '800–1,500m',
    varieties: ['Catimor', 'Bourbon', 'Typica'],
    notableFor: 'Da Lat — the heart of Vietnam\'s growing Arabica industry.',
    image: '',
  },
  'gia-lai': {
    id: 'gia-lai',
    countryId: 'vietnam',
    name: 'Gia Lai',
    nameZh: '嘉莱',
    description:
      'Gia Lai province produces a mix of Robusta and increasing volumes of Arabica. The region\'s high elevation and basalt soil create good conditions for quality coffee production.',
    flavorProfile: ['Bold', 'Earthy', 'Low Acidity'],
    altitude: '500–1,000m',
    varieties: ['Robusta', 'Catimor'],
    notableFor: 'A growing hub for both Robusta and Arabica production.',
    image: '',
  },

  // ===== 印度尼西亚 =====
  'sumatra': {
    id: 'sumatra',
    countryId: 'indonesia',
    name: 'Sumatra',
    nameZh: '苏门答腊',
    description:
      'Sumatra is the heart of Indonesia\'s coffee identity. The famous "Mandheling" and "Lintong" coffees come from here. The unique wet-hulling (giling basah) process produces coffee with extremely low acidity, full body, and complex earthy, herbal, and spicy notes. Sumatra coffee is love-it-or-hate-it — there is no middle ground.',
    flavorProfile: ['Earthy', 'Herbal', 'Spicy', 'Low Acidity', 'Full Body'],
    altitude: '900–1,600m',
    varieties: ['Typica', 'Catimor', 'Linie S', 'S-Line'],
    notableFor: 'The legendary Mandheling — one of the world\'s most distinctive coffees.',
    image: '',
  },
  'java': {
    id: 'java',
    countryId: 'indonesia',
    name: 'Java',
    nameZh: '爪哇',
    description:
      'Java has been synonymous with coffee since the 17th century — "a cup of Java" was a global phrase for coffee. Today, Java produces excellent quality Arabica on the Ijen Plateau and in the Preanger region. The island\'s volcanic soil and high altitude produce clean, bright, and complex coffee.',
    flavorProfile: ['Clean', 'Bright', 'Spicy', 'Medium Body'],
    altitude: '1,000–1,600m',
    varieties: ['Typica', 'Catimor', 'USDA'],
    notableFor: 'The origin of the phrase "a cup of Java" — the first place coffee became a global commodity.',
    image: '',
  },
  'sulawesi': {
    id: 'sulawesi',
    countryId: 'indonesia',
    name: 'Sulawesi',
    nameZh: '苏拉威西',
    description:
      'Sulawesi (formerly Celebes) produces distinctive Toraja coffee. Named after the Toraja people of the highlands, this coffee is known for its heavy body, low acidity, and unique spicy-sweet flavor with notes of ripe fruit and chocolate.',
    flavorProfile: ['Full Body', 'Spicy', 'Sweet', 'Low Acidity', 'Chocolate'],
    altitude: '1,000–1,800m',
    varieties: ['Typica', 'S795', 'Catimor'],
    notableFor: 'Toraja coffee, known for its ceremonial importance and distinctive character.',
    image: '',
  },
  'bali': {
    id: 'bali',
    countryId: 'indonesia',
    name: 'Bali',
    nameZh: '巴厘',
    description:
      'Bali\'s coffee is grown in the Kintamani highlands, surrounding the active Mount Batur volcano. The volcanic soil and unique subak-abian (traditional Balinese irrigation) system produce sweet, clean, and bright coffee with notes of citrus and tropical fruit.',
    flavorProfile: ['Sweet', 'Citrus', 'Tropical Fruit', 'Medium Acidity'],
    altitude: '900–1,500m',
    varieties: ['Bourbon', 'Typica', 'S795'],
    notableFor: 'Grown in the ancient subak-abian agroforestry system.',
    image: '',
  },
  'flores': {
    id: 'flores',
    countryId: 'indonesia',
    name: 'Flores',
    nameZh: '弗洛勒斯',
    description:
      'Flores produces unique coffee on volcanic soils near Mount Kelimutu. The island\'s coffee is known for its complex, fruity character with good acidity and a long finish. Flores is an emerging specialty origin with tremendous potential.',
    flavorProfile: ['Fruity', 'Complex', 'Bright', 'Long Finish'],
    altitude: '1,000–1,500m',
    varieties: ['Bourbon', 'Typica', 'Catimor'],
    notableFor: 'Emerging specialty origin with unique volcanic terroir.',
    image: '',
  },

  // ===== 印度 =====
  'karnataka': {
    id: 'karnataka',
    countryId: 'india',
    name: 'Karnataka',
    nameZh: '卡纳塔克邦',
    description:
      'Karnataka is India\'s largest coffee-producing state, accounting for over 70% of national output. The districts of Chikmagalur, Hassan, and Kodagu (Coorg) produce world-famous Indian Arabica and Robusta under a unique two-tier shade system.',
    flavorProfile: ['Spicy', 'Full Body', 'Low Acidity', 'Chocolate'],
    altitude: '800–1,500m',
    varieties: ['Kent', 'S795', 'Catimor', 'Cauvery', 'Selection 9'],
    notableFor: 'India\'s coffee heartland — birthplace of Indian coffee in Chikmagalur.',
    image: '',
  },
  'kerala': {
    id: 'kerala',
    countryId: 'india',
    name: 'Kerala',
    nameZh: '喀拉拉邦',
    description:
      'The Wayanad and Travancore regions of Kerala produce distinctive Arabica and Robusta. Kerala is known for the unique "Monsooned Malabar" process, where green beans are exposed to monsoon winds, creating a legendary aged, low-acid coffee.',
    flavorProfile: ['Low Acidity', 'Spicy', 'Full Body', 'Unique Aged Character'],
    altitude: '700–1,400m',
    varieties: ['Kent', 'S795', 'Catimor', 'Robusta'],
    notableFor: 'Home of the legendary Monsooned Malabar — a globally unique aged coffee.',
    image: '',
  },
  'tamil-nadu': {
    id: 'tamil-nadu',
    countryId: 'india',
    name: 'Tamil Nadu',
    nameZh: '泰米尔纳德邦',
    description:
      'Tamil Nadu, particularly the Nilgiri and Shevaroy hills, produces quality Arabica at high elevations. The region\'s coffee is known for its balanced acidity, sweet flavor, and aromatic complexity.',
    flavorProfile: ['Balanced', 'Sweet', 'Aromatic', 'Mild Acidity'],
    altitude: '900–1,600m',
    varieties: ['S795', 'Catimor', 'Selection 9', 'Cauvery'],
    notableFor: 'High-altitude Arabica from the scenic Nilgiri and Shevaroy hills.',
    image: '',
  },

  // ===== 也门 =====
  'bani-matar': {
    id: 'bani-matar',
    countryId: 'yemen',
    name: 'Bani Matar',
    nameZh: '巴尼马塔尔',
    description:
      'Bani Matar, west of Sana\'a, is one of Yemen\'s most legendary coffee regions. Ancient terraced farms at extreme altitudes produce intensely complex, winey, and fruity coffees using traditional dry processing methods unchanged for centuries.',
    flavorProfile: ['Winey', 'Complex', 'Fruity', 'Intense', 'Spicy'],
    altitude: '1,800–2,400m',
    varieties: ['Udaini', 'Dawairi', 'Tufahi', 'Jaadi'],
    notableFor: 'Some of the world\'s oldest continuously cultivated coffee terraces.',
    image: '',
  },
  'haraaz': {
    id: 'haraaz',
    countryId: 'yemen',
    name: 'Haraaz',
    nameZh: '哈拉兹',
    description:
      'Haraaz, in the mountains west of Sana\'a, produces coffee from ancient terraces at elevations over 2,000m. The coffee is intensely fruity and winey, with a distinctive wild character that reflects its heirloom genetics and extreme terroir.',
    flavorProfile: ['Intense', 'Fruity', 'Winey', 'Wild', 'Complex'],
    altitude: '1,800–2,400m',
    varieties: ['Udaini', 'Dawairi', 'Burraii', 'Tufahi'],
    notableFor: 'Extreme high-altitude coffee from UNESCO-listed ancient mountain terraces.',
    image: '',
  },
  'hayma-kharijiya': {
    id: 'hayma-kharijiya',
    countryId: 'yemen',
    name: 'Hayma Kharijiya',
    nameZh: '海马哈里吉亚',
    description:
      'Hayma Kharijiya, in Yemen\'s interior, produces distinctive natural-processed coffee known for its bold body, dried fruit sweetness, and complex spice notes. The region\'s coffee is among Yemen\'s most sought-after.',
    flavorProfile: ['Bold', 'Dried Fruit', 'Spicy', 'Sweet', 'Full Body'],
    altitude: '1,600–2,200m',
    varieties: ['Udaini', 'Jaadi', 'Burraii'],
    notableFor: 'Produces some of Yemen\'s most sought-after and distinctive lots.',
    image: '',
  },
  'ismaili': {
    id: 'ismaili',
    countryId: 'yemen',
    name: 'Ismaili',
    nameZh: '伊斯玛仪',
    description:
      'The Ismaili region, named after the Ismaili community that farms these terraces, produces exceptionally clean and complex coffee. The region\'s meticulous traditional processing yields cups with remarkable clarity and depth.',
    flavorProfile: ['Clean', 'Complex', 'Fruity', 'Winey', 'Sweet'],
    altitude: '1,800–2,300m',
    varieties: ['Udaini', 'Tufahi', 'Jaadi'],
    notableFor: 'Meticulous traditional processing producing remarkably clean Yemeni coffee.',
    image: '',
  },

  // ===== 老挝 =====
  'bolaven-plateau': {
    id: 'bolaven-plateau',
    countryId: 'laos',
    name: 'Bolaven Plateau',
    nameZh: '波罗芬高原',
    description:
      'The Bolaven Plateau in southern Laos is the country\'s coffee powerhouse. Rich volcanic soil, high elevation, and consistent climate produce the vast majority of Laos\'s coffee, mostly Robusta with an increasing focus on specialty Arabica.',
    flavorProfile: ['Bold', 'Earthy', 'Low Acidity', 'Chocolate'],
    altitude: '800–1,300m',
    varieties: ['Robusta', 'Catimor', 'Typica', 'Bourbon'],
    notableFor: 'Laos\'s coffee heartland — one of Southeast Asia\'s most productive plateaus.',
    image: '',
  },
  'paksong': {
    id: 'paksong',
    countryId: 'laos',
    name: 'Paksong',
    nameZh: '北松',
    description:
      'Paksong, at the heart of the Bolaven Plateau, is Laos\'s specialty coffee hub. The town\'s ideal altitude and cool climate produce the country\'s finest Arabica, with clean, sweet, and balanced profiles.',
    flavorProfile: ['Clean', 'Sweet', 'Balanced', 'Fruity'],
    altitude: '1,000–1,300m',
    varieties: ['Catimor', 'Typica', 'Bourbon'],
    notableFor: 'The center of Laos\'s emerging specialty Arabica industry.',
    image: '',
  },
  'luang-prabang': {
    id: 'luang-prabang',
    countryId: 'laos',
    name: 'Luang Prabang',
    nameZh: '琅勃拉邦',
    description:
      'The Luang Prabang region in northern Laos produces small volumes of quality Arabica. The mountainous terrain and cooler northern climate create distinctive coffee with bright acidity and floral notes.',
    flavorProfile: ['Bright', 'Floral', 'Sweet', 'Mild'],
    altitude: '800–1,200m',
    varieties: ['Catimor', 'Typica'],
    notableFor: 'Northern Laos Arabica from the mountains around the UNESCO World Heritage city.',
    image: '',
  },
  'saravane': {
    id: 'saravane',
    countryId: 'laos',
    name: 'Saravane',
    nameZh: '沙拉湾',
    description:
      'Saravane province, near the Bolaven Plateau, produces both Robusta and Arabica. The region contributes significantly to Laos\'s total coffee output with its fertile soils and favorable climate.',
    flavorProfile: ['Bold', 'Earthy', 'Balanced'],
    altitude: '600–1,200m',
    varieties: ['Robusta', 'Catimor', 'Typica'],
    notableFor: 'Significant coffee producer adjacent to the Bolaven Plateau.',
    image: '',
  },

  // ===== 菲律宾 =====
  'benguet': {
    id: 'benguet',
    countryId: 'philippines',
    name: 'Benguet',
    nameZh: '本格特',
    description:
      'Benguet, in the Cordillera highlands of northern Luzon, is the Philippines\' premier Arabica region. High altitude, cool temperatures, and mountain mists produce clean, bright, and sweet coffee that has earned international recognition.',
    flavorProfile: ['Clean', 'Bright', 'Sweet', 'Balanced', 'Fruity'],
    altitude: '1,200–1,800m',
    varieties: ['Arabica', 'Typica', 'Bourbon', 'Caturra'],
    notableFor: 'The Philippines\' top Arabica region in the Cordillera highlands.',
    image: '',
  },
  'sagada': {
    id: 'sagada',
    countryId: 'philippines',
    name: 'Sagada',
    nameZh: '萨加达',
    description:
      'Sagada, in Mountain Province, produces some of the Philippines\' most prized Arabica. Organic farming traditions of the indigenous Igorot people combine with ideal altitude to produce remarkably clean and sweet coffees.',
    flavorProfile: ['Clean', 'Sweet', 'Floral', 'Bright Acidity'],
    altitude: '1,300–1,600m',
    varieties: ['Arabica', 'Typica', 'Bourbon'],
    notableFor: 'Indigenous Igorot organic Arabica — among the Philippines\' finest lots.',
    image: '',
  },
  'cavite': {
    id: 'cavite',
    countryId: 'philippines',
    name: 'Cavite',
    nameZh: '甲米地',
    description:
      'Cavite, south of Manila, is historically significant as one of the Philippines\' oldest coffee regions. Today, it produces Robusta and the famous Barako (Liberica), a bold, intense coffee that is a Filipino cultural icon.',
    flavorProfile: ['Bold', 'Intense', 'Earthy', 'Full Body'],
    altitude: '300–600m',
    varieties: ['Robusta', 'Liberica', 'Barako', 'Excelsa'],
    notableFor: 'Home of Barako — the bold Liberica coffee that is a Filipino cultural icon.',
    image: '',
  },
  'batangas': {
    id: 'batangas',
    countryId: 'philippines',
    name: 'Batangas',
    nameZh: '八打雁',
    description:
      'Batangas, south of Manila, is the historic heart of Philippine coffee culture. The region is famous for Kapeng Barako, a strong, distinctive Liberica coffee that has been grown here since the Spanish colonial era.',
    flavorProfile: ['Strong', 'Distinctive', 'Earthy', 'Full Body'],
    altitude: '300–600m',
    varieties: ['Liberica', 'Barako', 'Robusta', 'Excelsa'],
    notableFor: 'The historic birthplace of Philippine commercial coffee — home of Kapeng Barako.',
    image: '',
  },
  'sultan-kudarat': {
    id: 'sultan-kudarat',
    countryId: 'philippines',
    name: 'Sultan Kudarat',
    nameZh: '苏丹库达拉',
    description:
      'Sultan Kudarat, in Mindanao, is the Philippines\' largest Robusta-producing province. The region\'s tropical climate and fertile soil yield bold, earthy Robusta that forms the backbone of domestic coffee production.',
    flavorProfile: ['Bold', 'Earthy', 'Full Body', 'Chocolate'],
    altitude: '300–800m',
    varieties: ['Robusta', 'Arabica'],
    notableFor: 'The Philippines\' largest coffee-producing province — the Robusta heartland.',
    image: '',
  },

  // ===== 泰国 =====
  'doi-tung': {
    id: 'doi-tung',
    countryId: 'thailand',
    name: 'Doi Tung',
    nameZh: '董山',
    description:
      'Doi Tung, in Chiang Rai province, is one of Thailand\'s most famous coffee origins. Developed under the Royal Project as an alternative to opium cultivation, the region now produces excellent quality Arabica with a sweet, clean, and balanced profile.',
    flavorProfile: ['Sweet', 'Clean', 'Balanced', 'Mild'],
    altitude: '1,000–1,500m',
    varieties: ['Catimor', 'Doi Tung', 'Chiang Mai', 'Typica'],
    notableFor: 'Royal Project coffee — a successful opium-replacement initiative turned premium origin.',
    image: '',
  },
  'chiang-mai': {
    id: 'chiang-mai',
    countryId: 'thailand',
    name: 'Chiang Mai',
    nameZh: '清迈',
    description:
      'Chiang Mai province, in northern Thailand, is a hub for high-quality Arabica. The Doi Saket and Mae Taeng areas produce sweet, balanced coffees with chocolate and nut notes.',
    flavorProfile: ['Sweet', 'Balanced', 'Chocolate', 'Nutty'],
    altitude: '1,000–1,500m',
    varieties: ['Catimor', 'Typica', 'Bourbon', 'Caturra'],
    notableFor: 'Northern Thailand\'s Arabica hub with an increasingly vibrant specialty scene.',
    image: '',
  },
  'chiang-rai': {
    id: 'chiang-rai',
    countryId: 'thailand',
    name: 'Chiang Rai',
    nameZh: '清莱',
    description:
      'Chiang Rai, Thailand\'s northernmost province, produces some of the country\'s finest Arabica. The mountainous terrain and cool climate create ideal conditions for specialty coffee.',
    flavorProfile: ['Bright', 'Fruity', 'Sweet', 'Clean'],
    altitude: '1,000–1,500m',
    varieties: ['Catimor', 'Doi Tung', 'Typica'],
    notableFor: 'Thailand\'s northernmost coffee region with excellent specialty potential.',
    image: '',
  },
  'mae-hong-son': {
    id: 'mae-hong-son',
    countryId: 'thailand',
    name: 'Mae Hong Son',
    nameZh: '夜丰颂',
    description:
      'Mae Hong Son, near the Myanmar border, is an emerging Thai coffee region. Remote mountain farms produce small volumes of high-quality Arabica with distinctive herbal and fruity notes.',
    flavorProfile: ['Herbal', 'Fruity', 'Sweet', 'Distinctive'],
    altitude: '1,000–1,400m',
    varieties: ['Catimor', 'Caturra', 'Typica'],
    notableFor: 'Remote mountain Arabica from Thailand\'s borderlands with Myanmar.',
    image: '',
  },

  // ===== 缅甸 =====
  'shan': {
    id: 'shan',
    countryId: 'myanmar',
    name: 'Shan State',
    nameZh: '掸邦',
    description:
      'Shan State, in eastern Myanmar, is the country\'s primary Arabica region. High altitude, cool temperatures, and rich soil produce bright, fruity, and clean coffees that have gained international specialty recognition.',
    flavorProfile: ['Bright', 'Fruity', 'Clean', 'Complex'],
    altitude: '1,200–1,800m',
    varieties: ['Catimor', 'Caturra', 'S795', 'Bourbon'],
    notableFor: 'Myanmar\'s premier coffee region — producing internationally recognized specialty lots.',
    image: '',
  },
  'mandalay': {
    id: 'mandalay',
    countryId: 'myanmar',
    name: 'Mandalay',
    nameZh: '曼德勒',
    description:
      'The Mandalay region\'s Pyin Oo Lwin (Maymyo) area produces quality Arabica at high elevation. The region\'s colonial-era coffee heritage is being revived with a focus on specialty production.',
    flavorProfile: ['Sweet', 'Balanced', 'Fruity', 'Clean'],
    altitude: '1,000–1,500m',
    varieties: ['Catimor', 'S795', 'Caturra'],
    notableFor: 'Colonial-era coffee town revived as a specialty Arabica producer.',
    image: '',
  },
  'chin': {
    id: 'chin',
    countryId: 'myanmar',
    name: 'Chin State',
    nameZh: '钦邦',
    description:
      'Chin State, in western Myanmar, is a new frontier for coffee. Remote mountain communities are developing small-scale Arabica production with unique, distinctive character from the pristine Himalayan foothills.',
    flavorProfile: ['Distinctive', 'Bright', 'Sweet', 'Clean'],
    altitude: '1,200–1,700m',
    varieties: ['Catimor', 'Caturra', 'S795'],
    notableFor: 'Myanmar\'s newest coffee frontier in the remote Himalayan foothills.',
    image: '',
  },

  // ===== 中国 =====
  'yunnan': {
    id: 'yunnan',
    countryId: 'china',
    name: 'Yunnan',
    nameZh: '云南',
    description:
      'Yunnan province produces over 95% of China\'s coffee, predominantly in Pu\'er, Baoshan, and Dehong. High altitude, mild climate, and rich red soil produce mild, sweet, and nutty Arabica. Yunnan is both China\'s coffee origin and the world\'s fastest-growing coffee consumer market.',
    flavorProfile: ['Mild', 'Sweet', 'Nutty', 'Balanced', 'Slight Acidity'],
    altitude: '800–1,600m',
    varieties: ['Catimor', 'Typica', 'Bourbon', 'S795', 'T5175'],
    notableFor: 'China\'s coffee heartland — 95%+ of the country\'s production.',
    image: '',
  },

  // ===== 东帝汶 =====
  'ermera': {
    id: 'ermera',
    countryId: 'timor-leste',
    name: 'Ermera',
    nameZh: '埃尔梅拉',
    description:
      'Ermera, in the mountains southwest of Dili, is Timor-Leste\'s largest coffee region. High altitude, rich soil, and the widespread Timor Hybrid variety produce bright, sweet, and fruity coffee.',
    flavorProfile: ['Bright', 'Sweet', 'Fruity', 'Clean'],
    altitude: '1,200–1,800m',
    varieties: ['Timor Hybrid', 'Typica', 'Bourbon', 'Moka'],
    notableFor: 'Timor-Leste\'s largest coffee region and the home of the famous Timor Hybrid.',
    image: '',
  },
  'aileu': {
    id: 'aileu',
    countryId: 'timor-leste',
    name: 'Aileu',
    nameZh: '阿伊莱乌',
    description:
      'Aileu, south of Dili, produces quality Arabica from smallholder farmers. The region\'s high-altitude farms yield sweet, clean coffees with balanced acidity.',
    flavorProfile: ['Sweet', 'Clean', 'Balanced', 'Mild Acidity'],
    altitude: '1,200–1,700m',
    varieties: ['Timor Hybrid', 'Typica', 'Bourbon'],
    notableFor: 'High-altitude Arabica from the mountains south of the capital.',
    image: '',
  },
  'ainaro': {
    id: 'ainaro',
    countryId: 'timor-leste',
    name: 'Ainaro',
    nameZh: '阿伊纳罗',
    description:
      'Ainaro, in the southwestern highlands, is a significant coffee-growing municipality. The region\'s cool mountain climate and traditional farming methods produce distinctive, bright, and complex coffees.',
    flavorProfile: ['Bright', 'Complex', 'Distinctive', 'Fruity'],
    altitude: '1,200–1,800m',
    varieties: ['Timor Hybrid', 'Typica', 'Moka'],
    notableFor: 'Southwestern highland coffee with a distinctive traditional character.',
    image: '',
  },
  'liquica': {
    id: 'liquica',
    countryId: 'timor-leste',
    name: 'Liquiçá',
    nameZh: '利基萨',
    description:
      'Liquiçá, west of Dili, produces coffee on coastal-facing mountain slopes. The unique coastal-influenced microclimate creates a smooth, balanced cup with subtle fruit sweetness.',
    flavorProfile: ['Smooth', 'Balanced', 'Sweet', 'Fruity'],
    altitude: '800–1,400m',
    varieties: ['Timor Hybrid', 'Typica', 'Bourbon'],
    notableFor: 'Coastal mountain Arabica with a unique maritime-influenced microclimate.',
    image: '',
  },

  // ===== 柬埔寨 =====
  'mondulkiri': {
    id: 'mondulkiri',
    countryId: 'cambodia',
    name: 'Mondulkiri',
    nameZh: '蒙多基里',
    description:
      'Mondulkiri, in eastern Cambodia, is the country\'s primary coffee region. The province\'s red basalt soil and moderate elevation produce bold, earthy Robusta, with a growing movement toward specialty Arabica.',
    flavorProfile: ['Bold', 'Earthy', 'Full Body'],
    altitude: '300–800m',
    varieties: ['Robusta'],
    notableFor: 'Cambodia\'s main coffee-growing province on the eastern highlands.',
    image: '',
  },
  'ratanakiri': {
    id: 'ratanakiri',
    countryId: 'cambodia',
    name: 'Ratanakiri',
    nameZh: '腊塔纳基里',
    description:
      'Ratanakiri, in northeastern Cambodia, is an emerging coffee region. Its red volcanic soil and remote highland environment produce Robusta with distinctive character.',
    flavorProfile: ['Bold', 'Earthy', 'Distinctive'],
    altitude: '300–700m',
    varieties: ['Robusta'],
    notableFor: 'Northeastern Cambodia\'s remote highland coffee region.',
    image: '',
  },

  // ===== 马来西亚 =====
  'sabah': {
    id: 'sabah',
    countryId: 'malaysia',
    name: 'Sabah',
    nameZh: '沙巴',
    description:
      'Sabah, on the island of Borneo, is Malaysia\'s largest coffee region. The state produces Robusta, Arabica, and the local specialty Liberica. High-altitude Arabica from Mount Kinabalu is gaining recognition.',
    flavorProfile: ['Bold', 'Earthy', 'Complex'],
    altitude: '400–1,200m',
    varieties: ['Robusta', 'Liberica', 'Arabica'],
    notableFor: 'Malaysia\'s largest coffee state — from lowland Robusta to Kinabalu Arabica.',
    image: '',
  },
  'sarawak': {
    id: 'sarawak',
    countryId: 'malaysia',
    name: 'Sarawak',
    nameZh: '砂拉越',
    description:
      'Sarawak, also on Borneo, produces Robusta and small amounts of the rare Liberica variety. The state\'s traditional coffee culture is centered on smallholder farms.',
    flavorProfile: ['Bold', 'Earthy', 'Traditional'],
    altitude: '200–600m',
    varieties: ['Robusta', 'Liberica'],
    notableFor: 'Traditional smallholder coffee from Borneo\'s largest state.',
    image: '',
  },
  'johor': {
    id: 'johor',
    countryId: 'malaysia',
    name: 'Johor',
    nameZh: '柔佛',
    description:
      'Johor, at the southern tip of Peninsular Malaysia, is the peninsula\'s main coffee region. The state produces Robusta and has a long history of coffee cultivation dating back to the colonial era.',
    flavorProfile: ['Bold', 'Earthy', 'Smooth'],
    altitude: '100–400m',
    varieties: ['Robusta', 'Liberica'],
    notableFor: 'The historic coffee region of Peninsular Malaysia.',
    image: '',
  },

  // ===== 斯里兰卡 =====
  'kandy': {
    id: 'kandy',
    countryId: 'sri-lanka',
    name: 'Kandy',
    nameZh: '康提',
    description:
      'Kandy, in Sri Lanka\'s central highlands, is the historic heart of what was once one of the world\'s great coffee regions. Before the devastating coffee rust epidemic of the 1870s, Ceylon coffee was world-famous. Small-scale Arabica production continues today.',
    flavorProfile: ['Mild', 'Balanced', 'Fruity', 'Aromatic'],
    altitude: '600–1,200m',
    varieties: ['Typica', 'Robusta'],
    notableFor: 'The historic center of Ceylon coffee — once among the world\'s most celebrated.',
    image: '',
  },
  'nuwara-eliya': {
    id: 'nuwara-eliya',
    countryId: 'sri-lanka',
    name: 'Nuwara Eliya',
    nameZh: '努沃勒埃利耶',
    description:
      'Nuwara Eliya, Sri Lanka\'s highest town, was a prime coffee zone before the rust epidemic. Today, small scattered coffee farms produce mild, fruity Arabica in this scenic tea-dominated landscape.',
    flavorProfile: ['Mild', 'Fruity', 'Clean', 'Light Acidity'],
    altitude: '1,200–1,800m',
    varieties: ['Typica'],
    notableFor: 'Sri Lanka\'s highest coffee zone — now famous for tea but coffee persists.',
    image: '',
  },
  'matale': {
    id: 'matale',
    countryId: 'sri-lanka',
    name: 'Matale',
    nameZh: '马特莱',
    description:
      'Matale, in the central province, is a traditional coffee-growing district. The region\'s moderate elevation and consistent climate produce mild, well-balanced Arabica.',
    flavorProfile: ['Mild', 'Balanced', 'Sweet', 'Smooth'],
    altitude: '500–1,000m',
    varieties: ['Typica', 'Robusta'],
    notableFor: 'Central province coffee district with a long pre-rust history.',
    image: '',
  },
  'badulla': {
    id: 'badulla',
    countryId: 'sri-lanka',
    name: 'Badulla',
    nameZh: '巴杜勒',
    description:
      'Badulla, in Sri Lanka\'s Uva province, produces small volumes of quality Arabica. The region\'s distinctive climate — with periodic dry winds — creates coffee with unique character.',
    flavorProfile: ['Distinctive', 'Mild', 'Sweet', 'Aromatic'],
    altitude: '600–1,200m',
    varieties: ['Typica'],
    notableFor: 'Uva province coffee with a unique wind-influenced terroir.',
    image: '',
  },

  // ===== 台湾 =====
  'alishan': {
    id: 'alishan',
    countryId: 'taiwan',
    name: 'Alishan',
    nameZh: '阿里山',
    description:
      'Alishan is Taiwan\'s most celebrated coffee-growing region, located in Chiayi County in the central mountain range. The region\'s famous "sea of clouds," misty afternoons, and extreme day-night temperature swings slow coffee cherry maturation, concentrating sugars and developing exceptional complexity. Alishan coffee is known for its tea-like elegance, bright floral notes, and clean, sweet finish.',
    flavorProfile: ['Floral', 'Tea-like', 'Fruity', 'Clean', 'Sweet'],
    altitude: '1,000–1,600m',
    varieties: ['Gesha', 'Typica', 'Bourbon', 'Caturra', 'SL34'],
    notableFor: 'Grown in the same misty terroir as Taiwan\'s world-famous high-mountain oolong tea.',
    image: '',
  },

  // ==================== 大洋洲 ====================

  // ===== 巴布亚新几内亚 =====
  'eastern-highlands-png': {
    id: 'eastern-highlands-png',
    countryId: 'papua-new-guinea',
    name: 'Eastern Highlands',
    nameZh: '东部高地',
    description:
      'The Eastern Highlands, centered on Goroka, is PNG\'s largest coffee region. The province\'s high altitude, rich volcanic soil, and smallholder farms produce bright, complex, and winey Arabica.',
    flavorProfile: ['Bright', 'Complex', 'Winey', 'Fruity'],
    altitude: '1,400–1,900m',
    varieties: ['Typica', 'Arusha', 'Bourbon', 'Mundo Novo'],
    notableFor: 'PNG\'s largest coffee province — home to the famous Goroka coffee.',
    image: '',
  },
  'western-highlands-png': {
    id: 'western-highlands-png',
    countryId: 'papua-new-guinea',
    name: 'Western Highlands',
    nameZh: '西部高地',
    description:
      'The Western Highlands, around Mount Hagen, produce some of PNG\'s finest specialty Arabica. Extremely high altitude and pristine conditions yield clean, sweet, and exceptionally complex coffees.',
    flavorProfile: ['Clean', 'Sweet', 'Complex', 'Bright'],
    altitude: '1,500–2,100m',
    varieties: ['Typica', 'Arusha', 'Bourbon'],
    notableFor: 'PNG\'s premier specialty coffee region at the foot of Mount Hagen.',
    image: '',
  },
  'chimbu': {
    id: 'chimbu',
    countryId: 'papua-new-guinea',
    name: 'Chimbu (Simbu)',
    nameZh: '钦布',
    description:
      'Chimbu province, in the central highlands, produces quality Arabica on steep mountain slopes. The region\'s remote location and traditional farming methods create distinctive, full-bodied coffees.',
    flavorProfile: ['Full Body', 'Distinctive', 'Fruity', 'Balanced'],
    altitude: '1,400–1,900m',
    varieties: ['Typica', 'Arusha', 'Bourbon'],
    notableFor: 'Remote central highlands coffee with distinctive character.',
    image: '',
  },
  'morobe': {
    id: 'morobe',
    countryId: 'papua-new-guinea',
    name: 'Morobe',
    nameZh: '莫罗贝',
    description:
      'Morobe province, on PNG\'s northeastern coast, produces coffee in the Wau and Bulolo highlands. The region\'s coffee is known for its balanced acidity, sweet fruit notes, and smooth finish.',
    flavorProfile: ['Balanced', 'Sweet', 'Fruity', 'Smooth'],
    altitude: '1,200–1,700m',
    varieties: ['Typica', 'Arusha', 'Bourbon'],
    notableFor: 'Highland coffee from PNG\'s northeastern province.',
    image: '',
  },

  // ===== 澳大利亚 =====
  'northern-rivers': {
    id: 'northern-rivers',
    countryId: 'australia',
    name: 'Northern Rivers',
    nameZh: '北部河区',
    description:
      'The Northern Rivers region of New South Wales, centered on Byron Bay, is Australia\'s coffee heartland. The subtropical climate and rich volcanic soil produce clean, sweet, and bright Arabica prized by Australian specialty roasters.',
    flavorProfile: ['Clean', 'Sweet', 'Bright', 'Balanced'],
    altitude: '100–600m',
    varieties: ['K7', 'Catuai', 'Bourbon', 'SL28'],
    notableFor: 'Australia\'s largest coffee region — the heart of domestic specialty production.',
    image: '',
  },
  'atherton-tablelands': {
    id: 'atherton-tablelands',
    countryId: 'australia',
    name: 'Atherton Tablelands',
    nameZh: '阿瑟顿高原',
    description:
      'The Atherton Tablelands in Far North Queensland produce Australia\'s other significant coffee crop. The tropical highland climate and volcanic soil create sweet, mild, and clean coffees.',
    flavorProfile: ['Sweet', 'Mild', 'Clean', 'Smooth'],
    altitude: '500–800m',
    varieties: ['K7', 'Catuai', 'Bourbon'],
    notableFor: 'Tropical highland coffee from Queensland\'s premier coffee region.',
    image: '',
  },

  // ===== 所罗门群岛 =====
  'guadalcanal': {
    id: 'guadalcanal',
    countryId: 'solomon-islands',
    name: 'Guadalcanal',
    nameZh: '瓜达尔卡纳尔',
    description:
      'Guadalcanal, the Solomon Islands\' main island, produces most of the country\'s coffee. Smallholder farmers grow Arabica in the island\'s fertile volcanic highlands, producing bright, fruity, and clean coffees.',
    flavorProfile: ['Bright', 'Fruity', 'Clean', 'Sweet'],
    altitude: '400–1,000m',
    varieties: ['Typica', 'Bourbon'],
    notableFor: 'The Solomon Islands\' main coffee island with volcanic highland terroir.',
    image: '',
  },
  'malaita': {
    id: 'malaita',
    countryId: 'solomon-islands',
    name: 'Malaita',
    nameZh: '马莱塔',
    description:
      'Malaita island produces small volumes of quality Arabica. Traditional farming methods and the island\'s pristine environment yield coffee with a distinctive, clean character.',
    flavorProfile: ['Clean', 'Distinctive', 'Mild', 'Sweet'],
    altitude: '300–800m',
    varieties: ['Typica', 'Bourbon'],
    notableFor: 'Traditional small-scale Arabica from the Solomon Islands\' most populous island.',
    image: '',
  },

  // ===== 斐济 =====
  'viti-levu': {
    id: 'viti-levu',
    countryId: 'fiji',
    name: 'Viti Levu',
    nameZh: '维提岛',
    description:
      'Viti Levu, Fiji\'s main island, is where virtually all Fijian coffee is grown. Small plantations in the island\'s interior highlands around Navai produce mild, sweet Arabica in the South Pacific\'s unique tropical terroir.',
    flavorProfile: ['Mild', 'Sweet', 'Smooth', 'Tropical'],
    altitude: '200–600m',
    varieties: ['Typica', 'Bourbon'],
    notableFor: 'The South Pacific\'s rare island coffee — grown on Fiji\'s main island.',
    image: '',
  },
}

export function getRegionById(countryId, regionId) {
  return REGIONS[regionId] || null
}
