import { View, Text, Image } from "@react-pdf/renderer";

import PageContainer from "../../components/pageContainer/PageContainer.js";

import { firstPagePersonalityData, firstPageTemperamentData } from "../../data/data.js";
import firstPage_image from "../../static/images/firstPage_image.png";
import { styles } from "./styles.js";

function FirstPage() {
  return (
    <PageContainer page={1}>
      <View style={styles.main}>
        <View style={styles.title}>
          <Text>STC 테스트 알아보기</Text>
        </View>
        <View style={styles.firstContainer}>
          <Text style={styles.firstContainer_title}>STC 테스트란?</Text>
          <Text style={styles.firstContainer_text}>
            STC(Salm Temperament and Character) 테스트는 개인의 기질(Temperament)과 성격(Character)을 평가합니다. 기질은 주로 유전적으로 결정되는 타고난 특징을 의미하며, 성격은 개인의 경험과 환경의 영향을 받아 형성되는 특성입니다. STC 테스트는 서로 다른 두 영역을 나누어 측정함으로써, 개인의
            인성(Personality)과 특징을 더 복합적으로 이해하고 탐색할 수 있도록 도와줍니다.
          </Text>
          <View style={styles.firstContainer_content}>
            <View style={styles.firstContainer_content_box}>
              <Text style={styles.firstContainer_content_box_title}>기질(Temperament)이란?</Text>
              <Text style={styles.firstContainer_content_box_text}>
                기질은 개인이 태어날 때부터 가지고 있는 기본적인 경향성을 의미합니다. 주로 유전적 요인에 의해 결정되므로, 생애 초기에 발현되어 일생 동안 비교적 일정하게 유지됩니다. 예를 들어, 어떤 사람은 선천적으로 활동적이고 호기심이 많은 반면, 다른 사람은 어린 시절부터 조용하고 조심성이 높을 수
                있습니다.
              </Text>
            </View>
            <View style={styles.firstContainer_content_box}>
              <Text style={styles.firstContainer_content_box_title}>성격(Character)이란?</Text>
              <Text style={styles.firstContainer_content_box_text}>
                성격은 성장 환경, 사회적 경험, 노력 등 다양한 요소의 복합적인 상호작용을 통해 후천적으로 형성되는 개인의 특징을 의미합니다. 이는 시간의 흐름과 경험의 축적에 따라 발전하고 변화할 수 있습니다. 예를 들어, 어릴 때 부끄럼이 심했던 사람이 다양한 대인관계와 사회 경험을 통해 주도적이고
                사교적인 성격으로 변할 수 있습니다.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.secondContainer}>
          <Text style={styles.secondContainer_title}>유형 (L, M, H) 이란?</Text>
          <Text style={styles.secondContainer_text}>
            각 지표에 대한 점수는 높고 낮음에 따라 Low(L, 0-30%), Mid(M, 31-70%), High(H, 71-100%)로 구분됩니다. 이 지표 점수인 L, M, H의 조합에 따라 L-L-L부터 H-H-H까지 총 27가지의 유형이 만들어집니다. 27가지의 기질 유형(예: HLL)과 27가지의 성격 유형(예: LMH)의 조합으로 본인만의 유형(예: HLL-LMH)을
            확인할 수 있습니다.
          </Text>
          <View style={styles.secondContainer_content}>
            <Image src={firstPage_image} style={styles.secondContainer_content_img} />
          </View>
        </View>
        <View style={styles.thirdContainer}>
          <Text style={styles.thirdContainer_title}>기질과 성격</Text>
          <Text style={styles.thirdContainer_text}>
            STC의 기질 유형과 성격 유형은 각각 3가지 지표로 구성되어 있습니다. 기질 유형은 '모험성', '조심성', '상호의존성'으로, 성격 유형은 '독립성', '관계성', '초현실성'으로 이루어져 있습니다. 각 지표는 여러 개의 하위 지표를 포함하고 있으며, STC의 지표와 하위 지표는 다음과 같습니다.
          </Text>
          <View style={styles.thirdContainer_content}>
            <View style={styles.thirdContainer_content_table}>
              <Text style={styles.thirdContainer_content_table_title}>기질의 하위 지표 테이블</Text>
              <View style={styles.thirdContainer_content_table_content}>
                {firstPageTemperamentData.map((item, index) => (
                  <Table title={item.title} textData={item.textData} key={index} />
                ))}
              </View>
            </View>
            <View style={styles.thirdContainer_content_table}>
              <Text style={styles.thirdContainer_content_table_title}>성격의 하위 지표 테이블</Text>
              <View style={styles.thirdContainer_content_table_content}>
                {firstPagePersonalityData.map((item, index) => (
                  <Table title={item.title} textData={item.textData} key={index} />
                ))}
              </View>
            </View>
          </View>
        </View>
      </View>
    </PageContainer>
  );
}

export default FirstPage;

// Table component

function Table({ title, textData }) {
  return (
    <View style={styles.table}>
      <View style={styles.table_title}>
        <Text>{title}</Text>
      </View>
      {textData.map((item, index) => (
        <View style={index === 0 ? [styles.table_text, { border: "none" }] : styles.table_text} key={index}>
          <Text>{item.text}</Text>
        </View>
      ))}
    </View>
  );
}
