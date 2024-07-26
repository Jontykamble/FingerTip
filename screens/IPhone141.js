import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const IPhone141 = () => {
  return (
    <View style={[styles.iphone1402, styles.iphone1402Layout]}>
      <View style={[styles.rectangleParent, styles.groupItemPosition]}>
        <View style={[styles.groupChild, styles.fingertipPosition1]} />
        <Image
          style={[styles.groupItem, styles.groupItemPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-212.png")}
        />
        <View style={styles.statusBar}>
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
      </View>
      <View style={styles.loginButtonParent}>
        <View style={styles.loginButton}>
          <View style={styles.loginButtonChild} />
          <Text style={[styles.login, styles.loginPosition]}>Login</Text>
        </View>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
        <View style={[styles.enterYourEmailInputParent, styles.enterLayout1]}>
          <View style={[styles.enterYourEmailInput, styles.enterLayout1]}>
            <View
              style={[styles.enterYourEmailInputChild, styles.enterLayout]}
            />
            <Text style={[styles.enterYourPassword, styles.enterTypo]}>
              Enter your password
            </Text>
            <Image
              style={[styles.fluenteye20FilledIcon, styles.loginPosition]}
              resizeMode="cover"
              source={require("../assets/fluenteye20filled.png")}
            />
          </View>
          <View style={[styles.rectangleGroup, styles.groupLayout]}>
            <View style={[styles.groupInner, styles.groupLayout]} />
            <Text style={[styles.password, styles.userIdTypo]}>Password</Text>
          </View>
        </View>
        <View style={[styles.enterYourEmailInput1, styles.enterLayout2]}>
          <View style={[styles.enterYourEmailInputItem, styles.enterLayout]} />
          <Text style={styles.demoemailcom}>demo@email.com</Text>
          <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
            <View style={[styles.rectangleView, styles.rectangleLayout]} />
            <Text style={[styles.userId, styles.userIdTypo]}>User ID</Text>
          </View>
        </View>
        <Text style={[styles.welcomeBackGlad, styles.enterLayout2]}>
          Welcome back! Glad to see you, Again!
        </Text>
        <Text
          style={[styles.enterYourUser, styles.fingertipPosition]}
        >{`Enter your User Id & Password
provided by admin`}</Text>
      </View>
      <View style={[styles.fingertipParent, styles.frameIconPosition]}>
        <Text style={[styles.fingertip, styles.fingertipPosition]}>
          Fingertip
        </Text>
        <Image
          style={[styles.frameIcon, styles.frameIconPosition]}
          resizeMode="cover"
          source={require("../assets/frame1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iphone1402Layout: {
    height: 896,
    backgroundColor: Color.colorWhite,
  },
  groupItemPosition: {
    width: 1936,
    left: "50%",
    position: "absolute",
  },
  fingertipPosition1: {
    left: "50%",
    top: "50%",
  },
  rightSideLayout: {
    height: 13,
    position: "absolute",
  },
  loginPosition: {
    height: 25,
    top: 18,
    position: "absolute",
  },
  enterLayout1: {
    height: 61,
    width: 366,
    left: 0,
    position: "absolute",
  },
  enterLayout: {
    borderWidth: 1.1,
    borderColor: Color.colorGold,
    borderStyle: "solid",
    height: 61,
    width: 366,
    left: 0,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  enterTypo: {
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 21,
    fontSize: FontSize.size_mid,
  },
  groupLayout: {
    height: 21,
    width: 84,
    position: "absolute",
  },
  userIdTypo: {
    lineHeight: 21,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mid,
    top: 0,
    position: "absolute",
  },
  enterLayout2: {
    width: 366,
    left: 0,
  },
  rectangleLayout: {
    width: 68,
    height: 21,
    top: 0,
    position: "absolute",
  },
  fingertipPosition: {
    display: "flex",
    position: "absolute",
  },
  frameIconPosition: {
    height: 90,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupChild: {
    marginTop: 402.5,
    marginLeft: -201,
    width: 414,
    position: "absolute",
    height: 896,
    backgroundColor: Color.colorWhite,
  },
  groupItem: {
    marginLeft: -968,
    height: 1936,
    top: 0,
  },
  batteryIcon: {
    right: 0,
    width: 27,
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
    top: 1701,
    right: 755,
    left: 767,
    height: 49,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleParent: {
    marginTop: -2149,
    marginLeft: -974,
    height: 2597,
    top: "50%",
    width: 1936,
  },
  loginButtonChild: {
    height: "100%",
    top: "0%",
    backgroundColor: Color.colorSteelblue,
    borderRadius: Border.br_11xl,
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  login: {
    left: 159,
    width: 48,
    textAlign: "center",
    color: Color.colorGold,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mid,
    height: 25,
    top: 18,
  },
  loginButton: {
    height: "13.99%",
    top: "86.01%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  forgotPassword: {
    top: 326,
    left: 223,
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    textAlign: "right",
    color: Color.colorBlack,
    position: "absolute",
  },
  enterYourEmailInputChild: {
    top: 0,
  },
  enterYourPassword: {
    top: 20,
    textAlign: "left",
    left: 19,
    color: Color.colorGray_100,
    position: "absolute",
  },
  fluenteye20FilledIcon: {
    left: 323,
    width: 25,
    height: 25,
    top: 18,
    overflow: "hidden",
  },
  enterYourEmailInput: {
    top: 0,
  },
  groupInner: {
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  password: {
    color: Color.colorLightslategray,
    textAlign: "left",
    left: 0,
  },
  rectangleGroup: {
    top: -11,
    left: 16,
    display: "none",
  },
  enterYourEmailInputParent: {
    top: 255,
  },
  enterYourEmailInputItem: {
    top: 11,
  },
  demoemailcom: {
    top: 31,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 21,
    left: 19,
    color: Color.colorBlack,
    fontSize: FontSize.size_mid,
    position: "absolute",
  },
  rectangleView: {
    left: 0,
    backgroundColor: Color.colorWhite,
  },
  userId: {
    left: 4,
    textAlign: "left",
    color: Color.colorBlack,
  },
  rectangleContainer: {
    left: 12,
  },
  enterYourEmailInput1: {
    top: 163,
    height: 72,
    position: "absolute",
  },
  welcomeBackGlad: {
    fontSize: FontSize.size_14xl,
    letterSpacing: -0.3,
    lineHeight: 36,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    top: 0,
    position: "absolute",
  },
  enterYourUser: {
    top: 96,
    alignItems: "flex-end",
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 21,
    fontSize: FontSize.size_mid,
    width: 366,
    left: 0,
  },
  loginButtonParent: {
    height: "48.66%",
    width: "88.41%",
    top: "31.81%",
    right: "5.8%",
    bottom: "19.53%",
    left: "5.8%",
    position: "absolute",
  },
  fingertip: {
    marginTop: -43.9,
    marginLeft: -101.7,
    fontSize: FontSize.size_47xl_4,
    fontFamily: FontFamily.churchwardLorina,
    alignItems: "center",
    justifyContent: "center",
    width: 285,
    height: 89,
    textAlign: "center",
    color: Color.colorGold,
    left: "50%",
    top: "50%",
  },
  frameIcon: {
    marginTop: -45,
    marginLeft: -183.5,
    width: 70,
    overflow: "hidden",
  },
  fingertipParent: {
    marginTop: -363,
    marginLeft: -184,
    width: 367,
  },
  iphone1402: {
    flex: 1,
    overflow: "hidden",
    width: "100%",
    height: 896,
  },
});

export default IPhone141;
