import React, { useState } from 'react';
import { details } from './details';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../responsive';
import LottieView from 'lottie-react-native';
import {Text, StyleSheet, FlatList, Image, TextInput, StatusBar, TouchableOpacity,Modal,View } from 'react-native';



const Donor = () => {
  const ItemPreview = ({ item, onClose }) => {
    return (
      <Modal animationType="slide" transparent={false} visible={true} onRequestClose={()=>{ setSelectedItem(null)}}>
        <View style={st.container}>
          <Image source={{ uri: item.image }} style={st.image} />
          <View style={st.textContainer}>
            <Text style={st.name}>{item.name}</Text>
            <Text style={st.count}>Count: {item.count}</Text>
            <Text style={st.address}>{item.address}</Text>
          </View>
          <TouchableOpacity style={st.closeButton} onPress={onClose}>
            <Text style={st.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  };
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(details);
  const [selectedItem, setSelectedItem] = useState(null);



    const filterData = (text) => {
    const filtered = details.filter(
      (item) =>
        item.name.toLowerCase().includes(text.toLowerCase()) 
    );
    console.log(searchTerm)
    if(filtered.length ==0 &&  text.length != 0){
    setFilteredData(filtered);
    }else if(text.length != 0){
      setFilteredData(filtered);
    }else{
      setFilteredData(details);
    }
  };

  // const filterData = (text) => {
  //   const filtered = details.filter(
  //     (item) => item.name.toLowerCase().includes(text.toLowerCase())
  //   );
  //   if(filtered.length != 0 ){
  //     setFilteredData(filterData)
  //   }else if(text.length == 0){
  //     setFilteredData(details)
  //   }else{
  //     setFilteredData(filtered)
  //   }
  //   //setFilteredData(filtered.length == 0 && text.length != 0 ? filtered : details);
  // };

  const openPreview = (item) => {
    setSelectedItem(item);
  };

  const closePreview = () => {
    setSelectedItem(null);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => openPreview(item)}>
      <View style={styles.itemContainer}>
        <View style={{ elevation: 100 }}>
          <Image source={{ uri: item.image }} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.count}>Count: {item.count}</Text>
          <Text style={styles.address}>{item.address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'white'} />
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search by name "
          onChangeText={(text) => {
            setSearchTerm(text);
            filterData(text);
          }}
          value={searchTerm}
        />
        <LottieView
          autoPlay
          loop
          source={require('../../json/search.json')}
          style={[{ height: responsiveHeight(5), width: responsiveWidth(7), left: responsiveWidth(-9) }]}
        />
      </View>

      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />

      {selectedItem && <ItemPreview item={selectedItem} onClose={closePreview} />}
    </View>
  );
};

const st = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: responsiveWidth(80),
    height: responsiveHeight(50),
    borderRadius: 10,
  },
  textContainer: {
    padding: 20,
    alignItems: 'center',
  },
  name: {
    fontSize: responsiveFontSize(3.5),
    fontWeight: 'bold',
    color: 'black',
  },
  count: {
    fontSize: responsiveFontSize(2.2),
  },
  address: {
    fontSize: responsiveFontSize(2.2),
  },
  closeButton: {
    position: 'absolute',
    top: responsiveHeight(2),
    right: responsiveWidth(2),
    padding: 10,
  },
  closeButtonText: {
    fontSize: responsiveFontSize(2),
    color: 'blue',
  },
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor:'white',
   
  },
  searchInput: {
    height: responsiveHeight(5.5),
    borderColor: 'darkgrey',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor:'darkgrey',
    width:responsiveWidth(95)
  },
  itemContainer: {
    height:responsiveHeight(20),
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 10,
  },
  image: {
    width: responsiveWidth(30),
    height: responsiveHeight(16),
    marginRight: 10,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: responsiveFontSize(3.5),
    fontWeight: 'bold',
    color:'black'
  },
  count: {
    fontSize: responsiveFontSize(2.2),
  },
  address: {
    fontSize: responsiveFontSize(2.2)
  },
});

export default Donor;




