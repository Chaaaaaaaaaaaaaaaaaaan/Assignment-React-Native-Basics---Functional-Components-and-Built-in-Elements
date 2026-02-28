import { Alert, Button, FlatList, Modal, Text, TouchableOpacity, View, KeyboardAvoidingView } from "react-native";
import SearchBar from "../components/SearchBar";
import { useState } from "react";

const Orders = () => {

    const [modalVisible, setModalVisible] = useState(false);
  
    const orders = [
        {id: '1', item: 'PinkSelle' },
        {id: '2', item: 'OrangeSelle' },
        {id: '3', item: 'RedSelle' },
        {id: '4', item: 'BlackSelle' },
        {id: '5', item: 'BrownSelle' },
    ];

    return ( 
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <View style = {{ flex: 1, padding: 20, backgroundColor: '#f8545b' }} >
      <SearchBar />

      <FlatList
      data={orders}
      keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <View style={{ padding: 20, borderBottomWidth: 1, borderBlockColor:'fff' }}>
              <Text style ={{ color: 'white' }}>{item.item}</Text>
            </View>
          )}
      />
      
        <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}
                >
                  <View style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "rgba(0,0,0,0.5)",
                  }}>
                      <View style={{
                      backgroundColor: "white",
                      padding: 20,
                      borderRadius: 10,
                      width: 250,
                      alignItems: "center",
                      }}>

                      <Text style={{ fontSize: 18, marginBottom: 20 }}>This is a modal</Text>
                
                      <Button
                          title="Close Modal" onPress={() => {
                          Alert.alert("Modal closed");
                          setModalVisible(false);
                          }}  
                          color="#f8545b"
                      />
                      </View>
                  </View>
              </Modal>

              <View style={{ margin: 20 }}>
                  <Button
                      title="Show Modal"
                      onPress={() => setModalVisible(true)}
                      color="#ff959a"
                  />
              </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Orders;
      


