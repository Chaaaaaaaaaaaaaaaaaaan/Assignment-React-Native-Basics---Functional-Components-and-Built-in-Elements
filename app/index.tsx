import { Image, ScrollView, Text, View, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import SearchBar from "../components/SearchBar"; 
import { useRouter } from "expo-router";

const Home = () => {
  const router = useRouter();

  return (
    <ScrollView style={{ flex: 1, padding: 20, backgroundColor: '#f8545b' }}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <SearchBar />
        <View style={{ alignItems: 'center' }}>
          
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

          <TouchableOpacity style={{
              backgroundColor: 'white',
              padding: 10,
              alignItems: 'center',
              width: '80%',
              margin: 20}}
              onPress={() => router.push("/order")} activeOpacity={0.8}>
              <Text style={{ color: '#f8545b' }}>GO TO ORDERS</Text>
            </TouchableOpacity>

        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default Home;
