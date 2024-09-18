import { View, Text } from "react-native";
import { getBgType } from "@/src/constants/getColor";

interface CustomStatProps {
  statname: string;
  value: number | undefined;
  type: string | undefined;
}

export default function CustomStat({
  statname,
  value,
  type,
}: Partial<CustomStatProps>) {
  return (
    <View className={`flex-row gap-1 items-center p-1`}>
      <View className="w-[16%] flex-row gap-1 items-center justify-between">
        <Text className="w-full text-right">{statname}:</Text>
      </View>

      <View
        className={`h-1 ${getBgType(type?.toLowerCase())}`}
        style={{ width: value }}
      />
      <Text className="w-full">{value}</Text>
    </View>
  );
}
