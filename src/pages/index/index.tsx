import { Component, PropsWithChildren, useState } from "react";
import { View, Text, Button } from "@tarojs/components";
import "./index.scss";

export default function Index() {
  const [count, setCount] = useState(0);
  return (
    <View className="index">
      <Text>Hello world!!</Text>
      <Button onClick={() => setCount(count + 1)}>Click me ({count})</Button>
    </View>
  );
}
