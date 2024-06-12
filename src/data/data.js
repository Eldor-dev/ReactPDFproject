// Main Page data
export const mainPageData = [
  { title: "기질 유형 :", text: "정의로운 - HLL" },
  { title: "성격 유형 :", text: "혁신가 - LLM" },
  { title: "이 름 :", text: "전성윤" },
  { title: "성 별 :", text: "남성" },
  { title: "생년월일 :", text: "1995.01.09" },
  { title: "국 적 :", text: "대한민국" },
];

// First Page data
export const firstPageTemperamentData = [
  { title: "모험성", textData: [{ text: "탐험성" }, { text: "충동성" }, { text: "자제력 부족" }, { text: "비규범성" }] },
  { title: "조심성", textData: [{ text: "불안감" }, { text: "안전지향성" }, { text: "낯가림" }, { text: "심리적 피로" }] },
  { title: "상호의존성", textData: [{ text: "감정적 민감성" }, { text: "정서적 교감" }, { text: "애착" }, { text: "관계 의존성" }] },
];
export const firstPagePersonalityData = [
  { title: "독립성", textData: [{ text: "주체성" }, { text: "목표지향성" }, { text: "자기확신" }, { text: "자기통제" }] },
  { title: "관계성", textData: [{ text: "포용력" }, { text: "이해력" }, { text: "연대감" }, { text: "관용성" }, { text: "윤리성" }] },
  { title: "초현실성", textData: [{ text: "초현실적 몰입" }, { text: "초자연성 자각" }] },
];

// First Page Part Two data
export const firstPagePartTwoTemperamentData = [
  { title: "모험성", text: "“새롭고 낯선 일에 마음이 끌리고 도전하는 성향”", textOfLow: "변화나 새로움보다 익숙함 추구, 높은 절제력과 통제 능력", textOfHigh: "타고난 호기심, 규칙이나 절제보다 나의 순간적 판단과 즐거움 " },
  { title: "조심성", text: "“신중하고 섬세하면서 조심스러운 성향”", textOfLow: "낮은 불안과 걱정, 과감하고 대범한 행동, 높은 심리적 에너지", textOfHigh: "낯선 사람이나 상황에 대한 불안과 경계, 꼼꼼하고 차분함" },
  { title: "상호의존성", text: "“다른 사람과의 연결을 중시하고 의지하는 성향”", textOfLow: "독립적이고 차가움, 친밀한 관계 에서도 자신만의 거리 유지", textOfHigh: "친밀하고 따듯한 관계 추구, 타인의 감정에 민감하고 의존적" },
];
export const firstPagePartTwoPersonalityData = [
  { title: "모험성", text: "“새롭고 낯선 일에 마음이 끌리고 도전하는 성향”", textOfLow: "변화나 새로움보다 익숙함 추구, 높은 절제력과 통제 능력", textOfHigh: "타고난 호기심, 규칙이나 절제보다 나의 순간적 판단과 즐거움 " },
  { title: "조심성", text: "“신중하고 섬세하면서 조심스러운 성향”", textOfLow: "낮은 불안과 걱정, 과감하고 대범한 행동, 높은 심리적 에너지", textOfHigh: "낯선 사람이나 상황에 대한 불안과 경계, 꼼꼼하고 차분함" },
  { title: "상호의존성", text: "“다른 사람과의 연결을 중시하고 의지하는 성향”", textOfLow: "독립적이고 차가움, 친밀한 관계 에서도 자신만의 거리 유지", textOfHigh: "친밀하고 따듯한 관계 추구, 타인의 감정에 민감하고 의존적" },
];

// Second Page data

export const secondPageData = {
  temperamentData: {
    type: "정의로운 - HLL",
    description: "“신중한 인생의 나침반: 세심하고 규율적인 당신”",
    scale: [
      { title: "모험성", level: "H", percentage: "70" },
      { title: "조심성", level: "L", percentage: "20" },
      { title: "상호의존성", level: "L", percentage: "28" },
    ],
  },
  personalityData: {
    type: "혁신가 - LLM",
    description: "“독특한 시각: 세상을 다르게 보는 당신”",
    scale: [
      { title: "독립성", level: "L", percentage: "9" },
      { title: "관계성", level: "L", percentage: "30" },
      { title: "관계성", level: "M", percentage: "50" },
    ],
  },
};

// Third Page data

