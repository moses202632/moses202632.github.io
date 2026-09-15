// 作品数据
const WORKS_DATA = [
  {
    id: 1,
    image: 'assets/works/work_04.jpg',
    category: 'illustration',
    categoryLabel: '插画手绘',
    title: '角色设定原画',
    subtitle: '二次元游戏角色三视图设计',
    desc: '原创游戏角色设定，包含正面、背面、侧面三视图以及表情设定、服饰细节拆解。融合街头朋克与二次元风格，色彩明快，造型辨识度高。'
  },
  {
    id: 2,
    image: 'assets/works/work_05.jpg',
    category: 'illustration',
    categoryLabel: '插画手绘',
    title: '角色造型设计',
    subtitle: '多角度角色立绘与配色方案',
    desc: '完整角色造型设计稿，涵盖多角度展示、色彩方案设定、配饰细节，为后续延展应用提供完整设计资产。'
  },
  {
    id: 3,
    image: 'assets/works/work_06.jpg',
    category: 'illustration',
    categoryLabel: '插画手绘',
    title: '角色表情设定',
    subtitle: '人物面部表情与姿态设计',
    desc: '角色表情系统设计，包含多种情绪状态下的面部变化与身体姿态，服务于动态表情与交互场景。'
  },
  {
    id: 4,
    image: 'assets/works/work_07.jpg',
    category: 'illustration',
    categoryLabel: '插画手绘',
    title: 'Q版角色设计',
    subtitle: '可爱风格Q版人物立绘',
    desc: 'Q版萌系角色设计，头身比夸张，色彩鲜艳活泼，适用于表情包、贴纸、周边衍生品等场景。'
  },
  {
    id: 5,
    image: 'assets/works/work_08.jpg',
    category: 'illustration',
    categoryLabel: '插画手绘',
    title: '机械风角色',
    subtitle: '赛博朋克风格角色设计',
    desc: '赛博朋克风格机械角色设定，融合生物与机械元素，科技感与未来感并存，细节层次丰富。'
  },
  {
    id: 6,
    image: 'assets/works/work_09.jpg',
    category: 'illustration',
    categoryLabel: '插画手绘',
    title: '奇幻角色原画',
    subtitle: '异世界风格角色完整设定',
    desc: '奇幻题材角色原画设计，从概念构思到最终成稿的完整流程，包含服饰、武器、配饰的一体化设计。'
  },
  {
    id: 7,
    image: 'assets/works/work_10.jpg',
    category: 'illustration',
    categoryLabel: '插画手绘',
    title: '少女角色设计',
    subtitle: '日系风格人物立绘',
    desc: '日系风格少女角色设计，线条流畅，配色柔和，注重人物气质表达与服饰细节刻画。'
  },
  {
    id: 8,
    image: 'assets/works/work_11.jpg',
    category: 'illustration',
    categoryLabel: '插画手绘',
    title: '角色三视图',
    subtitle: '标准建模参考三视图',
    desc: '标准角色建模用三视图，前后侧三面精准对位，为3D建模或动画制作提供准确参考依据。'
  },
  {
    id: 9,
    image: 'assets/works/work_12.jpg',
    category: 'illustration',
    categoryLabel: '插画手绘',
    title: '角色绘画过程',
    subtitle: '从线稿到上色完整流程',
    desc: '完整绘画过程展示：草稿勾勒、线稿细化、底色铺陈、阴影塑造、高光点缀，逐步呈现最终效果。'
  },
  {
    id: 10,
    image: 'assets/works/work_13.jpg',
    category: 'weapon',
    categoryLabel: '武器设定',
    title: '奇幻武器设定 I',
    subtitle: '原创武器概念设计',
    desc: '奇幻题材武器概念设计，融合古典元素与幻想风格，每一件武器都有独特的造型语言与背景设定。'
  },
  {
    id: 11,
    image: 'assets/works/work_14.jpg',
    category: 'weapon',
    categoryLabel: '武器设定',
    title: '奇幻武器设定 II',
    subtitle: '冷兵器与魔法道具设计',
    desc: '冷兵器与魔法道具系列设计，注重武器的功能逻辑与美学表达，材质表现丰富，细节刻画入微。'
  },
  {
    id: 12,
    image: 'assets/works/work_15.jpg',
    category: 'illustration',
    categoryLabel: '潮流插画',
    title: 'Alien系列插画',
    subtitle: '街头潮流涂鸦风格',
    desc: 'Fork Alien / Alien Knife / Muscle Hotdog / Toast Word 系列潮流涂鸦插画，色彩大胆，造型怪趣，充满街头文化气息。'
  },
  {
    id: 13,
    image: 'assets/works/work_16.jpg',
    category: 'illustration',
    categoryLabel: '潮流插画',
    title: '街头朋克主题',
    subtitle: 'ONLY THE BRAVE / WARMBLOOD',
    desc: '街头朋克风格系列插画，以叛逆、热血为主题，融合涂鸦艺术与潮流设计，视觉冲击力强。'
  },
  {
    id: 14,
    image: 'assets/works/work_17.jpg',
    category: 'illustration',
    categoryLabel: '潮流插画',
    title: '迷幻矢量插画',
    subtitle: 'NEVER COMPROMISE / POWER',
    desc: '迷幻风格矢量插画，运用几何图形与强烈色彩对比，营造超现实视觉体验，表达年轻态度。'
  },
  {
    id: 15,
    image: 'assets/works/work_18.jpg',
    category: 'realistic',
    categoryLabel: '超写实手绘',
    title: '黑豹',
    subtitle: '超写实手绘 · 2020.4.3',
    desc: '黑豹超写实手绘作品，精细刻画战甲纹理与金属光泽，每一处细节都力求逼真还原。Moses Lee 2020.4.3 创作。'
  },
  {
    id: 16,
    image: 'assets/works/work_19.jpg',
    category: 'realistic',
    categoryLabel: '超写实手绘',
    title: '青蛙冰块',
    subtitle: '超写实手绘 · 2019.4.11',
    desc: '青蛙与冰块超写实手绘，表现冰块的通透质感与青蛙皮肤纹理的对比，光影处理细腻。Lee 2019.4.11 创作。'
  },
  {
    id: 17,
    image: 'assets/works/work_20.jpg',
    category: 'realistic',
    categoryLabel: '超写实手绘',
    title: '超凡蜘蛛侠',
    subtitle: '超写实手绘 · 2019.11.24',
    desc: '超凡蜘蛛侠超写实手绘，战衣质感、光影层次、肌肉线条都经过精心刻画，栩栩如生。MosesLee 2019.11.24 创作。'
  },
  {
    id: 18,
    image: 'assets/works/work_21.jpg',
    category: 'realistic',
    categoryLabel: '超写实手绘',
    title: '蛇',
    subtitle: '超写实手绘 · 2019.11.13',
    desc: '蛇的超写实手绘作品，鳞片纹理细腻逼真，光影过渡自然，展现极致写实功力。Moses lee 2019.11.13 创作。'
  },
  {
    id: 19,
    image: 'assets/works/work_22.jpg',
    category: 'realistic',
    categoryLabel: '超写实手绘',
    title: '阿斯顿马丁Vanquish',
    subtitle: '超写实汽车手绘 · 2016.1.31',
    desc: '阿斯顿马丁Vanquish跑车超写实手绘，车身曲面、车漆反光、金属质感的表现堪称极致。超写实·2016.1.31 创作。'
  },
  {
    id: 20,
    image: 'assets/works/work_24.jpg',
    category: 'graphic',
    categoryLabel: '平面设计',
    title: '小视牛刀文化传媒',
    subtitle: '品牌视觉系统设计',
    desc: '小视牛刀文化传媒品牌视觉系统设计，涵盖品牌标志、字体规范、名片、海报及各类品牌物料，主打"有趣、有料、有点较真的 IP生态圈拓疆者"。'
  },
  {
    id: 21,
    image: 'assets/works/work_25.jpg',
    category: 'graphic',
    categoryLabel: '平面设计',
    title: '小视牛刀 - 物料设计',
    subtitle: '名片 / 海报 / 字体设计',
    desc: '品牌物料延展设计，包括名片、宣传海报、专属字体设计，风格统一且富有个性。'
  },
  {
    id: 22,
    image: 'assets/works/work_26.jpg',
    category: 'graphic',
    categoryLabel: '平面设计',
    title: '小视牛刀 - 中式风格',
    subtitle: '国潮风格视觉设计',
    desc: '中式风格视觉设计项目，融合传统文化元素与现代设计语言，打造独特的国潮品牌气质。'
  },
  {
    id: 23,
    image: 'assets/works/work_27.jpg',
    category: 'graphic',
    categoryLabel: '平面设计',
    title: '小视牛刀 - 创意视频',
    subtitle: '视频相关视觉设计',
    desc: '创意视频相关视觉设计，包括视频封面、字幕样式、转场动效设计等，丰富品牌视觉维度。'
  },
  {
    id: 24,
    image: 'assets/works/work_28.jpg',
    category: 'graphic',
    categoryLabel: '平面设计',
    title: '星期五街舞工作室',
    subtitle: '品牌视觉形象设计',
    desc: 'FRIDAY DANCE 星期五街舞工作室品牌视觉设计，LOGO 以首字母"FD"负空间设计，整体图形动感利落，呼应街舞行业属性。'
  },
  {
    id: 25,
    image: 'assets/works/work_29.jpg',
    category: 'graphic',
    categoryLabel: '平面设计',
    title: '星期五街舞 - 物料周边',
    subtitle: 'T恤 / 笔 / 卡片 / 胶带',
    desc: '品牌周边物料设计，包括T恤、笔记本、笔、卡片、胶带等，打造完整的品牌触达体系。'
  },
  {
    id: 26,
    image: 'assets/works/work_30.jpg',
    category: 'graphic',
    categoryLabel: '平面设计',
    title: '星期五街舞 - 赛事与空间',
    subtitle: '街舞赛事海报 / 工作室立牌',
    desc: '街舞赛事海报与工作室空间视觉设计，DANCING DNA 主题物料动感十足，立牌与空间效果图呈现完整品牌体验。'
  },
  {
    id: 27,
    image: 'assets/works/work_31.jpg',
    category: 'graphic',
    categoryLabel: '平面设计',
    title: '动能健身',
    subtitle: '品牌视觉形象设计',
    desc: 'ENERGY FITNESS 动能健身品牌视觉设计，品牌理念"重新定义健身"，LOGO 融合闪电/电流元素，传递力量与速度感。'
  },
  {
    id: 28,
    image: 'assets/works/work_32.jpg',
    category: 'graphic',
    categoryLabel: '平面设计',
    title: '动能健身 - 色值规范',
    subtitle: '品牌色彩系统设计',
    desc: '完整的品牌色彩规范系统，定义标准色值、辅助色彩及使用规则，确保品牌视觉一致性。'
  },
  {
    id: 29,
    image: 'assets/works/work_33.jpg',
    category: 'graphic',
    categoryLabel: '平面设计',
    title: '动能健身 - 应用物料',
    subtitle: '水杯 / 手提袋 / 门店应用',
    desc: '品牌物料应用设计，包括水杯、手提袋、门店门头与导视系统等，品牌落地呈现完整。'
  },
  {
    id: 30,
    image: 'assets/works/work_34.jpg',
    category: 'graphic',
    categoryLabel: '平面设计',
    title: '康视眼镜',
    subtitle: '品牌形象升级与重塑',
    desc: 'KANGSHI GLASSES 康视眼镜品牌形象升级，LOGO 以"K"字母+瞳孔造型，中文字标加入"E"呼应视力表，创意巧妙。'
  },
  {
    id: 31,
    image: 'assets/works/work_35.jpg',
    category: 'graphic',
    categoryLabel: '平面设计',
    title: '康视眼镜 - 标准规范',
    subtitle: '品牌标准色值与字体规范',
    desc: '品牌视觉基础规范，包括标准色值、字体系统、标志组合规范，为品牌应用奠定基础。'
  },
  {
    id: 32,
    image: 'assets/works/work_36.jpg',
    category: 'graphic',
    categoryLabel: '平面设计',
    title: '康视眼镜 - 物料应用',
    subtitle: '眼镜盒 / 门店招牌 / 手提袋',
    desc: '品牌物料应用展示，包括眼镜盒、门店招牌、手提袋等，品牌落地效果直观呈现。'
  },
  {
    id: 33,
    image: 'assets/works/work_37.jpg',
    category: 'graphic',
    categoryLabel: '平面设计',
    title: '康视眼镜 - 海报设计',
    subtitle: '"让眼亮 让心明"主题海报',
    desc: '品牌主题海报设计，"让眼亮 让心明"标语贯穿，视觉表达与品牌理念深度融合。'
  },
  {
    id: 34,
    image: 'assets/works/work_38.jpg',
    category: 'graphic',
    categoryLabel: '平面设计',
    title: '杉SPA CLUB',
    subtitle: '品牌视觉形象设计',
    desc: '杉SPA CLUB 品牌视觉设计，"杉"字LOGO融合自然元素，传递自然、宁静、舒适的品牌气质。'
  },
  {
    id: 35,
    image: 'assets/works/work_39.jpg',
    category: 'graphic',
    categoryLabel: '平面设计',
    title: '杉SPA - LOGO多配色',
    subtitle: '品牌标志色彩方案',
    desc: 'LOGO 多配色方案设计，适应不同场景与背景下的应用需求，确保品牌识别一致性。'
  },
  {
    id: 36,
    image: 'assets/works/work_40.jpg',
    category: 'graphic',
    categoryLabel: '平面设计',
    title: '杉SPA - 实景应用',
    subtitle: '空间与物料实景呈现',
    desc: '品牌在实际空间与物料上的应用呈现，展示品牌落地效果与氛围感。'
  },
  {
    id: 37,
    image: 'assets/works/work_41_kaci_brand.jpg',
    category: 'graphic',
    categoryLabel: '平面设计',
    title: 'KACI 代餐饼干 - 品牌方案',
    subtitle: '品牌形象升级与重塑 + 吉祥物IP',
    desc: 'KACI 代餐饼干品牌形象升级项目，包含品牌整体方案规划与吉祥物 IP 形象设计，以年轻活力的视觉语言传递健康代餐理念。'
  },
  {
    id: 38,
    image: 'assets/works/work_42_kaci_ip.jpg',
    category: 'graphic',
    categoryLabel: '平面设计',
    title: 'KACI 代餐饼干 - IP与包装',
    subtitle: '吉祥物IP应用 + 产品包装设计',
    desc: '吉祥物 IP 在产品包装上的延展应用，将 IP 形象与包装设计深度融合，强化品牌辨识度与亲和力。'
  },
  {
    id: 39,
    image: 'assets/works/work_43_kaci_package.jpg',
    category: 'graphic',
    categoryLabel: '平面设计',
    title: 'KACI 代餐饼干 - 包装设计',
    subtitle: '两款产品包装视觉设计',
    desc: '两款不同口味的代餐饼干包装设计，在统一品牌视觉体系下通过色彩与图形语言区分产品线，兼具货架吸引力与信息传达。'
  },
  {
    id: 40,
    image: 'assets/works/work_44_kaci_goods.jpg',
    category: 'graphic',
    categoryLabel: '平面设计',
    title: 'KACI 代餐饼干 - 周边物料',
    subtitle: '名片 / 手提袋 / 餐具等周边设计',
    desc: '品牌周边物料延展设计，包括名片、手提袋、餐具等多类触点物料，打造完整的品牌视觉体验。'
  },
  {
    id: 41,
    image: 'assets/works/work_45_view_logo.jpg',
    category: 'graphic',
    categoryLabel: '平面设计',
    title: '小视牛刀影像工作室 - LOGO设计',
    subtitle: 'VIEW STUDIO 品牌标志与设计思路',
    desc: '小视牛刀影像工作室 VIEW STUDIO 品牌 LOGO 设计，包含标志组合规范与设计思路拆解，体现影像行业的创意与专业属性。'
  },
  {
    id: 42,
    image: 'assets/works/work_46_view_vi.jpg',
    category: 'graphic',
    categoryLabel: '平面设计',
    title: '小视牛刀影像工作室 - VI规范',
    subtitle: 'VI视觉规范与图形衍生设计',
    desc: '完整的 VI 视觉规范系统，包括标准色、字体规范及辅助图形衍生设计，为品牌应用提供清晰一致的指导。'
  },
  {
    id: 43,
    image: 'assets/works/work_47_view_apply.jpg',
    category: 'graphic',
    categoryLabel: '平面设计',
    title: '小视牛刀影像工作室 - 落地应用',
    subtitle: '品牌物料落地应用呈现',
    desc: '品牌视觉在各类物料上的落地应用展示，呈现品牌从设计到实际使用的完整效果。'
  },
  {
    id: 44,
    image: 'assets/works/work_48_lucky_brand.jpg',
    category: 'graphic',
    categoryLabel: '平面设计',
    title: '吉干果汐 - 品牌方案',
    subtitle: 'LUCKY FRUIT 品牌视觉设计',
    desc: '吉干果汐 LUCKY FRUIT 品牌视觉整体方案，以新鲜果饮为核心，打造年轻、活力、有温度的品牌形象。'
  },
  {
    id: 45,
    image: 'assets/works/work_49_lucky_logo.jpg',
    category: 'graphic',
    categoryLabel: '平面设计',
    title: '吉干果汐 - LOGO与字体',
    subtitle: '多版LOGO与数字创意字体设计',
    desc: '多版本 LOGO 设计方案与数字创意字体设计，丰富品牌视觉表达层次，为不同场景提供灵活的应用选择。'
  },
  {
    id: 46,
    image: 'assets/works/work_50_lucky_apply.jpg',
    category: 'graphic',
    categoryLabel: '平面设计',
    title: '吉干果汐 - 画册与展架',
    subtitle: '画册折页 / 展架 / 场景应用',
    desc: '品牌物料场景应用设计，包括画册折页、展架及线下空间场景应用，全方位呈现品牌落地效果。'
  },
  {
    id: 47,
    image: 'assets/works/work_51_lucky_cup.jpg',
    category: 'graphic',
    categoryLabel: '平面设计',
    title: '吉干果汐 - 饮品杯视觉',
    subtitle: '产品杯型视觉设计',
    desc: '饮品杯视觉设计，将品牌视觉语言融入产品容器，打造手持品牌名片，提升消费者体验与传播性。'
  },
  {
    id: 48,
    image: 'assets/works/work_52_western_logo.jpg',
    category: 'graphic',
    categoryLabel: '平面设计',
    title: '马掌西部小镇 - 品牌方案',
    subtitle: 'SUPER WESTERN TOWN 品牌与LOGO徽章',
    desc: '马掌西部小镇 SUPER WESTERN TOWN 文旅全案品牌设计，包含品牌整体方案与复古风格的 LOGO 徽章设计，还原西部风情。'
  },
  {
    id: 49,
    image: 'assets/works/work_53_western_poster.jpg',
    category: 'graphic',
    categoryLabel: '平面设计',
    title: '马掌西部小镇 - 海报与包装',
    subtitle: '主视觉海报 + 纸杯纸袋设计',
    desc: '品牌主视觉海报与餐饮包装设计，包括纸杯、纸袋等，以复古西部风格营造沉浸式的文旅体验氛围。'
  },
  {
    id: 50,
    image: 'assets/works/work_54_western_goods.jpg',
    category: 'graphic',
    categoryLabel: '平面设计',
    title: '马掌西部小镇 - 周边物料',
    subtitle: '帽子 / 围裙 / 充值卡设计',
    desc: '品牌周边文创物料设计，包括牛仔帽、围裙、充值卡等，丰富游客的品牌触点与纪念体验。'
  },
  {
    id: 51,
    image: 'assets/works/work_55_western_sign.jpg',
    category: 'graphic',
    categoryLabel: '平面设计',
    title: '马掌西部小镇 - 复古路牌',
    subtitle: '复古路牌式标识设计',
    desc: '复古路牌式标识系统设计，以西部小镇特有的路牌语言打造空间导视，增强文旅项目的沉浸式体验。'
  },
  {
    id: 52,
    image: 'assets/works/work_56_mandao_magnet.jpg',
    category: 'graphic',
    categoryLabel: '平面设计',
    title: '慢捣公园 - 文创冰箱贴',
    subtitle: '慢捣公元 MANDAO 六款冰箱贴徽章',
    desc: '慢捣公园（慢捣公元 MANDAO 巡点集团）文创冰箱贴设计，共六款徽章风格冰箱贴，造型生动有趣，兼具收藏与实用价值。'
  }
];

