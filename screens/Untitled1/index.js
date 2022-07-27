import { ImageBackground } from "react-native";
import { Slider } from "react-native-elements";
import React from "react";
import { View } from "react-native";

const Untitled1 = () => {
  return <View style={{
    backgroundColor: '#f0f0f1',
    padding: 10,
    position: 'relative',
    height: '100%'
  }}>
      <Slider thumbStyle={{
      height: 20,
      width: 20
    }} thumbTintColor="#0000FF" maximumValue={8} minimumValue={0} style={{
      left: 31,
      top: 79,
      position: "absolute",
      width: 150,
      height: 40
    }} minimumTrackTintColor="#17d22a" maximumTrackTintColor="#9a2929" value={1}></Slider><ImageBackground source={{
      uri: "data:image/png;base64,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"
    }} resizeMode="cover" style={{
      left: 78,
      top: 179,
      position: "absolute",
      width: 107,
      height: 62
    }}></ImageBackground><View style={{
      left: 49,
      top: 24,
      position: "absolute",
      width: 80,
      height: 80,
      backgroundColor: "#E4E4E4",
      borderRadius: "50%"
    }}></View><View style={{
      left: 31,
      top: 245,
      position: "absolute",
      height: 60,
      width: 140,
      backgroundColor: "#E4E4E4",
      borderRadius: 0,
      color: "#777777"
    }}></View></View>;
};

export default Untitled1;