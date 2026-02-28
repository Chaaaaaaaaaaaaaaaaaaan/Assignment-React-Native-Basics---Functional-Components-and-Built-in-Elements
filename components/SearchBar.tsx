import { View, TextInput, KeyboardAvoidingView, StyleSheet } from "react-native";

const SearchBar = () => {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="🔍 Search..."
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#eee",
  },
  input: {
    backgroundColor: 'white',
    padding: 8,
  },
});

export default SearchBar;