export const thirdPageData = {
  temperamentData: [
    {
      title: "모험성",
      content: [
        { title: "탐험성", percentage: "70" },
        { title: "충동성", percentage: "100" },
        { title: "자제력 부족", percentage: "6" },
        { title: "비규범성", percentage: "97" },
      ],
    },
    {
      title: "조심성",
      content: [
        { title: "불안감", percentage: "67" },
        { title: "안전지향성", percentage: "45" },
        { title: "낯가림", percentage: "23" },
        { title: "심리적 피로", percentage: "78" },
      ],
    },
    {
      title: "상호의존성",
      content: [
        { title: "감정적 민감성", percentage: "48" },
        { title: "정서적 교감", percentage: "39" },
        { title: "애착", percentage: "45" },
        { title: "관계의존성", percentage: "20" },
      ],
    },
  ],
  personalityData: [
    {
      title: "상호의존성",
      content: [
        { title: "주체성", percentage: "78" },
        { title: "목표지향성", percentage: "56" },
        { title: "자기확신", percentage: "48" },
        { title: "자기통제", percentage: "73" },
      ],
    },
    {
      title: "관계성",
      content: [
        { title: "포용력", percentage: "57" },
        { title: "이해력", percentage: "89" },
        { title: "연대감", percentage: "57" },
        { title: "관용성", percentage: "11" },
        { title: "윤리성", percentage: "89" },
      ],
    },
    {
      title: "초현실성",
      content: [
        { title: "초현실적 몰입", percentage: "9" },
        { title: "초자연성 자각", percentage: "29" },
      ],
    },
  ],
};

// Forth Page Data
export const fourthPageData = {
  temperamentData: {
    titleText: "세상은 나만의 무대, 나는 나만의 주인공.",
    mainText: {
      textOne:
        "전성윤님은 자유분방하고 도전을 좋아하는 대담한 성격입니다. 하고 싶은 것은 누가 뭐라고 하던 다 해야 직성이 풀리는 편이에요. 새롭고 낯선 것을 두려워하지 않고 우선 도전하는 것을 좋아해요. 다른 사람의 시선이나 기존의 관습을 신경 쓰지 않고 원하는 것을 이루어 내고자 합니다. 주변 사람들에게도 자신만의 길을 가는, 대담한 모습으로 비춰질 거에요. 내가 원하는 바를 향해 끊임없이 나아가고, 주변의 인정을 받지 못하더라도 혼자 그 길을 걷는 것을 두려워하지 않습니다.",
      textTwo:
        "꼼꼼히 계획하기 보다는, 나의 직감을 믿고 즉흥적이고 유연하게 대처해요. 그러나 이러한 성향으로 인해 때로는 위험을 과소평가하거나 실수를 범할 수도 있습니다. 또한, 예측 불가능하면서 주도적인 모습이 매력적이면서도, 이러한 과정에서 가까운 사람들은 때로 서운함을 느낄 수 있어요.  상대를 배려하기 보다는 자신의 목표를 먼저 생각하는, 차가운 사람으로 느껴질 수 있기 때문이에요.",
    },
    footerText: "자기 마음 먹은 대로 모든 일을 하는 사람’이지만, 이 말이 칭찬이 될지 비판이 될지는 나의 노력에 달렸습니다.",
  },
  personalityData: {
    titleText: "내 자신을 넘어서려는 당신.",
    mainText: {
      textOne:
        "전성윤님은 자신의 타고난 기질을 극복하고 더 좋은 사람이 되기 위해 끊임없이 고민하는 모습이네요. 더 나은 내가 되고자 하는 마음이 크면서도, 그 방법을 정확히 알지 못하는 것 같아 답답한 마음을 느끼는 중일 수 있겠어요. 답답함이 지속되면서 스스로에 대한 믿음이나 자신감도 저하되어 있을 것 같아 걱정이 됩니다. 현재 상황을 바꿀 힘이 나에게 없다고 느끼거나, 스스로가 진짜 부족하다고 믿지 않도록 늘 자신을 조금 더 다독여주세요",
      textTwo:
        "정신적이거나 추상적인 것에 관심을 가지려 하며, 이상적인 모습을 꿈꾸는 경향도 있어요.하지만 스스로나 주변을 현실적이고 객관적으로 바라보는 노력은 상대적으로 적을 수 있습니다.막연한 이상과 불분명한 현실 사이에서는 내가 원하는 바를 명확히 파악하고, 이를 위해 노력하는 것이 어려울 수밖에 없습니다.지금은 다소 흐릿하더라도, 꿈꾸는 모습이 있다는 것은 분명 성장의 첫 단계입니다.",
    },
    footerText: "분명 조금씩 나아질 나의 모습을 구체적으로 그리면서, 좀 더 자신을 믿어 주세요.",
  },
};

