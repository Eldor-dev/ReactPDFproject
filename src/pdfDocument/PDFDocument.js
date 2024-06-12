import { React } from "react";
import { Document, Page, Text, View, Image, Font, Tspan } from "@react-pdf/renderer";

import MainPage from "../pages/mainPage/MainPage.js";
import FirstPage from "../pages/firstPage/FirstPage.js";
import FirstPageSecondPart from "../pages/firstPageSecondPart/FirstPageSecondPart.js";
import SecondPage from "../pages/secondPage/SecondPage.js";
import ThirdPage from "../pages/thirdPage/ThirdPage.js";
import FourthPage from "../pages/fourthPage/FourthPage.js";
import FifthPage from "../pages/fifthPage/FifthPage.js";
import SixthPage from "../pages/sixthPage/SixthPag.js";
import SeventhPage from "../pages/seventhPage/SeventhPage.js";
import EighthPagePartOne from "../pages/eighthPagePartOne/EighthPagePartOne.js";
import EighthPagePartTwo from "../pages/eighthPagePartTwo/EighthPagePartTwo.js";
import NinthPage from "../pages/ninthPage/NinthPage.js";
// import { ListItem, OrderedText, Slider, VerticalText } from "../components/components.js";
// import { secondPageData, thirdPageData, forthPageData, fifthPageData, pageNumber } from "../data/data.js";
// import { styles, styleHeader, styleLayout, styleList, styleText, styleOrderedText, styleBox, stylePageNumber } from "./style.js";

// import pdfFrameWhite from "../static/images/pdf_frame_white.png";
// import pdfEmoji1 from "../static/images/pdf_emoji1.png";
// import pdfEmoji2 from "../static/images/pdf_emoji2.png";
// import pdfEmoji3 from "../static/images/pdf_emoji3.png";
// import pdfEmoji4 from "../static/images/pdf_emoji4.png";
// import pdfEmoji5 from "../static/images/pdf_emoji5.png";
// import pdfEmoji6 from "../static/images/pdf_emoji6.png";
// import pdfEmoji7 from "../static/images/pdf_emoji7.png";
// import pdfEmoji8 from "../static/images/pdf_emoji8.png";

// import font from "https://cdnjs.cloudflare.com/ajax/libs/pretendard.otf";
// import font from "../static/fonts/Pretendard-Regular.otf";

// Register Font
// Font.register({ family: "pretendard", src: "https://github.com/webfontworld/pretendard/blob/main/Pretendard-Black.otf" });

// Font.register({ family: "Noto Sans KR", src: "https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.otf" });
// Font.register({ family: "Noto Sans KR", src: "https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Medium.otf" });
// Font.register({ family: "Noto Sans KR", src: "https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.otf" });
// Font.register({ family: "Noto Sans KR", src: "https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Black.otf" });
// Font.register({ family: "Noto Sans KR", src: "https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Thin.otf" });
// Font.register({ family: "Noto Sans KR", src: "https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Light.otf" });

Font.register({
  family: "Pretendard-Regular",
  // family: "pretendard",
  fonts: [
    // { src: font },
    // { src: "/stc/static/fonts/Pretendard-Regular.otf" },

    { src: "https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff", format: "woff" },
    { src: "https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Thin.woff", format: "woff" },
    { src: "https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Medium.woff", format: "woff" },
    { src: "https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Black.woff", format: "woff" },
    { src: "https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff", format: "woff" },
    { src: "https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Light.woff", format: "woff" },

    // { src: "https://github.com/webfontworld/pretendard/blob/main/Pretendard-Thin.otf" },
    // { src: "https://github.com/webfontworld/pretendard/blob/main/Pretendard-Medium.otf" },
    // { src: "https://github.com/webfontworld/pretendard/blob/main/Pretendard-Black.otf" },
    // { src: "https://github.com/webfontworld/pretendard/blob/main/Pretendard-Regular.otf" },
    // { src: "https://github.com/webfontworld/pretendard/blob/main/Pretendard-Bold.otf" },
    // { src: "https://github.com/webfontworld/pretendard/blob/main/Pretendard-Light.otf" },
  ],
});

