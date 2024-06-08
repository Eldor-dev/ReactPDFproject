import { View, Text, Image } from "@react-pdf/renderer";

import PageContainer from "../../components/pageContainer/PageContainer.js";
import line from "../../static/images/pdf_firstPage_line.png";
import { styles } from "./styles.js";

import { firstPagePartTwoTemperamentData, firstPagePartTwoPersonalityData } from "../../data/data.js";

function FirstPageSecondPart() {
  return (
    <PageContainer page={1}>
      <View style={styles.main}>
        <View style={styles.title}>
          <Text>3가지 기질 지표</Text>
        </View>
        <View style={styles.container}>
          {firstPagePartTwoTemperamentData.map((item, index) => (
            <DescriptionComponent {...item} key={index} />
          ))}
        </View>
        <View style={styles.line} />
        <View style={styles.title}>
          <Text>3가지 성격 지표</Text>
        </View>
        <View style={styles.container}>
          {firstPagePartTwoPersonalityData.map((item, index) => (
            <DescriptionComponent {...item} key={index} />
          ))}
        </View>
      </View>
    </PageContainer>
  );
}

export default FirstPageSecondPart;

function DescriptionComponent({ title, text, textOfLow, textOfHigh }) {
  return (
    <View style={styles.box}>
      <Text style={styles.box_title}>{title}</Text>
      <View style={styles.box_textContainer}>
        <View style={styles.box_textContainer_lowBtn}>
          <Text>Low (낮음)</Text>
        </View>
        <Text style={styles.box_textContainer_text}>{text}</Text>
        <View style={styles.box_textContainer_highBtn}>
          <Text>High (높음) </Text>
        </View>
      </View>
      <View style={styles.box_descriptionContainer}>
        <Text style={styles.box_descriptionContainer_textLeft}>{textOfLow}</Text>
        <Image src={line} style={styles.box_descriptionContainer_img} />
        <Text style={styles.box_descriptionContainer_textRight}>{textOfHigh}</Text>
      </View>
    </View>
  );
}
