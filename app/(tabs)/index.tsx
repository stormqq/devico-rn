import {
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import { useMarketCoins } from "@/api/marketCoins";
import { useMemo, useState } from "react";
import { filterBySearchQuery } from "@/helpers/filterBySearchQuery";
import { FlashList } from "@shopify/flash-list";
import CoinItem from "@/components/coins/CoinItem";
import SearchBar from "@/components/SearchBar";
import { CoinMarkets } from "@/types/coinMarkets";
import { Theme } from "tamagui";

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState("");

  const { data, refetch, isLoading } = useMarketCoins();

  const filteredCoins = useMemo(() => {
    return filterBySearchQuery(data, searchQuery);
  }, [data, searchQuery]);

  // console.log("all coins:", data);
  // console.log("filtered coins:", filteredCoins);

  return (
    <SafeAreaView>
      <SearchBar handleSearch={setSearchQuery} />
      <Theme name='green'>
      </Theme>
      <View>
        <FlashList
          data={filteredCoins}
          renderItem={({ item }: { item: CoinMarkets }) => (
            <CoinItem coin={item} />
          )}
          refreshControl={
            <RefreshControl onRefresh={refetch} refreshing={isLoading} />
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
});
