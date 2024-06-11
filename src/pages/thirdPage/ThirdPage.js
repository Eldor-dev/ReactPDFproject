import { View, Text, Image, Tspan } from "@react-pdf/renderer";

import PageContainer from "../../components/pageContainer/PageContainer";

import { thirdPageData } from "../../data/data.js";
import { styles } from "./styles.js";

function ThirdPage() {
  return (
    <PageContainer page={3}>
      <View style={styles.main}>
        <View style={styles.title}>
          <Text>나의 지표별 점수</Text>
        </View>
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <View style={styles.tableHeader_category}>
              <Text>유형</Text>
            </View>
            <View style={styles.tableHeader_indicator}>
              <Text>지표</Text>
            </View>
            <View style={styles.tableHeader_subIndicator}>
              <Text>하위지표</Text>
            </View>
            <View style={styles.tableHeader_score}>
              <Text>점수</Text>
            </View>
            <View style={styles.tableHeader_percentage}>
              <Text style={{ marginLeft: "8px" }}>Low(0%)</Text>
              <ArrowComponent />
              <Text>High(100%)</Text>
            </View>
          </View>
          <View style={styles.tableContent}>
            <View style={[styles.tableContent_category, { borderBottom: "0.75px solid #D2D2D7" }]}>
              <Text>기질</Text>
            </View>
            <View style={styles.tableContent_indicatorContainer}>
              {thirdPageData.temperamentData.map((item, index) => (
                <IndicatorComponent {...item} key={item.title + index} />
              ))}
            </View>
          </View>
          <View style={styles.tableContent}>
            <View style={styles.tableContent_category}>
              <Text>성격</Text>
            </View>
            <View style={styles.tableContent_indicatorContainer}>
              {thirdPageData.personalityData.map((item, index) => (
                <IndicatorComponent {...item} key={item.title + index} />
              ))}
            </View>
          </View>
        </View>
      </View>
    </PageContainer>
  );
}

export default ThirdPage;

// ArrowComponent

function ArrowComponent() {
  return (
    <View style={styles.arrow}>
      <View style={styles.arrow_left} />
      <View style={styles.arrow_line} />
      <View style={styles.arrow_right} />
    </View>
  );
}

// IndicatorComponent

function IndicatorComponent({ title, content, index, arrLength }) {
  return (
    <View style={styles.indicator}>
      <View style={styles.indicator_title}>
        <Text>{title}</Text>
      </View>
      <View style={styles.indicator_content}>
        {content.map((item, index) => (
          <SubTitleComponent {...item} key={item.title + index} />
        ))}
      </View>
    </View>
  );
}

// SubTitleComponent

function SubTitleComponent({ title, percentage }) {
  let position = 0;

  if (percentage == 100) {
    position = percentage - 4;
  } else if (percentage == 99) {
    position = percentage - 3.9;
  } else if (percentage == 98) {
    position = percentage - 3.7;
  } else if (percentage == 97) {
    position = percentage - 3.5;
  } else if (percentage == 96) {
    position = percentage - 3.2;
  } else if (percentage > 90 && percentage <= 95) {
    position = percentage - 3;
  } else if (percentage > 85 && percentage <= 90) {
    position = percentage - 2.8;
  } else if (percentage > 80 && percentage <= 85) {
    position = percentage - 2.6;
  } else if (percentage > 75 && percentage <= 80) {
    position = percentage - 2.4;
  } else if (percentage > 65 && percentage <= 75) {
    position = percentage - 2.2;
  } else if (percentage > 60 && percentage <= 65) {
    position = percentage - 2.1;
  } else if (percentage > 50 && percentage <= 60) {
    position = percentage - 2;
  } else if (percentage > 40 && percentage <= 50) {
    position = percentage - 1.9;
  } else if (percentage > 30 && percentage <= 40) {
    position = percentage - 1.8;
  } else if (percentage > 20 && percentage <= 30) {
    position = percentage - 1.9;
  } else if (percentage > 10 && percentage <= 20) {
    position = percentage - 1.7;
  } else if (percentage > 5 && percentage <= 10) {
    position = percentage - 1.6;
  } else if (percentage == 5) {
    position = percentage - 1.5;
  } else if (percentage == 4) {
    position = percentage - 1.45;
  } else if (percentage == 3) {
    position = percentage - 1.4;
  } else if (percentage == 2) {
    position = percentage - 0.5;
  } else if (percentage == 1) {
    position = percentage - 0.3;
  }
  return (
    <View style={styles.subTitle}>
      <View style={styles.subTitle_title}>
        <Text>{title}</Text>
      </View>
      <View style={styles.subTitle_percentage}>
        <Text>{`${percentage}%`}</Text>
      </View>
      <View style={styles.subTitle_sliderContainer}>
        <View style={styles.subTitle_sliderContainer_low} />
        <View style={styles.subTitle_sliderContainer_middle} />
        <View style={styles.subTitle_sliderContainer_high} />
        <View style={[styles.subTitle_sliderContainer_circle, { left: `${position}%` }]} />
        <View />
        <View />
      </View>
    </View>
  );
}
