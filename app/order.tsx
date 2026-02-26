import { useState } from "react";
import { Alert, Button, FlatList, Modal, Text, TouchableOpacity, View } from "react-native";
import SearchBar from "../components/SearchBar";

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
    <View style = {{ backgroundColor: '#f8545b' }} >
    <SearchBar />

    <TouchableOpacity
        style={{
            backgroundColor: 'white',
            padding: 10,
            margin: 20,
            borderRadius: 5,
            alignItems: 'center'
        }}

    onPress={() => setModalVisible(true)}
    > 
        <Text style={{ color: '#f8545b', fontWeight: 'bold' }}>Show Modal</Text>
    </TouchableOpacity>

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
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              padding: 20,
              borderRadius: 10,
              width: 250,
            }}
          >
            <Text>This is a modal</Text>
            

            <Button
              title="Close Modal"
              onPress={() => {
                Alert.alert("Modal closed");
                setModalVisible(false);
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Orders;
      


