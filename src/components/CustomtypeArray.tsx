import { View, Text } from "react-native";
import { getBgType } from "@/src/constants/getColor";
import Icon from "@/src/assets/icons";

type CustomTypeArrayProps = {
  typeArray: string[];
};

export default function CustomTypeArray({ typeArray }: CustomTypeArrayProps) {
  return (
    <View className="flex-row gap-2">
      {typeArray.map((type: any, index: number) => (
        <View
          key={index}
          className={`flex-row gap-1 items-center p-1 rounded-md ${getBgType(
            type.toLowerCase()
          )}`}
        >
          <Icon name={type.toLowerCase()} color="#fff" width={15} />
          <Text className="text-xs text-white">{type}</Text>
        </View>
      ))}
    </View>
  );
}
