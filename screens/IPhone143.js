import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const IPhone143 = () => {
  return (
    <View style={[styles.iphone14350, styles.groupChildLayout]}>
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
        <View style={[styles.loginButton, styles.loginPosition]}>
          <View style={[styles.loginButtonChild, styles.childLayout]} />
          <Text style={[styles.submit, styles.submitFlexBox]}>Submit</Text>
        </View>
        <View style={[styles.enterYourEmailInput, styles.yourLayout]}>
          <View style={[styles.enterYourEmailInputChild, styles.yourLayout]} />
          <Text style={[styles.demoemailcom, styles.emailClr]}>
            demo@email.com
          </Text>
          <View style={[styles.rectangleGroup, styles.groupLayout]}>
            <View style={[styles.groupInner, styles.groupLayout]} />
            <Text style={[styles.email, styles.emailClr]}>Email</Text>
          </View>
        </View>
        <Text style={[styles.welcomeBackGlad, styles.emailClr]}>
          Forgot Password
        </Text>
        <Text style={[styles.provideYourAccount, styles.fingertipPosition]}>
          Provide your account email for which you want to reset your password
        </Text>
      </View>
      <View style={[styles.fingertipParent, styles.frameIconPosition]}>
        <Text style={[styles.fingertip, styles.fingertipPosition]}>
          Fingertip
        </Text>
        <Image
          style={[styles.frameIcon, styles.frameIconPosition]}
          resizeMode="cover"
          source={require("../assets/frame2.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
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
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  childLayout: {
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  submitFlexBox: {
    textAlign: "center",
    color: Color.colorGold,
  },
  yourLayout: {
    width: 366,
    left: 0,
  },
  emailClr: {
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  groupLayout: {
    height: 21,
    width: 56,
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
    left: "50%",
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
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  submit: {
    top: 18,
    left: 152,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mid,
    textAlign: "center",
    color: Color.colorGold,
    position: "absolute",
  },
  loginButton: {
    height: "21.4%",
    top: "78.6%",
    position: "absolute",
  },
  enterYourEmailInputChild: {
    top: 11,
    borderStyle: "solid",
    borderColor: Color.colorGold,
    borderWidth: 1.1,
    height: 61,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  demoemailcom: {
    top: 31,
    left: 19,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 21,
    fontSize: FontSize.size_mid,
  },
  groupInner: {
    left: 0,
    width: 56,
    backgroundColor: Color.colorWhite,
  },
  email: {
    left: 4,
    textAlign: "left",
    lineHeight: 21,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mid,
    top: 0,
  },
  rectangleGroup: {
    left: 12,
  },
  enterYourEmailInput: {
    top: 127,
    height: 72,
    position: "absolute",
  },
  welcomeBackGlad: {
    fontSize: FontSize.size_14xl,
    letterSpacing: -0.3,
    lineHeight: 36,
    textAlign: "left",
    width: 366,
    left: 0,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    top: 0,
  },
  provideYourAccount: {
    top: 60,
    color: Color.colorGray_100,
    alignItems: "flex-end",
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 21,
    fontSize: FontSize.size_mid,
    width: 366,
    left: 0,
  },
  loginButtonParent: {
    height: "31.81%",
    width: "88.41%",
    top: "31.81%",
    right: "5.8%",
    bottom: "36.38%",
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
  iphone14350: {
    flex: 1,
    overflow: "hidden",
    width: "100%",
    height: 896,
    backgroundColor: Color.colorWhite,
  },
});

export default IPhone143;
