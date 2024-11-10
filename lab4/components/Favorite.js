import 'react-native-gesture-handler';
import { useState, useEffect } from 'react';
import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ContactThum from './ContactThumb';


const keyExtractor = ({phone }) => phone;

const Favorites = ({navigation}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=50')
            .then(response => response.json())
            .then(data => setUsers(data.results))
            .catch(error => console.error(error));
    }, []);

    const renderFavoriteThumnail = ({ item }) => (
        <ContactThum
            user={item}
            onPress={() => navigation.navigate('UserDetail', { user: item })}
        />
    );
    return(
        <View style={styles.container}>
            <FlatList
                data={users}
                keyExtractor={keyExtractor}
                numColumns={3}
                contentContainerStyle={styles.list}
                renderItem={renderFavoriteThumnail}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'center',
        flex: 1,
        padding: 20
    },
    list: {
        alignItems: 'center',
    },
});

export default Favorites;
