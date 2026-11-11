/**
 * BeanAtlas — 咖啡豆种反向索引
 *
 * 从 COUNTRIES 和 REGIONS 数据中提取所有豆种，
 * 按四大类分组，建立豆种 → 产国/产区 的反向索引。
 */

import { COUNTRIES } from './countries'
import { REGIONS } from './regions'

// ---- 分类规则 ----

const ARABICA_SET = new Set([
  'Typica', 'Bourbon', 'Caturra', 'Catuai', 'Mundo Novo',
  'Gesha', 'SL28', 'SL34', 'Pacas', 'Pacamara', 'Maragogipe',
  'Villalobos', 'Villa Sarchi', 'Castillo', 'Colombia',
  'Batian', 'Ruiru 11', 'Kent', 'Jackson', 'K7',
  'Pache', 'Acaiá', 'Icatu', 'Lempira', 'Garnica',
  'S795', 'Selection 9', 'Cauvery', 'Nyika', 'Topázio',
  'Tabi', 'Java', 'S-Line', 'Linie S', 'USDA',
  'Doi Tung', 'Chiang Mai', 'T5175', 'Moka',
  'Kurume', 'Wolisho', 'Dega', 'Dawairi', 'Udaini',
  'Tufahi', 'Burraii', 'Jaadi',
  'JARC varieties', 'Heirloom',
  'Arusha', 'Mibirizi', 'BM139', 'N39', 'Compact',
  'Blue Mountain', 'Pink Bourbon', 'Serto',
  'SL14',
  'Arabica', // 泛称，无具体豆种名时使用
])

const ROBUSTA_SET = new Set([
  'Robusta', 'Conilon', 'TR4', 'TR9', 'TR11',
])

const LIBERICA_SET = new Set([
  'Liberica', 'Excelsa', 'Barako',
])

const HYBRID_SET = new Set([
  'Catimor', 'Timor Hybrid', 'Arabusta',
])

function classify(name) {
  if (ARABICA_SET.has(name)) return 'arabica'
  if (ROBUSTA_SET.has(name)) return 'robusta'
  if (LIBERICA_SET.has(name)) return 'liberica'
  if (HYBRID_SET.has(name)) return 'hybrids'
  // Fallback — classify unknown varieties based on heuristics
  if (/robusta/i.test(name)) return 'robusta'
  if (/liberica/i.test(name)) return 'liberica'
  if (/excelsa/i.test(name)) return 'liberica'
  if (/catimor|timor|hybrid|arabusta/i.test(name)) return 'hybrids'
  return 'arabica'
}

// ---- 建立反向索引 ----

// 产国产量的快查表
const productionByCountry = {}
COUNTRIES.forEach((c) => {
  productionByCountry[c.id] = c.productionTonnes
})

