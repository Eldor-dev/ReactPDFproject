import { View, Text, Image } from "@react-pdf/renderer";

import PageContainer from "../../components/pageContainer/PageContainer.js";
import Container from "../../components/container/Container.js";
import TitleHLL from "../../components/containerTitle/TitleHLL.js";
import TitleLLM from "../../components/containerTitle/TitleLLM.js";
import ContainerContent from "../../components/containerContent/ContainerContent.js";
import emoji1 from "../../static/images/pdf_emoji1.png";
import emoji2 from "../../static/images/pdf_emoji2.png";

import { fourthPageData } from "../../data/data.js";
import { styles } from "./styles.js";

function FourthPage() {
  return (
    <PageContainer page={4}>
      <View style={styles.main}>
        <View style={styles.title}>
          <Text>나의 유형 요약</Text>
        </View>
        <Container>
          <TitleHLL />
          <ContainerContent>
            <View style={styles.content_title}>
              <View style={[styles.content_title_img, { width: "80px" }]}>
                <Image src={emoji1} />
              </View>
              <View style={styles.content_title_text}>
                <Text>{fourthPageData.temperamentData.titleText}</Text>
              </View>
            </View>
            <View style={styles.content_main}>
              <Text>{fourthPageData.temperamentData.mainText.textOne}</Text>
              <Text>{fourthPageData.temperamentData.mainText.textTwo}</Text>
            </View>
            <View style={styles.content_footer}>
              <Text>{fourthPageData.temperamentData.footerText}</Text>
            </View>
          </ContainerContent>
        </Container>
        <View style={styles.line} />
        <Container>
          <TitleLLM />
          <ContainerContent>
            <View style={styles.content_title}>
              <View style={[styles.content_title_img, { width: "110px" }]}>
                <Image src={emoji2} />
              </View>
              <View style={styles.content_title_text}>
                <Text>{fourthPageData.personalityData.titleText}</Text>
              </View>
            </View>
            <View style={styles.content_main}>
              <Text>{fourthPageData.personalityData.mainText.textOne}</Text>
              <Text>{fourthPageData.personalityData.mainText.textTwo}</Text>
            </View>
            <View style={styles.content_footer}>
              <Text>{fourthPageData.personalityData.footerText}</Text>
            </View>
          </ContainerContent>
        </Container>
      </View>
    </PageContainer>
  );
}

export default FourthPage;
