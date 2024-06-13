import { View, Text, Image, Tspan } from "@react-pdf/renderer";

import PageContainer from "../../components/pageContainer/PageContainer.js";

import checkMark from "../../static/images/pdf_checkMark.png";
import { ninthPageData } from "../../data/data.js";
import { styles } from "./styles.js";

function NinthPage() {
  return (
    <PageContainer page={9}>
      <View style={styles.main}>
        <View style={styles.title}>
          <Text>나를 위한 조언</Text>
        </View>
        <View style={styles.containerOne}>
          <View style={styles.containerOne_content}>
            <Text style={styles.containerOne_content_title}>{ninthPageData.contentOne.title}</Text>
            <Text style={styles.containerOne_content_text}>{ninthPageData.contentOne.text}</Text>
            <Text style={styles.containerOne_content_footerText}>{ninthPageData.contentOne.footerText}</Text>
          </View>
          <View style={styles.containerOne_ampersand}>
            <Text>&</Text>
          </View>
          <View style={styles.containerOne_content}>
            <Text style={styles.containerOne_content_title}>{ninthPageData.contentTwo.title}</Text>
            <Text style={styles.containerOne_content_text}>{ninthPageData.contentTwo.text}</Text>
            <Text style={styles.containerOne_content_footerText}>{ninthPageData.contentTwo.footerText}</Text>
          </View>
        </View>
        <View style={styles.containerTwo}>
          <View style={styles.containerTwo_title}>
            <Text>나를 위한 연습</Text>
          </View>
          <View style={styles.containerTwo_listContainer}>
            {ninthPageData.list.map((item, index) => (
              <ListComponent text={item.text} key={item.text + index} />
            ))}
          </View>
        </View>
      </View>
    </PageContainer>
  );
}

export default NinthPage;

// ListComponent

function ListComponent({ text }) {
  return (
    <View style={styles.list}>
      <View style={styles.list_checkMarkContainer}>
        <Image src={checkMark} style={styles.list_checkMark} />
      </View>
      <Text style={styles.list_text}>{text}</Text>
    </View>
  );
}
