import { View, TextInput, KeyboardAvoidingView, Platform, StyleSheet } from "react-native";

const SearchBar = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.keyboardAvoid}
    >
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
  keyboardAvoid: {
    width: '100%',
  },
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