// Fifth Page Data

export const fifthPageData = {
  temperamentData: {
    listOne: [
      { title: "모험적인", text: "새로운 것에 대한 두려움이 없으며, 도전을 즐깁니다." },
      { title: "마이웨이", text: "자신만의 길을 가는 데 두려움이 없고, 다른 사람의 눈치를 보지 않습니다." },
      { title: "자!기!주!장!", text: "자신의 생각과 의견이 늘 명확하며, 이에 따라 소신 있게 행동합니다." },
      { title: "적극적인", text: "어려운 상황에서도 나의 목표를 위해 노력하는 강한 의지를 가지고 있습니다." },
    ],
    listTwo: [
      { title: "무계획이 계획", text: "상황을 충분히 고려하거나 고민하지 않고 성급히 행동해 실수할 수 있습니다." },
      { title: "독단적인", text: "내가 옳다고 생각하는 것을 표현하는 방법이 때로는 공격적으로 비춰질 수 있습니다." },
      { title: "충동적인", text: "순간의 느낌에 휩쓸려 장기적인 계획을 포기하는 결정을 내릴 수 있어요." },
      { title: "냉소적인", text: "다른 사람과 세상에 대한 태도가 기본적으로 차가워서, 냉소적인 모습으로 보일 수 있어요." },
    ],
  },
  personalityData: {
    listOne: [
      { title: "겸손한", text: "늘 더 나은 변화를 추구하는 겸손한 태도를 가지고 있어요." },
      { title: "열린 마음", text: "현실을 뛰어넘는 것들에 대한 열린 마음을 바탕으로, 다양한 경험에 관심이 있어요." },
      { title: "배려심", text: "나의 사람들에게는 깊은 배려와 이해를 보이는 속 깊은 모습입니다." },
    ],
    listTwo: [
      { title: "깊은 고민", text: "고민이 깊어 사소한 일에도 불필요한 스트레스를 받을 수 있어요." },
      { title: "스스로에 대한 의심", text: "더 나은 모습이 되고 싶은 마음이 스스로에 대한 불신이나 의심으로 이어질 수 있습니다." },
      { title: "주도성 부족", text: "인생에서 원하는 것을 주도적으로 설정하고 이루어내기 위한 에너지가 부족할 수 있어요." },
    ],
  },
};

// Sixth Page Data
export const sixthPageData = {
  temperamentData: {
    titleText: "연애도 내마음대로.",
    list: [
      { text: "전성윤님은 연인 관계에서도 자유롭고 모험적인 태도를 보입니다." },
      { text: "사회적 기준이나 주변의 인정에 관련 없이 자신의 기준과 취향에 맞는 상대를 선호해요." },
      { text: "연애를 하는 동안에도 개인적인 공간과 자유를 중요시하며, 서로의 거리를 존중하는 관계를 좋아해요." },
      { text: "대담하고 카리스마 있는 모습은 연애를 흥미롭게 만들기도 하지만, 때때로 전성윤님의 즉흥적이고 불안정한 경향성이 갈등의 원인이 될 수도 있어요. " },
      { text: "또한, 특유의 냉소적이고 무관심한 태도로 인해 상대가 서운함을 느끼기도 쉽습니다." },
      { text: "수준의 감정적 교류와 세심한 배려를 위해, 많은 고민과 노력이 필요할 수 있습니다. " },
    ],
    footerText: "연애에서만은, 나의 마음만큼 다른 사람의 마음도 중요하다는 것을 기억해주세요.",
  },
  personalityData: {
    titleText: "이해와 수용을 바탕으로 한 성장.",
    list: [
      { text: "전성윤님은 함께 성장할 수 있는 관계를 선호해요. " },
      { text: "나에게 부족한 부분을 상대를 통해 채우기를 기대하며, 지지와 격려를 통해 힘을 얻습니다." },
      { text: "하지만 스스로에 대한 확신이 부족하고, 주도적이지 않은 성향으로 인해 관계에서 불확실성이 느껴질 수 있어요. " },
      { text: "특히 상대가 자신이 단점이라고 생각하는 부분을 알게 되는 것을 두려워해서, 진실된 모습을 보여주기까지 많은 용기와 고민이 필요해요. " },
      { text: "그래서 나보다 섬세함은 부족하더라도, 나를 충분히 믿어줄 수 있는, 안정적이고 든든한 상대와 함께하는 것이 가장 이상적입니다." },
    ],
    footerText: "서로의 모습을 있는 그대로 받아들이고, 부족한 것을 건설적으로 채워나갈 수 있는 경험이 큰 도움이 될 거에요.",
  },
};

