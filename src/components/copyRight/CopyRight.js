import { View, Text, Image } from "@react-pdf/renderer";

import copyrightImage from "../../static/images/pdf_copyright.png";
import { styles } from "./style.js";

function CopyRight() {
  return (
    <View style={styles.copyright}>
      {/* <Text style={styles.copyright_text}>Copyright {`\xC2\xA9\xEF\xB8\x8F`} 2024 Salm Corp. All rights reserved.</Text> */}
      <View style={styles.copyright_image}>
        <Image src={copyrightImage}></Image>
      </View>
      <Text style={styles.copyright_text}>테스트 일시: 2024.04.01</Text>
    </View>
  );
}

export default CopyRight;
