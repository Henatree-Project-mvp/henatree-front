import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  SafeAreaView,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
//Import des couleurs
import colors from "../assets/colors";
const { yellow, blue, darkBlue, dark, errorColor, greyButton, greyFont } =
  colors;

//Import des datas
import categories from "../assets/categories.json";
import sortie from "../assets/sortie.json";

const PartCard = ({ username, age, userId }) => {
  return (
    <View style={styles.partCard}>
      <View style={styles.col1}>
        <Image
          style={styles.partAvatar}
          source={{
            uri: "https://res.cloudinary.com/lilycloud/image/upload/v1621869955/sorties/participant-prov_gjj1tp.jpg",
          }}
        />
      </View>
      <View style={styles.col2}>
        <Text style={styles.partName}>{username}</Text>
        {/* <Text style={styles.partInfos}>{age} ans</Text> */}
        <Text style={styles.partInfos}>Id: {userId}</Text>
      </View>
    </View>
  );
};

export default PartCard;

const styles = StyleSheet.create({
  partCard: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  partAvatar: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginRight: 20,
  },
  partInfos: {
    fontSize: 16,
    color: greyFont,
    fontWeight: "bold",
  },
  partName: {
    fontSize: 20,
    fontWeight: "bold",
    color: dark,
  },
});
