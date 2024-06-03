import { View, Text } from "@react-pdf/renderer";

import PageContainer from "../../components/pageContainer/PageContainer.js";

import { styles } from "./styles.js";

function FirstPage() {
  return (
    <PageContainer page={1}>
      <View style={styles.main}>
        <View style={styles.title}>
          <Text>STC 테스트 알아보기</Text>
        </View>
        <View style={styles.firstContainer}>
          <View style={styles.firstContainer_title}>
            <Text>STC 테스트란?</Text>
          </View>
          <View style={styles.firstContainer_content}>
            <Text>
              STC(Salm Temperament and Character) 테스트는 개인의 기질(Temperament)과 성격(Character)을 평가합니다. 기질은 주로 유전적으로 결정되는 타고난 특징을 의미하며, 성격은 개인의 경험과 환경의 영향을 받아 형성되는 특성입니다. STC 테스트는 서로 다른 두 영역을 나누어 측정함으로써, 개인의
              인성(Personality)과 특징을 더 복합적으로 이해하고 탐색할 수 있도록 도와줍니다.
            </Text>
          </View>
        </View>
      </View>
    </PageContainer>
  );
}

export default FirstPage;