// export const secondPageData = [
//   { title: "모험적인", text: "새로운 것에 대한 두려움이 없으며, 도전을 즐깁니다." },
//   { title: "마이웨이", text: "자신만의 길을 가는 데 자신감을 가지고 있으며, 타인의 영향력에서 자유롭습니다." },
//   { title: "자!기!주!장!", text: "자신의 생각과 의견을 명확하게 표현하며, 소신 있게 행동합니다." },
//   { title: "적극적인", text: "어려운 상황에서도 앞으로 나아가려는 강한 의지를 가지고 있습니다." },
// ];

// export const thirdPageData = [
//   { title: "연인 관계에서도 자유롭고 모험적인 태도를 보입니다." },
//   { title: "사회적 기준이나 주변의 인정에 관련 없이 자신의 기준과 취향에 맞는 상대를 선호해요." },
//   { title: "연애를 하는 동안에도 개인적인 공간과 자유를 중요시하며, 서로의 거리를 존중하는 관계를 좋아해요." },
//   { title: "대담하고 카리스마 있는 모습은 연애를 흥미롭게 만들기도 해요." },
//   { title: "때때로 즉흥적이고 불안정한 경향성이 갈등의 원인이 될 수도 있어요." },
//   { title: "특유의 냉소적이고 무관심한 태도로 인해 상대가 서운함을 느끼기도 쉽습니다." },
// ];
// export const forthPageData = [
//   { title: "친구 관계에서도 독립성과 자유로움을 추구합니다." },
//   { title: "친구들에게 새로움과 재미를 더해줄 것이고, 대담함과 변화무쌍함이 친구들에게 영감을 주기도 해요." },
//   { title: "친구들 사이에서 ‘벽이 높은' 친구로 평가 받을 가능성도 높아요." },
//   { title: "좁혀질 듯 좁혀지지 않는 심리적 거리로 인해 주변 사람들에게 의도치 않은 서움함을 느끼게 할 수 있습니다." },
//   { title: "갈등이 생기거나 사회적으로 불편한 상황에 빠질 때에는, 이를 해결하려 적극적으로 노력하기 보다는 더 많은 거리를 두려 할 거에요." },
// ];

// export const fifthPageData = [
//   { title: "창업 및 자영업", text: "자신만의 비즈니스를 시작하고 운영하는 데 필요한 독립성과 모험심을 갖추고 있습니다." },
//   { title: "탐험 및 모험 관련 직업", text: "탐험가, 모험 여행 가이드, 와일드라이프 포토그래퍼 등 새로운 경험을 추구하는 직업에서 빛을 발합니다." },
//   { title: "창의적인 분야", text: "광고 크리에이티브 디렉터, 게임 디자이너, 예술가 등 창의력을 발휘하고 새로운 것을 만들어내는 직업에 적합합니다." },
//   { title: "위기 관리 및 대응", text: "위기관리 전문가, 소방관, 경찰 등 긴박한 상황에서 빠른 판단과 행동이 요구되는 직업에서 강점을 보입니다." },
// ];

// export const sliderFirstData = [
//   { percentage: 1, label: "H" },
//   { percentage: 5, label: "M" },
//   { percentage: 8, label: "L" },
// ];
// export const sliderSecondData = [
//   { percentage: 15, label: "L" },
//   { percentage: 19, label: "L" },
//   { percentage: 26, label: "L" },
// ];

export const pageNumber = [
  { number: "01", text: "테스트 알아보기" },
  { number: "02", text: "기질과 성격" },
  { number: "03", text: "지표별 점수" },
  { number: "04", text: "유형 요약" },
  { number: "05", text: "강점과 약점" },
  { number: "06", text: "연인 관계" },
  { number: "07", text: "친구 관계" },
  { number: "08", text: "커리어" },
  { number: "09", text: "나를 위한 조언" },
];
