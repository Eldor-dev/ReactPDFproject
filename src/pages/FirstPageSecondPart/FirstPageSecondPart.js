import { View, Text, Image } from "@react-pdf/renderer";

import PageContainer from "../../components/pageContainer/PageContainer.js";
import { styles } from "./styles.js";

function FirstPageSecondPart() {
  return (
    <PageContainer page={1}>
      <View style={styles.main}>
        <View style={styles.title}>
          <Text>3가지 기질 지표</Text>
        </View>
        <View style={styles.container}>
          <DescriptionComponent />
        </View>
      </View>
    </PageContainer>
  );
}

export default FirstPageSecondPart;

function DescriptionComponent() {
  return (
    <View style={styles.box}>
      <Text style={styles.box_title}>모험성</Text>
      <View style={styles.box_textContainer}>
        <View style={styles.box_textContainer_lowBtn}>
          <Text>Low (낮음)</Text>
        </View>
        <View style={styles.box_textContainer_lowBtn}>
          <Text>High (높음) </Text>
        </View>
      </View>
    </View>
  );
}
