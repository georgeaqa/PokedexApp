import { Pressable, PressableProps, View, Text } from "react-native";
import { getBgType } from "../constants/getColor";
import Icon from "@/src/assets/icons";

type CustomTypeSelectedProps = PressableProps & {
  type: any;
};

export default function CustomTypeSelected({
  type,
  ...props
}: Partial<CustomTypeSelectedProps>) {
  return (
    <View
      className={`items-center justify-center rounded-xl p-2 shadow-md shadow-black ${getBgType(
        type.name.toLowerCase()
      )}`}
    >
      <Pressable
        className="active:opacity-20 justify-center items-center"
        {...props}
      >
        <Icon name={type.name.toLowerCase()} width={34} />
        <Text className="text-xs text-white">{type.name}</Text>
      </Pressable>
    </View>
  );
}
