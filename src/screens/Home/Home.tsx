import { Text, View } from "react-native";

import { BatLogo } from "../../components/BatLogo/BatLogo";
import { stylesBat } from "../../components/BatLogo/BatLogoStyles";
import { styles } from "./Style";
import { BatTextInput } from "../../components/BatTextInput/BatTextInput";
import { StatusBar } from "expo-status-bar";
import { BatButton } from "../../components/BatButton/BatButton";

export const Home = () => {
  return (
    <View style={styles.container}>
      <View style={stylesBat.logoContainer}>
        <BatLogo />
      </View>
      <View style={styles.containerInput}>
        <BatButton />
      </View>
      <StatusBar style="light" />
    </View>
  );
};
