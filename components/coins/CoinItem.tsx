import React from "react";
import { CoinMarkets } from "@/types/coinMarkets";
import { Image, styled, Text, View, XStack, YStack } from "tamagui";

export const CoinItem = ({ coin }: { coin: CoinMarkets }) => {
  const isCoinPriceFalling = coin.ath_change_percentage.toString()[0] === "-";
  return (
    <Container>
      <Image
        source={{
          uri: coin.image,
          width: 50,
          height: 50,
        }}
      />
      <YStack>
        <Text fontSize={24} width={200}>{coin.name}</Text>
        <XStack gap={4}>
        <Text color='grey'>${coin.current_price}</Text>
        <Text color={isCoinPriceFalling ? "red" : "green"}>({coin.ath_change_percentage})</Text>
        </XStack>
      </YStack>

      <YStack ml="auto" alignItems="flex-end" justifyContent="space-around" height={'$5'}>
        <Text>{coin.ath}</Text>
        <Text color='grey'>${coin.high_24h}</Text>
      </YStack>
    </Container>
  );
};

export default CoinItem;

const Container = styled(View, {
  flexDirection: "row",
  gap: 10,
  padding: 15,
  alignItems: "center",
});