Font.register({
  family: "Noto Sans KR",
  fonts: [
    { src: "https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Black.otf", fontWeight: 900 },
    // { src: "https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-ExtraBold.otf", fontWeight: 800 },
    { src: "https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.otf", fontWeight: 700 },
    // { src: "https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-SemiBold.otf", fontWeight: 600 },
    { src: "https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Medium.otf", fontWeight: 500 },
    { src: "https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.otf", fontWeight: 400 },
    { src: "https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Light.otf", fontWeight: 300 },
    { src: "https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Thin.otf", fontWeight: 100 },
  ],
});

// Create Document Component
export const PDFDocument = () => (
  <Document>
    <MainPage />
    <FirstPage />
    <FirstPageSecondPart />
    <SecondPage />
    <ThirdPage />
    <FourthPage />
    <FifthPage />
    <SixthPage />
    <SeventhPage />
    <EighthPagePartOne />
    <EighthPagePartTwo />
    <NinthPage />
    {/* <Page style={styles.page}>
      <View style={styles.greenBackground}>
        <Image style={styles.greenBackgroundImage} src={pdfFrame} />
      </View>
      <View style={styles.mainPageLayout}>
        <Text style={styles.mainPageHeaderText}>안녕하세요.</Text>
        <Text style={[styles.mainPageGradientText, { backgroundClip: "linear-gradient(#f67a36,#ed008c)" }]}>
          겁이 없는 수련자<Tspan style={{ color: "1D1D1F" }}>{`  전성윤.`}</Tspan>
        </Text>
        <Text style={styles.mainPageText}>당신의 기질과 성격에 대한 STC 테스트 해석 결과입니다.</Text>
        <View style={styles.mainPageContent}>
          <View style={styles.mainPageContent_boxOne}>
            <Text style={{ fontSize: "6px", color: "#1D1D1F" }}>홍길동님은</Text>
            <Text style={{ fontSize: "12px", color: "#00CBA1" }}>겁이 없는 수련자</Text>
            <Image style={{ width: "100%" }} src={pdfFrame1} />
            <Text style={styles.mainPageContent_boxOne_atSign}>{`Copyright \u0040 STC Test.`}</Text>
          </View>
          <View style={styles.mainPageContent_boxTwo}>
            <View style={styles.mainPageContent_boxTwo_content}>
              <Image src={pdfEmoji9} style={{ width: "11px", height: "12px" }} />
              <Text>불도저와 폭주기관차 사이</Text>
              <View style={styles.sliderTitleContainer}>
                <Text style={styles.sliderTitle}>
                  겁이 없는<Tspan style={{ color: "1D1D1F" }}>{` 기질`}</Tspan>
                </Text>
              </View>
              <View style={styles.sliderContainer}>
                {sliderFirstData.map((item) => (
                  <Slider percentage={item.percentage} label={item.label}></Slider>
                ))}
              </View>
              <Text style={styles.sliderContent_TestDate}>테스트 일시: 2024.03.20</Text>
            </View>
            <View style={styles.mainPageContent_boxTwo_content}>
              <Image src={pdfEmoji10} style={{ width: "11px", height: "12px" }} />
              <Text>길을 잃은 항해사</Text>
              <View style={styles.sliderTitleContainer}>
                <Text style={styles.sliderTitle}>
                  수련자<Tspan style={{ color: "1D1D1F" }}>{` 성격`}</Tspan>
                </Text>
              </View>
              <View style={styles.sliderContainer}>
                {sliderSecondData.map((item) => (
                  <Slider percentage={item.percentage} label={item.label}></Slider>
                ))}
              </View>
            </View>
          </View>
        </View>
      </View>
    </Page> */}

    {/* <Page style={styles.page} wrap={false}>
      <View style={styleHeader.header}>
        <Image style={styleHeader.image} src={pdfFrameWhite} />
      </View>
      <View style={stylePageNumber.container}>
        {pageNumber.map((item, index) => (
          <VerticalText text={item.text} number={item.number} page={1} index={index}></VerticalText>
        ))}
      </View>
      <View style={styleLayout.layout}>
        <Text style={styleText.headerText}>전성윤님의 유형 요약</Text>

        <View style={styleLayout.layoutContainer}>
          <View style={styleLayout.layoutTitle}>
            <Text style={styleText.titleDark}>
              겁이 없는<Tspan style={styleText.titleDarkGray}> 기질</Tspan>
            </Text>
          </View>
          <View style={styleLayout.layoutContent}>
            <Image src={pdfEmoji1} style={[styleText.emoji, { width: "80px" }]} />
            <Text style={styleText.titleDarkGray}>세상은 나만의 무대, 나는 나만의 주인공.</Text>
            <Text style={styleText.textDark}>
              자유분방하고 도전을 좋아하는 대담한 성격입니다. 하고 싶은 것은 누가 뭐라고 하던 다 해야 직성이 풀리는 편이에요. 새롭고 낯선 것을 두려워하지 않고 우선 도전하는 것을 좋아해요. 다른 사람의 시선이나 기존의 관습을 신경 쓰지 않고 원하는 것을 이루어 내고자 합니다. 꼼꼼히 계획하기 보다는, 나의
              직감을 믿고 즉흥적이고 유연하게 대처해요. 그러나 이러한 성향으로 인해 때로는 위험을 과소평가하거나 실수를 범할 수도 있습니다. 주변 사람들에게도 ‘자신만의 길을 가는’ 대담한 모습으로 비춰질 것입니다. 내가 원하는바를 향해 끊임없이 나아가고, 주변의 인정을 받지 못하더라도 혼자 자신만의 길을
              걷는 것을 두려워하지 않아요. 예측 불가능하면서 주도적인 모습이 매력적이면서도, 이러한 과정에서 가까운 사람들은 때로 서운함을 느낄 수 있어요. 상대를 배려하기 보다는 자신의 목표를 먼저 생각하는, 차가운 사람으로 느껴질 수 있기 때문이에요.
            </Text>

            <Text style={styleText.textDark}>
              자유분방하고 도전을 좋아하는 대담한 성격입니다. 하고 싶은 것은 누가 뭐라고 하던 다 해야 직성이 풀리는 편이에요. 새롭고 낯선 것을 두려워하지 않고 우선 도전하는 것을 좋아해요. 다른 사람의 시선이나 기존의 관습을 신경 쓰지 않고 원하는 것을 이루어 내고자 합니다. 꼼꼼히 계획하기 보다는, 나의
              직감을 믿고 즉흥적이고 유연하게 대처해요. 그러나 이러한 성향으로 인해 때로는 위험을 과소평가하거나 실수를 범할 수도 있습니다. 주변 사람들에게도 ‘자신만의 길을 가는’ 대담한 모습으로 비춰질 것입니다. 내가 원하는바를 향해 끊임없이 나아가고, 주변의 인정을 받지 못하더라도 혼자 자신만의 길을
              걷는 것을 두려워하지 않아요. 예측 불가능하면서 주도적인 모습이 매력적이면서도, 이러한 과정에서 가까운 사람들은 때로 서운함을 느낄 수 있어요. 상대를 배려하기 보다는 자신의 목표를 먼저 생각하는, 차가운 사람으로 느껴질 수 있기 때문이에요.
            </Text>
            <Text style={styleText.textBrandText}>‘자기 마음 먹은 대로 모든 일을 하는 사람’이지만, 이 말이 칭찬이 될지 비판이 될지는 나의 노력에 달렸습니다.</Text>
          </View>
        </View>
      </View>
      <View style={styleLayout.layout}>
        <View style={styleLayout.line}></View>
        <View style={styleLayout.layoutContainer}>
          <View style={styleLayout.layoutTitle}>
            <Text style={styleText.titleDark}>
              수련자<Tspan style={styleText.titleDarkGray}> 성격</Tspan>
            </Text>
          </View>
          <View style={styleLayout.layoutContent}>
            <Image src={pdfEmoji2} style={[styleText.emoji, { width: "114px" }]} />
            <Text style={styleText.titleDarkGray}>내 자신을 넘어서려는 당신.</Text>
            <Text style={styleText.textDark}>
              자신의 타고난 기질을 극복하고 더 좋은 사람이 되기 위해 끊임없이 고민하는 성향이에요. 더 나은 내가 되고자 하는 마음이 크면서도, 그 방법을 알지 못해 답답한 마음이 계속되고 있을 수 있겠어요. 막연한 가려움이 느껴지는데 원인이 어디인지, 그래서 어디를 어떻게 긁어야 편안해지는 것일지 알지
              못하는 마음과 비슷할 수 있어요. 이 불편함이 오랜 시간 지속되다 보면, 이것을 고칠 수 있는 힘이 나에게 없다고 느끼며 스스로에 대한 믿음도 떨어질 수 있습니다.  정신적이거나 추상적인 것에 관심을 가지려 하며, 이상적인 모습을 꿈꾸는 경향도 있어요. 하지만 스스로나 주변을 현실적이고 객관적으로
              바라보는 노력은 상대적으로 적을 수 있습니다. 막연한 이상과 불분명한 현실 사이에서 내가 원하는 바를 명확히 파악하고, 이를 위해 노력하는 것이 어려울 수밖에 없습니다.
            </Text>
            <Text style={styleText.textDark}>
              정신적이거나 추상적인 것에 관심을 가지려 하며, 이상적인 모습을 꿈꾸는 경향도 있어요. 하지만 스스로나 주변을 현실적이고 객관적으로 바라보는 노력은 상대적으로 적을 수 있습니다. 막연한 이상과 불분명한 현실 사이에서 내가 원하는 바를 명확히 파악하고, 이를 위해 노력하는 것이 어려울 수밖에
              없습니다.
            </Text>
            <Text style={styleText.textBrandText}>스스로를 자책하기 보다는 좀 더 자신을 믿어 주세요.</Text>
          </View>
        </View>
      </View>
    </Page> */}

    {/* <Page style={styles.page} wrap={false}>
      <View style={styleHeader.header}>
        <Image style={styleHeader.image} src={pdfFrameWhite} />
      </View>
      <View style={stylePageNumber.container}>
        {pageNumber.map((item, index) => (
          <VerticalText text={item.text} number={item.number} page={2} index={index}></VerticalText>
        ))}
      </View>
      <View style={styleLayout.layout}>
        <Text style={styleText.headerText}>홍길동님의 강점과 약점</Text>
        <View style={styleLayout.layoutContainer}>
          <View style={styleLayout.layoutTitle}>
            <Text style={styleText.titleDark}>
              겁이 없는<Tspan style={styleText.titleDarkGray}> 기질</Tspan>
            </Text>
          </View>
          <View style={styleLayout.layoutTwoColumn}>
            <View style={styleLayout.layoutTwoColumnContent}>
              <Image src={pdfEmoji3} style={[styleText.emoji, { width: "60px" }]} />
              {secondPageData.map((item) => (
                <ListItem title={item.title} text={item.text} color={"#FF382B"}></ListItem>
              ))}
            </View>
            <View style={styleLayout.layoutTwoColumnContent}>
              <Image src={pdfEmoji4} style={[styleText.emoji, { width: "60px" }]} />
              {secondPageData.map((item) => (
                <ListItem title={item.title} text={item.text} color={"#356DF8"}></ListItem>
              ))}
            </View>
          </View>
        </View>
      </View>
      <View style={styleLayout.layout}>
        <View style={styleLayout.line}></View>
        <View style={styleLayout.layoutContainer}>
          <View style={styleLayout.layoutTitle}>
            <Text style={styleText.titleDark}>
              수련자<Tspan style={styleText.titleDarkGray}> 성격</Tspan>
            </Text>
          </View>
          <View style={styleLayout.layoutTwoColumn}>
            <View style={styleLayout.layoutTwoColumnContent}>
              <Image src={pdfEmoji3} style={[styleText.emoji, { width: "60px" }]} />
              {secondPageData.map((item) => (
                <ListItem title={item.title} text={item.text} color={"#FF382B"}></ListItem>
              ))}
            </View>
            <View style={styleLayout.layoutTwoColumnContent}>
              <Image src={pdfEmoji4} style={[styleText.emoji, { width: "60px" }]} />
              {secondPageData.map((item) => (
                <ListItem title={item.title} text={item.text} color={"#356DF8"}></ListItem>
              ))}
            </View>
          </View>
        </View>
      </View>
    </Page> */}
    {/* <Page style={styles.page} wrap={false}>
      <View style={styleHeader.header}>
        <Image style={styleHeader.image} src={pdfFrameWhite} />
      </View>
      <View style={stylePageNumber.container}>
        {pageNumber.map((item, index) => (
          <VerticalText text={item.text} number={item.number} page={3} index={index}></VerticalText>
        ))}
      </View>
      <View style={styleLayout.layout}>
        <Text style={styleText.headerText}>전성윤님의 연인 관계</Text>
        <View style={styleLayout.layoutContainer}>
          <View style={styleLayout.layoutTitle}>
            <Text style={styleText.titleDark}>
              겁이 없는<Tspan style={styleText.titleDarkGray}> 기질</Tspan>
            </Text>
          </View>
          <View style={styleLayout.layoutContent}>
            <Image src={pdfEmoji5} style={[styleText.emoji, { width: "80px" }]} />
            <Text style={styleText.titleDarkGray}>관계에서도 독립을 추구하며.</Text>
            <View style={styleOrderedText.container}>
              {thirdPageData.map((item) => (
                <OrderedText title={item.title}></OrderedText>
              ))}
              <Text style={styleText.textBrandText}>발전적인 관계를 윈한다면 상대가 원하는 수준의 감정적 교류와 세심한 배려를 위해, 많은 고민과 노력이 필요할 수 있습니다.</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styleLayout.layout}>
        <View style={styleLayout.line}></View>
        <View style={styleLayout.layoutContainer}>
          <View style={styleLayout.layoutTitle}>
            <Text style={styleText.titleDark}>
              겁이 없는<Tspan style={styleText.titleDarkGray}> 기질</Tspan>
            </Text>
          </View>
          <View style={styleLayout.layoutContent}>
            <Image src={pdfEmoji5} style={[styleText.emoji, { width: "80px" }]} />
            <Text style={styleText.titleDarkGray}>관계에서도 독립을 추구하며.</Text>
            <View style={styleOrderedText.container}>
              {thirdPageData.map((item) => (
                <OrderedText title={item.title}></OrderedText>
              ))}
              <Text style={styleText.textBrandText}>발전적인 관계를 윈한다면 상대가 원하는 수준의 감정적 교류와 세심한 배려를 위해, 많은 고민과 노력이 필요할 수 있습니다.</Text>
            </View>
          </View>
        </View>
      </View>
    </Page>
    <Page style={styles.page} wrap={false}>
      <View style={styleHeader.header}>
        <Image style={styleHeader.image} src={pdfFrameWhite} />
      </View>
      <View style={stylePageNumber.container}>
        {pageNumber.map((item, index) => (
          <VerticalText text={item.text} number={item.number} page={4} index={index}></VerticalText>
        ))}
      </View>
      <View style={styleLayout.layout}>
        <Text style={styleText.headerText}>전성윤님의 연인 관계</Text>
        <View style={styleLayout.layoutContainer}>
          <View style={styleLayout.layoutTitle}>
            <Text style={styleText.titleDark}>
              겁이 없는<Tspan style={styleText.titleDarkGray}> 기질</Tspan>
            </Text>
          </View>

          <View style={styleLayout.layoutContent}>
            <Image src={pdfEmoji6} style={[styleText.emoji, { width: "80px" }]} />
            <Text style={styleText.titleDarkGray}>따로 또 같이.</Text>
            <View style={styleOrderedText.container}>
              {forthPageData.map((item) => (
                <OrderedText title={item.title}></OrderedText>
              ))}
              <Text style={styleText.textBrandText}>상대의 감정과 입장을 이해하고, 불편한 마음도 좀 더 품어주려는 노력이 필요할 수 있어요.</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styleLayout.layout}>
        <View style={styleLayout.line}></View>
        <View style={styleLayout.layoutContainer}>
          <View style={styleLayout.layoutTitle}>
            <Text style={styleText.titleDark}>
              겁이 없는<Tspan style={styleText.titleDarkGray}> 기질</Tspan>
            </Text>
          </View>
          <View style={styleLayout.layoutContent}>
            <Image src={pdfEmoji6} style={[styleText.emoji, { width: "80px" }]} />
            <Text style={styleText.titleDarkGray}>세상은 나만의 무대, 나는 나만의 주인공.</Text>
            <View style={styleOrderedText.container}>
              {forthPageData.map((item) => (
                <OrderedText title={item.title}></OrderedText>
              ))}
              <Text style={styleText.textBrandText}>상대의 감정과 입장을 이해하고, 불편한 마음도 좀 더 품어주려는 노력이 필요할 수 있어요.</Text>
            </View>
          </View>
        </View>
      </View>
    </Page>
    <Page style={styles.page}>
      <View style={styleHeader.header}>
        <Image style={styleHeader.image} src={pdfFrameWhite} />
      </View>
      <View style={stylePageNumber.container}>
        {pageNumber.map((item, index) => (
          <VerticalText text={item.text} number={item.number} page={5} index={index}></VerticalText>
        ))}
      </View>
      <View style={styleLayout.layout}>
        <Text style={styleText.headerText}>전성윤님의 연인 관계</Text>
        <View style={styleLayout.layoutContainer}>
          <View style={styleLayout.layoutTitle}>
            <Text style={styleText.titleDark}>
              겁이 없는<Tspan style={styleText.titleDarkGray}> 기질</Tspan>
            </Text>
          </View>
          <View style={styleLayout.layoutContent}>
            <Image src={pdfEmoji7} style={[styleText.emoji, { width: "114px" }]} />
            <Text style={styleText.titleDarkGray}>세상은 나만의 무대, 나는 나만의 주인공.</Text>
            <Text style={styleText.textDark}>
              모험적이고 독립적인 성격은 직장에서 변화와 혁신을 주도하는 데 이상적입니다. 새로운 아이디어와 도전을 두려워하지 않으며, 어려운 상황에서도 적극적으로 문제를 해결하려고 노력합니다. 또한, 자유롭고 독립적인 사고방식으로 새로운 방향을 제시하며, 동료들에게 영감을 줄 수 있어요. 즉흥적이고
              공격적인 성향은 고위험, 고수익의 프로젝트에서 강점이 될 수 있으며, 변화가 잦은 환경에서도 빠르게 적응할 수 있게 합니다. 경쟁적인 상황에서도 두각을 나타내며, 목표 달성을 위해 끊임없이 노력할 것으로 보이네요.
            </Text>
            <View style={styleBox.box}>
              <Text style={styleText.textDark}>어울리는 직군과 직업</Text>
              {fifthPageData.map((item) => (
                <ListItem title={item.title} text={item.text} color={"#01AF9C"}></ListItem>
              ))}
            </View>
          </View>
        </View>
      </View>
    </Page>
    <Page style={styles.page}>
      <View style={styleHeader.header}>
        <Image style={styleHeader.image} src={pdfFrameWhite} />
      </View>
      <View style={stylePageNumber.container}>
        {pageNumber.map((item, index) => (
          <VerticalText text={item.text} number={item.number} page={6} index={index}></VerticalText>
        ))}
      </View>
      <View style={styleLayout.layout}>
        <Text style={styleText.headerText}>전성윤님의 연인 관계</Text>
        <View style={styleLayout.layoutContainer}>
          <View style={styleLayout.layoutTitle}>
            <Text style={styleText.titleDark}>
              겁이 없는<Tspan style={styleText.titleDarkGray}> 기질</Tspan>
            </Text>
          </View>
          <View style={styleLayout.layoutContent}>
            <Image src={pdfEmoji7} style={[styleText.emoji, { width: "114px" }]} />
            <Text style={styleText.titleDarkGray}>세상은 나만의 무대, 나는 나만의 주인공.</Text>
            <Text style={styleText.textDark}>
              모험적이고 독립적인 성격은 직장에서 변화와 혁신을 주도하는 데 이상적입니다. 새로운 아이디어와 도전을 두려워하지 않으며, 어려운 상황에서도 적극적으로 문제를 해결하려고 노력합니다. 또한, 자유롭고 독립적인 사고방식으로 새로운 방향을 제시하며, 동료들에게 영감을 줄 수 있어요. 즉흥적이고
              공격적인 성향은 고위험, 고수익의 프로젝트에서 강점이 될 수 있으며, 변화가 잦은 환경에서도 빠르게 적응할 수 있게 합니다. 경쟁적인 상황에서도 두각을 나타내며, 목표 달성을 위해 끊임없이 노력할 것으로 보이네요.
            </Text>
            <View style={styleBox.box}>
              <Text style={styleText.textDark}>어울리는 직군과 직업</Text>
              {fifthPageData.map((item) => (
                <ListItem title={item.title} text={item.text} color={"#01AF9C"}></ListItem>
              ))}
            </View>
          </View>
        </View>
      </View>
    </Page>
    <Page style={styles.page} wrap={false}>
      <View style={styleHeader.header}>
        <Image style={styleHeader.image} src={pdfFrameWhite} />
      </View>
      <View style={stylePageNumber.container}>
        {pageNumber.map((item, index) => (
          <VerticalText text={item.text} number={item.number} page={7} index={index}></VerticalText>
        ))}
      </View>
      <View style={styleLayout.layout}>
        <Text style={styleText.headerText}>전성윤님의 연인 관계</Text>
        <View style={styleLayout.layoutContainer}>
          <View style={styleLayout.layoutTitle}>
            <Text style={styleText.titleDark}>
              겁이 없는<Tspan style={styleText.titleDarkGray}> 기질</Tspan>
            </Text>
          </View>
          <View style={styleLayout.layoutContent}>
            <Image src={pdfEmoji8} style={[styleText.emoji, { width: "135px" }]} />
            <Text style={styleText.titleDarkGray}>달리다 사람 한두명을 쳐도 본인은 사고를 냈는지도 모를 수 있다.</Text>
            <Text style={styleText.textDark}>
              (ㅇㅇ)님은 변화와 모험을 두려워하지 않는, 자유롭고 독립적인 영혼입니다. 당신의 대담함과 도전적인 성격은 많은 가능성을 열어주지만, 때때로 타인과의 관계에서 갈등을 일으킬 수 있습니다. 불도저처럼 내가 원하는 바를 추구할 수 있는 것은, 주변에서 그만큼 나를 배려하고 도와준 덕분이라는 것을
              기억해주세요. 주위를 둘러보면 내가 미처 신경 쓰지 못한 부분들을 채워주고 이해해 준 노력들이 있을 거에요. 나도 같은 배려로 보답하기 위해 조금만 노력한다면 훨씬 더 큰 성취, 그리고 의미 있는 관계에 성큼 다가갈 수 있을 것입니다.
            </Text>
            <Text style={styleText.textBrandText}>나에게 부족한 꼼꼼함이나 세심함을 채워줄 수 있는 이들과 함께일 때, (ㅇㅇ)님의 도전정신이 (ㅇㅇ)님을 어디로 이끌지, 그 여정은 분명 흥미롭고 가치 있는 것이 될 거에요.</Text>
          </View>
        </View>
      </View>
      <View style={styleLayout.layout}>
        <View style={styleLayout.line}></View>
        <View style={styleLayout.layoutContainer}>
          <View style={styleLayout.layoutTitle}>
            <Text style={styleText.titleDark}>
              겁이 없는<Tspan style={styleText.titleDarkGray}> 기질</Tspan>
            </Text>
          </View>
          <View style={styleLayout.layoutContent}>
            <Image src={pdfEmoji8} style={[styleText.emoji, { width: "135px" }]} />
            <Text style={styleText.titleDarkGray}>달리다 사람 한두명을 쳐도 본인은 사고를 냈는지도 모를 수 있다.</Text>
            <Text style={styleText.textDark}>
              (ㅇㅇ)님은 변화와 모험을 두려워하지 않는, 자유롭고 독립적인 영혼입니다. 당신의 대담함과 도전적인 성격은 많은 가능성을 열어주지만, 때때로 타인과의 관계에서 갈등을 일으킬 수 있습니다. 불도저처럼 내가 원하는 바를 추구할 수 있는 것은, 주변에서 그만큼 나를 배려하고 도와준 덕분이라는 것을
              기억해주세요. 주위를 둘러보면 내가 미처 신경 쓰지 못한 부분들을 채워주고 이해해 준 노력들이 있을 거에요. 나도 같은 배려로 보답하기 위해 조금만 노력한다면 훨씬 더 큰 성취, 그리고 의미 있는 관계에 성큼 다가갈 수 있을 것입니다.
            </Text>
            <Text style={styleText.textBrandText}>나에게 부족한 꼼꼼함이나 세심함을 채워줄 수 있는 이들과 함께일 때, (ㅇㅇ)님의 도전정신이 (ㅇㅇ)님을 어디로 이끌지, 그 여정은 분명 흥미롭고 가치 있는 것이 될 거에요.</Text>
          </View>
        </View>
      </View>
    </Page> */}
  </Document>
);
