import { Text, SafeAreaView, StyleSheet, View, FlatList, Image, Button } from 'react-native';
import { useState, useEffect } from 'react';



export default function App() {
    const [data, setData] = useState([]);
    const filePath = 'https://dummyjson.com/products/';
    useEffect(() => {
        //Alert.alert(filePath);
        fetch(filePath)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((d) => {
                setData(d.products);
                // console.log(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    });
    return (
        <View>
            <Text style={styles.title}>Product List</Text>
            <FlatList
                data={data}
                // keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View  style={styles.row} >
                        <View style={{flex: 1.5}}>
                            <Image source={{ uri: item.thumbnail }} style={{ width: 120, height: 120 }} />
                        </View>
                        <View style={styles.eachItem}>
                            <Text style={styles.itemTitle}>{item.title}</Text>
                            
                            <Text><Text style={styles.iT}>Description:</Text> {item.description}</Text>
                            <Text><Text style={styles.iT}>Category:</Text> {item.category}</Text>
                            <Text><Text style={styles.iTPrice}>Price:</Text> {item.price}$</Text>
                            <Text><Text style={styles.iT}>Stock:</Text> {item.stock}</Text>
                            <View style={styles.rowButton}>
                                <Button title='Detail'/>
                                <Button title='Add'/>
                                <Button title='Delete'/>
                            </View>
                        </View>
                    </View>



                )}
            />


        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        marginBottom: 10,
        marginLeft: 10,
    },
    row: {
        flexDirection: 'row',
        margin: 5,
    },
    rowButton: {
        flexDirection: 'row',
        margin: 5,
        justifyContent: 'space-between'
    },
    eachItem: {
        marginBottom: 20,
        flex:2.5,
    }
    ,
    itemTitle: {
        fontSize: 18,
        fontWeight: 'bold', 
    },
    iT: {
       fontWeight:'bold', 
    },
    iTPrice: {
        fontWeight:'bold',
        color:'red', 
     }
});
