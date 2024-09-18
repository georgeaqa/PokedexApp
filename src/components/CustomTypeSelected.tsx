import { Pressable, PressableProps, View } from "react-native";
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
      className={`items-center justify-center rounded-xl h-12 w-12 ${getBgType(
        type.name.toLowerCase()
      )}`}
    >
      <Pressable
        className="w-full h-full active:opacity-20 justify-center items-center"
        {...props}
      >
        <Icon name={type.name.toLowerCase()} width={34} />
      </Pressable>
    </View>
  );
}
