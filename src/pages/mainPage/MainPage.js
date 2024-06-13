import { Page, Text, View, Image } from "@react-pdf/renderer";

import CopyRight from "../../components/copyRight/CopyRight.js";
import { mainPageData } from "../../data/data.js";
import pdfFrame from "../../static/images/pdf_frame.png";

import { styles } from "./style.js";

function MainPage() {
  return (
    <Page style={styles.page}>
      <View style={styles.greenBackground}>
        <Image style={styles.greenBackgroundImage} src={pdfFrame} />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>전성윤님의 결과 보고서.</Text>
        <View style={styles.dataContainer}>
          <View style={styles.dataTitle}>
            <Text style={styles.dataTitle_text}>DATA SUMMARY</Text>
          </View>
          <View style={styles.dataContent}>
            {mainPageData.map((item, index) => (
              <Table title={item.title} text={item.text} key={item.title + index}></Table>
            ))}
          </View>
        </View>
      </View>
      <CopyRight />
    </Page>
  );
}

export default MainPage;

// Table Component

function Table({ title, text }) {
  return (
    <View style={styles.table}>
      <View style={styles.tableTitle}>
        <Text style={styles.tableTitle_text}>{title}</Text>
      </View>
      <View style={styles.tableContent}>
        <Text style={styles.tableContent_text}>{text}</Text>
      </View>
    </View>
  );
}

{
}