function buildVarietyMap() {
  /** @type {Record<string, { category: string, countries: object[], regions: object[] }>} */
  const map = {}

  function addCountry(variety, country) {
    const name = variety.trim()
    if (!name) return
    if (!map[name]) {
      map[name] = { category: classify(name), countries: [], regions: [] }
    }
    if (!map[name].countries.find((c) => c.id === country.id)) {
      map[name].countries.push({
        id: country.id,
        name: country.name,
        flagEmoji: country.flagEmoji,
        continent: country.continent,
        productionTonnes: country.productionTonnes,
      })
    }
  }

  function addRegion(variety, region) {
    const name = variety.trim()
    if (!name) return
    if (!map[name]) {
      map[name] = { category: classify(name), countries: [], regions: [] }
    }
    if (!map[name].regions.find((r) => r.id === region.id)) {
      map[name].regions.push({
        id: region.id,
        countryId: region.countryId,
        name: region.name,
        nameZh: region.nameZh || region.name,
      })
    }
  }

  // 从国家数据收集
  for (const country of COUNTRIES) {
    if (country.varieties) {
      for (const v of country.varieties) {
        addCountry(v, country)
      }
    }
  }

  // 从产区数据收集
  for (const region of Object.values(REGIONS)) {
    if (region.varieties) {
      for (const v of region.varieties) {
        const country = COUNTRIES.find((c) => c.id === region.countryId)
        if (country) {
          addCountry(v, country)
        }
        addRegion(v, region)
      }
    }
  }

  // 补全 region 数据，按该豆种在各产国的种植规模排序
  for (const info of Object.values(map)) {
    // 统计每个产国下有多少个产区种植该豆种
    const regionCountByCountry = {}
    for (const r of info.regions) {
      regionCountByCountry[r.countryId] = (regionCountByCountry[r.countryId] || 0) + 1
    }

    // 产国排序：该国产区数降序 → 总产量降序
    info.countries.sort((a, b) => {
      const rcA = regionCountByCountry[a.id] || 0
      const rcB = regionCountByCountry[b.id] || 0
      if (rcB !== rcA) return rcB - rcA
      return b.productionTonnes - a.productionTonnes
    })

    // 补全 region 数据
    for (const r of info.regions) {
      const country = COUNTRIES.find((c) => c.id === r.countryId)
      if (country) {
        r.countryName = country.name
        r.countryFlag = country.flagEmoji
        r.countryProduction = country.productionTonnes
      }
    }
    // 产区排序：该国对该豆种的产区数降序 → 国产产量降序
    info.regions.sort((a, b) => {
      const rcA = regionCountByCountry[a.countryId] || 0
      const rcB = regionCountByCountry[b.countryId] || 0
      if (rcB !== rcA) return rcB - rcA
      return (b.countryProduction || 0) - (a.countryProduction || 0)
    })
  }

  return map
}

export const VARIETY_MAP = buildVarietyMap()

// ---- 豆种简介（中/英）----

