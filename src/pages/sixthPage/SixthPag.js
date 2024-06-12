import { View, Text, Image, Tspan } from "@react-pdf/renderer";

import PageContainer from "../../components/pageContainer/PageContainer.js";
import Container from "../../components/container/Container.js";
import TitleHLL from "../../components/containerTitle/TitleHLL.js";
import TitleLLM from "../../components/containerTitle/TitleLLM.js";
import ContainerContent from "../../components/containerContent/ContainerContent.js";
import emoji5 from "../../static/images/pdf_emoji5.png";
import emoji6 from "../../static/images/pdf_emoji6.png";

import { sixthPageData } from "../../data/data.js";
import { styles } from "./styles.js";

function SixthPage() {
  return (
    <PageContainer page={6}>
      <View style={styles.main}>
        <View style={styles.title}>
          <Text>나의 유형 요약</Text>
        </View>
        <Container>
          <TitleHLL />
          <ContainerContent>
            <View style={styles.content_title}>
              <View style={[styles.content_title_img, { width: "90px" }]}>
                <Image src={emoji5} />
              </View>
              <View style={styles.content_title_text}>
                <Text>{sixthPageData.temperamentData.titleText}</Text>
              </View>
            </View>
            <View style={styles.content_main}>
              {sixthPageData.temperamentData.list.map((item, index) => (
                <ListComponent text={item.text} key={index} />
              ))}
            </View>
            <View style={styles.content_footer}>
              <Text>{sixthPageData.temperamentData.footerText}</Text>
            </View>
          </ContainerContent>
        </Container>
        <View style={styles.line} />
        <Container>
          <TitleLLM />
          <ContainerContent>
            <View style={styles.content_title}>
              <View style={[styles.content_title_img, { width: "80px" }]}>
                <Image src={emoji6} />
              </View>
              <View style={styles.content_title_text}>
                <Text>{sixthPageData.personalityData.titleText}</Text>
              </View>
            </View>
            <View style={styles.content_main}>
              {sixthPageData.personalityData.list.map((item, index) => (
                <ListComponent text={item.text} key={index} />
              ))}
            </View>
            <View style={styles.content_footer}>
              <Text>{sixthPageData.personalityData.footerText}</Text>
            </View>
          </ContainerContent>
        </Container>
      </View>
    </PageContainer>
  );
}

export default SixthPage;

// ListComponent
function ListComponent({ text }) {
  return (
    <View style={styles.list}>
      <Text style={styles.list_order}>
        <Tspan>{"\u2022" + "  "}</Tspan>
      </Text>
      <Text style={styles.list_title}>{text}</Text>
    </View>
  );
}
