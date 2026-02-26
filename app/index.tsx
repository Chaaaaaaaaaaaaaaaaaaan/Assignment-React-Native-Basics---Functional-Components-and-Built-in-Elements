import { useRouter } from "expo-router";
import { Button, Image, ScrollView, Text, View } from "react-native";
import SearchBar from "../components/SearchBar"; // Path matches your folder structure

const Home = () => {
  const router = useRouter();

  return (
    <ScrollView style={{ backgroundColor: '#f8545b' }}>
      <View style={{ alignItems: 'center' }}>
        <SearchBar />
        <Text style={{ 
          textAlign: 'center', 
          marginVertical: 20, 
          fontSize: 32, 
          fontWeight: 'bold', 
          color: 'white' 
        }}>
          Home Screen
        </Text>

        <Image
          source={{ uri: 'https://a-static.besthdwallpaper.com/aespa-s-giselle-in-hot-mess-mv-shoot-wallpaper-2560x1600-125742_7.jpg' }}
          style={{ width: 500, height: 250, marginBottom: 30 }}
        />

        <View style={{
          backgroundColor: 'white',
          borderRadius: 20,
          padding: 15,
          width: '10%',
          marginTop: 10,
          alignItems: 'center'
        }}>
          <Button
            title="GO TO ORDERS"
            onPress={() => router.push("/order")}
            color="#f8545b"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;