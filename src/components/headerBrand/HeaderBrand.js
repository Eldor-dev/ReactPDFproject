import { View, Image, Text } from "@react-pdf/renderer";

import headerLogo from "../../static/images/pdf_headerLogo.png";
import { styles } from "./styles.js";

function HeaderLogo() {
  return (
    <View style={styles.logoContainer}>
      <View style={styles.logoContent}>
        <Image src={headerLogo} />
      </View>
      <View style={styles.line} />
      <Text style={styles.logoText}>전성윤님의 결과 보고서</Text>
    </View>
  );
}

export default HeaderLogo;
