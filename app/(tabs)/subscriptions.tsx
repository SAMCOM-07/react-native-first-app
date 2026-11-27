import { Text } from 'react-native';
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { styled } from "nativewind";

const SafeAreaView = styled(RNSafeAreaView);

const Subscriptions = () => {
  return (
    <SafeAreaView className="flex-1 bg-background p-6">
      <Text>Subscriptions</Text>
    </SafeAreaView>
  );
};

export default Subscriptions;