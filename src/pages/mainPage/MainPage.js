import { Page, Text, View, Image, Tspan } from "@react-pdf/renderer";

import CopyRight from "../../components/copyRight/CopyRight.js";
import { sliderFirstData, sliderSecondData, mainPageData } from "../../data/data.js";
import pdfFrame from "../../static/images/pdf_frame.png";
// import { Slider } from "../../components/components";
// import pdfFrame1 from "../../static/images/pdf_frame1.png";
// import pdfEmoji9 from "../../static/images/pdf_emoji9.png";
// import pdfEmoji10 from "../../static/images/pdf_emoji10.png";
import { styles } from "./style.js";

function MainPage() {
  return (
    <Page style={styles.page}>
      <View style={styles.greenBackground}>
        <Image style={styles.greenBackgroundImage} src={pdfFrame} />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>전성윤님의 결과 보고서.</Text>
        <View style={styles.dataContainer}>
          <View style={styles.dataTitle}>
            <Text style={styles.dataTitle_text}>DATA SUMMARY</Text>
          </View>
          <View style={styles.dataContent}>
            {mainPageData.map((item) => (
              <Table title={item.title} text={item.text}></Table>
            ))}
          </View>
        </View>
      </View>
      <CopyRight />
      {/* <View style={styles.copyright}></View> */}
    </Page>
  );
}

export default MainPage;

// Table Component

function Table({ title, text }) {
  return (
    <View style={styles.table}>
      <View style={styles.tableTitle}>
        <Text style={styles.tableTitle_text}>{title}</Text>
      </View>
      <View style={styles.tableContent}>
        <Text style={styles.tableContent_text}>{text}</Text>
      </View>
    </View>
  );
}

{
  /* <View style={styles.greenBackground}>
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
      </View> */
}
