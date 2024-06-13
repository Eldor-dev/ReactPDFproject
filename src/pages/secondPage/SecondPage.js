import { View, Text, Image, Tspan, Svg, Defs, Rect, LinearGradient, Stop } from "@react-pdf/renderer";

import PageContainer from "../../components/pageContainer/PageContainer.js";

import { secondPageData } from "../../data/data.js";
import image from "../../static/images/pdf_secondPage_img1.png";
import { styles } from "./styles.js";

function SecondPage() {
  return (
    <PageContainer page={2}>
      <View style={styles.main}>
        <View style={styles.title}>
          <Text>나의 기질과 성격</Text>
        </View>
        <View style={styles.firstContainer}>
          <Text style={styles.firstContainer_text}>
            27가지 기질과 27가지 성격의 조합으로 총 729가지 (27 x 27) 유형이 만들어집니다. 누군가는 타고난 기질과 후천적으로 형성된 성격이 비슷할 수 있으며, 누군가는 기질의 약점을 보완하기 위해 정반대의 성격을 형성할 수도 있습니다. 자신의 기질과 성격을 정확히 파악함으로써 본 모습을 이해하고, 삶을
            원하는 모습으로 이끌어 나가는 데 도움이 되기를 바랍니다.
          </Text>
          <Text style={styles.firstContainer_title}>나의 유형 아바타</Text>
          <Text style={styles.firstContainer_text}>27가지의 기질을 포즈로, 27개의 성격을 캐릭터로 형상화하여 나의 기질과 성격의 조합에 따라 생성된 나만의 아바타입니다.</Text>
          <View style={styles.firstContainer_content}>
            <View style={styles.firstContainer_content_boxOne}>
              <Image src={image} />
            </View>
            <View style={styles.firstContainer_content_boxTwo}>
              <DataDemonstrator {...secondPageData.temperamentData} />
              <View style={styles.firstContainer_content_boxTwo_line}></View>
              <DataDemonstrator {...secondPageData.personalityData} />
            </View>
          </View>
        </View>
        <View style={styles.secondContainer}>
          <View style={styles.secondContainer_box}>
            <Text style={styles.secondContainer_box_title}>
              {`기질 유형  `}
              <Tspan style={styles.secondContainer_box_titleTspan}>{secondPageData.temperamentData.type}</Tspan>
            </Text>
            <View style={styles.secondContainer_box_content}>
              {secondPageData.temperamentData.scale.map((item, index) => (
                <Slider {...item} key={index} />
              ))}
            </View>
          </View>
          <View style={styles.secondContainer_box}>
            <Text style={styles.secondContainer_box_title}>
              {`성격 유형  `}
              <Tspan style={styles.secondContainer_box_titleTspan}>{secondPageData.personalityData.type}</Tspan>
            </Text>
            <View style={styles.secondContainer_box_content}>
              {secondPageData.personalityData.scale.map((item, index) => (
                <Slider {...item} key={index} />
              ))}
            </View>
          </View>
        </View>
      </View>
    </PageContainer>
  );
}

export default SecondPage;

// DataDemonstrator component

function DataDemonstrator({ type, description, scale }) {
  return (
    <View style={styles.dataDemonstrator}>
      <Text style={styles.dataDemonstrator_title}>
        {`나의 기질 유형은?   `} <Tspan style={styles.dataDemonstrator_title_Tspan}>{type}</Tspan>
      </Text>
      <Text style={styles.dataDemonstrator_text}>{description}</Text>
      <View style={styles.dataDemonstrator_content}>
        {scale.map((item, index) => (
          <View style={styles.dataDemonstrator_content_data} key={index}>
            <View style={item.level == "H" ? styles.dataDemonstrator_content_data_btnContainer : item.level == "M" ? [styles.dataDemonstrator_content_data_btnContainer, { borderColor: "#00CBA1" }] : [styles.dataDemonstrator_content_data_btnContainer, { borderColor: "#00E6A5" }]}>
              <View
                style={item.level == "H" ? styles.dataDemonstrator_content_data_btnContainer_btn : item.level == "M" ? [styles.dataDemonstrator_content_data_btnContainer_btn, { backgroundColor: "#00CBA1" }] : [styles.dataDemonstrator_content_data_btnContainer_btn, { backgroundColor: "#00E6A5" }]}
              >
                <Text>{item.level}</Text>
              </View>
            </View>
            <Text style={styles.dataDemonstrator_content_data_title}>{item.title}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

// Slider component

function Slider({ title, level, percentage }) {
  return (
    <View style={styles.slider}>
      <View style={styles.slider_header}>
        <Text>{title}</Text>
        <Text>{`${percentage}%`}</Text>
      </View>
      <View style={styles.slider_main}>
        <View style={styles.slider_main_content}>
          <GradientComponent title={title} level={level} percentage={percentage} />
        </View>
      </View>
      <View style={styles.slider_footer}>
        <Text>Low</Text>
        <Text>Middle</Text>
        <Text>High</Text>
      </View>
    </View>
  );
}

// Gradient Component

function GradientComponent({ level, percentage }) {
  let sliderWidth = 0;

  if (percentage > 90) {
    sliderWidth = percentage - 9;
  } else if (percentage > 80 && percentage <= 90) {
    sliderWidth = percentage - 8;
  } else if (percentage > 70 && percentage <= 80) {
    sliderWidth = percentage - 7;
  } else if (percentage > 60 && percentage <= 70) {
    sliderWidth = percentage - 6;
  } else if (percentage > 50 && percentage <= 60) {
    sliderWidth = percentage - 5;
  } else if (percentage > 40 && percentage <= 50) {
    sliderWidth = percentage - 4;
  } else if (percentage > 30 && percentage <= 40) {
    sliderWidth = percentage - 3;
  } else if (percentage > 20 && percentage <= 30) {
    sliderWidth = percentage - 2;
  } else if (percentage > 10 && percentage <= 20) {
    sliderWidth = percentage - 1;
  } else if (percentage > 5 && percentage <= 10) {
    sliderWidth = percentage - 0.7;
  } else if (percentage > 0 && percentage <= 5) {
    sliderWidth = percentage - 0.03;
  }

  return (
    <View style={styles.gradient}>
      <View style={[styles.gradient_color, { width: `${sliderWidth}%` }]}>
        <Svg>
          <Defs>
            <LinearGradient id="myLinearGradient">
              <Stop offset="0%" stopColor="#00E6A5" />
              <Stop offset="50%" stopColor="#00CBA1" />
              <Stop offset="100%" stopColor="#01AF9C" />
            </LinearGradient>
          </Defs>
          <Rect width={250} height={50} fill="url('#myLinearGradient')" />
        </Svg>
      </View>
      <View style={level == "L" ? [styles.gradient_btn, { borderColor: "#00E6A5" }] : level == "M" ? [styles.gradient_btn, { borderColor: "#00CBA1" }] : [styles.gradient_btn, { borderColor: "#01AF9C" }]}>
        <View style={level == "L" ? [styles.gradient_btn_content, { backgroundColor: "#00E6A5" }] : level == "M" ? [styles.gradient_btn_content, { backgroundColor: "#00CBA1" }] : [styles.gradient_btn_content, { backgroundColor: "#01AF9C" }]}>
          <Text>{level}</Text>
        </View>
      </View>
    </View>
  );
}
