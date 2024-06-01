import { View, Image } from "@react-pdf/renderer";

import headerLogo from "../../static/images/pdf_headerLogo.png";
import { styles } from "./styles.js";

function HeaderLogo() {
  return (
    <View style={styles.logoContainer}>
      <View style={styles.logoContent}>
        <Image src={headerLogo} />
      </View>
    </View>
  );
}

export default HeaderLogo;
