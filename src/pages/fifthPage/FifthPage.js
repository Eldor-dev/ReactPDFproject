import { View, Text, Image, Tspan } from "@react-pdf/renderer";

import PageContainer from "../../components/pageContainer/PageContainer.js";
import Container from "../../components/container/Container.js";
import TitleHLL from "../../components/containerTitle/TitleHLL.js";
import TitleLLM from "../../components/containerTitle/TitleLLM.js";
import ContainerContent from "../../components/containerContent/ContainerContent.js";

import { fifthPageData } from "../../data/data.js";
import emoji3 from "../../static/images/pdf_emoji3.png";
import emoji4 from "../../static/images/pdf_emoji4.png";
import { styles } from "./styles.js";

function FifthPage() {
  return (
    <PageContainer page={5}>
      <View style={styles.main}>
        <View style={styles.title}>
          <Text>나의 유형 요약</Text>
        </View>
        <Container>
          <TitleHLL />
          <ContainerContent>
            <View style={styles.content}>
              <View style={styles.content_container}>
                <View style={styles.content_container_title}>
                  <View style={[styles.content_container_title_img, { width: "60px" }]}>
                    <Image src={emoji3} />
                  </View>
                </View>
                <View style={styles.content_container_list}>
                  {fifthPageData.temperamentData.listOne.map((item, index) => (
                    <ListComponent {...item} color={"#FF3B30"} key={item.title + index} />
                  ))}
                </View>
              </View>
              <View style={styles.content_container}>
                <View style={styles.content_container_title}>
                  <View style={[styles.content_container_title_img, { width: "60px" }]}>
                    <Image src={emoji4} />
                  </View>
                </View>
                <View style={styles.content_container_list}>
                  {fifthPageData.temperamentData.listTwo.map((item, index) => (
                    <ListComponent {...item} color={"#356DF8"} key={item.title + index} />
                  ))}
                </View>
              </View>
            </View>
          </ContainerContent>
        </Container>
        <View style={styles.line} />
        <Container>
          <TitleLLM />
          <ContainerContent>
            <View style={styles.content}>
              <View style={styles.content_container}>
                <View style={styles.content_container_title}>
                  <View style={[styles.content_container_title_img, { width: "60px" }]}>
                    <Image src={emoji3} />
                  </View>
                </View>
                <View style={styles.content_container_list}>
                  {fifthPageData.personalityData.listOne.map((item, index) => (
                    <ListComponent {...item} color={"#FF3B30"} key={item.title + index} />
                  ))}
                </View>
              </View>
              <View style={styles.content_container}>
                <View style={styles.content_container_title}>
                  <View style={[styles.content_container_title_img, { width: "60px" }]}>
                    <Image src={emoji4} />
                  </View>
                </View>
                <View style={styles.content_container_list}>
                  {fifthPageData.personalityData.listTwo.map((item, index) => (
                    <ListComponent {...item} color={"#356DF8"} key={item.title + index} />
                  ))}
                </View>
              </View>
            </View>
          </ContainerContent>
        </Container>
      </View>
    </PageContainer>
  );
}

export default FifthPage;

function ListComponent({ title, text, color }) {
  return (
    <View style={styles.list}>
      <Text style={[styles.list_title, { color: color }]}>
        <Tspan>{"\u2022" + "  "}</Tspan>
        {title}
      </Text>
      <Text style={styles.list_text}>{text}</Text>
    </View>
  );
}
