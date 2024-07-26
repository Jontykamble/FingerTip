import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const IPhone14 = () => {
  return (
    <View style={styles.iphone1401}>
      <View style={[styles.iphone1401Child, styles.frameIconPosition]} />
      <View style={styles.groupParent}>
        <View style={styles.groupContainer}>
          <View style={styles.groupChildPosition}>
            <View style={[styles.groupChild, styles.groupChildPosition]} />
            <View style={styles.groupItem} />
          </View>
          <Text style={[styles.completed, styles.completedPosition]}>
            85% completed
          </Text>
        </View>
        <Image
          style={styles.groupInner}
          resizeMode="cover"
          source={require("../assets/group-20678.png")}
        />
      </View>
      <Text style={[styles.fingertip, styles.completedPosition]}>
        Fingertip
      </Text>
      <Image
        style={[styles.frameIcon, styles.frameIconPosition]}
        resizeMode="cover"
        source={require("../assets/frame.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameIconPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupChildPosition: {
    height: 12,
    left: 0,
    top: 0,
    width: 334,
    position: "absolute",
  },
  completedPosition: {
    textAlign: "center",
    color: Color.colorGold,
    left: "50%",
    position: "absolute",
  },
  iphone1401Child: {
    marginTop: -448,
    marginLeft: -207,
    backgroundColor: Color.colorSteelblue,
    width: 414,
    height: 896,
  },
  groupChild: {
    borderRadius: 46,
    backgroundColor: Color.colorWhite,
  },
  groupItem: {
    top: 2,
    left: 2,
    borderRadius: 4,
    backgroundColor: Color.colorGold,
    width: 278,
    height: 8,
    position: "absolute",
  },
  completed: {
    marginLeft: -64,
    top: 19,
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
  },
  groupContainer: {
    left: 0,
    top: 0,
    height: 43,
    width: 334,
    position: "absolute",
  },
  groupInner: {
    height: "574.19%",
    width: "88.74%",
    top: "-643.95%",
    right: "5.57%",
    bottom: "169.77%",
    left: "5.69%",
    maxWidth: "100%",
    maxHeight: "100%",
    display: "none",
    position: "absolute",
    overflow: "hidden",
  },
  groupParent: {
    top: 565,
    left: 40,
    height: 43,
    width: 334,
    position: "absolute",
  },
  fingertip: {
    marginTop: -28,
    marginLeft: -167.2,
    fontSize: 78,
    fontFamily: FontFamily.churchwardLorina,
    top: "50%",
    textAlign: "center",
    color: Color.colorGold,
  },
  frameIcon: {
    marginTop: -195,
    marginLeft: -61.7,
    width: 124,
    height: 159,
    overflow: "hidden",
  },
  iphone1401: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 896,
    backgroundColor: Color.colorWhite,
  },
});

export default IPhone14;
