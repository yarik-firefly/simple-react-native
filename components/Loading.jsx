import React from "react";
import { View, ActivityIndicator } from "react-native";

const Loading = () => {
  return (
    <View style={{ justifyContent: "center", flex: 1 }}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default Loading;