export const VARIETY_DESC = {
  Typica: {
    en: 'The original Arabica variety — all others trace back to Typica. Elegant, sweet, balanced cup with mild acidity.',
    zh: '最原始的阿拉比卡种，所有豆种都可追溯到铁皮卡。风味优雅、甜美、平衡，酸度柔和。',
  },
  Bourbon: {
    en: 'A natural Typica mutation with higher yield and sweeter cup. Full body with rich caramel and chocolate notes.',
    zh: '铁皮卡的自然变异，产量更高、甜感更突出。醇厚饱满，带有浓郁的焦糖和巧克力风味。',
  },
  Caturra: {
    en: 'A compact Bourbon mutation — easier to harvest. Bright acidity, lighter body than Bourbon, popular across Latin America.',
    zh: '波旁的矮化变异，便于采摘。酸度明亮，比波旁口感轻盈，在拉美广泛种植。',
  },
  Catuai: {
    en: 'A cross between Mundo Novo and Caturra — very compact plant. High yield, balanced acidity, dependable quality.',
    zh: '蒙多诺沃与卡杜拉的杂交种，植株非常矮小。产量高、酸度均衡、品质稳定。',
  },
  'Mundo Novo': {
    en: 'A natural Typica × Bourbon hybrid from Brazil. Strong plant, high yield, smooth chocolate-nutty profile.',
    zh: '铁皮卡与波旁在巴西自然杂交的品种。植株强壮、产量高，带有丝滑的巧克力坚果风味。',
  },
  Gesha: {
    en: 'Legendary Ethiopian-origin variety, made famous in Panama. Intense jasmine florals, bergamot, and tea-like elegance.',
    zh: '源自埃塞俄比亚的传奇品种，在巴拿马成名。浓郁茉莉花香、佛手柑香气，茶感优雅。',
  },
  SL28: {
    en: 'Kenyan drought-resistant selection. Intense blackcurrant, complex acidity, full body — Kenya\'s signature variety.',
    zh: '肯尼亚选育的抗旱品种。浓郁黑加仑味、复杂的酸度、醇厚口感——肯尼亚的标志性豆种。',
  },
  SL34: {
    en: 'Kenyan selection adapted to high altitudes. Similar to SL28 but fruitier, with red berry notes and winey complexity.',
    zh: '肯尼亚选育的高海拔适应性品种。与SL28相似但果香更明显，带有红色浆果和葡萄酒般的复杂层次。',
  },
  Pacas: {
    en: 'A natural Bourbon mutation found in El Salvador. Smaller plant, sweet cup with floral and chocolate notes.',
    zh: '在萨尔瓦多发现的波旁自然变异。植株矮小，杯感甜美，带有花香和巧克力风味。',
  },
  Pacamara: {
    en: 'A giant-bean hybrid of Pacas × Maragogipe. Bold, complex cup — tropical fruit, spice, and creamy body.',
    zh: '帕卡斯与象豆的杂交巨豆种。风味浓烈复杂——热带水果、香料、奶油般的醇厚口感。',
  },
  Maragogipe: {
    en: 'A Typica mutation with exceptionally large beans. Mild, delicate cup — lightly sweet with floral hints.',
    zh: '铁皮卡的大豆变异，豆粒异常大。口感柔和细腻——微微甜感，带花香调。',
  },
  Castillo: {
    en: 'Colombia\'s rust-resistant variety (Catimor lineage). Good yield, balanced cup — Colombia\'s most planted variety.',
    zh: '哥伦比亚的抗锈病品种（卡蒂姆系）。产量好、口感平衡——哥伦比亚种植最广的豆种。',
  },
  Colombia: {
    en: 'A rust-resistant variety developed by Cenicafé. Similar to Castillo but bred for regional adaptability.',
    zh: '哥伦比亚咖啡研究中心选育的抗锈病品种。与卡斯蒂略相似，但针对不同产区做了适应性选育。',
  },
  'Blue Mountain': {
    en: 'Jamaica\'s protected Typica derivative. Perfectly balanced, mild, no bitterness — one of the world\'s most iconic coffees.',
    zh: '牙买加受保护的铁皮卡衍生品种。完美平衡、柔和、无苦味——世界最具标志性的咖啡之一。',
  },
  Kent: {
    en: 'An early rust-resistant selection from India. Balanced cup with good body — historically important in India and Africa.',
    zh: '印度早期选育的抗锈病品种。口感均衡、醇度良好——在印度和非洲种植史上意义重大。',
  },
  S795: {
    en: 'A popular Indian and Southeast Asian selection (Kent × S288). Spicy, full-bodied profile good for blending.',
    zh: '印度和东南亚广泛种植的选育品种（肯特×S288）。辛香、醇厚，适合拼配。',
  },
  'Ruiru 11': {
    en: 'Kenya\'s compact, high-yield hybrid (Catimor lineage). Rust-resistant with good cup, bred for smallholders.',
    zh: '肯尼亚的矮化高产品种（卡蒂姆系）。抗锈病、杯品好，专为小农设计。',
  },
  Batian: {
    en: 'Kenya\'s newer rust-resistant variety. Better cup quality than Ruiru 11, with classic Kenyan bright acidity.',
    zh: '肯尼亚新一代抗锈病品种。杯品优于鲁伊鲁11，具有经典肯尼亚的明亮酸度。',
  },
  Catimor: {
    en: 'A cross between Caturra and Timor Hybrid — rust-resistant with Robusta ancestry. Bold, earthy, widely planted in Asia.',
    zh: '卡杜拉与帝汶杂交种的杂交后代——具罗布斯塔血统的抗锈病品种。浓烈、泥土感，在亚洲广泛种植。',
  },
  'Timor Hybrid': {
    en: 'A natural Arabica × Robusta cross from Timor. Rust-resistant parent of Catimor — mild, sweet cup with low acidity.',
    zh: '阿拉比卡与罗布斯塔在东帝汶的自然杂交种。是卡蒂姆的抗锈病亲本——柔和、甜美、低酸。',
  },
  Heirloom: {
    en: 'Ethiopia\'s wild coffee treasury — thousands of unnamed native varieties. Unmatched diversity of floral, fruity flavors.',
    zh: '埃塞俄比亚的野生咖啡宝库——数千种未命名的原生品种。花香果香的无与伦比的多样性。',
  },
  'JARC varieties': {
    en: 'Modern disease-resistant varieties developed by Ethiopia\'s Jimma Research Center. Improved yield with good cup quality.',
    zh: '埃塞俄比亚吉马研究中心培育的现代抗病品种。产量提升且保持良好的杯测品质。',
  },
  Liberica: {
    en: 'A distinct coffee species with large leaves and beans. Bold, smoky, sometimes jackfruit-like — an acquired taste.',
    zh: '一种独特的咖啡物种，叶片和豆粒均大。浓烈、烟熏感，有时带菠萝蜜风味——爱的很爱。',
  },
  Excelsa: {
    en: 'A Liberica variant (Coffea liberica var. dewevrei). Tart, fruity, dark-roast character — often used for complexity in blends.',
    zh: '利比里卡的一个变种。酸爽、果香、深烘特质——常用于拼配中增添复杂度。',
  },
  Robusta: {
    en: 'The hardy species — high caffeine, bold, earthy, low acidity. Backbone of espresso blends and instant coffee.',
    zh: '强壮的高产物种——咖啡因含量高，浓烈、泥土感、低酸。意式拼配和速溶咖啡的基料。',
  },
  Arabica: {
    en: 'The premium coffee species — over 60% of world production. Sweeter, more complex, with higher acidity than Robusta.',
    zh: '精品咖啡物种——占全球产量60%以上。比罗布斯塔更甜美、更复杂、酸度更高。',
  },
  Java: {
    en: 'An heirloom Arabica originally from Ethiopia via Java island. Clean, bright cup — now grown in Cameroon, Bolivia and beyond.',
    zh: '源自埃塞俄比亚经爪哇岛流传的原生阿拉比卡。干净明亮——现种植于喀麦隆、玻利维亚等地。',
  },
  K7: {
    en: 'A Kenyan rust-tolerant selection widely planted in Australia. Clean, bright, with citrus and sweet fruit notes.',
    zh: '肯尼亚选育的耐锈病品种，在澳大利亚广泛种植。干净明亮，带有柑橘和甜美果香。',
  },
  Villalobos: {
    en: 'A Typica mutation discovered in Costa Rica. Well-adapted to volcanic soils — bright, clean with citrus notes.',
    zh: '在哥斯达黎加发现的铁皮卡变异。非常适合火山土壤——明亮、干净、柑橘风味。',
  },
  'Villa Sarchi': {
    en: 'A compact Bourbon mutation from Costa Rica. Sweet, bright cup — thrives in high-altitude volcanic terroir.',
    zh: '哥斯达黎加的矮化波旁变异。甜美明亮——在高海拔火山风土中表现优异。',
  },
  Lempira: {
    en: 'Honduras-bred rust-resistant variety (Catimor line). Good yield, balanced cup — widely planted in Central America.',
    zh: '洪都拉斯培育的抗锈病品种（卡蒂姆系）。产量好、口感平衡——在中美洲广泛种植。',
  },
  Conilon: {
    en: 'Brazil\'s native Robusta strain. High caffeine, full body, earthy — backbone of Brazilian espresso blends.',
    zh: '巴西本土罗布斯塔品系。高咖啡因、醇厚、泥土感——巴西意式拼配的基料。',
  },
  Barako: {
    en: 'Philippine Liberica — a cultural icon. Intense, bold, with a distinct smoky character. Known as "Kapeng Barako".',
    zh: '菲律宾利比里亚——文化标志。浓烈、强劲，带有独特的烟熏特质。被誉为"巴拉科咖啡"。',
  },
  Icatu: {
    en: 'A complex Brazilian hybrid with Robusta ancestry. Good rust resistance, balanced cup with nutty-chocolate notes.',
    zh: '巴西选育的复杂杂交种，带罗布斯塔血统。抗锈病好、口感平衡，带有坚果巧克力风味。',
  },
  Acaiá: {
    en: 'A high-yield Mundo Novo selection from Brazil. Large beans, smooth body — ideal for natural processing.',
    zh: '巴西从蒙多诺沃中选育的高产品种。豆粒大、口感顺滑——非常适合日晒处理。',
  },
  Serto: {
    en: 'An Ethiopian heirloom variety from the Limmu region. Spicy, winey character with sweet, balanced acidity.',
    zh: '埃塞俄比亚利姆地区的原生种。辛香、葡萄酒感，甜美的平衡酸度。',
  },
  Moka: {
    en: 'A tiny-bean Yemeni heirloom — named after Mokha port. Intensely complex, winey, with dried fruit sweetness.',
    zh: '也门的极小豆原生种——以摩卡港命名。浓烈复杂、葡萄酒感，带有干果甜味。',
  },
  Nyika: {
    en: 'A rust-resistant variety from Zimbabwe. Bright, citrusy — one of Africa\'s lesser-known quality selections.',
    zh: '津巴布韦的抗锈病品种。明亮、柑橘感——非洲少为人知的优质选育品种。',
  },
  Pache: {
    en: 'A compact Typica mutation from Guatemala, now common in Peru. Mild, sweet, with pleasing nutty undertones.',
    zh: '危地马拉的矮化铁皮卡变异，现常见于秘鲁。柔和甜美，带怡人的坚果底韵。',
  },
  Arusha: {
    en: 'A Bourbon/Typica derivative from Tanzania, named after the Arusha region. Bright, winey — popular in Papua New Guinea.',
    zh: '坦桑尼亚的波旁/铁皮卡衍生种，以阿鲁沙地区命名。明亮、葡萄酒感——在巴布亚新几内亚种植广泛。',
  },
  Jackson: {
    en: 'A Bourbon selection widely planted in Rwanda and Burundi. Clean, sweet, with floral and berry complexity.',
    zh: '卢旺达和布隆迪广泛种植的波旁选育品种。干净甜美，带有花香和浆果的复杂层次。',
  },
  Garnica: {
    en: 'A Mexican dwarf hybrid (Mundo Novo × Caturra). Compact, rust-tolerant, with balanced sweetness.',
    zh: '墨西哥的矮化杂交种（蒙多诺沃×卡杜拉）。植株紧凑、耐锈病、甜感均衡。',
  },
  'Selection 9': {
    en: 'An Indian Arabica selection with good yield and rust tolerance. Mild, balanced cup used in domestic blends.',
    zh: '印度选育的阿拉比卡，产量好、耐锈病。柔和平衡，用于国内拼配。',
  },
  Cauvery: {
    en: 'An Indian Catimor derivative (Caturra × Hybrido-de-Timor). Rust-resistant, well-adapted to Indian conditions.',
    zh: '印度的卡蒂姆衍生品种（卡杜拉×帝汶杂交）。抗锈病，很好地适应印度种植条件。',
  },
  Topázio: {
    en: 'A compact Brazilian variety (Catuai × Mundo Novo). High yield, good for mechanical harvesting.',
    zh: '巴西的矮化品种（卡杜艾×蒙多诺沃）。高产，适合机械化采摘。',
  },
  Tabi: {
    en: 'A Colombian hybrid (Typica × Bourbon × Timor Hybrid). Good rust resistance with excellent cup quality.',
    zh: '哥伦比亚的杂交种（铁皮卡×波旁×帝汶杂交）。抗锈病好，杯品极佳。',
  },
  'S-Line': {
    en: 'Indonesian Arabica selections (S795, S288 etc.). Adapted to local wet-hulling (giling basah) processing.',
    zh: '印尼选育的阿拉比卡品系（S795、S288等）。适应本地湿刨法处理。',
  },
  'Linie S': {
    en: 'Indonesian name for S-Line Arabica selections. Robust, well-adapted to Sumatra and Java conditions.',
    zh: '印尼对S系阿拉比卡的称呼。强壮耐种，适应苏门答腊和爪哇的种植条件。',
  },
  USDA: {
    en: 'A Typica selection distributed by the USDA. Clean cup, now mostly grown in Java, Indonesia.',
    zh: '美国农业部推广的铁皮卡选种。杯感干净，现主要种植于印尼爪哇岛。',
  },
  'Doi Tung': {
    en: 'A Thai Arabica variety named after Doi Tung mountain. Clean, balanced — part of Thailand\'s Royal Project coffee.',
    zh: '以泰国董山命名的阿拉比卡品种。干净平衡——泰国皇家计划咖啡的一部分。',
  },
  'Chiang Mai': {
    en: 'A Thai Arabica variety from Chiang Mai province. Sweet, mild — grown as an opium-replacement crop in northern Thailand.',
    zh: '泰国清迈府的阿拉比卡品种。甜美柔和——作为替代鸦片种植的北部山区作物。',
  },
  T5175: {
    en: 'A Chinese rust-resistant Arabica selection from Yunnan. Mild, nutty — adapted to Yunnan\'s unique terroir.',
    zh: '中国云南选育的抗锈病阿拉比卡。柔和、坚果香——适应云南独特风土。',
  },
  Kurume: {
    en: 'An Ethiopian heirloom variety found in Yirgacheffe and Guji. Floral, tea-like — prized for washed processing.',
    zh: '埃塞俄比亚耶加雪菲和古吉地区的原生种。花香、茶感——水洗处理时风味尤为出众。',
  },
  Wolisho: {
    en: 'An Ethiopian heirloom from the Sidamo region. Fruity, balanced acidity — common in southern Ethiopia.',
    zh: '埃塞俄比亚西达摩地区的原生种。果香、酸度平衡——在埃塞俄比亚南部常见。',
  },
  Dega: {
    en: 'An Ethiopian heirloom variety from Limmu region. Spicy, winey character with medium body.',
    zh: '埃塞俄比亚利姆地区的原生种。辛香、葡萄酒感，中等醇度。',
  },
  Dawairi: {
    en: 'A traditional Yemeni heirloom — one of the oldest cultivated coffee varieties. Intense, wild, winey character.',
    zh: '也门传统原生种——最古老的栽培咖啡品种之一。浓烈、野性、葡萄酒感。',
  },
  Udaini: {
    en: 'Yemen\'s most widely planted heirloom variety. Complex, dried-fruit sweetness with ancient spice notes.',
    zh: '也门种植最广的原生种。复杂、干果甜味，带有古老香料气息。',
  },
  Tufahi: {
    en: 'A Yemeni heirloom named for its apple-like aroma ("tufah" = apple). Fruity, sweet, highly aromatic cup.',
    zh: '也门的原生种，因其苹果般的香气得名。果香、甜美、芳香浓郁。',
  },
  Burraii: {
    en: 'A rare Yemeni heirloom variety from Haraaz region. Bold body, intense dried-fruit and spice complexity.',
    zh: '也门哈拉兹地区的稀有原生种。醇厚饱满，浓烈的干果和香料复杂度。',
  },
  Jaadi: {
    en: 'A traditional Yemeni heirloom from Bani Matar. Clean, complex with remarkable clarity for a natural coffee.',
    zh: '也门巴尼马塔尔的传统原生种。干净、复杂，作为日晒咖啡却具有惊人清晰度。',
  },
  Mibirizi: {
    en: 'A Bourbon-derived heirloom from Burundi and Rwanda. Clean, sweet, with fruity brightness and floral hints.',
    zh: '布隆迪和卢旺达的波旁衍生原生种。干净甜美，带有明亮果香和花香。',
  },
  BM139: {
    en: 'A Bourbon mutation selected in Rwanda and Burundi. Exceptional cup — sweet, floral, with complex berry notes.',
    zh: '卢旺达和布隆迪选育的波旁变异。杯品卓越——甜美、花香、浆果层次丰富。',
  },
  N39: {
    en: 'A Tanzanian Arabica selection. Bright, winey — one of Africa\'s lesser-known but quality heirloom types.',
    zh: '坦桑尼亚选育的阿拉比卡。明亮、葡萄酒感——非洲少见但品质出众的原生类型。',
  },
  Compact: {
    en: 'A dwarf Arabica variant grown in Tanzania. Small plant, easy harvest — mild balanced cup.',
    zh: '坦桑尼亚种植的矮化阿拉比卡变种。植株矮小、便于采摘——口感柔和均衡。',
  },
  'Pink Bourbon': {
    en: 'A rare Bourbon mutation with pink cherries (not red). Exceptionally sweet, complex — a specialty coffee darling.',
    zh: '稀有的波旁变异，结粉色樱桃（非红色）。极其甜美复杂——精品咖啡界的宠儿。',
  },
  SL14: {
    en: 'A Kenyan drought-tolerant selection widely grown in Uganda. Good body, mild acidity — reliable quality.',
    zh: '肯尼亚选育的耐旱品种，在乌干达广泛种植。醇度好、酸度温和——品质稳定可靠。',
  },
  TR4: {
    en: 'A Vietnamese Robusta clone — high-yielding, disease-resistant. Key variety in Vietnam\'s coffee boom.',
    zh: '越南罗布斯塔无性系——高产、抗病。越南咖啡繁荣的关键品种。',
  },
  TR9: {
    en: 'A Vietnamese Robusta clone selected for bean size and yield. Dominant in the Central Highlands.',
    zh: '越南罗布斯塔无性系，按豆粒大小和产量选育。在中央高地占主导地位。',
  },
  TR11: {
    en: 'A newer Vietnamese Robusta clone — improved cup quality over TR4/TR9. Vietnam\'s push toward specialty Robusta.',
    zh: '越南新一代罗布斯塔无性系——杯品优于TR4/TR9。越南精品罗布斯塔的探索。',
  },
  Arabusta: {
    en: 'A man-made Arabica × Robusta hybrid from Côte d\'Ivoire. High yield, good disease resistance — mostly for local use.',
    zh: '科特迪瓦人工培育的阿拉比卡×罗布斯塔杂交种。高产、抗病——主要用于本地消费。',
  },
}

