import { Text, View, StyleSheet, TextInput, Button, FlatList, Alert, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import { Card } from "@rneui/base";



export default function ProductDetail() {
    const [data, setData] = useState([]);
    const filePath = 'https://dummyjson.com/products/2';
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
                setData([d]);
                console.log(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <View>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <Card style={{ marginBottom: 10, marginTop: 10 }}>
                        <Text style={styles.detail}>Product Detail</Text>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Image source={{ uri: item.thumbnail }} />
                        <Text><Text style={styles.iT}>Description:</Text> {item.description}</Text>
                        <Text><Text style={styles.iT}>Category:</Text> {item.category}</Text>
                        <Text><Text style={styles.iTPrice}>Price:</Text> {item.price}$</Text>
                        <Text><Text style={styles.iT}>Discount:</Text> {item.discountPercentage}%</Text>
                        <Text><Text style={styles.iT}>Rating:</Text> {item.rating} starts</Text>
                        <Text><Text style={styles.iT}>Stock:</Text> {item.stock} units</Text>
                        <View style={{ flexDirection: "row", justifyContent: 'space-between', paddingLeft: 200 }}>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>Add</Text>
                            </TouchableOpacity>
                            
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>Delete</Text>
                            </TouchableOpacity>
                            
                        </View>

                    </Card>
                )}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        color: 'blue',
    },
    input: {

        borderColor: 'white',
        borderWidth: 1,
        paddingLeft: 10,

    },
    inputTitle: {

        fontSize: 15,
        fontWeight: 'bold',
    },
    detail: {
        paddingLeft: 5,
        margin: 10,
        fontSize: 10,
        fontWeight: 'bold',
        color: 'black'
    },
    iT: {
        fontWeight: 'bold',
    },
    iTPrice: {
        fontWeight: 'bold',
        color: 'red',
    },
    button: {
        // width: 250,
        backgroundColor: '#674EA4',
        borderRadius: 10,
        justifyContent: 'center',
        padding: 10,
    },
    buttonText: {
        color: 'white'
    }
});