const SKILLS_DATA = [
  { name: '平面设计', desc: '品牌VI / 海报 / 书籍', icon: 'graphic' },
  { name: '插画手绘', desc: '角色 / 场景 / 概念设计', icon: 'illustration' },
  { name: '超写实手绘', desc: '肖像 / 汽车 / 动物', icon: 'realistic' },
  { name: '品牌VI设计', desc: '品牌全案 / 视觉系统', icon: 'brand' },
  { name: 'LOGO设计', desc: '标志 / 字体 / 图形', icon: 'logo' },
  { name: '字体设计', desc: '中文 / 英文 / 数字', icon: 'font' },
  { name: '角色原画设计', desc: '三视图 / 表情 / 服饰', icon: 'character' },
  { name: '游戏动漫美术', desc: '道具 / 场景 / UI', icon: 'game' },
  { name: '文创周边设计', desc: '衍生品 / 物料 / 包装', icon: 'product' }
];

const EXPERIENCE_DATA = [
  {
    year: '2022 - 至今',
    company: '成都沃沐科技有限公司',
    role: '线上/线下手绘插画 / 平面相关设计'
  },
  {
    year: '2021 - 2022',
    company: '重庆富猫法律咨询责任有限公司',
    role: '线上/线下平面相关品宣设计'
  },
  {
    year: '2019 - 2021',
    company: '重庆小视牛刀文化传媒有限公司',
    role: '线上/线下平面相关品宣设计'
  }
];

Object.assign(window, { WORKS_DATA, SKILLS_DATA, EXPERIENCE_DATA });
