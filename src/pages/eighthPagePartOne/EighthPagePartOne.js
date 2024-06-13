import { View, Text, Image, Tspan } from "@react-pdf/renderer";

import PageContainer from "../../components/pageContainer/PageContainer.js";
import Container from "../../components/container/Container.js";
import TitleHLL from "../../components/containerTitle/TitleHLL.js";
import ContainerContent from "../../components/containerContent/ContainerContent.js";
import emoji7 from "../../static/images/pdf_emoji7.png";

import { eighthPageData } from "../../data/data.js";
import { styles } from "./styles.js";

function EighthPagePartOne() {
  return (
    <PageContainer page={8}>
      <View style={styles.main}>
        <View style={styles.title}>
          <Text>나의 커리어</Text>
        </View>
        <Container>
          <TitleHLL />
          <ContainerContent>
            <View style={styles.content_title}>
              <View style={[styles.content_title_img, { width: "100px" }]}>
                <Image src={emoji7} />
              </View>
              <View style={styles.content_title_text}>
                <Text>{eighthPageData.temperamentData.titleText}</Text>
              </View>
            </View>
            <View style={styles.content_main}>
              {eighthPageData.temperamentData.listOne.map((item, index) => (
                <ListOneComponent text={item.text} key={index} />
              ))}
            </View>
            <View style={styles.content_box}>
              <View style={styles.content_box_title}>
                <Text>어울리는 직군과 직업</Text>
              </View>
              <View style={styles.content_box_main}>
                {eighthPageData.temperamentData.listTwo.map((item, index) => (
                  <ListTwoComponent {...item} key={item.title + index} />
                ))}
              </View>
            </View>
          </ContainerContent>
        </Container>
      </View>
    </PageContainer>
  );
}

export default EighthPagePartOne;

// ListOneComponent
function ListOneComponent({ text }) {
  return (
    <View style={styles.listOne}>
      <Text>
        <Tspan>{"\u2022" + "  "}</Tspan>
      </Text>
      <Text style={styles.listOne_title}>{text}</Text>
    </View>
  );
}

// ListTwoComponent
function ListTwoComponent({ text, title }) {
  return (
    <View style={styles.listTwo}>
      <Text style={styles.listTwo_title}>
        <Tspan>
          {"\u2022" + "  "}
          {title}
        </Tspan>
      </Text>
      <Text style={styles.listTwo_text}>{text}</Text>
    </View>
  );
}
