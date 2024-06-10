import { View, Text, Image, Tspan } from "@react-pdf/renderer";

import PageContainer from "../../components/pageContainer/PageContainer";

import { styles } from "./styles.js";

function ThirdPage() {
  return (
    <PageContainer page={3}>
      <View style={styles.main}>
        <View style={styles.title}>
          <Text>나의 지표별 점수</Text>
        </View>
        <View style={styles.container}></View>
      </View>
    </PageContainer>
  );
}

export default ThirdPage;
