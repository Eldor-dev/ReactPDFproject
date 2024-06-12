import { View } from "@react-pdf/renderer";

import { styles } from "./styles.js";

function ContainerContent({ children }) {
  return <View style={styles.content}>{children}</View>;
}

export default ContainerContent;
