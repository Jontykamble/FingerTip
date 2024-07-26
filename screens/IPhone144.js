import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const IPhone144 = () => {
  return (
    <View style={styles.iphone1404}>
      <View style={styles.iphone1404Child} />
      <View style={[styles.iphone1404Item, styles.iphone1404ItemBg]} />
      <View style={[styles.statusBar, styles.statusBarPosition]}>
        <View style={[styles.rightSide, styles.rightSideLayout]}>
          <Image
            style={[styles.batteryIcon, styles.rightSideLayout]}
            resizeMode="cover"
            source={require("../assets/battery.png")}
          />
          <Image
            style={styles.wifiIcon}
            resizeMode="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={styles.mobileSignalIcon}
            resizeMode="cover"
            source={require("../assets/mobile-signal.png")}
          />
          <Image
            style={styles.recordingIndicatorIcon}
            resizeMode="cover"
            source={require("../assets/recording-indicator.png")}
          />
        </View>
        <Image
          style={styles.leftSideIcon}
          resizeMode="cover"
          source={require("../assets/left-side.png")}
        />
      </View>
      <View style={[styles.groupParent, styles.groupLayout1]}>
        <Image
          style={[styles.groupChild, styles.groupLayout1]}
          resizeMode="cover"
          source={require("../assets/group-20800.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
        <Text style={styles.fingertip}>Fingertip</Text>
      </View>
      <Text style={[styles.dashboard, styles.reportTypo]}>Dashboard</Text>
      <LinearGradient
        style={[styles.iphone1404Inner, styles.innerBorder]}
        locations={[0, 1]}
        colors={["rgba(255, 204, 0, 0)", "#ffcc00"]}
        useAngle={true}
        angle={270}
      />
      <Image
        style={styles.maskGroupIconPosition}
        resizeMode="cover"
        source={require("../assets/mask-group.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.iphone1404ChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={[styles.iphone1404Child1, styles.iphone1404ChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <Image
        style={[styles.iphone1404Child2, styles.iphone1404ChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <Text style={[styles.report, styles.reportTypo]}>Report</Text>
      <Text style={[styles.report1, styles.reportTypo]}>Report</Text>
      <View style={[styles.rectangleParent, styles.groupLayout]}>
        <View style={styles.groupItem} />
        <LinearGradient
          style={[styles.groupInner, styles.groupLayout]}
          locations={[0, 1]}
          colors={["rgba(255, 204, 0, 0)", "#ffcc00"]}
          useAngle={true}
          angle={180}
        />
        <Image
          style={[styles.groupIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/group-20845.png")}
        />
        <Text style={[styles.salesReport, styles.salesReportTypo]}>
          Sales Report
        </Text>
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={styles.groupItem} />
        <LinearGradient
          style={[styles.groupInner, styles.groupLayout]}
          locations={[0, 1]}
          colors={["rgba(255, 204, 0, 0)", "#ffcc00"]}
          useAngle={true}
          angle={180}
        />
        <Text style={[styles.executiveSee, styles.salesReportTypo]}>
          Executive See
        </Text>
        <Image
          style={[styles.vectorIcon1, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
      </View>
      <View style={styles.loginButton}>
        <View style={[styles.loginButtonChild, styles.iphone1404ItemBg]} />
        <Text style={styles.generateNewQuote}>Generate new quote</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iphone1404ItemBg: {
    backgroundColor: Color.colorSteelblue,
    position: "absolute",
  },
  statusBarPosition: {
    right: 0,
    top: 0,
  },
  rightSideLayout: {
    height: 13,
    position: "absolute",
  },
  groupLayout1: {
    height: 43,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  reportTypo: {
    textAlign: "left",
    color: Color.colorSteelblue,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textTransform: "capitalize",
    letterSpacing: -0.6,
    fontSize: FontSize.size_11xl,
    left: 24,
    position: "absolute",
  },
  innerBorder: {
    backgroundColor: "transparent",
    borderWidth: 0.3,
    borderColor: Color.colorGold,
    borderStyle: "solid",
    borderRadius: Border.br_xl,
  },
  iphone1404ChildLayout: {
    height: 10,
    width: 10,
    top: 357,
    position: "absolute",
  },
  groupLayout: {
    height: 146,
    width: 175,
    position: "absolute",
  },
  salesReportTypo: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    letterSpacing: -0.4,
    top: 101,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    color: Color.colorSteelblue,
    textTransform: "capitalize",
    textAlign: "center",
    position: "absolute",
  },
  iphone1404Child: {
    marginTop: -448,
    marginLeft: -207,
    width: 414,
    left: "50%",
    top: "50%",
    position: "absolute",
    height: 896,
    backgroundColor: Color.colorWhite,
  },
  iphone1404Item: {
    borderBottomRightRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_xl,
    height: 127,
    left: 0,
    top: 0,
    width: 414,
  },
  batteryIcon: {
    width: 27,
    right: 0,
    top: 0,
  },
  wifiIcon: {
    width: 17,
    height: 12,
  },
  mobileSignalIcon: {
    width: 19,
    height: 12,
  },
  recordingIndicatorIcon: {
    top: -10,
    right: 62,
    width: 7,
    height: 7,
    display: "none",
    position: "absolute",
  },
  rightSide: {
    top: 19,
    right: 16,
    width: 74,
  },
  leftSideIcon: {
    top: 13,
    left: 22,
    width: 60,
    height: 23,
    position: "absolute",
  },
  statusBar: {
    height: 49,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  groupChild: {
    left: 323,
    width: 43,
    top: 0,
  },
  vectorIcon: {
    height: "33.26%",
    width: "5.93%",
    top: "34.88%",
    right: "94.07%",
    bottom: "31.86%",
    left: "0%",
  },
  fingertip: {
    marginTop: -17.5,
    marginLeft: -141,
    fontSize: 27,
    fontFamily: FontFamily.churchwardLorina,
    textAlign: "center",
    color: Color.colorGold,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupParent: {
    top: 64,
    width: 366,
    height: 43,
    left: 24,
  },
  dashboard: {
    top: 137,
  },
  iphone1404Inner: {
    height: 153,
    top: 192,
    width: 366,
    left: 24,
    position: "absolute",
  },
  maskGroupIconPosition: {
    height: 153,
    top: 192,
    width: 366,
    left: 24,
    position: "absolute",
  },
  ellipseIcon: {
    left: 182,
  },
  iphone1404Child1: {
    left: 202,
  },
  iphone1404Child2: {
    left: 222,
  },
  report: {
    top: 382,
  },
  report1: {
    top: 613,
  },
  groupItem: {
    height: 106,
    width: 175,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  groupInner: {
    backgroundColor: "transparent",
    borderWidth: 0.3,
    borderColor: Color.colorGold,
    borderStyle: "solid",
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  groupIcon: {
    height: "38.36%",
    width: "25.14%",
    top: "17.12%",
    right: "37.71%",
    bottom: "44.52%",
    left: "37.14%",
  },
  salesReport: {
    left: 26,
    width: 123,
  },
  rectangleParent: {
    top: 447,
    height: 146,
    left: 24,
  },
  executiveSee: {
    left: 21,
    width: 133,
  },
  vectorIcon1: {
    height: "30.82%",
    width: "31.43%",
    top: "20.55%",
    right: "34.29%",
    bottom: "48.63%",
    left: "34.29%",
  },
  rectangleGroup: {
    left: 215,
    top: 447,
    height: 146,
  },
  loginButtonChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    borderRadius: Border.br_11xl,
    left: "0%",
    width: "100%",
    backgroundColor: Color.colorSteelblue,
  },
  generateNewQuote: {
    top: 15,
    left: 69,
    width: 228,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    textAlign: "center",
    color: Color.colorGold,
    position: "absolute",
  },
  loginButton: {
    height: "6.7%",
    width: "88.41%",
    top: "76.79%",
    right: "5.8%",
    bottom: "16.52%",
    left: "5.8%",
    position: "absolute",
  },
  iphone1404: {
    flex: 1,
    overflow: "hidden",
    height: 896,
    backgroundColor: Color.colorWhite,
    width: "100%",
  },
});

export default IPhone144;
