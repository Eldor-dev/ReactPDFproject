import { View, Text, Image, Tspan } from "@react-pdf/renderer";

import PageContainer from "../../components/pageContainer/PageContainer.js";
import Container from "../../components/container/Container.js";
import TitleHLL from "../../components/containerTitle/TitleHLL.js";
import TitleLLM from "../../components/containerTitle/TitleLLM.js";
import ContainerContent from "../../components/containerContent/ContainerContent.js";
import emoji6 from "../../static/images/pdf_emoji6.png";
import emoji12 from "../../static/images/pdf_emoji12.png";

import { seventhPageData } from "../../data/data.js";
import { styles } from "./styles.js";

function SeventhPage() {
  return (
    <PageContainer page={7}>
      <View style={styles.main}>
        <View style={styles.title}>
          <Text>나의 친구 관계</Text>
        </View>
        <Container>
          <TitleHLL />
          <ContainerContent>
            <View style={styles.content_title}>
              <View style={[styles.content_title_img, { width: "80px" }]}>
                <Image src={emoji6} />
              </View>
              <View style={styles.content_title_text}>
                <Text>{seventhPageData.temperamentData.titleText}</Text>
              </View>
            </View>
            <View style={styles.content_main}>
              {seventhPageData.temperamentData.list.map((item, index) => (
                <ListComponent text={item.text} key={index} />
              ))}
            </View>
            <View style={styles.content_footer}>
              <Text>{seventhPageData.temperamentData.footerText}</Text>
            </View>
          </ContainerContent>
        </Container>
        <View style={styles.line} />
        <Container>
          <TitleLLM />
          <ContainerContent>
            <View style={styles.content_title}>
              <View style={[styles.content_title_img, { width: "90px" }]}>
                <Image src={emoji12} />
              </View>
              <View style={styles.content_title_text}>
                <Text>
                  {seventhPageData.personalityData.titleText}
                  <Tspan>🙌</Tspan>
                </Text>
              </View>
            </View>
            <View style={styles.content_main}>
              {seventhPageData.personalityData.list.map((item, index) => (
                <ListComponent text={item.text} key={index} />
              ))}
            </View>
            <View style={styles.content_footer}>
              <Text>{seventhPageData.personalityData.footerText}</Text>
            </View>
          </ContainerContent>
        </Container>
      </View>
    </PageContainer>
  );
}

export default SeventhPage;

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
