import { View, Page, Text, Tspan } from "@react-pdf/renderer";

import { pageNumber } from "../../data/data.js";
import CopyRight from "../../components/copyRight/CopyRight";
import HeaderLogo from "../../components/headerBrand/HeaderBrand.js";
import { styles } from "./styles.js";

function PageContainer({ children, page }) {
  return (
    <Page>
      <HeaderLogo />
      <View style={styles.main}>
        <View style={styles.mainContent}>{children}</View>
        <View style={styles.pageNumberContainer}>
          <View style={styles.pageNumberContent}>
            {pageNumber.map((item, index) => (
              <PageNumber page={page} number={item.number} text={item.text} index={index} key={index} />
            ))}
          </View>
        </View>
      </View>
      <CopyRight />
    </Page>
  );
}

export default PageContainer;

/// PageNumber

function PageNumber({ number, text, page, index }) {
  return (
    <View style={page === index + 1 ? [styles.box, { backgroundColor: "#00CBA1" }] : styles.box}>
      {page === index + 1 ? <Tspan style={styles.box_arrow} /> : null}
      <View style={styles.box_number}>
        <Text>{number}</Text>
      </View>
      <View style={styles.box_text}>
        {text.split("").map((char, index) => (
          <Text key={index}>{char}</Text>
        ))}
      </View>
    </View>
  );
}
