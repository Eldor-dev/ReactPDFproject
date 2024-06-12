import { View } from "@react-pdf/renderer";

import { styles } from "./styles.js";

function Container({ children }) {
  return <View style={styles.container}>{children}</View>;
}

export default Container;