/**
 * 获取豆种简介
 * @param {string} name
 * @param {'en'|'zh'} lang
 * @returns {string|null}
 */
export function getVarietyDesc(name, lang = 'en') {
  const entry = VARIETY_DESC[name]
  if (!entry) return null
  return entry[lang] || entry.en
}

// ---- 四大分类（按热门程度排序：产国数 → 总产量 → 名称）----

function sortByPopularity(a, b) {
  const infoA = VARIETY_MAP[a]
  const infoB = VARIETY_MAP[b]
  // 先按产国数量降序
  const countryDiff = infoB.countries.length - infoA.countries.length
  if (countryDiff !== 0) return countryDiff
  // 再按产国总产量降序
  const totalA = infoA.countries.reduce((s, c) => s + c.productionTonnes, 0)
  const totalB = infoB.countries.reduce((s, c) => s + c.productionTonnes, 0)
  if (totalB - totalA !== 0) return totalB - totalA
  // 最后按名称字母序
  return a.localeCompare(b)
}

export const VARIETY_CATEGORIES = [
  {
    id: 'arabica',
    varieties: Object.keys(VARIETY_MAP)
      .filter((name) => VARIETY_MAP[name].category === 'arabica')
      .sort(sortByPopularity),
  },
  {
    id: 'robusta',
    varieties: Object.keys(VARIETY_MAP)
      .filter((name) => VARIETY_MAP[name].category === 'robusta')
      .sort(sortByPopularity),
  },
  {
    id: 'liberica',
    varieties: Object.keys(VARIETY_MAP)
      .filter((name) => VARIETY_MAP[name].category === 'liberica')
      .sort(sortByPopularity),
  },
  {
    id: 'hybrids',
    varieties: Object.keys(VARIETY_MAP)
      .filter((name) => VARIETY_MAP[name].category === 'hybrids')
      .sort(sortByPopularity),
  },
]

/**
 * 获取某个豆种的详细信息
 * @param {string} name 豆种名称
 * @returns {{ category: string, countries: object[], regions: object[] } | null}
 */
export function getVarietyInfo(name) {
  return VARIETY_MAP[name] || null
}
