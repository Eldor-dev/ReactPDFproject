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

// export const secondPageData = [
//   { title: "모험적인", text: "새로운 것에 대한 두려움이 없으며, 도전을 즐깁니다." },
//   { title: "마이웨이", text: "자신만의 길을 가는 데 자신감을 가지고 있으며, 타인의 영향력에서 자유롭습니다." },
//   { title: "자!기!주!장!", text: "자신의 생각과 의견을 명확하게 표현하며, 소신 있게 행동합니다." },
//   { title: "적극적인", text: "어려운 상황에서도 앞으로 나아가려는 강한 의지를 가지고 있습니다." },
// ];

export const thirdPageData = [
  { title: "연인 관계에서도 자유롭고 모험적인 태도를 보입니다." },
  { title: "사회적 기준이나 주변의 인정에 관련 없이 자신의 기준과 취향에 맞는 상대를 선호해요." },
  { title: "연애를 하는 동안에도 개인적인 공간과 자유를 중요시하며, 서로의 거리를 존중하는 관계를 좋아해요." },
  { title: "대담하고 카리스마 있는 모습은 연애를 흥미롭게 만들기도 해요." },
  { title: "때때로 즉흥적이고 불안정한 경향성이 갈등의 원인이 될 수도 있어요." },
  { title: "특유의 냉소적이고 무관심한 태도로 인해 상대가 서운함을 느끼기도 쉽습니다." },
];
export const forthPageData = [
  { title: "친구 관계에서도 독립성과 자유로움을 추구합니다." },
  { title: "친구들에게 새로움과 재미를 더해줄 것이고, 대담함과 변화무쌍함이 친구들에게 영감을 주기도 해요." },
  { title: "친구들 사이에서 ‘벽이 높은' 친구로 평가 받을 가능성도 높아요." },
  { title: "좁혀질 듯 좁혀지지 않는 심리적 거리로 인해 주변 사람들에게 의도치 않은 서움함을 느끼게 할 수 있습니다." },
  { title: "갈등이 생기거나 사회적으로 불편한 상황에 빠질 때에는, 이를 해결하려 적극적으로 노력하기 보다는 더 많은 거리를 두려 할 거에요." },
];

export const fifthPageData = [
  { title: "창업 및 자영업", text: "자신만의 비즈니스를 시작하고 운영하는 데 필요한 독립성과 모험심을 갖추고 있습니다." },
  { title: "탐험 및 모험 관련 직업", text: "탐험가, 모험 여행 가이드, 와일드라이프 포토그래퍼 등 새로운 경험을 추구하는 직업에서 빛을 발합니다." },
  { title: "창의적인 분야", text: "광고 크리에이티브 디렉터, 게임 디자이너, 예술가 등 창의력을 발휘하고 새로운 것을 만들어내는 직업에 적합합니다." },
  { title: "위기 관리 및 대응", text: "위기관리 전문가, 소방관, 경찰 등 긴박한 상황에서 빠른 판단과 행동이 요구되는 직업에서 강점을 보입니다." },
];

export const sliderFirstData = [
  { percentage: 1, label: "H" },
  { percentage: 5, label: "M" },
  { percentage: 8, label: "L" },
];
export const sliderSecondData = [
  { percentage: 15, label: "L" },
  { percentage: 19, label: "L" },
  { percentage: 26, label: "L" },
];

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
