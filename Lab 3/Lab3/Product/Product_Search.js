import { Text, View, StyleSheet, TextInput, Button, FlatList, Alert } from "react-native";
import { useState } from "react";
import { Card } from "@rneui/base";






export default function searchProductView() {
    const [data, setData] = useState([]);
    const [value, setValue] = useState("");

    let filePath = 'https://dummyjson. com/products';

    const searchProduct = () => {
        if (value != '')
            filePath = 'https://dummyjson.com/products/search?q=' + value;
        // Alert.alert(filePath);
        fetch(filePath)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();

            })
            .then((d) => {
                setData(d.products);
                console.log(data);

            })
    };
    return (
        <View>
            <Text>Search Product</Text>
            <TextInput style={styles.input} placeholder="Enter the name" value={value} onChangeText={(text) => setValue(text)} />
            <Button title="Search" onPress={searchProduct} />

            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (

                    <Card style={{ marginBottom: 10, marginTop: 10}}>
                        <Text style={styles.detail}>Product Detail</Text>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Image source={{ uri: item.thumbnail }} />
                        <Text><Text style={styles.iT}>Description:</Text> {item.description}</Text>
                        <Text><Text style={styles.iT}>Category:</Text> {item.category}</Text>
                        <Text><Text style={styles.iTPrice}>Price:</Text> {item.price}$</Text>
                        <Text><Text style={styles.iT}>Discount:</Text> {item.discountPercentage}%</Text>
                        <Text><Text style={styles.iT}>Rating:</Text> {item.rating} starts</Text>
                        <Text><Text style={styles.iT}>Stock:</Text> {item.stock} units</Text>
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
    }
})