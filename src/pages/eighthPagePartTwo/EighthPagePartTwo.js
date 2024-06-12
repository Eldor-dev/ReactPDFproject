import { View, Text, Image } from "@react-pdf/renderer";

import PageContainer from "../../components/pageContainer/PageContainer.js";

import { styles } from "./styles.js";

function EighthPagePartTwo() {
  return (
    <PageContainer page={8}>
      <View style={styles.main}>
        <View style={styles.title}>
          <Text>나의 유형 요약</Text>
        </View>
      </View>
    </PageContainer>
  );
}

export default EighthPagePartTwo;
